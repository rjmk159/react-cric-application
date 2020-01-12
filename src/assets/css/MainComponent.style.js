import styled from 'styled-components';
import bgImage from '../images/wp3099440.jpg'
const MainComponent = styled.div`
  .hero-banner{
    padding: 140px 0;
    background-image:url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position:relative;
    &::before{
      position: absolute;
      background: rgba(0, 0, 0, 0.5);
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 0;
    }
    h2{
      position:relative;
      font-size: 58px;
      font-weight: 700;
      color: #fff;
      text-align: left;
      line-height: 52px;
      letter-spacing: -2px;
      max-width: 540px;
    }
  }
  ul{
    max-height: 300px;
    overflow: auto;
  }
  .list-group-item{
    font-size: 12px;
    cursor:pointer;
  }
  .vs {
    padding: 10px;
    font-weight: 600;
  }
  button.btn.btn-secondary {
    margin-bottom: 10px;
    margin-right: 10px;
  } 
`;
export default MainComponent;