/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Tree from "./Tree.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const hollyTree = new Tree("frontYard", 20, "green", true, 30, 10, "brown");

console.log(
  "The",
  hollyTree.color,
  "holly tree has",
  hollyTree.branches.count,
  "branches."
);
console.log("It's in the", hollyTree.location);

hollyTree.growBranch(5);
console.log(
  "Gwyn watered it and it grew to",
  hollyTree.branches.count,
  "branches"
);
