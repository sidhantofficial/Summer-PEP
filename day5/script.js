let arr = [
    "one", "two", "parent", "paint", "color", "code", "pink", "pineapple"
]

const searchBar = document.getElementsByTagName("input")[0];
const resultList = document.getElementById("result-list")
console.log(resultList);
searchBar.addEventListener("input", (event)=>{
    console.clear();
    const searchItem = event.target.value;
    const filteredArray = arr.filter(item =>
        item.includes(searchItem)
    );
    console.log("Sugesstions: ", filteredArray);
    resultList.innerHTML = "";
    filteredArray.forEach((ele)=>{
        const element = document.createElement("li");
        element.textContent = ele;
        resultList.appendChild(element);
    })
})