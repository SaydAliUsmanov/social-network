import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

import { Sidebar } from './';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const GlobalStyle = createGlobalStyle`
  body, #root {
    height: 100%;
    padding: 0 !important;
  }
`;

const Template: ComponentStory<typeof Sidebar> = () => (
  <>
    <GlobalStyle />
    <Sidebar />
  </>
);

export const Default = Template.bind({});
