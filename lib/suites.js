import { suite as creation } from './micro/creation';
import { suite as reject} from './micro/reject';
import { suite as resolve } from './micro/resolve';
import { suite as resolvePromise } from './micro/resolve_promise';

import { suite as sequence_1 } from './micro/sequence/1';
import { suite as sequence_2 } from './micro/sequence/2';
import { suite as sequence_10 } from './micro/sequence/10';
import { suite as sequence_100 } from './micro/sequence/100';
import { suite as sequence_10000 } from './micro/sequence/10000';

import { suite as all_1 } from './micro/all/1';
import { suite as all_2 } from './micro/all/2';
import { suite as all_10 } from './micro/all/10';
import { suite as all_100 } from './micro/all/100';
import { suite as all_10000 } from './micro/all/10000';

import { suite as all_thenable_1 } from './micro/all/thenable_1';
import { suite as all_thenable_2 } from './micro/all/thenable_2';
import { suite as all_thenable_10 } from './micro/all/thenable_10';
import { suite as all_thenable_100 } from './micro/all/thenable_100';
import { suite as all_thenable_10000 } from './micro/all/thenable_10000';

import { suite as all_object_1 } from './micro/all/object_1';
import { suite as all_object_2 } from './micro/all/object_2';
import { suite as all_object_10 } from './micro/all/object_10';
import { suite as all_object_100 } from './micro/all/object_100';
import { suite as all_object_10000 } from './micro/all/object_10000';

import { suite as filter_1 } from './micro/filter/none/1';
import { suite as filter_10 } from './micro/filter/none/10';
import { suite as filter_100 } from './micro/filter/none/100';
import { suite as filter_1000 } from './micro/filter/none/1000';
import { suite as filter_10000 } from './micro/filter/none/10000';

import { suite as filter_promise_fn_1 } from './micro/filter/promise_fn/1';
import { suite as filter_promise_fn_10 } from './micro/filter/promise_fn/10';
import { suite as filter_promise_fn_100 } from './micro/filter/promise_fn/100';
import { suite as filter_promise_fn_1000 } from './micro/filter/promise_fn/1000';
import { suite as filter_promise_fn_10000 } from './micro/filter/promise_fn/10000';


// TODO: load all these dynamically, but cross platform
// TODO: 1 base test, that accepts N as a parameter, this should keep the duplicate tests, and maintence way down
var suites = [
  filter_1,
  filter_10,
  filter_100,
  filter_1000,
  filter_10000,

  filter_promise_fn_1,
  filter_promise_fn_10,
  filter_promise_fn_100,
  filter_promise_fn_1000,

  all_1,
  all_2,
  all_10,
  all_100,
  all_10000,

  all_thenable_1,
  all_thenable_2,
  all_thenable_10,
  all_thenable_100,
  all_thenable_10000,

  all_object_1,
  all_object_2,
  all_object_10,
  all_object_100,
  all_object_10000,

  creation,
  reject,
  resolve,
  resolvePromise,
  sequence_1,
  sequence_2,
  sequence_10,
  sequence_100,
  sequence_10000
];

export default suites;
