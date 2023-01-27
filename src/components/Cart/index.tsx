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
                <div style={{ padding: 42}}>
                    <HeaderCard>
                        <SideBarHeader>Carrinho <br/>de compras</SideBarHeader>
                        <CloseButton onClick={onClose}>
                            <ContentButtonIconClose>
                            <X size={20} color="#FFFFFFFF" />
                            </ContentButtonIconClose>
                        </CloseButton>
                    </HeaderCard>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-evenly" }}>
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
                    </div>
                </div>
                        {carts.length !== 0 && (
                            <>
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: 42, marginBottom: 16}}>
                                    <h4 style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 700, marginBottom: 42 }}>Total</h4>
                                    <h4 style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 700 }}>R$ {total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
                                </div>
                                <div style={{ position: 'fixed', bottom: 0}}>
                                    <button style={{  height: 84, fontSize: 28, width: 486, fontWeight: 700, padding: 4, color: '#FFFFFF', border: 'none', outline: 'none', backgroundColor: '#000000'}}>Finalizar Compra</button>
                                </div>
                            </>
                        )}
      </CartSideBar>
    </>
  );
}