const inputbox = document.getElementById("inpuutbox")
const listco = document.getElementById("listcon")
function addtask() {
    if (inputbox.value === '') {
        alert("you are write now");
    }
    else{
        let li= document.createElement("li")
        li.innerHTML =inputbox.value;
        listco.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value= "";
    save()
}
listco.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("cheke")
        save()
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        save()
    }
}, false)

function save() {
    localStorage.setItem("deta", listco.innerHTML )
}
function sown() {
    listco.innerHTML = localStorage.getItem("deta")
}
sown()