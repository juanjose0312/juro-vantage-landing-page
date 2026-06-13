const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.services": "Servicios",
        "nav.about": "Nosotros",
        "nav.partners": "Aliados",
        "nav.contact": "Contacto",
        
        "btn.schedule": "Cotizar Ahora",
        "btn.quote": "Conectar",
        "btn.learn_more": "Saber más",
        "btn.submit": "Solicitar Asesoría",
        
        "hero.subtitle": "Firma consultora integral para el sector transportista. Más allá de los seguros, impulsamos el crecimiento estructurado de su negocio.",
        
        "value.title": "No somos una agencia tradicional",
        "value.desc": "Nos posicionamos como una firma consultora que acompaña al cliente en todo su ecosistema.",
        "value.card1.title": "Protección Integral",
        "value.card1.desc": "Mejoramos la calidad y el precio de sus seguros, asegurando la cobertura exacta que necesita sin sobrecostos.",
        "value.card2.title": "Crecimiento Estructurado",
        "value.card2.desc": "Acompañamiento continuo con consultores especializados para garantizar el crecimiento de su empresa.",
        "value.card3.title": "Cumplimiento Normativo",
        "value.card3.desc": "Mantenemos su score sano y evitamos penalizaciones a través de asesoría experta en regulaciones.",
        
        "services.title": "Soluciones Corporativas",
        "services.commercial.title": "Seguros Comerciales",
        "services.commercial.desc": "Coberturas especializadas para carga, responsabilidad civil y daño físico, diseñadas para el mercado transportista.",
        "services.auto.title": "Auto Personal",
        "services.auto.desc": "Protección completa para sus vehículos personales con coberturas a la medida y tarifas competitivas.",
        "services.health.title": "Soluciones de Salud",
        "services.health.desc": "Asesoría en Healthcare, Medicare y Medicaid para proteger lo más importante: usted y su familia.",
        "services.life.title": "Seguros de Vida",
        "services.life.desc": "Planes de vida que garantizan la tranquilidad y el futuro financiero de su familia.",
        "services.investments.title": "Inversiones y Logística",
        "services.investments.desc": "Compra/venta de camiones, consecución de cargas con grandes brokers e inversión en el exterior.",
        "services.compliance.title": "Cumplimiento Normativo",
        "services.compliance.desc": "Formación de compañías, auditorías DOT, permisos y mantenimiento de un historial operativo impecable.",
        
        "partners.title": "Broker Partners",
        "partners.desc": "Trabajamos con los principales brokers del país.",
        
        "contact.title": "Impulse su negocio hoy",
        "contact.desc": "Déjenos sus datos y uno de nuestros consultores especializados se pondrá en contacto con usted para una asesoría personalizada.",
        
        "form.name": "Nombre Completo",
        "form.company": "Nombre de la Compañía",
        "form.phone": "Teléfono",
        "form.email": "Correo Electrónico",
        "form.service": "Servicio de Interés",
        "form.opt1": "Seguros Comerciales",
        "form.opt2": "Auto Personal",
        "form.opt3": "Soluciones de Salud",
        "form.opt4": "Seguros de Vida",
        "form.opt5": "Inversiones y Logística",
        "form.opt6": "Cumplimiento Normativo",
        "form.opt7": "Otros",
        
        "footer.links": "Enlaces Rápidos",
        "footer.services": "Servicios",
        "footer.rights": "Todos los derechos reservados.",
        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Servicio"
    },
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.about": "About Us",
        "nav.partners": "Partners",
        "nav.contact": "Contact",
        
        "btn.schedule": "Get a Quote",
        "btn.quote": "Connect",
        "btn.learn_more": "Learn More",
        "btn.submit": "Request Consultation",
        
        "hero.subtitle": "Comprehensive consulting firm for the transportation sector. Beyond insurance, we drive the structured growth of your business.",
        
        "value.title": "We are not a traditional agency",
        "value.desc": "We position ourselves as a consulting firm that accompanies the client throughout their entire ecosystem.",
        "value.card1.title": "Comprehensive Protection",
        "value.card1.desc": "We improve the quality and price of your insurance, ensuring the exact coverage you need without overpaying.",
        "value.card2.title": "Structured Growth",
        "value.card2.desc": "Continuous support with specialized consultants to guarantee the growth of your company.",
        "value.card3.title": "Regulatory Compliance",
        "value.card3.desc": "We keep your score healthy and avoid penalties through expert advice on regulations.",
        
        "services.title": "Corporate Solutions",
        "services.commercial.title": "Commercial Insurance",
        "services.commercial.desc": "Specialized coverage for cargo, liability, and physical damage, designed for the transportation market.",
        "services.auto.title": "Auto Personal",
        "services.auto.desc": "Complete protection for your personal vehicles with tailored coverage and competitive rates.",
        "services.health.title": "Health Care Solutions",
        "services.health.desc": "Advice on Healthcare, Medicare, and Medicaid to protect what matters most: you and your family.",
        "services.life.title": "Life Insurance",
        "services.life.desc": "Life plans that guarantee peace of mind and your family's financial future.",
        "services.investments.title": "Investments & Logistics",
        "services.investments.desc": "Buying/selling trucks, securing loads with large brokers, and foreign investment.",
        "services.compliance.title": "Compliance",
        "services.compliance.desc": "Company formation, DOT audits, permits, and maintenance of an impeccable operational history.",
        
        "partners.title": "Broker Partners",
        "partners.desc": "We work with the leading freight brokers in the country.",
        
        "contact.title": "Boost your business today",
        "contact.desc": "Leave us your details and one of our specialized consultants will contact you for personalized advice.",
        
        "form.name": "Full Name",
        "form.company": "Company Name",
        "form.phone": "Phone Number",
        "form.email": "Email Address",
        "form.service": "Service of Interest",
        "form.opt1": "Commercial Insurance",
        "form.opt2": "Auto Personal",
        "form.opt3": "Health Care Solutions",
        "form.opt4": "Life Insurance",
        "form.opt5": "Investments & Logistics",
        "form.opt6": "Compliance",
        "form.opt7": "Other",
        
        "footer.links": "Quick Links",
        "footer.services": "Services",
        "footer.rights": "All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Set initial language
    let currentLang = localStorage.getItem('jurovantage_lang') || 'es';
    setLanguage(currentLang);
    
    // Add click events to language buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    function setLanguage(lang) {
        // Update active class on buttons
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Save to localStorage
        localStorage.setItem('jurovantage_lang', lang);
        document.documentElement.lang = lang;
        
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Check if it's an input placeholder or normal text
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', translations[lang][key]);
                } else {
                    // Keep inner HTML if it has icons
                    const icon = el.querySelector('i');
                    if (icon) {
                        el.innerHTML = translations[lang][key] + ' ' + icon.outerHTML;
                    } else {
                        el.textContent = translations[lang][key];
                    }
                }
            }
        });
    }
});