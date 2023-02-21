import styled from "styled-components";

export const DivMio = styled.div`
  height: 75vh;
  min-width: 30vh;
  max-width: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(prop) => (prop.icons ? "space-between" : "flex-end")};
`;
