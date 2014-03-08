import { suite as creation } from './micro/creation';
import { suite as reject} from './micro/reject';
import { suite as resolve } from './micro/resolve';
import { suite as resolvePromise } from './micro/resolve_promise';
import { suite as sequence } from './micro/sequence';
import { suite as all_number } from './micro/all/number';
import { suite as all_thenable } from './micro/all/thenable';
import { suite as all_object } from './micro/all/object';
import { suite as filter_true } from './micro/filter/true';
import { suite as filter_false } from './micro/filter/false';
import { suite as filter_promise_fn_true } from './micro/filter/promise_fn_true';
import { suite as thenning } from './micro/thenning';

// TODO: load all these dynamically, but cross platform
// TODO: 1 base test, that accepts N as a parameter, this should keep the duplicate tests, and maintence way down
var suites = [
  filter_promise_fn_true,
  filter_false,
  filter_true,
  all_number,
  all_thenable,
  all_object,
  creation,
  reject,
  resolve,
  resolvePromise,
  thenning,
  sequence
];

export default suites;
