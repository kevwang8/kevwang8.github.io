import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Footer = ({language, setLanguage}) => {

    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col><p className="footerText2">{language == "English" ? "Site Created By: Xeplex" : "Site créé par: Zeplex"}</p></Col>
                    <Col xs={2}>
                        <Form className="lang">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                
                                <Form.Control size="sm" onChange={(e) => setLanguage(e.target.value)} value={language} as="select">  
                                    <option>English</option>
                                    <option>Francais</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
               
            </Container>
           
        </div>
    );
}
 
export default Footer;