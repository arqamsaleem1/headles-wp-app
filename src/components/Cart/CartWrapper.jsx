import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CartSidebar from "./CarSidebar";
import CartProductContainer from "./cartProductsContainer";

const CartWrapper = () => {
    
    const [cartTotal, setCartTotal] = useState(0);
    const [myProducts, setMyProducts] = useState( [
        {
            id: 1,
            title: 'Product 1',
            imageUrl: 'https://erasmusnation-com.ams3.digitaloceanspaces.com/woocommerce-placeholder.png',
            price: 100,
        },
        {
            id: 2,
            title: 'Product 2',
            imageUrl: 'https://erasmusnation-com.ams3.digitaloceanspaces.com/woocommerce-placeholder.png',
            price: 200,
        },
        {
            id: 3,
            title: 'Product 3',
            imageUrl: 'https://erasmusnation-com.ams3.digitaloceanspaces.com/woocommerce-placeholder.png',
            price: 300,
        },
    ] );

    useEffect(() => {
        let total = 0;
        myProducts.map( product => total = parseInt(total) + parseInt(product.price) )
        setCartTotal(total);
    }, [myProducts, cartTotal]);

    const handleDeleteClick = productId => {
        const oldProducts = myProducts;
        const newProducts = oldProducts.filter( product => product.id != productId );
        setMyProducts( newProducts );
        console.log(productId);
    }

    

    return ( 
        <div className="cart-wrapper">
            <Row>
                <Col md="8">
                    <CartProductContainer myProducts={myProducts} handleDeleteClick={handleDeleteClick} />
                </Col>
                <Col md="4">
                    <CartSidebar subTotal={cartTotal} />
                </Col>
            </Row>
        </div>
     );
}
 
export default CartWrapper;