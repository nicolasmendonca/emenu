import styled from 'styled-components';

export const FileUploaderWrapper = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.mainBgColor};
  cursor: pointer;
  border-radius: 5px;

  box-shadow: 1px 6px 11px 0 ${props => props.theme.shadowColor};
  border: 1px solid #bfbfbf;
  border-style: dashed;
  font-family: 'Nunito', sans-serif;
  color: #bfbfbf;
  user-select: none;
`;

export const FileUploaderText = styled.p`
  font-size: 20px;
`;

export const FileUploaderIcon = styled.i`
  font-size: 26px;
  margin-top: 14px;
`;
