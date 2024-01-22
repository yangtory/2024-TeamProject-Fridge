document.addEventListener("DOMContentLoaded", () => {
  function newElement() {
    //add stuffs
    let li = document.createElement("li");
    li.textContent = input.value;
    input.value = "";
    list.appendChild(li);

    //add a trash bin icon
    li.appendChild('<i class="fa fa-trash" aria-hidden="true"></i>');
  }
});
