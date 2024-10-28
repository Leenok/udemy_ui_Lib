import './lib/lib';

// $('.one').hide().show();

// $('.active').addClass('hello', 'add');
// $('.active').toggleClass('.active');
$('.active').on('click', sayHello);
$('button').on('click', sayHello);

function sayHello(){
    console.log('Hello');
}