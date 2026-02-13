let input = document.getElementById("textInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("todo-list");


addBtn.addEventListener("click", function () {
   let task = input.value
   if (task === "") {
    alert ("task!")
    return;
   };

    let li = document.createElement("li");
   // li.innerText = input.value;
    let editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
    // const list =
    //     document.getElementById("todo-list");
    // const li = document.createElement("li");
    // li.innerText = "Hit the GYM";
    // list.appendChild("li");
let span =
document.createElement("span")
span.innerText = task;


 //editbutton
 
    editBtn.addEventListener("click", function () {
let newtext = prompt("edit task " , span.innerText);
if (newtext !== ""  && newtext !== null) {
    span.innerText = newtext;
}
     });

        //delete button
        let del = document.createElement("button");
        del.innerText = "❌";
       
        del.addEventListener("click", function () {
            span.remove();

        });
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(del);
    taskList.appendChild(li);

    input.value = "";
});

// console.log(document);
// const btn= document.getElementById("addBtn");
//     console.log(btn);

