const quotes=["I look at you and see my whole world in your eyes","Your voice is my favourite sound,your name is my favourite word,and your hug is my favourite place","Beautiful things really come unexpectedly","A real love will make you love yourself even more","You're my today and all of my tomorrows"];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
const musiclinks=[
  {title:"Kaise ab Kahe-Gutar gu",url:"https://www.youtube.com/embed/KTUohb-1rJk"},
  {title:"O Rangrez-Bhaag Milkha Bhaag",url:"https://www.youtube.com/embed/5idNBcKDtvA"},
  {title:"Tum Tak-Raanjhana",url:"https://www.youtube.com/embed/AGsn2ycFRqI"},
  {title:"Chaand Baaliyan",url:"https://www.youtube.com/embed/CV315UIeOZg"},
  {title:"Chaar Kadam-pk",url:"https://www.youtube.com/embed/WKbwopSXLWU"}
];
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
function saveMood(mood) {
            let moodData = JSON.parse(localStorage.getItem("moodData")) || [];
            const today = new Date().toLocaleDateString();
            moodData.push({ date: today, mood: mood });
            localStorage.setItem("moodData", JSON.stringify(moodData));
          }
        saveMood("Romantic");