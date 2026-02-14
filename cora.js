let isOpened = false;

function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    if (!isOpened) {
        envelope.classList.add('open');
        isOpened = true;
        setTimeout(escribirMensaje, 800);
    }
}

function escribirMensaje() {
    const texto = "Mi amor, desde que llegaste a mi vida todo cambió para mejor. Gracias por tu sonrisa, tu paciencia y tu forma única de ser. Eres mi persona favorita en este mundo, de verdad no sabes cuento te amoo ❤️";
    const elemento = document.getElementById("mensaje");
    
    let i = 0;
    function type() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(type, 45);
        } else {
            createMagic();
        }
    }
    type();
}

function createMagic() {
    // Generar corazones y brillos
    setInterval(() => {
        createParticle("❤️");
        createParticle("✨");
         createParticle("🥰");
    }, 300);
}

function createParticle(symbol) {
    const p = document.createElement("div");
    p.className = "particle";
    p.innerHTML = symbol;
    p.style.left = Math.random() * 100 + "vw";
    p.style.bottom = "0";
    p.style.fontSize = (Math.random() * 20 + 10) + "px";
    p.style.animation = `rise ${Math.random() * 3 + 3}s ease-out forwards`;
    
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
}

// Parallax suave con el movimiento del mouse
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    document.querySelector('.envelope-wrapper').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

});
