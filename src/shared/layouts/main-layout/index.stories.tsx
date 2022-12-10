import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainLayout } from './';

export default {
  title: 'layouts/MainLayout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = () => <MainLayout />;

export const Default = Template.bind({});
