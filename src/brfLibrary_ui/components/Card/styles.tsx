import { baseColor } from '@/brfLibrary_ui/colors';
import Metrics from '@/brfLibrary_ui/helpers/metric';
import styled from 'styled-components/native';

export const Main = styled.View`
  width: 100%;

  padding: ${Metrics(16)}px;
  background-color: ${baseColor.brand.lightBlue[50]};

  border-radius: ${Metrics(8)}px;
`;
