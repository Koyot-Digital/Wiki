const svgPath = 'images/Schematic.svg';
const container = document.getElementById('mapContainer');

// State
let scale = 1, offsetX = 0, offsetY = 0;
let dragging = false, startX, startY;

// Load SVG
fetch(svgPath)
.then(res => res.text())
.then(svgText => {
    container.innerHTML = svgText;
    const svg = container.querySelector('svg');

    // --- INTERACTIVITY ---
    svg.querySelectorAll('[id]').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => alert(`Clicked ${el.id}`));
    el.addEventListener('mouseover', () => el.setAttribute('opacity', 0.7));
    el.addEventListener('mouseout', () => el.setAttribute('opacity', 1));
    });

    // --- VIEWBOX MANAGEMENT ---
    const viewBox = {x:0, y:0, width:svg.clientWidth, height:svg.clientHeight};
    function updateViewBox() {
    svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width/scale} ${viewBox.height/scale}`);
    }
    updateViewBox();

    // --- ZOOM CENTERED ON MOUSE ---
    svg.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;

    // Compute world coordinates under mouse
    const worldX = viewBox.x + mouseX / scale;
    const worldY = viewBox.y + mouseY / scale;

    // Update scale
    scale *= zoomFactor;

    // Adjust offset so world point stays under mouse
    viewBox.x = worldX - mouseX / scale;
    viewBox.y = worldY - mouseY / scale;

    updateViewBox();
    });

    // --- PAN WITH DRAG ---
    svg.addEventListener('mousedown', e => {
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    });
    window.addEventListener('mousemove', e => {
    if(dragging){
        const dx = (e.clientX - startX) / scale;
        const dy = (e.clientY - startY) / scale;
        viewBox.x -= dx;
        viewBox.y -= dy;
        startX = e.clientX;
        startY = e.clientY;
        updateViewBox();
    }
    });
    window.addEventListener('mouseup', () => dragging = false);

    // --- TOUCH SUPPORT (pinch & drag) ---
    let lastTouchDistance = null;
    svg.addEventListener('touchstart', e => {
    if(e.touches.length === 2){
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDistance = Math.hypot(dx, dy);
    } else if(e.touches.length === 1){
        dragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }
    });

    svg.addEventListener('touchmove', e => {
    e.preventDefault();
    if(e.touches.length === 2){
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const zoomFactor = dist / lastTouchDistance;
        lastTouchDistance = dist;

        // Midpoint between fingers
        const rect = svg.getBoundingClientRect();
        const midX = (e.touches[0].clientX + e.touches[1].clientX)/2 - rect.left;
        const midY = (e.touches[0].clientY + e.touches[1].clientY)/2 - rect.top;

        const worldX = viewBox.x + midX / scale;
        const worldY = viewBox.y + midY / scale;

        scale *= zoomFactor;
        viewBox.x = worldX - midX / scale;
        viewBox.y = worldY - midY / scale;

        updateViewBox();
    } else if(e.touches.length === 1 && dragging){
        const dx = (e.touches[0].clientX - startX)/scale;
        const dy = (e.touches[0].clientY - startY)/scale;
        viewBox.x -= dx;
        viewBox.y -= dy;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        updateViewBox();
    }
    });

    svg.addEventListener('touchend', e => {
    if(e.touches.length < 2) lastTouchDistance = null;
    if(e.touches.length === 0) dragging = false;
    });

})
.catch(err => console.error('Failed to load SVG:', err));