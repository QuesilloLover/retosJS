document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 30; i++) {
        let light = document.createElement("div");
        light.classList.add("light");
        light.style.left = `${Math.random() * 100}vw`; 
        light.style.top = `${Math.random() * 100}vh`;
        light.style.background = `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8), rgba(0, 0, 0, 0) 100%)`;
        light.style.animationDuration = `${Math.random() * 5 + 5}s`;
        document.body.appendChild(light);
    }
});
