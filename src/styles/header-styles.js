import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;

  background: linear-gradient(
    180deg,
    rgba(241, 241, 241, 0.2) 100%,
    rgba(241, 241, 241, 0.6) 100%
  );
  border: 1px solid;

  border-image-source: linear-gradient(
    203.36deg,
    rgba(241, 241, 241, 0.2) 83.46%,
    rgba(241, 241, 241, 0.6) 83.46%
  );
`;
export const LogoDiv = styled.div``;

export const Links = styled.ul`
  list-style: none;
  overflow: hidden;
  transition: all ease 0.3s;

  li {
    font-size: 1rem;
  }
`;
