export const getDeep = <T>(object: T, path: string) => {
  const pathParts = path.split('.');
  let currentObject: any = object;
  for (const pathPart of pathParts) {
    if (currentObject[pathPart] === undefined) {
      throw new Error(`Path '${path}' does not exist on object`);
    }

    currentObject = currentObject[pathPart];
  }

  return currentObject;
};
