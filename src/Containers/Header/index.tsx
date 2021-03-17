import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import OverfocusLogo from "@/assets/images";

export const Header = () => {
  const navRef = useRef<HTMLHeadingElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const onScroll = (e: React.UIEvent<HTMLHeadingElement>) => {
    console.log(e)
    e.preventDefault();
    console.log("ENTRE");
    return window.scrollY >= 250 ? setIsScrolled(true) : setIsScrolled(false);
  };
  console.log("isScrolled", isScrolled);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <Container>
      <Head onScroll={onScroll} isScrolled={isScrolled}>
        <HeaderContent>
          <LogoContainer>Loog</LogoContainer>
          <Nav>
            <NavList>
              <li>
                <a>PROYECTO</a>
              </li>
              <li>
                <a>NOSOTROS</a>
              </li>
              <li>
                <a>RESIDENTES</a>
              </li>
              <li>
                <a>NOTICIAS</a>
              </li>
            </NavList>
          </Nav>
        </HeaderContent>
      </Head>
    </Container>
  );
};

const Head = styled.header<{ isScrolled: boolean }>`
  color: #000;
  background: transparent;
  position: sticky;
  z-index: 2;
  top: 0;
  transition: 0.3s ease-in-out;
  height: 80px;
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      background-color: #000;
      transition: 0.3s ease-in-out;
      color: #fff;
    `}
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
  height: 100%;
  padding: 0 30px;
`;

const LogoContainer = styled.div`
  font-size: 2em;
`;

const Container = styled.div`
  position: relative;
  background: transparent;
  height: 300vh;
`;

const Nav = styled.nav`
  /* width: 40%; */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 2.5em;
  & > li a {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    &:hover {
      opacity: 0.5;
      transition: 0.3s;
    }
  }
`;
