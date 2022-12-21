document.getElementById("calculate").onclick = function (){
    let number = document.getElementById("number").value

    let donvi = number % 10
    let chuc = Math.floor(number / 10)
    let total = donvi + chuc
    
    document.getElementById("result").style.display = "block"
    document.getElementById("total").innerHTML = total

}