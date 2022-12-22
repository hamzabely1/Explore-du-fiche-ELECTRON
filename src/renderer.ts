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



////home ///
const return_home = document.createElement("button")
return_home.textContent = "home"
input_nav.classList.add("input_nav")
let up_main = document.getElementById("up_main")
up_main.appendChild(input_nav)
up_main.appendChild(btn_input_nav)
up_main.appendChild(return_home)

let p_nav = document.createElement("p")
up_main.appendChild(p_nav)
p_nav.textContent = ""

//modal//////////////////////////////////
let conatiner = document.createElement("div")
const div_ajj_folder = document.createElement("div")
const input_modal = document.createElement("input")
let p_modal = document.createElement("p")
p_modal.innerHTML = "ajouter un 📁dossier"







///////////pour ajjoute un folder /////////////
div_ajj_folder.classList.add("div_ajj_folder")
let btn_modal = document.createElement("button")
btn_modal.textContent = "cree"
let btn_close = document.createElement("button")
btn_modal.classList.add("btn_modal")
btn_close.classList.add("btn_close")
btn_close.textContent = "close"
conatiner.appendChild(p_modal)
conatiner.appendChild(input_modal)
conatiner.appendChild(btn_modal)
conatiner.appendChild(btn_close)
conatiner.classList.add("conatiner")
div_ajj_folder.appendChild(conatiner)
div_ajj_folder.style.display = "none"
////////////////////////////////



btn_close.addEventListener("click", function () {
    div_ajj_folder.style.display = "none"
})
return_home.addEventListener("click", function () {
   GetFolder()
})
btn_input_nav.addEventListener("click",()=>{
console.log(input_nav.value)
main.innerHTML=""

})
        document.addEventListener("mouseup", (e) => {
            switch (e.button) {
                case 2:
                    console.log("left");
                    div_ajj_folder.style.display = ""
                    break;
            }
        })



async function GetFolder() {
    main.innerHTML = ""
    const listFolder = await window.Api.getFolder(".");
    console.log(listFolder)


p_nav.textContent= input_nav.value
    for (const task of listFolder) {
        const nom_folder = document.createElement('p');
        nom_folder.textContent = task;
        const img_folder = document.createElement("img")
        img_folder.classList.add("img_folder")
        let types = task.charAt(task.length - 1)
        types == "t" ? img_folder.src = imagine_fiche : img_folder.src = imagine_folder

        let container_folder = document.createElement("div")
        container_folder.classList.add("container_folder")

        container_folder.appendChild(img_folder)
        container_folder.appendChild(nom_folder)
        main.appendChild(container_folder)
        main.appendChild(div_ajj_folder)

        container_folder.addEventListener("click", async function () {
            main.innerHTML = ""
            p_nav.textContent +="/"+ nom_folder.innerHTML
            console.log("nom_folder",nom_folder.innerHTML);
            console.log("p nav : ",nom_folder.innerHTML)
/*
            const url = p_nav.textContent
            console.log(url)
            const folder_navigation = await window.Api.folder_navigation(url)
            console.log(folder_navigation)
            console.log("taclicke")
            for (const task of folder_navigation) {
                main.innerHTML = ""
                nom_folder.textContent = task;
                let types = task.charAt(task.length - 1)
                types == "t" ? img.src = imagine_fiche : img.src = imagine_folder
                img.style.height = "80px"
                container_folder.margin = "20px"
                container_folder.height = "120px"
                container_folder.width = "100px"
                container_folder.appendChild(img)
                container_folder.appendChild(p)
                main.appendChild(div)
                main.appendChild(div_ajj_folder)
            } */

                                   const url = p_nav.textContent
                                   console.log("url :",url)
                                   const folder_navigation = await window.Api.folder_navigation(url)
                                   console.log("folder : ",folder_navigation)

                                   for (const task of folder_navigation) {
                                   main.innerHTML = ""
                                   let nom_folder = document.createElement("p")

                                   nom_folder.textContent = task;
                                   let types = task.charAt(task.length - 1)
                                   types == "t" ? img_folder.src = imagine_fiche : img_folder.src = imagine_folder
                                       container_folder.appendChild(img_folder)
                                       container_folder.appendChild(nom_folder)
                                       main.appendChild(container_folder)
                                       main.appendChild(div_ajj_folder)
}
        })
}
}