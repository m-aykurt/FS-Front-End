document.querySelector("#btn").addEventListener("click", function(){
    // XML HTTPS REQUEST

    const xhr = new XMLHttpRequest()
    
    xhr.onprogress = function(){
        console.log("process işleniyor", this.readyState)
    }

    xhr.onload = function(){
        if (this.status ===200){
            document.getElementById("ajax").textContent = this.responseText
        }
    }

    // xhr.onreadystatechange=function(){
    //     // console.log(this.readyState)
    //     // console.log(this.status)

    //     if (this.status==200 && this.readyState==4){
    //         // response hazır

    //         console.log(this.responseText)
    //     }
    // }


    xhr.open("GET", "example.txt",true);

    xhr.send();
})

