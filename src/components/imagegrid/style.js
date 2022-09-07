import styled from "styled-components";

export const GRID = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
`;
export const WRAP = styled.div`
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    position: relative;
    opacity: 0.8;
    img{
        min-width: 100%;
        min-height: 100%;
        max-width: 150%;
        position: absolute;
        top: 0;
        left: 0;
        &:hover{
            cursor:pointer;
        }
    }
`