import Metrics from '@/brfLibrary_ui/helpers/metric';
import styled from 'styled-components/native';

interface IProps {
  background: string;
}

export const Main = styled.TouchableHighlight<IProps>`
  padding: ${Metrics(6)}px ${Metrics(17)}px;

  background-color: ${(props: IProps) => props.background};

  border-radius: ${Metrics(20)}px;
`;
