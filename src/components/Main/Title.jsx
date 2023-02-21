import React from "react";
import styled from "styled-components";

export const TitleI = styled.div`
  color: #fff;
  font-size: 1.5em;
  margin: 1rem 0;
  position: relative;
  letter-spacing: 2px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -15px;
    height: 7px;
    width: 40%;
    left: 0;
    background-color: ${(props) => (props.green ? "#285437" : "#DBAB1E")};
  }
`;
const Title = () => {
  return <TitleI>Title</TitleI>;
};

export { Title };
