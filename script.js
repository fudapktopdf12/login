function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    timeElement.textContent = ${hours}:${minutes};
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

function unlock() {
    const pinInput = document.getElementById('pinInput');
    const correctPIN = "1234";  // Replace with actual PIN logic
    
    if (pinInput.value === correctPIN) {
        alert("Unlocked!");
    } else {
        alert("Incorrect PIN!");
    }
}

setInterval(updateTime, 1000);
updateTime();
