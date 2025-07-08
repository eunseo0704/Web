// 페이지가 로드되면 실행
window.onload = function () {
  const modal = document.getElementById('modal'); // 모달 창 요소 선택
  const closeBtn = document.getElementById('closeModalBtn'); // 모달 닫기 버튼 선택

  // 로컬 스토리지에서 'popupClosed' 상태 가져오기
  const isPopupClosed = localStorage.getItem("popupClosed");

  // 팝업이 닫히지 않았다면 실행
  if (!isPopupClosed) { 
    // 모달 창과 닫기 버튼이 존재하는 경우
    if (modal && closeBtn) {
      modal.style.display = 'block'; // 모달 창 표시

      // 닫기 버튼 클릭 시 모달 닫기 처리
      closeBtn.onclick = function () {
        modal.style.display = 'none'; // 모달 숨김
        localStorage.setItem("popupClosed", "true"); // 팝업 닫음 상태 저장
      };

      // 모달 바깥 영역 클릭 시 모달 닫기 처리
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = 'none'; // 모달 숨김
          localStorage.setItem("popupClosed", "true"); // 팝업 닫음 상태 저장
        }
      };
    }
  }

  // 팝업창 열기 옵션 설정
  const popupOptions = "width=400,height=300,left=100,top=100";

  // 팝업창이 닫히지 않았다면 새 팝업창 열기 시도
  if (!isPopupClosed) { 
    const popupWindow = window.open("popup.html", "popupWindow", popupOptions);

    // 팝업창이 차단된 경우 경고 메시지 출력
    if (!popupWindow || popupWindow.closed || typeof popupWindow.closed === "undefined") {
      alert("팝업이 차단되었습니다! 브라우저에서 허용해주세요.");
    }
  }
};

// DOM 콘텐츠가 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  const missionButton = document.querySelector("button"); // 버튼 요소 선택

  // 버튼 클릭 이벤트 리스너 추가
  missionButton.addEventListener("click", () => {
    console.log("미션 완료 버튼 클릭됨!"); // 버튼 클릭 로그 출력
  });
});

// 초기값 설정: 미션 완료 개수와 포인트
let missionCount = 0;
let point = 0;

// 미션 완료 함수
function completeMission() {
  missionCount += 1; // 미션 개수 증가
  point += 100; // 포인트 증가

  // 미션 개수와 포인트를 HTML에 업데이트
  document.getElementById("missionCount").textContent = missionCount;
  document.getElementById("point").textContent = point;

  // 완료 메시지 출력
  alert("미션 완료! 100포인트가 적립되었습니다!");
}
