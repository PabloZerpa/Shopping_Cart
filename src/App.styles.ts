import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Container = styled.div`
  padding: 128px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 101;
  right: 30px;
  top: 15px;
  color: #2C76EE;
  box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.71);
`;