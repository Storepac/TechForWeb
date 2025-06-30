// Landing Page JavaScript - Método Clonagem Zero
// Funcionalidades específicas para conversão e experiência do usuário

class LandingPageOptimizer {
    constructor() {
        this.initCountdown();
        this.initScrollAnimations();
        this.initConversionElements();
        this.initExitIntent();
        this.trackUserBehavior();
    }

    // Timer de urgência melhorado
    initCountdown() {
        const targetDate = new Date();
        // Timer de 2 horas para criar mais urgência realista
        targetDate.setHours(targetDate.getHours() + 2);

        this.updateCountdown(targetDate);
        setInterval(() => this.updateCountdown(targetDate), 1000);
    }

    updateCountdown(targetDate) {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            // Quando o timer acabar, reinicia com mais 2 horas
            const newTarget = new Date();
            newTarget.setHours(newTarget.getHours() + 2);
            this.updateCountdown(newTarget);
            return;
        }

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Atualiza display do countdown
        const countdownContainer = document.getElementById('enhanced-countdown');
        if (countdownContainer) {
            countdownContainer.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${hours.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Horas</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Minutos</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Segundos</span>
                </div>
            `;
        }

        // Adiciona urgência quando restam menos de 30 minutos
        if (timeDiff < 30 * 60 * 1000) {
            document.querySelectorAll('.urgency-banner').forEach(banner => {
                banner.style.display = 'block';
                banner.classList.add('critical-urgency');
            });
        }
    }

    // Animações de scroll
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observa elementos que devem animar
        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });
    }

    // Elementos de conversão dinâmicos
    initConversionElements() {
        this.addSocialProof();
        this.addScarcityIndicators();
        this.initStickyButton();
        this.addExitIntentPopup();
    }

    addSocialProof() {
        const notifications = [
            { name: 'João P.', action: 'adquiriu o ebook', time: '2 minutos' },
            { name: 'Ana M.', action: 'está lendo o ebook', time: '5 minutos' },
            { name: 'Carlos R.', action: 'protegeu seu WhatsApp', time: '8 minutos' }
        ];

        setInterval(() => {
            const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
            console.log(`${randomNotification.name} ${randomNotification.action} há ${randomNotification.time}`);
        }, 45000);
    }

    addScarcityIndicators() {
        const currentCount = 847 - Math.floor(Math.random() * 50);
        console.log(`${currentCount} pessoas já protegeram seus dados!`);
    }

    initStickyButton() {
        const stickyButton = document.createElement('div');
        stickyButton.className = 'sticky-cta';
        stickyButton.innerHTML = `
            <div class="sticky-cta-content">
                <div class="sticky-offer">
                    <strong>Oferta por Tempo Limitado!</strong>
                    <span>R$ 29,90 em até 10x</span>
                </div>
                <button class="mil-button cta-button" onclick="window.location.href='https://pay.kirvano.com/e8b992bb-1ea9-4662-a79a-9ebb37731133'">
                    QUERO PROTEGER MEU WHATSAPP
                </button>
            </div>
        `;

        document.body.appendChild(stickyButton);

        // Mostra quando usuário rola para baixo
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 800) {
                stickyButton.classList.add('show');
            } else {
                stickyButton.classList.remove('show');
            }

            lastScrollTop = scrollTop;
        });
    }

    // Exit intent popup
    addExitIntentPopup() {
        let exitIntentShown = false;
        
        document.addEventListener('mouseleave', (e) => {
            if (!exitIntentShown && e.clientY <= 0) {
                this.showExitIntentPopup();
                exitIntentShown = true;
            }
        });
    }

    showExitIntentPopup() {
        const popup = document.createElement('div');
        popup.className = 'exit-intent-popup';
        popup.innerHTML = `
            <div class="exit-popup-overlay"></div>
            <div class="exit-popup-content">
                <button class="exit-popup-close">&times;</button>
                <div class="exit-popup-header">
                    <h2>🚨 ESPERE! NÃO VAZA AINDA!</h2>
                </div>
                <div class="exit-popup-body">
                    <h3>Seu WhatsApp pode estar sendo MONITORADO agora mesmo!</h3>
                    <p>Antes de sair, que tal garantir <strong>15% DE DESCONTO</strong> no ebook que vai proteger seus dados?</p>
                    <div class="exit-discount-code">
                        <strong>Código: PROTECAO15</strong>
                    </div>
                    <div class="exit-popup-buttons">
                        <button class="mil-button cta-button" onclick="window.location.href='https://pay.kirvano.com/e8b992bb-1ea9-4662-a79a-9ebb37731133'">
                            APLICAR DESCONTO AGORA
                        </button>
                        <button class="exit-popup-decline">Não, prefiro continuar vulnerável</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(popup);

        // Event listeners para fechar popup
        popup.querySelector('.exit-popup-close').addEventListener('click', () => {
            popup.remove();
        });

        popup.querySelector('.exit-popup-decline').addEventListener('click', () => {
            popup.remove();
        });

        popup.querySelector('.exit-popup-overlay').addEventListener('click', () => {
            popup.remove();
        });

        // Mostra popup com animação
        setTimeout(() => {
            popup.classList.add('show');
        }, 100);
    }

    initExitIntent() {
        // Funcionalidade já implementada em addExitIntentPopup
    }

    // Tracking de comportamento
    trackUserBehavior() {
        // Tempo na página
        const startTime = Date.now();
        
        // Track scroll depth
        let maxScrollDepth = 0;
        window.addEventListener('scroll', () => {
            const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollDepth > maxScrollDepth) {
                maxScrollDepth = scrollDepth;
            }
        });

        // Track clicks nos CTAs
        document.querySelectorAll('.mil-button, .cta-button').forEach(button => {
            button.addEventListener('click', () => {
                const timeOnPage = Math.round((Date.now() - startTime) / 1000);
                
                // Pode enviar para analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_click', {
                        'time_on_page': timeOnPage,
                        'scroll_depth': maxScrollDepth,
                        'button_text': button.textContent.trim()
                    });
                }
            });
        });

        // Track quando sair da página
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_exit', {
                    'time_on_page': timeOnPage,
                    'scroll_depth': maxScrollDepth
                });
            }
        });
    }

    // Adiciona CSS dinâmico para elementos criados via JS
    addDynamicStyles() {
        const styles = `
            <style>
            .social-proof-notification {
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: linear-gradient(135deg, #4fff89, #00ff88);
                color: #111;
                padding: 15px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(79, 255, 137, 0.3);
                transform: translateX(-150%);
                transition: transform 0.3s ease;
                z-index: 1000;
                max-width: 300px;
            }

            .social-proof-notification.show {
                transform: translateX(0);
            }

            .social-proof-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .social-proof-avatar {
                font-size: 1.5rem;
            }

            .social-proof-text small {
                display: block;
                opacity: 0.7;
                font-size: 0.8rem;
            }

            .scarcity-indicator {
                background: rgba(255, 107, 107, 0.1);
                border: 2px solid #ff6b6b;
                border-radius: 15px;
                padding: 20px;
                text-align: center;
                margin: 30px 0;
                backdrop-filter: blur(10px);
            }

            .scarcity-bar {
                background: rgba(255, 255, 255, 0.2);
                height: 8px;
                border-radius: 4px;
                margin: 10px 0;
                overflow: hidden;
            }

            .scarcity-progress {
                background: linear-gradient(90deg, #ff6b6b, #ff8e8e);
                height: 100%;
                border-radius: 4px;
                transition: width 0.3s ease;
            }

            .sticky-cta {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #111, #1a1a1a);
                border-top: 2px solid #4fff89;
                padding: 15px;
                transform: translateY(100%);
                transition: transform 0.3s ease;
                z-index: 1000;
                box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
            }

            .sticky-cta.show {
                transform: translateY(0);
            }

            .sticky-cta-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 1200px;
                margin: 0 auto;
                gap: 20px;
            }

            .sticky-offer {
                color: #fff;
            }

            .sticky-offer strong {
                display: block;
                color: #4fff89;
            }

            .exit-intent-popup {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .exit-intent-popup.show {
                opacity: 1;
                visibility: visible;
            }

            .exit-popup-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
            }

            .exit-popup-content {
                background: linear-gradient(135deg, #1a1a1a, #111);
                border: 2px solid #4fff89;
                border-radius: 20px;
                padding: 40px;
                max-width: 500px;
                margin: 20px;
                position: relative;
                text-align: center;
            }

            .exit-popup-close {
                position: absolute;
                top: 15px;
                right: 20px;
                background: none;
                border: none;
                color: #fff;
                font-size: 2rem;
                cursor: pointer;
            }

            .exit-popup-header h2 {
                color: #ff6b6b;
                margin-bottom: 20px;
            }

            .exit-popup-body h3 {
                color: #4fff89;
                margin-bottom: 15px;
            }

            .exit-discount-code {
                background: #4fff89;
                color: #111;
                padding: 15px;
                border-radius: 10px;
                margin: 20px 0;
                font-size: 1.2rem;
            }

            .exit-popup-buttons {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 25px;
            }

            .exit-popup-decline {
                background: none;
                border: 1px solid #666;
                color: #666;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 0.9rem;
            }

            @media (max-width: 768px) {
                .sticky-cta-content {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .social-proof-notification {
                    left: 10px;
                    right: 10px;
                    max-width: none;
                }
                
                .exit-popup-content {
                    margin: 10px;
                    padding: 30px 20px;
                }
            }
            </style>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Inicializar quando DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    const optimizer = new LandingPageOptimizer();
    optimizer.addDynamicStyles();
});

// Função para melhorar alt texts das imagens
function improveImageAltTexts() {
    const altTexts = {
        'metodo.png': 'Ebook Método Clonagem Zero - Proteja seu WhatsApp contra hackers e clonagem'
    };

    document.querySelectorAll('img').forEach(img => {
        const filename = img.src.split('/').pop();
        if (altTexts[filename]) {
            img.alt = altTexts[filename];
        }
    });
}

// Função para adicionar structured data específico do produto
function addEbookStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Método Clonagem Zero",
        "description": "Ebook completo sobre como proteger seu WhatsApp e celular contra clonagem e espionagem",
        "image": "https://www.techforweb.com.br/img/photo/metodo.png",
        "brand": {
            "@type": "Brand",
            "name": "Tech For Web"
        },
        "offers": {
            "@type": "Offer",
            "price": "29.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "validThrough": new Date(Date.now() + 7*24*60*60*1000).toISOString()
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "847"
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);
}

// Executar melhorias quando página carregar
window.addEventListener('load', function() {
    improveImageAltTexts();
    addEbookStructuredData();
    
    // Inicializar efeitos tecnológicos
    initTechEffects();
    setTimeout(addGlitchEffect, 2000);
});

// Efeitos tecnológicos dinâmicos avançados
function initTechEffects() {
    // Adicionar mais partículas dinamicamente
    const particlesContainer = document.querySelector('.tech-particles');
    if (particlesContainer) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                particlesContainer.appendChild(particle);
            }, i * 2000);
        }
    }
    
    // Efeito de digitação no código matriz
    const codeColumns = document.querySelectorAll('.code-column');
    codeColumns.forEach((column, index) => {
        const originalText = column.textContent;
        column.textContent = '';
        
        setTimeout(() => {
            let currentIndex = 0;
            const typeInterval = setInterval(() => {
                if (currentIndex < originalText.length) {
                    column.textContent += originalText[currentIndex];
                    currentIndex++;
                } else {
                    clearInterval(typeInterval);
                    
                    // Reiniciar após um tempo
                    setTimeout(() => {
                        column.textContent = '';
                        currentIndex = 0;
                        
                        const retypeInterval = setInterval(() => {
                            if (currentIndex < originalText.length) {
                                column.textContent += originalText[currentIndex];
                                currentIndex++;
                            } else {
                                clearInterval(retypeInterval);
                            }
                        }, 100);
                    }, 3000);
                }
            }, 150);
        }, index * 1000);
    });
    
    // Efeito de scan na imagem do ebook
    const ebookImage = document.querySelector('.img_book img');
    if (ebookImage) {
        setInterval(() => {
            ebookImage.style.filter = `
                drop-shadow(0 0 30px rgba(79, 255, 137, 0.8))
                drop-shadow(0 0 60px rgba(79, 255, 137, 0.4))
                brightness(1.3)
                contrast(1.2)
            `;
            
            setTimeout(() => {
                ebookImage.style.filter = `
                    drop-shadow(0 0 20px rgba(79, 255, 137, 0.5))
                    drop-shadow(0 0 40px rgba(79, 255, 137, 0.3))
                    brightness(1.1)
                    contrast(1.1)
                `;
            }, 500);
        }, 8000);
    }
}

// Efeito de glitch nos títulos importantes
function addGlitchEffect() {
    const importantTitles = document.querySelectorAll('h1, h2');
    importantTitles.forEach(title => {
        if (title.textContent.includes('CLONAGEM ZERO') || 
            title.textContent.includes('PROTEGER') ||
            title.textContent.includes('WHATSAPP')) {
            title.classList.add('glitch-text');
            title.setAttribute('data-text', title.textContent);
        }
    });
}

// Adicionar efeitos de teclado de hacker
function addHackerKeyboardEffects() {
    let keySequence = '';
    const hackerSequences = ['hack', 'secure', 'protect', 'whatsapp'];
    
    document.addEventListener('keydown', function(event) {
        keySequence += event.key.toLowerCase();
        
        // Manter apenas os últimos 10 caracteres
        if (keySequence.length > 10) {
            keySequence = keySequence.slice(-10);
        }
        
        // Verificar se alguma sequência foi digitada
        hackerSequences.forEach(sequence => {
            if (keySequence.includes(sequence)) {
                triggerHackerEffect();
                keySequence = '';
            }
        });
    });
}

// Efeito especial quando sequência de hacker é digitada
function triggerHackerEffect() {
    const body = document.body;
    const originalFilter = body.style.filter;
    
    // Efeito de "invasão" temporário
    body.style.filter = 'hue-rotate(120deg) contrast(1.5)';
    
    // Piscar elementos tecnológicos
    document.querySelectorAll('.particle, .circuit-line, .code-column').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'scale(1.2)';
    });
    
    // Mostrar mensagem de "acesso autorizado"
    const hackerMessage = document.createElement('div');
    hackerMessage.innerHTML = '🔓 ACESSO AUTORIZADO - SISTEMA DESBLOQUEADO';
    hackerMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #4fff89;
        color: #000;
        padding: 20px;
        border-radius: 10px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        z-index: 10000;
        animation: pulse 0.5s infinite;
    `;
    
    document.body.appendChild(hackerMessage);
    
    // Restaurar após 2 segundos
    setTimeout(() => {
        body.style.filter = originalFilter;
        hackerMessage.remove();
        
        document.querySelectorAll('.particle, .circuit-line, .code-column').forEach(el => {
            el.style.opacity = '';
            el.style.transform = '';
        });
    }, 2000);
}

// Inicializar efeitos de teclado
document.addEventListener('DOMContentLoaded', function() {
    addHackerKeyboardEffects();
}); 