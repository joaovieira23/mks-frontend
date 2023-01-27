import { Products } from "../components/Products"
import { Container, Footer, ContentFooter } from './styles'
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useState } from "react";

export const ListProducts = () => {
    const [sticky, setSticky] = useState(false);

	//@ts-ignore
	useScrollPosition(
		({ prevPos, currPos }) => {
			const isShow = currPos.y > prevPos.y;
			if (isShow !== sticky) setSticky(isShow);
		},
		[sticky],
	);

    return (
        <Container>
            <Products />
            <Footer style={{ transform: !sticky ? 'translateY(100%)' : 'translateY(0)' }}>
                <ContentFooter>MKS sistemas © Todos os direitos reservados</ContentFooter>
            </Footer>
        </Container>
    )
}