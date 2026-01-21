const moodData = JSON.parse(localStorage.getItem("moodData")) || [];
        const dates = moodData.map(item => item.date);
        const moods = moodData.map(item => item.mood);

    
        const moodMap = { "Happy": 5, "Romantic": 4, "Motivated": 3, "Party": 2, "Sad": 1, "Bhakti": 0 };
        const moodValues = moods.map(m => moodMap[m] || 0);

    
        new Chart(document.getElementById("moodChart"), {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: "Mood Levels",
                    data: moodValues,
                    borderColor: "blue",
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return Object.keys(moodMap).find(key => moodMap[key] === value) || "";
                            }
                        }
                    }
                }
            }
        });