const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// funcionalidade dos botões
document.querySelectorAll('.charKey').forEach(function (chartKeyBtn) {
    chartKeyBtn.addEventListener('click', function () {
        const value = chartKeyBtn.dataset.value
        input.value += value
    })  
})

// clear
document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function (ev) {
    // n permitindo escrever letras
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    
    // apagar
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    // enter
    function calculate(){
        calculate()
    }
})

// igual
document.getElementById('equal').addEventListener('click', calculate)

// calcular
function calculate() {
    resultInput.value = 'ERROR!'
    resultInput.classList.add('error')

    const result = eval(input.value)

    resultInput.value = result
    resultInput.classList.remove('error')
}

// copy
document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success') // add elemento css
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

// trocar o tema
document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})