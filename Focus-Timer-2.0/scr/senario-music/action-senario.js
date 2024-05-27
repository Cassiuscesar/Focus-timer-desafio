import { senarioMusic } from "./elements-senario.js";
import * as eventSenario from "./events-senario.js"
import * as sounds from "./sounds-senario.js"
import  * as runn from "./stateTimer.js"



export function toggleSelect(){
    senarioMusic.addEventListener('click', (event)=>{

        if(event.target.dataset.atribute){
            eventSenario.musicStop(sounds.senario.musicOn)
            let music = event.target.dataset.atribute
            eventSenario.removerSelect()
            eventSenario.musicPlay(music)
            sounds.senario.musicOn = music
            runn.runStop(music)
            if(runn.isrunn){
                event.target.setAttribute('id', 'toggle-select')
            }else{
                return
            } 
        }else{
            return
        }
    })
}

export function resetSenario(){
    eventSenario.removerSelect()
    const reset = document.querySelector('.ph-tree')
    reset.click()

}



