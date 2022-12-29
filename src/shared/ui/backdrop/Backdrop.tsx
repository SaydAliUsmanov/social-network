import { fixedFullCss } from 'shared/styles/css';
import styled from 'styled-components';

export const Backdrop = styled.div`
  ${fixedFullCss}
  background-color: ${({ theme }) => theme.colors.backdrop};
  z-index: -1;
`;
