import styled from 'styled-components';

export const Container = styled.div`
    height: 101px;
    background-color: #0F52BA;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 0 65px;
`;

export const Title = styled.h1`
    font-size: 40px;
`;

export const WrapperTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
    margin-left: 4px;
    margin-top: 12px;
`;

export const ButtonHeaderContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

export const ButtonCart = styled.button`
    outline: none;
    cursor: pointer;
    border: 0;
    background-color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 90px;
    height: 45px;
`;

export const CounterItemsCart = styled.span`
    color: '#000000';
    margin-left: 16px;
    font-weight: bold;
`