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

//model 2

//Question 2 English
const q2English = new Audio(
  "https://res.cloudinary.com/diyvxgyrx/video/upload/v1736287936/Do_you_agree_that_we_should_respect_other_animals__aukcgn.mp3"
); 
const q2_english = document.getElementById("q2_english");
const s2_english = document.getElementById("s2_english");
s2_english.addEventListener("click", playQ2English);
q2_english.addEventListener("click", englishText2);

function playQ2English() {
  q2English.play();
}

function englishText2() {
  const q2 = (document.getElementById("q2").innerText =
    "Do you agree that we should respect other animals?");
  const t2 = (document.getElementsByClassName("t2")[0].innerText =
    "Respect");
}

//Question 2 Spanish
const q2Spanish = new Audio(
  "https://res.cloudinary.com/diyvxgyrx/video/upload/v1736286982/Esta%CC%81s_de_acuerdo_en_que_debemos_respetar_a_los_dema%CC%81s_animales__hztkeh.mp3"
);

const q2_spanish = document.getElementById("q2_spanish");
const s2_spanish = document.getElementById("s2_spanish");

s2_spanish.addEventListener("click", playQ2Spanish);
q2_spanish.addEventListener("click", spanishText2);

function spanishText2() {
  document.getElementById("q2").innerText =
    "¿Estás de acuerdo en que debemos respetar a los demás animales?";
  document.getElementsByClassName("t2")[0].innerText = "Respeto";
 
}

function playQ2Spanish() {
  console.log('Hello')
  q2Spanish.play();
}

//Question 2 Russian
const q2Russian = new Audio(
  "https://res.cloudinary.com/diyvxgyrx/video/upload/v1736287219/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%BD%D1%8B_%D0%BB%D0%B8_%D0%B2%D1%8B_%D1%81_%D1%82%D0%B5%D0%BC_%D1%87%D1%82%D0%BE_%D0%BC%D1%8B_%D0%B4%D0%BE%D0%BB%D0%B6%D0%BD%D1%8B_%D1%83%D0%B2%D0%B0%D0%B6%D0%B0%D1%82%D1%8C_%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D1%85_%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D1%85__o08zpr.mp3"
); 
const q2_russian = document.getElementById("q2_russian");
const s2_russian = document.getElementById("s2_russian");
s2_russian.addEventListener("click", playQ2Russian);
q2_russian.addEventListener("click", russianText2);

function russianText2() {
  console.log("hello")
  document.getElementById("q2").innerText =
    "Согласны ли вы с тем, что мы должны уважать других животных?";
  document.getElementsByClassName("t2")[0].innerText = "Уважать";

}

function playQ2Russian() {
  q2Russian.play();
}

//Question 2 Chinesse
const q2Chinesse = new Audio(
  "https://res.cloudinary.com/diyvxgyrx/video/upload/v1736287125/%E4%BD%A0%E5%90%8C%E6%84%8F%E6%88%91%E4%BB%AC%E5%BA%94%E8%AF%A5%E5%B0%8A%E9%87%8D%E5%85%B6%E4%BB%96%E5%8A%A8%E7%89%A9%E5%90%97_mq6ic5.mp3"
); 
const q2_chinesse = document.getElementById("q2_chinesse");
const s2_chinesse = document.getElementById("s2_chinesse");
q2_chinesse.addEventListener("click", chinesseText2);
s2_chinesse.addEventListener("click", playQ2Chinesse);

function chinesseText2() {
  document.getElementById("q2").innerText =
    "你同意我们应该尊重其他动物吗？";
  document.getElementsByClassName("t2")[0].innerText = "尊重";
}

function playQ2Chinesse() {
  q2Chinesse.play();
}


//Question 3 English
const q3English = new Audio(
  "https://res.cloudinary.com/diyvxgyrx/video/upload/v1736289595/Can_you_truly_respect_animals_if_you_consume_their_flesh_milk_and_eggs__guobcb.mp3"
); 
const q3_english = document.getElementById("q3_english");
const s3_english = document.getElementById("s3_english");
s3_english.addEventListener("click", playQ2English);
q3_english.addEventListener("click", englishText3);

