import type { Meta, StoryObj } from '@storybook/react';
import SearchResult from './SearchResult';

const meta = {
  title: 'Components/SearchResult',
  component: SearchResult,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],  
} satisfies Meta <typeof SearchResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalTitle: Story = {
  args: {
    title: 'How will Harris debate Trump? Six key moments offer insight',
    date: '2024-09-09T12:00:16Z',
    url: 'https://www.theguardian.com/us-news/article/2024/sep/09/harris-trump-debate',
  }
};

export const VeryLongTitle: Story = {
  args: {
    title: 'This is a very long title that says that Harris delivered a ‘masterclass’ debate. Will it change the race? We do not know what will happen.',
    date: '2024-09-11T07:00:03Z',
    url: 'https://www.theguardian.com/us-news/article/2024/sep/11/trump-harris-debate-analysis',
  }
}

export const VeryShortTitle: Story = {
  args: {
    title: 'Title',
    date: '2024-09-13T16:25:11Z',
    url: 'https://www.theguardian.com/us-news/2024/sep/13/harris-trump-second-debate-democrats-reaction',
  }
}
