import styled from "styled-components";

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 100px 0;

  #servicesHeading {
    color: #565656;
  }

  #Grid-View {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: #fdebd0;
  max-width: 400px;
  height: 400px;

  img {
    width: 80px;
    height: 80px;
  }

  #Card-Heading {
    font-weight: 500;
    color: #000000;
  }
  #Card-Text {
    font-weight: 400;
    font-size: 16px;
    color: #666666;
  }
`;
