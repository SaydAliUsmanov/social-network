import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import pSBC from 'shade-blend-color';

type RequiredButtonProps = Required<ButtonProps>;

const PERCENTAGE = -0.15;

export const Root = styled.button<{
  variant: RequiredButtonProps['variant'];
  small: RequiredButtonProps['small'];
  color: RequiredButtonProps['color'];
  touched: boolean;
}>`
  position: relative;
  border: none;
  background-color: transparent;
  color: ${({ theme, color }) => theme.colors[color]};
  padding: 4px 16px;
  height: 40px;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  ${({ theme }) => theme.typography.displayMedium};
  transition: all 150ms linear;

  transform: scale(${({ touched }) => (touched ? 0.95 : 1)});

  :hover {
    color: ${({ theme, color }) => pSBC(PERCENTAGE, theme.colors[color])};
  }

  ${({ variant, color, theme }) => {
    switch (variant) {
      case 'contained':
        return css`
          background-color: ${theme.colors[color]};
          color: #fff;
          :hover {
            background-color: ${pSBC(PERCENTAGE, theme.colors[color])};
            color: #fff;
          }
        `;
      case 'outlined':
        return css`
          background-color: transparent;
          color: ${theme.colors[color]};
          border-width: 1px;
          border-style: solid;
          border-color: ${theme.colors[color]};
          :hover {
            color: ${pSBC(PERCENTAGE, theme.colors[color])};
            border-color: ${pSBC(PERCENTAGE, theme.colors[color])};
          }
        `;
    }
  }}

  ${({ small }) =>
    small &&
    css`
      height: 36px;
    `}
`;

const iconStyle = css`
  display: flex;
  align-items: center;
  & svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

export const StartIcon = styled.span`
  ${iconStyle}
  margin-right: 6px;
  margin-left: -1px;
`;

export const EndIcon = styled.span`
  ${iconStyle}
  margin-left: 6px;
  margin-right: -1px;
`;
