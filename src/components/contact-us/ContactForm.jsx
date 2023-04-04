import React, { useEffect, useRef, useState } from 'react';
import { wpHeadless } from '../../api/base';
import { Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {

    const [response, setReponse] = useState([]);
    const [alert, setAlert] = useState(false);


    const firstName = useRef('');
    const lastName = useRef('');
    const company = useRef('');
    const email = useRef('');
    const phoneNumber = useRef('');

    const handleOnClick = () =>{

        wpHeadless.post('/contact-form-7/v1/contact-forms/73/feedback', {
            "firstName" : firstName.current.value,
            "lastName" : lastName.current.value,
            "company" : company.current.value,
            "email" : email.current.value,
            "phone" : phoneNumber.current.value,
        },{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((jsonResponse => {
                    console.log(jsonResponse);
                    if(jsonResponse.status === 200){
                        setAlert(true);
                        setReponse(jsonResponse.data);
                    }
                }
            ))
            .catch((err => {
                console.log(err);
        }));
    }
    return ( 
        <div>
            <Form action="">
                <Form.Group>
                    <Form.Label for="firstName">First name: </Form.Label>
                    <Form.Control ref={firstName} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="lastName">Last name: </Form.Label>
                    <Form.Control ref={lastName} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="company">Company: </Form.Label>
                    <Form.Control ref={company} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="phoneNumber">Phone number: </Form.Label>
                    <Form.Control ref={phoneNumber} type="tel" />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="email">Email: </Form.Label>
                    <Form.Control ref={email} type="email" />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Button type='button'  onClick={handleOnClick}> Submit</Button>
                </Form.Group>
            </Form>

            <Alert 
                className='mt-3' 
                show={ alert } 
                key={(response.status==="mail_sent") ? 'success' : 'warning'} 
                variant={(response.status==="mail_sent") ? 'success' : 'warning'}
                >
                    {response.message}
            </Alert>
        </div>
     );
}
 
export default ContactForm;