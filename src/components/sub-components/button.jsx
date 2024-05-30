import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButton type="button" $Prop={props.title}>
      {props.title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: ${(props) =>
    props.$Prop === "More Services" ? "#f39c12" : "inherit"};
  border: ${(props) =>
    props.$Prop === "More Services"
      ? " 1px solid #f39c12"
      : "2px solid #D35400"};
  color: ${(props) => (props.$Prop === "More Services" ? " #fff" : "#D35400")};
  font-weight: ${(props) => (props.$Prop === "More Services" ? "600" : "500")};
  font-size: 16px;
  width: 196px;
  height: 52px;
  border-radius: 8px;
  padding: 0 1rem;
`;
