// EXERCÍCIO 3 

function createPyramid(rows) {
for (let i = 1; i <= rows; i ++) {

    console.log(" ".repeat(rows - 1));
    console.log("*".repeat(1 * i - 1));
   }
}

const pyramidRows = 6;

createPyramid(pyramidRows);