document.getElementById("calculate").onclick = function() {
    let length = +document.getElementById("length").value
    let width = +document.getElementById("width").value

    let total = (length + width) * 2
    let dt = length * width

    document.getElementById("result").style.display = "block"
    document.getElementById("total").innerHTML = total
    document.getElementById("dt").innerHTML = dt
}
