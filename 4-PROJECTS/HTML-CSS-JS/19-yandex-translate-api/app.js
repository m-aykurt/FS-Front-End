// prototype ajax callback

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit", translateWord)

    document.getElementById("language").onchange= function(){
        
    }
}

function translateWord(e){


    e.preventDefault();
}