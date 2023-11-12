import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="userIcon" />
          <button>Start a Post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.jpg" alt="photoIcon" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.jpg" alt="videoIcon" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/photo-icon2.png" alt="eventIcon" />
            <span>Events</span>
          </button>

          <button>
            <img src="/images/write-icon.jpg" alt="" />
            <span>Write artical</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="user-icon" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis-icon.svg" alt="ellipsis-icon" />
            </button>
          </SharedActor>

          <Description>Description</Description>
          <SharedImage>
            <a>
              <img src="/images/shered.jpg" alt="" />
            </a>
          </SharedImage>

          <SocialCounts>
            <li>
              <button>
                <img src="/images/hand-icon.svg" alt="like-icon" />
                <img src="/images/like-icon.svg" alt="Celebrate-icon" />
                <span>75</span>
              </button>
            </li>

            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>

          <SocialActions>
            <button>
              <img src="/images/like-icon.svg" alt="" />
              <span>Like</span>
            </button>

            <button>
              <img src="/images/comments-icon.svg" alt="" />
              <span>Comments</span>
            </button>

            <button>
              <img src="/images/share-icon.svg" alt="" />
              <span>Share</span>
            </button>

            <button>
              <img src="/images/send-icon.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #ffff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    button:hover {
      cursor: pointer;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding-right: 40px;
  padding: 12px 16px 0;
  margin-bottom: 8px;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 47px;
      height: 47px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }

  button:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  font-size: 15px;
  text-align: left;
  color: rgba(0, 0, 0, 0.9);
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
      border-radius: 13px;
      border: 1px solid rgba(0, 0, 0, 0.9);

      img {
        margin-right: 3px;
      }
    }

    button:hover {
      cursor: pointer;
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 10px;
    color: #0a66c2;
    margin-right: 7px;

    @media (max-width: 768px) {
      span {
        margin-left: 8px;
      }
    }

    span {
      margin-left: 8px;
      font-weight: bold;
    }

    img {
      width: 1.1rem;
    }
  }

  button:hover {
    cursor: pointer;
  }
`;
