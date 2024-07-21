let countries = ["United States", "Canada", "Mexico", "Brazil", "United Kingdom", "Germany", "France", "Italy", "Spain", "Russia", "China", "India", "Japan", "Australia", "South Africa"];
let targetCountry = countries[Math.floor(Math.random() * countries.length)];

function submitGuess() {
  let guess = document.getElementById('guess').value.trim();
  if (countries.includes(guess)) {
    let distance = getDistance(guess, targetCountry);
    if (distance === 0) {
      document.getElementById('feedback').innerText = "Correct! You've guessed the country!";
    } else {
      document.getElementById('feedback').innerText = `You're ${distance} km away from the target country.`;
    }
  } else {
    document.getElementById('feedback').innerText = "Invalid country name. Please try again.";
  }
}

function getDistance(country1, country2) {
  // Placeholder for distance calculation
  // Ideally, implement actual geographic distance calculation
  if (country1 === country2) return 0;
  return Math.random() * 10000; // Random distance for placeholder
}