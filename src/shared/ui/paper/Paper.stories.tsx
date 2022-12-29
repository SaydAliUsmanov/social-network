import { ComponentStory, ComponentMeta } from '@storybook/react';
import { hideControls } from 'shared/lib/storybook/hideControls';

import { Paper } from '.';

export default {
  title: 'ui/Paper',
  component: Paper,
  argTypes: {
    ...hideControls(['theme', 'as', 'forwardedAs']),
  },
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Paper',
};
