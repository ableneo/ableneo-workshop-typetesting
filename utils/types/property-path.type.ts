import { Join } from './join.type';

type Depth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type DepthDecrementMap = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8];

export type PropertyPath<T, D extends Depth = 4> = D extends 0
  ? ''
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, PropertyPath<T[K], DepthDecrementMap[D]>>
        : never;
    }[keyof T]
  : '';
