import ErrorMessage from './ErrorMessage';
import { Meta, StoryObj } from '@storybook/react';

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

export const DefaultMessage: Story = {
  args: {
    message: 'This is an error message!',
  },
};

export const VeryLongMessage: Story = {
  args: {
    message: 'This is a very long error message! The main reason this is here is to check that it renders normally on the page and not in a wonky way.'
  },
};
