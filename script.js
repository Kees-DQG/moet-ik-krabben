function checkWeather() {
  const location = document.getElementById("locationInput").value;
  const result = document.getElementById("result");

  const today = new Date();
  const month = today.getMonth(); // 0 = januari
  const hour = today.getHours();

  if ([10, 11, 0, 1, 2].includes(month) && hour < 9) {
    result.innerText = "JA, je moet krabben! ❄️";
  } else {
    result.innerText = "NEE, geen zorgen. 🚗";
  }
}
