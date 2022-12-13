// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { IpcRenderer } from "electron";


contextBridge.exposeInMainWorld("Api", {
    
    getFolder :(valeur:string) =>ipcRenderer.invoke("get-folder",valeur),
    add_folder:(valeur:string)=>ipcRenderer.invoke("add_folder",valeur),
    folder_navigation:(valeurs:string)=>ipcRenderer.invoke("folder_navigation",valeurs),
    get_contenu : (valeur:string)=> ipcRenderer.invoke("get_contenu",valeur)
})


