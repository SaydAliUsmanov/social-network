import styled, { css } from 'styled-components';

export const Paper = styled.div<{ maxWidth?: number }>`
  ${({ theme, ...props }) => css`
    border-radius: ${theme.shape.borderRadius};
    background-color: ${theme.colors.paper};
    padding: 1rem;
    box-shadow: 0px 0px 1px 0px ${theme.colors.shadow};
    max-width: ${props.maxWidth ? `${props.maxWidth}px` : 'none'};
  `}
`;
