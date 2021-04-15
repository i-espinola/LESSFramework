import Styled from 'styled-components';

const SkeletonStyle = Styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
  display: flex;
  line-height: inherit;
  min-height: 1.4rem;
  margin: 0;

  ~ div {
    margin: 15px 0;
  }


  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    animation-duration: .8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: loader;
    background: #ececec;
    background: linear-gradient(to right, #ececec 2%, #f5f5f5 18%, #ececec 33%);
    background-size: 900px 100px;
  }

  @keyframes loader {
    0%{ background-position: -468px 0; }
    100%{ background-position: 468px 0; }
  }
`;

export default SkeletonStyle;
export { SkeletonStyle };
