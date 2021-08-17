// yeni element olusturma

{/* <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>                */}

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1]

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr"
newLink.target = "_blank"


//text content

// cardBody.textContent = "merhaba"

//textNode
const text = document.createTextNode("naber")
cardBody.appendChild(text)
newLink.appendChild(document.createTextNode("farklı sayfaya git !"))


cardBody.appendChild(newLink)

console.log(cardBody)
