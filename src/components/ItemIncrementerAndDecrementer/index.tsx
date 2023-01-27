import {
    MainContainer,
    Wrapper,
    Operation,
    Num,
    TextQuantity
} from './styles';

export function ItemIncrementerAndDecrementer({quantity}: { quantity: number }) {
    return (
        <MainContainer>
            <TextQuantity>Qtd:</TextQuantity>
            <Wrapper>
                <Operation>-</Operation>
                <Num>{quantity}</Num>
                <Operation>+</Operation>
            </Wrapper>
        </MainContainer>
    )
};