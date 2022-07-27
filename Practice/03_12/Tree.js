/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

const Tree = class {
  constructor(
    // Declare parameters:
    location,
    height,
    color,
    alive,
    branchCount,
    branchLength,
    branchColor
  ) {
    // Define properties using parameters:
    this.location = location;
    this.height = height;
    this.color = color;
    this.alive = alive;
    this.branches = {
      count: branchCount,
      length: branchLength,
      color: branchColor,
    };
  }
  // Add methods:
  growBranch(numBranches) {
    this.branches.count += numBranches;
  }
};

export default Tree;
