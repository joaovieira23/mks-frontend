import { 
    Container, 
    WrapperTitle, 
    Title, 
    SubTitle, 
    ButtonHeaderContainer, 
    ButtonCart, 
    CounterItemsCart 
} from './styles';
import { ShoppingCart } from 'phosphor-react';
import { useSelector } from 'react-redux';
import {PropsProduct } from '../Products'
import Cart from '../Cart';
import { ListProducts } from '../../pages/ListProducts';
import { useState } from 'react';

interface PropsCartSelector {
    cart: Array<PropsProduct>
}

export const MainContent = () => {
    const items = useSelector((state: PropsCartSelector) => state.cart)
    const [cartsVisibilty, setCartVisible] = useState(false);

    const products = useSelector((state: PropsCartSelector) => state.cart);

    return (
        <>
            <Container>
                <WrapperTitle>
                    <Title>MKS</Title>
                    <SubTitle>Sistemas</SubTitle>
                </WrapperTitle>

                <ButtonHeaderContainer>
                    <ButtonCart onClick={() => setCartVisible(true)}>
                        <ShoppingCart color="#000000" size={20} />
                        <CounterItemsCart>{items.length}</CounterItemsCart>
                    </ButtonCart>
                </ButtonHeaderContainer>
            </Container>

            <Cart 
                visibilty={cartsVisibilty}
                isOpenCart
                onClose={() =>
                    setCartVisible(false)
                }
                carts={products}
            />

            <ListProducts />
        </>
    )
};
