import React from 'react';

type PageProps = {
  name: string;
  component: ReactLazyComponent;
};

const pages: Record<string, PageProps> = {
  foo: {
    component: React.lazy(() => import('pages/Foo')),
    name: 'Foo Component',
  },
  table: {
    component: React.lazy(() => import('pages/Table')),
    name: 'Table Component',
  },
  CustomSelect: {
    component: React.lazy(() => import('pages/CustomSelect')),
    name: 'CustomSelect',
  },
};

export default pages;
