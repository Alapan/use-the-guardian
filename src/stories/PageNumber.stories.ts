import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import PageNumber from './PageNumber';

const meta: Meta<typeof PageNumber> = {
  title: 'Components/PageNumber',
  component: PageNumber,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    handlePageNumberClick: fn()
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const UnclickedPageNumber: Story = {
  args: {
    pageNumber: 1,
    isClicked: false,
  },
};

export const ClickedPageNumber: Story = {
  args: {
    pageNumber: 2,
    isClicked: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.handlePageNumberClick).toHaveBeenCalled();
  },
};
