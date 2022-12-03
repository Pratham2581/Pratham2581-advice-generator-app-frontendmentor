const adviceNo = document.querySelector(".advice-no");
const quote = document.querySelector(".quote");
const adviceBtn = document.querySelector(".btn");

const adviceApi = "https://api.adviceslip.com/advice";

adviceBtn.addEventListener("click", getAdvice);

async function getAdvice() {
  const res = await fetch(adviceApi, { cache: "no-cache" });
  const data = await res.json();
  console.log(data.slip);
  adviceNo.innerHTML = `Advice # ${data.slip.id}`;
  quote.innerHTML = data.slip.advice;
}
