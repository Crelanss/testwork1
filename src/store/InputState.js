import {makeAutoObservable} from 'mobx'

class InputState {

    text = ''

    constructor() {
        makeAutoObservable(this)
    }

    setText(inputText) {
        this.text = inputText
    }

}

export default new InputState()