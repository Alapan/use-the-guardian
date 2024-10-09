import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import InputForm from '@/app/components/InputForm';

const meta: Meta<typeof InputForm> = {
  title: 'Components/InputForm',
  component: InputForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    handleApiCall: fn(),
    onChange: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NormalForm: Story = {
  args: {
    value: 'test',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByPlaceholderText('Enter search text'),
      'Sport'
    );
    await expect(args.onChange).toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.handleApiCall).toHaveBeenCalled();
  },
};
