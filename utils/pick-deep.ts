import { PropertyPath } from './types/property-path.type';
import { getDeep } from './get-deep';

export const pickDeepRuntime = <T>(object: T, paths: string[]) => {
  return paths.reduce(
    (acc, path) => ({ ...acc, [path]: getDeep(object, path) }),
    {} as any
  );
};

export const pickDeepStatic = <T, Paths extends PropertyPath<T>[]>(
  object: T,
  paths: Paths
): Record<keyof Paths, unknown> => {
  return paths.reduce(
    (acc, path) => ({ ...acc, [path]: getDeep(object, path) }),
    {} as Record<keyof Paths, unknown>
  );
};
