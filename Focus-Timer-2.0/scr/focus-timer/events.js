import * as ele from "./elements.js"
import * as actions from "./action.js"
import {pressButton} from "./soundsControls.js"


export function controls(){
    ele.controls.addEventListener('click', (event)=>{
    const action = event.target.dataset.action
    if(actions[action]=== !'function'){
        return
    }
    actions[action]()
    pressButton.play()
})
}