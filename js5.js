// class Greeter {
//     constructor (name) {
//         this.name = name || 'John Doe';
//     }
//     hello () {
//         return `Hello, my name is ${ this.name }`;
//     }
// }
// const george = new Greeter('George');
// const msg = george.hello();
// const mikey = new Greeter("Mikey");
// const txt = mikey.hello();
// console.log(msg); // Hello, my name is George
// console.log(txt);

const proto = {
    hello () {
        return `Hello, my name is ${ this.name }`;
    }
};
const greeter = (name) => Object.assign(Object.create(proto), {
    name
});
const george = greeter('george');
const msg = george.hello();
console.log(msg);
const migs = greeter("Migs");
const txt = migs.hello();
console.log(txt);
