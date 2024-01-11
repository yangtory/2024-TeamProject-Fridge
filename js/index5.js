document.addEventListener("DOMContentLoaded", () => {
  const refrigerationButton = document.querySelector(".button:nth-child(1)");
  const freezingButton = document.querySelector(".button:nth-child(2)");
  const outdoorButton = document.querySelector(".button:nth-child(3)");

  // 버튼을 클릭했을 때 배경색이 바뀌는 함수를 정의
  function changeBackgroundColor(event) {
    // 선택된 버튼의 배경색을 변경
    event.target.style.backgroundColor = "#858585";

    // 다른 버튼들의 배경색을 초기화
    if (event.target !== refrigerationButton) {
      refrigerationButton.style.backgroundColor = "";
    }
    if (event.target !== freezingButton) {
      freezingButton.style.backgroundColor = "";
    }
    if (event.target !== outdoorButton) {
      outdoorButton.style.backgroundColor = "";
    }
  }

  // 각 버튼에 이벤트 리스너를 추가합니다.
  refrigerationButton.addEventListener("click", changeBackgroundColor);
  freezingButton.addEventListener("click", changeBackgroundColor);
  outdoorButton.addEventListener("click", changeBackgroundColor);

  const input_name = document.querySelector("input[name='name']");
  const input_count = document.querySelector("input[name='count']");
  const input_date = document.querySelector("input[name='date']");

  const btn_add = document.querySelector("section button.save");

  btn_add.addEventListener("click", () => {
    const txt_name = input_name.value;
    const txt_count = input_count.value;
    const txt_date = input_date.value;
    if (!txt_name) {
      alert("물건의 이름을 입력해주세요!!");
      return false;
    }
    if (!txt_count) {
      alert("물건의 수량을 입력해주세요!!");
      return false;
    }
    if (!txt_date) {
      alert("물건의 유통기한을 입력해주세요!!");
      return false;
    }

    alert("추가가 완료됐습니다.");
    location.href = "./index7.html";
  });
});
