import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerConnect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly query?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConnect = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Connect, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly query?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Connect = LazyLoading extends LazyLoadingDisabled ? EagerConnect : LazyConnect

export declare const Connect: (new (init: ModelInit<Connect>) => Connect) & {
  copyOf(source: Connect, mutator: (draft: MutableModel<Connect>) => MutableModel<Connect> | void): Connect;
}