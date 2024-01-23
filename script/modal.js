function openFullscreen(imageSrc) {
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen');

    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;

    fullscreenDiv.appendChild(imageElement);
    document.body.appendChild(fullscreenDiv);

    document.body.style.overflow = 'hidden';

    fullscreenDiv.addEventListener('click', closeFullscreen);
}

function closeFullscreen() {
    const fullscreenDiv = document.querySelector('.fullscreen');
    document.body.removeChild(fullscreenDiv);
    document.body.style.overflow = 'auto';
}