function playQ3English() {
  q3English.play();
}

function englishText3() {
  const q3 = (document.getElementById("q3").innerText =
    "Can you truly respect animals if you consume their flesh, milk, and eggs?");
  const t3 = (document.getElementsByClassName("t3")[0].innerText =
    "Consume");
}

//Question 3 Spanish
const q3Spanish = new Audio(
  "https://res.cloudinary.com/diyvxgyrx/video/upload/v1736289459/Puedes_realmente_respetar_a_los_animales_si_consumes_su_carne_leche_y_huevos__jtwjef.mp3")
const q3_spanish = document.getElementById("q3_spanish");
const s3_spanish = document.getElementById("s3_spanish");

s3_spanish.addEventListener("click", playQ3Spanish);
q3_spanish.addEventListener("click", spanishText3);

function spanishText3() {
  document.getElementById("q3").innerText =
    "Puedes realmente respetar a los animales si consumes su carne, leche y huevos?";
  document.getElementsByClassName("t3")[0].innerText = "Consumir";
 
}

function playQ3Spanish() {
  console.log('Hello')
  q2Spanish.play();
}

//Question 3 Russian
const q3Russian = new Audio(
  "https://res.cloudinary.com/diyvxgyrx/video/upload/v1736289809/%D0%9C%D0%BE%D0%B6%D0%B5%D1%82%D0%B5_%D0%BB%D0%B8_%D0%B2%D1%8B_%D0%B4%D0%B5%D0%B8%CC%86%D1%81%D1%82%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE_%D1%83%D0%B2%D0%B0%D0%B6%D0%B0%D1%82%D1%8C_%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D1%85_%D0%B5%D1%81%D0%BB%D0%B8_%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BB%D1%8F%D0%B5%D1%82%D0%B5_%D0%B8%D1%85_%D0%BC%D1%8F%D1%81%D0%BE_%D0%BC%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE_%D0%B8_%D1%8F%D0%B8%CC%86%D1%86%D0%B0__oapsud.mp3 "
); 
const q3_russian = document.getElementById("q3_russian");
const s3_russian = document.getElementById("s3_russian");
s3_russian.addEventListener("click", playQ3Russian);
q3_russian.addEventListener("click", russianText3);

function russianText3() {
  console.log("hello")
  document.getElementById("q3").innerText =
    "Можете ли вы действительно уважать животных, если потребляете их мясо, молоко и яйца?";
  document.getElementsByClassName("t3")[0].innerText = "Соглашаться";

}

function playQ3Russian() {
  q3Russian.play();
}

//Question 3 Chinesse
const q3Chinesse = new Audio(
  "https://res.cloudinary.com/diyvxgyrx/video/upload/v1736289770/%E5%A6%82%E6%9E%9C%E4%BD%A0%E6%B6%88%E8%B4%B9%E5%AE%83%E4%BB%AC%E7%9A%84%E8%82%89_%E5%A5%B6%E5%92%8C%E8%9B%8B_%E4%BD%A0%E8%83%BD%E7%9C%9F%E6%AD%A3%E5%B0%8A%E9%87%8D%E5%8A%A8%E7%89%A9%E5%90%97_xgidao.mp3"
); 
const q3_chinesse = document.getElementById("q3_chinesse");
const s3_chinesse = document.getElementById("s3_chinesse");
q3_chinesse.addEventListener("click", chinesseText3);
s3_chinesse.addEventListener("click", playQ3Chinesse);

function chinesseText3() {
  document.getElementById("q3").innerText =
    "如果你消费它们的肉、奶和蛋，你能真正尊重动物吗？";
  document.getElementsByClassName("t3")[0].innerText = "同意";
}

function playQ3Chinesse() {
  q3Chinesse.play();
}

