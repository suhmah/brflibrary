/* eslint-disable import/no-extraneous-dependencies */
import Metrics from '@/brfLibrary_ui/helpers/metric';
import styled from 'styled-components/native';

interface IProps {
  focused: boolean;
}

export const Main = styled.View<IProps>`
  background-color: ${(props: IProps) =>
    props.focused ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  padding: ${Metrics(12)}px;

  border-radius: ${Metrics(100)}px;
`;
