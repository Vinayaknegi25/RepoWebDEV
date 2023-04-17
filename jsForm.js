const btn = document.querySelector("#btn");
console.log("Connected")
btn.addEventListener('click',()=>{
    var name =prompt("Enter Name :")
    var age =prompt("Enter age :")
    var gender =prompt("Enter gender :")
    var branch =prompt("Enter branch :")
    name = name===''?"NULL" : name
    age = age ===''?"NULL" : age
    gender = gender ===''?"NULL" : gender
    branch = branch ===''?"NULL" : branch
    table = document.querySelector("#table1");
    const tr = document.createElement("tr");
    tr.innerHTML=`
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${gender}</td>
                    <td>${branch}</td>`;
    table.appendChild(tr);
});