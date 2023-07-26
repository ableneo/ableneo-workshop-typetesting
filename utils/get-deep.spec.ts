import { getDeep } from './get-deep';

describe(getDeep.name, () => {
  it('should return the value of a property', () => {
    const object = {
      a: {
        b: {
          c: {
            d: 'd'
          },
          e: 'e'
        }
      }
    };

    expect(getDeep(object, 'a.b.c.d')).toBe('d');
  });

  it('should throw if property path is invalid', () => {
    const object = {};

    expect(() => getDeep(object, 'a.b.c.d')).toThrow(
      `Path 'a.b.c.d' does not exist on object`
    );
  });
});
