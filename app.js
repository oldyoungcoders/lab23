let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing 1 elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad , quis nostrud exercitation ullamco laboris nisi ut ocean.'

// const regex = /m+/gi;
// const regex = /om?/gi;
// const regex = /\./g;
// const regex = /.ea./g;
// const regex = /\W/g;
// const regex = /\S/g;
const regex = /\d/g;

console.log(regex.test(text));
console.log(text.match(regex));