"use strict"

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = this._state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(field, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][field] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const foundBook = this.books[i];
                this.books.splice(i, 1);
                return foundBook;
            }
        }
        return null;
    }
}

console.log("---Тестирование библиотеки---\n");

const library = new Library("Библиотека имени Чебурашки");
const book1 = new FantasticBook("Аркадий и Борис Стругацкие", "Гадкие лебеди", 1967, 320);
const book2 = new NovelBook("Герберт Уэлсс", "Война миров", 1898, 200);
const book3 = new DetectiveBook("Артур Конан Дойл", "Этюд в багровых тонах", 1887, 200);
const magazine1 = new Magazine("Мурзилка", 1924, 60);
const damagedBook = new Book("Неизвестный автор", "Ветхая книга", 1919, 51);
damagedBook.state = 20;

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(magazine1);
library.addBook(damagedBook);

let book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
    book1919 = new Book("Сомерсет Моэм", "Луна и грош", 1919, 240)
    book1919.state = 80
    library.addBook(book1919);
}

const givenBook = library.giveBookByName("Гадкие лебеди");

givenBook.state = 10;

givenBook.fix();

library.addBook(givenBook);

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (typeof mark !== "number" || mark < 2 || mark > 5) {
            return;
        }

        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        const subjectMarks = this.marks[subject];
        if (!this.marks.hasOwnProperty(subject) || this.marks[subject].length === 0) {
            return 0;
        }

        const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
        return sum / subjectMarks.length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }

        const totalSum = subjects.reduce((acc, subject) => {
            return acc + this.getAverageBySubject(subject);
        }, 0);

        return totalSum / subjects.length;
    }

}
