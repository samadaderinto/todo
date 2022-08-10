"use strict";
const todosListEl = document.querySelector('[data-todo-list]');
const defaultItem = document.querySelector('[data-todo-item-def]');
const defaultItemData = document.querySelector("[data-todo]");
const updateInput = (element) => {
    element.value = "";
};
const toggleDetail = (e) => {
    e.parentElement.parentElement.lastElementChild.classList.toggle("flex");
};
const create = (e) => {
    let inputValue = defaultItemData.value;
    if ((e.keyCode === 13 || e.which === 13) && inputValue != "") {
        const Object = `
            <div class="todo__item" data-todo-item>
                <div class="todo__item__main"> 
                    <button onClick="deleteItem(this)" >
                      <img src="img/done.svg" />
                    </button>
                    <input placeholder="New task...." type="text" value="${inputValue}" spellcheck = "false"></input>
                    <span onClick='toggleDetail(this)' btn-todo-item>
                      <img src="img/expand.svg" />
                    </span>
                </div>
               
                <div class="details flex" data-todo-item-detail>
                    <div class="details-info--1">
                        <p>Notes</p>
                        <textarea maxlength="270" data-todo-item-note></textarea>
                    </div>
                    <div class="details-info--2">
                        <div class="details-info--2__date">
                            <div>
                                <input type="radio" name="date" id="Today"></input>
                                <label for="Today">
                                    Today
                                </label>
                            </div>
                            <div>
                                <input type="radio" name="date" id="Tommorow"></input>
                                <label for="Tommorow">
                                    Tommorow
                                </label>
                            </div>
                            <div>
                                <input type="date" name="date" id="calender"></input>
                                <label for="calender">
                                    Set date
                                </label>
                            </div>
                            
                        </div>
                        <button data-todo-item-del>Delete</button>
                    </div>
                </div> 
            </div>
           
       `;
        todosListEl.insertAdjacentHTML("afterbegin", Object);
        updateInput(defaultItemData);
    }
};
const deleteItem = (e) => {
    e.parentElement.parentElement.remove();
};
document.addEventListener("keypress", e => {
    create(e);
});
//         todosItem = document.querySelectorAll('[data-todo-item]');
//         todosNote = document.querySelectorAll("[data-todo-item-note]")
//         deleteItem = document.querySelectorAll('[data-todo-item-del]');
//         toggleDetail = document.querySelectorAll('[btn-todo-item]')
//         detail = document.querySelectorAll('[data-todo-item-detail]');
// toggleDetail.forEach((curr: Node) => {
//         curr.addEventListener("click", () => {
//         console.log("a")
//     })
// })
defaultItemData.addEventListener('focus', () => {
    defaultItem.style.border = "2px solid goldenrod";
    setTimeout(() => {
        defaultItem.style.border = "2px solid transparent";
    }, 3000);
});
