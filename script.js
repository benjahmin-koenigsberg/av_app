const thumbsUp = document.getElementById("thumbs_up");
const thumbsDown = document.getElementById("thumbs_down");
let upCounter = document.getElementById("up_count");
let downCounter = document.getElementById("down_count");
let sum = document.getElementById("sum");
const reset = document.getElementById("reset");
let notes = document.getElementById("notes");

reset.addEventListener("click", resetCount);
thumbsUp.addEventListener("click", addOneUp);
thumbsDown.addEventListener("click", addOneDown);
notes.addEventListener("keydown", saveNotes);

function resetCount() {
  localStorage.clear();
  upCounter.textContent = 0;
  downCounter.textContent = 0;
  sum.textContent = 0;
  notes.value = "";
}

function saveNotes() {
  let countObj = {
    up: upCounter.textContent,
    down: downCounter.textContent,
    total: sum.textContent,
    notes: notes.value,
  };

  localStorage.setItem("count", JSON.stringify(countObj));
}

let countObj = {
  up: upCounter,
  down: downCounter,
  total: upCounter + downCounter,
  notes: notes,
};

const storedCount = localStorage.getItem("count");
countObj = JSON.parse(storedCount);

upCounter.textContent = countObj.up;
downCounter.textContent = countObj.down;
sum.textContent = countObj.total;
notes.value = countObj.notes;
console.log(notes);

function addOneUp() {
  upCounter.textContent++;
  sum.textContent++;
  // Save the object to localStorage
  let countObj = {
    up: upCounter.textContent,
    down: downCounter.textContent,
    total: sum.textContent,
    notes: notes.value,
  };

  localStorage.setItem("count", JSON.stringify(countObj));
}

function addOneDown() {
  downCounter.textContent++;
  sum.textContent++;
  let countObj = {
    up: upCounter.textContent,
    down: downCounter.textContent,
    total: sum.textContent,
    notes: notes.value,
  };

  localStorage.setItem("count", JSON.stringify(countObj));
}



const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})