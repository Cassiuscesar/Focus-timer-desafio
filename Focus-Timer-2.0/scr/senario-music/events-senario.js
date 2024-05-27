import * as ele from "./elements-senario.js"
import { senario } from "./sounds-senario.js";
import state from "../focus-timer/state.js";
import * as eles from "../focus-timer/elements.js"

export function removerSelect(){
    let btn = ele.btnSenario
    btn.forEach(element => {
        element.removeAttribute('id')
    });

}

export function musicStop(musi){
    if(musi != ""){
        senario[musi].pause()
    }else{
        return
    }
}


export function musicPlay(evento){
    senario[evento].loop = true
    senario[evento].play()
    senario.musicOn = true
}

