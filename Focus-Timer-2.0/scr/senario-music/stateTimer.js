import * as ele from "../focus-timer/elements.js"
import state from "../focus-timer/state.js"
import { musicStop } from "./events-senario.js"
import*  as evenstSenario from "./events-senario.js"

export let isrunn = false
export function runStop(event){
    let minutes = ele.minutes.textContent
    let seconds = ele.seconds.textContent
    if( minutes == 0 && seconds == 0 ){
        isrunn = false
        evenstSenario.removerSelect()
        musicStop(event)
    }else{
        isrunn = true
        return
    }
}


