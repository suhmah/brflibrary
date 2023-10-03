import { baseColor, metric } from '@/brfLibrary_ui';
import styled from 'styled-components/native';

export const Main = styled.View`
  width: 100%;

  align-items: center;

  background-color: ${baseColor.gray100};

  padding: ${metric(50)}px ${metric(74)}px;

  border-radius: 16px;
`;
export const Button = styled.View`
  padding: ${metric(16)}px ${metric(17)}px;

  align-items: center;

  background-color: ${baseColor.lightBlue500};

  border-radius: 8px;
`;
