import { Meta, Story } from '@storybook/angular';
import notes from './labeled-icon.html.md';

export default {
  title: 'HTML/Labeled icon',
  parameters: {
    notes,
    options: { selectedPanel: 'html/panel' },
  }
} as Meta;

const Template: Story = args => ({
  props: args,
  template: `
    <div class="veera-labeled-icon">
      <svg  class="veera-labeled-icon__image" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.61 14.99 15.86 14.89 16.12 14.89C16.22 14.89 16.33 14.9 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3ZM6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02Z"/>
        </g>
      </svg>
      <div class="veera-labeled-icon__content">
        <p>Some text next to icon</p>
      </div>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {};
