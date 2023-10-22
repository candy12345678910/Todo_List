const input=document.getElementById("input");
const task=document.getElementById("task-box");

const add=()=>{
    if(input.value===""){
        alert("Input field must contain some content");
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=input.value;
        task.appendChild(li);

        const span=document.createElement("span");
        span.classList.add("delete");
        span.innerHTML="\u00d7";
        li.appendChild(span);

        input.value="";
        cache();
    }
}

task.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("done");
        cache();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        cache();
    }
},false);

function cache(){
    localStorage.setItem("data",task.innerHTML);
}

function showData(){
    task.innerHTML=localStorage.getItem("data");
}
showData();