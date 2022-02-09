import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  input[type="range"] {
    width: 100%;
    -webkit-appearance: none !important;
    height: 12.4px;
    background: #e8eef2;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 20px;
    height: 20px;
    background: var(--orange300);
    border-radius: 30px;
    box-shadow: 0px 0px 3px darken(red, 15%);
    transition: all 0.5s ease;
    &:hover {
      background: var(--blue600);
    }
  }
`;

export const Colors = styled.div`
  color: #678399;
`;

export const Min = styled(Colors)`
  padding-right: 5px;
`;

export const Max = styled(Colors)`
  padding-left: 5px;
`;

export const SliderLabelContainer = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled.p`
  color: #023f73;
  font-size: 13px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  font-weight: bold;
  min-width: 24px;
  z-index: 88;
  background: whitesmoke;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
