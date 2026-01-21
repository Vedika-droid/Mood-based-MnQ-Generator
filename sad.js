const quotes=["It's okay to not to be okay","Even the darkest night will end and the sun will rise","Rainbow comes after the heaviest rain","Your current Chapter isn't thr whole story","The moon reminds us that we can still shine even in darkness"];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
const musiclinks=[
  {title:"Choo lo",url:"https://www.youtube.com/embed/sFMRqxCexDk"},
   {title:"Sahiba-Aditya Rakhiri",url:"https://www.youtube.com/embed/n2dVFdqMYGA"},
   {title:"Aisa kyu maa-Neerja",url:"https://www.youtube.com/embed/7--P4RFGBDA"},
   {title:"Paro-Aditya Rakhiri",url:"https://www.youtube.com/embed/Es4NrOnoNb4"},
   {title:"Woh Shaam-Sarry B",url:"https://www.youtube.com/embed/BqwbEfu5tNQ"}];
const playlist = document.getElementById("playlist");
const player = document.getElementById("main-video");


musiclinks.forEach((song, index) => {
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
        saveMood("sad");