$(document).ready(function() {
    let size = 200;
    const maxSize = 420;
    const minSize = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    $('#balloon').on('click', function() {
        if (size < maxSize) {
            size += 10;
            $(this).css({
                'width': size + 'px',
                'height': size + 'px',
                'background-color': colors[++colorIndex % colors.length]
            });
        } else {
            size = minSize;
            $(this).css({
                'width': size + 'px',
                'height': size + 'px',
                'background-color': 'red'
            });
        }
    });

    $('#balloon').on('mouseleave', function() {
        if (size > minSize) {
            size -= 5;
            $(this).css({
                'width': size + 'px',
                'height': size + 'px',
                'background-color': colors[(--colorIndex + colors.length) % colors.length]
            });
        }
    });
});
