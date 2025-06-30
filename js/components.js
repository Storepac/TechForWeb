// Componentes reutilizáveis para o site Tech For Web
class T4WComponents {
    
    // Gerar header comum para todas as páginas
    static generateHeader(currentPage = '') {
        return `
        <div class="mil-top-panel">
            <div class="container-fluid">
                <div class="mil-top-panel-content">
                    <a href="/" class="mil-logo">
                        <img src="img/logo/logo.png" alt="Tech For Web - Desenvolvimento Web e Marketing Digital" style="width: 80px;">
                    </a>

                    <div class="mil-navigation">
                        <nav>
                            <ul>
                                <li class="${currentPage === 'home' ? 'mil-active' : ''}">
                                    <a href="/">Home</a>
                                </li>
                                <li class="${currentPage === 'portfolio' ? 'mil-active' : ''}">
                                    <a href="portfolio.html">Portfolio</a>
                                </li>
                                <li class="${currentPage === 'services' ? 'mil-active' : ''}">
                                    <a href="services.html">Serviços</a>
                                </li>
                                <li class="${currentPage === 'projects' ? 'mil-active' : ''}">
                                    <a href="project.html">Projetos</a>
                                </li>
                                <li class="${currentPage === 'metodo' ? 'mil-active' : ''}">
                                    <a href="metodo-clonagem-zero.html" target="_blank">Método Clonagem Zero</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="mil-top-panel-buttons">
                        <a href="contato.html" target="_blank" id="orcamento" class="mil-button mil-sm">Faça um orçamento</a>
                        <div class="mil-menu-btn">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // Gerar meta tags padrão
    static generateMetaTags(title, description, keywords, ogImage = '') {
        const baseUrl = 'https://www.techforweb.com.br';
        const defaultImage = `${baseUrl}/img/logo/logo.png`;
        
        return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <meta name="author" content="T4W - Tech For Web">
        <meta name="robots" content="index, follow">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${ogImage || defaultImage}">
        <meta property="og:url" content="${baseUrl}">`;
    }

    // Gerar estrutura de analytics consolidada
    static generateAnalytics() {
        return `
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T6FF45R5');</script>
        
        <!-- Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0E59Q5P9NZ"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0E59Q5P9NZ');
        gtag('config', 'AW-11105409517');
        </script>`;
    }

    // Gerar footer comum
    static generateFooter() {
        return `
        <footer>
            <div class="container mil-p-120-60">
                <div class="mil-background-grid mil-softened"></div>
                <div class="row justify-content-between">
                    <div class="col-lg-4">
                        <div class="mil-footer-logo">
                            <img src="img/logo/logo.png" alt="Tech For Web" style="width: 120px;">
                        </div>
                        <p class="mil-light-soft mil-up mil-mb-30">
                            Transformamos ideias em soluções digitais eficientes. 
                            Especialistas em desenvolvimento web, social media e gestão de tráfego pago.
                        </p>
                    </div>
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-md-6">
                                <nav class="mil-footer-navigation mil-up mil-mb-40">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="portfolio.html">Portfolio</a></li>
                                        <li><a href="services.html">Serviços</a></li>
                                        <li><a href="project.html">Projetos</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-md-6">
                                <nav class="mil-footer-navigation mil-up mil-mb-40">
                                    <ul>
                                        <li><a href="contato.html">Contato</a></li>
                                        <li><a href="metodo-clonagem-zero.html">Método Clonagem Zero</a></li>
                                        <li><a href="https://wa.me/5514996145415" target="_blank">WhatsApp</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mil-footer-bottom">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-6">
                            <p class="mil-light-soft">© ${new Date().getFullYear()} Tech For Web. Todos os direitos reservados.</p>
                        </div>
                        <div class="col-md-6">
                            <ul class="mil-light-soft">
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Termos de Uso</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`;
    }

    // Lazy loading para imagens
    static initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Melhorar performance com preload de recursos críticos
    static preloadCriticalResources() {
        const criticalResources = [
            { href: 'css/style.css', as: 'style' },
            { href: 'img/logo/logo.png', as: 'image' },
            { href: 'js/main.js', as: 'script' }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            document.head.appendChild(link);
        });
    }

    // Structured Data para SEO
    static generateStructuredData(type = 'Organization') {
        const organizationData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tech For Web",
            "alternateName": "T4W",
            "url": "https://www.techforweb.com.br",
            "logo": "https://www.techforweb.com.br/img/logo/logo.png",
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
            ],
            "founder": {
                "@type": "Person",
                "name": "Tech For Web Team"
            },
            "foundingDate": "2020",
            "numberOfEmployees": "2-10",
            "serviceArea": {
                "@type": "Country",
                "name": "Brazil"
            }
        };

        return `<script type="application/ld+json">${JSON.stringify(organizationData, null, 2)}</script>`;
    }
}

// Inicializar componentes quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    T4WComponents.initLazyLoading();
    T4WComponents.preloadCriticalResources();
});

// Exportar para uso global
window.T4WComponents = T4WComponents; 