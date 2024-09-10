const periodStats = document.querySelectorAll('nav ul li');
const dailyStats = document.querySelector('.daily');
const weeklyStats = document.querySelector('.weekly');
const monthlyStats = document.querySelector('.monthly');
const cards = document.querySelectorAll('.card');

fetch('/data.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data[0].timeframes.daily);
    const updateStats = (timeframe) => {
        cards.forEach((card, index) => {
            const cardTitle = card.querySelector('.card-title');
            const current = card.querySelector('.current');
            const previous = card.querySelector('.previous');
    
            cardTitle.textContent = data[index].title;

            current.textContent = timeframe === 'daily' ? `${data[index].timeframes.daily.current}hrs` : timeframe === 'weekly' ? `${data[index].timeframes.weekly.current}hrs` : `${data[index].timeframes.monthly.current}hrs`;



            previous.textContent = timeframe === 'daily' ? `Yesterday - ${data[index].timeframes.daily.previous}hrs` : timeframe === 'weekly' ? `Last week - ${data[index].timeframes.weekly.previous}hrs` : `Last month - ${data[index].timeframes.monthly.previous}hrs`;
        });
    }

    updateStats('daily');

    dailyStats.addEventListener('click', () => {
        console.log('daily');
        updateStats('daily');
    });
    weeklyStats.addEventListener('click', () => {
        console.log('weekly');
        updateStats('weekly')
    });
    monthlyStats.addEventListener('click', () => {
        console.log('monthly');
        updateStats('monthly');
    });
});
