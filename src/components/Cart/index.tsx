import { PropsProduct } from "../Products";
import { X } from 'phosphor-react';
import {
  CartSideBar,
  EmptyCart,
  SideBarHeader,
  Card,
  HeaderCard,
  CloseButton,
  ContentButtonIconClose,
  LogoProduct,
  NameProduct,
  PriceProduct,
  MainContainer,
  ContainerEmptyCart,
  ContainerFooterCart,
  TitleFooterCart,
  ContainerButtonFinishCart,
  ButtonFinishCart
} from "./styles";
import { ItemIncrementerAndDecrementer } from "../ItemIncrementerAndDecrementer";
import { CardCart } from "../CardCart";

export default function Cart({
  carts,
  onClose,
  visibilty,
  total
}: {
    carts: PropsProduct[];
    isOpenCart: boolean
    visibilty: boolean;
    onClose: any;
    total: number
}) {
  return (
    <>
      <CartSideBar style={{
				display: visibilty
					? "block"
					: "none",
			}}>
                <MainContainer>
                    <HeaderCard>
                        <SideBarHeader>Carrinho <br/>de compras</SideBarHeader>
                        <CloseButton onClick={onClose}>
                            <ContentButtonIconClose>
                            <X size={20} color="#FFFFFFFF" />
                            </ContentButtonIconClose>
                        </CloseButton>
                    </HeaderCard>
                    <ContainerEmptyCart>
                        {carts.length === 0 ? (
                        <EmptyCart>O carrinho está vazio</EmptyCart>
                        ) : (
                        carts.map((item: PropsProduct) => (
                            <Card key={item.id}>
                                <CardCart cartItem={item}>
                                    <LogoProduct src={item.photo} alt={item.name} />
                                    <NameProduct>{item.name}</NameProduct>
                                    <ItemIncrementerAndDecrementer cartItem={item} />
                                    <PriceProduct>R$ {parseInt(item.price).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</PriceProduct>
                                </CardCart>
                            </Card>
                        ))
                        )}
                    </ContainerEmptyCart>
                </MainContainer>
                        {carts.length !== 0 && (
                            <>
                                <ContainerFooterCart>
                                    <TitleFooterCart style={{ marginBottom: 42 }}>Total</TitleFooterCart>
                                    <TitleFooterCart>R$ {total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</TitleFooterCart>
                                </ContainerFooterCart>
                                <ContainerButtonFinishCart>
                                    <ButtonFinishCart>Finalizar Compra</ButtonFinishCart>
                                </ContainerButtonFinishCart>
                            </>
                        )}
      </CartSideBar>
    </>
  );
}