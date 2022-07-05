let icon = document.getElementById("icon")
let advice = document.getElementById("advice")
let adviceNum = document.getElementById("num")

icon.onclick = () =>{
    adviceGenerator()
}
const adviceGenerator = () =>{
    fetch('	https://api.adviceslip.com/advice')
    .then((response) =>{
        return response.json()
    }).then((data) =>{
        console.log(data)
        showRandomAdvice(data)
    })
}

showRandomAdvice = (random) =>{
    console.log("clicked")
    adviceNum.innerText = random.slip.id
    advice.innerText = `"${random.slip.advice}"`
}

