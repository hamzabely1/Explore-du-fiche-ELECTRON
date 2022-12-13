import './index.css';
import { Task } from './class/Task';
import { TodoList } from "./class/TodoList"


let imagine_fiche = "https://www.nicepng.com/png/detail/38-387774_paper-icon-png-document-icon-circle.png"
let imagine_folder = "https://freeiconshop.com/wp-content/uploads/edd/folder-flat.png"
let main = document.getElementById('main');
let input_nav = document.createElement("input")  
let btn_input_nav =document.createElement("button")
btn_input_nav.textContent = "search"
main.style.display = "flex"
main.style.flexWrap = "wrap"



input_nav.classList.add("input_nav")
let up_main = document.getElementById("up_main")
up_main.appendChild(input_nav)
up_main.appendChild(btn_input_nav)

let p_nav = document.createElement("p")
up_main.appendChild(p_nav)
p_nav.textContent = ""

//modal//////////////////////////////////
let conatiner = document.createElement("div")
const div_modal = document.createElement("div")
const input_modal = document.createElement("input")
let p_modal = document.createElement("p")
p_modal.innerHTML = "ajouter un 📁dossier"
div_modal.style.position = "absolute"
div_modal.style.top = "100px"
div_modal.style.left = "150px"
let btn_modal = document.createElement("button")
btn_modal.textContent = "cree"
let btn_close = document.createElement("button")
div_modal.classList.add("div_modal")
btn_modal.classList.add("btn_modal")
btn_close.classList.add("btn_close")
btn_close.textContent = "close"
conatiner.appendChild(p_modal)
conatiner.appendChild(input_modal)
conatiner.appendChild(btn_modal)
conatiner.appendChild(btn_close)
conatiner.classList.add("conatiner")
div_modal.appendChild(conatiner)
div_modal.style.display = "none"
////////////////////////////////


btn_modal.addEventListener("click", async function () {
    div_modal.style.display = "none"
    const add = await window.Api.add_folder(input_modal.value)
    location.reload()
})
document.addEventListener("mouseup", (e) => {
    switch (e.button) {
        case 2:
            console.log("left");
            div_modal.style.display = ""
            break;
    }
})
btn_close.addEventListener("click", function () {
    div_modal.style.display = "none"
})




btn_input_nav.addEventListener("click",()=>{
console.log(input_nav.value)
main.innerHTML=""
GetFolder()


})



async function GetFolder() {



    const listFolder = await window.Api.getFolder(input_nav.value);
    console.log(listFolder)
p_nav.textContent= input_nav.value
    for (const task of listFolder) {

        const p = document.createElement('p');

        p.textContent = task;

        const img = document.createElement("img")
        let types = task.charAt(task.length - 1)
        types == "t" ? img.src = imagine_fiche : img.src = imagine_folder

        let div = document.createElement("div")

        img.style.height = "80px"
        div.style.margin = "20px"
        div.style.height = "120px"

        div.style.width = "100px"
        div.appendChild(img)
        div.appendChild(p)
        main.appendChild(div)
        main.appendChild(div_modal)

        div.addEventListener("click", async function () {
            main.innerHTML = ""
            p_nav.textContent +="/"+ p.innerHTML

            const hamza = p_nav.textContent 
            console.log(hamza)
            const folder_navigation = await window.Api.folder_navigation(hamza)
            console.log(folder_navigation)
            console.log("taclicke")

            for (const task of folder_navigation) {
                main.innerHTML = ""

                p.textContent = task;

 

                let types = task.charAt(task.length - 1)
                types == "t" ? img.src = imagine_fiche : img.src = imagine_folder


                img.style.height = "80px"
                div.style.margin = "20px"
                div.style.height = "120px"

                div.style.width = "100px"
                div.appendChild(img)
                div.appendChild(p)
                main.appendChild(div)
                main.appendChild(div_modal)

            }
        })
    }


}





