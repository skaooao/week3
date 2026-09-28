let round = 1;
let key = "* * * *";
let start = false;
let code1 = document.getElementById("code1");
let intro = document.getElementById("intro");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

let verificationBoard = document.getElementById("verificationBoard");
let verificationComplete = document.getElementById("verificationComplete");
let recoveryKeyLine = document.getElementById("recoveryKeyLine");
let recoveryInput = document.getElementById("recoveryInput");
let recoveryResult = document.getElementById("recoveryResult");
let hint = document.getElementById("hint");
let suspect = document.getElementById("suspect");
let choice = document.getElementById("choice");
let result = document.getElementById("result");

function openAccessLog() {
  document.getElementById("accessLog").style.display = "block";
  document.getElementById("messages").style.display = "none";
  document.getElementById("deletedFiles").style.display = "none";
  document.getElementById("securityVerification").style.display = "none";
}

function openMessages() {
  document.getElementById("accessLog").style.display = "none";
  document.getElementById("messages").style.display = "block";
  document.getElementById("deletedFiles").style.display = "none";
  document.getElementById("securityVerification").style.display = "none";
}

function openDeletedFiles() {
  document.getElementById("accessLog").style.display = "none";
  document.getElementById("messages").style.display = "none";
  document.getElementById("deletedFiles").style.display = "block";
  document.getElementById("securityVerification").style.display = "none";
}

function openSecurityVerification() {
  document.getElementById("accessLog").style.display = "none";
  document.getElementById("messages").style.display = "none";
  document.getElementById("deletedFiles").style.display = "none";
  document.getElementById("securityVerification").style.display = "block";

  if (start == false) {
    startGame();
  }
}

function closeAccessLog() {
  document.getElementById("accessLog").style.display = "none";
}

function closeMessages() {
  document.getElementById("messages").style.display = "none";
}

function closeDeletedFiles() {
  document.getElementById("deletedFiles").style.display = "none";
}

function closeSecurityVerification() {
  document.getElementById("securityVerification").style.display = "none";
}

function startGame() {
  round = 1;
  key = "* * * *";
  start = true;
  verificationBoard.style.display = "grid";
  verificationComplete.style.display = "none";
  recoveryKeyLine.style.display = "block";
  code1.textContent = key;
  gameFeedback.textContent = "";
  showRound1();
}

function makeBoxesGray() {
  box1.style.backgroundColor = "#777777";
  box2.style.backgroundColor = "#777777";
  box3.style.backgroundColor = "#777777";
  box4.style.backgroundColor = "#777777";
  box1.disabled = false;
  box2.disabled = false;
  box3.disabled = false;
  box4.disabled = false;
}

function showRound1() {
  makeBoxesGray();
  box1.style.backgroundColor = "#20c963";
}

function showRound2() {
  makeBoxesGray();
  box3.style.backgroundColor = "#20c963";
}

function showRound3() {
  makeBoxesGray();
  box2.style.backgroundColor = "#20c963";
}

function showRound4() {
  makeBoxesGray();
  box4.style.backgroundColor = "#20c963";
}

function Box1() {
  if (round == 1) {
    key = "6 * * *";
    code1.textContent = key;
    round = 2;
    showRound2();
  } else if (round == 2) {
    showWrongMessage();
  } else if (round == 3) {
    showWrongMessage();
  } else if (round == 4) {
    showWrongMessage();
  }
}

function Box2() {
  if (round == 1) {
    showWrongMessage();
  } else if (round == 2) {
    showWrongMessage();
  } else if (round == 3) {
    key = "6 6 0 *";
    code1.textContent = key;
    round = 4;
    showRound4();
  } else if (round == 4) {
    showWrongMessage();
  }
}

function Box3() {
  if (round == 1) {
    showWrongMessage();
  } else if (round == 2) {
    key = "6 6 * *";
    code1.textContent = key;
    round = 3;
    showRound3();
  } else if (round == 3) {
    showWrongMessage();
  } else if (round == 4) {
    showWrongMessage();
  }
}

function Box4() {
  if (round == 1) {
    showWrongMessage();
  } else if (round == 2) {
    showWrongMessage();
  } else if (round == 3) {
    showWrongMessage();
  } else if (round == 4) {
    key = "6 6 0 6";
    code1.textContent = key;
    finishGame();
  }
}

function showWrongMessage() {
  gameFeedback.textContent = "Wrong box. Try again.";
  gameFeedback.style.color = "#b42323";
}

function finish() {
  verificationBoard.style.display = "none";
  recoveryKeyLine.style.display = "none";
  intro.textContent = "";
  verificationComplete.style.display = "block";
}

function handleRecovery() {
  let inputValue = recoveryInput.value;

  if (inputValue == "6606") {
    hint.style.display = "block";
    recoveryResult.textContent = "FILE RECOVERED\nreport_final.txt";
    recoveryResult.style.color = "#0d7a3d";
    suspect.style.display = "block";
  } else {
    recoveryResult.textContent = "ACCESS DENIED\nIncorrect recovery key.";
    recoveryResult.style.color = "#9c1c1c";
  }
}

function showSuspectChoices() {
  choice.style.display = "flex";
  result.textContent = "";
  result.style.color = "#111111";
}

function accuseEmma() {
  result.textContent = "Incorrect. Review the statements and try again.";
  result.style.color = "#9c1c1c";
}

function accuseRyan() {
  result.textContent = "Incorrect. Review the statements and try again.";
  result.style.color = "#9c1c1c";
}

function accuseSophie() {
  result.textContent = "Congratulations, you found the culprit!";
  result.style.color = "#0d7a3d";
}

function accuseJason() {
  result.textContent = "Incorrect. Review the statements and try again.";
  result.style.color = "#9c1c1c";
}

document.getElementById("accessLogIcon").addEventListener("click", openAccessLog);
document.getElementById("messagesIcon").addEventListener("click", openMessages);
document.getElementById("deletedFilesIcon").addEventListener("click", openDeletedFiles);
document.getElementById("securityGameTrigger").addEventListener("click", openSecurityVerification);

document.getElementById("securityGameTrigger").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    openSecurityVerification();
  }
});

box1.addEventListener("click", Box1);
box2.addEventListener("click", Box2);
box3.addEventListener("click", Box3);
box4.addEventListener("click", Box4);

document.getElementById("recoverButton").addEventListener("click", handleRecovery);
recoveryInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    handleRecovery();
  }
});

document.getElementById("closeAccessLog").addEventListener("click", closeAccessLog);
document.getElementById("closeMessages").addEventListener("click", closeMessages);
document.getElementById("closeDeletedFiles").addEventListener("click", closeDeletedFiles);
document.getElementById("closeSecurityVerification").addEventListener("click", closeSecurityVerification);

document.getElementById("suspect").addEventListener("click", showSuspectChoices);
document.getElementById("chooseEmma").addEventListener("click", accuseEmma);
document.getElementById("chooseRyan").addEventListener("click", accuseRyan);
document.getElementById("chooseSophie").addEventListener("click", accuseSophie);
document.getElementById("chooseJason").addEventListener("click", accuseJason);
