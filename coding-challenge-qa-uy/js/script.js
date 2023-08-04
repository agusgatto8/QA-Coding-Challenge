var pacman;
var ghost;

window.addEventListener('DOMContentLoaded', function(){
    pacman = document.getElementById('pacman');
    ghost = document.getElementById('ghost');

    var pacmanX = 0;
    var pacmanY = 0;

    window.addEventListener('keydown', function(event) {

        if (event.key === "ArrowLeft") {
            pacmanX -= 5;
        }

        else if (event.key === "ArrowRight") {
            pacmanX += 5;
        }

        else if (event.key === "ArrowUp") {
            pacmanY -= 5;
        }

        else if (event.key === "ArrowDown") {
            pacmanY += 5;
        }

        pacman.style.left = pacmanX + 'px';
        pacman.style.top = pacmanY + 'px';

        if (
            pacmanX + pacman.offsetWidth > ghost.offsetLeft &&
            pacmanX < ghost.offsetLeft + ghost.offsetWidth &&
            pacmanY + pacman.offsetHeight > ghost.offsetTop &&
            pacmanY < ghost.offsetTop + ghost.offsetHeight
        ) {
            alert("Game over!");
        }
    });
});