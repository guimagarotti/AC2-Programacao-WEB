const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somentePares = [];

array.forEach(i => {
    if (i % 2 == 0) 
        somentePares.push(i)
})

console.log(somentePares);
