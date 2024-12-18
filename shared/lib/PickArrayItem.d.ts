export type PickArrayItem<T> = T extends Array<infer U> ? U : never;
