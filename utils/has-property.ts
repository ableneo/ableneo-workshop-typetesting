/**
 *  Write a type that takes two arguments.
 *
 *  The first argument is enumerated object (dictionary) of type T.
 *  The second argument is a property path.
 *  The type should return true if the property path is a valid path of the tree.
 *
 *  @example
 *  const dict = {
 *    a: {
 *       b: {
 *        c: {
 *          d: 'd'
 *        }
 *         e: 'e'
 *      }
 *    }
 *   }
 *
 *  hasProperty(dict, 'a.b.c.d') // returns true
 *  hasProperty(dict, 'a.b.f') // returns false
 * */
export const hasProperty = <T>(object: T, path: string): boolean => {
  const pathParts = path.split('.');
  let currentObject: any = object;
  for (const pathPart of pathParts) {
    if (currentObject[pathPart] === undefined) {
      return false;
    }

    currentObject = currentObject[pathPart];
  }
  return true;
};
