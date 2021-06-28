const mapButton = document.getElementById ("map-btn")
const map = document.getElementById("map")

let toggleButton = false
const handleMapButtonClick = () => {
    toggleButton = !toggleButton
    //console.log("buttona basildi", toggleButton);
    if(toggleButton){
        mapButton.innerHTML="close"
        map.classList.add("active")
    } else {
        mapButton.innerHTML="Show products on map"
        map.classList.remove("active")
    }
}

mapButton.addEventListener("click", handleMapButtonClick)