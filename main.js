const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    console.log(`${title} by ${author}, ${pages}, ${read}`);
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary(){
    myLibrary.forEach((book) => {book.info()});
}

function newBook(title, author, pages, read){
    return new Book(title, author, pages, read);
}

addBookToLibrary(newBook("a", "n", "c", "d"));
addBookToLibrary(newBook("a", "n", "c", "d"));
addBookToLibrary(newBook("a", "n", "c", "d"));

displayLibrary();