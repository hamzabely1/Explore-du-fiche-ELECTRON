import { Task } from "./class/Task"
import {Fiche} from "./class/Fiche"
import { SrvRecord } from "dns"

export interface IElectronAPI {
  
  getFolder :(valeur:string) =>Promise<string>
  add_folder : (valeur:string)=> Promise<string>
  folder_navigation: (valeur:string)=> Promise<string>
  get_contenu :(valeur:string) => Promise<string>

}
declare global {
  interface Window {
    Api: IElectronAPI
  }
}
