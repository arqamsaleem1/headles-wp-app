import { useState } from "react";
import { Container } from "react-bootstrap";
import Product from "./product";

const CartProductContainer = (props) => {
    
    return ( 
        <Container>
        <ul>
            { props.myProducts.map( product => <li key={product.id}><Product 
            productId = { product.id } 
            productPrice = { product.price } 
            productTitle = { product.title } 
            imageURL = { product.imageUrl } 
            onDeleteClick = { props.handleDeleteClick }
            />
            </li> ) }
            
        </ul>
        </Container>
     );
}
 
export default CartProductContainer;