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
  //!  10123.1609  variables

  const buttonElement = document.querySelector("#search");
  const inputElement = document.querySelector("#inputValue");

  //!  10123.1609 functions

  buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;
    searchQuerySubjectSix = value;
    makeSearchAPI_URL();
    console.

    fetch(makeSearchAPI_URL)
    .then()
    .then()
    .catch();
  };

  function makeSearchAPI_URL() {
    let searchAPI =
      searchURLOne +
      searchMajorCategoryTwo +
      searchPrefixThree +
      searchAPI_KEYFour +
      searchQueryPrefixFive +
      searchQuerySubjectSix +
      searchPagePrefixSeven +
      searchPageEight;
    console.log(`one ${searchAPI}`);
  }

  //!  10123.161 0  main body

  makeSearchAPI_URL();

  //!  123122.1839  END
};
