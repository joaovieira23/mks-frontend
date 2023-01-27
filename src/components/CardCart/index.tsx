import { ReactNode } from 'react';
import { MainContainerCardCart, CloseButton, ContentButtonIconClose } from './styles';
import { X } from 'phosphor-react';
import {useDispatch} from 'react-redux';
import { PropsProduct } from '../Products';
import { remove } from '../../store/cartSlice';

interface CardCartProps {
    children: ReactNode
    cartItem: PropsProduct;
};

export function CardCart({children, cartItem}: CardCartProps) {

    const dispatch = useDispatch();

    return (
        <>
            <MainContainerCardCart>
                {children}
            </MainContainerCardCart>
            <CloseButton onClick={() => dispatch(remove(cartItem))}>
                <ContentButtonIconClose>
                   <X size={12} color="#FFFFFFFF" />
                </ContentButtonIconClose>
            </CloseButton>
        </>
    );
}