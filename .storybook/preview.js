import { dark, GlobalStyle, light } from '../src/shared/styles';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
  withThemesProvider([light, dark])
];
