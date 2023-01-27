import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

export const Wrapper = styled.div`
    height: 20px;
    min-width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 4px;
    font-weight: 400;

    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
`;

export const Operation = styled.span`
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 400;

    cursor: pointer
`

export const Num = styled.span`
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 400;

    border-right: 1px solid rgba(0,0,0,0.2);
    border-left: 1px solid rgba(0,0,0,0.2);
`;

export const TextQuantity = styled.span`
    font-size: 5px;
    margin-bottom: 4px;
`