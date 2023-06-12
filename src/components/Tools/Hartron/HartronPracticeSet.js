import React, { useState } from 'react';
import HartronQuestions from "../../../data/Hartron/HartronQuestions";
import { Row, Col, Card, Label, Button } from 'react-bootstrap';
import { Form, FormGroup, Input } from 'reactstrap';


export const HartronPracticeSet = () => {
    const itemsPerPage = 10; // define number of items to display per page
    const [showAnswer, setShowAnswer] = useState(-1);
    const handleShowAnswer = (index) => {
        // console.log("show Answer Clicked", showAnswer)
        setShowAnswer(index);
    }

    const [currentPage, setCurrentPage] = useState(1); // define current page number

    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = HartronQuestions.slice(startIdx, endIdx);
  
    const totalPages = Math.ceil(HartronQuestions.length / itemsPerPage);
  
    function goToPage(pageNumber) {
      setCurrentPage(pageNumber);
    }
  return (
    <div className='header-space'>
    {currentItems.map(( item,i) => (
        <Card className="my-5" key={i}> 
        <Card.Body className="overflow-hidden ">
          <Row className="align-items-center justify-content-between">
            <Col className=" m-1 ">
              <FormGroup tag="fieldset">
                <Card.Title>
                  <strong className='text-success'>Ques.</strong> {item.Questions}
                </Card.Title>
                <FormGroup check>
                 <Form.Label  check>
                    <Input type="radio" name="radio1" /> A. {item.A}
                  </Form.Label>
                </FormGroup>
                <FormGroup check>
                  <Form.Label check>
                    <Input type="radio" name="radio1" />B. {item.B}
                  </Form.Label>
                </FormGroup>
                <FormGroup check>
                  <Form.Label check>
                    <Input type="radio" name="radio1" />C. {item.C}
                  </Form.Label>
                </FormGroup>
                <FormGroup check>
                  <Form.Label check>
                    <Input type="radio" name="radio1" />D. {item.D}
                  </Form.Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between">
            <Col className=" m-1 " lg={3}>
              <Button color="success" onClick={()=>{handleShowAnswer(i)}}>
                Check Answer
              </Button>
            </Col>
            <Col className=" m-1 " lg={4}>{(showAnswer == i) && <span>Ans: {item.Ans}</span>}</Col>
            <Col className=" m-1 " lg={4}>Topic: {item.TOPIC}</Col>
          </Row>
        </Card.Body>
      </Card>
    ))}
        <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button key={pageNum} onClick={() => goToPage(pageNum)}>
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  )
}
