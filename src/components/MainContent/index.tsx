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
import { useSelector, useDispatch } from 'react-redux';
import {PropsProduct } from '../Products'
import Cart from '../Cart';
import { ListProducts } from '../../pages/ListProducts';
import { useEffect, useState } from 'react';
import { total } from '../../store/cartSlice';

interface PropsCartSelector {
    cart: {
        cartItems: PropsProduct[],
        total: number;
    }
}

export const MainContent = () => {
    const {amount} = useSelector((state: { cart: { amount: number } }) => state.cart)
    const [cartsVisibilty, setCartVisible] = useState(false);

    const {cartItems, total: totalCount} = useSelector((state: PropsCartSelector) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(total())
    }, [cartItems]);

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
                        <CounterItemsCart>{amount}</CounterItemsCart>
                    </ButtonCart>
                </ButtonHeaderContainer>
            </Container>

            <Cart 
                visibilty={cartsVisibilty}
                isOpenCart
                onClose={() =>
                    setCartVisible(false)
                }
                total={totalCount}
                carts={cartItems}
            />

            <ListProducts />
        </>
    )
};
