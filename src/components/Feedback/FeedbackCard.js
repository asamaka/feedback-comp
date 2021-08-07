import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import { CustomCard, Button } from "./FeedbackCardStyles";

/**
 * Props:
 * - feedback: an object that contains the entrie trip feedback for (driver, car and overall)
 * - setFeedback: a callback to update the parent with the new feedback
 */

export default function FeedbackCard({ feedback, setFeedback }) {
  const [driverFeedback, setDriverFeedback] = useState(feedback.driver);
  const [carFeedback, setCarFeedback] = useState(feedback.car);
  const [overallFeedback, setOverallFeedback] = useState(feedback.overall);
  return (
    <CustomCard>
      <FeedbackItem
        title={"Driver"}
        subtitle={driverFeedback.name}
        feedback={driverFeedback}
        setFeedback={setDriverFeedback}
      />
      <FeedbackItem
        title={"Car"}
        subtitle={carFeedback.name}
        feedback={carFeedback}
        setFeedback={setCarFeedback}
      />
      <FeedbackItem
        title={"Overall"}
        feedback={overallFeedback}
        setFeedback={setOverallFeedback}
      />
      <div className="ms-auto">
        <Button
          onClick={() => {
            setFeedback({
              driver: driverFeedback,
              car: carFeedback,
              overall: overallFeedback
            });
          }}
        >
          Submit
        </Button>
      </div>
    </CustomCard>
  );
}
