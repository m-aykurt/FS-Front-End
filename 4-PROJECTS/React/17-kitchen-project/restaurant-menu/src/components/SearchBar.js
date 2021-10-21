import React from 'react'
import styled from "styled-components";

const Input= styled.input`
    width: 70%;
    background-color: blue;
    height: 2rem;
`


function SearchBar() {
    return (
        <div>
            <Input />
        </div>
    )
}

export default SearchBar
