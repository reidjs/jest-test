import FiltersReducer from '../filters_reducer';
import defaultFilters from '../../testUtil/filter_helper';
describe('FiltersReducer', () => {
  test('should initialize with filled state as default', () => {
    expect(FiltersReducer(undefined, {})).toEqual(defaultFilters);
  });
});