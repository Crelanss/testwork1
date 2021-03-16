import React, {useEffect} from 'react'
import styled from "styled-components";
import Numbers from "./store/Numbers";
import {observer} from "mobx-react-lite";
import ChosenPage from "./store/ChosenPage";
import PageNumber from "./store/PageNumber";
import InputState from "./store/InputState";

const TableComponent =styled.div`
  width:500px;
  height: 700px;
  display:grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(21 , 1fr);
  margin-left: auto;
  margin-right: auto;
`


export const numbers=[]

export const wordNumber=65;

export const maxWordsInPage=20;

for (let i=0; i<wordNumber; i++){
        numbers[i]=Math.floor(Math.random()*50)
}

let clickCounter=0

const sortHandler=()=>{
    if(clickCounter===0){
        Numbers.StraightSort()
        clickCounter++
    }else{
        if(clickCounter===1){
            Numbers.reverseSort()
            clickCounter=0
        }
    }
}




const Table=observer(()=>{
    useEffect(()=>Numbers.setNumbersInCurrentPage(ChosenPage.isChosen))
    useEffect(()=>{clickCounter=0}, [ChosenPage.isChosen])
    useEffect(()=>{Numbers.findNumber(InputState.text)})
    return(
        <TableComponent>
            <div onClick={()=>sortHandler()}>Числа</div>
            {Numbers.numbersInCurrentPage.map((el)=>(
                <div>{el}</div>
            ))}
        </TableComponent>
    )
})

export default Table