const balloon = document.getElementById('balloon');

let size = 200;
const maxSize = 420;
const minSize = 200;

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
    if(size < maxSize) {
        size += 10;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';

        colorIndex = (colorIndex + 1) % colors.length;
        balloon.style.backgroundColor = colors[colorIndex];
    } else {

        size = minSize;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.backgroundColor = 'red';
        }
});

balloon.addEventListener('mouseleave', () => {
    if (size > minSize) {
        size -= 5;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';

        colorIndex = (colorIndex -1 + colors.length) % colors.length;
        balloon.style.backgroundColor = colors[colorIndex];
    }
});
