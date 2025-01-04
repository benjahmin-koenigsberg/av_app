//Question 1 English
const q1English = new Audio(
  "https://res.cloudinary.com/dhc1h071n/video/upload/v1735880529/Sounds/q1-english_nlb2ge.mp3"
); 
const q1_english = document.getElementById("q1_english");
const s1_english = document.getElementById("s1_english");
s1_english.addEventListener("click", playQ1English);
q1_english.addEventListener("click", englishText);

function playQ1English() {
  q1English.play();
}

function englishText() {
  const q1 = (document.getElementById("q1").innerText =
    "Hello, how do you feel about humans exploiting other animals?");
  const t1 = (document.getElementsByClassName("t1")[0].innerText =
    "Exploiting");
}

//Question 1 Spanish
const q1Spanish = new Audio(
  "https://res.cloudinary.com/dhc1h071n/video/upload/v1735880530/Sounds/q1-spanish_zkmwkt.mp3"
);
const q1_spanish = document.getElementById("q1_spanish");
const s1_spanish = document.getElementById("s1_spanish");
s1_spanish.addEventListener("click", playQ1Spanish);
q1_spanish.addEventListener("click", spanishText);

function spanishText() {
  document.getElementById("q1").innerText =
    "Hola, ¿qué opinas sobre la explotación humana de otros animales?";
  document.getElementsByClassName("t1")[0].innerText = "Explotando";
}

function playQ1Spanish() {
  q1Spanish.play();
}

//Question 1 Russian
const q1Russian = new Audio(
  "https://res.cloudinary.com/dhc1h071n/video/upload/v1735880529/Sounds/q1-russian_rif7ej.mp3"
); 
const q1_russian = document.getElementById("q1_russian");
const s1_russian = document.getElementById("s1_russian");
s1_russian.addEventListener("click", playQ1Russian);
q1_russian.addEventListener("click", russianText);

function russianText() {
  document.getElementById("q1").innerText =
    "Здравствуйте, как вы относитесь к эксплуатации людьми других животных?";
  document.getElementsByClassName("t1")[0].innerText = "Эксплуатация";
}

function playQ1Russian() {
  q1Russian.play();
}

//Question 1 Chinesse
const q1Chinesse = new Audio(
  "https://res.cloudinary.com/dhc1h071n/video/upload/v1735880530/Sounds/q1-chinese_kbqrww.mp3"
); 
const q1_chinesse = document.getElementById("q1_chinesse");
const s1_chinesse = document.getElementById("s1_chinesse");
q1_chinesse.addEventListener("click", chinesseText);
s1_chinesse.addEventListener("click", playQ1Chinesse);

function chinesseText() {
  document.getElementById("q1").innerText =
    "您好，您对人类剥削其他动物有何看法";
  document.getElementsByClassName("t1")[0].innerText = "剥削";
}

function playQ1Chinesse() {
  q1Chinesse.play();
}
