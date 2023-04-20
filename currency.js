
class Currency{

    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=0xTpiwwyIAKDiIGeo7wap8oNcM5ACS1GS23oNlE1&base_currency="

        
    }

  async  trade(amount,firstCurrency,secondCurrency){
     const response =  await fetch(` ${this.url} ${firstCurrency}`)
     const result =  await response.json()
     
     const excahangedResult = amount * result.data[secondCurrency]
     
     return excahangedResult
    }
   
}


