
$(function () {

    "use strict";

    /***************************

    register gsap plugins

    ***************************/
    gsap.registerPlugin(ScrollTrigger);
    /***************************

    progressbar

    ***************************/
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });
    /***************************

    timer

    ***************************/

    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 99);

    timer = setInterval(function () {
        timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

            // Timer done
            clearInterval(timer);

        } else {

            var seconds = Math.floor(difference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);
        }
    }
    /***************************

    scroll animations

    ***************************/

    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 50,
            scale: .98,
            ease: 'sine',
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const scaleImage = document.querySelectorAll(".mil-scale");

    scaleImage.forEach((section) => {
        var value1 = $(section).data("value-1");
        var value2 = $(section).data("value-2");
        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,

        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const parallaxImage = document.querySelectorAll(".mil-parallax");

    parallaxImage.forEach((section) => {
        var value1 = $(section).data("value-1");
        var value2 = $(section).data("value-2");
        gsap.fromTo(section, {
            ease: 'sine',
            y: value1,

        }, {
            y: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const skillProg = document.querySelectorAll(".mil-skill-prog");

    skillProg.forEach((section) => {
        var value1 = $(section).data("value-1");
        var value2 = $(section).data("value-2");
        gsap.fromTo(section, {
            width: value1,
            ease: 'sine',
        }, {
            width: value2,
            duration: 2,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const number = $(".mil-counter");
    number.each(function (index, element) {
        var count = $(this),
            zero = {
                val: 0
            },
            num = count.data("number"),
            split = (num + "").split("."), // to cover for instances of decimals
            decimals = split.length > 1 ? split[1].length : 0;

        gsap.to(zero, {
            val: num,
            duration: 2,
            scrollTrigger: {
                trigger: element,
                toggleActions: 'play none none reverse',
            },
            onUpdate: function () {
                count.text(zero.val.toFixed(decimals));
            }
        });
    });

    /***************************

    sliders

    ***************************/
    var swiper = new Swiper('.mil-infinite-show', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 4000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });

    var swiper = new Swiper('.mil-banner-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        parallax: true,
        loop: true,
        navigation: {
            prevEl: '.mil-banner-prev',
            nextEl: '.mil-banner-next',
        },
        pagination: {
            el: '.mil-banner-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    var swiper = new Swiper('.mil-banner-slider-2', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        parallax: true,
        loop: true,
        navigation: {
            prevEl: '.mil-banner-prev',
            nextEl: '.mil-banner-next',
        },
        pagination: {
            el: '.mil-banner-pagination',
            type: 'bullets',
            clickable: true,
        },
    });


    var swiper = new Swiper('.mil-process-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            prevEl: '.mil-process-prev',
            nextEl: '.mil-process-next',
        },
        pagination: {
            el: '.mil-banner-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    var swiper = new Swiper('.mil-reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        effect: 'fade',
        parallax: true,
        navigation: {
            prevEl: '.mil-process-prev',
            nextEl: '.mil-process-next',
        },
        pagination: {
            el: '.mil-banner-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    var swiper = new Swiper('.mil-illustration-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        effect: 'fade',
        parallax: true,
        navigation: {
            prevEl: '.mil-illustration-prev',
            nextEl: '.mil-illustration-next',
        },
    });

    /***************************

    accordion

    ***************************/

    let groups = gsap.utils.toArray(".mil-accordion-group");
    let menus = gsap.utils.toArray(".mil-accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
        menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".mil-accordion-menu");
        let title = element.querySelector(".mil-accordion-menu h6");
        let box = element.querySelector(".mil-accordion-content");
        let minusElement = element.querySelector(".mil-minus");
        let plusElement = element.querySelector(".mil-plus");

        gsap.set(box, {
            height: "auto",
        });

        let animation = gsap
            .timeline()
            .from(box, {
                height: 0,
                duration: 0.5,
                ease: "sine"
            })
            .from(minusElement, {
                duration: 0.2,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(plusElement, {
                duration: 0.2,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .from(title, {
                duration: 0.2,
                ease: "sine",
            }, 0)
            .to(title, {
                duration: 0.2,
                ease: "sine",
            }, 0)
            .reverse();

        return function (clickedMenu) {
            if (clickedMenu === menu) {
                animation.reversed(!animation.reversed());
            } else {
                animation.reverse();
            }
        };
    }
    /***************************

    top panel

    ***************************/
    if($('.mil-top-panel').length) {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 10) {
            $('.mil-top-panel').addClass('mil-active');
        } 
        else {
            $('.mil-top-panel').removeClass('mil-active');
        }
    });
    }

    $(".mil-menu-btn").on("click", function () {
        $(this).toggleClass('mil-active');
        $('.mil-navigation').toggleClass('mil-active');
    });

    if($(window).width() < 1200){
    $('.mil-navigation ul li.mil-has-children > a').on('click', function () {
		return false;
	});
    }

    /***************************

    portfolio

    ***************************/

    $('.mil-filter a').on('click', function () {
        $('.mil-filter .mil-current').removeClass('mil-current');
        $(this).addClass('mil-current');

        var selector = $(this).data('filter');
        $('.mil-portfolio-grid').isotope({
            filter: selector
        });
        ScrollTrigger.refresh();
        return false;

    });

    var $container = $('.mil-portfolio-grid').isotope({
        itemSelector: '.mil-grid-item',
        transitionDuration: '0.5s',
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });

    var $container = $('.mil-portfolio-grid');
	$container.imagesLoaded(function() {
		$container.isotope('layout');
        ScrollTrigger.refresh();
	});

    var initShow = 4;
    var counter = initShow;
    var iso = $container.data('isotope');

    if (iso !== undefined) {
        loadMore(initShow);
    }

    function loadMore(toShow) {

        $container.find(".mil-hidden").removeClass("mil-hidden");

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
            return item.element;
        });
        $(hiddenElems).addClass('mil-hidden');
        $container.isotope('layout');

        if (hiddenElems.length == 0) {
            $("#load-more").hide();
        } else {
            $("#load-more").show();
        };

    }

    $container.after('<div class="mil-load-more mil-up"><button id="load-more">Load More</button></div>');

    $("#load-more").on('click', function () {

        if ($('#filters').data('clicked')) {
            counter = initShow;
            j$('#filters').data('clicked', false);
        } else {
            counter = counter;
        };

        counter = counter + initShow;

        loadMore(counter);

        ScrollTrigger.refresh();
    });

    /***************************

    magnific

    ***************************/
    $('.has-popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        iframe: {
            patterns: {
                youtube_short: {
                    index: 'youtu.be/',
                    id: 'youtu.be/',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        },
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: 'mfp-fade',
        callbacks: {
            markupParse: function(template, values, item) {
                template.find('iframe').attr('allow', 'autoplay');
            }
        }
    });

    /***************************

    hover images

    ***************************/

    let navLinks = gsap.utils.toArray(".mil-hover-item"),
        imgWrap = document.querySelector(".mil-img-wrapper"),
        imgItem = document.querySelector(".mil-img-wrapper img");

    function moveImg(e) {
        let mouseX = e.clientX,
            mouseY = e.clientY;
        tl = gsap.timeline();
        tl.to(imgWrap, {
            duration: 0.3,
            x: mouseX,
            y: mouseY,
            ease: 'sine',
        })
    }

    function linkHover(e) {
        if (e.type === "mouseenter") {
            let imgSrc = e.target.dataset.src;
            let tl = gsap.timeline();

            tl.set(imgItem, {
                attr: {
                    src: imgSrc
                }
            }).to(imgWrap, {
                autoAlpha: 1,
                scale: 1
            });
        } else if (e.type === "mouseleave") {
            let tl = gsap.timeline();

            tl.to(imgWrap, {
                autoAlpha: 0,
                scale: 0.3
            });
        }
    }

    function initAnim() {
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', linkHover);
            link.addEventListener('mouseleave', linkHover);
            link.addEventListener('mousemove', moveImg);
        });
    }

    function init() {
        initAnim();
    }

    window.addEventListener("load", function () {
        init();
    });

    /***************************

    contact form

    ***************************/
    if($('.cform').length) {
		$('#cform').validate({
			rules: {
				name: {
					required: true
				},
				tel: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
                budget: {
					required: true
				},
				message: {
					required: true
				}
			},
			success: 'valid',
			submitHandler: function() {
				$.ajax({
					url: 'mailer/feedback.php',
					type: 'post',
					dataType: 'json',
					data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&tel='+ $("#cform").find('input[name="tel"]').val() + '&budget='+ $("#cform").find('input[name="budget"]').val() + '&message='+ $("#cform").find('textarea[name="message"]').val(),
					beforeSend: function() {
	
					},
					complete: function() {
	
					},
					success: function(data) {
						$('#cform').fadeOut();
						$('.alert-success').delay(1000).fadeIn();
					}
				});
			}
		});
	}

});
