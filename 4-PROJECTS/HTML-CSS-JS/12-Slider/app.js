let models = [{
        name: 'Bmw 418d',
        image: './assets/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name: 'Mazda CX-3',
        image: './assets/mazda.jpg',
        link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name: 'Volvo S60',
        image: './assets/volvo.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name: 'Skoda Superb',
        image: './assets/skoda.jpg',
        link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name: 'Honda Civic',
        image: './assets/honda.jpg',
        link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

let index = 0;
let slaytCount = models.length;
const left = document.querySelector(".fa-arrow-circle-left");
const right = document.querySelector(".fa-arrow-circle-right");
let settings = {
    duration: "3000",
    random: true
}
let interval;

init(settings)

left.addEventListener("click", function () {
    index--;
    showSlide(index)
});

right.addEventListener("click", () => {
    index++;
    showSlide(index)

})

function init(settings) {

    let prev;
    setInterval(() => {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount)
            } while (index == prev)
            prev = index;
        } else {
            if (slaytCount == index + 1) {
                index = -1;
            }
        }
        console.log(index);
        showSlide(index)

    }, settings.duration);
}

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    } else if (i >= slaytCount) {
        index = 0
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);
}