// soal1.js
const geometry = require("./geometry");

const squareSide = 5;
const rectangleLength = 6;
const rectangleWidth = 4;

console.log("Square Area:", geometry.calculateSquareArea(squareSide));
console.log("Square Perimeter:", geometry.calculateSquarePerimeter(squareSide));
console.log(
  "Rectangle Area:",
  geometry.calculateRectangleArea(rectangleLength, rectangleWidth)
);
console.log(
  "Rectangle Perimeter:",
  geometry.calculateRectanglePerimeter(rectangleLength, rectangleWidth)
);
