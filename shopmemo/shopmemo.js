document.addEventListener("DOMContentLoaded", () => {
  const ulContent = document.querySelector("section.list ul");
  const todoinput = document.querySelector("section.input input.name");
  const todoinput2 = document.querySelector("section.input input.amount");

  const todoList = [];
  const createLiTag = (todoContent) => {
    const spanComplete = document.createElement("SPAN");
    const spanTodo = document.createElement("SPAN");
    const spanClose = document.createElement("SPAN");
    const liTag = document.createElement("LI");

    //위에서 만들어진 span 태그에 각각 클래스를 부착하라.
    spanComplete.classList.add("complete");
    spanTodo.classList.add("todo");
    spanClose.classList.add("close");

    spanComplete.innerHTML = "&check;";
    spanTodo.innerHTML = todoContent;
    spanClose.innerHTML = "&times;";

    liTag.appendChild(spanComplete);
    liTag.appendChild(spanTodo);
    liTag.appendChild(spanClose);

    ulContent.appendChild(liTag);
  };

  const createTodoList = () => {
    ulContent.innerHTML = "";
    todoList.forEach((item) => createLiTag(item));
  };
  createTodoList();
  /*
      화면상에 li tag 가 여러개 있는데 querySelector 을 사용하여 요청하면 화마ㅕㄴ에서 최초로 발견되는 요소만 select 된다.
  */
  const liContent = document.querySelector("section.list li");
  ulContent.addEventListener("click", (event) => {
    /*ul tag 에  event 를 설정하고, 실제로는 li tag 에 대하여 event 코드를 처리할 것이다. 
      이때 실제 제일먼저 클릭된 요소는 event.target 이된다. 근데 이 화면에서 실제 이벤트 타겟은 span tag 가된다.
      그러면 스팬이 아닌 li태그에 대하여 어떤 처리를 하려고 한다.*/
    const target = event.target;
    if (target.tagName === "SPAN") {
      //스팬 태그에 클로즈 클래스가 부착된 친구인가?
      if (target.className === "close") {
        //삭제할지 물어보기
        if (confirm("TODO를 삭제할까요?")) {
          //삭제를 허락하면 현재 스팬의 부모인 li 태그를 감추기
          target.closest("LI").style.display = "none";
        }
        return false;
      }

      const liTag = target.closest("LI");
      liTag?.classList.toggle("complete");
    } //end if
  }); //ul click event end

  const adBtn = document.querySelector("button.addmemo");
  adBtn.addEventListener("click", () => {
    const todo = todoinput.value + todoinput2.value + "개";
    if (!todo) {
      alert("TODO내용을 입력해주세요");
      todoinput.select();
      return false;
    }
    //list(배열)의 끝에 새로운 값을 추가하기
    todoList.push(todo);
    createTodoList(todo);
    todoinput.value = "";
    todoinput2.value = "";
  }); //end addBtnclick

  const closeBtn = document.querySelector("");
});
