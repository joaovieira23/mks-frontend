import styled from "styled-components";


export const CartSideBar = styled.div`
  z-index: 1000;
  width: 486px;
  background: #0F52BA;
  top: 0;
  right: 0;
  position: fixed;
  overflow: auto;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in-out 0.3s;

  ::-webkit-scrollbar {display:none;}

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
  margin: 20px 0 28px 0;
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
`;

export const MainContainer = styled.div`
  padding: 42px;
`;

export const ContainerEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ContainerFooterCart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 42px;
  margin-bottom: 16px;
`;

export const TitleFooterCart = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 42px;
`;

export const ContainerButtonFinishCart = styled.div`
  position: fixed;
  bottom: 0px;
`;

export const ButtonFinishCart = styled.button`
  cursor: pointer;
  height: 84px;
  width: 486px;
  font-size: 28px;
  font-weight: 700;
  padding: 4px;
  color: #FFFFFF;
  border: none;
  outline: none;
  background-color: #000000;
`;