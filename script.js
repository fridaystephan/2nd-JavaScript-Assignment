function lifeInWeeks() {
  const age = document.getElementById("current-age").value;
  const daysLeft = (90 - age) * 365;
  const weeksLeft = daysLeft / 7;
  const monthsLeft = daysLeft / 30;
  document.getElementById("output").innerHTML = `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`;
}

