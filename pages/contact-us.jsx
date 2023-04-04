import { Col, Container, Row } from 'react-bootstrap';
import PageLayout from '../layouts/page-layout';
import ContactForm from '../src/components/contact-us/ContactForm';


const ContactUs = () => {
    return (
        <PageLayout>
            <Container className='pt-5'>
                <Row>
                    <Col>
                        <div className='form-wrap'>
                            <ContactForm/>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </PageLayout>
     );
}
 
export default ContactUs;