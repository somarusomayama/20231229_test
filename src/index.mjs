import "./styles.css";

const textElement = document.getElementById("add-text");
const completeList = document.getElementById("complete-list");
const incompleteList = document.getElementById("incomplete-list");

const onClickAdd = () => {
  const inputText = textElement.value;
  const completeButton = createCompleteButton();
  const deleteButton = createDeleteButton();
  const todoRow = buildTodoTag(inputText, [completeButton, deleteButton]);
  incompleteList.appendChild(todoRow);
  textElement.value = "";
};

const onClickCompleteButton = (e) => {
  const liTag = e.target.closest("li");
  e.target.nextElementSibling.remove();
  e.target.remove();
  const incompleteButton = createIncompleteButton();
  liTag.firstElementChild.appendChild(incompleteButton);
  completeList.appendChild(liTag);
};

const onClickDeleteButton = (e) => {
  incompleteList.removeChild(e.target.closest("li"));
};

const onClickIncompleteButton = (e) => {
  const liTag = e.target.closest("li");
  e.target.remove();
  const completeButton = createCompleteButton();
  const deleteButton = createDeleteButton();
  liTag.firstElementChild.appendChild(completeButton);
  liTag.firstElementChild.appendChild(deleteButton);
  incompleteList.appendChild(liTag);
};

const buildTodoTag = (todoName, buttons) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todoName;
  div.appendChild(p);
  buttons.forEach((button) => {
    div.appendChild(button);
  });
  li.appendChild(div);
  return li;
};

const createCompleteButton = () => {
  return createButton("完了", onClickCompleteButton);
};

const createDeleteButton = () => {
  return createButton("削除", onClickDeleteButton);
};

const createIncompleteButton = () => {
  return createButton("戻す", onClickIncompleteButton);
};

const createButton = (value, event) => {
  const button = document.createElement("button");
  button.innerText = value;
  button.addEventListener("click", event);
  return button;
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
