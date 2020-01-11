$(document).ready(function () {

    let exersizes = require('../../data/exersizes');

    console.log('hello');

    console.log(exersizes);

    for (let i = 0; i < exersizes.length; i++) {
        console.log(exersizes[i]);
        let p = $('<p>');
        $(p).append(exersizes[i]);
    }

});