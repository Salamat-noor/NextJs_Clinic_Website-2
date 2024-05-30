import styled from "styled-components";

export const Hero = styled.div`
  overflow: hidden;
  z-index: 1;

  img{
    filter: saturate(1.5);
  }
`;
export const textContent = styled.div`
  left: 80px;
  bottom: 15%;

  @media (max-width: 600px) {
    left: 10%;
    bottom: 10%;
  }
`;
