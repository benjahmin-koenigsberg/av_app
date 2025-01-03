import { addOneDown, addOneUp, saveNotes, resetCount, storeDaysData, getAllStorage } from "./functions.js";

const thumbsUp = document.getElementById("thumbs_up");
const thumbsDown = document.getElementById("thumbs_down");
const upCounter = document.getElementById("up_count");
const downCounter = document.getElementById("down_count");
const sum = document.getElementById("sum");
const reset = document.getElementById("reset");
const notes = document.getElementById("notes");
const save = document.getElementById('save')

const datetime = new Date();
const date = datetime.toDateString();
document.getElementById("datetime").innerText = date;

reset.addEventListener("click", resetCount);
thumbsUp.addEventListener("click", addOneUp);
thumbsDown.addEventListener("click", addOneDown);
notes.addEventListener("keydown", saveNotes);
save.addEventListener('click', storeDaysData)


let countObj = {
  up: upCounter.textContent,
  down: downCounter.textContent,
 total: upCounter.textContent + downCounter.textContent,
  notes: notes.value,
};

const storedCount = localStorage.getItem("count");
countObj = JSON.parse(storedCount);
console.log(countObj)


upCounter.textContent = countObj.up;
downCounter.textContent = countObj.down;
sum.textContent = countObj.total;
notes.value = countObj.notes;



const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
