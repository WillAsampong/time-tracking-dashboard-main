const periodStats = document.querySelectorAll('nav ul li');
const cards = document.querySelectorAll('.card');

const fetchPeriodStats = fetch('/data.json');

fetchPeriodStats
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data[0].timeframes.daily);
    
    cards.forEach((card, index) => {
        const cardTitle = card.querySelector('.card-title');
        const current = card.querySelector('.current');
        const previous = card.querySelector('.previous');

        cardTitle.textContent = data[index].title;
        // current.textContent = data[index].timeframes[daily];
        })
    });
