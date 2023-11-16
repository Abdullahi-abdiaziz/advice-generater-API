const advice = document.getElementById("advice");
const adviceGenerator = document.getElementById("generateAdvice");
const adviceID = document.querySelector(".advice-id");

adviceGenerator.addEventListener("click", getAdvice);

async function getAdvice() {
  advice.innerHTML = "Loading...";

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    advice.innerHTML = `"${data.slip.advice}"`;
    adviceID.innerHTML = `ADVICE #${data.slip.id}`;
    console.log(data);
  } catch (error) {
    console.error("Error fetching advice:", error);
    advice.innerHTML = "Error fetching advice. Please try again.";
  }
}
