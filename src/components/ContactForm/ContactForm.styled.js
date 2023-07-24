import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
`;

export const Button = styled.button`
  background-color: green;
`;

export const Label = styled.label`
  color: blue;
`;

export const ErrorMessageForm = styled(ErrorMessage)`
  color: red;
`;

export const FieldForm = styled(Field)`
  font-size: 30px;
  color: green;
`;
