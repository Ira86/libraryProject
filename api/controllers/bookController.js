const { getAllBooks, addBook, getBookByKeyword, editBook, deleteBook } = require("../repositories/bookRepository" );

async function get(req, res) {


        let data = await getAllBooks();

        return res.json(data);

}

async function search(req, res) {


    let data = await getBookByKeyword(req.query.keyword, req.query.type);

    // console.log(data);

    return res.json(data);
}


async function add(req, res) {

    await addBook(req.body.title, req.body.author, req.body.publication_date, req.body.genre);

    res.sendStatus(200);
}


async function edit(req, res) {

    await editBook(req.body.book_id, req.body.title, req.body.author, req.body.publication_date, req.body.genre);

    res.sendStatus(200);

}

async function remove(req, res) {

    await deleteBook(req.body.book_id);
}


module.exports = {
    get,
    add,
    edit,
    search,
    remove
}