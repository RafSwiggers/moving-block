const userBlock = document.getElementById('block');
const food = document.getElementById('food');
randompositionx = Math.floor(Math.random() * 25) * 2;
randompositiony = Math.floor(Math.random() * 25) * 2;
var posx = 0;
var posy = 0;
document.addEventListener('keydown', function(e) {
    console.log(e.which);
    if (e.which === 39) {
        posx += 2;
        console.log(posx)
        userBlock.style.left = posx + "vw";
    } else if (e.which === 37) {
        posx -= 2;
        userBlock.style.left = posx + "vw";
    } else if (e.which === 40) {
        posy += 2;
        userBlock.style.top = posy + "vw";
    } else if (e.which === 38) {
        posy -= 2;
        userBlock.style.top = posy + "vw";
    }
})
food.style.left = randompositionx + "vw";
food.style.top = randompositiony + "vw";