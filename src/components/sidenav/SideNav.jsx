import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { Database } from "../../db/Context";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SideNav() {
  const { activeTab, updateActiveTab } = useContext(Database);
  const homeRef = useRef(null);
  const settingRef = useRef(null);
  const profileRef = useRef(null);
  useEffect(() => {
    switch (activeTab) {
      case "home":
        homeRef.current.classList.add("active");
        settingRef.current.classList.remove("active");
        profileRef.current.classList.remove("active");
        break;
      case "settings":
        homeRef.current.classList.remove("active");
        settingRef.current.classList.add("active");
        profileRef.current.classList.remove("active");
        break;
      case "profile":
        homeRef.current.classList.remove("active");
        settingRef.current.classList.remove("active");
        profileRef.current.classList.add("active");
        break;
      default:
        break;
    }
  }, [activeTab]);

  return (
    <SideNavContainer className="side_nav">
      <Navbar>
        <ul>
          <ListItem onClick={() => updateActiveTab("home")} ref={homeRef}>
            <Link to="/">
              {activeTab === "home" ? (
                <i className="fi fi-sr-home"></i>
              ) : (
                <i className="fi fi-rr-home"></i>
              )}
              <span>
                <p>Home</p>
              </span>
            </Link>
          </ListItem>
          <ListItem
            onClick={() => updateActiveTab("settings")}
            ref={settingRef}
          >
            <Link to={"setting"}>
              {activeTab === "settings" ? (
                <i className="fi fi-sr-settings"></i>
              ) : (
                <i className="fi fi-rr-settings"></i>
              )}
              <span>
                <p>Settings</p>
              </span>
            </Link>
          </ListItem>
          <ListItem onClick={() => updateActiveTab("profile")} ref={profileRef}>
            <Link to={"profile"}>
              {activeTab === "profile" ? (
                <i className="fi fi-sr-user"></i>
              ) : (
                <i className="fi fi-rr-user"></i>
              )}
              <span>
                <p>Profile</p>
              </span>
            </Link>
          </ListItem>
        </ul>
        <Button>
          <i
            className="fi fi-rr-sign-out-alt"
            style={{ marginRight: "1rem" }}
          ></i>
          <span>
            <p>logout</p>
          </span>
        </Button>
      </Navbar>
    </SideNavContainer>
  );
}

const SideNavContainer = styled.div`
  background-color: var(--secondaryWhite);
  padding: 1.2rem;
  // border-radius: 1rem;
  // margin: 1rem;
  // box-shadow: 0px 0px 10px rgba(64, 174, 224, 0.1);
  position: fixed;
  top: 60px;
  width: 17%;
  height: calc(100vh - 60px);
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

const Button = styled.button`
  margin-top: auto;
  border: none;
  outline: none;
  background-color: royalblue;
  color: #fff;
  padding: 0.6rem 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: "Arial Narrow";
  font-weight: regular;
  transition: background-color 0.5s ease, width 0.2s ease;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50px;

  p {
    transform: translateX(-50px);
    transform-origin: left;
    overflow: hidden;
    transition: 0.4s ease;
    display: inline-block;
  }

  span {
    overflow: hidden;
  }

  &:hover {
    background-color: #41aee1;
    width: 100%;

    p {
      color: #fff;
      transform: translateX(0);
    }
  }
`;

const ListItem = styled.li`
  background-color: var(--primaryBlue);
  border-radius: 50%;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.5s ease, width 0.2s ease;
  width: 40px;
  height: 40px;

  a {
    text-decoration: none;
    color: white;
  }

  a p {
    transform: translateX(-50px);
    transform-origin: left;
    overflow: hidden;
    transition: 0.4s ease;
    display: inline-block;
    color: lightblue;
  }

  a {
    margin: 0px 0px 0px -3px;
  }

  span {
    margin-left: 10px;
  }

  &:hover {
    width: 80%;
    border-radius: 0.8rem;

    a {
      color: #fff;

      p {
        color: #fff;
        transform: translateX(0);
      }
    }
  }
`;

export default SideNav;
