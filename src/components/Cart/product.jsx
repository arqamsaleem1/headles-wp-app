import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const Product = ( props ) => {


    return ( 
        <div className="cart-item">
            <Row>
                <Col md="4">
                    <div className="product-img">
                        <img src={props.imageURL} alt="" />
                    </div>
                </Col>
                <Col md="8">
                    <Row>
                        <Col md="6">
                            <h3>{props.productTitle}</h3>
                        </Col>
                        <Col md="3">
                            <span className="price">{props.productPrice}</span>
                        </Col>
                        <Col md="3">
                            <span onClick={() => props.onDeleteClick(props.productId) } className="delete-btn">Delete</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Product;