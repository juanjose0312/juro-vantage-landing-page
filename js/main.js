document.addEventListener('DOMContentLoaded', () => {
    // Hero Video Sequence
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        const heroVideos = [
            'assets/video/video_1.mp4',
            'assets/video/video_2.mp4',
            'assets/video/video_3.mp4',
            'assets/video/video_4.mp4'
        ];
        let currentVideoIndex = 0;

        const playVideo = (index) => {
            heroVideo.src = heroVideos[index];
            heroVideo.load();
            heroVideo.play().catch(() => {});
        };

        heroVideo.addEventListener('ended', () => {
            currentVideoIndex = (currentVideoIndex + 1) % heroVideos.length;
            playVideo(currentVideoIndex);
        });

        playVideo(currentVideoIndex);
    }

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (mobileToggle) {
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Services Carousel: manual controls + auto-advance
    const servicesCarousel = document.querySelector('.services-carousel');
    if (servicesCarousel) {
        const track = servicesCarousel.querySelector('.services-track');
        const prevBtn = servicesCarousel.querySelector('.carousel-btn.prev');
        const nextBtn = servicesCarousel.querySelector('.carousel-btn.next');

        const getStep = () => track.clientWidth;

        const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;

        const advance = () => {
            if (atEnd()) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: getStep(), behavior: 'smooth' });
            }
        };

        if (nextBtn) nextBtn.addEventListener('click', advance);
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (track.scrollLeft <= 5) {
                    track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
                } else {
                    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
                }
            });
        }

        let autoplay = setInterval(advance, 4000);
        const stopAutoplay = () => { clearInterval(autoplay); autoplay = null; };
        const startAutoplay = () => { if (!autoplay) autoplay = setInterval(advance, 4000); };

        servicesCarousel.addEventListener('mouseenter', stopAutoplay);
        servicesCarousel.addEventListener('mouseleave', startAutoplay);
        track.addEventListener('touchstart', stopAutoplay, { passive: true });
    }

    // Reveal on scroll (coverage bento and other .reveal elements)
    const revealEls = document.querySelectorAll('.reveal, .coverage-card');
    if (revealEls.length && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(el => revealObserver.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('is-visible'));
    }

    // FAQ Accordion (service pages)
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(el => el.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // Form Submission (Prevent default for now)
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the data to a server
            alert('Gracias por su interés. Un consultor se pondrá en contacto pronto.');
            leadForm.reset();
        });
    }
});