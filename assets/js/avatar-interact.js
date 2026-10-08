document.addEventListener("DOMContentLoaded", async () => {
    const img = document.querySelector('img[src*="blobatar.svg"]');
    if (!img) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fetch the real SVG markup and swap it in for the <img>, so we can
    // reach the eyes/body groups inside it.
    let svg;
    try {
        const res = await fetch(img.src);
        const text = await res.text();
        svg = new DOMParser().parseFromString(text, "image/svg+xml").querySelector("svg");
    } catch (err) {
        return; // if anything goes wrong, the static image just stays as-is
    }
    if (!svg) return;

    svg.setAttribute("width", img.width || svg.getAttribute("width"));
    svg.setAttribute("height", img.height || svg.getAttribute("height"));
    if (img.className) svg.setAttribute("class", img.className);
    svg.style.display = "inline-block";

    img.replaceWith(svg);

    if (reduceMotion) return; // keep it still for people who prefer that

    const body = svg.querySelector("#blob-body");
    const eyes = svg.querySelector("#blob-eyes");
    const blink = svg.querySelector("#blob-eyes-blink");

    const eyeRange = 5;   // how far the eyes can shift (SVG units)
    const bodyRange = 0.9;  // how far the body drifts \u2014 kept tiny

    document.addEventListener("mousemove", (e) => {
        const rect = svg.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const ex = (dx / dist) * eyeRange;
        const ey = (dy / dist) * eyeRange;
        if (eyes) eyes.setAttribute("transform", `translate(${ex.toFixed(2)} ${ey.toFixed(2)})`);

        const bx = (dx / dist) * bodyRange;
        const by = (dy / dist) * bodyRange;
        if (body) body.setAttribute("transform", `translate(${bx.toFixed(2)} ${by.toFixed(2)})`);
    });

    // Occasional blink, every 2-6 seconds, timing randomized so it feels alive
    if (blink) {
        const scheduleBlink = () => {
            const delay = 2000 + Math.random() * 8000;
            setTimeout(() => {
                blink.classList.add("is-blinking");
                setTimeout(() => blink.classList.remove("is-blinking"), 180);
                scheduleBlink();
            }, delay);
        };
        scheduleBlink();
    }
});