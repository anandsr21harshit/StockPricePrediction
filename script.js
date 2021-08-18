const initialPrice = document.getElementById("initial-price");
const quantity = document.getElementById("numberOfStocks");
const currentPrice = document.getElementById("currentPrice");
const btn = document.getElementById("tellMe");
const result = document.getElementById("result");

btn.addEventListener("click",()=>{
    let ip = Number(initialPrice.value);
    let qty = Number(quantity.value);
    let curr = Number(currentPrice.value);
    calculate(ip,qty,curr);
});

function calculate(ip,qty,curr){
    let initialInvestment = ip*qty;
    let finalPrice = curr*qty;

    let profit=0;
    let loss=0;
    if(finalPrice>initialInvestment){
        profit = finalPrice-initialInvestment;
        let percentIncrease = (profit / initialInvestment)*100;
        result.innerText =`Hey, the profit is of Rs ${profit} and it is increased by ${percentIncrease}%`;
    }
    else{
        loss = initialInvestment-finalPrice;
        let percentLoss = (loss / initialInvestment)*100;
        result.innerText = `Hey, the loss is of Rs ${loss} and it is decreased by ${percentLoss}%`;
    }
}