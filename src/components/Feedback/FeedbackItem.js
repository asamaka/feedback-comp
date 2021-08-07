import React from "react";
import { Row, Col } from "react-bootstrap";
import { Paper, Title, Subtitle, Comment } from "./FeedbackItemStyles";
import { Rating } from "react-simple-star-rating";

/**
 * Props:
 *  - title: the header of the feedback item
 *  - subtitle: optional description
 *  - feedback: the initial values for the feedback
 *  - setFeedback: a callback to update the feedback values
 */

export default function FeedbackItem({
  title,
  subtitle,
  feedback,
  setFeedback
}) {
  return (
    <Paper>
      <Row>
        <Col xs={5} className="ps-0">
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Col>
        <Col xs={7} className="text-end pe-0">
          <Rating
            onClick={(r) => setFeedback({ ...feedback, rating: r })}
            ratingValue={feedback.rating || 0}
            fillColor="#ffc713"
            emptyColor="#fff"
          >
            <svg
              fill="currentColor"
              stroke="#cdcdcd"
              stroke-width="1px"
              xmlns="http://www.w3.org/2000/svg"
              width="37.322"
              height="35.795"
              viewBox="0 0 37.322 35.795"
            >
              <path
                d="M17.185 1.173L12.88 9.9l-9.632 1.4a2.111 2.111 0 0 0-1.167 3.6l6.968 6.8L7.4 31.289a2.108 2.108 0 0 0 3.059 2.222l8.617-4.529 8.617 4.529a2.11 2.11 0 0 0 3.059-2.222L29.1 21.7l6.968-6.79a2.111 2.111 0 0 0-1.167-3.6L25.274 9.9l-4.305-8.727a2.111 2.111 0 0 0-3.784 0z"
                transform="translate(-0.416 1.001)"
              />
            </svg>
          </Rating>
        </Col>
      </Row>
      <Row>
        <Comment
          onChange={(c) =>
            setFeedback({ ...feedback, comment: c.target.value })
          }
          defaultValue={feedback.comment}
        />
      </Row>
    </Paper>
  );
}
