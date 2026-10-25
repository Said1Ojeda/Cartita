# 💌 Cartita Interactiva 3D

Una experiencia digital interactiva diseñada con estética **Dark Glassmorphism**, animaciones 3D y síntesis de audio en tiempo real. Ideal para dedicar mensajes personalizados mediante enlaces dinámicos sin tocar una sola línea de código adicional.

🔗 **Demo en vivo:** [https://said1ojeda.github.io/Cartita/](https://said1ojeda.github.io/Cartita/)

---

## 🔗 Características Principales

* **Sello de Lacre 3D Interactivo:** Animación de apertura con física fluida y partículas dinámicas al romper el sello.
* **Caja Musical Integrada (Web Audio API):** Melodía procedimental que se activa automáticamente al abrir la carta, acompañada de efectos sonoros suaves sincronizados con la escritura sin depender de archivos MP3 externos.
* **Generador de Enlaces Dinámicos (`URLSearchParams`):** Incluye un modal integrado (`✨ Personalizar`) que permite configurar título, mensaje principal y posdata secreta, generando un enlace listo para compartir por WhatsApp o redes sociales.
* **P.D. Secreta Interactiva:** Componente desbloqueable al finalizar la lectura del mensaje principal.
* **Fondo de Luciérnagas en Canvas:** Animación ambiental ligera renderizada en HTML5 Canvas a 60 FPS.
* **Diseño 100% Responsivo:** Adaptado tanto para pantallas móviles como para monitores de escritorio.

---

## 🔗 Stack Usado

* **HTML5** (Semántica, Canvas API)
* **CSS3** (Variables CSS, Flexbox, Glassmorphism con `backdrop-filter`, Animaciones `@keyframes`)
* **Vanilla JavaScript** (ES6+, Web Audio API, manipulación del DOM, `URLSearchParams`)
* **Google Fonts** (*Dancing Script*, *Cormorant Garamond* y *Plus Jakarta Sans*)

---

## 🔗 Cómo usar o personalizar

### 1. Desde la interfaz web (Sin código)
1. Entra a [https://said1ojeda.github.io/Cartita/](https://said1ojeda.github.io/Cartita/).
2. Haz clic en el botón **✨ Personalizar** en la esquina superior izquierda.
3. Escribe el título, tu mensaje y la posdata secreta.
4. Presiona **Copiar Link 🔗** y envíaselo a esa persona especial.

### 2. Instalación Local
```bash
git clone [https://github.com/Said1Ojeda/Cartita.git](https://github.com/Said1Ojeda/Cartita.git)
cd Cartita
