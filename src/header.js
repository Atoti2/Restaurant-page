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
    home.textContent = "Home"
    
    const menu = document.createElement("button")
    menu.classList.add('mainMenu')
    menu.textContent = "Menu"

    const contact = document.createElement("button")
    contact.classList.add('contact')
    contact.textContent = "Contact"
    
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    home.addEventListener('click', () => {
        clearContent()
        createHome()
    })

    menu.addEventListener('click', () => {
        clearContent()
        createMenu()
    })

    function clearContent(){
        const content = document.getElementById('content')
        const pageContent = document.querySelector('.page-content')
        if(pageContent){
            content.removeChild(pageContent)
        }
    }

    return nav
}


export default createHeader