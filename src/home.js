function createHome(){
    const content = document.getElementById("content")
    const main = document.createElement('main')
    main.classList.add("page-content")
    main.classList.add("home")
    const p = document.createElement('p')
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iure placeat iusto quisquam, magni eligendi similique amet est nemo minus unde sint eaque, corrupti sunt officiis quasi, natus dolorem quos."

    main.appendChild(p)

    content.appendChild(main)
}

export default createHome