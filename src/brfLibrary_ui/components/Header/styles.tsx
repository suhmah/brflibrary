/* eslint-disable import/no-extraneous-dependencies */
import Metrics from '@/brfLibrary_ui/helpers/metric';
import styled from 'styled-components/native';
import BRFLibraryText from '../BRFLibraryText';

export const Main = styled.View`
  padding: 0 ${Metrics(16)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperText = styled(BRFLibraryText)`
  flex: 1;
`;
