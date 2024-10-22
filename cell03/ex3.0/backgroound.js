const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', function() {

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;

});


function getRandomColor() {
    
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
}
