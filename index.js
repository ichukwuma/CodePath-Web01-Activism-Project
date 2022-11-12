//FOR DARK THEME
// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");
}
// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.

//-------------------------------------------

//FOR FORMS
// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");
const addSignature = () => {
  // Write your code to manipulate the DOM here
  let signPet = document.getElementById("signature");
  let para = document.createElement("p"); //Create element

  let fname = document.getElementById('fname');
  let hometown = document.getElementById('hometown');

  para.textContent = " 🖊️ " + fname.value + " from " + hometown.value + " supports     this. ";

  signPet.append(para);

}

// Add a click event listener to the sign now button here
// TODO: Remove the click event listener that calls addSignature
//signNowButton.addEventListener("click", addSignature);

// TODO: Complete validation form
const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  // TODO: Loop through all inputs
  for (var i = 0; i < petitionInputs.length; i++) {
    // TODO: Validate the value of each input
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // TODO: Call addSignature() and clear fields  if no errors
  if (containsErrors == false) {
    addSignature();
    for (var i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }

}
signNowButton.addEventListener('click', validateForm);

//API BOOKS SECTION - WIP

// const proxyURL = "https://cp-proxy3.herokuapp.com/";

// const getBooks = () => {
//   const olQueryURL = "https://openlibrary.org/works/";
//   const bookId = "OL14625268M";
//   const Global_Hunger_URL = proxyURL + olQueryURL + bookId + ".json";

//   //fetch code from URL data we created:
//   fetch(Global_Hunger_URL).then((response) => response.json()).then((data) => {
    
//     console.log(data);
    
//   });



//   //creating p element for book and adding element to webpage
//   let books = document.getElementById("readings");
//   let book = document.createElement("p");
//   book.textContent = data.decription.value;
//   books.appendChid(book);
// }
// getBooks();