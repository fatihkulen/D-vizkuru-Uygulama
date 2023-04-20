
let amountInput = document.querySelector("#amount")
let resultInput = document.querySelector("#result")
let firstOption = document.querySelector("#firstOption")
let secondOption = document.querySelector("#secondOption")

const currency = new Currency()

    runEvents()
function runEvents(){

    amountInput.addEventListener("input",trade)
}

function trade(){
    let amount = Number(amountInput.value.trim())
    let firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent
    
    let secondOptionValue = firstOption.options[secondOption.selectedIndex].textContent
    console.log(firstOptionValue,secondOptionValue)

    currency.trade(amount,firstOptionValue,secondOptionValue)
    .then((result)=>{
        resultInput.value = result.toFixed(4)
    })

}


