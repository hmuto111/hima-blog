
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model article
 * 
 */
export type article = $Result.DefaultSelection<Prisma.$articlePayload>
/**
 * Model tag
 * 
 */
export type tag = $Result.DefaultSelection<Prisma.$tagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.article`: Exposes CRUD operations for the **article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.articleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.tagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    article: 'article',
    tag: 'tag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "article" | "tag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      article: {
        payload: Prisma.$articlePayload<ExtArgs>
        fields: Prisma.articleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          findFirst: {
            args: Prisma.articleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          findMany: {
            args: Prisma.articleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>[]
          }
          create: {
            args: Prisma.articleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          createMany: {
            args: Prisma.articleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.articleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>[]
          }
          delete: {
            args: Prisma.articleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          update: {
            args: Prisma.articleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          deleteMany: {
            args: Prisma.articleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.articleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>[]
          }
          upsert: {
            args: Prisma.articleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.articleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.articleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      tag: {
        payload: Prisma.$tagPayload<ExtArgs>
        fields: Prisma.tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findFirst: {
            args: Prisma.tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findMany: {
            args: Prisma.tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          create: {
            args: Prisma.tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          createMany: {
            args: Prisma.tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          delete: {
            args: Prisma.tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          update: {
            args: Prisma.tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          deleteMany: {
            args: Prisma.tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          upsert: {
            args: Prisma.tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    article?: articleOmit
    tag?: tagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    tag: number | null
    view: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: number | null
    tag: number[]
    view: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: number | null
    title: string | null
    img: string | null
    view: number | null
    post: Date | null
    updated: Date | null
    content: string | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    img: string | null
    view: number | null
    post: Date | null
    updated: Date | null
    content: string | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    img: number
    tag: number
    view: number
    post: number
    updated: number
    content: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    tag?: true
    view?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    tag?: true
    view?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    img?: true
    view?: true
    post?: true
    updated?: true
    content?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    img?: true
    view?: true
    post?: true
    updated?: true
    content?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    img?: true
    tag?: true
    view?: true
    post?: true
    updated?: true
    content?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article to aggregate.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type articleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
    orderBy?: articleOrderByWithAggregationInput | articleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: articleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: number
    title: string
    img: string
    tag: number[]
    view: number
    post: Date
    updated: Date
    content: string
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends articleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type articleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    img?: boolean
    tag?: boolean
    view?: boolean
    post?: boolean
    updated?: boolean
    content?: boolean
  }, ExtArgs["result"]["article"]>

  export type articleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    img?: boolean
    tag?: boolean
    view?: boolean
    post?: boolean
    updated?: boolean
    content?: boolean
  }, ExtArgs["result"]["article"]>

  export type articleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    img?: boolean
    tag?: boolean
    view?: boolean
    post?: boolean
    updated?: boolean
    content?: boolean
  }, ExtArgs["result"]["article"]>

  export type articleSelectScalar = {
    id?: boolean
    title?: boolean
    img?: boolean
    tag?: boolean
    view?: boolean
    post?: boolean
    updated?: boolean
    content?: boolean
  }

  export type articleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "img" | "tag" | "view" | "post" | "updated" | "content", ExtArgs["result"]["article"]>

  export type $articlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "article"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      img: string
      tag: number[]
      view: number
      post: Date
      updated: Date
      content: string
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type articleGetPayload<S extends boolean | null | undefined | articleDefaultArgs> = $Result.GetResult<Prisma.$articlePayload, S>

  type articleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface articleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['article'], meta: { name: 'article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {articleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articleFindUniqueArgs>(args: SelectSubset<T, articleFindUniqueArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articleFindUniqueOrThrowArgs>(args: SelectSubset<T, articleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articleFindFirstArgs>(args?: SelectSubset<T, articleFindFirstArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articleFindFirstOrThrowArgs>(args?: SelectSubset<T, articleFindFirstOrThrowArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends articleFindManyArgs>(args?: SelectSubset<T, articleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {articleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends articleCreateArgs>(args: SelectSubset<T, articleCreateArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {articleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articleCreateManyArgs>(args?: SelectSubset<T, articleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {articleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends articleCreateManyAndReturnArgs>(args?: SelectSubset<T, articleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {articleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends articleDeleteArgs>(args: SelectSubset<T, articleDeleteArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {articleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articleUpdateArgs>(args: SelectSubset<T, articleUpdateArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {articleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articleDeleteManyArgs>(args?: SelectSubset<T, articleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articleUpdateManyArgs>(args: SelectSubset<T, articleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {articleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends articleUpdateManyAndReturnArgs>(args: SelectSubset<T, articleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {articleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends articleUpsertArgs>(args: SelectSubset<T, articleUpsertArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articleCountArgs>(
      args?: Subset<T, articleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends articleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articleGroupByArgs['orderBy'] }
        : { orderBy?: articleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, articleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the article model
   */
  readonly fields: articleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the article model
   */
  interface articleFieldRefs {
    readonly id: FieldRef<"article", 'Int'>
    readonly title: FieldRef<"article", 'String'>
    readonly img: FieldRef<"article", 'String'>
    readonly tag: FieldRef<"article", 'Int[]'>
    readonly view: FieldRef<"article", 'Int'>
    readonly post: FieldRef<"article", 'DateTime'>
    readonly updated: FieldRef<"article", 'DateTime'>
    readonly content: FieldRef<"article", 'String'>
  }
    

  // Custom InputTypes
  /**
   * article findUnique
   */
  export type articleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article findUniqueOrThrow
   */
  export type articleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article findFirst
   */
  export type articleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article findFirstOrThrow
   */
  export type articleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article findMany
   */
  export type articleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article create
   */
  export type articleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * The data needed to create a article.
     */
    data: XOR<articleCreateInput, articleUncheckedCreateInput>
  }

  /**
   * article createMany
   */
  export type articleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articleCreateManyInput | articleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * article createManyAndReturn
   */
  export type articleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * The data used to create many articles.
     */
    data: articleCreateManyInput | articleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * article update
   */
  export type articleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * The data needed to update a article.
     */
    data: XOR<articleUpdateInput, articleUncheckedUpdateInput>
    /**
     * Choose, which article to update.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article updateMany
   */
  export type articleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articleWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
  }

  /**
   * article updateManyAndReturn
   */
  export type articleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * The data used to update articles.
     */
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articleWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
  }

  /**
   * article upsert
   */
  export type articleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * The filter to search for the article to update in case it exists.
     */
    where: articleWhereUniqueInput
    /**
     * In case the article found by the `where` argument doesn't exist, create a new article with this data.
     */
    create: XOR<articleCreateInput, articleUncheckedCreateInput>
    /**
     * In case the article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articleUpdateInput, articleUncheckedUpdateInput>
  }

  /**
   * article delete
   */
  export type articleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Filter which article to delete.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article deleteMany
   */
  export type articleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articleWhereInput
    /**
     * Limit how many articles to delete.
     */
    limit?: number
  }

  /**
   * article without action
   */
  export type articleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
  }


  /**
   * Model tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
    used: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
    used: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    used: number | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    used: number | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    used: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
    used?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
    used?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    used?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    used?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    used?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag to aggregate.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagWhereInput
    orderBy?: tagOrderByWithAggregationInput | tagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    used: number
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    used?: boolean
  }, ExtArgs["result"]["tag"]>

  export type tagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    used?: boolean
  }, ExtArgs["result"]["tag"]>

  export type tagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    used?: boolean
  }, ExtArgs["result"]["tag"]>

  export type tagSelectScalar = {
    id?: boolean
    name?: boolean
    used?: boolean
  }

  export type tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "used", ExtArgs["result"]["tag"]>

  export type $tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      used: number
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type tagGetPayload<S extends boolean | null | undefined | tagDefaultArgs> = $Result.GetResult<Prisma.$tagPayload, S>

  type tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tag'], meta: { name: 'tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {tagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagFindUniqueArgs>(args: SelectSubset<T, tagFindUniqueArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagFindUniqueOrThrowArgs>(args: SelectSubset<T, tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagFindFirstArgs>(args?: SelectSubset<T, tagFindFirstArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagFindFirstOrThrowArgs>(args?: SelectSubset<T, tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagFindManyArgs>(args?: SelectSubset<T, tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {tagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends tagCreateArgs>(args: SelectSubset<T, tagCreateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagCreateManyArgs>(args?: SelectSubset<T, tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagCreateManyAndReturnArgs>(args?: SelectSubset<T, tagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {tagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends tagDeleteArgs>(args: SelectSubset<T, tagDeleteArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {tagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagUpdateArgs>(args: SelectSubset<T, tagUpdateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagDeleteManyArgs>(args?: SelectSubset<T, tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagUpdateManyArgs>(args: SelectSubset<T, tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagUpdateManyAndReturnArgs>(args: SelectSubset<T, tagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {tagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends tagUpsertArgs>(args: SelectSubset<T, tagUpsertArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagCountArgs>(
      args?: Subset<T, tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagGroupByArgs['orderBy'] }
        : { orderBy?: tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tag model
   */
  readonly fields: tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tag model
   */
  interface tagFieldRefs {
    readonly id: FieldRef<"tag", 'Int'>
    readonly name: FieldRef<"tag", 'String'>
    readonly used: FieldRef<"tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tag findUnique
   */
  export type tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findUniqueOrThrow
   */
  export type tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findFirst
   */
  export type tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findFirstOrThrow
   */
  export type tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findMany
   */
  export type tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag create
   */
  export type tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The data needed to create a tag.
     */
    data: XOR<tagCreateInput, tagUncheckedCreateInput>
  }

  /**
   * tag createMany
   */
  export type tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag createManyAndReturn
   */
  export type tagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag update
   */
  export type tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The data needed to update a tag.
     */
    data: XOR<tagUpdateInput, tagUncheckedUpdateInput>
    /**
     * Choose, which tag to update.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag updateMany
   */
  export type tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag updateManyAndReturn
   */
  export type tagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag upsert
   */
  export type tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The filter to search for the tag to update in case it exists.
     */
    where: tagWhereUniqueInput
    /**
     * In case the tag found by the `where` argument doesn't exist, create a new tag with this data.
     */
    create: XOR<tagCreateInput, tagUncheckedCreateInput>
    /**
     * In case the tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagUpdateInput, tagUncheckedUpdateInput>
  }

  /**
   * tag delete
   */
  export type tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Filter which tag to delete.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag deleteMany
   */
  export type tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tag without action
   */
  export type tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    img: 'img',
    tag: 'tag',
    view: 'view',
    post: 'post',
    updated: 'updated',
    content: 'content'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    used: 'used'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type articleWhereInput = {
    AND?: articleWhereInput | articleWhereInput[]
    OR?: articleWhereInput[]
    NOT?: articleWhereInput | articleWhereInput[]
    id?: IntFilter<"article"> | number
    title?: StringFilter<"article"> | string
    img?: StringFilter<"article"> | string
    tag?: IntNullableListFilter<"article">
    view?: IntFilter<"article"> | number
    post?: DateTimeFilter<"article"> | Date | string
    updated?: DateTimeFilter<"article"> | Date | string
    content?: StringFilter<"article"> | string
  }

  export type articleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    tag?: SortOrder
    view?: SortOrder
    post?: SortOrder
    updated?: SortOrder
    content?: SortOrder
  }

  export type articleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articleWhereInput | articleWhereInput[]
    OR?: articleWhereInput[]
    NOT?: articleWhereInput | articleWhereInput[]
    title?: StringFilter<"article"> | string
    img?: StringFilter<"article"> | string
    tag?: IntNullableListFilter<"article">
    view?: IntFilter<"article"> | number
    post?: DateTimeFilter<"article"> | Date | string
    updated?: DateTimeFilter<"article"> | Date | string
    content?: StringFilter<"article"> | string
  }, "id">

  export type articleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    tag?: SortOrder
    view?: SortOrder
    post?: SortOrder
    updated?: SortOrder
    content?: SortOrder
    _count?: articleCountOrderByAggregateInput
    _avg?: articleAvgOrderByAggregateInput
    _max?: articleMaxOrderByAggregateInput
    _min?: articleMinOrderByAggregateInput
    _sum?: articleSumOrderByAggregateInput
  }

  export type articleScalarWhereWithAggregatesInput = {
    AND?: articleScalarWhereWithAggregatesInput | articleScalarWhereWithAggregatesInput[]
    OR?: articleScalarWhereWithAggregatesInput[]
    NOT?: articleScalarWhereWithAggregatesInput | articleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"article"> | number
    title?: StringWithAggregatesFilter<"article"> | string
    img?: StringWithAggregatesFilter<"article"> | string
    tag?: IntNullableListFilter<"article">
    view?: IntWithAggregatesFilter<"article"> | number
    post?: DateTimeWithAggregatesFilter<"article"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"article"> | Date | string
    content?: StringWithAggregatesFilter<"article"> | string
  }

  export type tagWhereInput = {
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    id?: IntFilter<"tag"> | number
    name?: StringFilter<"tag"> | string
    used?: IntFilter<"tag"> | number
  }

  export type tagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    used?: SortOrder
  }

  export type tagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    used?: IntFilter<"tag"> | number
  }, "id" | "name">

  export type tagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    used?: SortOrder
    _count?: tagCountOrderByAggregateInput
    _avg?: tagAvgOrderByAggregateInput
    _max?: tagMaxOrderByAggregateInput
    _min?: tagMinOrderByAggregateInput
    _sum?: tagSumOrderByAggregateInput
  }

  export type tagScalarWhereWithAggregatesInput = {
    AND?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    OR?: tagScalarWhereWithAggregatesInput[]
    NOT?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tag"> | number
    name?: StringWithAggregatesFilter<"tag"> | string
    used?: IntWithAggregatesFilter<"tag"> | number
  }

  export type articleCreateInput = {
    title: string
    img?: string
    tag?: articleCreatetagInput | number[]
    view?: number
    post?: Date | string
    updated?: Date | string
    content: string
  }

  export type articleUncheckedCreateInput = {
    id?: number
    title: string
    img?: string
    tag?: articleCreatetagInput | number[]
    view?: number
    post?: Date | string
    updated?: Date | string
    content: string
  }

  export type articleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    tag?: articleUpdatetagInput | number[]
    view?: IntFieldUpdateOperationsInput | number
    post?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type articleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    tag?: articleUpdatetagInput | number[]
    view?: IntFieldUpdateOperationsInput | number
    post?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type articleCreateManyInput = {
    id?: number
    title: string
    img?: string
    tag?: articleCreatetagInput | number[]
    view?: number
    post?: Date | string
    updated?: Date | string
    content: string
  }

  export type articleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    tag?: articleUpdatetagInput | number[]
    view?: IntFieldUpdateOperationsInput | number
    post?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type articleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    tag?: articleUpdatetagInput | number[]
    view?: IntFieldUpdateOperationsInput | number
    post?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type tagCreateInput = {
    name: string
    used?: number
  }

  export type tagUncheckedCreateInput = {
    id?: number
    name: string
    used?: number
  }

  export type tagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    used?: IntFieldUpdateOperationsInput | number
  }

  export type tagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    used?: IntFieldUpdateOperationsInput | number
  }

  export type tagCreateManyInput = {
    id?: number
    name: string
    used?: number
  }

  export type tagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    used?: IntFieldUpdateOperationsInput | number
  }

  export type tagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    used?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type articleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    tag?: SortOrder
    view?: SortOrder
    post?: SortOrder
    updated?: SortOrder
    content?: SortOrder
  }

  export type articleAvgOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    view?: SortOrder
  }

  export type articleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    view?: SortOrder
    post?: SortOrder
    updated?: SortOrder
    content?: SortOrder
  }

  export type articleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    view?: SortOrder
    post?: SortOrder
    updated?: SortOrder
    content?: SortOrder
  }

  export type articleSumOrderByAggregateInput = {
    id?: SortOrder
    tag?: SortOrder
    view?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type tagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    used?: SortOrder
  }

  export type tagAvgOrderByAggregateInput = {
    id?: SortOrder
    used?: SortOrder
  }

  export type tagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    used?: SortOrder
  }

  export type tagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    used?: SortOrder
  }

  export type tagSumOrderByAggregateInput = {
    id?: SortOrder
    used?: SortOrder
  }

  export type articleCreatetagInput = {
    set: number[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type articleUpdatetagInput = {
    set?: number[]
    push?: number | number[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}