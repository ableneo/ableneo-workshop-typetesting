import { pickDeepRuntime, pickDeepStatic } from './pick-deep';

describe(pickDeepRuntime.name, () => {
  it('should pick when paths are valid', () => {
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

    expect(pickDeepRuntime(object, ['a.b.c.d'])).toEqual({
      'a.b.c.d': 'd'
    });
  });

  it('should throw when there is an invalid path', () => {
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

    expect(() => pickDeepRuntime(object, ['a.b.c.d', 'a.b.f'])).toThrow(
      `Path 'a.b.f' does not exist on object`
    );
  });
});

describe(pickDeepStatic.name, () => {
  it('should pick paths', () => {
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

    expect(pickDeepStatic(object, ['a.b.c.d'])).toEqual({
      'a.b.c.d': 'd'
    });
  });

  // Won't compile otherwise
  it('# should not compile when there is an invalid path', () => {
    const object = {
      a: {
        b: {
          c: {
            d: 'd'
          }
        }
      }
    };

    // @ts-ignore
    expect(pickDeepStatic(object, ['a.b.c.d', 'a.b.f'])).toThrow();
  });
});
