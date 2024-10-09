import { Meta, StoryObj } from '@storybook/react';
import PaginationRow from './PaginationRow';
import { fn } from '@storybook/test';

const meta: Meta<typeof PaginationRow> = {
  title: 'Components/PaginationRow',
  component: PaginationRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const RowWithThreePages: Story = {
  args: {
    pageCount: 3,
  },
};

export const RowWithMoreThanThreePages: Story = {
  args: {
    pageCount: 100,
  },
};
