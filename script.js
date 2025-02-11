window.onload = function() {
  setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
    var profilePic = document.getElementById("profilePic");
    profilePic.src = "Screenshot_2024-11-25-19-02-50-71_99c04817c0de5652397fc8b56c3b3817.jpg";

    // random quotes...
    var quotes = [
      "The only way to do great work is to love what you do.",
      "Strive not to be a success, but rather to be of value.",
      "Life is what happens when you're busy making other plans.",
      "No quotes found 😑 (Refresh the site 🥲)",
      "The only way to do great work is to love what you do "
    ];
    document.getElementById("quotesDiv").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  }, 2000); // Loading time = 2 seconds
};
var themeToggle = document.getElementById("themeToggle");
var body = document.body;
themeToggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});
document.getElementById("discordButton").addEventListener("click", function() {
  var popper = document.createElement("div");
  popper.classList.add("popper");
  popper.style.position = "absolute";
  popper.style.top = "50%";
  popper.style.left = "50%";
  popper.style.transform = "translate(-50%, -50%)";
  popper.style.animation = "popperAnimation 1s ease-out";
  // Append to the body
  document.body.appendChild(popper);
  // Remove the popper after the animation is complete
  setTimeout(() => {
    document.body.removeChild(popper);
  }, 1500);
});
var style = document.createElement('style');
style.innerHTML = `
  .popper {
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 100;
  }
  @keyframes popperAnimation {
    0% {
      transform: translate(-50%, -50%) scale(0);
      }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
var scrollSuggestion = document.getElementById("scrollSuggestion");
var thankYou = document.getElementById("thankYou");
var isScrolledToThankYou = false; 
window.addEventListener("scroll", function() {
  var rect = thankYou.getBoundingClientRect();
  if (rect.top <= window.innerHeight && !isScrolledToThankYou) {
    isScrolledToThankYou = true;
    scrollSuggestion.style.display = "none"; 
    createPopperEffect(); // Call the popper effect function
  }
});
function createPopperEffect() {
  var popper = document.createElement("div");
  popper.classList.add("popper");
  popper.style.position = "absolute";
  popper.style.top = "50%";
  popper.style.left = "50%";
  popper.style.transform = "translate(-50%, -50%)";
  popper.style.animation = "popperAnimation 1s ease-out";
  // Append to the body
  document.body.appendChild(popper);
  // Remove the popper after the animation is complete
  setTimeout(() => {
    document.body.removeChild(popper);
  }, 1500);
}
// Music list with name and link
const musicList = [
  { name: "Suzume", link: "Suzume No Tojimari Title Track(PagalWorld.com.so).mp3" },
  { name: "Song 2", link: "https://example.com/song2.mp3" },
  { name: "Song 3", link: "https://example.com/song3.mp3" },
];

// Function to load random music
function loadRandomMusic() {
  const randomIndex = Math.floor(Math.random() * musicList.length);
  const randomMusic = musicList[randomIndex];

  // Update the music player and name
  document.getElementById("music-name").textContent = randomMusic.name;
  document.getElementById("music-player").src = randomMusic.link;
}

// Load a random music on page load

    
