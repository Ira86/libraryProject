const bookModel = require("../models/bookModel");
const theLibrary = require("../theLibrary");

async function getAllBooks() {

        let books = [];
        let data = await theLibrary.selectAllBooks()
        data.forEach(book => {
            books.push(new bookModel(book.title, book.author, book.publication_date, book.genre, book.available, book.loaned))
        });
        return books;
}


async function getBookByKeyword(keyword, type) {
    let books = [];

    let data = await theLibrary.selectBookByKeyword(keyword, type)

    data.forEach(book => {
        books.push(new bookModel(book.book_id, book.title, book.author, book.publication_date, book.genre, book.available, book.loaned))
    });

    return books;


}

async function addBook(title, author, publication_date, genre) {

    theLibrary.insertBook(title, author, publication_date, genre);
};

async function editBook(book_id, title, author, publication_date, genre) {

    theLibrary.updateBook(book_id, title, author, publication_date, genre);
};

async function deleteBook(book_id) {

    theLibrary.deleteBook(book_id);
};

module.exports = {
    getAllBooks,
    getBookByKeyword,
    addBook,
    editBook,
    deleteBook
}