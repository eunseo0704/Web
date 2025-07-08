let userPoints = Number(localStorage.getItem("userPoints")) || 0;

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const tr = this.parentElement.parentElement;
    const statusTd = tr.children[2];
    const pointTd = tr.children[4];

    if (statusTd.textContent === "완료") return;

    statusTd.textContent = "완료";
    pointTd.textContent = "100";
    this.disabled = true;

    userPoints += 100;
    localStorage.setItem("userPoints", userPoints);
    alert("미션 완료! 현재 포인트: " + userPoints + "점");
  });
}
