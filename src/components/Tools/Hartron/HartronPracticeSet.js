import React, { useState } from "react";
import HartronQuestions from "../../../data/Hartron/HartronQuestions";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FormGroup, Input } from "reactstrap";

export const HartronPracticeSet = () => {
  const [itemsPerPage, setItemPerPage] = useState(5); // define number of items to display per page
  const [showAnswer, setShowAnswer] = useState(-1);
  const [submittedAnswer, setSubmittedAnswer] = useState();
  const [questions, setQuestions] = useState(HartronQuestions);
  const handleShowAnswer = (index, submittedValue = null) => {
    if (submittedValue !== null) {
      console.log("submittedValue", submittedValue);
      setSubmittedAnswer(submittedValue);
    }
    setShowAnswer(index);
  };

  const [currentPage, setCurrentPage] = useState(1); // define current page number

  // To find all Categories
  const allCategories = HartronQuestions?.map((item, index) => {
    return item.TOPIC;
  });
  const uniqueCategories = [...new Set(allCategories)];
  // End find all Categories

  // Categories Questions
  function getQuesCtgWise(category) {
    if (category !== "All") {
      const ques = HartronQuestions.filter((item) => {
        return item.TOPIC == category;
      });
      ques.length > 0 && setQuestions(ques);
      setCurrentPage(1);
      setShowAnswer(-1);
    } else {
      setQuestions(HartronQuestions);
      setShowAnswer(-1);
    }
  }

  const handleQuesPerPage = (value) => {
    setCurrentPage(1);
    setItemPerPage(value);
    setShowAnswer(-1);
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const currentItems = questions?.slice(startIdx, endIdx);
  let totalPages = Math.ceil(questions?.length / itemsPerPage);

  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
    setShowAnswer(-1);
    setSubmittedAnswer(null);
  }
  return (
    <div className="header-space row m-3">
      <div className="col-sm-12 col-md-8">
        <div className="d-flex justify-content-around">
          <Card.Title>
            Let's Prepare for Hartron DEO (Data Entry Operator)
          </Card.Title>
          <div>
            <FormGroup>
              <strong>Ques./page </strong>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                onChange={(e) => {
                  handleQuesPerPage(e.target.value);
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </Input>
            </FormGroup>
          </div>
        </div>

        {currentItems?.map(
          (item, i) =>
            item.Questions && (
              <Card className="my-5 " key={i}>
                <Card.Body className="overflow-hidden ">
                  <Row className="align-items-center justify-content-between">
                    <Col className=" m-1 ">
                      <FormGroup tag="fieldset">
                        <Card.Title>
                          <strong className="text-success">Ques.</strong>{" "}
                          <strong>{item.Questions}</strong>
                        </Card.Title>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="radio1"
                            checked={showAnswer == i && submittedAnswer == "A"}
                            onChange={(e) => {
                              handleShowAnswer(i, "A");
                            }}
                          />
                          <span
                            className={
                              showAnswer == i && item.Ans == "A"
                                ? "bg-success text-white p-1"
                                : "text-dark p-1"
                            }
                          >
                            {" "}
                            {"A. " + item.A}{" "}
                          </span>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="radio1"
                            checked={showAnswer == i && submittedAnswer == "B"}
                            onChange={(e) => {
                              handleShowAnswer(i, "B");
                            }}
                          />
                          <span
                            className={
                              showAnswer == i && item.Ans == "B"
                                ? "bg-success text-white p-1"
                                : "text-dark p-1"
                            }
                          >
                            {" "}
                            {"B. " + item.B}{" "}
                          </span>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="radio1"
                            checked={showAnswer == i && submittedAnswer == "C"}
                            onChange={(e) => {
                              handleShowAnswer(i, "C");
                            }}
                          />
                          <span
                            className={
                              showAnswer == i && item.Ans == "C"
                                ? "bg-success text-white p-1"
                                : "text-dark p-1"
                            }
                          >
                            {" "}
                            {"C. " + item.C}{" "}
                          </span>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="radio1"
                            checked={showAnswer == i && submittedAnswer == "D"}
                            onChange={(e) => {
                              handleShowAnswer(i, "D");
                            }}
                          />
                          <span
                            className={
                              showAnswer == i && item.Ans == "D"
                                ? "bg-success text-white p-1"
                                : "text-dark p-1"
                            }
                          >
                            {" "}
                            {"D. " + item.D}{" "}
                          </span>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="align-items-center justify-content-between">
                    <Col className=" m-1 " lg={3}>
                      <Button
                        color="success"
                        onClick={() => {
                          handleShowAnswer(i);
                        }}
                      >
                        Check Answer
                      </Button>
                    </Col>
                    <Col className=" m-1 " lg={4}>
                      {showAnswer == i && <span>Ans: {item.Ans}</span>}
                    </Col>
                    <Col className=" m-1 " lg={4}>
                      Topic: {item.TOPIC}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )
        )}
        <div className="d-flex justify-content-between">
          <Button
            variant="success"
            onClick={() => {
              currentPage > 1 && goToPage(currentPage - 1);
            }}
          >
            Previous
          </Button>
          <Button>{currentPage}</Button>
          <Button
            variant="success"
            onClick={() => {
              currentPage < totalPages && goToPage(currentPage + 1);
            }}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div>
          <strong className="row">All Categories</strong>
          {uniqueCategories.map((item, i) => {
            return (
              <Button
                className="p-2 m-2"
                key={i}
                onClick={() => {
                  getQuesCtgWise(item);
                }}
              >
                {" "}
                {item}
              </Button>
            );
          })}
        </div>
        <div>
          <strong className="row pt-3">All Pages</strong>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Button
                variant={currentPage == pageNum ? "danger" : "warning"}
                className="m-2 p-2"
                key={pageNum}
                onClick={() => goToPage(pageNum)}
              >
                {pageNum}
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
