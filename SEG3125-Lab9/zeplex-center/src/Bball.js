import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import React from "react";
import RegisterModal from './RegisterModal';


const Bball = () => {
    const [modalShow, setmodalShow] = useState(false);
   

    return (
        <div className="pageMargin">
            <h1  className="mb-4 mt-3">Basketball</h1>
            

      <RegisterModal
        show={modalShow}
        onHide={() => setmodalShow(false)}
      />
            
            <p>The Zeplex community is where new or old friends can connect in the timeless sport of basketball. 
                Young or old, competitive or beginner, all players are welcome and embraced by Zeplex. You will be joining and learning from some of Ottawa’s top ranked 
                basketball players who have a passion in teaching the sport.
                </p>
            <p>Zeplex offers different programs for all occasions. If you want lessons throughout the year, we have many great programs for players starting out their basketball journey as well as intermediate players who want to
                take their game to the next level. If you only have the time in summer break, we offer state of the art summer camps that have helped players extend their basketball skills in only 2 months. Beginner summer camps are also
                a great way for kids to have fun, stay active, and get introduced to the world of basketball.
            </p>
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
                            Beginner Boys Lessons
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body> <h5>60$/week</h5> <p>When: Every Saturday at 3:00 PM to 5:00 PM EST</p> Description: In this program, students will be given an introduction to basketball. Learning the proper first steps is crucial to the future of a basketball player.
                            In this course, students will learn the basics of shooting, passing, dribbling as well as many more concepts which can be applied to our weekly scrimmages. 
                            In addition to basketball skills, students will learn about applying teamwork annd effort to successful on the court. Most importantly, students will have lots of fun!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="hover">
                        Beginner Girls Lessons
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body><h5>60$/week</h5> <p>When: Every Saturday at 3:00 PM to 5:00 PM EST</p> Description: In this program, students will be given an introduction to basketball. Learning the proper first steps is crucial to the future of a basketball player.
                            In this course, students will learn the basics of shooting, passing, dribbling as well as many more concepts which can be applied to our weekly scrimmages. 
                            In addition to basketball skills, students will learn about applying teamwork annd effort to successful on the court. Most importantly, students will have lots of fun!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="hover">
                            Intermediate Boys Lessons
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                            <Card.Body><h5>85$/week</h5> <p>When: Every Sunday at 3:00 PM to 5:00 PM EST</p> Description: In this program, students will be taken to the next level of basketball. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our weekly scrimmages. 
                            In addition to basketball skills, students will learn about applying teamwork annd effort to successful on the court. Most importantly, students will have lots of fun!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="hover">
                        Intermediate Girls Lessons
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="3">
                            <Card.Body><h5>85$/week</h5> <p>When: Every Sunday at 3:00 PM to 5:00 PM EST</p> Description: In this program, students will be taken to the next level of basketball. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our weekly scrimmages. 
                            In addition to basketball skills, students will learn about applying teamwork annd effort to successful on the court. Most importantly, students will have lots of fun!</Card.Body>
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
                            <Card.Body><h5>300$/week</h5><p>When: July - August</p> Description: In this program, students will be taken to the next level of basketball. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our weekly scrimmages. 
                            In addition to basketball skills, students will learn about applying teamwork annd effort to successful on the court. Most importantly, students will have lots of fun!
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="hover">
                        Begginner Girls Camp
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body><h5>300$/week</h5><p>When: July - August</p> Description: In this program, students will be taken to the next level of basketball. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our weekly scrimmages. 
                            In addition to basketball skills, students will learn about applying teamwork annd effort to successful on the court. Most importantly, students will have lots of fun!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="hover">
                        Intermediate Boys Camp
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                            <Card.Body><h5>400$/week</h5><p>When: July - August</p> Description: In this program, students will be taken to the next level of basketball. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our weekly scrimmages. 
                            In addition to basketball skills, students will learn about applying teamwork annd effort to successful on the court. Most importantly, students will have lots of fun!</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="hover">
                        Intermediate Girls Camp
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="3">
                            <Card.Body><h5>400$/week</h5><p>When: July - August</p> Description: In this program, students will be taken to the next level of basketball. Students will be pushed to learn about ways
                            to become more dynamic and effective on the court as well as many more concepts which can be applied to our weekly scrimmages. 
                            In addition to basketball skills, students will learn about applying teamwork annd effort to successful on the court. Most importantly, students will have lots of fun!</Card.Body>
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
 
export default Bball;