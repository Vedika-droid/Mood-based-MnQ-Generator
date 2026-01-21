const badges = [
    { emoji: "🏆", name: "Mood Master" },
    { emoji: "🎵", name: "Music Lover" },
    { emoji: "😂", name: "Fun Seeker" },
    { emoji: "🎉", name: "Party Animal" },
    { emoji: "😇", name: "Peaceful Soul" },
    { emoji: "🔥", name: "Motivation King" }
];

const badgeContainer = document.getElementById("badgeContainer");
const unlockBtn = document.getElementById("unlockBadge");

unlockBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * badges.length);
    const newBadge = badges[randomIndex];

    
    const badgeElement = document.createElement("div");
    badgeElement.classList.add("badge");
    badgeElement.innerText = newBadge.emoji;
    badgeContainer.appendChild(badgeElement);

    
    let storedBadges = JSON.parse(localStorage.getItem("badges")) || [];
    storedBadges.push(newBadge);
    localStorage.setItem("badges", JSON.stringify(storedBadges));
});


window.addEventListener("load", () => {
    const savedBadges = JSON.parse(localStorage.getItem("badges")) || [];
    savedBadges.forEach(badge => {
        const badgeElement = document.createElement("div");
        badgeElement.classList.add("badge");
        badgeElement.innerText = badge.emoji;
        badgeContainer.appendChild(badgeElement);
    });
});
