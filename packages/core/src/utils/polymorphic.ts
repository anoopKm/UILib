import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from "react";

export type PolymorphicProps<E extends ElementType, P = object> = P &
  Omit<ComponentPropsWithoutRef<E>, keyof P> & {
    as?: E;
  };

export type PolymorphicRef<E extends ElementType> = ComponentPropsWithRef<E>["ref"];
