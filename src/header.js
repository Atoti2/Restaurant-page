import createContact from "./contact"
import createHome from "./home"
import createMenu from "./menu"


function createHeader(){
    const header = document.createElement('header')
    header.classList.add("header")

    let title = document.createElement('h1')
    title.textContent = "PizzaMizza"
    header.appendChild(title)
    header.appendChild(createNav())
    document.getElementById("content").appendChild(header)
    return header
}

function createNav(){

    const nav = document.createElement("nav")
    nav.classList.add("nav")
    
    const home = document.createElement("button")
    home.classList.add('mainHome')
    home.classList.add('button')
    home.textContent = "home"
    
    const menu = document.createElement("button")
    menu.classList.add('mainMenu')
    menu.classList.add('button')
    menu.textContent = "menu"

    const contact = document.createElement("button")
    contact.classList.add('contact')
    contact.classList.add('button')
    contact.textContent = "contact"
    
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);


    home.addEventListener('click', () => {
        clearContent()
        createHome()
        menu.classList.remove("current")
        contact.classList.remove("current")
        changeCurrent(home)
    })

    menu.addEventListener('click', () => {
        clearContent()
        createMenu()
        home.classList.remove("current")
        contact.classList.remove("current")
        changeCurrent(menu)
    })

    contact.addEventListener('click', () => {
        clearContent()
        createContact()
        menu.classList.remove("current")
        home.classList.remove("current")
        changeCurrent(contact)
    })
  
  

    function clearContent(){
        const content = document.getElementById('content')
        const pageContent = document.querySelector('.page-content')
        if(pageContent){
            content.removeChild(pageContent)
        }
    }
    
    function changeCurrent(item){
        const pageContent = document.querySelector('.page-content')
        if(pageContent.classList.contains(item.textContent)){
            item.classList.add('current')
        }

        
    }

    

    return nav
}


export default createHeader