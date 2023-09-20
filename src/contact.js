function createContact(){
    const content = document.getElementById('content')
    
    const main = document.createElement('main')
    main.classList.add("page-content")
    main.classList.add("contact")

    const h1 = document.createElement('h1')
    h1.textContent = "Contact Us."

   const phoneNumber = document.createElement('p')
   const email = document.createElement('p')
   phoneNumber.textContent = "555-555-555"
   email.textContent = "freefood@gmail.com"

   main.appendChild(h1)
   main.appendChild(phoneNumber)
   main.appendChild(email)

   content.appendChild(main)
}

export default createContact