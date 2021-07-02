import Events from 'eventemitter3';

const rawMixin = function () {
    const attrs = {};
    return Object.assign(this, {
        set (name, value) {
            attrs[name] = value;

            this.emit('change', {
                prop: name,
                value: value
            });
        },
        get (name) {
            return attrs[name];
        }
    }, Events.prototype);
};
const mixinModel = (target) => rawMixin.call(target);
const george = { name: 'george' };
const model = mixinModel(george);
model.on('change', data => console.log(data));
model.set('name', 'Sam');

//! this page does not work see error.
//! cannot user import statement outside a module
//! js6.js:1
//? line one is the problem.
