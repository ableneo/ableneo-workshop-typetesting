import { hasProperty } from './has-property';

describe(hasProperty.name, () => {
  it('should return true if property path is valid', () => {
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

    expect(hasProperty(object, 'a.b.c.d')).toBe(true);
  });

  it('should return false if property path is invalid', () => {
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

    expect(hasProperty(object, 'a.b.f')).toBe(false);
  });
});
