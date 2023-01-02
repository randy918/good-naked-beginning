//!  121822.0830        VARIABLES



//!  121822.0826        FUNCTIONS

const init = function () {
  main();
};


window.onload = function () {
    init();
};



//!  123122.1839        MAIN

const main = function () {

    //!  10123.1609         variables

const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');

buttonElement.onclick = function(event) {
  event.preventDefault();
  const value = inputElement.value;
  console.log(value);
}  

};


//!  123122.1839        END