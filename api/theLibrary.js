const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:granath123@localhost:5432/theLibrary')

async function selectAllBooks() {

  let data = await db.many("SELECT * FROM books")

  return data;
}

async function insertBook(title, author, publication_date, genre) {

  console.log(title,author,publication_date, genre)
  await db.none(`INSERT INTO books (title, author, publication_date, genre)` +
                `VALUES ('${title}','${author}', ${publication_date}, '${genre}')`);
}

async function updateBook(book_id, title, publication_date, author, genre) {

  await db.none(`UPDATE books SET title = '${title}', publication_date = '${publication_date}', author = '${author}', genre = '${genre}' WHERE book_id = ${book_id}`);
}

async function selectBookByKeyword(keyword) {

  let data = await db.any(`SELECT * FROM books WHERE title LIKE '${keyword}%'`);

  return data;
}

async function selectAllloanbooks() {

  let data = await db.many("SELECT * FROM available")

  return data;
}

async function deleteBook(bookId) {

  await db.none(`DELETE FROM books WHERE book_id = ${book_id}`);
}

module.exports = {
    selectAllBooks,
    selectBookByKeyword,
    selectAllloanbooks,
    insertBook,
    updateBook,
    deleteBook
}