let serach = document.querySelector(".search");
let searchBtn = document.querySelector(".searchBtn");
let displayResult = document.querySelector(".displayResult");

console.log("hello");
searchBtn.addEventListener("click",fetchData);

async function fetchData(){
    try{
        let response = await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=${encodeURIComponent(searchTerm)}")
        let data = await response.json();
        console.log(data);
        displayResult.innerHTML = "";
        
        let userInput = document.querySelector(".user-input").value;
        let userMessageDisplay = document.createElement("div");
        userMessageDisplay.className = "user-msg"
        userMessageDisplay.textContent =`user : ${userInput}`;
        document.querySelector(".displayResult").appendChild(userMessageDisplay);

        let message = document.createElement("div");
        message.className = "bot-msg";
        message.textContent = `Wikipedia :- ${data}`;
                                       
        document.querySelector(".displayResult").appendChild(message);

    }catch(err){
        console.log(err);
    }
}