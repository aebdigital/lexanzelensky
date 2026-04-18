<?php
// Simple PHP mail version - based on your working template
// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    die(json_encode(['success' => false, 'message' => 'Method not allowed']));
}

// Set content type
header('Content-Type: application/json');

// Get form data (adapted for LEXAN form field names)
$branch = trim($_POST['branch'] ?? '');
$requirements = trim($_POST['requirements'] ?? '');
$customerName = trim($_POST['customer-name'] ?? '');
$customerEmail = trim($_POST['customer-email'] ?? '');
$customerPhone = trim($_POST['customer-phone'] ?? '');

// Basic validation
if (empty($branch) || empty($requirements) || empty($customerName) || empty($customerEmail)) {
    http_response_code(400);
    die(json_encode(['success' => false, 'message' => 'Vyplňte všetky povinné polia (pobočka, požiadavky, meno, email).']));
}

if (!filter_var($customerEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    die(json_encode(['success' => false, 'message' => 'Neplatný email formát.']));
}

// Handle file uploads
$attachments = [];
if (!empty($_FILES['files']['name'][0])) {
    $maxFileSize = 10 * 1024 * 1024; // 10MB
    $allowedTypes = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx', 'txt'];
    
    for ($i = 0; $i < count($_FILES['files']['name']); $i++) {
        if ($_FILES['files']['error'][$i] == UPLOAD_ERR_OK) {
            $fileName = $_FILES['files']['name'][$i];
            $fileSize = $_FILES['files']['size'][$i];
            $fileTmpName = $_FILES['files']['tmp_name'][$i];
            $fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
            
            // Validate file
            if ($fileSize > $maxFileSize) {
                http_response_code(400);
                die(json_encode(['success' => false, 'message' => "Súbor $fileName je príliš veľký (max 10MB)."]));
            }
            
            if (!in_array($fileType, $allowedTypes)) {
                http_response_code(400);
                die(json_encode(['success' => false, 'message' => "Súbor $fileName má nepovolený formát."]));
            }
            
            // Read file content
            $fileContent = file_get_contents($fileTmpName);
            if ($fileContent !== false) {
                $attachments[] = [
                    'name' => $fileName,
                    'content' => $fileContent,
                    'type' => mime_content_type($fileTmpName) ?: 'application/octet-stream'
                ];
            }
        }
    }
}

// Branch names for subject
$branchNames = [
    'trnava' => 'LEXAN Trnava',
    'senec' => 'LEXAN Senec', 
    'piestany' => 'LEXAN Piešťany'
];

$branchName = $branchNames[$branch] ?? 'LEXAN';

// Branch-specific email addresses
$branchEmails = [
    'trnava' => 'zelenskystefan@gmail.com',
    'senec' => 'zelenskysenec@gmail.com',
    'piestany' => 'zelenskypiestany@gmail.com'
];

$to = $branchEmails[$branch] ?? 'zelenskystefan@gmail.com';
$email_subject = 'Nová požiadavka z LEXAN kontaktného formulára - ' . $branchName;

// Create email content
if (!empty($attachments)) {
    // Email with attachments - use MIME format
    $boundary = md5(time());
    
    $headers = "From: web@lexanzelensky.sk\r\n";
    $headers .= "Reply-To: $customerEmail\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    
    // Email body
    $email_body = "--$boundary\r\n";
    $email_body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $email_body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    
    $email_body .= "Nová požiadavka z LEXAN kontaktného formulára\n\n";
    $email_body .= "Pobočka: $branchName\n";
    $email_body .= "Meno: $customerName\n";
    $email_body .= "Email: $customerEmail\n";
    if (!empty($customerPhone)) $email_body .= "Telefón: $customerPhone\n";
    $email_body .= "Požiadavky: $requirements\n\n";
    $email_body .= "Čas odoslania: " . date('d.m.Y H:i:s') . "\n";
    $email_body .= "Odoslané cez: lexanzelensky.sk\n\n";
    $email_body .= "Prílohy: " . count($attachments) . " súbor(ov)\r\n\r\n";
    
    // Add attachments
    foreach ($attachments as $attachment) {
        $email_body .= "--$boundary\r\n";
        $email_body .= "Content-Type: {$attachment['type']}; name=\"{$attachment['name']}\"\r\n";
        $email_body .= "Content-Transfer-Encoding: base64\r\n";
        $email_body .= "Content-Disposition: attachment; filename=\"{$attachment['name']}\"\r\n\r\n";
        $email_body .= chunk_split(base64_encode($attachment['content'])) . "\r\n";
    }
    
    $email_body .= "--$boundary--\r\n";
    
} else {
    // Simple text email without attachments
    $headers = "From: web@lexanzelensky.sk\r\n";
    $headers .= "Reply-To: $customerEmail\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $email_body = "Nová požiadavka z LEXAN kontaktného formulára\n\n";
    $email_body .= "Pobočka: $branchName\n";
    $email_body .= "Meno: $customerName\n";
    $email_body .= "Email: $customerEmail\n";
    if (!empty($customerPhone)) $email_body .= "Telefón: $customerPhone\n";
    $email_body .= "Požiadavky: $requirements\n\n";
    $email_body .= "Čas odoslania: " . date('d.m.Y H:i:s') . "\n";
    $email_body .= "Odoslané cez: lexanzelensky.sk";
}

// Try to send email
if (mail($to, $email_subject, $email_body, $headers)) {
    $message = 'Správa bola úspešne odoslaná do pobočky ' . $branchName . '. Ďakujeme za kontakt!';
    if (!empty($attachments)) {
        $message .= ' Prílohy (' . count($attachments) . ') boli úspešne pripojené.';
    }
    echo json_encode([
        'success' => true, 
        'message' => $message
    ]);
} else {
    error_log("Mail sending failed for: $customerName <$customerEmail>");
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Nepodarilo sa odoslať správu. Skúste to prosím neskôr alebo nás kontaktujte priamo na telefónne číslo pobočky.'
    ]);
}
?>