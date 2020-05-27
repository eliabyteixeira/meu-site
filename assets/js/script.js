var passwords = ['password2020', 'solutera2020', 'eliabyteixeira', 'COVID=NULL'];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;
var tentativa = 1;

var interval = setInterval(function () {

   for (i = 0; i < counter; i++) {
      characters[i] = password.charAt(i);
   }

   for (i = counter; i < password.length; i++) {
      characters[i] = Math.random().toString(36).charAt(2);
   }

   $('.password').text(characters.join(''));

}, 50);


function hack() {

   setInterval(function () {

      counter++;

      if (counter == password.length && tentativa % 2 == 0) {
         $('.access, .granted').removeClass('hidden');
      }

      if (counter == password.length && tentativa % 2 != 0) {
         $('.rerun, .not-granted').removeClass('hidden');
      }
   }, 900);
}

$(window).on('keydown', hack);
$('.password').on('click', hack);


$('.rerun').on('click', function () {
   //prevent from displaying the same password two times in a row
   indexOld = index;

   do {
      index = Math.floor((Math.random() * passwords.length));
   } while (index == indexOld);

   // adiciona a classe hiden caso a senha nao esteja correta
   $('.not-granted, .rerun').addClass('hidden');
   password = passwords[index];
   characters = [];
   counter = 0;
   tentativa++;

});


$('.access').on('click', function () {
   //prevent from displaying the same password two times in a row
   window.open("home.html", "_self");
});

//keyboard events won't fire if the iframe isn't selected first in Full Page view
$('.start').on('click', function () {
   $(this).addClass('hidden');
   $('.info p:last-child').addClass('line4');
   $('.info p:last-child, .password').removeClass('hidden');
});


/*
Copyright (c) 2020 by Marco Fugaro (https://codepen.io/marco_fugaro/pen/XbxNVx)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/