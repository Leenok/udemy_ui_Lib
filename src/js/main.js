import './lib/lib';

// $('.one').hide().show();

// $('.active').addClass('hello', 'add');
// $('.active').toggleClass('.active');
// $('.active').on('click', sayHello);
// $('button').on('click', sayHello);

// console.log($('button').html('hello'));

// function sayHello(){
//     console.log('Hello');
// }

$('div').click(function() {
    console.log($(this).index());
});

console.log($('.block').find('.active'));