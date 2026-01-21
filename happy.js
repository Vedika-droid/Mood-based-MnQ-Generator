const quotes = [
    "Smiles are contagious, so go on start the epidemic",
    "If you stumble, make it a part of your dance",
    "You still have teeth, so please smile",
    "Nazar nahi lgegi, tu khush reh!!",
    "Do more things that make you forget to check your phone"
];

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

const happySongs = [
    { title: "Phir Se Udd Chala - Rockstar", url: "https://www.youtube.com/embed/2mWaqsC3U7k" },
    { title: "Jiya re - jab tak hai jaan", url: "https://www.youtube.com/embed/fKApKn9gqtM" },
    { title: "beautiful - goodbye", url: "https://www.youtube.com/embed/UFk3m6sYEqQ" },
    { title: "Gallan Goodiyan - Dil Dhadakne Do", url: "https://www.youtube.com/embed/jCEdTq3j-0U" },
    { title: "liggi - ritwij", url: "https://www.youtube.com/embed/6BYIKEH0RCQ" }
];

const playlist = document.getElementById("playlist");
const player = document.getElementById("main-video");


happySongs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerText = song.title;
    li.onclick = () => {
        player.src = song.url + "?autoplay=1";
    };
    playlist.appendChild(li);

});
function toggleDropdown() {
  document.getElementById("playlist").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(dropdown => dropdown.classList.remove("show"));
  }
};


function saveMood(mood) {
            let moodData = JSON.parse(localStorage.getItem("moodData")) || [];
            const today = new Date().toLocaleDateString();
            moodData.push({ date: today, mood: mood });
            localStorage.setItem("moodData", JSON.stringify(moodData));
        }

        saveMood("Happy");