import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
// @ts-ignore
import logo from "url:../../assets/images/logo.png?width=60&height=60&quality=100";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // const onScroll = () => {
  //   return window.scrollY >= 250 ? setIsScrolled(true) : setIsScrolled(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [onScroll]);

  return (
    <Container>
      <Head isScrolled={isScrolled}>
        <HeaderContent>
          <LogoContainer isScrolled={isScrolled} className="logo-container">
            <img src={logo} alt="logo" />
          </LogoContainer>
          <Nav className="nav-container">
            <NavList>
              <Li>
                PROYECTO
                <SublinksContainer>
                  <ul>
                    <li>PODCASTS</li>
                    <li>COLABORADORES</li>
                  </ul>
                </SublinksContainer>
              </Li>
              <Li>
                LABEL
                <SublinksContainer>
                  <ul>
                    <li>REVORECORDS</li>
                  </ul>
                </SublinksContainer>
              </Li>
              <Li className="residentes">RESIDENTES</Li>
              <Li>
                NOSOTROS
                <SublinksContainer>
                  <ul>
                    <li>QUIENES SOMOS</li>
                    <li>FACEBOOK</li>
                    <li>INSTAGRAM</li>
                    <li>HABLANOS</li>
                  </ul>
                </SublinksContainer>
              </Li>
            </NavList>
            {/* <NavList>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </NavList> */}
          </Nav>
        </HeaderContent>
      </Head>
    </Container>
  );
};

const Head = styled.header<{ isScrolled: boolean }>`
  /* color: #000; */
  background: transparent;
  position: sticky;
  z-index: 2;
  top: 0;
  transition: 0.3s ease-in-out;
  height: 80px;
  background-color: #000;
  color: #fff;
  /* ${({ isScrolled }) =>
    isScrolled &&
    css`
      transition: 0.3s ease-in-out;
    `} */
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  padding: 0 30px;
  & > div.logo-container {
    width: 10%;
  }
  & > nav.nav-container {
    width: 90%;
  }
`;

const LogoContainer = styled.div<{ isScrolled: boolean }>`
  font-size: 2em;
  & > img {
    margin-top: 10px;
    /* background-color: ${({ isScrolled }) =>
      isScrolled ? "none" : "#000"}; */
    transition: 0.3s ease-in-out;
  }
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
`;

const Li = styled.li`
  position: relative;
  &:hover {
    border-bottom: 1px solid transparent;
    transition: 0.3s ease-in;
  }
  &.residentes:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3s;
  }
`;

export const SublinksContainer = styled.div`
    display: none;
    position: absolute;
    & > ul {
      list-style: none;
      font-size: .7em;
      & > li:hover {
        opacity: 0.5;
        transition: 0.3s;
        cursor: pointer;
      }
    }
    ${Li}:hover & {
      display: block;
    }
    /* list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 2.5em; */
  }
`;
