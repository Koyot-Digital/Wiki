// Toggle custom font input visibility
function toggleCustomFontInput() {
    const select = document.getElementById('FontSel');
    const input = document.getElementById('CustomFontInput');
    input.style.display = (select.value === 'Custom') ? 'inline-block' : 'none';
}

// Get the actual font string based on selection or custom input
function getSelectedFont() {
    const select = document.getElementById('FontSel');
    if (select.value === 'Custom') {
        const input = document.getElementById('CustomFontInput');
        if (input === "Turbine-C"){
            return 'Arial, sans-serif; ';
        }
        // Use whatever the user typed, fallback to Arial if blank
        return input.value.trim() || 'Arial, sans-serif';
    } else {
        // Return the selected option directly
        // Example: <option value="'Times New Roman', serif">Times New Roman</option>
        return select.value || 'Arial, sans-serif';
    }
}

// Save preferences to localStorage, used in the button on settings.html
function saveToLocal() {
    const theme = document.getElementById('ClrSel').value;
    const format = document.getElementById('FrmtSel').value;
    const font = getSelectedFont();
    location.reload()
    localStorage.setItem('theme', theme);
    localStorage.setItem('format', format);
    localStorage.setItem('font', font);

    applyPreferences();
}

// Apply preferences dynamically
function applyPreferences() {
    const theme = localStorage.getItem('theme') || 'Lght';
    const format = localStorage.getItem('format') || 'USA';
    const font = localStorage.getItem('font') || 'Arial, sans-serif';

    // Apply theme
    document.body.style.backgroundColor = theme === 'Drk' ? '#111' : '#fff';
    document.body.style.color = theme === 'Drk' ? '#eee' : '#000';

    // Apply font to all of the HTML
    if (font !== "Turbine-C"){
        document.querySelectorAll('html').forEach(el => el.style.fontFamily = font);
    }else{
        document.body.style.transform = "rotate(180deg)";
        document.body.style.display = "inline-block"; // required so transform applies
        }
    // Apply number and date formatting
    document.querySelectorAll('span.number').forEach(el => {
        el.textContent = formatNumber(el.textContent, format);
    });
    document.querySelectorAll('span.date').forEach(el => {
        el.textContent = formatDate(el.textContent, format);
    });
}

// Format numbers (space → decimal) with commas or periods
function formatNumber(numStr, format) {
    let num = parseFloat(numStr.replace(' ', '.'));
    if(format === 'USA') {
        return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    } else if(format === 'EUR') {
        return num.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    }
    return numStr;
}

// Format dates from DD/MMM/YYYY to selected locale
function formatDate(dateStr, format) {
    const months = { JAN:0, FEB:1, MAR:2, APR:3, MAY:4, JUN:5, JUL:6, AUG:7, SEP:8, OCT:9, NOV:10, DEC:11 };
    const parts = dateStr.split('/');
    if(parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = months[parts[1].toUpperCase()] ?? (parseInt(parts[1],10)-1);
        const year = parseInt(parts[2],10);
        const dateObj = new Date(year, month, day);

        if(format === 'USA') return dateObj.toLocaleDateString('en-US', { month:'2-digit', day:'2-digit', year:'numeric', hour12:'true' });
        if(format === 'EUR') return dateObj.toLocaleDateString('de-DE', { month:'2-digit', day:'2-digit', year:'numeric', hour12:'False' });
    }
    return dateStr;
}

// Initialize preferences on page load
document.addEventListener('DOMContentLoaded', () => {
    // Restore dropdowns
    const theme = localStorage.getItem('theme') || 'Lght';
    const format = localStorage.getItem('format') || 'USA';
    const font = localStorage.getItem('font') || 'Arial, sans-serif';

    document.getElementById('ClrSel').value = theme;
    document.getElementById('FrmtSel').value = format;

    const select = document.getElementById('FontSel');
    const customInput = document.getElementById('CustomFontInput');

    if(['Arial, sans-serif','Monospaced','Unitype',"'OpenDyslexic', 'OpenDyslexic'"].includes(font)) {
        select.value = Object.keys({
            'Sans Serif':'Arial, sans-serif',
            'Monospaced':"'Courier New', monospace",
            'Unitype':"'Unitype', sans-serif",
            'Open Dyslexic':"'OpenDyslexic', 'OpenDyslexic'"
        }).find(key => getSelectedFontFromKey(key) === font);
        customInput.style.display = 'none';
    } else {
        select.value = 'Custom';
        customInput.style.display = 'inline-block';
        customInput.value = font;
    }

    applyPreferences();
});

function getSelectedFontFromKey(key) {
    switch(key) {
        case 'Sans Serif': return 'Arial, sans-serif';
        case 'Monospaced': return "'Courier New', monospace";
        case 'Unitype': return "'Unitype', sans-serif";
        case 'Open Dyslexic': return "'OpenDyslexic', 'OpenDyslexic'";
        default: return 'Arial, sans-serif';
    }
}
