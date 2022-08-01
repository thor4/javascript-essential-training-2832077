/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book(
  "My Book 1",
  "Joe Smith",
  10001,
  "December 5, 2018",
  "Done Reading"
);

const book2 = new Book(
  "My Book 2",
  "Joe Smith",
  10002,
  "January 15, 2019",
  "Reading"
);

const book3 = new Book(
  "My Book 3",
  "Mary Smith",
  10003,
  "October 5, 2019",
  "Done Reading"
);

const book4 = new Book(
  "My Book 4",
  "Joe Smith",
  10004,
  "December 1, 2020",
  "Not Started"
);

const book5 = new Book(
  "My Book 5",
  "John Applebaum",
  10005,
  "March 21, 2022",
  "Done Reading"
);

console.log(
  "I have the following 5 books: ",
  book1,
  book2,
  book3,
  book4,
  book5
);
console.log("I am currently", book2.status, "Book 2");
book2.toggleBookStatus("Done Reading");
console.log("Now I am", book2.status, "Book 2");
