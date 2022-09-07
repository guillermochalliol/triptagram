import styled from "styled-components";

export const BACKDROP= styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    img{
        display: block;
        max-width: 60%;
        max-height: 80%;
        margin: auto;
        box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    }
`
