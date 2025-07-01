import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="bookmarkBtn">
        <span className="IconContainer"> 
          <svg fill="white" viewBox="0 0 512 512" height="21px"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" /></svg>
        </span>
        <p className="text">ส่งความคิดเห็นของคุณ</p>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .bookmarkBtn {
    width: 260px;
    height: 60px;
    border-radius: 40px;
    border: none;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: .3s;
    overflow: hidden;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.062);
  }

  .IconContainer {
    width: 58px;
    height: 44px;
    background-color: rgb(43, 135, 255);
    border-radius: 50%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2;
    transition-duration: .3s;
  }

  .icon {
    border-radius: 1px;
  }

  .text {
    height: 100%;
    width: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(26, 26, 26);
    z-index: 1;
    transition-duration: .3s;
    font-size: 17px;
    font-weight: 600;
  }

  .bookmarkBtn:hover .IconContainer {
    width: 237px;
    border-radius: 250px;
    margin-left: 0px;
    transition-duration: .3s;
  }

  .bookmarkBtn:hover .text {
    transform: translate(10px);
    width: 0;
    font-size: 0;
    transition-duration: .3s;
  }

  .bookmarkBtn:active {
    transform: scale(0.95);
    transition-duration: .3s;
  }`;

export default Button;
