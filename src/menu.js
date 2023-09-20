function createMenu(){
    const content = document.getElementById('content')

    const main = document.createElement('main')
    main.classList.add("page-content")
    main.classList.add("menu")
    const div = document.createElement('div')
    const image = document.createElement('img')
    const p = document.createElement('p')
    div.appendChild(image)
    div.appendChild(p)
    image.src = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
    p.textContent = "Banana, Price: 50$"    


    main.appendChild(div)
    content.appendChild(main)
}


export default createMenu