void function(){
'use strict';


function myBind (targetFunc, newThis){
    return function(...rest){
        return targetFunc.call(newThis, ...rest)
    }
}

function sayHi(){
    console.log(`say hi ${this.name}`);
}

let foo = {
    name: 'sawa',
}
const fooHi = myBind(sayHi, foo);
fooHi();
}()