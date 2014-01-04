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

var suites = [
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
