document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = Array.from(document.querySelectorAll('.tab-button'));
    const tabContents = document.querySelectorAll('.tab-content');

    function activateTab(button) {
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        const target = document.getElementById(button.getAttribute('data-tab'));
        if (target) target.classList.add('active');
        button.focus();
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => activateTab(button));
        button.addEventListener('keydown', e => {
            const { key } = e;
            let newIndex = index;
            if (key === 'ArrowRight') newIndex = (index + 1) % tabButtons.length;
            if (key === 'ArrowLeft') newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
            if (key === 'Home') newIndex = 0;
            if (key === 'End') newIndex = tabButtons.length - 1;
            if (newIndex !== index) {
                e.preventDefault();
                activateTab(tabButtons[newIndex]);
            }
            if (key === 'Enter' || key === ' ') {
                e.preventDefault();
                activateTab(button);
            }
        });
    });

    if (!document.querySelector('.tab-button.active') && tabButtons.length > 0) {
        activateTab(tabButtons[0]);
    }
});
