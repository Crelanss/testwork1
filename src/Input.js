import React, {useEffect} from 'react'
import styled from "styled-components";
import InputState from "./store/InputState";
import {observer} from 'mobx-react-lite'
import Numbers from "./store/NumbersState";

const InputComponent = styled.div`
  margin-top: 20px;
  width:300px;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  input{
    width: 100%;
    height: 100%;
    font-size: 2rem;
  }
`

const Input = observer(() => {
    useEffect(() => {
        Numbers.findNumber(InputState.text)
    })
    return (
        <InputComponent>
            <input onChange={event => {
                InputState.setText(event.target.value)
            }}
                   value={InputState.text}
            />
            {InputState.text}
        </InputComponent>

    )
})

export default Input