

document.querySelector('button#formSubmit').onclick = displayResults = e => {
   e.preventDefault()
   let name = document.querySelector('input#name').value
   let mail = document.querySelector('input#email').value
   let phone = document.querySelector('input#phone').value
   alert(`Name: ${name}\nMail: ${mail}\nPhone Number: ${phone}`)
}