const quotes=["Too glam to give a damn","Eat.Sleep.Party.Repeat","Trust me,you can dance-Tequila","Life is a Party,Dress like it","Glow sticks>Stress sticks"];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
const musiclinks=[
  {title:"Abhi toh party shuru hui hai-Khoobsurat",url:"https://www.youtube.com/embed/8LZgzAZ2lpQ"},
  {title:"Fevicol se-Dabangg 2",url:"https://www.youtube.com/embed/zE7Pwgl6sLA"},
  {title:"Chammak Challo-Ra.one",url:"https://www.youtube.com/embed/oAVhUAaVCVQ"},
  {title:"Badtmeez dil-Yeh Jawani hai Deewani",url:"https://www.youtube.com/embed/Ax0G_P2dSBw&list=PLmgutjZvzLyryoakC3VAlDptXy4ChQGC3&index=9"},
  {title:"Lungi Dance-Chennai Express",url:"https://www.youtube.com/embed/69CEiHfS_mc"}
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
        saveMood("Party");