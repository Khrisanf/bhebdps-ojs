document.querySelectorAll('.rotator').forEach(rotator => {
    let currentIndex = 0;

    const rotate = () => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        cases[currentIndex].classList.remove('rotator__case_active');

        currentIndex = (currentIndex + 1) % cases.length;
        const nextCase = cases[currentIndex];

        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = nextCase.dataset.color || 'inherit';

        setTimeout(rotate, nextCase.dataset.speed || 1000);
    };

    rotate();
});
