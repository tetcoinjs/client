// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const Trie = require('merkle-patricia-tree');
const LevelDown = require('leveldown');
const MemDown = require('memdown');

const isInstanceOf = require('@polkadot/util/is/instanceOf');

const createTrie = require('./trie');

describe('createTrie', () => {
  let trie;

  beforeEach(() => {
    trie = createTrie('./tmp', 'chainTrie', 'test', true);
  });

  it('returns a valid Trie instance', () => {
    expect(
      isInstanceOf(trie, Trie)
    ).toEqual(true);
  });

  it('creates a MemDown store (inMemory = true)', () => {
    expect(
      isInstanceOf(trie.db._db, MemDown)
    ).toEqual(true);
  });

  it('creates a LevelDown store (default, inMemory = false)', () => {
    expect(
      isInstanceOf(createTrie('./tmp', 'chainTrie', 'test', false).db._db, LevelDown)
    ).toEqual(true);
  });
});
