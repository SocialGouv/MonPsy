import styled from "styled-components";

export const ResultWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Desktop = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SubSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const Psychologists = styled.div`
  overflow-y: scroll;
  height: 100vh;
  max-height: 100vh;
`;
