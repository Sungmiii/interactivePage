let infoBox = document.querySelector('.infotrigger');


infoBox.addEventListener('mouseover', showInfo);

infoBox.addEventListener('mouseout', hideInfo)

function showInfo() {
    let box = document.querySelector('.infobox');
    if (box.style.display === 'none') {
        box.style.display = 'block'
    } else {
        box.style.display = 'none'
    }
}

function hideInfo() {
    let box = document.querySelector('.infobox');
    box.style.display = 'none'
}

let button = document.querySelector('.scrolldown');

button.addEventListener('click', scrollDown)

function scrollDown() {
    let downDiv = document.getElementById('box2')
    downDiv.scrollIntoView()
}

let story1 = document.querySelector('.container__box-5-mapbox__story-1');

story1.addEventListener('click', removeStory);

function removeStory() {

    story1.style.display = 'none'
    let story2 = document.querySelector('.container__box-5-mapbox__story-2')
    story2.style.display = 'block'
    let redbutton = document.querySelector('.redbutton')
    let greenbutton = document.querySelector('.greenbutton')
    redbutton.style.display = 'block'
    greenbutton.style.display = 'none'
}

let img = document.querySelector('.container__box6-img-2');

img.addEventListener('click', showImg)
function showImg() {
    console.log('img clicked')
    img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("https://resources.stuff.co.nz/content/dam/images/1/v/3/e/d/d/image.related.StuffLandscapeSixteenByNine.1240x700.1v3d3b.png/1559939095136.jpg")`;
    let spaninfo = document.querySelector('.showbtn')
    spaninfo.style.display = 'none'
}


// chart.js

let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: '# of Maori cop',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});