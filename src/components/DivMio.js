import styled from "styled-components";

export const DivMio = styled.div`
  min-height: 70vh;
  min-width: 35vh;
  max-width: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => {
    if (props.icons && props.icons2) {
      return "space-around";
    } else if (props.icons) {
      return "space-between";
    } else if (props.icons2) {
      return "space-around";
    } else {
      return "flex-end";
    }
  }};
`;
