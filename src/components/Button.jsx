import React from "react";
import styled from "styled-components";

function Button({ name, func, extraStyle, disabled, children }) {
  return (
    <ButtonCont onClick={func} style={extraStyle} disabled={disabled}>
      {children}
      {name}
    </ButtonCont>
  );
}

const ButtonCont = styled.button`
  margin-right: 1rem;
  padding: 0.5rem 0.9rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  background-color: var(--secondaryWhite);
  color: var(--primaryBlue);
  cursor: pointer;
  transition: 0.4s ease;
  font-weight: 600;

  &:hover {
    background-color: var(--primaryBlue) !important;
    color: var(--primaryWhite);
  }
`;

export default Button;
