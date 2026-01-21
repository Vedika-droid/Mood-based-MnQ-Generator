const quotes=["Don't panic you are exactly there where you are supposed to be..","God is the only reason I made it this far","If its in god's plan,it will find its way to you ","The delay is not denial-It's divine timing","What is meant for you will never pass you by"];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
const musiclinks=[
  {title:"Radha Krishna Naamawali chant",url:"https://www.youtube.com/embed/oUe2s3UxJqY"},
  {title:"Namami Samisham-Shiv Strotam", url:"https://www.youtube.com/embed/jh2LJVDtGIY"},
  {title:"Jaikal Mahakaal-GoodBye",url:"https://www.youtube.com/embed/tRScKDcYxlk"},
  {title:"Hanuman Chalisa",url:"https://www.youtube.com/embed/AETFvQonfV8"},
  {title:"Sukhharta Dukhharta-Ganpati Aarti",url:"https://www.youtube.com/embed/gFr5p5AyuD0"}];
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
        saveMood("Bhakti");