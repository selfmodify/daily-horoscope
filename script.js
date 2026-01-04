// 1. Compatibility Logic
function checkCompatibility() {
    const s1 = document.getElementById('sign1').value;
    const s2 = document.getElementById('sign2').value;
    const result = document.getElementById('comp-result');
    
    // An array of fun cosmic messages
    const messages = [
        "A match made in the heavens! 🌌",
        "Sparkling energy, but requires patience. ⚡",
        "A deep, soulful connection. 🌊",
        "Opposites attract, but prepare for fireworks! 🔥",
        "Stable and grounded. A great duo. 🌱"
    ];
    
    // Pick a message based on the combined name lengths for "random consistency"
    const index = (s1.length + s2.length) % messages.length;
    result.innerText = `${s1} & ${s2}: ${messages[index]}`;
}

// 2. Lucky Number Logic
function generateLuckyNumbers() {
    const display = document.getElementById('numbers-display');
    let numbers = [];
    for(let i = 0; i < 3; i++) {
        numbers.push(Math.floor(Math.random() * 99) + 1);
    }
    display.innerHTML = `Your lucky numbers for today: <strong>${numbers.join(', ')}</strong>`;
}
