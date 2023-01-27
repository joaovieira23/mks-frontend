import styled from 'styled-components';
import { Handbag } from "phosphor-react";

export const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 54px;
    padding: 32px;
`;

export const Card = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    min-width: 217px;
    min-height: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`;

export const MainContainer = styled.div`
    height: 100%;
    padding: 32px;
`;

export const ContentImage = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 14px;
`;

export const Image = styled.img`
    height: 138px;
`;

export const TitleProduct = styled.h4`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
`;

export const SubtitleDescription = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    margin-top: 8px;
    line-height: 12px;

`;

export const ContentTitleAndPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ToolTipPrice = styled.div`
    width: 64px;
    height: 26px;
    background-color: #373737;
    border-radius: 5px;

`;

export const Price = styled.h5`
    text-align: center;
    height: 100%;
    color: #FFFFFF;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 100%;
    height: 32px;
    border: 0px;
    font-style: normal;
    outline: none;
    background-color: #0F52BA;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    color: #FFFFFF;

    &:hover {
        opacity: 0.8;
        transition: 0.7;
    }
`;

export const ButtonContainer = styled.div``;

export const HandbagIcon = styled(Handbag)`
  margin-right: 12px;
`