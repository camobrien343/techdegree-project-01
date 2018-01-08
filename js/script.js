/* Treehouse Techdegree
Project 01
Random Quote Generator
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Global variables
let quotes = [ {
  quote : "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
  source : "Albert Einstein",
  citation : "The World As I See It",
  date : "1931"
}, {
  quote : "Everything you can imagine is real.",
  source : "Pablo Picasso",
  citation : "",
  date : ""
}, {
  quote : "Art is not what you see, but what you make others see.",
  source : "Edgar Degas",
  citation : "",
  date : ""
}, {
  quote : "Poo-tee-weet?",
  source : "Kurt Vonnegut",
  citation : "Slaughterhouse-Five",
  date : ""
}, {
  quote : "The bulk of the world’s knowledge is an imaginary construction.",
  source : "Hellen Keller",
  citation : "The Five-sensed World",
  date : "1910"
} ];


// Random Quote function created using random object in quotes array
function getRandomQuote() {
  let randomNumber = quotes[Math.floor(Math.random()*quotes.length)];
  return randomNumber;
}

// Function to print random quote 
function printQuote() {
  let printQuote = getRandomQuote();
  if ( printQuote.date !== "" ) { // Checks to see if there's value in citation property
    document.getElementById('quote-box').innerHTML =
    '<p class="quote">' + printQuote.quote + '</p>' + '<p class="source">' + printQuote.source + '<span class="citation">' + printQuote.citation + '</span>' + '<span class="year">' + printQuote.date + '</span></p>';
  } else if ( printQuote.citation !== "" ) {
    document.getElementById('quote-box').innerHTML =
    '<p class="quote">' + printQuote.quote + '</p>' + '<p class="source">' + printQuote.source + '<span class="citation">' + printQuote.citation + '</span></p>';
  } else {
    document.getElementById('quote-box').innerHTML =
    '<p class="quote">' + printQuote.quote + '</p>' + '<p class="source">' + printQuote.source + '</p>';
  }
  document.getElementById('randomColor').style.backgroundColor = random_bg_color();
}

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(randomColor);
  
    document.body.style.background = randomColor;
    }


// Calls the printQuote function 
printQuote();
