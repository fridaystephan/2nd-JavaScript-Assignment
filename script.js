function lifeInWeeks() {
  const age = document.getElementById("current-age").value;
  const daysLeft = (90 - age) * 365;
  const weeksLeft = Math.floor(daysLeft / 7);
  const monthsLeft = Math.floor(daysLeft / 30);
  document.getElementById("output").innerHTML = `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`;
}

