import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from 'styled-components';
import { ITypography } from 'shared/styles/styled';
import { typography } from 'shared/styles';
import { Typography } from './Typography';

export default {
  title: 'ui/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Typography',
};

export const All = () => (
  <div
    css={css`
      & > * {
        margin-bottom: 8px;
      }
    `}
  >
    {Object.keys(typography).map((typograpyName) => (
      <Typography key={typograpyName} variant={typograpyName as keyof ITypography}>
        {typograpyName}
      </Typography>
    ))}
  </div>
);
