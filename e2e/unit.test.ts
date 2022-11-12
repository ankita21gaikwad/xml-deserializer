import fs from 'fs';
import { Deserializer } from '../src/deserializer';
import { Book } from '../src/model/book';

let testXml: string;
let books: Book[];

beforeAll(() => {
  // read XML
  testXml = fs.readFileSync('e2e/xml/test.xml', 'utf8');
  // initialize deserializer
  const deserializer = new Deserializer(testXml);
  // get catalog
  const catalog = deserializer.deserialize();
  // get books
  books = catalog.book;
});

test("`title` of the book should be `XML Developer's Guide` where `author` is `Gambardella, Matthew`", () => {
  books.forEach((book) => {
    if (book.author === 'Gambardella, Matthew') {
      expect(book.title).toStrictEqual("XML Developer's Guide");
    }
  });
});

test('`author` of the book should be `Ralls, Kim` where `title` is `Midnight Rain`', () => {
  books.forEach((book) => {
    if (book.title === 'Midnight Rain') {
      expect(book.author).toStrictEqual('Ralls, Kim');
    }
  });
});

test('`genre` of the book should be `Romance` where `title` is `Lover Birds`', () => {
  books.forEach((book) => {
    if (book.title === 'Lover Birds') {
      expect(book.genre).toStrictEqual('Romance');
    }
  });
});

test('`price` of the book should be `6.95` where `title` is `Paradox Lost`', () => {
  books.forEach((book) => {
    if (book.title === 'Paradox Lost') {
      expect(book.price).toStrictEqual(6.95);
    }
  });
});

test('`publish_date` of the book should be `2001-04-16` where `author` is `Galos, Mike`', () => {
  books.forEach((book) => {
    if (book.author === 'Galos, Mike') {
      expect(book.publish_date).toStrictEqual('2001-04-16');
    }
  });
});

test('`description` of the book should contain `A deep sea` where `title` is `Splish Splash`', () => {
  books.forEach((book) => {
    if (book.title === 'Splish Splash') {
      expect(book.description).toContain('A deep sea');
    }
  });
});
