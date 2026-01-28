const player = document.getElementById("player");
const body = document.body

document.addEventListener("mousemove", (event) => {
    let x = event.clientX - player.offsetWidth / 2;
    const minX = body.clientWidth * 0.1;
    const maxX = window.innerWidth - minX - player.offsetWidth;
    if (x < minX) x = minX;
    if (x > maxX) x = maxX;
    player.style.left = x + "px";
});

let shootingInterval = null;

document.addEventListener("keypress", (event) => {
    if (event.code === "Space" && !shootingInterval) {
        shoot();
        shootingInterval = setInterval(shoot, 300);
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space" && shootingInterval) {
        clearInterval(shootingInterval);
        shootingInterval = null;
    }
});

function shoot() {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");

    const playerRect = player.getBoundingClientRect();
    bullet.style.left = (playerRect.left + playerRect.width / 2 - 2.5) + "px";
    bullet.style.top = (playerRect.top +10) + "px";

    document.body.appendChild(bullet);

    // Animar la bala subiendo
    const interval = setInterval(() => {
        const currentTop = parseFloat(bullet.style.top);
        if (currentTop <= -10) {
            bullet.remove();
            clearInterval(interval);
        } else {
            bullet.style.top = (currentTop - 5) + "px"; // velocidad de la bala
        }
    }, 16);
}