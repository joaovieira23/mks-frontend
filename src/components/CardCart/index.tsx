import { ReactNode } from 'react';
import { MainContainerCardCart, CloseButton, ContentButtonIconClose } from './styles';
import { X } from 'phosphor-react';
import {useDispatch} from 'react-redux';
import { remove } from '../../store/cartSlice';

interface CardCartProps {
    children: ReactNode
    productId: number;
};

export function CardCart({children, productId}: CardCartProps) {

    const dispatch = useDispatch();

    const handleRemove = (productId: number) => {
        dispatch(remove(productId));
    };

    return (
        <>
            <MainContainerCardCart>
                {children}
            </MainContainerCardCart>
            <CloseButton onClick={() => handleRemove(productId)}>
                <ContentButtonIconClose>
                   <X size={12} color="#FFFFFFFF" />
                </ContentButtonIconClose>
            </CloseButton>
        </>
    );
}