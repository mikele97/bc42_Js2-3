document.getElementById("calculate").onclick = function (){
    let income = document.getElementById("income").value
   
    let day = document.getElementById("day").value

    let total = income * day

    document.getElementById("result").style.display = "block"
    document.getElementById("total").innerHTML = total + "VND"
}
