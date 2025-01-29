import { FlexAlignBox, FlexColumnBox } from '@/shared/flex';
import React from 'react';
import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  type: string;
  errors: Record<string, { message: string }>;
  errorName: string;
  _border: string;
  label: string;
  onKeyUp: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

const Input = ({ register, type, errors, errorName, _border, label, onKeyUp }: InputProps) => {
  return (
    <Label>
      <span>{label}</span>
      <JoinInput _border={_border} {...register} type={type} onKeyUp={onKeyUp} />
      <ErrorMessage>{errors[errorName]?.message}</ErrorMessage>
    </Label>
  );
};

export default Input;

Input.defaultProps = {
  type: 'text',
  errors: {},
  errorName: '',
  _border: 'inherit',
  label: '',
  onKeyUp: () => {},
};

export const Label = styled.label`
  ${FlexColumnBox};
  width: 100%;
  margin-bottom: 1.3rem;
  span {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;

export const JoinInput = styled.input<{ _border: string }>`
  width: 100%;
  height: 40px;
  padding: 0.7rem;

  border: 1.3px solid ${(props) => props._border};
  border-radius: 5px;
  &:focus {
    border: none;
    box-shadow: 0px 0px 5px ${(props) => props._border};
  }
`;

export const ErrorMessage = styled.p`
  ${FlexAlignBox};
  margin-top: 0.4rem;
  width: 100%;
  color: ${(props) => props.theme.color.red};
  font-size: 0.8rem;
  font-weight: 400;
`;
