import { Join } from './join.type';
import { expectAssignable, expectNotAssignable } from 'tsd';

// It should not "join not a number or string"
expectNotAssignable<Join<undefined, 0>>(undefined);
expectNotAssignable<Join<0, undefined>>(undefined);

// It should "join string literals"
type JoinedAB = Join<'a', 'b'>;
expectNotAssignable<JoinedAB>('a.c');
expectAssignable<JoinedAB>('a.b');

// It should "join number literals"
type Joined12 = Join<1, 2>;
expectNotAssignable<Joined12>('1.3');
expectAssignable<Joined12>('1.2');

// It should "join string and number"
type JoinedA1 = Join<'a', 1>;
expectNotAssignable<JoinedA1>('a.2');
expectAssignable<JoinedA1>('a.1');

// It should "join number and string"
type Joined1B = Join<1, 'b'>;
expectNotAssignable<Joined1B>('1.c');
expectAssignable<Joined1B>('1.b');
