# Zustand tips and tricks.

### Example store creator function:

```ts
import { StateCreator } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

// Internal Zustand stuff. Used to improve typing.
type MiddlewareStoreCreator<T> = StateCreator<
  T,
  [['zustand/subscribeWithSelector', never], ['zustand/immer', never]],
  [],
  T
>;

/*
 * A wrapper around `create` to use immer and the shallow equality function. Should be used as the default store creator function
 */
const store = <T>(config: MiddlewareStoreCreator<T>) =>
  createWithEqualityFn(subscribeWithSelector(immer(config)), shallow);

export { immer, store };
```
