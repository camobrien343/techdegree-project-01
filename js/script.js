/* Treehouse Techdegree
Cameron O'Brien
Project 01
Random Quote Generator
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Global variables
const quotes = [ {
  quote : "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
  source : "Albert Einstein",
  citation : "The World As I See It",
  date : "1931",
  tags: ["Smart"]
}, {
  quote : "Everything you can imagine is real.",
  source : "Pablo Picasso",
  tags: ["Art"]
}, {
  quote : "Art is not what you see, but what you make others see.",
  source : "Edgar Degas",
  tags: ["Art", "Good"],
}, {
  quote : "Poo-tee-weet?",
  source : "Kurt Vonnegut",
  citation : "Slaughterhouse-Five",
  tags: ["Author", "Kilgore Trout"]
}, {
  quote : "It is easier to stay out than get out.",
  source : "Mark Twain",
  tags: ["Author", "Knowledge"]
}, {
  quote : "The bulk of the world’s knowledge is an imaginary construction.",
  source : "Hellen Keller",
  citation : "The Five-sensed World",
  date : "1910",
  tags: ["Author"]
} ];

// Random Quote function created using random object in quotes array
function getRandomQuote() {
  let randomNumber = quotes[Math.floor(Math.random()*quotes.length)];
  return randomNumber;
}

// This setInterval will change the displayed quote every 30 seconds
setInterval(printQuote, 30000);

// Function to create random RGB Values to change background color and store in variable randomColor
function random_bg_color() {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
    return randomColor;
}

// Function to construct random quote and insert into page
function printQuote() {
  let printRandomQuote = getRandomQuote(); //Calls getRandomQuote function and stores in variable printRandomQuote
  let message = '<p class="quote">' + printRandomQuote.quote + '</p>';
  message += '<p class="source">' + printRandomQuote.source;
  if ( printRandomQuote.citation !== undefined && printRandomQuote.date !== undefined ) {
    message += '<span class="citation">' + printRandomQuote.citation + '</span>'; 
    message += '<span class="year">' + printRandomQuote.date + '</span>';
  } else if (printRandomQuote.citation !== undefined){
    message += '<span class="citation">' + printRandomQuote.citation + '</span>'; 
  } else if (printRandomQuote.date !== undefined){
    message += '<span class="year">' + printRandomQuote.date + '</span>'; 
  }
  message += '</p>';
  message += '<p class="tags">tags: ' + printRandomQuote.tags.join(", ") + '</p>';
  document.body.style.backgroundColor = random_bg_color(); // Changes the background color to random color when printQuote is called
  document.getElementById('quote-box').innerHTML = message;
}
