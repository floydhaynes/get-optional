// @flow
import {get} from 'safeget';

type E = number;
interface D {
	e: E;
}
interface C {
	d: D;
}
interface B {
	c: C;
}

interface A {
	b: B;
}

declare var input: null | {
	a: A;
};

// Basic usage for all depths
const a: void | A = get(input, 'a');
const b: void | B = get(input, 'a', 'b');
const c: void | C = get(input, 'a', 'b', 'c');
const d: void | D = get(input, 'a', 'b', 'c', 'd');
const e: void | E = get(input, 'a', 'b', 'c', 'd', 'e');

const toFixed: void | typeof Number.prototype.toFixed = get(e, 'toFixed');
