import { Card } from "react-bootstrap";
import styled from "styled-components";

export const CustomCard = styled(Card)`
  padding: 20px 24px 20px 24.5px;
  border-radius: 8px !important;
  box-shadow: 0 2.5px 8px 0 rgba(0, 0, 0, 0.05);
  border: none !important;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  box-shadow: 0 1.5px 7.5px 0 rgba(0, 0, 0, 0.1);
  background-color: #00c3e1;
  border: 1px solid #00c3e1;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;
