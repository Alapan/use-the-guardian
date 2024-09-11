import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputForm from './InputForm';

const meta = {
  title: 'Components/InputForm',
  component: InputForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    onSubmit: fn()
  }
} satisfies Meta<typeof InputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NormalForm: Story = {};
