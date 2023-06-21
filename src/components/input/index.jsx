import { StyledDiv } from "./styled";
import { forwardRef } from "react";

export const Input = forwardRef(
  ({ placeholder, type, register, ...rest }, ref) => {
    return (
      <StyledDiv>
        ⁠{" "}
        <input
          type={type}
          ref={ref}
          {...register}
          {...rest}
          placeholder={placeholder}
        />
      </StyledDiv>
    );
  }
);

export const Select = forwardRef(({ register, ...rest }, ref) => {
  return (
    <StyledDiv>
      ⁠ <select ref={ref} {...register} {...rest}></select>
    </StyledDiv>
  );
});
