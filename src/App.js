import styled from "styled-components";
import './App.css';
import React from 'react'
import Pagination from "./Pagination";
import Table from "./Table";
import Input from "./Input";

const AppComponent = styled.div`
  width:100%;
  height:100%;
`

function App() {

    return (
        <AppComponent>
            <Table/>
            <Pagination/>
            <Input/>
        </AppComponent>
    );
}

export default App;
