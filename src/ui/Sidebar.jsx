import styled from "styled-components";
import Logo from "./Logo.jsx";
import MainNav from "./MainNav.jsx";

const StyledSidebar = styled.aside`
  /* background-color: rebeccapurple; */
  padding: 3.2rem 2.4rem;
  grid-row: 1 /-1;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;
