import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
// @ts-ignore
import logo from "url:../../assets/images/logo.png?width=60&height=60&quality=100";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width:960px)");
  const Anchor: FunctionComponent<Partial<HTMLAnchorElement>> = ({
    href,
    title,
  }) => (
    <a
      style={{ textDecoration: "none", color: "inherit" }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  );

  // const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // const onScroll = () => {
  //   return window.scrollY >= 250 ? setIsScrolled(true) : setIsScrolled(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [onScroll]);

  const Desktop = () => (
    <>
      <img src={logo} alt="logo" />
      <NavList>
        <Li>
          PROYECTO
          <SublinksContainer>
            <ul>
              <li>PODCASTS</li>
              <li>STREAMINGS</li>
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
        {/* <NavList>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </NavList> */}
        {/* </HeaderContent> */}
        {/* </Head> */}
      </NavList>
    </>
  );

  const Mobile = () => {
    const [open, setOpen] = useState<boolean>(false);

    const MenuContainer = styled.div`
      background: gray;
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
    `;

    const Ul = styled.ul`
      display: block;
      width: 100%;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      text-align: center;
      list-style: none;

      & > li.item {
        width: 100%;
        text-align: left;
        padding: 1rem;
        padding-bottom: 0;
        margin-bottom: 0.5rem;

        & > div.item-container {
          & > .item-container__title {
            font-weight: 300;
            font-size: 1.1rem;
            padding-left: 1rem;
            display: block;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          & > .sub-menu {
            list-style: none;
            padding: 1rem;
            & > li {
              line-height: 1.3;
              font-weight: 600;
              font-size: 1.5rem;
            }
          }
        }
      }
    `;

    return (
      <>
        <MenuIcon
          onClick={() => setOpen(true)}
          style={{ margin: "0px auto 0 15px" }}
          fontSize="large"
        />
        <img
          src={logo}
          alt="logo"
          style={{ margin: "0 auto", paddingRight: "35px" }}
        />
        {open && (
          <MenuContainer>
            <Nav className="nav-container">
              <CloseIcon
                onClick={() => setOpen(false)}
                fontSize="large"
                style={{ margin: "0px auto 0 15px" }}
              />
              <img
                src={logo}
                alt="logo"
                style={{ margin: "0 auto", paddingRight: "35px" }}
              />
            </Nav>
            <Ul>
              <li className="item">
                <div className="item-container">
                  <a className="item-container__title">PROYECTO</a>
                  <ul className="sub-menu">
                    <li>
                      <Anchor
                        href="https://soundcloud.com/over-focus"
                        title="PODCASTS"
                      />
                    </li>
                    <li>
                      <Anchor
                        href="https://www.youtube.com/watch?v=_wnzX1c2p24&list=PL6qpxve7TpSQDr8uJCaNNnRLURhaNslrg&ab_channel=OVERFOCUS"
                        title="STREAMINGS"
                      />
                    </li>
                    <li>
                      <a>COLABORADORES</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="item">
                <div className="item-container">
                  <a className="item-container__title">LABEL</a>
                  <ul className="sub-menu">
                    <li>
                      <Anchor
                        title="REVORECORDS"
                        href="https://www.instagram.com/revorecords.ar"
                      />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="item_unique" />
              <li className="item">
                <div className="item-container">
                  <a className="item-container__title">QUIENES SOMOS</a>
                  <ul className="sub-menu">
                    <li>
                      <a>RESIDENTES</a>
                    </li>
                    <li>
                      <Anchor
                        title="FACEBOOK"
                        href="https://www.facebook.com/OverFocus-105918287770241/"
                      />
                    </li>
                    <li>
                      <Anchor
                        title="INSTAGRAM"
                        href="https://www.instagram.com/overfocus_arg/"
                      />
                    </li>
                    <li>
                      <Anchor
                        title="YOUTUBE"
                        href="https://www.youtube.com/channel/UCV8nYAC9MuM3NFdYHddAIIA"
                      />
                    </li>
                    <li>
                      <a>HABLANOS</a>
                    </li>
                  </ul>
                </div>
              </li>

              {/*
               NOSOTROS
          <SublinksContainer>
            <ul>
              <li>QUIENES SOMOS</li>
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>HABLANOS</li>
            </ul> */}
            </Ul>
          </MenuContainer>
        )}
      </>
    );
  };

  return (
    <Nav className="nav-container">
      {/* <Head> */}
      {/* <HeaderContent> */}
      {/* <LogoContainer className="logo-container"> */}
      {/* <span>{`(min-width:600px) matches: ${isMobile}`}</span>; */}
      {/* </LogoContainer> */}
      {!isMobile ? <Desktop /> : <Mobile />}
    </Nav>
  );
};

// const Head = styled.header<{ isScrolled?: boolean }>`
//   /* color: #000; */
//   background: transparent;
//   position: sticky;
//   z-index: 2;
//   top: 0;
//   transition: 0.3s ease-in-out;
//   height: 80px;
//   background-color: #000;
//   color: #fff;
//   /* ${({ isScrolled }) =>
//     isScrolled &&
//     css`
//       transition: 0.3s ease-in-out;
//     `} */
// `;

// const HeaderContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 0 auto;
//   height: 100%;
//   padding: 0 30px;
//   & > div.logo-container {
//     width: 10%;
//   }
//   & > nav.nav-container {
//     width: 90%;
//   }
// `;

// const LogoContainer = styled.div<{ isScrolled?: boolean }>`
//   font-size: 2em;
//   & > img {
//     margin-top: 10px;
//     /* background-color: ${({ isScrolled }) =>
//       isScrolled ? "none" : "#000"}; */
//     transition: 0.3s ease-in-out;
//   }
// `;

// const Container = styled.div`
//   position: relative;
//   background: transparent;
//   height: 300vh;
//   display: inline-block;
// `;

const Nav = styled.nav`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 10% 90%;
  margin: 15px;
`;

// const NavListMobile = styled.

const NavList = styled.ul`
  list-style: none;
  justify-content: flex-end;
  width: 100%;
  font-size: 2.5em;
  display: flex;
`;

const Li = styled.li`
  position: relative;
  margin-left: 5%;
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
      margin-top: 10px;
      list-style: none;
      font-size: .7em;
      & > li:hover {
        opacity: 0.5;
        transition: 0.3s;
        cursor: pointer;
      }
      & > li {
        line-height: 1.3;
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
