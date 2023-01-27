import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { add } from "../../store/cartSlice";
import { useDispatch } from 'react-redux';

import { 
    Card,
    MainContainer,
    ProductsWrapper, 
    Image, 
    TitleProduct, 
    SubtitleDescription, 
    ContentImage, 
    ContentTitleAndPrice, 
    ToolTipPrice,
    Price,
    Button,
    ButtonContainer,
    HandbagIcon
} from './styles';

export interface PropsProduct {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
}

interface PropsProducts {
    products: Array<PropsProduct>,
}
export const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState<PropsProducts>();

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                const { data } = await api.get('/products', {
                    params: {
                        page: 1,
                        rows: 5,
                        sortBy: 'name',
                        orderBy: 'DESC',
                    }
                })
    
                setProducts(data);
            }
    
            fetchProducts();
        } catch (e) {
            console.log('error', e)
        }
    }, []);

    const handleAdd = (product: PropsProduct) => {
        dispatch(add(product))
    }

    return (
        <ProductsWrapper>
            {
                products?.products.map((product) => (
                    <Card
                        key={product.id}
                    >
                        <MainContainer>
                            <ContentImage>
                                <Image src={product.photo} alt={product.name} />
                            </ContentImage>

                            <ContentTitleAndPrice>
                                <TitleProduct>{product.name}</TitleProduct>
                                <ToolTipPrice>
                                    <Price>${parseInt(product.price).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Price>
                                </ToolTipPrice>
                            </ContentTitleAndPrice>

                            <SubtitleDescription>{product.description}</SubtitleDescription>
                        </MainContainer>

                        <ButtonContainer>
                            <Button onClick={() => handleAdd(product)}>
                                <HandbagIcon size={20} />
                                COMPRAR
                            </Button>
                        </ButtonContainer>
                    </Card>
                ))
            }
        </ProductsWrapper>
    )
}