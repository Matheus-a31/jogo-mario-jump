document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');

    if (!mario || !pipe) {
        console.error('Elementos .mario ou .pipe não foram encontrados no DOM.');
        return;
    }

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game over.jpg';
            mario.style.width = '450px';
            mario.style.marginLeft = '500px';
            mario.style.bottom = '25%';

            clearInterval(loop);
        }
    }, 10);

    document.addEventListener('keydown', jump);
});