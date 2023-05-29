const bookModel = require("../models/bookModel");
const theLibrary = require("../theLibrary");

async function getAllBooks() {

        let books = [];
        let data = await theLibrary.selectAllBooks()
        data.forEach(book => {
            books.push(new bookModel(book.title, book.author, book.publication_date, book.genre, book.available_id))
        });
        return books;
}


async function getBookByKeyword(keyword) {
    let books = [];

    let data = await theLibrary.selectBookByKeyword(keyword)

    data.forEach(book => {
        books.push(new bookModel(book.book_id, book.title, book.author, book.publication_date, book.genre, book.available_id))
    });

    return books;


}

async function addBook(title, author, publication_date, genre, available_id) {

    theLibrary.insertBook(title, author, publication_date, genre, available_id);
};

async function editBook(book_id, title, author, publication_date, genre, available_id) {

    theLibrary.updateBook(book_id, title, author, publication_date, genre, available_id);
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