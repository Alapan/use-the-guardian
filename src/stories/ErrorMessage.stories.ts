import { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NormalMessage: Story = {
  args: {
    message: 'This is an error message!',
  },
};

export const VeryLongMessage: Story = {
  args: {
    message: 'This is a very very very long error message that has been created to see how it renders on the page and if it doesn\'t look wonky. Just make sure it wraps to a new line if it is too long.',
  },
};
