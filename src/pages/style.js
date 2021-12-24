import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  display: flex;
  padding: 1.2em 2em;
  text-decoration: none;
  text-align: center;
  font-family: "Proxima", sans-serif;
  cursor: pointer;
  border-radius: 7px;
  border: none;
  justify-content: space-between;
  color: white;
  background: rebeccapurple;
  flex: 1 0 15%;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MainTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-family: "Proxima", sans-serif;
  font-size: 2em;
  color: rebeccapurple;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: white;
  border-radius: 7px;
  min-width: 500px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

export const CloseButton = styled.p`
  text-align: end;
  padding-right: 15px;
  color: rebeccapurple;
  cursor: pointer;
`;

export const Title = styled.div`
  text-align: center;
  font-family: "Proxima", sans-serif;
  text-transform: capitalize;
  font-weight: bold;
  padding-bottom: 8px;
`;

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
