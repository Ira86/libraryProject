module.exports = class book {
    constructor(book_id, title, author, publication_date,genre, available,loaned) {
      this.book_id = book_id;
      this.title = title;
      this.author = author;
      this.publication_date = publication_date;
      this.genre = genre;   
      this.available = available; 
       this.loaned = loaned;
      }
  }