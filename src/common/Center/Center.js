import React, { Fragment, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
const sleep = require("sleepjs");

export default function Center() {
  const [showSpinner, setShowSpinner] = useState("none");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("Form waiting to be submitted");
  const handleSubmission = async () => {
    setIsSubmitting(!isSubmitting);
    setSubmitMessage("Form submitted");
    showSpinner === "none" ? setShowSpinner("inline-block") : setShowSpinner("none");
    await sleep(2000);
    setIsSubmitting(!isSubmitting);
    setShowSpinner("none");
    setSubmitMessage("New form waiting to be submitted");
    // console.log(isSubmitting);
    // setTimeout(() => {
    //   setIsSubmitting(!isSubmitting);
    //
    //   setSubmitMessage("New form waiting to be submitted");
    // }, 2000);
  };

  return (
    <Fragment>
      <h2>Welcome!</h2>
      <p>{submitMessage}</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmission}>
          <Spinner size="sm" style={{ marginRight: "5px", display: `${showSpinner}` }} animation="border" />
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}
