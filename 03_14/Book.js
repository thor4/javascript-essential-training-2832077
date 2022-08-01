class Book {
  constructor(name, author, ISBN, dateReleased, status) {
    this.name = name;
    this.author = author;
    this.ISBN = ISBN;
    this.dateReleased = dateReleased;
    this.status = status;
  }
  toggleBookStatus(bookStatus) {
    this.status = bookStatus;
  }
}

export default Book;
