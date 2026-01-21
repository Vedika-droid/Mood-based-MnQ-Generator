document.addEventListener("DOMContentLoaded", function() {
    const journalEntry = document.getElementById("journalEntry");
    const saveEntry = document.getElementById("saveEntry");
    const entriesList = document.getElementById("entriesList");

    // Load saved entries from localStorage
    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    displayEntries();

    // Save new entry
    saveEntry.addEventListener("click", function() {
        const text = journalEntry.value.trim();
        if (text !== "") {
            const date = new Date().toLocaleString();
            entries.push({ date, text });
            localStorage.setItem("journalEntries", JSON.stringify(entries));
            journalEntry.value = "";
            displayEntries();
        }
    });

    // Display entries
    function displayEntries() {
        entriesList.innerHTML = "";
        entries.forEach(entry => {
            const li = document.createElement("li");
            li.textContent = `${entry.date}: ${entry.text}`;
            entriesList.appendChild(li);
        });
    }
});
