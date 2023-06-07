const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:granath123@localhost:5432/library')

async function selectAllBooks() {

  let data = await db.many("SELECT * FROM books")

  return data;
}

async function insertBook(title, author, publication_date, genre) {

  console.log(title, author, publication_date, genre)
  await db.none(`INSERT INTO books (title, author, publication_date, genre)` +
                `VALUES ('${title}','${author}', ${publication_date}, '${genre}')`)
}

async function updateBook(book_id, title, author, publication_date, genre) {

  await db.none(`UPDATE books SET title = '${title}', publication_date = '${publication_date}', author = '${author}', genre = '${genre}' WHERE book_id = ${book_id}`);
}

async function selectBookByKeyword(keyword, type) {

   let data = '';

  if (type === "title") {
    data = await db.any(
     `SELECT * FROM books WHERE title LIKE '${keyword}%'`
    );
  } else {
    data = await db.any(
      `SELECT * FROM books WHERE author LIKE '${keyword}%'`
    )
  }

  console.log(data);

  return data;
}


async function selectAllloanbooks() {

  let data = await db.many("SELECT * FROM available")

  return data;
}

async function deleteBook(book_id) {

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