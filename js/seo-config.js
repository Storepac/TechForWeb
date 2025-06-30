// Configurações de SEO para Tech For Web
const SEOConfig = {
    baseUrl: 'https://www.techforweb.com.br',
    siteName: 'Tech For Web',
    defaultTitle: 'Tech For Web - Desenvolvimento Web e Marketing Digital',
    
    pages: {
        home: {
            title: 'Tech For Web | Gestão de Tráfego Pago e Social Media',
            description: 'Serviços especializados em gestão de tráfego pago e social media para maximizar seus resultados. Consultoria personalizada e estratégias de marketing digital.',
            keywords: 'gestão tráfego pago, social media, desenvolvimento web, marketing digital, sites profissionais'
        },
        portfolio: {
            title: 'Portfolio - Tech For Web | Projetos de Desenvolvimento e Design',
            description: 'Veja nosso portfólio completo de projetos em desenvolvimento web, social media design e aplicações. Mais de 120 projetos elaborados pela Tech For Web.',
            keywords: 'portfolio, desenvolvimento web, social media design, aplicações web, sites profissionais, Tech For Web'
        },
        services: {
            title: 'Serviços - Tech For Web | Social Media, Tráfego Pago e Desenvolvimento',
            description: 'Conheça nossos serviços especializados: Social Media Design, Gestão de Tráfego Pago e Desenvolvimento Full Stack. Soluções completas para seu negócio digital.',
            keywords: 'social media design, gestão tráfego pago, desenvolvimento full stack, marketing digital, sites profissionais'
        }
    },

    // Função para gerar structured data
    generateStructuredData: function() {
        return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": this.siteName,
            "alternateName": "T4W",
            "url": this.baseUrl,
            "logo": `${this.baseUrl}/img/logo/logo.png`,
            "description": "Especialistas em desenvolvimento web, social media design e gestão de tráfego pago",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-14-99614-5415",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
            },
            "sameAs": [
                "https://wa.me/5514996145415"
            ]
        };
    },

    // Função para melhorar alt texts das imagens
    improveImageAltTexts: function() {
        const images = document.querySelectorAll('img');
        const altTextMap = {
            'logo.png': 'Tech For Web - Desenvolvimento Web e Marketing Digital',
            'bg.png': 'Background profissional Tech For Web',
            'exitus.png': 'Projeto de Social Media Design - Exitus',
            'site4.png': 'Desenvolvimento de site - 100 Desculpas para denunciar',
            'porteiro1.png': 'Sistema de controle de usuários em condomínio',
            'modelese.png': 'Posts para redes sociais - Modele-se'
        };

        images.forEach(img => {
            const filename = img.src.split('/').pop();
            if (altTextMap[filename] && (!img.alt || img.alt === 'image' || img.alt === 'cover')) {
                img.alt = altTextMap[filename];
            }
        });
    }
};

// Performance: Lazy loading de imagens
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        // Adicionar lazy loading para imagens do portfolio
        document.querySelectorAll('.mil-portfolio-item img, .mil-bg-img').forEach(img => {
            if (img.src && !img.dataset.src) {
                img.dataset.src = img.src;
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiLz48L3N2Zz4=';
                img.classList.add('lazy');
                imageObserver.observe(img);
            }
        });
    }
}

// Inicializar melhorias quando DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    SEOConfig.improveImageAltTexts();
    initLazyLoading();
    
    // Adicionar structured data ao head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(SEOConfig.generateStructuredData(), null, 2);
    document.head.appendChild(script);
});

// Exportar para uso global
window.SEOConfig = SEOConfig; 