// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Load global navigation
    loadGlobalNavigation();
    
    // Load global footer
    loadGlobalFooter();
    
    // Load global navigation function
    function loadGlobalNavigation() {
        const navContainer = document.getElementById('global-nav');
        if (navContainer) {
            // Determine if we're in a subdirectory (projects folder)
            const isProjectPage = window.location.pathname.includes('/projects/');
            const pathPrefix = isProjectPage ? '../' : '';
            
            // Get current page for active state
            const currentPath = window.location.pathname;
            const currentPage = currentPath.split('/').pop().toLowerCase();
            
            const navHTML = `
    <!-- Scroll Progress Indicator -->
    <div class="scroll-progress">
        <div class="scroll-progress-bar"></div>
    </div>

    <!-- Transparent Navigation -->
    <nav class="navbar navbar-transparent">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="${pathPrefix}" class="logo-link">
                    <img src="${pathPrefix}new.png" alt="LEXAN" class="logo-image">
                </a>
            </div>
            <ul class="nav-menu">
                <li><a href="${pathPrefix}" class="nav-link${currentPage === 'index.html' || currentPage === '' ? ' active' : ''}">Domov</a></li>
                <li><a href="${pathPrefix}o-nas" class="nav-link${currentPage === 'o-nas.html' ? ' active' : ''}">O nás</a></li>
                <li><a href="${pathPrefix}produkty" class="nav-link${currentPage === 'produkty.html' ? ' active' : ''}">Produkty</a></li>
                <li><a href="${pathPrefix}sluzby" class="nav-link${currentPage === 'sluzby.html' || isProjectPage ? ' active' : ''}">SLUŽBY</a></li>
                <li><a href="${pathPrefix}blog" class="nav-link${currentPage === 'blog.html' ? ' active' : ''}">BLOG</a></li>
                <li><a href="${pathPrefix}kontakt" class="nav-link${currentPage === 'kontakt.html' ? ' active' : ''}">Kontakt</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>`;
            
            navContainer.innerHTML = navHTML;
            
            // Initialize scroll effects after navigation is loaded
            initializeScrollEffects();
        }
    }
    
    // Initialize scroll effects for navigation
    function initializeScrollEffects() {
        const navbar = document.querySelector('.navbar');
        const logo = document.querySelector('.logo-image');
        const scrollProgressBar = document.querySelector('.scroll-progress-bar');
        
        if (!navbar) return;
        
        // Scroll effect for navbar
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY > 50;
            
            // Update navbar classes
            if (scrolled) {
                navbar.classList.remove('navbar-transparent');
                navbar.classList.add('navbar-fixed');
                // Change logo to logo2.png when navbar is active/white
                if (logo) {
                    const isProjectPage = window.location.pathname.includes('/projects/');
                    const pathPrefix = isProjectPage ? '../' : '';
                    logo.src = pathPrefix + 'logo2.png';
                }
            } else {
                navbar.classList.remove('navbar-fixed');
                navbar.classList.add('navbar-transparent');
                // Change logo back to new.png when navbar is transparent
                if (logo) {
                    const isProjectPage = window.location.pathname.includes('/projects/');
                    const pathPrefix = isProjectPage ? '../' : '';
                    logo.src = pathPrefix + 'new.png';
                }
            }
            
            // Update progress bar
            if (scrollProgressBar) {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                scrollProgressBar.style.height = scrolled + '%';
            }
        });
        
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                navbar.classList.toggle('mobile-menu-open');
                
                // Change logo when mobile menu is open
                if (logo) {
                    const isProjectPage = window.location.pathname.includes('/projects/');
                    const pathPrefix = isProjectPage ? '../' : '';
                    
                    if (navbar.classList.contains('mobile-menu-open')) {
                        logo.src = pathPrefix + 'logo2.png';
                    } else {
                        // Return to appropriate logo based on scroll state
                        const scrolled = window.scrollY > 50;
                        logo.src = pathPrefix + (scrolled ? 'logo2.png' : 'new.png');
                    }
                }
            });
            
            // Close menu when clicking nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    navbar.classList.remove('mobile-menu-open');
                    
                    // Reset logo when menu closes
                    if (logo) {
                        const isProjectPage = window.location.pathname.includes('/projects/');
                        const pathPrefix = isProjectPage ? '../' : '';
                        const scrolled = window.scrollY > 50;
                        logo.src = pathPrefix + (scrolled ? 'logo2.png' : 'new.png');
                    }
                });
            });
        }
    }
    
    // Load global footer function
    function loadGlobalFooter() {
        const footerContainer = document.getElementById('global-footer');
        if (footerContainer) {
            const footerHTML = `
<footer id="footer" class="footer">
    <div class="container">
        <div class="footer-top">
            <div class="footer-cta-content">
                <h2>Potrebujete poradenstvo s polykarbonátmi?</h2>
                <p>Kontaktujte nás a my Vám radi poradíme</p>
            </div>
            <div class="footer-cta-button">
                <a href="kontakt.html" class="footer-btn">KONTAKT</a>
            </div>
        </div>
        
        <div class="footer-divider"></div>
        
        <div class="footer-content">
            <div class="footer-section footer-contact">
                <h3>LEXAN Zelenský s.r.o.</h3>
                <p>Novomestská ulica 9514/9<br>917 01 Trnava<br>Slovenská republika</p>
                    <p><strong>IČO:</strong> 51 655 632
                    <br><strong>DIČ:</strong> 2120754812
                    <br><strong>IČ DPH:</strong> SK2120754812</p>
                <p><strong>TEL:</strong> <a href="tel:+421 905 387 356">+421 905 387 356</a></p>
                <p><strong>Email:</strong> <a href="mailto:zelenskystefan@gmail.com">zelenskystefan@gmail.com</a></p>
            </div>
            
            <div class="footer-section footer-navigation">
                <div class="footer-nav-column">
                    <h4>Navigácia</h4>
                    <ul>
                        <li><a href="">Domov</a></li>
                        <li><a href="o-nas">O nás</a></li>
                        <li><a href="produkty">Produkty</a></li>
                        <li><a href="sluzby">Služby</a></li>
                        <li><a href="kontakt">Kontakt</a></li>
                    </ul>
                </div>
                <div class="footer-nav-column">
                    <h4>Produkty</h4>
                    <ul>
                        <li><a href="produkty?service=dutinkove-polykarbonaty">Dutinkové polykarbonáty</a></li>
                        <li><a href="produkty?service=plne-polykarbonaty">Plné polykarbonáty</a></li>
                        <li><a href="produkty?service=hpl-bond-dosky">HPL a Bond dosky</a></li>
                        <li><a href="produkty?service=prislusenstvo">Príslušenstvo</a></li>
                        <li><a href="produkty?service=trapezy-vlnovky">Trapézy a Vlnovky</a></li>
                        <li><a href="produkty?service=skleniky">Skleníky</a></li>
                    </ul>
                </div>
                <div class="footer-nav-column">
                    <h4>Právne informácie</h4>
                    <ul>
                        <li><a href="#" onclick="openPrivacyModal(event)">Ochrana osobných údajov</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="footer-social">
                <span><a href="https://www.aebdigital.com/" target="_blank">Tvorba stránky - <u>AEB Digital</u></a></span>
                
            </div>
            <div class="footer-copyright">
                <p>&copy; 2025 LEXAN s.r.o.</p>
            </div>
        </div>
    </div>
</footer>

<!-- Privacy Policy Modal -->
<div id="privacy-modal" class="privacy-modal">
    <div class="privacy-modal-overlay" onclick="closePrivacyModal()"></div>
    <div class="privacy-modal-content">
        <div class="privacy-modal-header">
            <h2>Ochrana osobných údajov</h2>
            <button class="privacy-modal-close" onclick="closePrivacyModal()">&times;</button>
        </div>
        <div class="privacy-modal-body">
            <p><strong>LEXAN Zelenský s.r.o.</strong><br>
            Novomestská ulica 9514/9<br>
            917 01 Trnava<br>
            Slovenská republika<br>
            IČO: 51 655 632<br>
            DIČ: 2120754812<br>
            IČ DPH: SK2120754812<br>
            E-mail: zelenskystefan@gmail.com<br>
            Tel.: +421 905 504 756</p>

            <p>Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>

            <h3>I. Kontaktný formulár</h3>
            <p>Na stránke prevádzkujeme kontaktný formulár ktorého účelom je umožniť vám:</p>
            <ul>
                <li>Položiť otázku k našim produktom a službám</li>
                <li>Požiadať o cenovú ponuku</li>
            </ul>

            <p><strong>Rozsah spracúvaných údajov:</strong></p>
            <ul>
                <li>Meno a priezvisko</li>
                <li>E-mailová adresa</li>
                <li>Telefónne číslo</li>
                <li>Správu</li>
            </ul>

            <p><strong>Účel spracovania:</strong><br>
            Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>

            <p><strong>Právny základ:</strong><br>
            Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>

            <p><strong>Doba uchovávania:</strong><br>
            Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>

            <h3>II. Súbory cookies</h3>
            <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
            <ul>
                <li>Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                <li>Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
            </ul>

            <p><strong>Správa súhlasov:</strong><br>
            Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>

            <h3>III. Práva dotknutej osoby</h3>
            <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
            <ul>
                <li>Prístup k osobným údajom, ktoré spracúvame</li>
                <li>Oprava nepresných alebo neúplných údajov</li>
                <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                <li>Obmedzenie spracovania</li>
                <li>Prenosnosť údajov</li>
                <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
            </ul>

            <p>V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na zelenskystefan@gmail.com alebo telefónnom čísle +421 905 504 756.</p>

            <p><strong>Tieto Zásady nadobúdajú účinnosť dňom 25. 7. 2025.</strong></p>
        </div>
    </div>
</div>`;
            footerContainer.innerHTML = footerHTML;
        }
    }

    // Smooth scrolling for navigation links (handled after navigation loads)
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Hero background image cycling
    const heroImages = document.querySelectorAll('.hero-bg-image');
    let currentImageIndex = 0;
    
    function cycleHeroImages() {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }
    
    // Cycle images every 5 seconds
    setInterval(cycleHeroImages, 5000);

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-item, .portfolio-item, .gallery-item, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Animate counters when hero stats section is visible
    const heroStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const numberElement = stat.childNodes[0];
                    const target = parseInt(numberElement.textContent);
                    if (!isNaN(target)) {
                        animateCounter(numberElement, target);
                    }
                });
                heroStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroStatsObserver.observe(heroStats);
    }

    // Animate counters when about stats section is visible
    const aboutStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent.replace('+', ''));
                    if (!isNaN(target)) {
                        animateCounter(stat, target);
                        // Add back the + sign after animation
                        setTimeout(() => {
                            stat.textContent = stat.textContent + '+';
                        }, 2000);
                    }
                });
                aboutStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe about stats
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        aboutStatsObserver.observe(aboutStats);
    }

    // Animate section title on scroll
    const sectionTitleObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    // Animate section title fill on scroll (middle of viewport)
    const sectionTitleFillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fill-animate');
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px 0px 0px 0px'
    });

    // Observe section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitleObserver.observe(sectionTitle);
        sectionTitleFillObserver.observe(sectionTitle);
    }

    // Animate services title on scroll
    const servicesTitle = document.querySelector('.services-title');
    if (servicesTitle) {
        sectionTitleObserver.observe(servicesTitle);
        sectionTitleFillObserver.observe(servicesTitle);
    }

    // Animate about title on scroll
    const aboutTitle = document.querySelector('.about-title');
    if (aboutTitle) {
        sectionTitleObserver.observe(aboutTitle);
        sectionTitleFillObserver.observe(aboutTitle);
    }

    // Form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email) {
                alert('Ďakujeme za prihlásenie k odberu!');
                this.reset();
            } else {
                alert('Prosím, zadajte váš email.');
            }
        });
    }

    // Gallery image modal disabled - items now link to portfolio page
    // const galleryItems = document.querySelectorAll('.gallery-item');
    // Gallery modal functionality removed to allow direct navigation to portfolio page


    // Continuous slider animation (no pause on hover)
});

// Privacy Policy Modal Functions
function openPrivacyModal(event) {
    event.preventDefault();
    const modal = document.getElementById('privacy-modal');
    const body = document.body;
    
    if (modal) {
        modal.style.display = 'flex';
        body.classList.add('modal-open');
        
        // Prevent scroll
        body.style.overflow = 'hidden';
        
        // Add ESC key listener
        document.addEventListener('keydown', handleEscapeKey);
    }
}

function closePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    const body = document.body;
    
    if (modal) {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
        
        // Restore scroll
        body.style.overflow = 'auto';
        
        // Remove ESC key listener
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        closePrivacyModal();
    }
}

// Gallery modal styles removed - no longer needed
// Modal functionality disabled in favor of direct portfolio navigation 