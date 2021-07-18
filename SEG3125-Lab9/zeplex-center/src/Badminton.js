import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import React from "react";
import RegisterModal from './RegisterModal';

const Badminton = () => {
    const [modalShow, setmodalShow] = useState(false);
    return (
        <div className="pageMargin">
        <h1  className="mb-4 mt-3">Badminton</h1>
        

  <RegisterModal
    show={modalShow}
    onHide={() => setmodalShow(false)}
  />
        
        <p>Zeplex has long been a community where new or old friends connect in this timeless sport. 
            Young or old, competitive or recreational, all players have a place at the RA. You will be joining and learning from some of worlds’s top ranked 
                badminton players who have a passion in teaching the sport. Registering for a course is a great way to meet new friends and hone your skills as a badminton player.</p>
        <p> Zeplex offers different programs for all occasions. If you want lessons throughout the year, we have many great programs for players starting out their badminton journey as well as intermediate players 
            who want to take their game to the next level. If you only have the time in summer break, we offer state of 
            the art summer camps that have helped players extend their badminton skills in only 2 months. Beginner summer camps are also a great way for kids to have fun, stay active, and get introduced to the world of badminton.</p>
        <div className="sportPageMargin register" >
            <button className="button" onClick={() => setmodalShow(true)}>
                Register Now
            </button>
        </div>
     
        <div className="sportPageMargin">
            <h4 className="mb-4 mt-3"> Year-Round Courses</h4>
            <Accordion defaultActiveKey="0" >
            
                <Card > 
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="hover">
                        Begginner Boys Lessons
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body><h5>60$/week</h5> <p>When: Every Saturday at 11:00 AM to 1:00 PM EST</p> Description: In this program, students will be given an introduction to badminton. Learning the proper first steps is crucial to the future of a basketball player.
                            In this course, students will learn the basics as well as many more concepts which can be applied to our matches. 
                            In addition to vadminton skills, students will learn about applying teamwork in doubles annd effort to successful on the badminton court. Most importantly, students will have lots of fun!</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="hover">
                    Beginner Girls Lessons
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body><h5>60$/week</h5><p>When: Every Saturday at 11:00 AM to 1:00 PM EST</p> Description: In this program, students will be given an introduction to badminton. Learning the proper first steps is crucial to the future of a basketball player.
                            In this course, students will learn the basics as well as many more concepts which can be applied to our matches. 
                            In addition to vadminton skills, students will learn about applying teamwork in doubles annd effort to successful on the badminton court. Most importantly, students will have lots of fun!</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="hover">
                    Intermediate Boys Lessons
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body><h5>85$/week</h5><p>When: Every Sunday at 11:00 AM to 1:00 PM EST</p> Description: In this program, students will be taken to the next level of badminton. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our matches. 
                            In addition to badminton skills, students will learn about applying teamwork in doubles annd effort to successful on the badminton court. Most importantly, students will have lots of fun!</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="hover">
                    Intermediate Girls Lessons
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="3">
                        <Card.Body><h5>85$/week</h5><p>When: Every Sunday at 11:00 AM to 1:00 PM EST</p> Description: In this program, students will be taken to the next level of badminton. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our matches. 
                            In addition to badminton skills, students will learn about applying teamwork in doubles annd effort to successful on the badminton court. Most importantly, students will have lots of fun!</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>

        <div className="sportPageMargin">
        <h4 className="mb-4 mt-3">Summer Camp Courses</h4>
            <Accordion defaultActiveKey="0">
            
                <Card > 
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="hover">
                    Begginner Boys Camp
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body><h5>300$/week</h5><p>When: July - August</p> Description: In this program, students will be given an introduction to badminton. Learning the proper first steps is crucial to the future of a basketball player.
                            In this course, students will learn the basics as well as many more concepts which can be applied to our matches. 
                            In addition to vadminton skills, students will learn about applying teamwork in doubles annd effort to successful on the badminton court. Most importantly, students will have lots of fun!
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="hover">
                    Beginner Girls Camp
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body><h5>300$/week</h5><p>When: July - August</p> Description: In this program, students will be given an introduction to badminton. Learning the proper first steps is crucial to the future of a basketball player.
                            In this course, students will learn the basics as well as many more concepts which can be applied to our matches. 
                            In addition to vadminton skills, students will learn about applying teamwork in doubles annd effort to successful on the badminton court. Most importantly, students will have lots of fun!</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="hover">
                    Intermediate Boys Camp
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body><h5>300$/week</h5><p>When: July - August</p> Description: In this program, students will be taken to the next level of badminton. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our matches. 
                            In addition to badminton skills, students will learn about applying teamwork in doubles annd effort to successful on the badminton court. Most importantly, students will have lots of fun!</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="hover">
                    Intermediate Girls Camp
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="3">
                        <Card.Body><h5>300$/week</h5><p>When: July - August</p> Description: In this program, students will be taken to the next level of badminton. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our matches. 
                            In addition to badminton skills, students will learn about applying teamwork in doubles annd effort to successful on the badminton court. Most importantly, students will have lots of fun!</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
        <div className="sportPageMargin register" >
                <button className="button" onClick={() => setmodalShow(true)}>
                    Register Now
                </button>
            </div>
         
        <br /><br />
    </div>
    );
}
 
export default Badminton;