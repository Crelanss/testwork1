import {makeAutoObservable} from 'mobx'

class PageNumberState{

    currentNumber=2

    constructor() {
        makeAutoObservable(this)
    }

    increaseNumber(){
        this.currentNumber++
    }

    decreaseNumber(){
        this.currentNumber--
    }
}

export default new PageNumberState()