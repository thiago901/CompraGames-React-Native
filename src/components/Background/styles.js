import styled from 'styled-components/native';

/*
  #0e0125
  #260c39
  #2f167f
*/

/*
  #de4e3a
  #6fa1cd
  #6c0a12
  #22272a
*/
export const Container = styled.View`
  background: ${props=> props.color || '#de4e3a'};
  flex: 1;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
`;
