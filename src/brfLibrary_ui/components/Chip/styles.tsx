import { metric } from '@/brfLibrary_ui';
import Metrics from '@/brfLibrary_ui/helpers/metric';
import styled from 'styled-components/native';

interface IProps {
  background: string;
}

export const Main = styled.View<IProps>`
  padding: ${Metrics(6)}px ${Metrics(17)}px;

  background-color: ${(props: IProps) => props.background};

  border-radius: ${metric(20)}px;
`;
