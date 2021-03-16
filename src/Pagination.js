import React , {useState} from 'react'
import styled from "styled-components";
import {observer} from 'mobx-react-lite'
import PageNumber from './store/PageNumber'
import ChosePage from './store/ChosenPage'
import {wordNumber, maxWordsInPage} from "./Table";

const PaginationComponent =styled.div`
  width: 800px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`
const ChangingNumberContainer=styled.div`
  width:600px;
  height: 100px;
  display: flex;
`

const PageNumberCell=styled.div`
  width:100px;
  height: 100px;
  border: 1px solid black;
`

const pageNumber=Math.ceil(wordNumber/maxWordsInPage)

const nextNumbers=()=>{
    if(pageNumber-PageNumber.currentNumber-5>1){
        PageNumber.increaseNumber()
    }
}
const previousNumbers=()=>{
    if(PageNumber.currentNumber-1>1){
        PageNumber.decreaseNumber()
    }
}

const clickHandler=(cellNumber)=>{
    if(cellNumber===1||cellNumber===pageNumber){
        ChosePage.changeChosen(cellNumber)
    }else{
        const differ=cellNumber-2
        ChosePage.changeChosen(PageNumber.currentNumber+differ)
    }
}

const pageNumbersArray=[]

for(let i=0; i<pageNumber; i++){
    pageNumbersArray[i]=i+1
}

const Pagination=observer(()=>{
    if(pageNumber>8){
    return(
        <PaginationComponent>
                <PageNumberCell onClick={() => clickHandler(1)}>1</PageNumberCell>
                <ChangingNumberContainer>
                <PageNumberCell onClick={() => {
                clickHandler(2)
                previousNumbers()
            }}>{PageNumber.currentNumber}</PageNumberCell>
                <PageNumberCell onClick={() => clickHandler(3)}>{PageNumber.currentNumber + 1}</PageNumberCell>
                <PageNumberCell onClick={() => clickHandler(4)}>{PageNumber.currentNumber + 2}</PageNumberCell>
                <PageNumberCell onClick={() => clickHandler(5)}>{PageNumber.currentNumber + 3}</PageNumberCell>
                <PageNumberCell onClick={() => clickHandler(6)} >{PageNumber.currentNumber + 4}</PageNumberCell>
                <PageNumberCell onClick={() => {
                clickHandler(7)
                nextNumbers()
            }}>{PageNumber.currentNumber + 5}</PageNumberCell>
                </ChangingNumberContainer>
                <PageNumberCell onClick={() => clickHandler(8)}>{pageNumber}</PageNumberCell>
        </PaginationComponent>

    )}else{
        return(
            <PaginationComponent>
                {pageNumbersArray.map((el)=>(
                    <PageNumberCell onClick={()=>clickHandler(el)}>{el}</PageNumberCell>
                ))}
            </PaginationComponent>
        )
    }
})

export default Pagination