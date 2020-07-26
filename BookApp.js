// The find method is usually used when you want to find a unique value, i.e. an unique id number
// The map method is usually used when you want to log a certain part/s of an array
// The every method is used when you want to check that every value matches something based of a condition you set
// The some method is used when you want to check if any value/s matches your condition
// The sort function is used when you want to arrange values based on a certain condition

let books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        yearOfPublication: 1997,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "426ef1f8-59fc-40c8-8e0b-6943848be1ac"
    }, {
        title: "Harry Potter and the Chamber of Secrets",
        yearOfPublication: 1998,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "ce215083-e77d-4ead-917e-680d11443b69"
    }, {
        title: "Harry Potter and the Prisoner of Azkaban",
        yearOfPublication: 2000,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "6454c991-985e-4f1c-b390-76ef4293f6ba"
    }, {
        title: "The Hobbit",
        yearOfPublication: 1937,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "fa7cb9a8-0f81-4205-8650-64225d7c1de4"
    }, {
        title: "The Fellowship of the Ring",
        yearOfPublication: 1954,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "752b80b5-7b9f-454d-b1d0-b274480d9ad2"
    }, {
        title: "The Two Towers",
        yearOfPublication: 1954,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "ba86fdd0-1ac2-4867-a0fa-d1b1bd7de403"
    }, {
        title: "The Return of the King",
        yearOfPublication: 1955,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "64e58f34-94b3-4dd5-9701-d00513f83291"
    }
];
 
let authors = [
    {
        firstName: "J. K.",
        lastName: "Rowling",
        id: "7e7354b8-59e8-4b6a-916b-70882eab6fb6"
    }, {
        firstName: "J. R. R.",
        lastName: "Tolkien",
        id: "184c518a-753f-49ce-9abb-e2e9c29fc980"
    }
];

// Q1 - Create a function called getBooks which returns the titles of all books ordered by their publication year.

const getBooks = () => books.sort((book1, book2) => book1.yearOfPublishication - book2.yearOfPublishication).map(book => book.title);

// console.log(getBooks());

// Q2 - Create a function called getBook which takes an id argument and returns the book with a matching id.

const getBook = id => books.find(book => book.bookId == id);

// console.log(getBook("ba86fdd0-1ac2-4867-a0fa-d1b1bd7de403"));

// Q3 - Create a function called getAuthor which takes an id argument and returns the author with the matching id.

const getAuthor = id => authors.find(author => author.id == id);

// console.log(getAuthor("184c518a-753f-49ce-9abb-e2e9c29fc980"));

// Q4 - Create a function called getBooksByAuthor which takes the id of an author as an argument and returns an array of all the books written by that author in order of the year of publication.

const getBooksByAuthor = id => books.filter(authorsBooks => authorsBooks.authorId == id).sort((book1, book2) => book1 - book2);

// console.log(getBooksByAuthor("7e7354b8-59e8-4b6a-916b-70882eab6fb6"));

// Q5 - Create a function called searchBooks which takes a string which is a search term as an argument. The function should return all books where the title or author name contains the given string.

function getAuthor(id) {
    function authorDoesMatchId(author) {
        return author.id == id;
    }

    return authors.find(authorDoesMatchId);
}

function searchBooks(searchTerm) {
    function termAppearsInBooksOrAuthor(book) {
        let lowerSearchTerm = searchTerm.toLowerCase();

        let author = getAuthor(book.authorId);
        return book.title.toLowerCase().includes(lowerSearchTerm) ||
            author.firstName.toLowerCase().includes(lowerSearchTerm) ||
            author.lastName.toLowerCase().includes(lowerSearchTerm);

    }

    return books.filter(termAppearsInBooksOrAuthor);
}

function sortBooks(sortField) {
    function sortByField(book1, book2) {
        if (book1[sortField] > book2[sortField]) {
            return 1;
        } else if (book1[sortField] < book2[sortField]) {
            return -1;
        } else {
            return 0;
        }
    }

    return books
        .sort(sortByField)
        .map(book => book.title);
}

console.log(searchBooks("otte"));