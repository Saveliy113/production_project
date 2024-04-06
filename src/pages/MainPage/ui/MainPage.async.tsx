import { lazy } from 'react';

export const MainPageAsync = lazy(
  async () =>
    await new Promise(resolve => {
      // @ts-expect-error: Need to resolve
      setTimeout(() => resolve(import('./MainPage')), 5000);
    }),
);
