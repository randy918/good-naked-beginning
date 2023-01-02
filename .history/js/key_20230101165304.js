const searchURLOne = 'https://api.themoviedb.org/3';
const searchMajorCategoryTwo = "/search/movie";
const searchPrefixThree = "?api_key=";
const searchAPI_KEYFour = "ca1f26ba6eb2ba4fb641257b39d3bea7";
const searchQueryPrefixFive = "&query=";
const searchQuerySubjectSix = "furious";

let searchAPI =
  searchURLOne +
  searchMajorCategoryTwo +
  searchPrefixThree +
  searchAPI_KEYFour +
  searchQueryPrefixFive +
  searchQuerySubjectSix; 

  console.log(searchAPI);
  searchQuerySubjectSix = "furiouso";
  console.log(searchAPI);