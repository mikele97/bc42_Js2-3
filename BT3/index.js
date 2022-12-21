document.getElementById("calculate").onclick = function (){
    let number = document.getElementById("number").value

    let total = number * 23500
    console.log(new Intl.NumberFormat('vn-VN').format(23500));

    document.getElementById("result").style.display = "block"
    document.getElementById("total").innerHTML = total

}