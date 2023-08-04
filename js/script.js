var pacman;
var ghost;
var pacmanX = 0;
var pacmanY = 0;
var originalPosition = { x: 0, y: 0 };

function pacmanResetPosition() {
	pacmanX = originalPosition.x;
	pacmanY = originalPosition.y;
	pacman.style.left = pacmanX + "px";
	pacman.style.top = pacmanY + "px";
}

window.addEventListener("DOMContentLoaded", function () {
	pacman = document.getElementById("pacman");
	ghost = document.getElementById("ghost");

	originalPosition.x = pacmanX;
	originalPosition.y = pacmanY;

	window.addEventListener("keydown", function (event) {
		switch (event.key) {
			case "ArrowLeft":
				pacmanX -= 5;
				break;
			case "ArrowRight":
				pacmanX += 5;
				break;
			case "ArrowUp":
				pacmanY -= 5;
				break;
			case "ArrowDown":
				pacmanY += 5;
				break;
		}

		pacman.style.left = pacmanX + "px";
		pacman.style.top = pacmanY + "px";

		if (
			pacmanX + pacman.offsetWidth > ghost.offsetLeft &&
			pacmanX < ghost.offsetLeft + ghost.offsetWidth &&
			pacmanY + pacman.offsetHeight > ghost.offsetTop &&
			pacmanY < ghost.offsetTop + ghost.offsetHeight
		) {
			alert("Perdiste!");
            pacmanResetPosition();
		}
	});
});
