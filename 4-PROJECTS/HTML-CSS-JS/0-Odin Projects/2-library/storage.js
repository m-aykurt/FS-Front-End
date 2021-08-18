function Storage() {

}
// Storage'a yeni kitapları eklemek için
Storage.prototype.addBookToStorage = function (newBook) {
    let books = this.getBooksFromStorage();

    books.push(newBook);

    localStorage.setItem("books", JSON.stringify(books));

}
// Storage'da daha önce kayıtlı kitapları almak için
Storage.prototype.getBooksFromStorage = function () {
    let books;

    if (localStorage.getItem("books") === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
}

// localstorage dan kitap silme

Storage.prototype.deleteBookFromStorage = function(bookTitle){
    let books = this.getBooksFromStorage();
    
    books.forEach(function(book, index){
        if (book.title === bookTitle){
            books.splice(index,1);
        }
    })
    localStorage.setItem("books" , JSON.stringify(books))
}

// tüm kitapları local den silme

Storage.prototype.clearAllBooksFromStorage = function(){
    localStorage.removeItem("books")
}