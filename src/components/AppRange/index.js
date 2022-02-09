import React from "react";
import * as S from "./styles";

export const AppRange = ({
  min,
  max,
  name,
  value,
  valueLabel,
  disabled = false,
  onValueChanged,
}) => {
  const handleChange = ({ target }) => {
    onValueChanged(parseFloat(target.value));
  };
  const progressPercentage = `${(value / max) * 100}%`;

  return (
    <S.Wrapper>
      <input type="range" min={min} max={max} value={value} onChange={handleChange} />
      {!!value && (
        <S.SliderLabelContainer>
          <S.SliderLabel progress={progressPercentage}>
            {value} km
          </S.SliderLabel>
        </S.SliderLabelContainer>
      )}
      <div className="d-flex align-items-center justify-content-between">
        <S.Min>{min} km</S.Min>
        <S.Max>{max} km</S.Max>
      </div>
    </S.Wrapper>
  );
};
