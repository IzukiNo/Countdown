function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
  const timeLeft = newYear - now.getTime();

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);

function now() {
  const today = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("vi-VN", options);
  document.getElementById("today").textContent = formattedDate;
}

document.addEventListener("DOMContentLoaded", now);
