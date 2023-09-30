/* eslint-disable import/no-extraneous-dependencies */
import { BRFLibraryText, metric } from '@/brfLibrary_ui';
import styled from 'styled-components/native';

export const Main = styled.View`
  padding: 0 ${metric(16)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperText = styled(BRFLibraryText)`
  flex: 1;
`;
