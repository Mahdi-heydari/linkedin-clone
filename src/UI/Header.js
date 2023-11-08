import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src="/images/home-logo.svg" alt="home-logo" />
          </a>
        </Logo>

        <Search>
          <div>
            <input type="text" placeholder="Search"></input>
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search-icon" />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListWarp>

            <NavList className="actiive">
              <a>
                <img src="/images/nav-home.svg" alt="nav-home"></img>
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="nav-network"></img>
                <span>Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="nav-jobs"></img>
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="nav-messaging"></img>
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img
                  src="/images/nav-notifications.svg"
                  alt="nav-notifications"
                ></img>
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a href="#">
                <img src="/images/user.svg" alt="user-image" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>
              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a href="#">
                <img src="/images/nav-work.svg" alt="work-icon" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>

          </NavListWarp>
        </Nav>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-left: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 280px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 35px;
      vertical-align: text-top;
      border-color: #dce6f1;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;

const NavListWarp = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;

  .actiive {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      transition: transform 0.24s ease-in-out;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 500;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    cursor: pointer;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 76px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }

`;


const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
