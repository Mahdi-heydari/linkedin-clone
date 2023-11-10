import styled from "styled-components";

export default function Main() {
  return <Container>
    <ShareBox>
        <div>
            <img src="/images/user.svg" alt="userIcon"/>
            <button>Start a Post</button>
        </div>
        <div>
            <button>
                <img src="/images/photo-icon.jpg" alt="photoIcon"/>
                <span>Photo</span>
            </button>

            <button>
                <img src="/images/video-icon.jpg" alt="videoIcon"/>
                <span>Video</span>
            </button>

            <button>
                <img src="/images/photo-icon2.png" alt="eventIcon"/>
                <span>Events</span>
            </button>

            <button>
                <img src="/images/write-icon.jpg" alt=""/>
                <span>Write artical</span>
            </button>

        </div>
    </ShareBox>
  </Container>;
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

    div{
        button{
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

        button:hover{
            cursor: pointer;
        }

        &:first-child{
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;
            
            img{
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }

            button{
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background: white;
                text-align: left;
            }
        }

        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button{
                img{
                    margin: 0 4px 0 -2px;
                }
                span{
                    color: #70b5f9;
                }
            }
        }
    }
`;
