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
  PriceProduct
} from "./styles";
import { ItemIncrementerAndDecrementer } from "../ItemIncrementerAndDecrementer";
import { CardCart } from "../CardCart";


export default function Cart({
  carts,
  onClose,
  visibilty
}: {
    carts: PropsProduct[];
    isOpenCart: boolean
    visibilty: boolean;
    onClose: any;
}) {

  return (
    <>
      <CartSideBar style={{
				display: visibilty
					? "block"
					: "none",
			}}>
        <HeaderCard>
            <SideBarHeader>Carrinho <br/>de compras</SideBarHeader>
            <CloseButton onClick={onClose}>
                <ContentButtonIconClose>
                   <X size={20} color="#FFFFFFFF" />
                </ContentButtonIconClose>
            </CloseButton>
        </HeaderCard>
        {carts.length === 0 ? (
          <EmptyCart>O carrinho está vazio</EmptyCart>
        ) : (
          carts.map((item: PropsProduct) => (
            <Card key={item.id}>
                <CardCart productId={item.id}>
                    <LogoProduct src={item.photo} alt={item.name} />
                    <NameProduct>{item.name}</NameProduct>
                    <ItemIncrementerAndDecrementer quantity={2} />
                    <PriceProduct>R$ {parseInt(item.price).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</PriceProduct>
                </CardCart>
            </Card>
          ))
        )}
      </CartSideBar>
    </>
  );
}