import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Paper = styled(Container)`
  background-color: #ffffff;
`;

export const Title = styled.h3`
  font-family: "Montserrat";
  font-size: 11px;
  margin-bottom: 0;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-family: "Montserrat";
  font-size: 10px;
  color: #bfbfbf;
  margin-top: 0;
  font-weight: 500;
`;

export const Comment = styled.textarea`
  height: 98.3px;
  padding: 10px;
  border-radius: 2.5px;
  background-color: #f6f6f6;
  border: 1px solid #f6f6f6;
  margin-bottom: 8px;
  resize: none;
  font-family: Montserrat;
  font-size: 9px;
  font-weight: 500;
  color: #bfbfbf;
`;
