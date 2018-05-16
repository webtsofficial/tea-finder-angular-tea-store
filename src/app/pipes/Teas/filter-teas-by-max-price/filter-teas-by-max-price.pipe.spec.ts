import { FilterTeasByMaxPricePipe } from './filter-teas-by-max-price.pipe';

describe('FilterTeasByMaxPricePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterTeasByMaxPricePipe();
    expect(pipe).toBeTruthy();
  });
});
