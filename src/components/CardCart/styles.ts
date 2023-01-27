import styled from "styled-components";

export const MainContainerCardCart = styled.div`
    min-width: 379px;
    min-height: 95px;
    background-color: #FFFFFF;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;


export const CloseButton = styled.button`
    position: absolute;
    left: 92%;
    right: 4%;
    top: -12%;
    bottom: 83.17%;

    border: 0;
    cursor: pointer;
    outline: none;
    background: none;
`;

export const ContentButtonIconClose = styled.div`
    width: 18px;
    height: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #000000;
`;