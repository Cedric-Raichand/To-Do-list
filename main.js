const design=document.getElementById("Design");
const taskInput=document.querySelector("#Add-list");

function getTime(){
    const day=new Date();
    const date=day.toDateString()

    document.querySelector("#day").innerText=date;


}
getTime();

function designtask(list){
    const designCheckbox=document.createElement("input");
     designCheckbox.setAttribute("type","checkbox");
    designCheckbox.className="Design-checkbox";
    const task=document.createElement("p");
    task.innerText=list;

    const taskWrapper=document.createElement("div");
    taskWrapper.className="design-task";
    taskWrapper.appendChild(designCheckbox);
    taskWrapper.appendChild(task);
    taskWrapper.classList.add("list");
    taskWrapper.style.display="flex";
    taskWrapper.style.displayDirection="row";
    taskWrapper.style.marginBottom="3px";
    taskWrapper.style.columnGap="3px";
    designCheckbox.style.height="1rem";
    designCheckbox.style.width="1rem";
   design.appendChild(taskWrapper);
    designCheckbox.addEventListener("change",function(){
        if(designCheckbox.checked){
            task.style.textDecoration="line-through";
            task.style.color="grey";
        }
        else{
            task.style.textDecoration="none";
            task.style.color="black";
        }
    });

}


const form=document.querySelector("#form");
if(form){
    form.addEventListener("submit",function(event){
        event.preventDefault();
        if(taskInput.value.trim()!==""){
            designtask(taskInput.value); ;
        taskInput.value="";
    }
        else{
        alert("Please enter a valid task.");
    }
  
    });
}
