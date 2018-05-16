import { FilterTeasByTastesPipe } from './filter-teas-by-tastes.pipe';

describe('FilterTeasByTastesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterTeasByTastesPipe();
    expect(pipe).toBeTruthy();
  });
});
