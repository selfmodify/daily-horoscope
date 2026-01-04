// --- 1. HOROSCOPE LOGIC ---
async function getHoroscope() {
    const sign = document.getElementById('zodiac-select').value;
    const textField = document.getElementById('horoscope-text');
    const resultDiv = document.getElementById('horoscope-result');
    const signTitle = document.getElementById('sign-name');

    resultDiv.classList.remove('hidden');
    textField.innerText = "Consulting the constellations...";

    try {
        // Using a different endpoint that supports CORS
        const response = await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=today`);
        const data = await response.json();
        
        signTitle.innerText = sign.toUpperCase();
        // The data structure is slightly different for this API
        textField.innerText = data.data.horoscope_data; 
    } catch (error) {
        console.error("Error:", error);
        textField.innerText = "The cosmic signals are weak. Check your internet connection!";
    }
}

// --- 2. COMPATIBILITY LOGIC ---
function checkCompatibility() {
    const s1 = document.getElementById('sign1').value;
    const s2 = document.getElementById('sign2').value;
    const result = document.getElementById('comp-result');
    
    const messages = [
        "A celestial masterpiece. You amplify each other's light!",
        "Challenging but rewarding. Growth comes through your differences.",
        "A steady, grounded bond built on mutual respect.",
        "Electric! The chemistry is undeniable, but keep it balanced.",
        "Deeply intuitive. You understand each other without words."
    ];
    
    const index = (s1.length + s2.length) % messages.length;
    result.innerText = `${s1} + ${s2}: ${messages[index]}`;
}

// --- 3. LUCKY NUMBERS ---
function generateLuckyNumbers() {
    const display = document.getElementById('numbers-display');
    let nums = [];
    while(nums.length < 3) {
        let n = Math.floor(Math.random() * 99) + 1;
        if(!nums.includes(n)) nums.push(n);
    }
    display.innerHTML = nums.join(' • ');
}

// --- 4. TAROT LOGIC ---
const tarotDeck = [
    { name: "The Sun", meaning: "A day of clarity, joy, and vitality. Success is yours!" },
    { name: "The Moon", meaning: "Things aren't as they seem. Trust your dreams today." },
    { name: "The Empress", meaning: "Creativity and abundance flow through you. Nurture yourself." },
    { name: "The Hermit", meaning: "Take time for solitude. The answers are within." },
    { name: "The Tower", meaning: "Sudden change is coming. Let go of what no longer serves you." },
    { name: "Wheel of Fortune", meaning: "Luck is shifting in your favor. Be ready for a turn of events." }
];

function drawTarotCard() {
    const res = document.getElementById('tarot-result');
    const cardName = document.getElementById('card-name');
    const cardMeaning = document.getElementById('card-meaning');
    
    const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    
    cardName.innerText = card.name;
    cardMeaning.innerText = card.meaning;
    res.classList.remove('hidden');
    document.getElementById('tarot-btn').innerText = "Draw Again";
}
