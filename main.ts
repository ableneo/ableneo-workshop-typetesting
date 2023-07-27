// valueGetter(mockObject, 'address.street');

import { PropertyPath } from './utils/types/property-path.type';

type Property<T> = keyof T & string;

/**
 * Gets the value of a property path from an object.
 *
 * @param object
 * @param path
 */
export const valueGetter = <T extends object>(
  object: T,
  path: PropertyPath<T>
): unknown => {
  const pathPaths = (path as string).split('.');
  let currentObject: any = object;
  for (const pathPart of pathPaths) {
    if (currentObject[pathPart] === undefined) {
      return undefined;
    }
    currentObject = currentObject[pathPart];
  }
  return currentObject;
};
