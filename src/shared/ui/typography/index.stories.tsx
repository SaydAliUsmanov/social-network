import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './';

export default {
  title: 'ui/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Typography',
  variant: {
    mobile: 'heading1',
    tablet: 'displayBold',
    default: 'heading1',
  },
};
