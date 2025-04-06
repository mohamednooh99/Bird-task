function createListElement() {
  let button = document.getElementById("button");
  let table = document.querySelector("table"); 


  button.addEventListener("click", function (e) {
    let input = document.getElementById("input"); 
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"; 
    let Delete = document.createElement("input");
    Delete.type = "button";
    Delete.value = "Delete";
    

    let targetTr = document.createElement("tr");
    let targetTd = document.createElement("td");
    let targetTd2 = document.createElement("td");
    let targetTd3 = document.createElement("td");

 
    targetTd.append(checkbox);
    targetTd2.append(input.value);
    targetTd3.append(Delete);
    targetTr.appendChild(targetTd);
    targetTr.appendChild(targetTd2);
    targetTr.appendChild(targetTd3);
    table.appendChild(targetTr);


    
    Delete.addEventListener("click", function (e) {
        if( confirm("Press OK to delete") === true) {  
            table.removeChild(targetTr);
        } 
    });


    checkbox.addEventListener("change", function (e) {
        if (checkbox.checked) {
            targetTd2.style.textDecoration = "line-through";
        } else {
            targetTd2.style.textDecoration = "none";
        }
    });
    

    if(input.value.trim() === "") {
        button.disabled = true;
        alert("You must write something!");
        return 
    }


    input.value = "";
  });
}
createListElement();
