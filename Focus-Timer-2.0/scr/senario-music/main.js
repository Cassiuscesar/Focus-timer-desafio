import { senarioMusic } from "./elements-senario.js";
import * as action from "./action-senario.js"

export function senarioControls(){
    senarioMusic.addEventListener('click', (event)=>{
      action.toggleSelect()
      
    })
}

senarioControls()