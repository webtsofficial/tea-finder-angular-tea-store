import { FilterTeasByNamePipe } from './filter-teas-by-name.pipe';

describe('FilterTeasByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterTeasByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
