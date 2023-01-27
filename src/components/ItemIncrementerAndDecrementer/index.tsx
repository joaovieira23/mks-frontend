import {
    MainContainer,
    Wrapper,
    Operation,
    Num,
    TextQuantity
} from './styles';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../../store/cartSlice';
import { PropsProduct } from '../Products';

export function ItemIncrementerAndDecrementer({cartItem}: { cartItem: PropsProduct }) {
    const dispatch = useDispatch();

    return (
        <MainContainer>
            <TextQuantity>Qtd:</TextQuantity>
            <Wrapper>
                <Operation onClick={() => dispatch(decrease(cartItem))}>-</Operation>
                <Num>{cartItem.amount}</Num>
                <Operation onClick={() => dispatch(increase(cartItem))}>+</Operation>
            </Wrapper>
        </MainContainer>
    )
};