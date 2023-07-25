import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)``;

export const Button = styled.button`
  display: block;
  margin: 20px auto;
  background-color: var(--accent);
  color: var(--text);
  font-weight: 500;
  font-size: 20px;
  padding: 10px;
  border: transparent;
  border-radius: 30%;

  &:hover {
    background-color: var(--text);
    color: var(--accent);
  }
`;

export const Label = styled.label`
  color: var(--section);

  /* text-shadow: 1px 1px 1px var(--section); */
`;

export const ErrorMessageForm = styled(ErrorMessage)`
  color: var(--accent);
  font-weight: 600;
  background-color: var(--section);
`;

export const FieldForm = styled(Field)`
  margin-bottom: 10px;
  margin-top: 7px;
  font-size: 30px;
  color: var(--text);
  outline: var(--accent);
  border: var(--text);
`;
