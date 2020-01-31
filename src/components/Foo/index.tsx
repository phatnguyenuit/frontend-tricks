import React from 'react';

export function FooComponent<T>(props: FooProps<T>) {
  return (
    <div>
      Render with value having type: <code>{typeof props.value}</code>
    </div>
  );
}

const Foo = React.memo(FooComponent) as typeof FooComponent &
  React.ComponentType<any>;
Foo.displayName = 'Foo';

export default Foo;

export interface FooProps<T> {
  value: T;
}
