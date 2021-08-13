import React from 'react';
import styled from 'styled-components';

const FileInput = ({ label, name, onChange }) => {
  return (
    <Label>
      <FileInputWrapper type="file" onChange={onChange} name={name} />
      {label}
    </Label>
  );
};

const FileInputWrapper = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 0.5rem;
  border: 1px solid transparent;
  background-color: #ddd

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.lightActive};
  }

  &:hover {
    color: blue;
  }
`;

export default FileInput;