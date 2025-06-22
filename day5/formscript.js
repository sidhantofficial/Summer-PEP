const useform = document.getElementsByTagName("form")[0];

useform.addEventListener('submit', (event)=>{
    event.preventDefault();
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;

    const firstNameEle = document.createElement("p");
    const lastNameEle = document.createElement("p");
    const ageEle = document.createElement("p");
    
    firstNameEle.textContent = "First Name: " + firstName;
    lastNameEle.textContent = "Last Name: " + lastName;
    ageEle.textContent = "Age: " + age;

    const parent = document.getElementById("result");
    parent.innerHTML = "";  
    parent.appendChild(firstNameEle);
    parent.appendChild(lastNameEle);
    parent.appendChild(ageEle);
    

})