import mergeSort from './merge-sort';

describe('margeSort', () => {
  test('sort correctly', () => {
    const data = [1, 5, 6, 3, 0, 2, 7];
    expect(mergeSort(data)).toEqual([0, 1, 2, 3, 5, 6, 7]);
  });

  test('sort stable', () => {
    const data = [
      { id: 4 }, { id: 1, pos: 0 }, { id: 2 }, { id: 3 },
      { id: 1, pos: 1 }, { id: 1, pos: 2 }, { id: 0 }, { id: 1, pos: 3 },
    ];
    const compare = (a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    };
    expect(mergeSort(data, compare)).toEqual(
      [
        { id: 0 },
        { id: 1, pos: 0 }, { id: 1, pos: 1 }, { id: 1, pos: 2 }, { id: 1, pos: 3 },
        { id: 2 }, { id: 3 }, { id: 4 },
      ],
    );
  });
});
