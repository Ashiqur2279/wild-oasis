import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../data/img/logo-light.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  cursor: pointer;
`;

function Logo() {
  return (
    <StyledLogo>
      <NavLink to={`/dashboard`}>
        <Img src={logo} alt="Logo" />
      </NavLink>
    </StyledLogo>
  );
}

export default Logo;
