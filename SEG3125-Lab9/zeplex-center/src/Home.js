import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import MainImage from './images/playing-sports.jpg';
import Bball1 from './images/bball1.jpg';
import Bball2 from './images/bball2.jpg';
import Bball3 from './images/bball3.png';
import Badmin1 from './images/badmin1.jpg';
import Badmin2 from './images/badmin2.jpg';
import Badmin3 from './images/badmin3.jpg';

const  Home = () => {
    return (
        <div className="pageMargin">

            <h1 className="mb-4 mt-3">Welcome</h1>
            <div className="homePara"><p>Welcome to Zeplex Sporting Centre! Currently we offer the best sports service for basketball and badminton fans.
                Zeplex Sporting Centre operates a multi-sport facility which is conveniently located as the centre of downtown Ottawa.</p>
                <br /><p>With top qualified intructors, we provide the most enriching porgrams for people of all levels. We also have the city's best facilities, hosting our very new basketball gyms and badminton courts.</p>
                <p>With Zeplex, you will surely find a course suitable for your level, whether that be begginner or intermediate.</p>
                <p>Since 2015 Zeplex has been providing memorable experiences to sports enthusiasts of all ages and levels. The Zeplex's model of engagement has enabled members and the 
                    community to participate in opportunities through ever-evolving facilities and programs ever since.</p></div>
    
           <div className="image"><Image src={MainImage}/>
           </div>
           <div className="clearfix"></div>
           
           <h1 className="mb-4 mt-3">Basketball Instructors</h1>
           <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Bball2} />
                    <Card.Body>
                    <Card.Title>Lizzy Cambridge</Card.Title>
                    <Card.Text>
                        LIzzy Cambridge is a certifies basketball instructor who loves to teach. She was born in Ottawa and 
                        played basketball for the Uottawa GGs in 2015-2019. She won 2 national championships with the GGs.
                    </Card.Text>
                    </Card.Body>
                 
                </Card>
                <Card>
                    <Card.Img variant="top" src={Bball1} />
                    <Card.Body>
                    <Card.Title>Stefan Kerry</Card.Title>
                    <Card.Text>
                    Stefan Kerry is a certifies basketball instructor who specializes in the art of shooting. He was born in Montreal and 
                        played basketball for the Carleton Ravens in 2014-2017. He won 3 national championships with the Ravens.
                    </Card.Text>
                    </Card.Body>
                 
                </Card>
                <Card>
                    <Card.Img variant="top" src={Bball3} />
                    <Card.Body>
                    <Card.Title>Aron Gord</Card.Title>
                    <Card.Text>
                    Aron Gord is a certifies basketball instructor who specializes in the art of dribbling. He was born in Toronto and 
                        played basketball for the Carleton Ravens in 2015-2017. He won 1 national championship with the Ravens.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </CardGroup>
           <h1 className="mb-4 mt-3">Badminton Instructors</h1>
           <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Badmin1} />
                    <Card.Body>
                    <Card.Title>Alice Watanabe</Card.Title>
                    <Card.Text>
                    Alice Watanabe is a certifies basketball instructor who loves to teach. She was born in Ottawa and 
                        played badminton for the Uottawa GGs in 2015-2019. She won 4 national championships with the GGs.
                    </Card.Text>
                    </Card.Body>
            
                </Card>
                <Card>
                    <Card.Img variant="top" src={Badmin2} />
                    <Card.Body>
                    <Card.Title>Shawn Wu</Card.Title>
                    <Card.Text>
                    Shawn Wu is a certifies basketball instructor who loves to teach. He was born in Toronto and 
                        played badminton for the Uottawa GGs in 2017-2019. He won 4 national championships.
                    </Card.Text>
                    </Card.Body>
                
                </Card>
                <Card>
                    <Card.Img variant="top" src={Badmin3} />
                    <Card.Body>
                    <Card.Title>Jessica Smith</Card.Title>
                    <Card.Text>
                    Jessica Smith is a certifies basketball instructor who loves to teach. She was born in Ottawa and 
                        played badminton for the Uottawa GGs in 2019-2021. She won 2 national championships with the GGs.
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                </CardGroup>
                <br /><br />
        </div>
    );
}
 
export default Home;