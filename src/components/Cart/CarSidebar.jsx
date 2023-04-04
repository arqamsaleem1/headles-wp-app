import { useEffect } from "react";
import { useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

const CartSidebar = ( props ) => {

    return ( 
        <Container>
            <Card>
                <Card className="body">
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>Sub Total</h3>
                        <span>{props.subTotal}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Shipping</h3>
                        <span>100</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Tax</h3>
                        <span>10</span>
                    </ListGroup.Item>
                </ListGroup>
                </Card>
            </Card>
        </Container>
    );
}
 
export default CartSidebar;