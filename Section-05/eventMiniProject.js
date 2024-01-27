//Apply an event on all images that remove the images when the user clicked.

const images = document.querySelectorAll('.image');
Array.from(images).forEach((image) => {
    image.addEventListener('click', (e) => {
        const targetImg = e.target.parentNode;
        targetImg.remove();
    })
})