// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { RpcType } from './types';

const PATH: string = '/';
const PORT: number = 9933;
const TYPES: Array<RpcType> = ['http', 'ws'];

module.exports = {
  PATH,
  PORT,
  TYPES
};
