var mysong = document.getElementById('song').play();
const userBlock = document.getElementById('block');
counter = 0;
newfood = document.getElementById('food');
randompositionx = Math.floor(Math.random() * 25) * 2;
randompositiony = Math.floor(Math.random() * 25) * 2;
scoreboard = document.getElementById("scoreboard")
var posx = 0;
var posy = 0;
food.style.left = randompositionx + "vw";
food.style.top = randompositiony + "vw";
document.addEventListener('keydown', function(e) {
    if (e.which === 39) {
        posx += 2;
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
    if ((newfood.style.left === userBlock.style.left) && (newfood.style.top === userBlock.style.top)) {
        counter++;
        scoreboard.innerText = "You've eaten " + counter + " blocks!"
        newfood.style.left = Math.floor(Math.random() * 25) * 2 + 'vw';
        newfood.style.top = Math.floor(Math.random() * 25) * 2 + 'vw';
    };
});

console.log(parseInt(newfood.style.left));