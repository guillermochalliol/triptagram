import styled from "styled-components";

export const PROGRESSBAR = styled.div`
    height: 5px;
    background: var(--primary);
    margin-top: 20px;
    width: ${props => props.width ? props.width : '0%'}
`