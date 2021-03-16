import {makeAutoObservable, autorun} from 'mobx'
import Numbers from "./Numbers";
import PageNumber from "./PageNumber";

class InputState{

    text=''

    constructor() {
        makeAutoObservable(this)
    }

    setText(inputText){
        this.text=inputText
    }

}

export default new InputState()