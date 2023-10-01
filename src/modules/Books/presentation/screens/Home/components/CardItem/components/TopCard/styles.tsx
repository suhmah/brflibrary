import { baseColor, metric } from '@/brfLibrary_ui';
import styled from 'styled-components/native';

export const Main = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperTexts = styled.View`
  flex: 1;
`;

export const SaveButton = styled.TouchableHighlight`
  width: ${metric(36)}px;
  height: ${metric(36)}px;

  align-items: center;
  justify-content: center;

  background-color: ${baseColor.white};

  border-radius: ${metric(36)}px;
`;
