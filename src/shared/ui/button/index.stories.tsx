import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconSettings } from '@tabler/icons';
import { hideControls } from 'shared/lib/storybook/hideControls';

import { Button } from './';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    ...hideControls(['startIcon', 'endIcon']),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Button',
  variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Button',
  variant: 'text',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
  startIcon: <IconSettings stroke={1.5} />,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
  endIcon: <IconSettings stroke={1.5} />,
};
