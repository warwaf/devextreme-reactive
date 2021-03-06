import React from 'react';
import { mount } from 'enzyme';
import { Pager } from './pager';

describe('Pager', () => {
  describe('#render', () => {
    const mountPager = ({
      currentPage,
      totalPages,
      pageSize,
      totalCount,
      allowedPageSizes = [],
      onPageSizeChange = () => {},
      onCurrentPageChange = () => {},
    }) => mount(<Pager
      totalPages={totalPages}
      currentPage={currentPage}
      totalCount={totalCount}
      pageSize={pageSize}
      allowedPageSizes={allowedPageSizes}
      onCurrentPageChange={onCurrentPageChange}
      onPageSizeChange={onPageSizeChange}
    />);

    test('can show info about rendered pages', () => {
      const tree = mountPager({
        totalPages: 10,
        currentPage: 1,
        totalCount: 96,
        pageSize: 10,
      });

      expect(tree.find('div > span > span').text()).toBe('11-20 of 96');
    });

    test('can render pagination arrows', () => {
      const onCurrentPageChange = jest.fn();
      const arrows = mountPager({
        totalPages: 10,
        currentPage: 2,
        totalCount: 96,
        pageSize: 10,
        onCurrentPageChange,
      }).find('.pager li');

      const prew = arrows.at(0);
      const next = arrows.at(1);

      prew.find('a').simulate('click');
      next.find('a').simulate('click');

      expect(arrows).toHaveLength(2);
      expect(prew.hasClass('disabled')).toBeFalsy();
      expect(next.hasClass('disabled')).toBeFalsy();
      expect(onCurrentPageChange.mock.calls).toHaveLength(2);
    });

    test('the prev arrow is disabled if current page is 1', () => {
      const onCurrentPageChange = jest.fn();
      const arrows = mountPager({
        totalPages: 10,
        currentPage: 0,
        totalCount: 96,
        pageSize: 10,
        onCurrentPageChange,
      }).find('.pager li');

      const prew = arrows.at(0);
      const next = arrows.at(1);

      prew.find('a').simulate('click');
      next.find('a').simulate('click');

      expect(prew.hasClass('disabled')).toBeTruthy();
      expect(next.hasClass('disabled')).toBeFalsy();
      expect(onCurrentPageChange.mock.calls).toHaveLength(1);
    });

    test('the next arrow is disabled if current page equals to total page count', () => {
      const onCurrentPageChange = jest.fn();
      const arrows = mountPager({
        totalPages: 10,
        currentPage: 9,
        totalCount: 96,
        pageSize: 5,
        onCurrentPageChange,
      }).find('.pager li');

      const prew = arrows.at(0);
      const next = arrows.at(1);

      prew.find('a').simulate('click');
      next.find('a').simulate('click');

      expect(prew.hasClass('disabled')).toBeFalsy();
      expect(next.hasClass('disabled')).toBeTruthy();
      expect(onCurrentPageChange.mock.calls).toHaveLength(1);
    });
  });
});
