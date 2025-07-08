// let start = new Data('2025-05-01');
// let now = new Data();

// let pass_day = now.getTime()-start.getTime();
// pass_day = pass_day/1000

// console.log(pass_day);

// document.getElementById('day').innerText = pass_day;

// // 당첨자 뽑기
// let people = parseInt(prompt('응모자 수를 정하시오'));
// let pick  = Math.floor(Math.random() + people + 1);

// document.getElementById('')

const b_left = creenX;
const b_top = screenY;

b_left = b_left +100;
b_top = b_top +100;

function win() {
    let wini = window.open("popup.html", "공지", `width=500, height=400, left=${b_left}, top=${b_top}`);
    if (wini == null){
        alert("팝업이 차단되었습니다.");
    }
}