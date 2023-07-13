import Link from "next/link";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Center from "@/components/Center";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;

`;
export default function Header() {
  return(
    <StyledHeader>
      <Helmet>
        <link to={'https://fonts.googleapis.com/css2?family=Roboto&display=swap'}></link>
      </Helmet>
      <Center>
      <Wrapper>
        <Logo href={'/'} >ElectronicTickets</Logo>
        <StyledNav>
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/eventos'}>Eventos</NavLink>
          {/* <NavLink href={'/categories'}>Categories</NavLink> */}
          <NavLink href={'/cuenta'}>Cuenta</NavLink>
          <NavLink href={'/carrito'}>Carrito (0)</NavLink>
        </StyledNav>
      </Wrapper>
      </Center>
    </StyledHeader>
  )
}