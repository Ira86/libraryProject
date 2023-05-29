const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 4001;
app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(express.json());

const bookRouter = require('./routes/book');
app.use('/book', bookRouter);

app.listen(PORT, () => {
    console.log('Listening on port*:' + PORT);
});