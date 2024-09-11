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
    title: 'First Thing: Joe Biden and Donald Trump agree to two debates',
    date: '16 May 2024',
    url: 'https://www.theguardian.com/us-news/article/2024/may/16/first-thing-joe-biden-and-donald-trump-agree-to-two-debates',
  }
};

export const VeryLongTitle: Story = {
  args: {
    title: 'This is a very long title which talks about the presence of smaller parties which may be squeezed out of UK election TV leadership debates',
    date: '24 May 2024',
    url: 'https://www.theguardian.com/politics/article/2024/may/24/smaller-parties-may-be-squeezed-out-of-uk-election-tv-leadership-debates',
  }
}

export const VeryShortTitle: Story = {
  args: {
    title: 'Title',
    date: '30 May 2024',
    url: 'https://www.theguardian.com/commentisfree/article/2024/jun/27/the-guardian-view-on-televised-election-debates-the-voters-deserve-better',
  }
}
