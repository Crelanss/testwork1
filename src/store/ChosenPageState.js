import {makeAutoObservable} from 'mobx'

class ChosenPageState {

    isChosen = 1

    constructor() {
        makeAutoObservable(this)

    }

    changeChosen(currentPage) {
        this.isChosen = currentPage
    }
}

export default new ChosenPageState()