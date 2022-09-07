import styled from "styled-components";

export const FORM = styled.form`
    margin: 30px auto 10px;
    text-align: center;
`;
export const LABEL =styled.label`
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    margin: 10px auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    font-size: 24px;
    &:hover{
        background: var(--primary);
        color: white;
    };
    input{
        height: 0;
        width: 0;
        opacity: 0;
    };
`;
export const OUTPUT =styled.div`
    height: 60px;
    max-width:400px;
    margin:auto;
    font-size: 0.8rem;
    .error{
        color: var(--error);
    }
`
