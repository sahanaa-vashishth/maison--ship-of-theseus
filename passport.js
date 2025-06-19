// Passport Data
const passportData = {
    stamps: [],
    unlockedLocations: new Set(),
    passportNumber: Math.floor(1000 + Math.random() * 9000),
    issueDate: new Date().toLocaleDateString()
};

// Initialize Passport
function initPassport() {
    // Load saved data from localStorage
    const savedPassport = localStorage.getItem('asiaHeritagePassport');
    if (savedPassport) {
        const parsed = JSON.parse(savedPassport);
        passportData.stamps = parsed.stamps || [];
        passportData.unlockedLocations = new Set(parsed.unlockedLocations || []);
        passportData.passportNumber = parsed.passportNumber || passportData.passportNumber;
    }

    // Set passport info
    document.getElementById('passport-number').textContent = passportData.passportNumber;
    document.getElementById('issue-date').textContent = passportData.issueDate;
    updateStampCount();

    // Add event listeners
    document.getElementById('passport-icon').addEventListener('click', openPassport);
    document.getElementById('passport-close-btn').addEventListener('click', closePassport);

    // Update stamps display
    updateStampsDisplay();
}

// Add a new stamp to the passport
function addStamp(location) {
    // Check if location is already unlocked
    if (passportData.unlockedLocations.has(location.name)) return;

    // Add to unlocked locations
    passportData.unlockedLocations.add(location.name);

    // Create new stamp
    const newStamp = {
        name: location.name,
        country: location.country,
        emoji: location.emoji,
        date: new Date().toLocaleDateString(),
        isNew: true
    };

    // Add to stamps array
    passportData.stamps.unshift(newStamp);

    // Update UI
    updateStampCount();
    updateStampsDisplay();

    // Save to localStorage
    savePassport();

    // Show notification
    showStampNotification(newStamp);
}

// Show stamp notification
function showStampNotification(stamp) {
    document.getElementById('stamp-emoji').textContent = stamp.emoji;
    document.getElementById('stamp-location').textContent = stamp.name;
    
    const stampNotification = document.getElementById('stamp-notification');
    stampNotification.classList.add('show');
    
    setTimeout(() => {
        stampNotification.classList.remove('show');
    }, 3000);
}

// Update stamp count display
function updateStampCount() {
    document.getElementById('stamp-count').textContent = passportData.stamps.length;
}

// Update stamps display
function updateStampsDisplay() {
    const stampsCollection = document.getElementById('stamps-collection');
    
    if (passportData.stamps.length === 0) {
        stampsCollection.innerHTML = `
            <div class="empty-passport">
                No stamps collected yet.<br>
                Explore locations to collect your first stamp!
            </div>
        `;
        return;
    }

    stampsCollection.innerHTML = passportData.stamps.map(stamp => `
        <div class="stamp ${stamp.isNew ? 'new' : ''}">
            <div class="stamp-emoji">${stamp.emoji}</div>
            <div class="stamp-name">${stamp.name}</div>
            <div class="stamp-country">${stamp.country.toUpperCase()}</div>
            <div class="stamp-date">${stamp.date}</div>
        </div>
    `).join('');

    // Add click event to stamps to mark as seen
    document.querySelectorAll('.stamp').forEach(stampEl => {
        stampEl.addEventListener('click', function() {
            const stampName = this.querySelector('.stamp-name').textContent;
            const stamp = passportData.stamps.find(s => s.name === stampName);
            if (stamp) {
                stamp.isNew = false;
                savePassport();
                updateStampsDisplay();
            }
        });
    });
}

// Open passport
function openPassport() {
    document.getElementById('passport-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close passport
function closePassport() {
    document.getElementById('passport-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Mark all stamps as not new after viewing
    passportData.stamps.forEach(stamp => stamp.isNew = false);
    savePassport();
    updateStampsDisplay();
}

// Save passport to localStorage
function savePassport() {
    localStorage.setItem('asiaHeritagePassport', JSON.stringify({
        stamps: passportData.stamps,
        unlockedLocations: Array.from(passportData.unlockedLocations),
        passportNumber: passportData.passportNumber
    }));
}

// Initialize passport when DOM is loaded
document.addEventListener('DOMContentLoaded', initPassport);