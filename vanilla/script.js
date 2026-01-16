document.addEventListener('DOMContentLoaded', () => {
    // --- Header & Scroll Progress ---
    const header = document.querySelector('header');
    const scrollProgress = document.querySelector('.scroll-progress');
    const navPills = document.querySelectorAll('.nav-pill');
    const sections = ['como-funciona', 'precos', 'blog', 'cases'];

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Header background
        if (scrolled > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll progress bar
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const width = (scrolled / height) * 100;
        scrollProgress.style.width = width + '%';

        // Active nav link
        let current = '';
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.offsetTop;
                if (scrolled >= sectionTop - 150) {
                    current = id;
                }
            }
        });

        navPills.forEach(pill => {
            pill.classList.remove('active');
            if (pill.getAttribute('data-id') === current) {
                pill.classList.add('active');
            }
        });
    });

    // --- Smooth Scroll (Manual for data-id) ---
    navPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const id = pill.getAttribute('data-id');
            const type = pill.getAttribute('data-type');

            if (type === 'external') {
                window.open(pill.getAttribute('data-href'), '_blank');
                return;
            }

            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Calculator ---
    const salaryInput = document.getElementById('salary-input');
    const tabSemEva = document.getElementById('tab-sem-eva');
    const tabComEva = document.getElementById('tab-com-eva');
    const trackFill = document.querySelector('.track-fill');
    const marker = document.querySelector('.marker');
    const markerText = document.querySelector('.marker-label span');
    const markerLabel = document.querySelector('.marker-label');
    const markerDot = document.querySelector('.marker-dot');
    const resultContainer = document.getElementById('result-container');
    const rampText = document.querySelector('.ramp-title');

    let salary = 10000;
    let mode = 'sem-eva';

    function updateCalculator() {
        // Calculations
        const costSemEva = salary * 4;
        const costComEva = salary * 1.5;
        const economy = salary * 2.5;

        // UI State
        if (mode === 'sem-eva') {
            tabSemEva.classList.add('active');
            tabComEva.classList.remove('active', 'active-primary');
            trackFill.style.width = 'calc(100% - 2rem)';
            trackFill.style.background = '#eeeeee';
            marker.style.left = '100%';
            markerText.innerText = '8 meses';
            markerLabel.style.background = 'white';
            markerLabel.style.border = '1px solid #eeeeee';
            markerLabel.style.color = 'inherit';
            markerDot.style.background = '#ccc';
            rampText.style.color = '#999';

            resultContainer.innerHTML = `
                <div class="result-card cost animate-fade-up">
                    <span style="font-size: 0.875rem; font-weight: 700; color: #666;">Custo de delay</span>
                    <span style="font-size: 1.25rem; font-weight: 900;">R$ ${costSemEva.toLocaleString('pt-BR')}</span>
                </div>
            `;
        } else {
            tabSemEva.classList.remove('active');
            tabComEva.classList.add('active', 'active-primary');
            trackFill.style.width = 'calc(37.5% - 1rem)';
            trackFill.style.background = 'hsl(var(--primary))';
            trackFill.style.boxShadow = '0 0 15px hsla(var(--primary), 0.4)';
            marker.style.left = '37.5%';
            markerText.innerText = '3 meses';
            markerLabel.style.background = 'hsl(var(--primary))';
            markerLabel.style.color = 'white';
            markerLabel.style.border = 'none';
            markerDot.style.background = 'hsl(var(--primary))';
            rampText.style.color = 'hsl(var(--primary))';

            resultContainer.innerHTML = `
                <div class="result-card economy animate-fade-up">
                    <span style="font-size: 0.875rem; font-weight: 700;">Economia estimada</span>
                    <span style="font-size: 1.25rem; font-weight: 900;">R$ ${economy.toLocaleString('pt-BR')}</span>
                </div>
            `;
        }
    }

    salaryInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val === '') {
            salary = 0;
            e.target.value = '';
        } else {
            salary = parseInt(val, 10);
            e.target.value = salary.toLocaleString('pt-BR');
        }
        updateCalculator();
    });

    tabSemEva.addEventListener('click', () => {
        mode = 'sem-eva';
        updateCalculator();
    });

    tabComEva.addEventListener('click', () => {
        mode = 'com-eva';
        updateCalculator();
    });

    // Initial run
    updateCalculator();
});
