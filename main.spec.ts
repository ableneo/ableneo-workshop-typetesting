import { valueGetter } from './main';
import mock = jest.mock;

describe(valueGetter.name, () => {
  const mockObject = {
    name: 'John',
    address: {
      street: '1234 Main St',
      city: 'San Francisco',
      state: 'CA'
    },
    favorites: {
      food: 'Pizza',
      color: 'Blue',
      number: 42
    }
  };

  it('should get values when path is valid', () => {
    expect(valueGetter(mockObject, 'name')).toEqual('John');
  });

  it('should not get values when path is not valid', () => {
    expect(valueGetter(mockObject, 'favorites.food')).toEqual('Pizza');
  });
});
