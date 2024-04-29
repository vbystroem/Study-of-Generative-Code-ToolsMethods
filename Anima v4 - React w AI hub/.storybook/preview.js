import React from 'react';

// Setting up Storybook preview configurations
const preview = {
  parameters: {
    // Enabling actions for components that emit events
    actions: { argTypesRegex: "^on[A-Z].*" },
    // Configuring controls for adjusting props dynamically in the Storybook UI
    controls: {
      matchers: {
        color: /(background|color)$/i, // Matching properties related to color
        date: /Date$/, // Matching properties related to dates
      },
    },
  },
};

// Decorator to ensure each story is keyed for React's reconciliation process
export const decorators = [(Story, context) => <Story key={JSON.stringify(context.args)} />];

export default preview;