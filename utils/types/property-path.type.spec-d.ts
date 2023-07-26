import { expectAssignable, expectNotAssignable } from 'tsd';
import { PropertyPath } from './property-path.type';

const abcObject = { a: 'a', b: 'b', c: 'c' };

// it should not "be assignable to sting which is not property path of object"
expectNotAssignable<PropertyPath<typeof abcObject>>('abc');
expectNotAssignable<PropertyPath<typeof abcObject>>('d');
expectNotAssignable<PropertyPath<typeof abcObject>>('a.b');

//it should "be assignable to string which is path of object"
expectAssignable<PropertyPath<typeof abcObject>>('a');

const nestedAbcObject = { a: { b: { c: { d: 'a.b.c.d' } } } };
type FlatAbcPropertyPath = PropertyPath<typeof nestedAbcObject, 1>;

// it should not "be assignable to sting which is not property path of nested objects"
expectNotAssignable<FlatAbcPropertyPath>('abc');
expectNotAssignable<FlatAbcPropertyPath>('b');
expectNotAssignable<FlatAbcPropertyPath>('b.b');

// it should "be assignable to string which is path of nested objects"
expectAssignable<FlatAbcPropertyPath>('a');
expectNotAssignable<FlatAbcPropertyPath>('a.b');
expectNotAssignable<FlatAbcPropertyPath>('a.b.c');

type DeeperAbcPropertyPath = PropertyPath<typeof nestedAbcObject, 3>;

// it should not "be assignable to sting which is not property path of nested objects"
expectNotAssignable<DeeperAbcPropertyPath>('abc');
expectNotAssignable<DeeperAbcPropertyPath>('b');
expectNotAssignable<DeeperAbcPropertyPath>('b.b');

// it should "be assignable to string which is path of nested objects"
expectAssignable<DeeperAbcPropertyPath>('a');
expectAssignable<DeeperAbcPropertyPath>('a.b');
expectAssignable<DeeperAbcPropertyPath>('a.b.c');
expectNotAssignable<DeeperAbcPropertyPath>('a.b.c.d');
