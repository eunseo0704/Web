// 현재 사용자의 포인트를 로컬 스토리지에서 가져오고, 값이 없으면 0으로 초기화
let userPoints = Number(localStorage.getItem("userPoints")) || 0;

// HTML 문서에서 클래스가 "item"인 모든 요소를 가져와 NodeList로 저장
const items = document.querySelectorAll(".item");

// 각 아이템에 대해 이벤트를 설정
for (let i = 0; i < items.length; i++) {
  // 현재 아이템의 버튼 요소를 선택
  const btn = items[i].querySelector("button");
  
  // 현재 아이템의 이름을 가져옴
  const itemName = items[i].querySelector(".item-name").textContent;

  // 버튼 클릭 시 실행할 이벤트 리스너를 추가
  btn.addEventListener("click", function () {
    const price = 500; // 아이템 가격 (고정값)

    // 사용자의 포인트가 가격 이상인 경우 구매 처리
    if (userPoints >= price) {
      userPoints -= price; // 포인트 차감
      localStorage.setItem("userPoints", userPoints); // 로컬 스토리지에 갱신된 포인트 저장
      alert(itemName + " 구매 완료! 남은 포인트: " + userPoints + "점"); // 구매 성공 메시지 출력
    } else {
      // 포인트가 부족한 경우 경고 메시지 출력
      alert("포인트가 부족합니다! 현재 포인트: " + userPoints + "점");
    }
  });
}
