const thumbsUp = document.getElementById("thumbs_up");
const thumbsDown = document.getElementById("thumbs_down");
const upCounter = document.getElementById("up_count");
const downCounter = document.getElementById("down_count");
const sum = document.getElementById("sum");
const notes = document.getElementById("notes");

const datetime = new Date();
const date = datetime.toDateString();
const seconds = datetime.getSeconds();

let countObj = {
  up: upCounter,
  down: downCounter,
  total: upCounter + downCounter,
  notes: notes,
};

function resetCount() {
  //localStorage.clear();
  countObj = {};
  localStorage.setItem("count", JSON.stringify(countObj));
  upCounter.textContent = 0;
  downCounter.textContent = 0;
  sum.textContent = 0;
  notes.value = "";
}

function saveNotes() {
  (countObj.up = upCounter.textContent),
    (countObj.down = downCounter.textContent),
    (countObj.total = sum.textContent),
    (countObj.notes = notes.value);

  localStorage.setItem("count", JSON.stringify(countObj));
}

function addOneUp() {
  upCounter.textContent++;
  sum.textContent++;

  (countObj.up = upCounter.textContent),
    (countObj.down = downCounter.textContent),
    (countObj.total = sum.textContent),
    (countObj.notes = notes.value);

  localStorage.setItem("count", JSON.stringify(countObj));
}

function addOneDown() {
  downCounter.textContent++;
  sum.textContent++;

  (countObj.up = upCounter.textContent),
    (countObj.down = downCounter.textContent),
    (countObj.total = sum.textContent),
    (countObj.notes = notes.value);

  localStorage.setItem("count", JSON.stringify(countObj));
}

function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 9);
  return timestamp + random;
}

function storeDaysData() {
  let daysData = {};
  (daysData.up = upCounter.textContent),
    (daysData.down = downCounter.textContent),
    (daysData.total = sum.textContent),
    (daysData.notes = notes.value);
  daysData.date = date;

  localStorage.setItem(generateUniqueId(), JSON.stringify(daysData));
}



function getAllStorage() {
  let archive = [];
  for (let i = 0; i < localStorage.length; i++) {
    archive[i] = localStorage.getItem(localStorage.key(i));
  }
  return archive;
}

const archiveArray = getAllStorage()

export {
  addOneDown,
  addOneUp,
  resetCount,
  saveNotes,
  storeDaysData,
  getAllStorage,
  archiveArray
};
