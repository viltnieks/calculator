function calculateSum() {
    let skaitlis1 = document.getElementById('number1').value
    let skaitlis2 = document.getElementById('number2').value
    let sum = parseFloat(skaitlis1) + parseFloat(skaitlis2)

    let element = document.getElementById('result')
    element.innerHTML = sum
}