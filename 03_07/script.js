/**
 * Create a new object
 */

const hollyTree = {
  location: "frontYard",
  height: 20,
  color: "green",
  alive: true,
  branches: {
    count: 30,
    length: 10,
    color: "brown",
  },
  growBranch: function (numBranches) {
    this.branches.count += numBranches;
  },
};

console.log("First the Holly tree had", hollyTree.branches.count, "branches");
hollyTree.growBranch(5);
console.log("Then it grew to", hollyTree.branches.count, "branches");
