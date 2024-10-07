import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from '../stories/PaginationRow.stories';

describe('PaginationRow component', () => {
  const { RowWithMoreThanThreePages } = composeStories(stories);
  beforeEach(async () => {
    await RowWithMoreThanThreePages.run();
    const pageOneBtn = screen.queryByText('1');
    const pageHundredBtn = screen.queryByText('100');
    expect(pageOneBtn).toBeDefined();
    expect(pageHundredBtn).toBeDefined();
  });

  test('Clicking page 100 button shows buttons for pages 1 and 98-100', () => {
    const pageHundredBtn = screen.getByText('100');
    fireEvent.click(pageHundredBtn);
    const pageNinetyEightBtn = screen.queryByText('98');
    const pageNinetyNineBtn = screen.queryByText('98');
    const pageTwoBtn = screen.queryByText('2');
    expect(pageNinetyEightBtn).toBeDefined();
    expect(pageNinetyNineBtn).toBeDefined();
    expect(pageTwoBtn).toBeNull();
  });

  test('Clicking page 3 button shows buttons from pages 1-5', () => {
    const pageThreeBtn = screen.getByText('3');
    fireEvent.click(pageThreeBtn);
    const pageFiveBtn = screen.queryByText('5');
    const pageSixBtn = screen.queryByText('6');
    expect(pageFiveBtn).toBeDefined();
    expect(pageSixBtn).toBeNull();
  });

  test('Clicking page 5 button hides page 2 and shows pages 3-7', () => {
    const pageThreeBtn = screen.getByText('3');
    fireEvent.click(pageThreeBtn);
    const pageFiveBtn = screen.getByText('5');
    fireEvent.click(pageFiveBtn);
    const pageTwoBtn = screen.queryByText('2');
    expect(pageTwoBtn).toBeNull();
    const pageSevenBtn = screen.queryByText('7');
    expect(pageSevenBtn).toBeDefined();
  });
});
