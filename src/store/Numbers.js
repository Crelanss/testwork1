import {makeAutoObservable} from 'mobx'
import {maxWordsInPage} from "../Table";
import {numbers} from "../Table";
import PageNumber from "./PageNumber";

class NumbersState{

    numbersInCurrentPage=[]

    constructor() {
        makeAutoObservable(this)
    }

    setNumbersInCurrentPage(ChosenPage){
        for(let i=0; i<maxWordsInPage; i++){
            this.numbersInCurrentPage[i]=numbers[(ChosenPage-1)*(20)+i]
        }
    }
    reverseSort(){
        this.numbersInCurrentPage.sort((a,b)=>b-a)
    }
    StraightSort(){
        this.numbersInCurrentPage.sort((a,b)=>a-b)
    }

    findNumber(text) {
        if (text !== '') {
            for (let i = 0; i < this.numbersInCurrentPage.length; i++) {
                let test = String(this.numbersInCurrentPage[i])
                if (test.indexOf(text) < 0) {
                    this.numbersInCurrentPage[i] = ''
                }
            }
        }
    }

}

export default new NumbersState()