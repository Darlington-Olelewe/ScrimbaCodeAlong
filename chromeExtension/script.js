const inputBtn = document.getElementById("input-btn")
const inputText = document.getElementById("input-el");
const ul = document.getElementById("ul-lead");
const leads = [];
inputBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("btn is clicked")
    console.log(inputText.value.length)

    if(inputText.value.length >= 3){
        leads.push(inputText.value);
        inputText.value = "";
    }

    populate()
})


const populate=()=> {
    ul.innerHTML = "";
    leads.forEach(i =>{
        const lead = document.createElement("li");
        lead.innerHTML = `<a target='_blank' href="${i}">${i}</a>`;
        ul.appendChild(lead);
    })

}



