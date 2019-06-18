const userBlock = document.getElementById('block');
var posx = 0;
var posy = 0;
document.addEventListener('keydown', function(e) {
    console.log(e.which);
    if (e.which === 39) {
        posx += 5;
        console.log(posx)
        userBlock.style.left = posx + "px";
    } else if (e.which === 37) {
        posx -= 5;
        userBlock.style.left = posx + "px";
    } else if (e.which === 40) {
        posy += 5;
        userBlock.style.top = posy + "px";
    } else if (e.which === 38) {
        posy -= 5;
        userBlock.style.top = posy + "px";
    }
})