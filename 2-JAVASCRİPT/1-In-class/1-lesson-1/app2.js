var span = document.querySelectorAll("span")

function setup(this){
    for (i = 0; i < span.length; i++) {
        span[i].classList.add('active')
    }
}


console.log(span)