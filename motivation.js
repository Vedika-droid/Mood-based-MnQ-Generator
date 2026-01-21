const quotes=["Your future needs you,Your past doesn't","Your only limit is you","Hardwork is the distance between your dream and reality","Believe you can and you are halfway there","Fall seven times,stand up eight"];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
const musiclinks=[
  {title:"Besabriya-MS Dhoni:The Untold story",url:"https://www.youtube.com/embed/UBBHpoW3AKA&list=PLmgutjZvzLyryoakC3VAlDptXy4ChQGC3"},
  {title:"Kar har Maidaan fateh-Sanju",url:"https://www.youtube.com/embed/9iIX4PBplAY&list=PLmgutjZvzLyryoakC3VAlDptXy4ChQGC3&index=10"},
  {title:"ziddi Dil",url:"https://www.youtube.com/embed/puKD3nkB1h4&list=PLmgutjZvzLyryoakC3VAlDptXy4ChQGC3&index=2"},
  {title:"Zinda-Bhaag Milkha Bhaag",url:"https://www.youtube.com/embed/Ax0G_P2dSBw&list=PLmgutjZvzLyryoakC3VAlDptXy4ChQGC3&index=9"},
  {title:"Koi kahe kehta rahe-Dil Chahta hai",url:"https://www.youtube.com/embed/ctJI7pCbxAo&list=PLmgutjZvzLyryoakC3VAlDptXy4ChQGC3&index=28"}
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
        saveMood("Motivation");