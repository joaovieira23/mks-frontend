import styled from "styled-components";


export const CartSideBar = styled.div`
  z-index: 1000;
  width: 486px;
  background: #0F52BA;
  top: 0;
  right: 0;
  padding: 42px;
  position: fixed;
  overflow: auto;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in-out 0.3s;

  &.expand {
    transition: all ease-in-out 0.3s;
    right: 0;
  }
  &.shrink {
    transition: all ease-in-out 0.3s;
    right: -500px;
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: #FFFFFF;
`;

export const SideBarHeader = styled.p`
  font-weight: 700;
  font-size: 27px;
  padding: 15px 0;
  line-height: 33px;
  color: #FFFFFF;
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  margin: 35px 0 75px 0;
`;


export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CloseButton = styled.button`
    border: 0;
    cursor: pointer;
    outline: none;
    background: none;
`;

export const ContentButtonIconClose = styled.div`
    width: 38px;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #000000;
`;

export const LogoProduct = styled.img`
    width: 64px;
    height: 64px;
`;

export const NameProduct = styled.p`
    font-size: 13px;
    text-align: center;
    max-width: 113px;
`;

export const PriceProduct = styled.p`
    font-size: 14px;
    font-weight: 700;
`