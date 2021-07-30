import styled from "styled-components";

export const TodoWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  grid-column-gap: 30px;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-self: start;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: center;
`;

export const Item = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-flow: row;
  background: #fcfcfc;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Text = styled.p`
  flex-grow: 1;
  text-align: center;
`;

interface ArrowProps {
  left?: boolean;
}

export const Arrow = styled.button<ArrowProps>`
  padding: 10px;
  color: #ffffff;
  background: ${(props) => (props.left ? "red" : "green")};
  border: 0;
  border-radius: 10px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background: #dddddd;
  }
`;
