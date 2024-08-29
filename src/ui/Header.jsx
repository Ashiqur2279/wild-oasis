import styled from "styled-components";

const StyledHeader = styled.header`
  /* background-color: var(--color-brand-500); */
  background-color: var(--color-grey-0);
  padding: 2rem 1.5rem;
  border-right: 1px solid var(--color-grey-50);
`;

const Header = () => {
  return <StyledHeader>this is header</StyledHeader>;
};

export default Header;
