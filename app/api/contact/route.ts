function getField(formData: FormData, fieldName: string) {
  return `${formData.get(fieldName) ?? ""}`.trim();
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const branch = getField(formData, "branch");
  const requirements = getField(formData, "requirements");
  const customerName = getField(formData, "customer-name");
  const customerEmail = getField(formData, "customer-email");

  if (!branch || !requirements || !customerName || !customerEmail) {
    return Response.json(
      {
        success: false,
        message: "Vyplňte všetky povinné polia formulára."
      },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(customerEmail)) {
    return Response.json(
      {
        success: false,
        message: "Zadajte platnú emailovú adresu."
      },
      { status: 400 }
    );
  }

  return Response.json(
    {
      success: false,
      message:
        "Frontend formulára je pripravený, ale odosielanie emailov treba ešte pripojiť na SMTP alebo inú mail službu."
    },
    { status: 501 }
  );
}
