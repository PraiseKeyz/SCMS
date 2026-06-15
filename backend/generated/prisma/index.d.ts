
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Zone
 * 
 */
export type Zone = $Result.DefaultSelection<Prisma.$ZonePayload>
/**
 * Model Gate
 * 
 */
export type Gate = $Result.DefaultSelection<Prisma.$GatePayload>
/**
 * Model Landmark
 * 
 */
export type Landmark = $Result.DefaultSelection<Prisma.$LandmarkPayload>
/**
 * Model ZoneStatus
 * 
 */
export type ZoneStatus = $Result.DefaultSelection<Prisma.$ZoneStatusPayload>
/**
 * Model BroadcastAlert
 * 
 */
export type BroadcastAlert = $Result.DefaultSelection<Prisma.$BroadcastAlertPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model WardenCheckin
 * 
 */
export type WardenCheckin = $Result.DefaultSelection<Prisma.$WardenCheckinPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  VISITOR: 'VISITOR',
  WARDEN: 'WARDEN',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ZoneType: {
  PARKING: 'PARKING',
  VENUE: 'VENUE',
  ROAD: 'ROAD'
};

export type ZoneType = (typeof ZoneType)[keyof typeof ZoneType]


export const ZoneStatusEnum: {
  AVAILABLE: 'AVAILABLE',
  LIMITED: 'LIMITED',
  FULL: 'FULL'
};

export type ZoneStatusEnum = (typeof ZoneStatusEnum)[keyof typeof ZoneStatusEnum]


export const GateDirection: {
  ENTRY: 'ENTRY',
  EXIT: 'EXIT',
  BOTH: 'BOTH'
};

export type GateDirection = (typeof GateDirection)[keyof typeof GateDirection]


export const LandmarkCategory: {
  HALL: 'HALL',
  CLINIC: 'CLINIC',
  TOILET: 'TOILET',
  ADMIN: 'ADMIN',
  FOOD: 'FOOD'
};

export type LandmarkCategory = (typeof LandmarkCategory)[keyof typeof LandmarkCategory]


export const IncidentType: {
  MEDICAL: 'MEDICAL',
  FIRE: 'FIRE',
  CROWD: 'CROWD',
  SECURITY: 'SECURITY',
  OTHER: 'OTHER'
};

export type IncidentType = (typeof IncidentType)[keyof typeof IncidentType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ZoneType = $Enums.ZoneType

export const ZoneType: typeof $Enums.ZoneType

export type ZoneStatusEnum = $Enums.ZoneStatusEnum

export const ZoneStatusEnum: typeof $Enums.ZoneStatusEnum

export type GateDirection = $Enums.GateDirection

export const GateDirection: typeof $Enums.GateDirection

export type LandmarkCategory = $Enums.LandmarkCategory

export const LandmarkCategory: typeof $Enums.LandmarkCategory

export type IncidentType = $Enums.IncidentType

export const IncidentType: typeof $Enums.IncidentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zone`: Exposes CRUD operations for the **Zone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zones
    * const zones = await prisma.zone.findMany()
    * ```
    */
  get zone(): Prisma.ZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gate`: Exposes CRUD operations for the **Gate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gates
    * const gates = await prisma.gate.findMany()
    * ```
    */
  get gate(): Prisma.GateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.landmark`: Exposes CRUD operations for the **Landmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Landmarks
    * const landmarks = await prisma.landmark.findMany()
    * ```
    */
  get landmark(): Prisma.LandmarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zoneStatus`: Exposes CRUD operations for the **ZoneStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZoneStatuses
    * const zoneStatuses = await prisma.zoneStatus.findMany()
    * ```
    */
  get zoneStatus(): Prisma.ZoneStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broadcastAlert`: Exposes CRUD operations for the **BroadcastAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BroadcastAlerts
    * const broadcastAlerts = await prisma.broadcastAlert.findMany()
    * ```
    */
  get broadcastAlert(): Prisma.BroadcastAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wardenCheckin`: Exposes CRUD operations for the **WardenCheckin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WardenCheckins
    * const wardenCheckins = await prisma.wardenCheckin.findMany()
    * ```
    */
  get wardenCheckin(): Prisma.WardenCheckinDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Zone: 'Zone',
    Gate: 'Gate',
    Landmark: 'Landmark',
    ZoneStatus: 'ZoneStatus',
    BroadcastAlert: 'BroadcastAlert',
    Incident: 'Incident',
    WardenCheckin: 'WardenCheckin'
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
      modelProps: "user" | "zone" | "gate" | "landmark" | "zoneStatus" | "broadcastAlert" | "incident" | "wardenCheckin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Zone: {
        payload: Prisma.$ZonePayload<ExtArgs>
        fields: Prisma.ZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findFirst: {
            args: Prisma.ZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          findMany: {
            args: Prisma.ZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          create: {
            args: Prisma.ZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          createMany: {
            args: Prisma.ZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          delete: {
            args: Prisma.ZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          update: {
            args: Prisma.ZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          deleteMany: {
            args: Prisma.ZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>[]
          }
          upsert: {
            args: Prisma.ZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonePayload>
          }
          aggregate: {
            args: Prisma.ZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZone>
          }
          groupBy: {
            args: Prisma.ZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoneCountArgs<ExtArgs>
            result: $Utils.Optional<ZoneCountAggregateOutputType> | number
          }
        }
      }
      Gate: {
        payload: Prisma.$GatePayload<ExtArgs>
        fields: Prisma.GateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>
          }
          findFirst: {
            args: Prisma.GateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>
          }
          findMany: {
            args: Prisma.GateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>[]
          }
          create: {
            args: Prisma.GateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>
          }
          createMany: {
            args: Prisma.GateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>[]
          }
          delete: {
            args: Prisma.GateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>
          }
          update: {
            args: Prisma.GateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>
          }
          deleteMany: {
            args: Prisma.GateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>[]
          }
          upsert: {
            args: Prisma.GateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GatePayload>
          }
          aggregate: {
            args: Prisma.GateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGate>
          }
          groupBy: {
            args: Prisma.GateGroupByArgs<ExtArgs>
            result: $Utils.Optional<GateGroupByOutputType>[]
          }
          count: {
            args: Prisma.GateCountArgs<ExtArgs>
            result: $Utils.Optional<GateCountAggregateOutputType> | number
          }
        }
      }
      Landmark: {
        payload: Prisma.$LandmarkPayload<ExtArgs>
        fields: Prisma.LandmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>
          }
          findFirst: {
            args: Prisma.LandmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>
          }
          findMany: {
            args: Prisma.LandmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>[]
          }
          create: {
            args: Prisma.LandmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>
          }
          createMany: {
            args: Prisma.LandmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>[]
          }
          delete: {
            args: Prisma.LandmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>
          }
          update: {
            args: Prisma.LandmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>
          }
          deleteMany: {
            args: Prisma.LandmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>[]
          }
          upsert: {
            args: Prisma.LandmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandmarkPayload>
          }
          aggregate: {
            args: Prisma.LandmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandmark>
          }
          groupBy: {
            args: Prisma.LandmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandmarkCountArgs<ExtArgs>
            result: $Utils.Optional<LandmarkCountAggregateOutputType> | number
          }
        }
      }
      ZoneStatus: {
        payload: Prisma.$ZoneStatusPayload<ExtArgs>
        fields: Prisma.ZoneStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZoneStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZoneStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>
          }
          findFirst: {
            args: Prisma.ZoneStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZoneStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>
          }
          findMany: {
            args: Prisma.ZoneStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>[]
          }
          create: {
            args: Prisma.ZoneStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>
          }
          createMany: {
            args: Prisma.ZoneStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZoneStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>[]
          }
          delete: {
            args: Prisma.ZoneStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>
          }
          update: {
            args: Prisma.ZoneStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>
          }
          deleteMany: {
            args: Prisma.ZoneStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZoneStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZoneStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>[]
          }
          upsert: {
            args: Prisma.ZoneStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZoneStatusPayload>
          }
          aggregate: {
            args: Prisma.ZoneStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZoneStatus>
          }
          groupBy: {
            args: Prisma.ZoneStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZoneStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZoneStatusCountArgs<ExtArgs>
            result: $Utils.Optional<ZoneStatusCountAggregateOutputType> | number
          }
        }
      }
      BroadcastAlert: {
        payload: Prisma.$BroadcastAlertPayload<ExtArgs>
        fields: Prisma.BroadcastAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BroadcastAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BroadcastAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>
          }
          findFirst: {
            args: Prisma.BroadcastAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BroadcastAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>
          }
          findMany: {
            args: Prisma.BroadcastAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>[]
          }
          create: {
            args: Prisma.BroadcastAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>
          }
          createMany: {
            args: Prisma.BroadcastAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BroadcastAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>[]
          }
          delete: {
            args: Prisma.BroadcastAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>
          }
          update: {
            args: Prisma.BroadcastAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>
          }
          deleteMany: {
            args: Prisma.BroadcastAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BroadcastAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BroadcastAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>[]
          }
          upsert: {
            args: Prisma.BroadcastAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastAlertPayload>
          }
          aggregate: {
            args: Prisma.BroadcastAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroadcastAlert>
          }
          groupBy: {
            args: Prisma.BroadcastAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<BroadcastAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.BroadcastAlertCountArgs<ExtArgs>
            result: $Utils.Optional<BroadcastAlertCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      WardenCheckin: {
        payload: Prisma.$WardenCheckinPayload<ExtArgs>
        fields: Prisma.WardenCheckinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WardenCheckinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WardenCheckinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>
          }
          findFirst: {
            args: Prisma.WardenCheckinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WardenCheckinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>
          }
          findMany: {
            args: Prisma.WardenCheckinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>[]
          }
          create: {
            args: Prisma.WardenCheckinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>
          }
          createMany: {
            args: Prisma.WardenCheckinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WardenCheckinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>[]
          }
          delete: {
            args: Prisma.WardenCheckinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>
          }
          update: {
            args: Prisma.WardenCheckinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>
          }
          deleteMany: {
            args: Prisma.WardenCheckinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WardenCheckinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WardenCheckinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>[]
          }
          upsert: {
            args: Prisma.WardenCheckinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardenCheckinPayload>
          }
          aggregate: {
            args: Prisma.WardenCheckinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWardenCheckin>
          }
          groupBy: {
            args: Prisma.WardenCheckinGroupByArgs<ExtArgs>
            result: $Utils.Optional<WardenCheckinGroupByOutputType>[]
          }
          count: {
            args: Prisma.WardenCheckinCountArgs<ExtArgs>
            result: $Utils.Optional<WardenCheckinCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    zone?: ZoneOmit
    gate?: GateOmit
    landmark?: LandmarkOmit
    zoneStatus?: ZoneStatusOmit
    broadcastAlert?: BroadcastAlertOmit
    incident?: IncidentOmit
    wardenCheckin?: WardenCheckinOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    zoneStatuses: number
    broadcastAlerts: number
    incidents: number
    checkins: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zoneStatuses?: boolean | UserCountOutputTypeCountZoneStatusesArgs
    broadcastAlerts?: boolean | UserCountOutputTypeCountBroadcastAlertsArgs
    incidents?: boolean | UserCountOutputTypeCountIncidentsArgs
    checkins?: boolean | UserCountOutputTypeCountCheckinsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountZoneStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneStatusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBroadcastAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcastAlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WardenCheckinWhereInput
  }


  /**
   * Count Type ZoneCountOutputType
   */

  export type ZoneCountOutputType = {
    statuses: number
    checkins: number
  }

  export type ZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statuses?: boolean | ZoneCountOutputTypeCountStatusesArgs
    checkins?: boolean | ZoneCountOutputTypeCountCheckinsArgs
  }

  // Custom InputTypes
  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneCountOutputType
     */
    select?: ZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneStatusWhereInput
  }

  /**
   * ZoneCountOutputType without action
   */
  export type ZoneCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WardenCheckinWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
    pin: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: $Enums.Role | null
    pin: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    role: number
    pin: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    pin?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    pin?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    pin?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    role: $Enums.Role
    pin: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    pin?: boolean
    createdAt?: boolean
    zoneStatuses?: boolean | User$zoneStatusesArgs<ExtArgs>
    broadcastAlerts?: boolean | User$broadcastAlertsArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    pin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    pin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    pin?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "pin" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zoneStatuses?: boolean | User$zoneStatusesArgs<ExtArgs>
    broadcastAlerts?: boolean | User$broadcastAlertsArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      zoneStatuses: Prisma.$ZoneStatusPayload<ExtArgs>[]
      broadcastAlerts: Prisma.$BroadcastAlertPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      checkins: Prisma.$WardenCheckinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: $Enums.Role
      pin: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zoneStatuses<T extends User$zoneStatusesArgs<ExtArgs> = {}>(args?: Subset<T, User$zoneStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    broadcastAlerts<T extends User$broadcastAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$broadcastAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends User$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, User$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkins<T extends User$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, User$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly pin: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.zoneStatuses
   */
  export type User$zoneStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    where?: ZoneStatusWhereInput
    orderBy?: ZoneStatusOrderByWithRelationInput | ZoneStatusOrderByWithRelationInput[]
    cursor?: ZoneStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZoneStatusScalarFieldEnum | ZoneStatusScalarFieldEnum[]
  }

  /**
   * User.broadcastAlerts
   */
  export type User$broadcastAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    where?: BroadcastAlertWhereInput
    orderBy?: BroadcastAlertOrderByWithRelationInput | BroadcastAlertOrderByWithRelationInput[]
    cursor?: BroadcastAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BroadcastAlertScalarFieldEnum | BroadcastAlertScalarFieldEnum[]
  }

  /**
   * User.incidents
   */
  export type User$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.checkins
   */
  export type User$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    where?: WardenCheckinWhereInput
    orderBy?: WardenCheckinOrderByWithRelationInput | WardenCheckinOrderByWithRelationInput[]
    cursor?: WardenCheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WardenCheckinScalarFieldEnum | WardenCheckinScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Zone
   */

  export type AggregateZone = {
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  export type ZoneAvgAggregateOutputType = {
    capacity: number | null
  }

  export type ZoneSumAggregateOutputType = {
    capacity: number | null
  }

  export type ZoneMinAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    capacity: number | null
    type: $Enums.ZoneType | null
  }

  export type ZoneMaxAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    capacity: number | null
    type: $Enums.ZoneType | null
  }

  export type ZoneCountAggregateOutputType = {
    id: number
    name: number
    label: number
    capacity: number
    type: number
    geojson: number
    _all: number
  }


  export type ZoneAvgAggregateInputType = {
    capacity?: true
  }

  export type ZoneSumAggregateInputType = {
    capacity?: true
  }

  export type ZoneMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    capacity?: true
    type?: true
  }

  export type ZoneMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    capacity?: true
    type?: true
  }

  export type ZoneCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    capacity?: true
    type?: true
    geojson?: true
    _all?: true
  }

  export type ZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zone to aggregate.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zones
    **/
    _count?: true | ZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneMaxAggregateInputType
  }

  export type GetZoneAggregateType<T extends ZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZone[P]>
      : GetScalarType<T[P], AggregateZone[P]>
  }




  export type ZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneWhereInput
    orderBy?: ZoneOrderByWithAggregationInput | ZoneOrderByWithAggregationInput[]
    by: ZoneScalarFieldEnum[] | ZoneScalarFieldEnum
    having?: ZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneCountAggregateInputType | true
    _avg?: ZoneAvgAggregateInputType
    _sum?: ZoneSumAggregateInputType
    _min?: ZoneMinAggregateInputType
    _max?: ZoneMaxAggregateInputType
  }

  export type ZoneGroupByOutputType = {
    id: string
    name: string
    label: string
    capacity: number
    type: $Enums.ZoneType
    geojson: JsonValue
    _count: ZoneCountAggregateOutputType | null
    _avg: ZoneAvgAggregateOutputType | null
    _sum: ZoneSumAggregateOutputType | null
    _min: ZoneMinAggregateOutputType | null
    _max: ZoneMaxAggregateOutputType | null
  }

  type GetZoneGroupByPayload<T extends ZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneGroupByOutputType[P]>
        }
      >
    >


  export type ZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    capacity?: boolean
    type?: boolean
    geojson?: boolean
    statuses?: boolean | Zone$statusesArgs<ExtArgs>
    checkins?: boolean | Zone$checkinsArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    capacity?: boolean
    type?: boolean
    geojson?: boolean
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    capacity?: boolean
    type?: boolean
    geojson?: boolean
  }, ExtArgs["result"]["zone"]>

  export type ZoneSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    capacity?: boolean
    type?: boolean
    geojson?: boolean
  }

  export type ZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label" | "capacity" | "type" | "geojson", ExtArgs["result"]["zone"]>
  export type ZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statuses?: boolean | Zone$statusesArgs<ExtArgs>
    checkins?: boolean | Zone$checkinsArgs<ExtArgs>
    _count?: boolean | ZoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ZoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zone"
    objects: {
      statuses: Prisma.$ZoneStatusPayload<ExtArgs>[]
      checkins: Prisma.$WardenCheckinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      label: string
      capacity: number
      type: $Enums.ZoneType
      geojson: Prisma.JsonValue
    }, ExtArgs["result"]["zone"]>
    composites: {}
  }

  type ZoneGetPayload<S extends boolean | null | undefined | ZoneDefaultArgs> = $Result.GetResult<Prisma.$ZonePayload, S>

  type ZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoneCountAggregateInputType | true
    }

  export interface ZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zone'], meta: { name: 'Zone' } }
    /**
     * Find zero or one Zone that matches the filter.
     * @param {ZoneFindUniqueArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoneFindUniqueArgs>(args: SelectSubset<T, ZoneFindUniqueArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoneFindUniqueOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoneFindFirstArgs>(args?: SelectSubset<T, ZoneFindFirstArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindFirstOrThrowArgs} args - Arguments to find a Zone
     * @example
     * // Get one Zone
     * const zone = await prisma.zone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zones
     * const zones = await prisma.zone.findMany()
     * 
     * // Get first 10 Zones
     * const zones = await prisma.zone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoneWithIdOnly = await prisma.zone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoneFindManyArgs>(args?: SelectSubset<T, ZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zone.
     * @param {ZoneCreateArgs} args - Arguments to create a Zone.
     * @example
     * // Create one Zone
     * const Zone = await prisma.zone.create({
     *   data: {
     *     // ... data to create a Zone
     *   }
     * })
     * 
     */
    create<T extends ZoneCreateArgs>(args: SelectSubset<T, ZoneCreateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zones.
     * @param {ZoneCreateManyArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoneCreateManyArgs>(args?: SelectSubset<T, ZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zones and returns the data saved in the database.
     * @param {ZoneCreateManyAndReturnArgs} args - Arguments to create many Zones.
     * @example
     * // Create many Zones
     * const zone = await prisma.zone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zones and only return the `id`
     * const zoneWithIdOnly = await prisma.zone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZoneCreateManyAndReturnArgs>(args?: SelectSubset<T, ZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zone.
     * @param {ZoneDeleteArgs} args - Arguments to delete one Zone.
     * @example
     * // Delete one Zone
     * const Zone = await prisma.zone.delete({
     *   where: {
     *     // ... filter to delete one Zone
     *   }
     * })
     * 
     */
    delete<T extends ZoneDeleteArgs>(args: SelectSubset<T, ZoneDeleteArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zone.
     * @param {ZoneUpdateArgs} args - Arguments to update one Zone.
     * @example
     * // Update one Zone
     * const zone = await prisma.zone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoneUpdateArgs>(args: SelectSubset<T, ZoneUpdateArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zones.
     * @param {ZoneDeleteManyArgs} args - Arguments to filter Zones to delete.
     * @example
     * // Delete a few Zones
     * const { count } = await prisma.zone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoneDeleteManyArgs>(args?: SelectSubset<T, ZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoneUpdateManyArgs>(args: SelectSubset<T, ZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zones and returns the data updated in the database.
     * @param {ZoneUpdateManyAndReturnArgs} args - Arguments to update many Zones.
     * @example
     * // Update many Zones
     * const zone = await prisma.zone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zones and only return the `id`
     * const zoneWithIdOnly = await prisma.zone.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZoneUpdateManyAndReturnArgs>(args: SelectSubset<T, ZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zone.
     * @param {ZoneUpsertArgs} args - Arguments to update or create a Zone.
     * @example
     * // Update or create a Zone
     * const zone = await prisma.zone.upsert({
     *   create: {
     *     // ... data to create a Zone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zone we want to update
     *   }
     * })
     */
    upsert<T extends ZoneUpsertArgs>(args: SelectSubset<T, ZoneUpsertArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneCountArgs} args - Arguments to filter Zones to count.
     * @example
     * // Count the number of Zones
     * const count = await prisma.zone.count({
     *   where: {
     *     // ... the filter for the Zones we want to count
     *   }
     * })
    **/
    count<T extends ZoneCountArgs>(
      args?: Subset<T, ZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoneAggregateArgs>(args: Subset<T, ZoneAggregateArgs>): Prisma.PrismaPromise<GetZoneAggregateType<T>>

    /**
     * Group by Zone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneGroupByArgs} args - Group by arguments.
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
      T extends ZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoneGroupByArgs['orderBy'] }
        : { orderBy?: ZoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zone model
   */
  readonly fields: ZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statuses<T extends Zone$statusesArgs<ExtArgs> = {}>(args?: Subset<T, Zone$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkins<T extends Zone$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, Zone$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Zone model
   */
  interface ZoneFieldRefs {
    readonly id: FieldRef<"Zone", 'String'>
    readonly name: FieldRef<"Zone", 'String'>
    readonly label: FieldRef<"Zone", 'String'>
    readonly capacity: FieldRef<"Zone", 'Int'>
    readonly type: FieldRef<"Zone", 'ZoneType'>
    readonly geojson: FieldRef<"Zone", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Zone findUnique
   */
  export type ZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findUniqueOrThrow
   */
  export type ZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone findFirst
   */
  export type ZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findFirstOrThrow
   */
  export type ZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zone to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zones.
     */
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone findMany
   */
  export type ZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter, which Zones to fetch.
     */
    where?: ZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zones to fetch.
     */
    orderBy?: ZoneOrderByWithRelationInput | ZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zones.
     */
    cursor?: ZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zones.
     */
    skip?: number
    distinct?: ZoneScalarFieldEnum | ZoneScalarFieldEnum[]
  }

  /**
   * Zone create
   */
  export type ZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Zone.
     */
    data: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
  }

  /**
   * Zone createMany
   */
  export type ZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zone createManyAndReturn
   */
  export type ZoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * The data used to create many Zones.
     */
    data: ZoneCreateManyInput | ZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zone update
   */
  export type ZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Zone.
     */
    data: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
    /**
     * Choose, which Zone to update.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone updateMany
   */
  export type ZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to update.
     */
    limit?: number
  }

  /**
   * Zone updateManyAndReturn
   */
  export type ZoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * The data used to update Zones.
     */
    data: XOR<ZoneUpdateManyMutationInput, ZoneUncheckedUpdateManyInput>
    /**
     * Filter which Zones to update
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to update.
     */
    limit?: number
  }

  /**
   * Zone upsert
   */
  export type ZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Zone to update in case it exists.
     */
    where: ZoneWhereUniqueInput
    /**
     * In case the Zone found by the `where` argument doesn't exist, create a new Zone with this data.
     */
    create: XOR<ZoneCreateInput, ZoneUncheckedCreateInput>
    /**
     * In case the Zone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoneUpdateInput, ZoneUncheckedUpdateInput>
  }

  /**
   * Zone delete
   */
  export type ZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
    /**
     * Filter which Zone to delete.
     */
    where: ZoneWhereUniqueInput
  }

  /**
   * Zone deleteMany
   */
  export type ZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zones to delete
     */
    where?: ZoneWhereInput
    /**
     * Limit how many Zones to delete.
     */
    limit?: number
  }

  /**
   * Zone.statuses
   */
  export type Zone$statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    where?: ZoneStatusWhereInput
    orderBy?: ZoneStatusOrderByWithRelationInput | ZoneStatusOrderByWithRelationInput[]
    cursor?: ZoneStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZoneStatusScalarFieldEnum | ZoneStatusScalarFieldEnum[]
  }

  /**
   * Zone.checkins
   */
  export type Zone$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    where?: WardenCheckinWhereInput
    orderBy?: WardenCheckinOrderByWithRelationInput | WardenCheckinOrderByWithRelationInput[]
    cursor?: WardenCheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WardenCheckinScalarFieldEnum | WardenCheckinScalarFieldEnum[]
  }

  /**
   * Zone without action
   */
  export type ZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zone
     */
    select?: ZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zone
     */
    omit?: ZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneInclude<ExtArgs> | null
  }


  /**
   * Model Gate
   */

  export type AggregateGate = {
    _count: GateCountAggregateOutputType | null
    _avg: GateAvgAggregateOutputType | null
    _sum: GateSumAggregateOutputType | null
    _min: GateMinAggregateOutputType | null
    _max: GateMaxAggregateOutputType | null
  }

  export type GateAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type GateSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type GateMinAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    direction: $Enums.GateDirection | null
  }

  export type GateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    label: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    direction: $Enums.GateDirection | null
  }

  export type GateCountAggregateOutputType = {
    id: number
    name: number
    label: number
    latitude: number
    longitude: number
    direction: number
    _all: number
  }


  export type GateAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type GateSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type GateMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    latitude?: true
    longitude?: true
    direction?: true
  }

  export type GateMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    latitude?: true
    longitude?: true
    direction?: true
  }

  export type GateCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    latitude?: true
    longitude?: true
    direction?: true
    _all?: true
  }

  export type GateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gate to aggregate.
     */
    where?: GateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gates to fetch.
     */
    orderBy?: GateOrderByWithRelationInput | GateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gates
    **/
    _count?: true | GateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GateMaxAggregateInputType
  }

  export type GetGateAggregateType<T extends GateAggregateArgs> = {
        [P in keyof T & keyof AggregateGate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGate[P]>
      : GetScalarType<T[P], AggregateGate[P]>
  }




  export type GateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GateWhereInput
    orderBy?: GateOrderByWithAggregationInput | GateOrderByWithAggregationInput[]
    by: GateScalarFieldEnum[] | GateScalarFieldEnum
    having?: GateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GateCountAggregateInputType | true
    _avg?: GateAvgAggregateInputType
    _sum?: GateSumAggregateInputType
    _min?: GateMinAggregateInputType
    _max?: GateMaxAggregateInputType
  }

  export type GateGroupByOutputType = {
    id: string
    name: string
    label: string
    latitude: Decimal
    longitude: Decimal
    direction: $Enums.GateDirection
    _count: GateCountAggregateOutputType | null
    _avg: GateAvgAggregateOutputType | null
    _sum: GateSumAggregateOutputType | null
    _min: GateMinAggregateOutputType | null
    _max: GateMaxAggregateOutputType | null
  }

  type GetGateGroupByPayload<T extends GateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GateGroupByOutputType[P]>
            : GetScalarType<T[P], GateGroupByOutputType[P]>
        }
      >
    >


  export type GateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    latitude?: boolean
    longitude?: boolean
    direction?: boolean
  }, ExtArgs["result"]["gate"]>

  export type GateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    latitude?: boolean
    longitude?: boolean
    direction?: boolean
  }, ExtArgs["result"]["gate"]>

  export type GateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    latitude?: boolean
    longitude?: boolean
    direction?: boolean
  }, ExtArgs["result"]["gate"]>

  export type GateSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    latitude?: boolean
    longitude?: boolean
    direction?: boolean
  }

  export type GateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "label" | "latitude" | "longitude" | "direction", ExtArgs["result"]["gate"]>

  export type $GatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      label: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      direction: $Enums.GateDirection
    }, ExtArgs["result"]["gate"]>
    composites: {}
  }

  type GateGetPayload<S extends boolean | null | undefined | GateDefaultArgs> = $Result.GetResult<Prisma.$GatePayload, S>

  type GateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GateCountAggregateInputType | true
    }

  export interface GateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gate'], meta: { name: 'Gate' } }
    /**
     * Find zero or one Gate that matches the filter.
     * @param {GateFindUniqueArgs} args - Arguments to find a Gate
     * @example
     * // Get one Gate
     * const gate = await prisma.gate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GateFindUniqueArgs>(args: SelectSubset<T, GateFindUniqueArgs<ExtArgs>>): Prisma__GateClient<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GateFindUniqueOrThrowArgs} args - Arguments to find a Gate
     * @example
     * // Get one Gate
     * const gate = await prisma.gate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GateFindUniqueOrThrowArgs>(args: SelectSubset<T, GateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GateClient<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateFindFirstArgs} args - Arguments to find a Gate
     * @example
     * // Get one Gate
     * const gate = await prisma.gate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GateFindFirstArgs>(args?: SelectSubset<T, GateFindFirstArgs<ExtArgs>>): Prisma__GateClient<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateFindFirstOrThrowArgs} args - Arguments to find a Gate
     * @example
     * // Get one Gate
     * const gate = await prisma.gate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GateFindFirstOrThrowArgs>(args?: SelectSubset<T, GateFindFirstOrThrowArgs<ExtArgs>>): Prisma__GateClient<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gates
     * const gates = await prisma.gate.findMany()
     * 
     * // Get first 10 Gates
     * const gates = await prisma.gate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gateWithIdOnly = await prisma.gate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GateFindManyArgs>(args?: SelectSubset<T, GateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gate.
     * @param {GateCreateArgs} args - Arguments to create a Gate.
     * @example
     * // Create one Gate
     * const Gate = await prisma.gate.create({
     *   data: {
     *     // ... data to create a Gate
     *   }
     * })
     * 
     */
    create<T extends GateCreateArgs>(args: SelectSubset<T, GateCreateArgs<ExtArgs>>): Prisma__GateClient<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gates.
     * @param {GateCreateManyArgs} args - Arguments to create many Gates.
     * @example
     * // Create many Gates
     * const gate = await prisma.gate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GateCreateManyArgs>(args?: SelectSubset<T, GateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gates and returns the data saved in the database.
     * @param {GateCreateManyAndReturnArgs} args - Arguments to create many Gates.
     * @example
     * // Create many Gates
     * const gate = await prisma.gate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gates and only return the `id`
     * const gateWithIdOnly = await prisma.gate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GateCreateManyAndReturnArgs>(args?: SelectSubset<T, GateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gate.
     * @param {GateDeleteArgs} args - Arguments to delete one Gate.
     * @example
     * // Delete one Gate
     * const Gate = await prisma.gate.delete({
     *   where: {
     *     // ... filter to delete one Gate
     *   }
     * })
     * 
     */
    delete<T extends GateDeleteArgs>(args: SelectSubset<T, GateDeleteArgs<ExtArgs>>): Prisma__GateClient<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gate.
     * @param {GateUpdateArgs} args - Arguments to update one Gate.
     * @example
     * // Update one Gate
     * const gate = await prisma.gate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GateUpdateArgs>(args: SelectSubset<T, GateUpdateArgs<ExtArgs>>): Prisma__GateClient<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gates.
     * @param {GateDeleteManyArgs} args - Arguments to filter Gates to delete.
     * @example
     * // Delete a few Gates
     * const { count } = await prisma.gate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GateDeleteManyArgs>(args?: SelectSubset<T, GateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gates
     * const gate = await prisma.gate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GateUpdateManyArgs>(args: SelectSubset<T, GateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gates and returns the data updated in the database.
     * @param {GateUpdateManyAndReturnArgs} args - Arguments to update many Gates.
     * @example
     * // Update many Gates
     * const gate = await prisma.gate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gates and only return the `id`
     * const gateWithIdOnly = await prisma.gate.updateManyAndReturn({
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
    updateManyAndReturn<T extends GateUpdateManyAndReturnArgs>(args: SelectSubset<T, GateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gate.
     * @param {GateUpsertArgs} args - Arguments to update or create a Gate.
     * @example
     * // Update or create a Gate
     * const gate = await prisma.gate.upsert({
     *   create: {
     *     // ... data to create a Gate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gate we want to update
     *   }
     * })
     */
    upsert<T extends GateUpsertArgs>(args: SelectSubset<T, GateUpsertArgs<ExtArgs>>): Prisma__GateClient<$Result.GetResult<Prisma.$GatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateCountArgs} args - Arguments to filter Gates to count.
     * @example
     * // Count the number of Gates
     * const count = await prisma.gate.count({
     *   where: {
     *     // ... the filter for the Gates we want to count
     *   }
     * })
    **/
    count<T extends GateCountArgs>(
      args?: Subset<T, GateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GateAggregateArgs>(args: Subset<T, GateAggregateArgs>): Prisma.PrismaPromise<GetGateAggregateType<T>>

    /**
     * Group by Gate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateGroupByArgs} args - Group by arguments.
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
      T extends GateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GateGroupByArgs['orderBy'] }
        : { orderBy?: GateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gate model
   */
  readonly fields: GateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Gate model
   */
  interface GateFieldRefs {
    readonly id: FieldRef<"Gate", 'String'>
    readonly name: FieldRef<"Gate", 'String'>
    readonly label: FieldRef<"Gate", 'String'>
    readonly latitude: FieldRef<"Gate", 'Decimal'>
    readonly longitude: FieldRef<"Gate", 'Decimal'>
    readonly direction: FieldRef<"Gate", 'GateDirection'>
  }
    

  // Custom InputTypes
  /**
   * Gate findUnique
   */
  export type GateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * Filter, which Gate to fetch.
     */
    where: GateWhereUniqueInput
  }

  /**
   * Gate findUniqueOrThrow
   */
  export type GateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * Filter, which Gate to fetch.
     */
    where: GateWhereUniqueInput
  }

  /**
   * Gate findFirst
   */
  export type GateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * Filter, which Gate to fetch.
     */
    where?: GateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gates to fetch.
     */
    orderBy?: GateOrderByWithRelationInput | GateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gates.
     */
    cursor?: GateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gates.
     */
    distinct?: GateScalarFieldEnum | GateScalarFieldEnum[]
  }

  /**
   * Gate findFirstOrThrow
   */
  export type GateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * Filter, which Gate to fetch.
     */
    where?: GateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gates to fetch.
     */
    orderBy?: GateOrderByWithRelationInput | GateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gates.
     */
    cursor?: GateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gates.
     */
    distinct?: GateScalarFieldEnum | GateScalarFieldEnum[]
  }

  /**
   * Gate findMany
   */
  export type GateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * Filter, which Gates to fetch.
     */
    where?: GateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gates to fetch.
     */
    orderBy?: GateOrderByWithRelationInput | GateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gates.
     */
    cursor?: GateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gates.
     */
    skip?: number
    distinct?: GateScalarFieldEnum | GateScalarFieldEnum[]
  }

  /**
   * Gate create
   */
  export type GateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * The data needed to create a Gate.
     */
    data: XOR<GateCreateInput, GateUncheckedCreateInput>
  }

  /**
   * Gate createMany
   */
  export type GateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gates.
     */
    data: GateCreateManyInput | GateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gate createManyAndReturn
   */
  export type GateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * The data used to create many Gates.
     */
    data: GateCreateManyInput | GateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gate update
   */
  export type GateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * The data needed to update a Gate.
     */
    data: XOR<GateUpdateInput, GateUncheckedUpdateInput>
    /**
     * Choose, which Gate to update.
     */
    where: GateWhereUniqueInput
  }

  /**
   * Gate updateMany
   */
  export type GateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gates.
     */
    data: XOR<GateUpdateManyMutationInput, GateUncheckedUpdateManyInput>
    /**
     * Filter which Gates to update
     */
    where?: GateWhereInput
    /**
     * Limit how many Gates to update.
     */
    limit?: number
  }

  /**
   * Gate updateManyAndReturn
   */
  export type GateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * The data used to update Gates.
     */
    data: XOR<GateUpdateManyMutationInput, GateUncheckedUpdateManyInput>
    /**
     * Filter which Gates to update
     */
    where?: GateWhereInput
    /**
     * Limit how many Gates to update.
     */
    limit?: number
  }

  /**
   * Gate upsert
   */
  export type GateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * The filter to search for the Gate to update in case it exists.
     */
    where: GateWhereUniqueInput
    /**
     * In case the Gate found by the `where` argument doesn't exist, create a new Gate with this data.
     */
    create: XOR<GateCreateInput, GateUncheckedCreateInput>
    /**
     * In case the Gate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GateUpdateInput, GateUncheckedUpdateInput>
  }

  /**
   * Gate delete
   */
  export type GateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
    /**
     * Filter which Gate to delete.
     */
    where: GateWhereUniqueInput
  }

  /**
   * Gate deleteMany
   */
  export type GateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gates to delete
     */
    where?: GateWhereInput
    /**
     * Limit how many Gates to delete.
     */
    limit?: number
  }

  /**
   * Gate without action
   */
  export type GateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gate
     */
    select?: GateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gate
     */
    omit?: GateOmit<ExtArgs> | null
  }


  /**
   * Model Landmark
   */

  export type AggregateLandmark = {
    _count: LandmarkCountAggregateOutputType | null
    _avg: LandmarkAvgAggregateOutputType | null
    _sum: LandmarkSumAggregateOutputType | null
    _min: LandmarkMinAggregateOutputType | null
    _max: LandmarkMaxAggregateOutputType | null
  }

  export type LandmarkAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LandmarkSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type LandmarkMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.LandmarkCategory | null
    latitude: Decimal | null
    longitude: Decimal | null
    accessibleRoute: boolean | null
  }

  export type LandmarkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.LandmarkCategory | null
    latitude: Decimal | null
    longitude: Decimal | null
    accessibleRoute: boolean | null
  }

  export type LandmarkCountAggregateOutputType = {
    id: number
    name: number
    category: number
    latitude: number
    longitude: number
    accessibleRoute: number
    _all: number
  }


  export type LandmarkAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type LandmarkSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type LandmarkMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    latitude?: true
    longitude?: true
    accessibleRoute?: true
  }

  export type LandmarkMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    latitude?: true
    longitude?: true
    accessibleRoute?: true
  }

  export type LandmarkCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    latitude?: true
    longitude?: true
    accessibleRoute?: true
    _all?: true
  }

  export type LandmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Landmark to aggregate.
     */
    where?: LandmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landmarks to fetch.
     */
    orderBy?: LandmarkOrderByWithRelationInput | LandmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Landmarks
    **/
    _count?: true | LandmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandmarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandmarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandmarkMaxAggregateInputType
  }

  export type GetLandmarkAggregateType<T extends LandmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateLandmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandmark[P]>
      : GetScalarType<T[P], AggregateLandmark[P]>
  }




  export type LandmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandmarkWhereInput
    orderBy?: LandmarkOrderByWithAggregationInput | LandmarkOrderByWithAggregationInput[]
    by: LandmarkScalarFieldEnum[] | LandmarkScalarFieldEnum
    having?: LandmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandmarkCountAggregateInputType | true
    _avg?: LandmarkAvgAggregateInputType
    _sum?: LandmarkSumAggregateInputType
    _min?: LandmarkMinAggregateInputType
    _max?: LandmarkMaxAggregateInputType
  }

  export type LandmarkGroupByOutputType = {
    id: string
    name: string
    category: $Enums.LandmarkCategory
    latitude: Decimal
    longitude: Decimal
    accessibleRoute: boolean
    _count: LandmarkCountAggregateOutputType | null
    _avg: LandmarkAvgAggregateOutputType | null
    _sum: LandmarkSumAggregateOutputType | null
    _min: LandmarkMinAggregateOutputType | null
    _max: LandmarkMaxAggregateOutputType | null
  }

  type GetLandmarkGroupByPayload<T extends LandmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandmarkGroupByOutputType[P]>
            : GetScalarType<T[P], LandmarkGroupByOutputType[P]>
        }
      >
    >


  export type LandmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    latitude?: boolean
    longitude?: boolean
    accessibleRoute?: boolean
  }, ExtArgs["result"]["landmark"]>

  export type LandmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    latitude?: boolean
    longitude?: boolean
    accessibleRoute?: boolean
  }, ExtArgs["result"]["landmark"]>

  export type LandmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    latitude?: boolean
    longitude?: boolean
    accessibleRoute?: boolean
  }, ExtArgs["result"]["landmark"]>

  export type LandmarkSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    latitude?: boolean
    longitude?: boolean
    accessibleRoute?: boolean
  }

  export type LandmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "latitude" | "longitude" | "accessibleRoute", ExtArgs["result"]["landmark"]>

  export type $LandmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Landmark"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: $Enums.LandmarkCategory
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      accessibleRoute: boolean
    }, ExtArgs["result"]["landmark"]>
    composites: {}
  }

  type LandmarkGetPayload<S extends boolean | null | undefined | LandmarkDefaultArgs> = $Result.GetResult<Prisma.$LandmarkPayload, S>

  type LandmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandmarkCountAggregateInputType | true
    }

  export interface LandmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Landmark'], meta: { name: 'Landmark' } }
    /**
     * Find zero or one Landmark that matches the filter.
     * @param {LandmarkFindUniqueArgs} args - Arguments to find a Landmark
     * @example
     * // Get one Landmark
     * const landmark = await prisma.landmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandmarkFindUniqueArgs>(args: SelectSubset<T, LandmarkFindUniqueArgs<ExtArgs>>): Prisma__LandmarkClient<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Landmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandmarkFindUniqueOrThrowArgs} args - Arguments to find a Landmark
     * @example
     * // Get one Landmark
     * const landmark = await prisma.landmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, LandmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandmarkClient<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandmarkFindFirstArgs} args - Arguments to find a Landmark
     * @example
     * // Get one Landmark
     * const landmark = await prisma.landmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandmarkFindFirstArgs>(args?: SelectSubset<T, LandmarkFindFirstArgs<ExtArgs>>): Prisma__LandmarkClient<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandmarkFindFirstOrThrowArgs} args - Arguments to find a Landmark
     * @example
     * // Get one Landmark
     * const landmark = await prisma.landmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, LandmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandmarkClient<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Landmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Landmarks
     * const landmarks = await prisma.landmark.findMany()
     * 
     * // Get first 10 Landmarks
     * const landmarks = await prisma.landmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landmarkWithIdOnly = await prisma.landmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandmarkFindManyArgs>(args?: SelectSubset<T, LandmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Landmark.
     * @param {LandmarkCreateArgs} args - Arguments to create a Landmark.
     * @example
     * // Create one Landmark
     * const Landmark = await prisma.landmark.create({
     *   data: {
     *     // ... data to create a Landmark
     *   }
     * })
     * 
     */
    create<T extends LandmarkCreateArgs>(args: SelectSubset<T, LandmarkCreateArgs<ExtArgs>>): Prisma__LandmarkClient<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Landmarks.
     * @param {LandmarkCreateManyArgs} args - Arguments to create many Landmarks.
     * @example
     * // Create many Landmarks
     * const landmark = await prisma.landmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandmarkCreateManyArgs>(args?: SelectSubset<T, LandmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Landmarks and returns the data saved in the database.
     * @param {LandmarkCreateManyAndReturnArgs} args - Arguments to create many Landmarks.
     * @example
     * // Create many Landmarks
     * const landmark = await prisma.landmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Landmarks and only return the `id`
     * const landmarkWithIdOnly = await prisma.landmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, LandmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Landmark.
     * @param {LandmarkDeleteArgs} args - Arguments to delete one Landmark.
     * @example
     * // Delete one Landmark
     * const Landmark = await prisma.landmark.delete({
     *   where: {
     *     // ... filter to delete one Landmark
     *   }
     * })
     * 
     */
    delete<T extends LandmarkDeleteArgs>(args: SelectSubset<T, LandmarkDeleteArgs<ExtArgs>>): Prisma__LandmarkClient<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Landmark.
     * @param {LandmarkUpdateArgs} args - Arguments to update one Landmark.
     * @example
     * // Update one Landmark
     * const landmark = await prisma.landmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandmarkUpdateArgs>(args: SelectSubset<T, LandmarkUpdateArgs<ExtArgs>>): Prisma__LandmarkClient<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Landmarks.
     * @param {LandmarkDeleteManyArgs} args - Arguments to filter Landmarks to delete.
     * @example
     * // Delete a few Landmarks
     * const { count } = await prisma.landmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandmarkDeleteManyArgs>(args?: SelectSubset<T, LandmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Landmarks
     * const landmark = await prisma.landmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandmarkUpdateManyArgs>(args: SelectSubset<T, LandmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landmarks and returns the data updated in the database.
     * @param {LandmarkUpdateManyAndReturnArgs} args - Arguments to update many Landmarks.
     * @example
     * // Update many Landmarks
     * const landmark = await prisma.landmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Landmarks and only return the `id`
     * const landmarkWithIdOnly = await prisma.landmark.updateManyAndReturn({
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
    updateManyAndReturn<T extends LandmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, LandmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Landmark.
     * @param {LandmarkUpsertArgs} args - Arguments to update or create a Landmark.
     * @example
     * // Update or create a Landmark
     * const landmark = await prisma.landmark.upsert({
     *   create: {
     *     // ... data to create a Landmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Landmark we want to update
     *   }
     * })
     */
    upsert<T extends LandmarkUpsertArgs>(args: SelectSubset<T, LandmarkUpsertArgs<ExtArgs>>): Prisma__LandmarkClient<$Result.GetResult<Prisma.$LandmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Landmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandmarkCountArgs} args - Arguments to filter Landmarks to count.
     * @example
     * // Count the number of Landmarks
     * const count = await prisma.landmark.count({
     *   where: {
     *     // ... the filter for the Landmarks we want to count
     *   }
     * })
    **/
    count<T extends LandmarkCountArgs>(
      args?: Subset<T, LandmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Landmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandmarkAggregateArgs>(args: Subset<T, LandmarkAggregateArgs>): Prisma.PrismaPromise<GetLandmarkAggregateType<T>>

    /**
     * Group by Landmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandmarkGroupByArgs} args - Group by arguments.
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
      T extends LandmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandmarkGroupByArgs['orderBy'] }
        : { orderBy?: LandmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LandmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Landmark model
   */
  readonly fields: LandmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Landmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Landmark model
   */
  interface LandmarkFieldRefs {
    readonly id: FieldRef<"Landmark", 'String'>
    readonly name: FieldRef<"Landmark", 'String'>
    readonly category: FieldRef<"Landmark", 'LandmarkCategory'>
    readonly latitude: FieldRef<"Landmark", 'Decimal'>
    readonly longitude: FieldRef<"Landmark", 'Decimal'>
    readonly accessibleRoute: FieldRef<"Landmark", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Landmark findUnique
   */
  export type LandmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * Filter, which Landmark to fetch.
     */
    where: LandmarkWhereUniqueInput
  }

  /**
   * Landmark findUniqueOrThrow
   */
  export type LandmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * Filter, which Landmark to fetch.
     */
    where: LandmarkWhereUniqueInput
  }

  /**
   * Landmark findFirst
   */
  export type LandmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * Filter, which Landmark to fetch.
     */
    where?: LandmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landmarks to fetch.
     */
    orderBy?: LandmarkOrderByWithRelationInput | LandmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landmarks.
     */
    cursor?: LandmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landmarks.
     */
    distinct?: LandmarkScalarFieldEnum | LandmarkScalarFieldEnum[]
  }

  /**
   * Landmark findFirstOrThrow
   */
  export type LandmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * Filter, which Landmark to fetch.
     */
    where?: LandmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landmarks to fetch.
     */
    orderBy?: LandmarkOrderByWithRelationInput | LandmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landmarks.
     */
    cursor?: LandmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landmarks.
     */
    distinct?: LandmarkScalarFieldEnum | LandmarkScalarFieldEnum[]
  }

  /**
   * Landmark findMany
   */
  export type LandmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * Filter, which Landmarks to fetch.
     */
    where?: LandmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landmarks to fetch.
     */
    orderBy?: LandmarkOrderByWithRelationInput | LandmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Landmarks.
     */
    cursor?: LandmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landmarks.
     */
    skip?: number
    distinct?: LandmarkScalarFieldEnum | LandmarkScalarFieldEnum[]
  }

  /**
   * Landmark create
   */
  export type LandmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * The data needed to create a Landmark.
     */
    data: XOR<LandmarkCreateInput, LandmarkUncheckedCreateInput>
  }

  /**
   * Landmark createMany
   */
  export type LandmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Landmarks.
     */
    data: LandmarkCreateManyInput | LandmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Landmark createManyAndReturn
   */
  export type LandmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * The data used to create many Landmarks.
     */
    data: LandmarkCreateManyInput | LandmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Landmark update
   */
  export type LandmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * The data needed to update a Landmark.
     */
    data: XOR<LandmarkUpdateInput, LandmarkUncheckedUpdateInput>
    /**
     * Choose, which Landmark to update.
     */
    where: LandmarkWhereUniqueInput
  }

  /**
   * Landmark updateMany
   */
  export type LandmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Landmarks.
     */
    data: XOR<LandmarkUpdateManyMutationInput, LandmarkUncheckedUpdateManyInput>
    /**
     * Filter which Landmarks to update
     */
    where?: LandmarkWhereInput
    /**
     * Limit how many Landmarks to update.
     */
    limit?: number
  }

  /**
   * Landmark updateManyAndReturn
   */
  export type LandmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * The data used to update Landmarks.
     */
    data: XOR<LandmarkUpdateManyMutationInput, LandmarkUncheckedUpdateManyInput>
    /**
     * Filter which Landmarks to update
     */
    where?: LandmarkWhereInput
    /**
     * Limit how many Landmarks to update.
     */
    limit?: number
  }

  /**
   * Landmark upsert
   */
  export type LandmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * The filter to search for the Landmark to update in case it exists.
     */
    where: LandmarkWhereUniqueInput
    /**
     * In case the Landmark found by the `where` argument doesn't exist, create a new Landmark with this data.
     */
    create: XOR<LandmarkCreateInput, LandmarkUncheckedCreateInput>
    /**
     * In case the Landmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandmarkUpdateInput, LandmarkUncheckedUpdateInput>
  }

  /**
   * Landmark delete
   */
  export type LandmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
    /**
     * Filter which Landmark to delete.
     */
    where: LandmarkWhereUniqueInput
  }

  /**
   * Landmark deleteMany
   */
  export type LandmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Landmarks to delete
     */
    where?: LandmarkWhereInput
    /**
     * Limit how many Landmarks to delete.
     */
    limit?: number
  }

  /**
   * Landmark without action
   */
  export type LandmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landmark
     */
    select?: LandmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landmark
     */
    omit?: LandmarkOmit<ExtArgs> | null
  }


  /**
   * Model ZoneStatus
   */

  export type AggregateZoneStatus = {
    _count: ZoneStatusCountAggregateOutputType | null
    _min: ZoneStatusMinAggregateOutputType | null
    _max: ZoneStatusMaxAggregateOutputType | null
  }

  export type ZoneStatusMinAggregateOutputType = {
    id: string | null
    zoneId: string | null
    status: $Enums.ZoneStatusEnum | null
    updatedById: string | null
    updatedAt: Date | null
  }

  export type ZoneStatusMaxAggregateOutputType = {
    id: string | null
    zoneId: string | null
    status: $Enums.ZoneStatusEnum | null
    updatedById: string | null
    updatedAt: Date | null
  }

  export type ZoneStatusCountAggregateOutputType = {
    id: number
    zoneId: number
    status: number
    updatedById: number
    updatedAt: number
    _all: number
  }


  export type ZoneStatusMinAggregateInputType = {
    id?: true
    zoneId?: true
    status?: true
    updatedById?: true
    updatedAt?: true
  }

  export type ZoneStatusMaxAggregateInputType = {
    id?: true
    zoneId?: true
    status?: true
    updatedById?: true
    updatedAt?: true
  }

  export type ZoneStatusCountAggregateInputType = {
    id?: true
    zoneId?: true
    status?: true
    updatedById?: true
    updatedAt?: true
    _all?: true
  }

  export type ZoneStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoneStatus to aggregate.
     */
    where?: ZoneStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoneStatuses to fetch.
     */
    orderBy?: ZoneStatusOrderByWithRelationInput | ZoneStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZoneStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoneStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoneStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZoneStatuses
    **/
    _count?: true | ZoneStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZoneStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZoneStatusMaxAggregateInputType
  }

  export type GetZoneStatusAggregateType<T extends ZoneStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateZoneStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZoneStatus[P]>
      : GetScalarType<T[P], AggregateZoneStatus[P]>
  }




  export type ZoneStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZoneStatusWhereInput
    orderBy?: ZoneStatusOrderByWithAggregationInput | ZoneStatusOrderByWithAggregationInput[]
    by: ZoneStatusScalarFieldEnum[] | ZoneStatusScalarFieldEnum
    having?: ZoneStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZoneStatusCountAggregateInputType | true
    _min?: ZoneStatusMinAggregateInputType
    _max?: ZoneStatusMaxAggregateInputType
  }

  export type ZoneStatusGroupByOutputType = {
    id: string
    zoneId: string
    status: $Enums.ZoneStatusEnum
    updatedById: string
    updatedAt: Date
    _count: ZoneStatusCountAggregateOutputType | null
    _min: ZoneStatusMinAggregateOutputType | null
    _max: ZoneStatusMaxAggregateOutputType | null
  }

  type GetZoneStatusGroupByPayload<T extends ZoneStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZoneStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZoneStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZoneStatusGroupByOutputType[P]>
            : GetScalarType<T[P], ZoneStatusGroupByOutputType[P]>
        }
      >
    >


  export type ZoneStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    status?: boolean
    updatedById?: boolean
    updatedAt?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zoneStatus"]>

  export type ZoneStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    status?: boolean
    updatedById?: boolean
    updatedAt?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zoneStatus"]>

  export type ZoneStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zoneId?: boolean
    status?: boolean
    updatedById?: boolean
    updatedAt?: boolean
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zoneStatus"]>

  export type ZoneStatusSelectScalar = {
    id?: boolean
    zoneId?: boolean
    status?: boolean
    updatedById?: boolean
    updatedAt?: boolean
  }

  export type ZoneStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zoneId" | "status" | "updatedById" | "updatedAt", ExtArgs["result"]["zoneStatus"]>
  export type ZoneStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ZoneStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ZoneStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
    updatedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ZoneStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZoneStatus"
    objects: {
      zone: Prisma.$ZonePayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zoneId: string
      status: $Enums.ZoneStatusEnum
      updatedById: string
      updatedAt: Date
    }, ExtArgs["result"]["zoneStatus"]>
    composites: {}
  }

  type ZoneStatusGetPayload<S extends boolean | null | undefined | ZoneStatusDefaultArgs> = $Result.GetResult<Prisma.$ZoneStatusPayload, S>

  type ZoneStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZoneStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZoneStatusCountAggregateInputType | true
    }

  export interface ZoneStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZoneStatus'], meta: { name: 'ZoneStatus' } }
    /**
     * Find zero or one ZoneStatus that matches the filter.
     * @param {ZoneStatusFindUniqueArgs} args - Arguments to find a ZoneStatus
     * @example
     * // Get one ZoneStatus
     * const zoneStatus = await prisma.zoneStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZoneStatusFindUniqueArgs>(args: SelectSubset<T, ZoneStatusFindUniqueArgs<ExtArgs>>): Prisma__ZoneStatusClient<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZoneStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZoneStatusFindUniqueOrThrowArgs} args - Arguments to find a ZoneStatus
     * @example
     * // Get one ZoneStatus
     * const zoneStatus = await prisma.zoneStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZoneStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, ZoneStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZoneStatusClient<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZoneStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneStatusFindFirstArgs} args - Arguments to find a ZoneStatus
     * @example
     * // Get one ZoneStatus
     * const zoneStatus = await prisma.zoneStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZoneStatusFindFirstArgs>(args?: SelectSubset<T, ZoneStatusFindFirstArgs<ExtArgs>>): Prisma__ZoneStatusClient<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZoneStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneStatusFindFirstOrThrowArgs} args - Arguments to find a ZoneStatus
     * @example
     * // Get one ZoneStatus
     * const zoneStatus = await prisma.zoneStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZoneStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, ZoneStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZoneStatusClient<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZoneStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZoneStatuses
     * const zoneStatuses = await prisma.zoneStatus.findMany()
     * 
     * // Get first 10 ZoneStatuses
     * const zoneStatuses = await prisma.zoneStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zoneStatusWithIdOnly = await prisma.zoneStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZoneStatusFindManyArgs>(args?: SelectSubset<T, ZoneStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZoneStatus.
     * @param {ZoneStatusCreateArgs} args - Arguments to create a ZoneStatus.
     * @example
     * // Create one ZoneStatus
     * const ZoneStatus = await prisma.zoneStatus.create({
     *   data: {
     *     // ... data to create a ZoneStatus
     *   }
     * })
     * 
     */
    create<T extends ZoneStatusCreateArgs>(args: SelectSubset<T, ZoneStatusCreateArgs<ExtArgs>>): Prisma__ZoneStatusClient<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZoneStatuses.
     * @param {ZoneStatusCreateManyArgs} args - Arguments to create many ZoneStatuses.
     * @example
     * // Create many ZoneStatuses
     * const zoneStatus = await prisma.zoneStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZoneStatusCreateManyArgs>(args?: SelectSubset<T, ZoneStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZoneStatuses and returns the data saved in the database.
     * @param {ZoneStatusCreateManyAndReturnArgs} args - Arguments to create many ZoneStatuses.
     * @example
     * // Create many ZoneStatuses
     * const zoneStatus = await prisma.zoneStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZoneStatuses and only return the `id`
     * const zoneStatusWithIdOnly = await prisma.zoneStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZoneStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, ZoneStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZoneStatus.
     * @param {ZoneStatusDeleteArgs} args - Arguments to delete one ZoneStatus.
     * @example
     * // Delete one ZoneStatus
     * const ZoneStatus = await prisma.zoneStatus.delete({
     *   where: {
     *     // ... filter to delete one ZoneStatus
     *   }
     * })
     * 
     */
    delete<T extends ZoneStatusDeleteArgs>(args: SelectSubset<T, ZoneStatusDeleteArgs<ExtArgs>>): Prisma__ZoneStatusClient<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZoneStatus.
     * @param {ZoneStatusUpdateArgs} args - Arguments to update one ZoneStatus.
     * @example
     * // Update one ZoneStatus
     * const zoneStatus = await prisma.zoneStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZoneStatusUpdateArgs>(args: SelectSubset<T, ZoneStatusUpdateArgs<ExtArgs>>): Prisma__ZoneStatusClient<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZoneStatuses.
     * @param {ZoneStatusDeleteManyArgs} args - Arguments to filter ZoneStatuses to delete.
     * @example
     * // Delete a few ZoneStatuses
     * const { count } = await prisma.zoneStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZoneStatusDeleteManyArgs>(args?: SelectSubset<T, ZoneStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoneStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZoneStatuses
     * const zoneStatus = await prisma.zoneStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZoneStatusUpdateManyArgs>(args: SelectSubset<T, ZoneStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZoneStatuses and returns the data updated in the database.
     * @param {ZoneStatusUpdateManyAndReturnArgs} args - Arguments to update many ZoneStatuses.
     * @example
     * // Update many ZoneStatuses
     * const zoneStatus = await prisma.zoneStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZoneStatuses and only return the `id`
     * const zoneStatusWithIdOnly = await prisma.zoneStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZoneStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, ZoneStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZoneStatus.
     * @param {ZoneStatusUpsertArgs} args - Arguments to update or create a ZoneStatus.
     * @example
     * // Update or create a ZoneStatus
     * const zoneStatus = await prisma.zoneStatus.upsert({
     *   create: {
     *     // ... data to create a ZoneStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZoneStatus we want to update
     *   }
     * })
     */
    upsert<T extends ZoneStatusUpsertArgs>(args: SelectSubset<T, ZoneStatusUpsertArgs<ExtArgs>>): Prisma__ZoneStatusClient<$Result.GetResult<Prisma.$ZoneStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZoneStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneStatusCountArgs} args - Arguments to filter ZoneStatuses to count.
     * @example
     * // Count the number of ZoneStatuses
     * const count = await prisma.zoneStatus.count({
     *   where: {
     *     // ... the filter for the ZoneStatuses we want to count
     *   }
     * })
    **/
    count<T extends ZoneStatusCountArgs>(
      args?: Subset<T, ZoneStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZoneStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZoneStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZoneStatusAggregateArgs>(args: Subset<T, ZoneStatusAggregateArgs>): Prisma.PrismaPromise<GetZoneStatusAggregateType<T>>

    /**
     * Group by ZoneStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZoneStatusGroupByArgs} args - Group by arguments.
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
      T extends ZoneStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZoneStatusGroupByArgs['orderBy'] }
        : { orderBy?: ZoneStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZoneStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZoneStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZoneStatus model
   */
  readonly fields: ZoneStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZoneStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZoneStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ZoneStatus model
   */
  interface ZoneStatusFieldRefs {
    readonly id: FieldRef<"ZoneStatus", 'String'>
    readonly zoneId: FieldRef<"ZoneStatus", 'String'>
    readonly status: FieldRef<"ZoneStatus", 'ZoneStatusEnum'>
    readonly updatedById: FieldRef<"ZoneStatus", 'String'>
    readonly updatedAt: FieldRef<"ZoneStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ZoneStatus findUnique
   */
  export type ZoneStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * Filter, which ZoneStatus to fetch.
     */
    where: ZoneStatusWhereUniqueInput
  }

  /**
   * ZoneStatus findUniqueOrThrow
   */
  export type ZoneStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * Filter, which ZoneStatus to fetch.
     */
    where: ZoneStatusWhereUniqueInput
  }

  /**
   * ZoneStatus findFirst
   */
  export type ZoneStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * Filter, which ZoneStatus to fetch.
     */
    where?: ZoneStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoneStatuses to fetch.
     */
    orderBy?: ZoneStatusOrderByWithRelationInput | ZoneStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoneStatuses.
     */
    cursor?: ZoneStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoneStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoneStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoneStatuses.
     */
    distinct?: ZoneStatusScalarFieldEnum | ZoneStatusScalarFieldEnum[]
  }

  /**
   * ZoneStatus findFirstOrThrow
   */
  export type ZoneStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * Filter, which ZoneStatus to fetch.
     */
    where?: ZoneStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoneStatuses to fetch.
     */
    orderBy?: ZoneStatusOrderByWithRelationInput | ZoneStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZoneStatuses.
     */
    cursor?: ZoneStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoneStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoneStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZoneStatuses.
     */
    distinct?: ZoneStatusScalarFieldEnum | ZoneStatusScalarFieldEnum[]
  }

  /**
   * ZoneStatus findMany
   */
  export type ZoneStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * Filter, which ZoneStatuses to fetch.
     */
    where?: ZoneStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZoneStatuses to fetch.
     */
    orderBy?: ZoneStatusOrderByWithRelationInput | ZoneStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZoneStatuses.
     */
    cursor?: ZoneStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZoneStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZoneStatuses.
     */
    skip?: number
    distinct?: ZoneStatusScalarFieldEnum | ZoneStatusScalarFieldEnum[]
  }

  /**
   * ZoneStatus create
   */
  export type ZoneStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a ZoneStatus.
     */
    data: XOR<ZoneStatusCreateInput, ZoneStatusUncheckedCreateInput>
  }

  /**
   * ZoneStatus createMany
   */
  export type ZoneStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZoneStatuses.
     */
    data: ZoneStatusCreateManyInput | ZoneStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZoneStatus createManyAndReturn
   */
  export type ZoneStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * The data used to create many ZoneStatuses.
     */
    data: ZoneStatusCreateManyInput | ZoneStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZoneStatus update
   */
  export type ZoneStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a ZoneStatus.
     */
    data: XOR<ZoneStatusUpdateInput, ZoneStatusUncheckedUpdateInput>
    /**
     * Choose, which ZoneStatus to update.
     */
    where: ZoneStatusWhereUniqueInput
  }

  /**
   * ZoneStatus updateMany
   */
  export type ZoneStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZoneStatuses.
     */
    data: XOR<ZoneStatusUpdateManyMutationInput, ZoneStatusUncheckedUpdateManyInput>
    /**
     * Filter which ZoneStatuses to update
     */
    where?: ZoneStatusWhereInput
    /**
     * Limit how many ZoneStatuses to update.
     */
    limit?: number
  }

  /**
   * ZoneStatus updateManyAndReturn
   */
  export type ZoneStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * The data used to update ZoneStatuses.
     */
    data: XOR<ZoneStatusUpdateManyMutationInput, ZoneStatusUncheckedUpdateManyInput>
    /**
     * Filter which ZoneStatuses to update
     */
    where?: ZoneStatusWhereInput
    /**
     * Limit how many ZoneStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZoneStatus upsert
   */
  export type ZoneStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the ZoneStatus to update in case it exists.
     */
    where: ZoneStatusWhereUniqueInput
    /**
     * In case the ZoneStatus found by the `where` argument doesn't exist, create a new ZoneStatus with this data.
     */
    create: XOR<ZoneStatusCreateInput, ZoneStatusUncheckedCreateInput>
    /**
     * In case the ZoneStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZoneStatusUpdateInput, ZoneStatusUncheckedUpdateInput>
  }

  /**
   * ZoneStatus delete
   */
  export type ZoneStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
    /**
     * Filter which ZoneStatus to delete.
     */
    where: ZoneStatusWhereUniqueInput
  }

  /**
   * ZoneStatus deleteMany
   */
  export type ZoneStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZoneStatuses to delete
     */
    where?: ZoneStatusWhereInput
    /**
     * Limit how many ZoneStatuses to delete.
     */
    limit?: number
  }

  /**
   * ZoneStatus without action
   */
  export type ZoneStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZoneStatus
     */
    select?: ZoneStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZoneStatus
     */
    omit?: ZoneStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZoneStatusInclude<ExtArgs> | null
  }


  /**
   * Model BroadcastAlert
   */

  export type AggregateBroadcastAlert = {
    _count: BroadcastAlertCountAggregateOutputType | null
    _avg: BroadcastAlertAvgAggregateOutputType | null
    _sum: BroadcastAlertSumAggregateOutputType | null
    _min: BroadcastAlertMinAggregateOutputType | null
    _max: BroadcastAlertMaxAggregateOutputType | null
  }

  export type BroadcastAlertAvgAggregateOutputType = {
    radiusMeters: number | null
    centerLat: Decimal | null
    centerLng: Decimal | null
  }

  export type BroadcastAlertSumAggregateOutputType = {
    radiusMeters: number | null
    centerLat: Decimal | null
    centerLng: Decimal | null
  }

  export type BroadcastAlertMinAggregateOutputType = {
    id: string | null
    message: string | null
    radiusMeters: number | null
    centerLat: Decimal | null
    centerLng: Decimal | null
    createdById: string | null
    expiresAt: Date | null
    active: boolean | null
    createdAt: Date | null
  }

  export type BroadcastAlertMaxAggregateOutputType = {
    id: string | null
    message: string | null
    radiusMeters: number | null
    centerLat: Decimal | null
    centerLng: Decimal | null
    createdById: string | null
    expiresAt: Date | null
    active: boolean | null
    createdAt: Date | null
  }

  export type BroadcastAlertCountAggregateOutputType = {
    id: number
    message: number
    radiusMeters: number
    centerLat: number
    centerLng: number
    createdById: number
    expiresAt: number
    active: number
    createdAt: number
    _all: number
  }


  export type BroadcastAlertAvgAggregateInputType = {
    radiusMeters?: true
    centerLat?: true
    centerLng?: true
  }

  export type BroadcastAlertSumAggregateInputType = {
    radiusMeters?: true
    centerLat?: true
    centerLng?: true
  }

  export type BroadcastAlertMinAggregateInputType = {
    id?: true
    message?: true
    radiusMeters?: true
    centerLat?: true
    centerLng?: true
    createdById?: true
    expiresAt?: true
    active?: true
    createdAt?: true
  }

  export type BroadcastAlertMaxAggregateInputType = {
    id?: true
    message?: true
    radiusMeters?: true
    centerLat?: true
    centerLng?: true
    createdById?: true
    expiresAt?: true
    active?: true
    createdAt?: true
  }

  export type BroadcastAlertCountAggregateInputType = {
    id?: true
    message?: true
    radiusMeters?: true
    centerLat?: true
    centerLng?: true
    createdById?: true
    expiresAt?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type BroadcastAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastAlert to aggregate.
     */
    where?: BroadcastAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastAlerts to fetch.
     */
    orderBy?: BroadcastAlertOrderByWithRelationInput | BroadcastAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BroadcastAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BroadcastAlerts
    **/
    _count?: true | BroadcastAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BroadcastAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BroadcastAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BroadcastAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BroadcastAlertMaxAggregateInputType
  }

  export type GetBroadcastAlertAggregateType<T extends BroadcastAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateBroadcastAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcastAlert[P]>
      : GetScalarType<T[P], AggregateBroadcastAlert[P]>
  }




  export type BroadcastAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcastAlertWhereInput
    orderBy?: BroadcastAlertOrderByWithAggregationInput | BroadcastAlertOrderByWithAggregationInput[]
    by: BroadcastAlertScalarFieldEnum[] | BroadcastAlertScalarFieldEnum
    having?: BroadcastAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BroadcastAlertCountAggregateInputType | true
    _avg?: BroadcastAlertAvgAggregateInputType
    _sum?: BroadcastAlertSumAggregateInputType
    _min?: BroadcastAlertMinAggregateInputType
    _max?: BroadcastAlertMaxAggregateInputType
  }

  export type BroadcastAlertGroupByOutputType = {
    id: string
    message: string
    radiusMeters: number
    centerLat: Decimal
    centerLng: Decimal
    createdById: string
    expiresAt: Date
    active: boolean
    createdAt: Date
    _count: BroadcastAlertCountAggregateOutputType | null
    _avg: BroadcastAlertAvgAggregateOutputType | null
    _sum: BroadcastAlertSumAggregateOutputType | null
    _min: BroadcastAlertMinAggregateOutputType | null
    _max: BroadcastAlertMaxAggregateOutputType | null
  }

  type GetBroadcastAlertGroupByPayload<T extends BroadcastAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BroadcastAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BroadcastAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BroadcastAlertGroupByOutputType[P]>
            : GetScalarType<T[P], BroadcastAlertGroupByOutputType[P]>
        }
      >
    >


  export type BroadcastAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    radiusMeters?: boolean
    centerLat?: boolean
    centerLng?: boolean
    createdById?: boolean
    expiresAt?: boolean
    active?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastAlert"]>

  export type BroadcastAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    radiusMeters?: boolean
    centerLat?: boolean
    centerLng?: boolean
    createdById?: boolean
    expiresAt?: boolean
    active?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastAlert"]>

  export type BroadcastAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    radiusMeters?: boolean
    centerLat?: boolean
    centerLng?: boolean
    createdById?: boolean
    expiresAt?: boolean
    active?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastAlert"]>

  export type BroadcastAlertSelectScalar = {
    id?: boolean
    message?: boolean
    radiusMeters?: boolean
    centerLat?: boolean
    centerLng?: boolean
    createdById?: boolean
    expiresAt?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type BroadcastAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "radiusMeters" | "centerLat" | "centerLng" | "createdById" | "expiresAt" | "active" | "createdAt", ExtArgs["result"]["broadcastAlert"]>
  export type BroadcastAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BroadcastAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BroadcastAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BroadcastAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BroadcastAlert"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      radiusMeters: number
      centerLat: Prisma.Decimal
      centerLng: Prisma.Decimal
      createdById: string
      expiresAt: Date
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["broadcastAlert"]>
    composites: {}
  }

  type BroadcastAlertGetPayload<S extends boolean | null | undefined | BroadcastAlertDefaultArgs> = $Result.GetResult<Prisma.$BroadcastAlertPayload, S>

  type BroadcastAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BroadcastAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BroadcastAlertCountAggregateInputType | true
    }

  export interface BroadcastAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BroadcastAlert'], meta: { name: 'BroadcastAlert' } }
    /**
     * Find zero or one BroadcastAlert that matches the filter.
     * @param {BroadcastAlertFindUniqueArgs} args - Arguments to find a BroadcastAlert
     * @example
     * // Get one BroadcastAlert
     * const broadcastAlert = await prisma.broadcastAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BroadcastAlertFindUniqueArgs>(args: SelectSubset<T, BroadcastAlertFindUniqueArgs<ExtArgs>>): Prisma__BroadcastAlertClient<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BroadcastAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BroadcastAlertFindUniqueOrThrowArgs} args - Arguments to find a BroadcastAlert
     * @example
     * // Get one BroadcastAlert
     * const broadcastAlert = await prisma.broadcastAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BroadcastAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, BroadcastAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BroadcastAlertClient<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAlertFindFirstArgs} args - Arguments to find a BroadcastAlert
     * @example
     * // Get one BroadcastAlert
     * const broadcastAlert = await prisma.broadcastAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BroadcastAlertFindFirstArgs>(args?: SelectSubset<T, BroadcastAlertFindFirstArgs<ExtArgs>>): Prisma__BroadcastAlertClient<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAlertFindFirstOrThrowArgs} args - Arguments to find a BroadcastAlert
     * @example
     * // Get one BroadcastAlert
     * const broadcastAlert = await prisma.broadcastAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BroadcastAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, BroadcastAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__BroadcastAlertClient<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BroadcastAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BroadcastAlerts
     * const broadcastAlerts = await prisma.broadcastAlert.findMany()
     * 
     * // Get first 10 BroadcastAlerts
     * const broadcastAlerts = await prisma.broadcastAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const broadcastAlertWithIdOnly = await prisma.broadcastAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BroadcastAlertFindManyArgs>(args?: SelectSubset<T, BroadcastAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BroadcastAlert.
     * @param {BroadcastAlertCreateArgs} args - Arguments to create a BroadcastAlert.
     * @example
     * // Create one BroadcastAlert
     * const BroadcastAlert = await prisma.broadcastAlert.create({
     *   data: {
     *     // ... data to create a BroadcastAlert
     *   }
     * })
     * 
     */
    create<T extends BroadcastAlertCreateArgs>(args: SelectSubset<T, BroadcastAlertCreateArgs<ExtArgs>>): Prisma__BroadcastAlertClient<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BroadcastAlerts.
     * @param {BroadcastAlertCreateManyArgs} args - Arguments to create many BroadcastAlerts.
     * @example
     * // Create many BroadcastAlerts
     * const broadcastAlert = await prisma.broadcastAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BroadcastAlertCreateManyArgs>(args?: SelectSubset<T, BroadcastAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BroadcastAlerts and returns the data saved in the database.
     * @param {BroadcastAlertCreateManyAndReturnArgs} args - Arguments to create many BroadcastAlerts.
     * @example
     * // Create many BroadcastAlerts
     * const broadcastAlert = await prisma.broadcastAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BroadcastAlerts and only return the `id`
     * const broadcastAlertWithIdOnly = await prisma.broadcastAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BroadcastAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, BroadcastAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BroadcastAlert.
     * @param {BroadcastAlertDeleteArgs} args - Arguments to delete one BroadcastAlert.
     * @example
     * // Delete one BroadcastAlert
     * const BroadcastAlert = await prisma.broadcastAlert.delete({
     *   where: {
     *     // ... filter to delete one BroadcastAlert
     *   }
     * })
     * 
     */
    delete<T extends BroadcastAlertDeleteArgs>(args: SelectSubset<T, BroadcastAlertDeleteArgs<ExtArgs>>): Prisma__BroadcastAlertClient<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BroadcastAlert.
     * @param {BroadcastAlertUpdateArgs} args - Arguments to update one BroadcastAlert.
     * @example
     * // Update one BroadcastAlert
     * const broadcastAlert = await prisma.broadcastAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BroadcastAlertUpdateArgs>(args: SelectSubset<T, BroadcastAlertUpdateArgs<ExtArgs>>): Prisma__BroadcastAlertClient<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BroadcastAlerts.
     * @param {BroadcastAlertDeleteManyArgs} args - Arguments to filter BroadcastAlerts to delete.
     * @example
     * // Delete a few BroadcastAlerts
     * const { count } = await prisma.broadcastAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BroadcastAlertDeleteManyArgs>(args?: SelectSubset<T, BroadcastAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BroadcastAlerts
     * const broadcastAlert = await prisma.broadcastAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BroadcastAlertUpdateManyArgs>(args: SelectSubset<T, BroadcastAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastAlerts and returns the data updated in the database.
     * @param {BroadcastAlertUpdateManyAndReturnArgs} args - Arguments to update many BroadcastAlerts.
     * @example
     * // Update many BroadcastAlerts
     * const broadcastAlert = await prisma.broadcastAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BroadcastAlerts and only return the `id`
     * const broadcastAlertWithIdOnly = await prisma.broadcastAlert.updateManyAndReturn({
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
    updateManyAndReturn<T extends BroadcastAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, BroadcastAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BroadcastAlert.
     * @param {BroadcastAlertUpsertArgs} args - Arguments to update or create a BroadcastAlert.
     * @example
     * // Update or create a BroadcastAlert
     * const broadcastAlert = await prisma.broadcastAlert.upsert({
     *   create: {
     *     // ... data to create a BroadcastAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BroadcastAlert we want to update
     *   }
     * })
     */
    upsert<T extends BroadcastAlertUpsertArgs>(args: SelectSubset<T, BroadcastAlertUpsertArgs<ExtArgs>>): Prisma__BroadcastAlertClient<$Result.GetResult<Prisma.$BroadcastAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BroadcastAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAlertCountArgs} args - Arguments to filter BroadcastAlerts to count.
     * @example
     * // Count the number of BroadcastAlerts
     * const count = await prisma.broadcastAlert.count({
     *   where: {
     *     // ... the filter for the BroadcastAlerts we want to count
     *   }
     * })
    **/
    count<T extends BroadcastAlertCountArgs>(
      args?: Subset<T, BroadcastAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BroadcastAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BroadcastAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BroadcastAlertAggregateArgs>(args: Subset<T, BroadcastAlertAggregateArgs>): Prisma.PrismaPromise<GetBroadcastAlertAggregateType<T>>

    /**
     * Group by BroadcastAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastAlertGroupByArgs} args - Group by arguments.
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
      T extends BroadcastAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BroadcastAlertGroupByArgs['orderBy'] }
        : { orderBy?: BroadcastAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BroadcastAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcastAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BroadcastAlert model
   */
  readonly fields: BroadcastAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BroadcastAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BroadcastAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BroadcastAlert model
   */
  interface BroadcastAlertFieldRefs {
    readonly id: FieldRef<"BroadcastAlert", 'String'>
    readonly message: FieldRef<"BroadcastAlert", 'String'>
    readonly radiusMeters: FieldRef<"BroadcastAlert", 'Int'>
    readonly centerLat: FieldRef<"BroadcastAlert", 'Decimal'>
    readonly centerLng: FieldRef<"BroadcastAlert", 'Decimal'>
    readonly createdById: FieldRef<"BroadcastAlert", 'String'>
    readonly expiresAt: FieldRef<"BroadcastAlert", 'DateTime'>
    readonly active: FieldRef<"BroadcastAlert", 'Boolean'>
    readonly createdAt: FieldRef<"BroadcastAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BroadcastAlert findUnique
   */
  export type BroadcastAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAlert to fetch.
     */
    where: BroadcastAlertWhereUniqueInput
  }

  /**
   * BroadcastAlert findUniqueOrThrow
   */
  export type BroadcastAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAlert to fetch.
     */
    where: BroadcastAlertWhereUniqueInput
  }

  /**
   * BroadcastAlert findFirst
   */
  export type BroadcastAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAlert to fetch.
     */
    where?: BroadcastAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastAlerts to fetch.
     */
    orderBy?: BroadcastAlertOrderByWithRelationInput | BroadcastAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastAlerts.
     */
    cursor?: BroadcastAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastAlerts.
     */
    distinct?: BroadcastAlertScalarFieldEnum | BroadcastAlertScalarFieldEnum[]
  }

  /**
   * BroadcastAlert findFirstOrThrow
   */
  export type BroadcastAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAlert to fetch.
     */
    where?: BroadcastAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastAlerts to fetch.
     */
    orderBy?: BroadcastAlertOrderByWithRelationInput | BroadcastAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastAlerts.
     */
    cursor?: BroadcastAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastAlerts.
     */
    distinct?: BroadcastAlertScalarFieldEnum | BroadcastAlertScalarFieldEnum[]
  }

  /**
   * BroadcastAlert findMany
   */
  export type BroadcastAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastAlerts to fetch.
     */
    where?: BroadcastAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastAlerts to fetch.
     */
    orderBy?: BroadcastAlertOrderByWithRelationInput | BroadcastAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BroadcastAlerts.
     */
    cursor?: BroadcastAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastAlerts.
     */
    skip?: number
    distinct?: BroadcastAlertScalarFieldEnum | BroadcastAlertScalarFieldEnum[]
  }

  /**
   * BroadcastAlert create
   */
  export type BroadcastAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a BroadcastAlert.
     */
    data: XOR<BroadcastAlertCreateInput, BroadcastAlertUncheckedCreateInput>
  }

  /**
   * BroadcastAlert createMany
   */
  export type BroadcastAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BroadcastAlerts.
     */
    data: BroadcastAlertCreateManyInput | BroadcastAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BroadcastAlert createManyAndReturn
   */
  export type BroadcastAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * The data used to create many BroadcastAlerts.
     */
    data: BroadcastAlertCreateManyInput | BroadcastAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BroadcastAlert update
   */
  export type BroadcastAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a BroadcastAlert.
     */
    data: XOR<BroadcastAlertUpdateInput, BroadcastAlertUncheckedUpdateInput>
    /**
     * Choose, which BroadcastAlert to update.
     */
    where: BroadcastAlertWhereUniqueInput
  }

  /**
   * BroadcastAlert updateMany
   */
  export type BroadcastAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BroadcastAlerts.
     */
    data: XOR<BroadcastAlertUpdateManyMutationInput, BroadcastAlertUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastAlerts to update
     */
    where?: BroadcastAlertWhereInput
    /**
     * Limit how many BroadcastAlerts to update.
     */
    limit?: number
  }

  /**
   * BroadcastAlert updateManyAndReturn
   */
  export type BroadcastAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * The data used to update BroadcastAlerts.
     */
    data: XOR<BroadcastAlertUpdateManyMutationInput, BroadcastAlertUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastAlerts to update
     */
    where?: BroadcastAlertWhereInput
    /**
     * Limit how many BroadcastAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BroadcastAlert upsert
   */
  export type BroadcastAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the BroadcastAlert to update in case it exists.
     */
    where: BroadcastAlertWhereUniqueInput
    /**
     * In case the BroadcastAlert found by the `where` argument doesn't exist, create a new BroadcastAlert with this data.
     */
    create: XOR<BroadcastAlertCreateInput, BroadcastAlertUncheckedCreateInput>
    /**
     * In case the BroadcastAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BroadcastAlertUpdateInput, BroadcastAlertUncheckedUpdateInput>
  }

  /**
   * BroadcastAlert delete
   */
  export type BroadcastAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
    /**
     * Filter which BroadcastAlert to delete.
     */
    where: BroadcastAlertWhereUniqueInput
  }

  /**
   * BroadcastAlert deleteMany
   */
  export type BroadcastAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastAlerts to delete
     */
    where?: BroadcastAlertWhereInput
    /**
     * Limit how many BroadcastAlerts to delete.
     */
    limit?: number
  }

  /**
   * BroadcastAlert without action
   */
  export type BroadcastAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastAlert
     */
    select?: BroadcastAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastAlert
     */
    omit?: BroadcastAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastAlertInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type IncidentSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    type: $Enums.IncidentType | null
    description: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    reportedById: string | null
    timestamp: Date | null
    resolved: boolean | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    type: $Enums.IncidentType | null
    description: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    reportedById: string | null
    timestamp: Date | null
    resolved: boolean | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    type: number
    description: number
    latitude: number
    longitude: number
    reportedById: number
    timestamp: number
    resolved: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type IncidentSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    type?: true
    description?: true
    latitude?: true
    longitude?: true
    reportedById?: true
    timestamp?: true
    resolved?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    type?: true
    description?: true
    latitude?: true
    longitude?: true
    reportedById?: true
    timestamp?: true
    resolved?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    type?: true
    description?: true
    latitude?: true
    longitude?: true
    reportedById?: true
    timestamp?: true
    resolved?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    type: $Enums.IncidentType
    description: string
    latitude: Decimal
    longitude: Decimal
    reportedById: string
    timestamp: Date
    resolved: boolean
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    reportedById?: boolean
    timestamp?: boolean
    resolved?: boolean
    reportedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    reportedById?: boolean
    timestamp?: boolean
    resolved?: boolean
    reportedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    reportedById?: boolean
    timestamp?: boolean
    resolved?: boolean
    reportedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    type?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    reportedById?: boolean
    timestamp?: boolean
    resolved?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "description" | "latitude" | "longitude" | "reportedById" | "timestamp" | "resolved", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      reportedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.IncidentType
      description: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      reportedById: string
      timestamp: Date
      resolved: boolean
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
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
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
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
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reportedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly type: FieldRef<"Incident", 'IncidentType'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly latitude: FieldRef<"Incident", 'Decimal'>
    readonly longitude: FieldRef<"Incident", 'Decimal'>
    readonly reportedById: FieldRef<"Incident", 'String'>
    readonly timestamp: FieldRef<"Incident", 'DateTime'>
    readonly resolved: FieldRef<"Incident", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model WardenCheckin
   */

  export type AggregateWardenCheckin = {
    _count: WardenCheckinCountAggregateOutputType | null
    _min: WardenCheckinMinAggregateOutputType | null
    _max: WardenCheckinMaxAggregateOutputType | null
  }

  export type WardenCheckinMinAggregateOutputType = {
    id: string | null
    wardenId: string | null
    zoneId: string | null
    checkedIn: Date | null
  }

  export type WardenCheckinMaxAggregateOutputType = {
    id: string | null
    wardenId: string | null
    zoneId: string | null
    checkedIn: Date | null
  }

  export type WardenCheckinCountAggregateOutputType = {
    id: number
    wardenId: number
    zoneId: number
    checkedIn: number
    _all: number
  }


  export type WardenCheckinMinAggregateInputType = {
    id?: true
    wardenId?: true
    zoneId?: true
    checkedIn?: true
  }

  export type WardenCheckinMaxAggregateInputType = {
    id?: true
    wardenId?: true
    zoneId?: true
    checkedIn?: true
  }

  export type WardenCheckinCountAggregateInputType = {
    id?: true
    wardenId?: true
    zoneId?: true
    checkedIn?: true
    _all?: true
  }

  export type WardenCheckinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WardenCheckin to aggregate.
     */
    where?: WardenCheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardenCheckins to fetch.
     */
    orderBy?: WardenCheckinOrderByWithRelationInput | WardenCheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WardenCheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardenCheckins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardenCheckins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WardenCheckins
    **/
    _count?: true | WardenCheckinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WardenCheckinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WardenCheckinMaxAggregateInputType
  }

  export type GetWardenCheckinAggregateType<T extends WardenCheckinAggregateArgs> = {
        [P in keyof T & keyof AggregateWardenCheckin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWardenCheckin[P]>
      : GetScalarType<T[P], AggregateWardenCheckin[P]>
  }




  export type WardenCheckinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WardenCheckinWhereInput
    orderBy?: WardenCheckinOrderByWithAggregationInput | WardenCheckinOrderByWithAggregationInput[]
    by: WardenCheckinScalarFieldEnum[] | WardenCheckinScalarFieldEnum
    having?: WardenCheckinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WardenCheckinCountAggregateInputType | true
    _min?: WardenCheckinMinAggregateInputType
    _max?: WardenCheckinMaxAggregateInputType
  }

  export type WardenCheckinGroupByOutputType = {
    id: string
    wardenId: string
    zoneId: string
    checkedIn: Date
    _count: WardenCheckinCountAggregateOutputType | null
    _min: WardenCheckinMinAggregateOutputType | null
    _max: WardenCheckinMaxAggregateOutputType | null
  }

  type GetWardenCheckinGroupByPayload<T extends WardenCheckinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WardenCheckinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WardenCheckinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WardenCheckinGroupByOutputType[P]>
            : GetScalarType<T[P], WardenCheckinGroupByOutputType[P]>
        }
      >
    >


  export type WardenCheckinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wardenId?: boolean
    zoneId?: boolean
    checkedIn?: boolean
    warden?: boolean | UserDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wardenCheckin"]>

  export type WardenCheckinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wardenId?: boolean
    zoneId?: boolean
    checkedIn?: boolean
    warden?: boolean | UserDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wardenCheckin"]>

  export type WardenCheckinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wardenId?: boolean
    zoneId?: boolean
    checkedIn?: boolean
    warden?: boolean | UserDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wardenCheckin"]>

  export type WardenCheckinSelectScalar = {
    id?: boolean
    wardenId?: boolean
    zoneId?: boolean
    checkedIn?: boolean
  }

  export type WardenCheckinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wardenId" | "zoneId" | "checkedIn", ExtArgs["result"]["wardenCheckin"]>
  export type WardenCheckinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warden?: boolean | UserDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }
  export type WardenCheckinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warden?: boolean | UserDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }
  export type WardenCheckinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warden?: boolean | UserDefaultArgs<ExtArgs>
    zone?: boolean | ZoneDefaultArgs<ExtArgs>
  }

  export type $WardenCheckinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WardenCheckin"
    objects: {
      warden: Prisma.$UserPayload<ExtArgs>
      zone: Prisma.$ZonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wardenId: string
      zoneId: string
      checkedIn: Date
    }, ExtArgs["result"]["wardenCheckin"]>
    composites: {}
  }

  type WardenCheckinGetPayload<S extends boolean | null | undefined | WardenCheckinDefaultArgs> = $Result.GetResult<Prisma.$WardenCheckinPayload, S>

  type WardenCheckinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WardenCheckinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WardenCheckinCountAggregateInputType | true
    }

  export interface WardenCheckinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WardenCheckin'], meta: { name: 'WardenCheckin' } }
    /**
     * Find zero or one WardenCheckin that matches the filter.
     * @param {WardenCheckinFindUniqueArgs} args - Arguments to find a WardenCheckin
     * @example
     * // Get one WardenCheckin
     * const wardenCheckin = await prisma.wardenCheckin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WardenCheckinFindUniqueArgs>(args: SelectSubset<T, WardenCheckinFindUniqueArgs<ExtArgs>>): Prisma__WardenCheckinClient<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WardenCheckin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WardenCheckinFindUniqueOrThrowArgs} args - Arguments to find a WardenCheckin
     * @example
     * // Get one WardenCheckin
     * const wardenCheckin = await prisma.wardenCheckin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WardenCheckinFindUniqueOrThrowArgs>(args: SelectSubset<T, WardenCheckinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WardenCheckinClient<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WardenCheckin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenCheckinFindFirstArgs} args - Arguments to find a WardenCheckin
     * @example
     * // Get one WardenCheckin
     * const wardenCheckin = await prisma.wardenCheckin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WardenCheckinFindFirstArgs>(args?: SelectSubset<T, WardenCheckinFindFirstArgs<ExtArgs>>): Prisma__WardenCheckinClient<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WardenCheckin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenCheckinFindFirstOrThrowArgs} args - Arguments to find a WardenCheckin
     * @example
     * // Get one WardenCheckin
     * const wardenCheckin = await prisma.wardenCheckin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WardenCheckinFindFirstOrThrowArgs>(args?: SelectSubset<T, WardenCheckinFindFirstOrThrowArgs<ExtArgs>>): Prisma__WardenCheckinClient<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WardenCheckins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenCheckinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WardenCheckins
     * const wardenCheckins = await prisma.wardenCheckin.findMany()
     * 
     * // Get first 10 WardenCheckins
     * const wardenCheckins = await prisma.wardenCheckin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wardenCheckinWithIdOnly = await prisma.wardenCheckin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WardenCheckinFindManyArgs>(args?: SelectSubset<T, WardenCheckinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WardenCheckin.
     * @param {WardenCheckinCreateArgs} args - Arguments to create a WardenCheckin.
     * @example
     * // Create one WardenCheckin
     * const WardenCheckin = await prisma.wardenCheckin.create({
     *   data: {
     *     // ... data to create a WardenCheckin
     *   }
     * })
     * 
     */
    create<T extends WardenCheckinCreateArgs>(args: SelectSubset<T, WardenCheckinCreateArgs<ExtArgs>>): Prisma__WardenCheckinClient<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WardenCheckins.
     * @param {WardenCheckinCreateManyArgs} args - Arguments to create many WardenCheckins.
     * @example
     * // Create many WardenCheckins
     * const wardenCheckin = await prisma.wardenCheckin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WardenCheckinCreateManyArgs>(args?: SelectSubset<T, WardenCheckinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WardenCheckins and returns the data saved in the database.
     * @param {WardenCheckinCreateManyAndReturnArgs} args - Arguments to create many WardenCheckins.
     * @example
     * // Create many WardenCheckins
     * const wardenCheckin = await prisma.wardenCheckin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WardenCheckins and only return the `id`
     * const wardenCheckinWithIdOnly = await prisma.wardenCheckin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WardenCheckinCreateManyAndReturnArgs>(args?: SelectSubset<T, WardenCheckinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WardenCheckin.
     * @param {WardenCheckinDeleteArgs} args - Arguments to delete one WardenCheckin.
     * @example
     * // Delete one WardenCheckin
     * const WardenCheckin = await prisma.wardenCheckin.delete({
     *   where: {
     *     // ... filter to delete one WardenCheckin
     *   }
     * })
     * 
     */
    delete<T extends WardenCheckinDeleteArgs>(args: SelectSubset<T, WardenCheckinDeleteArgs<ExtArgs>>): Prisma__WardenCheckinClient<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WardenCheckin.
     * @param {WardenCheckinUpdateArgs} args - Arguments to update one WardenCheckin.
     * @example
     * // Update one WardenCheckin
     * const wardenCheckin = await prisma.wardenCheckin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WardenCheckinUpdateArgs>(args: SelectSubset<T, WardenCheckinUpdateArgs<ExtArgs>>): Prisma__WardenCheckinClient<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WardenCheckins.
     * @param {WardenCheckinDeleteManyArgs} args - Arguments to filter WardenCheckins to delete.
     * @example
     * // Delete a few WardenCheckins
     * const { count } = await prisma.wardenCheckin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WardenCheckinDeleteManyArgs>(args?: SelectSubset<T, WardenCheckinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WardenCheckins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenCheckinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WardenCheckins
     * const wardenCheckin = await prisma.wardenCheckin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WardenCheckinUpdateManyArgs>(args: SelectSubset<T, WardenCheckinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WardenCheckins and returns the data updated in the database.
     * @param {WardenCheckinUpdateManyAndReturnArgs} args - Arguments to update many WardenCheckins.
     * @example
     * // Update many WardenCheckins
     * const wardenCheckin = await prisma.wardenCheckin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WardenCheckins and only return the `id`
     * const wardenCheckinWithIdOnly = await prisma.wardenCheckin.updateManyAndReturn({
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
    updateManyAndReturn<T extends WardenCheckinUpdateManyAndReturnArgs>(args: SelectSubset<T, WardenCheckinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WardenCheckin.
     * @param {WardenCheckinUpsertArgs} args - Arguments to update or create a WardenCheckin.
     * @example
     * // Update or create a WardenCheckin
     * const wardenCheckin = await prisma.wardenCheckin.upsert({
     *   create: {
     *     // ... data to create a WardenCheckin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WardenCheckin we want to update
     *   }
     * })
     */
    upsert<T extends WardenCheckinUpsertArgs>(args: SelectSubset<T, WardenCheckinUpsertArgs<ExtArgs>>): Prisma__WardenCheckinClient<$Result.GetResult<Prisma.$WardenCheckinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WardenCheckins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenCheckinCountArgs} args - Arguments to filter WardenCheckins to count.
     * @example
     * // Count the number of WardenCheckins
     * const count = await prisma.wardenCheckin.count({
     *   where: {
     *     // ... the filter for the WardenCheckins we want to count
     *   }
     * })
    **/
    count<T extends WardenCheckinCountArgs>(
      args?: Subset<T, WardenCheckinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WardenCheckinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WardenCheckin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenCheckinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WardenCheckinAggregateArgs>(args: Subset<T, WardenCheckinAggregateArgs>): Prisma.PrismaPromise<GetWardenCheckinAggregateType<T>>

    /**
     * Group by WardenCheckin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardenCheckinGroupByArgs} args - Group by arguments.
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
      T extends WardenCheckinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WardenCheckinGroupByArgs['orderBy'] }
        : { orderBy?: WardenCheckinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WardenCheckinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWardenCheckinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WardenCheckin model
   */
  readonly fields: WardenCheckinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WardenCheckin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WardenCheckinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warden<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zone<T extends ZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZoneDefaultArgs<ExtArgs>>): Prisma__ZoneClient<$Result.GetResult<Prisma.$ZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WardenCheckin model
   */
  interface WardenCheckinFieldRefs {
    readonly id: FieldRef<"WardenCheckin", 'String'>
    readonly wardenId: FieldRef<"WardenCheckin", 'String'>
    readonly zoneId: FieldRef<"WardenCheckin", 'String'>
    readonly checkedIn: FieldRef<"WardenCheckin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WardenCheckin findUnique
   */
  export type WardenCheckinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * Filter, which WardenCheckin to fetch.
     */
    where: WardenCheckinWhereUniqueInput
  }

  /**
   * WardenCheckin findUniqueOrThrow
   */
  export type WardenCheckinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * Filter, which WardenCheckin to fetch.
     */
    where: WardenCheckinWhereUniqueInput
  }

  /**
   * WardenCheckin findFirst
   */
  export type WardenCheckinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * Filter, which WardenCheckin to fetch.
     */
    where?: WardenCheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardenCheckins to fetch.
     */
    orderBy?: WardenCheckinOrderByWithRelationInput | WardenCheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WardenCheckins.
     */
    cursor?: WardenCheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardenCheckins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardenCheckins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WardenCheckins.
     */
    distinct?: WardenCheckinScalarFieldEnum | WardenCheckinScalarFieldEnum[]
  }

  /**
   * WardenCheckin findFirstOrThrow
   */
  export type WardenCheckinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * Filter, which WardenCheckin to fetch.
     */
    where?: WardenCheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardenCheckins to fetch.
     */
    orderBy?: WardenCheckinOrderByWithRelationInput | WardenCheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WardenCheckins.
     */
    cursor?: WardenCheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardenCheckins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardenCheckins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WardenCheckins.
     */
    distinct?: WardenCheckinScalarFieldEnum | WardenCheckinScalarFieldEnum[]
  }

  /**
   * WardenCheckin findMany
   */
  export type WardenCheckinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * Filter, which WardenCheckins to fetch.
     */
    where?: WardenCheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardenCheckins to fetch.
     */
    orderBy?: WardenCheckinOrderByWithRelationInput | WardenCheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WardenCheckins.
     */
    cursor?: WardenCheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardenCheckins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardenCheckins.
     */
    skip?: number
    distinct?: WardenCheckinScalarFieldEnum | WardenCheckinScalarFieldEnum[]
  }

  /**
   * WardenCheckin create
   */
  export type WardenCheckinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * The data needed to create a WardenCheckin.
     */
    data: XOR<WardenCheckinCreateInput, WardenCheckinUncheckedCreateInput>
  }

  /**
   * WardenCheckin createMany
   */
  export type WardenCheckinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WardenCheckins.
     */
    data: WardenCheckinCreateManyInput | WardenCheckinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WardenCheckin createManyAndReturn
   */
  export type WardenCheckinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * The data used to create many WardenCheckins.
     */
    data: WardenCheckinCreateManyInput | WardenCheckinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WardenCheckin update
   */
  export type WardenCheckinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * The data needed to update a WardenCheckin.
     */
    data: XOR<WardenCheckinUpdateInput, WardenCheckinUncheckedUpdateInput>
    /**
     * Choose, which WardenCheckin to update.
     */
    where: WardenCheckinWhereUniqueInput
  }

  /**
   * WardenCheckin updateMany
   */
  export type WardenCheckinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WardenCheckins.
     */
    data: XOR<WardenCheckinUpdateManyMutationInput, WardenCheckinUncheckedUpdateManyInput>
    /**
     * Filter which WardenCheckins to update
     */
    where?: WardenCheckinWhereInput
    /**
     * Limit how many WardenCheckins to update.
     */
    limit?: number
  }

  /**
   * WardenCheckin updateManyAndReturn
   */
  export type WardenCheckinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * The data used to update WardenCheckins.
     */
    data: XOR<WardenCheckinUpdateManyMutationInput, WardenCheckinUncheckedUpdateManyInput>
    /**
     * Filter which WardenCheckins to update
     */
    where?: WardenCheckinWhereInput
    /**
     * Limit how many WardenCheckins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WardenCheckin upsert
   */
  export type WardenCheckinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * The filter to search for the WardenCheckin to update in case it exists.
     */
    where: WardenCheckinWhereUniqueInput
    /**
     * In case the WardenCheckin found by the `where` argument doesn't exist, create a new WardenCheckin with this data.
     */
    create: XOR<WardenCheckinCreateInput, WardenCheckinUncheckedCreateInput>
    /**
     * In case the WardenCheckin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WardenCheckinUpdateInput, WardenCheckinUncheckedUpdateInput>
  }

  /**
   * WardenCheckin delete
   */
  export type WardenCheckinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
    /**
     * Filter which WardenCheckin to delete.
     */
    where: WardenCheckinWhereUniqueInput
  }

  /**
   * WardenCheckin deleteMany
   */
  export type WardenCheckinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WardenCheckins to delete
     */
    where?: WardenCheckinWhereInput
    /**
     * Limit how many WardenCheckins to delete.
     */
    limit?: number
  }

  /**
   * WardenCheckin without action
   */
  export type WardenCheckinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardenCheckin
     */
    select?: WardenCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardenCheckin
     */
    omit?: WardenCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardenCheckinInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    pin: 'pin',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ZoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    capacity: 'capacity',
    type: 'type',
    geojson: 'geojson'
  };

  export type ZoneScalarFieldEnum = (typeof ZoneScalarFieldEnum)[keyof typeof ZoneScalarFieldEnum]


  export const GateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    latitude: 'latitude',
    longitude: 'longitude',
    direction: 'direction'
  };

  export type GateScalarFieldEnum = (typeof GateScalarFieldEnum)[keyof typeof GateScalarFieldEnum]


  export const LandmarkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    latitude: 'latitude',
    longitude: 'longitude',
    accessibleRoute: 'accessibleRoute'
  };

  export type LandmarkScalarFieldEnum = (typeof LandmarkScalarFieldEnum)[keyof typeof LandmarkScalarFieldEnum]


  export const ZoneStatusScalarFieldEnum: {
    id: 'id',
    zoneId: 'zoneId',
    status: 'status',
    updatedById: 'updatedById',
    updatedAt: 'updatedAt'
  };

  export type ZoneStatusScalarFieldEnum = (typeof ZoneStatusScalarFieldEnum)[keyof typeof ZoneStatusScalarFieldEnum]


  export const BroadcastAlertScalarFieldEnum: {
    id: 'id',
    message: 'message',
    radiusMeters: 'radiusMeters',
    centerLat: 'centerLat',
    centerLng: 'centerLng',
    createdById: 'createdById',
    expiresAt: 'expiresAt',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type BroadcastAlertScalarFieldEnum = (typeof BroadcastAlertScalarFieldEnum)[keyof typeof BroadcastAlertScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    reportedById: 'reportedById',
    timestamp: 'timestamp',
    resolved: 'resolved'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const WardenCheckinScalarFieldEnum: {
    id: 'id',
    wardenId: 'wardenId',
    zoneId: 'zoneId',
    checkedIn: 'checkedIn'
  };

  export type WardenCheckinScalarFieldEnum = (typeof WardenCheckinScalarFieldEnum)[keyof typeof WardenCheckinScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ZoneType'
   */
  export type EnumZoneTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ZoneType'>
    


  /**
   * Reference to a field of type 'ZoneType[]'
   */
  export type ListEnumZoneTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ZoneType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'GateDirection'
   */
  export type EnumGateDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GateDirection'>
    


  /**
   * Reference to a field of type 'GateDirection[]'
   */
  export type ListEnumGateDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GateDirection[]'>
    


  /**
   * Reference to a field of type 'LandmarkCategory'
   */
  export type EnumLandmarkCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LandmarkCategory'>
    


  /**
   * Reference to a field of type 'LandmarkCategory[]'
   */
  export type ListEnumLandmarkCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LandmarkCategory[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ZoneStatusEnum'
   */
  export type EnumZoneStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ZoneStatusEnum'>
    


  /**
   * Reference to a field of type 'ZoneStatusEnum[]'
   */
  export type ListEnumZoneStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ZoneStatusEnum[]'>
    


  /**
   * Reference to a field of type 'IncidentType'
   */
  export type EnumIncidentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentType'>
    


  /**
   * Reference to a field of type 'IncidentType[]'
   */
  export type ListEnumIncidentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    pin?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    zoneStatuses?: ZoneStatusListRelationFilter
    broadcastAlerts?: BroadcastAlertListRelationFilter
    incidents?: IncidentListRelationFilter
    checkins?: WardenCheckinListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    pin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    zoneStatuses?: ZoneStatusOrderByRelationAggregateInput
    broadcastAlerts?: BroadcastAlertOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    checkins?: WardenCheckinOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    pin?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    zoneStatuses?: ZoneStatusListRelationFilter
    broadcastAlerts?: BroadcastAlertListRelationFilter
    incidents?: IncidentListRelationFilter
    checkins?: WardenCheckinListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    pin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    pin?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ZoneWhereInput = {
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    id?: StringFilter<"Zone"> | string
    name?: StringFilter<"Zone"> | string
    label?: StringFilter<"Zone"> | string
    capacity?: IntFilter<"Zone"> | number
    type?: EnumZoneTypeFilter<"Zone"> | $Enums.ZoneType
    geojson?: JsonFilter<"Zone">
    statuses?: ZoneStatusListRelationFilter
    checkins?: WardenCheckinListRelationFilter
  }

  export type ZoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
    geojson?: SortOrder
    statuses?: ZoneStatusOrderByRelationAggregateInput
    checkins?: WardenCheckinOrderByRelationAggregateInput
  }

  export type ZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZoneWhereInput | ZoneWhereInput[]
    OR?: ZoneWhereInput[]
    NOT?: ZoneWhereInput | ZoneWhereInput[]
    name?: StringFilter<"Zone"> | string
    label?: StringFilter<"Zone"> | string
    capacity?: IntFilter<"Zone"> | number
    type?: EnumZoneTypeFilter<"Zone"> | $Enums.ZoneType
    geojson?: JsonFilter<"Zone">
    statuses?: ZoneStatusListRelationFilter
    checkins?: WardenCheckinListRelationFilter
  }, "id">

  export type ZoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
    geojson?: SortOrder
    _count?: ZoneCountOrderByAggregateInput
    _avg?: ZoneAvgOrderByAggregateInput
    _max?: ZoneMaxOrderByAggregateInput
    _min?: ZoneMinOrderByAggregateInput
    _sum?: ZoneSumOrderByAggregateInput
  }

  export type ZoneScalarWhereWithAggregatesInput = {
    AND?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    OR?: ZoneScalarWhereWithAggregatesInput[]
    NOT?: ZoneScalarWhereWithAggregatesInput | ZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zone"> | string
    name?: StringWithAggregatesFilter<"Zone"> | string
    label?: StringWithAggregatesFilter<"Zone"> | string
    capacity?: IntWithAggregatesFilter<"Zone"> | number
    type?: EnumZoneTypeWithAggregatesFilter<"Zone"> | $Enums.ZoneType
    geojson?: JsonWithAggregatesFilter<"Zone">
  }

  export type GateWhereInput = {
    AND?: GateWhereInput | GateWhereInput[]
    OR?: GateWhereInput[]
    NOT?: GateWhereInput | GateWhereInput[]
    id?: StringFilter<"Gate"> | string
    name?: StringFilter<"Gate"> | string
    label?: StringFilter<"Gate"> | string
    latitude?: DecimalFilter<"Gate"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Gate"> | Decimal | DecimalJsLike | number | string
    direction?: EnumGateDirectionFilter<"Gate"> | $Enums.GateDirection
  }

  export type GateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    direction?: SortOrder
  }

  export type GateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GateWhereInput | GateWhereInput[]
    OR?: GateWhereInput[]
    NOT?: GateWhereInput | GateWhereInput[]
    name?: StringFilter<"Gate"> | string
    label?: StringFilter<"Gate"> | string
    latitude?: DecimalFilter<"Gate"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Gate"> | Decimal | DecimalJsLike | number | string
    direction?: EnumGateDirectionFilter<"Gate"> | $Enums.GateDirection
  }, "id">

  export type GateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    direction?: SortOrder
    _count?: GateCountOrderByAggregateInput
    _avg?: GateAvgOrderByAggregateInput
    _max?: GateMaxOrderByAggregateInput
    _min?: GateMinOrderByAggregateInput
    _sum?: GateSumOrderByAggregateInput
  }

  export type GateScalarWhereWithAggregatesInput = {
    AND?: GateScalarWhereWithAggregatesInput | GateScalarWhereWithAggregatesInput[]
    OR?: GateScalarWhereWithAggregatesInput[]
    NOT?: GateScalarWhereWithAggregatesInput | GateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gate"> | string
    name?: StringWithAggregatesFilter<"Gate"> | string
    label?: StringWithAggregatesFilter<"Gate"> | string
    latitude?: DecimalWithAggregatesFilter<"Gate"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Gate"> | Decimal | DecimalJsLike | number | string
    direction?: EnumGateDirectionWithAggregatesFilter<"Gate"> | $Enums.GateDirection
  }

  export type LandmarkWhereInput = {
    AND?: LandmarkWhereInput | LandmarkWhereInput[]
    OR?: LandmarkWhereInput[]
    NOT?: LandmarkWhereInput | LandmarkWhereInput[]
    id?: StringFilter<"Landmark"> | string
    name?: StringFilter<"Landmark"> | string
    category?: EnumLandmarkCategoryFilter<"Landmark"> | $Enums.LandmarkCategory
    latitude?: DecimalFilter<"Landmark"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Landmark"> | Decimal | DecimalJsLike | number | string
    accessibleRoute?: BoolFilter<"Landmark"> | boolean
  }

  export type LandmarkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accessibleRoute?: SortOrder
  }

  export type LandmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LandmarkWhereInput | LandmarkWhereInput[]
    OR?: LandmarkWhereInput[]
    NOT?: LandmarkWhereInput | LandmarkWhereInput[]
    name?: StringFilter<"Landmark"> | string
    category?: EnumLandmarkCategoryFilter<"Landmark"> | $Enums.LandmarkCategory
    latitude?: DecimalFilter<"Landmark"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Landmark"> | Decimal | DecimalJsLike | number | string
    accessibleRoute?: BoolFilter<"Landmark"> | boolean
  }, "id">

  export type LandmarkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accessibleRoute?: SortOrder
    _count?: LandmarkCountOrderByAggregateInput
    _avg?: LandmarkAvgOrderByAggregateInput
    _max?: LandmarkMaxOrderByAggregateInput
    _min?: LandmarkMinOrderByAggregateInput
    _sum?: LandmarkSumOrderByAggregateInput
  }

  export type LandmarkScalarWhereWithAggregatesInput = {
    AND?: LandmarkScalarWhereWithAggregatesInput | LandmarkScalarWhereWithAggregatesInput[]
    OR?: LandmarkScalarWhereWithAggregatesInput[]
    NOT?: LandmarkScalarWhereWithAggregatesInput | LandmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Landmark"> | string
    name?: StringWithAggregatesFilter<"Landmark"> | string
    category?: EnumLandmarkCategoryWithAggregatesFilter<"Landmark"> | $Enums.LandmarkCategory
    latitude?: DecimalWithAggregatesFilter<"Landmark"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Landmark"> | Decimal | DecimalJsLike | number | string
    accessibleRoute?: BoolWithAggregatesFilter<"Landmark"> | boolean
  }

  export type ZoneStatusWhereInput = {
    AND?: ZoneStatusWhereInput | ZoneStatusWhereInput[]
    OR?: ZoneStatusWhereInput[]
    NOT?: ZoneStatusWhereInput | ZoneStatusWhereInput[]
    id?: StringFilter<"ZoneStatus"> | string
    zoneId?: StringFilter<"ZoneStatus"> | string
    status?: EnumZoneStatusEnumFilter<"ZoneStatus"> | $Enums.ZoneStatusEnum
    updatedById?: StringFilter<"ZoneStatus"> | string
    updatedAt?: DateTimeFilter<"ZoneStatus"> | Date | string
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    updatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ZoneStatusOrderByWithRelationInput = {
    id?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
    zone?: ZoneOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
  }

  export type ZoneStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZoneStatusWhereInput | ZoneStatusWhereInput[]
    OR?: ZoneStatusWhereInput[]
    NOT?: ZoneStatusWhereInput | ZoneStatusWhereInput[]
    zoneId?: StringFilter<"ZoneStatus"> | string
    status?: EnumZoneStatusEnumFilter<"ZoneStatus"> | $Enums.ZoneStatusEnum
    updatedById?: StringFilter<"ZoneStatus"> | string
    updatedAt?: DateTimeFilter<"ZoneStatus"> | Date | string
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
    updatedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ZoneStatusOrderByWithAggregationInput = {
    id?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
    _count?: ZoneStatusCountOrderByAggregateInput
    _max?: ZoneStatusMaxOrderByAggregateInput
    _min?: ZoneStatusMinOrderByAggregateInput
  }

  export type ZoneStatusScalarWhereWithAggregatesInput = {
    AND?: ZoneStatusScalarWhereWithAggregatesInput | ZoneStatusScalarWhereWithAggregatesInput[]
    OR?: ZoneStatusScalarWhereWithAggregatesInput[]
    NOT?: ZoneStatusScalarWhereWithAggregatesInput | ZoneStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZoneStatus"> | string
    zoneId?: StringWithAggregatesFilter<"ZoneStatus"> | string
    status?: EnumZoneStatusEnumWithAggregatesFilter<"ZoneStatus"> | $Enums.ZoneStatusEnum
    updatedById?: StringWithAggregatesFilter<"ZoneStatus"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ZoneStatus"> | Date | string
  }

  export type BroadcastAlertWhereInput = {
    AND?: BroadcastAlertWhereInput | BroadcastAlertWhereInput[]
    OR?: BroadcastAlertWhereInput[]
    NOT?: BroadcastAlertWhereInput | BroadcastAlertWhereInput[]
    id?: StringFilter<"BroadcastAlert"> | string
    message?: StringFilter<"BroadcastAlert"> | string
    radiusMeters?: IntFilter<"BroadcastAlert"> | number
    centerLat?: DecimalFilter<"BroadcastAlert"> | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFilter<"BroadcastAlert"> | Decimal | DecimalJsLike | number | string
    createdById?: StringFilter<"BroadcastAlert"> | string
    expiresAt?: DateTimeFilter<"BroadcastAlert"> | Date | string
    active?: BoolFilter<"BroadcastAlert"> | boolean
    createdAt?: DateTimeFilter<"BroadcastAlert"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BroadcastAlertOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    radiusMeters?: SortOrder
    centerLat?: SortOrder
    centerLng?: SortOrder
    createdById?: SortOrder
    expiresAt?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type BroadcastAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BroadcastAlertWhereInput | BroadcastAlertWhereInput[]
    OR?: BroadcastAlertWhereInput[]
    NOT?: BroadcastAlertWhereInput | BroadcastAlertWhereInput[]
    message?: StringFilter<"BroadcastAlert"> | string
    radiusMeters?: IntFilter<"BroadcastAlert"> | number
    centerLat?: DecimalFilter<"BroadcastAlert"> | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFilter<"BroadcastAlert"> | Decimal | DecimalJsLike | number | string
    createdById?: StringFilter<"BroadcastAlert"> | string
    expiresAt?: DateTimeFilter<"BroadcastAlert"> | Date | string
    active?: BoolFilter<"BroadcastAlert"> | boolean
    createdAt?: DateTimeFilter<"BroadcastAlert"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BroadcastAlertOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    radiusMeters?: SortOrder
    centerLat?: SortOrder
    centerLng?: SortOrder
    createdById?: SortOrder
    expiresAt?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: BroadcastAlertCountOrderByAggregateInput
    _avg?: BroadcastAlertAvgOrderByAggregateInput
    _max?: BroadcastAlertMaxOrderByAggregateInput
    _min?: BroadcastAlertMinOrderByAggregateInput
    _sum?: BroadcastAlertSumOrderByAggregateInput
  }

  export type BroadcastAlertScalarWhereWithAggregatesInput = {
    AND?: BroadcastAlertScalarWhereWithAggregatesInput | BroadcastAlertScalarWhereWithAggregatesInput[]
    OR?: BroadcastAlertScalarWhereWithAggregatesInput[]
    NOT?: BroadcastAlertScalarWhereWithAggregatesInput | BroadcastAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BroadcastAlert"> | string
    message?: StringWithAggregatesFilter<"BroadcastAlert"> | string
    radiusMeters?: IntWithAggregatesFilter<"BroadcastAlert"> | number
    centerLat?: DecimalWithAggregatesFilter<"BroadcastAlert"> | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalWithAggregatesFilter<"BroadcastAlert"> | Decimal | DecimalJsLike | number | string
    createdById?: StringWithAggregatesFilter<"BroadcastAlert"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"BroadcastAlert"> | Date | string
    active?: BoolWithAggregatesFilter<"BroadcastAlert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BroadcastAlert"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    type?: EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType
    description?: StringFilter<"Incident"> | string
    latitude?: DecimalFilter<"Incident"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Incident"> | Decimal | DecimalJsLike | number | string
    reportedById?: StringFilter<"Incident"> | string
    timestamp?: DateTimeFilter<"Incident"> | Date | string
    resolved?: BoolFilter<"Incident"> | boolean
    reportedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    reportedById?: SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
    reportedBy?: UserOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    type?: EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType
    description?: StringFilter<"Incident"> | string
    latitude?: DecimalFilter<"Incident"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Incident"> | Decimal | DecimalJsLike | number | string
    reportedById?: StringFilter<"Incident"> | string
    timestamp?: DateTimeFilter<"Incident"> | Date | string
    resolved?: BoolFilter<"Incident"> | boolean
    reportedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    reportedById?: SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    type?: EnumIncidentTypeWithAggregatesFilter<"Incident"> | $Enums.IncidentType
    description?: StringWithAggregatesFilter<"Incident"> | string
    latitude?: DecimalWithAggregatesFilter<"Incident"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Incident"> | Decimal | DecimalJsLike | number | string
    reportedById?: StringWithAggregatesFilter<"Incident"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    resolved?: BoolWithAggregatesFilter<"Incident"> | boolean
  }

  export type WardenCheckinWhereInput = {
    AND?: WardenCheckinWhereInput | WardenCheckinWhereInput[]
    OR?: WardenCheckinWhereInput[]
    NOT?: WardenCheckinWhereInput | WardenCheckinWhereInput[]
    id?: StringFilter<"WardenCheckin"> | string
    wardenId?: StringFilter<"WardenCheckin"> | string
    zoneId?: StringFilter<"WardenCheckin"> | string
    checkedIn?: DateTimeFilter<"WardenCheckin"> | Date | string
    warden?: XOR<UserScalarRelationFilter, UserWhereInput>
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }

  export type WardenCheckinOrderByWithRelationInput = {
    id?: SortOrder
    wardenId?: SortOrder
    zoneId?: SortOrder
    checkedIn?: SortOrder
    warden?: UserOrderByWithRelationInput
    zone?: ZoneOrderByWithRelationInput
  }

  export type WardenCheckinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WardenCheckinWhereInput | WardenCheckinWhereInput[]
    OR?: WardenCheckinWhereInput[]
    NOT?: WardenCheckinWhereInput | WardenCheckinWhereInput[]
    wardenId?: StringFilter<"WardenCheckin"> | string
    zoneId?: StringFilter<"WardenCheckin"> | string
    checkedIn?: DateTimeFilter<"WardenCheckin"> | Date | string
    warden?: XOR<UserScalarRelationFilter, UserWhereInput>
    zone?: XOR<ZoneScalarRelationFilter, ZoneWhereInput>
  }, "id">

  export type WardenCheckinOrderByWithAggregationInput = {
    id?: SortOrder
    wardenId?: SortOrder
    zoneId?: SortOrder
    checkedIn?: SortOrder
    _count?: WardenCheckinCountOrderByAggregateInput
    _max?: WardenCheckinMaxOrderByAggregateInput
    _min?: WardenCheckinMinOrderByAggregateInput
  }

  export type WardenCheckinScalarWhereWithAggregatesInput = {
    AND?: WardenCheckinScalarWhereWithAggregatesInput | WardenCheckinScalarWhereWithAggregatesInput[]
    OR?: WardenCheckinScalarWhereWithAggregatesInput[]
    NOT?: WardenCheckinScalarWhereWithAggregatesInput | WardenCheckinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WardenCheckin"> | string
    wardenId?: StringWithAggregatesFilter<"WardenCheckin"> | string
    zoneId?: StringWithAggregatesFilter<"WardenCheckin"> | string
    checkedIn?: DateTimeWithAggregatesFilter<"WardenCheckin"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    zoneStatuses?: ZoneStatusCreateNestedManyWithoutUpdatedByInput
    broadcastAlerts?: BroadcastAlertCreateNestedManyWithoutCreatedByInput
    incidents?: IncidentCreateNestedManyWithoutReportedByInput
    checkins?: WardenCheckinCreateNestedManyWithoutWardenInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    zoneStatuses?: ZoneStatusUncheckedCreateNestedManyWithoutUpdatedByInput
    broadcastAlerts?: BroadcastAlertUncheckedCreateNestedManyWithoutCreatedByInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReportedByInput
    checkins?: WardenCheckinUncheckedCreateNestedManyWithoutWardenInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zoneStatuses?: ZoneStatusUpdateManyWithoutUpdatedByNestedInput
    broadcastAlerts?: BroadcastAlertUpdateManyWithoutCreatedByNestedInput
    incidents?: IncidentUpdateManyWithoutReportedByNestedInput
    checkins?: WardenCheckinUpdateManyWithoutWardenNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zoneStatuses?: ZoneStatusUncheckedUpdateManyWithoutUpdatedByNestedInput
    broadcastAlerts?: BroadcastAlertUncheckedUpdateManyWithoutCreatedByNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReportedByNestedInput
    checkins?: WardenCheckinUncheckedUpdateManyWithoutWardenNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneCreateInput = {
    id?: string
    name: string
    label: string
    capacity: number
    type: $Enums.ZoneType
    geojson: JsonNullValueInput | InputJsonValue
    statuses?: ZoneStatusCreateNestedManyWithoutZoneInput
    checkins?: WardenCheckinCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateInput = {
    id?: string
    name: string
    label: string
    capacity: number
    type: $Enums.ZoneType
    geojson: JsonNullValueInput | InputJsonValue
    statuses?: ZoneStatusUncheckedCreateNestedManyWithoutZoneInput
    checkins?: WardenCheckinUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    geojson?: JsonNullValueInput | InputJsonValue
    statuses?: ZoneStatusUpdateManyWithoutZoneNestedInput
    checkins?: WardenCheckinUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    geojson?: JsonNullValueInput | InputJsonValue
    statuses?: ZoneStatusUncheckedUpdateManyWithoutZoneNestedInput
    checkins?: WardenCheckinUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneCreateManyInput = {
    id?: string
    name: string
    label: string
    capacity: number
    type: $Enums.ZoneType
    geojson: JsonNullValueInput | InputJsonValue
  }

  export type ZoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    geojson?: JsonNullValueInput | InputJsonValue
  }

  export type ZoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    geojson?: JsonNullValueInput | InputJsonValue
  }

  export type GateCreateInput = {
    id?: string
    name: string
    label: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    direction: $Enums.GateDirection
  }

  export type GateUncheckedCreateInput = {
    id?: string
    name: string
    label: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    direction: $Enums.GateDirection
  }

  export type GateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: EnumGateDirectionFieldUpdateOperationsInput | $Enums.GateDirection
  }

  export type GateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: EnumGateDirectionFieldUpdateOperationsInput | $Enums.GateDirection
  }

  export type GateCreateManyInput = {
    id?: string
    name: string
    label: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    direction: $Enums.GateDirection
  }

  export type GateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: EnumGateDirectionFieldUpdateOperationsInput | $Enums.GateDirection
  }

  export type GateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direction?: EnumGateDirectionFieldUpdateOperationsInput | $Enums.GateDirection
  }

  export type LandmarkCreateInput = {
    id?: string
    name: string
    category: $Enums.LandmarkCategory
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    accessibleRoute?: boolean
  }

  export type LandmarkUncheckedCreateInput = {
    id?: string
    name: string
    category: $Enums.LandmarkCategory
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    accessibleRoute?: boolean
  }

  export type LandmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLandmarkCategoryFieldUpdateOperationsInput | $Enums.LandmarkCategory
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accessibleRoute?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLandmarkCategoryFieldUpdateOperationsInput | $Enums.LandmarkCategory
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accessibleRoute?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandmarkCreateManyInput = {
    id?: string
    name: string
    category: $Enums.LandmarkCategory
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    accessibleRoute?: boolean
  }

  export type LandmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLandmarkCategoryFieldUpdateOperationsInput | $Enums.LandmarkCategory
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accessibleRoute?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LandmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumLandmarkCategoryFieldUpdateOperationsInput | $Enums.LandmarkCategory
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accessibleRoute?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ZoneStatusCreateInput = {
    id?: string
    status?: $Enums.ZoneStatusEnum
    updatedAt?: Date | string
    zone: ZoneCreateNestedOneWithoutStatusesInput
    updatedBy: UserCreateNestedOneWithoutZoneStatusesInput
  }

  export type ZoneStatusUncheckedCreateInput = {
    id?: string
    zoneId: string
    status?: $Enums.ZoneStatusEnum
    updatedById: string
    updatedAt?: Date | string
  }

  export type ZoneStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateOneRequiredWithoutStatusesNestedInput
    updatedBy?: UserUpdateOneRequiredWithoutZoneStatusesNestedInput
  }

  export type ZoneStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneStatusCreateManyInput = {
    id?: string
    zoneId: string
    status?: $Enums.ZoneStatusEnum
    updatedById: string
    updatedAt?: Date | string
  }

  export type ZoneStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAlertCreateInput = {
    id?: string
    message: string
    radiusMeters: number
    centerLat: Decimal | DecimalJsLike | number | string
    centerLng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    active?: boolean
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutBroadcastAlertsInput
  }

  export type BroadcastAlertUncheckedCreateInput = {
    id?: string
    message: string
    radiusMeters: number
    centerLat: Decimal | DecimalJsLike | number | string
    centerLng: Decimal | DecimalJsLike | number | string
    createdById: string
    expiresAt: Date | string
    active?: boolean
    createdAt?: Date | string
  }

  export type BroadcastAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    centerLat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutBroadcastAlertsNestedInput
  }

  export type BroadcastAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    centerLat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdById?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAlertCreateManyInput = {
    id?: string
    message: string
    radiusMeters: number
    centerLat: Decimal | DecimalJsLike | number | string
    centerLng: Decimal | DecimalJsLike | number | string
    createdById: string
    expiresAt: Date | string
    active?: boolean
    createdAt?: Date | string
  }

  export type BroadcastAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    centerLat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    centerLat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdById?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    type: $Enums.IncidentType
    description: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    timestamp?: Date | string
    resolved?: boolean
    reportedBy: UserCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    type: $Enums.IncidentType
    description: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    reportedById: string
    timestamp?: Date | string
    resolved?: boolean
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    description?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    reportedBy?: UserUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    description?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reportedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentCreateManyInput = {
    id?: string
    type: $Enums.IncidentType
    description: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    reportedById: string
    timestamp?: Date | string
    resolved?: boolean
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    description?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    description?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reportedById?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WardenCheckinCreateInput = {
    id?: string
    checkedIn?: Date | string
    warden: UserCreateNestedOneWithoutCheckinsInput
    zone: ZoneCreateNestedOneWithoutCheckinsInput
  }

  export type WardenCheckinUncheckedCreateInput = {
    id?: string
    wardenId: string
    zoneId: string
    checkedIn?: Date | string
  }

  export type WardenCheckinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    warden?: UserUpdateOneRequiredWithoutCheckinsNestedInput
    zone?: ZoneUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type WardenCheckinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wardenId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenCheckinCreateManyInput = {
    id?: string
    wardenId: string
    zoneId: string
    checkedIn?: Date | string
  }

  export type WardenCheckinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenCheckinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wardenId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ZoneStatusListRelationFilter = {
    every?: ZoneStatusWhereInput
    some?: ZoneStatusWhereInput
    none?: ZoneStatusWhereInput
  }

  export type BroadcastAlertListRelationFilter = {
    every?: BroadcastAlertWhereInput
    some?: BroadcastAlertWhereInput
    none?: BroadcastAlertWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type WardenCheckinListRelationFilter = {
    every?: WardenCheckinWhereInput
    some?: WardenCheckinWhereInput
    none?: WardenCheckinWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ZoneStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BroadcastAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WardenCheckinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    pin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    pin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    pin?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumZoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneType | EnumZoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneType[] | ListEnumZoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ZoneType[] | ListEnumZoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumZoneTypeFilter<$PrismaModel> | $Enums.ZoneType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ZoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
    geojson?: SortOrder
  }

  export type ZoneAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type ZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
  }

  export type ZoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    capacity?: SortOrder
    type?: SortOrder
  }

  export type ZoneSumOrderByAggregateInput = {
    capacity?: SortOrder
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

  export type EnumZoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneType | EnumZoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneType[] | ListEnumZoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ZoneType[] | ListEnumZoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumZoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.ZoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZoneTypeFilter<$PrismaModel>
    _max?: NestedEnumZoneTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumGateDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.GateDirection | EnumGateDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.GateDirection[] | ListEnumGateDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.GateDirection[] | ListEnumGateDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumGateDirectionFilter<$PrismaModel> | $Enums.GateDirection
  }

  export type GateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    direction?: SortOrder
  }

  export type GateAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    direction?: SortOrder
  }

  export type GateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    direction?: SortOrder
  }

  export type GateSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumGateDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GateDirection | EnumGateDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.GateDirection[] | ListEnumGateDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.GateDirection[] | ListEnumGateDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumGateDirectionWithAggregatesFilter<$PrismaModel> | $Enums.GateDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGateDirectionFilter<$PrismaModel>
    _max?: NestedEnumGateDirectionFilter<$PrismaModel>
  }

  export type EnumLandmarkCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.LandmarkCategory | EnumLandmarkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LandmarkCategory[] | ListEnumLandmarkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandmarkCategory[] | ListEnumLandmarkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLandmarkCategoryFilter<$PrismaModel> | $Enums.LandmarkCategory
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LandmarkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accessibleRoute?: SortOrder
  }

  export type LandmarkAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LandmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accessibleRoute?: SortOrder
  }

  export type LandmarkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accessibleRoute?: SortOrder
  }

  export type LandmarkSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumLandmarkCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LandmarkCategory | EnumLandmarkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LandmarkCategory[] | ListEnumLandmarkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandmarkCategory[] | ListEnumLandmarkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLandmarkCategoryWithAggregatesFilter<$PrismaModel> | $Enums.LandmarkCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLandmarkCategoryFilter<$PrismaModel>
    _max?: NestedEnumLandmarkCategoryFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumZoneStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneStatusEnum | EnumZoneStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneStatusEnum[] | ListEnumZoneStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ZoneStatusEnum[] | ListEnumZoneStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumZoneStatusEnumFilter<$PrismaModel> | $Enums.ZoneStatusEnum
  }

  export type ZoneScalarRelationFilter = {
    is?: ZoneWhereInput
    isNot?: ZoneWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ZoneStatusCountOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoneStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZoneStatusMinOrderByAggregateInput = {
    id?: SortOrder
    zoneId?: SortOrder
    status?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumZoneStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneStatusEnum | EnumZoneStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneStatusEnum[] | ListEnumZoneStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ZoneStatusEnum[] | ListEnumZoneStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumZoneStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.ZoneStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZoneStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumZoneStatusEnumFilter<$PrismaModel>
  }

  export type BroadcastAlertCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    radiusMeters?: SortOrder
    centerLat?: SortOrder
    centerLng?: SortOrder
    createdById?: SortOrder
    expiresAt?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type BroadcastAlertAvgOrderByAggregateInput = {
    radiusMeters?: SortOrder
    centerLat?: SortOrder
    centerLng?: SortOrder
  }

  export type BroadcastAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    radiusMeters?: SortOrder
    centerLat?: SortOrder
    centerLng?: SortOrder
    createdById?: SortOrder
    expiresAt?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type BroadcastAlertMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    radiusMeters?: SortOrder
    centerLat?: SortOrder
    centerLng?: SortOrder
    createdById?: SortOrder
    expiresAt?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type BroadcastAlertSumOrderByAggregateInput = {
    radiusMeters?: SortOrder
    centerLat?: SortOrder
    centerLng?: SortOrder
  }

  export type EnumIncidentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentTypeFilter<$PrismaModel> | $Enums.IncidentType
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    reportedById?: SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    reportedById?: SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    reportedById?: SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumIncidentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentTypeFilter<$PrismaModel>
    _max?: NestedEnumIncidentTypeFilter<$PrismaModel>
  }

  export type WardenCheckinCountOrderByAggregateInput = {
    id?: SortOrder
    wardenId?: SortOrder
    zoneId?: SortOrder
    checkedIn?: SortOrder
  }

  export type WardenCheckinMaxOrderByAggregateInput = {
    id?: SortOrder
    wardenId?: SortOrder
    zoneId?: SortOrder
    checkedIn?: SortOrder
  }

  export type WardenCheckinMinOrderByAggregateInput = {
    id?: SortOrder
    wardenId?: SortOrder
    zoneId?: SortOrder
    checkedIn?: SortOrder
  }

  export type ZoneStatusCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ZoneStatusCreateWithoutUpdatedByInput, ZoneStatusUncheckedCreateWithoutUpdatedByInput> | ZoneStatusCreateWithoutUpdatedByInput[] | ZoneStatusUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ZoneStatusCreateOrConnectWithoutUpdatedByInput | ZoneStatusCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ZoneStatusCreateManyUpdatedByInputEnvelope
    connect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
  }

  export type BroadcastAlertCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<BroadcastAlertCreateWithoutCreatedByInput, BroadcastAlertUncheckedCreateWithoutCreatedByInput> | BroadcastAlertCreateWithoutCreatedByInput[] | BroadcastAlertUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BroadcastAlertCreateOrConnectWithoutCreatedByInput | BroadcastAlertCreateOrConnectWithoutCreatedByInput[]
    createMany?: BroadcastAlertCreateManyCreatedByInputEnvelope
    connect?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutReportedByInput = {
    create?: XOR<IncidentCreateWithoutReportedByInput, IncidentUncheckedCreateWithoutReportedByInput> | IncidentCreateWithoutReportedByInput[] | IncidentUncheckedCreateWithoutReportedByInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReportedByInput | IncidentCreateOrConnectWithoutReportedByInput[]
    createMany?: IncidentCreateManyReportedByInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type WardenCheckinCreateNestedManyWithoutWardenInput = {
    create?: XOR<WardenCheckinCreateWithoutWardenInput, WardenCheckinUncheckedCreateWithoutWardenInput> | WardenCheckinCreateWithoutWardenInput[] | WardenCheckinUncheckedCreateWithoutWardenInput[]
    connectOrCreate?: WardenCheckinCreateOrConnectWithoutWardenInput | WardenCheckinCreateOrConnectWithoutWardenInput[]
    createMany?: WardenCheckinCreateManyWardenInputEnvelope
    connect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
  }

  export type ZoneStatusUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ZoneStatusCreateWithoutUpdatedByInput, ZoneStatusUncheckedCreateWithoutUpdatedByInput> | ZoneStatusCreateWithoutUpdatedByInput[] | ZoneStatusUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ZoneStatusCreateOrConnectWithoutUpdatedByInput | ZoneStatusCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ZoneStatusCreateManyUpdatedByInputEnvelope
    connect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
  }

  export type BroadcastAlertUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<BroadcastAlertCreateWithoutCreatedByInput, BroadcastAlertUncheckedCreateWithoutCreatedByInput> | BroadcastAlertCreateWithoutCreatedByInput[] | BroadcastAlertUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BroadcastAlertCreateOrConnectWithoutCreatedByInput | BroadcastAlertCreateOrConnectWithoutCreatedByInput[]
    createMany?: BroadcastAlertCreateManyCreatedByInputEnvelope
    connect?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutReportedByInput = {
    create?: XOR<IncidentCreateWithoutReportedByInput, IncidentUncheckedCreateWithoutReportedByInput> | IncidentCreateWithoutReportedByInput[] | IncidentUncheckedCreateWithoutReportedByInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReportedByInput | IncidentCreateOrConnectWithoutReportedByInput[]
    createMany?: IncidentCreateManyReportedByInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type WardenCheckinUncheckedCreateNestedManyWithoutWardenInput = {
    create?: XOR<WardenCheckinCreateWithoutWardenInput, WardenCheckinUncheckedCreateWithoutWardenInput> | WardenCheckinCreateWithoutWardenInput[] | WardenCheckinUncheckedCreateWithoutWardenInput[]
    connectOrCreate?: WardenCheckinCreateOrConnectWithoutWardenInput | WardenCheckinCreateOrConnectWithoutWardenInput[]
    createMany?: WardenCheckinCreateManyWardenInputEnvelope
    connect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ZoneStatusUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ZoneStatusCreateWithoutUpdatedByInput, ZoneStatusUncheckedCreateWithoutUpdatedByInput> | ZoneStatusCreateWithoutUpdatedByInput[] | ZoneStatusUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ZoneStatusCreateOrConnectWithoutUpdatedByInput | ZoneStatusCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ZoneStatusUpsertWithWhereUniqueWithoutUpdatedByInput | ZoneStatusUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ZoneStatusCreateManyUpdatedByInputEnvelope
    set?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    disconnect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    delete?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    connect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    update?: ZoneStatusUpdateWithWhereUniqueWithoutUpdatedByInput | ZoneStatusUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ZoneStatusUpdateManyWithWhereWithoutUpdatedByInput | ZoneStatusUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ZoneStatusScalarWhereInput | ZoneStatusScalarWhereInput[]
  }

  export type BroadcastAlertUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<BroadcastAlertCreateWithoutCreatedByInput, BroadcastAlertUncheckedCreateWithoutCreatedByInput> | BroadcastAlertCreateWithoutCreatedByInput[] | BroadcastAlertUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BroadcastAlertCreateOrConnectWithoutCreatedByInput | BroadcastAlertCreateOrConnectWithoutCreatedByInput[]
    upsert?: BroadcastAlertUpsertWithWhereUniqueWithoutCreatedByInput | BroadcastAlertUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BroadcastAlertCreateManyCreatedByInputEnvelope
    set?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
    disconnect?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
    delete?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
    connect?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
    update?: BroadcastAlertUpdateWithWhereUniqueWithoutCreatedByInput | BroadcastAlertUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: BroadcastAlertUpdateManyWithWhereWithoutCreatedByInput | BroadcastAlertUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BroadcastAlertScalarWhereInput | BroadcastAlertScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutReportedByNestedInput = {
    create?: XOR<IncidentCreateWithoutReportedByInput, IncidentUncheckedCreateWithoutReportedByInput> | IncidentCreateWithoutReportedByInput[] | IncidentUncheckedCreateWithoutReportedByInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReportedByInput | IncidentCreateOrConnectWithoutReportedByInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutReportedByInput | IncidentUpsertWithWhereUniqueWithoutReportedByInput[]
    createMany?: IncidentCreateManyReportedByInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutReportedByInput | IncidentUpdateWithWhereUniqueWithoutReportedByInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutReportedByInput | IncidentUpdateManyWithWhereWithoutReportedByInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type WardenCheckinUpdateManyWithoutWardenNestedInput = {
    create?: XOR<WardenCheckinCreateWithoutWardenInput, WardenCheckinUncheckedCreateWithoutWardenInput> | WardenCheckinCreateWithoutWardenInput[] | WardenCheckinUncheckedCreateWithoutWardenInput[]
    connectOrCreate?: WardenCheckinCreateOrConnectWithoutWardenInput | WardenCheckinCreateOrConnectWithoutWardenInput[]
    upsert?: WardenCheckinUpsertWithWhereUniqueWithoutWardenInput | WardenCheckinUpsertWithWhereUniqueWithoutWardenInput[]
    createMany?: WardenCheckinCreateManyWardenInputEnvelope
    set?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    disconnect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    delete?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    connect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    update?: WardenCheckinUpdateWithWhereUniqueWithoutWardenInput | WardenCheckinUpdateWithWhereUniqueWithoutWardenInput[]
    updateMany?: WardenCheckinUpdateManyWithWhereWithoutWardenInput | WardenCheckinUpdateManyWithWhereWithoutWardenInput[]
    deleteMany?: WardenCheckinScalarWhereInput | WardenCheckinScalarWhereInput[]
  }

  export type ZoneStatusUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ZoneStatusCreateWithoutUpdatedByInput, ZoneStatusUncheckedCreateWithoutUpdatedByInput> | ZoneStatusCreateWithoutUpdatedByInput[] | ZoneStatusUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ZoneStatusCreateOrConnectWithoutUpdatedByInput | ZoneStatusCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ZoneStatusUpsertWithWhereUniqueWithoutUpdatedByInput | ZoneStatusUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ZoneStatusCreateManyUpdatedByInputEnvelope
    set?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    disconnect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    delete?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    connect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    update?: ZoneStatusUpdateWithWhereUniqueWithoutUpdatedByInput | ZoneStatusUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ZoneStatusUpdateManyWithWhereWithoutUpdatedByInput | ZoneStatusUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ZoneStatusScalarWhereInput | ZoneStatusScalarWhereInput[]
  }

  export type BroadcastAlertUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<BroadcastAlertCreateWithoutCreatedByInput, BroadcastAlertUncheckedCreateWithoutCreatedByInput> | BroadcastAlertCreateWithoutCreatedByInput[] | BroadcastAlertUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BroadcastAlertCreateOrConnectWithoutCreatedByInput | BroadcastAlertCreateOrConnectWithoutCreatedByInput[]
    upsert?: BroadcastAlertUpsertWithWhereUniqueWithoutCreatedByInput | BroadcastAlertUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BroadcastAlertCreateManyCreatedByInputEnvelope
    set?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
    disconnect?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
    delete?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
    connect?: BroadcastAlertWhereUniqueInput | BroadcastAlertWhereUniqueInput[]
    update?: BroadcastAlertUpdateWithWhereUniqueWithoutCreatedByInput | BroadcastAlertUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: BroadcastAlertUpdateManyWithWhereWithoutCreatedByInput | BroadcastAlertUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BroadcastAlertScalarWhereInput | BroadcastAlertScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutReportedByNestedInput = {
    create?: XOR<IncidentCreateWithoutReportedByInput, IncidentUncheckedCreateWithoutReportedByInput> | IncidentCreateWithoutReportedByInput[] | IncidentUncheckedCreateWithoutReportedByInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutReportedByInput | IncidentCreateOrConnectWithoutReportedByInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutReportedByInput | IncidentUpsertWithWhereUniqueWithoutReportedByInput[]
    createMany?: IncidentCreateManyReportedByInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutReportedByInput | IncidentUpdateWithWhereUniqueWithoutReportedByInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutReportedByInput | IncidentUpdateManyWithWhereWithoutReportedByInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type WardenCheckinUncheckedUpdateManyWithoutWardenNestedInput = {
    create?: XOR<WardenCheckinCreateWithoutWardenInput, WardenCheckinUncheckedCreateWithoutWardenInput> | WardenCheckinCreateWithoutWardenInput[] | WardenCheckinUncheckedCreateWithoutWardenInput[]
    connectOrCreate?: WardenCheckinCreateOrConnectWithoutWardenInput | WardenCheckinCreateOrConnectWithoutWardenInput[]
    upsert?: WardenCheckinUpsertWithWhereUniqueWithoutWardenInput | WardenCheckinUpsertWithWhereUniqueWithoutWardenInput[]
    createMany?: WardenCheckinCreateManyWardenInputEnvelope
    set?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    disconnect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    delete?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    connect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    update?: WardenCheckinUpdateWithWhereUniqueWithoutWardenInput | WardenCheckinUpdateWithWhereUniqueWithoutWardenInput[]
    updateMany?: WardenCheckinUpdateManyWithWhereWithoutWardenInput | WardenCheckinUpdateManyWithWhereWithoutWardenInput[]
    deleteMany?: WardenCheckinScalarWhereInput | WardenCheckinScalarWhereInput[]
  }

  export type ZoneStatusCreateNestedManyWithoutZoneInput = {
    create?: XOR<ZoneStatusCreateWithoutZoneInput, ZoneStatusUncheckedCreateWithoutZoneInput> | ZoneStatusCreateWithoutZoneInput[] | ZoneStatusUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: ZoneStatusCreateOrConnectWithoutZoneInput | ZoneStatusCreateOrConnectWithoutZoneInput[]
    createMany?: ZoneStatusCreateManyZoneInputEnvelope
    connect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
  }

  export type WardenCheckinCreateNestedManyWithoutZoneInput = {
    create?: XOR<WardenCheckinCreateWithoutZoneInput, WardenCheckinUncheckedCreateWithoutZoneInput> | WardenCheckinCreateWithoutZoneInput[] | WardenCheckinUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: WardenCheckinCreateOrConnectWithoutZoneInput | WardenCheckinCreateOrConnectWithoutZoneInput[]
    createMany?: WardenCheckinCreateManyZoneInputEnvelope
    connect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
  }

  export type ZoneStatusUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<ZoneStatusCreateWithoutZoneInput, ZoneStatusUncheckedCreateWithoutZoneInput> | ZoneStatusCreateWithoutZoneInput[] | ZoneStatusUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: ZoneStatusCreateOrConnectWithoutZoneInput | ZoneStatusCreateOrConnectWithoutZoneInput[]
    createMany?: ZoneStatusCreateManyZoneInputEnvelope
    connect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
  }

  export type WardenCheckinUncheckedCreateNestedManyWithoutZoneInput = {
    create?: XOR<WardenCheckinCreateWithoutZoneInput, WardenCheckinUncheckedCreateWithoutZoneInput> | WardenCheckinCreateWithoutZoneInput[] | WardenCheckinUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: WardenCheckinCreateOrConnectWithoutZoneInput | WardenCheckinCreateOrConnectWithoutZoneInput[]
    createMany?: WardenCheckinCreateManyZoneInputEnvelope
    connect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumZoneTypeFieldUpdateOperationsInput = {
    set?: $Enums.ZoneType
  }

  export type ZoneStatusUpdateManyWithoutZoneNestedInput = {
    create?: XOR<ZoneStatusCreateWithoutZoneInput, ZoneStatusUncheckedCreateWithoutZoneInput> | ZoneStatusCreateWithoutZoneInput[] | ZoneStatusUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: ZoneStatusCreateOrConnectWithoutZoneInput | ZoneStatusCreateOrConnectWithoutZoneInput[]
    upsert?: ZoneStatusUpsertWithWhereUniqueWithoutZoneInput | ZoneStatusUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: ZoneStatusCreateManyZoneInputEnvelope
    set?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    disconnect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    delete?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    connect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    update?: ZoneStatusUpdateWithWhereUniqueWithoutZoneInput | ZoneStatusUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: ZoneStatusUpdateManyWithWhereWithoutZoneInput | ZoneStatusUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: ZoneStatusScalarWhereInput | ZoneStatusScalarWhereInput[]
  }

  export type WardenCheckinUpdateManyWithoutZoneNestedInput = {
    create?: XOR<WardenCheckinCreateWithoutZoneInput, WardenCheckinUncheckedCreateWithoutZoneInput> | WardenCheckinCreateWithoutZoneInput[] | WardenCheckinUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: WardenCheckinCreateOrConnectWithoutZoneInput | WardenCheckinCreateOrConnectWithoutZoneInput[]
    upsert?: WardenCheckinUpsertWithWhereUniqueWithoutZoneInput | WardenCheckinUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: WardenCheckinCreateManyZoneInputEnvelope
    set?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    disconnect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    delete?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    connect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    update?: WardenCheckinUpdateWithWhereUniqueWithoutZoneInput | WardenCheckinUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: WardenCheckinUpdateManyWithWhereWithoutZoneInput | WardenCheckinUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: WardenCheckinScalarWhereInput | WardenCheckinScalarWhereInput[]
  }

  export type ZoneStatusUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<ZoneStatusCreateWithoutZoneInput, ZoneStatusUncheckedCreateWithoutZoneInput> | ZoneStatusCreateWithoutZoneInput[] | ZoneStatusUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: ZoneStatusCreateOrConnectWithoutZoneInput | ZoneStatusCreateOrConnectWithoutZoneInput[]
    upsert?: ZoneStatusUpsertWithWhereUniqueWithoutZoneInput | ZoneStatusUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: ZoneStatusCreateManyZoneInputEnvelope
    set?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    disconnect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    delete?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    connect?: ZoneStatusWhereUniqueInput | ZoneStatusWhereUniqueInput[]
    update?: ZoneStatusUpdateWithWhereUniqueWithoutZoneInput | ZoneStatusUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: ZoneStatusUpdateManyWithWhereWithoutZoneInput | ZoneStatusUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: ZoneStatusScalarWhereInput | ZoneStatusScalarWhereInput[]
  }

  export type WardenCheckinUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: XOR<WardenCheckinCreateWithoutZoneInput, WardenCheckinUncheckedCreateWithoutZoneInput> | WardenCheckinCreateWithoutZoneInput[] | WardenCheckinUncheckedCreateWithoutZoneInput[]
    connectOrCreate?: WardenCheckinCreateOrConnectWithoutZoneInput | WardenCheckinCreateOrConnectWithoutZoneInput[]
    upsert?: WardenCheckinUpsertWithWhereUniqueWithoutZoneInput | WardenCheckinUpsertWithWhereUniqueWithoutZoneInput[]
    createMany?: WardenCheckinCreateManyZoneInputEnvelope
    set?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    disconnect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    delete?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    connect?: WardenCheckinWhereUniqueInput | WardenCheckinWhereUniqueInput[]
    update?: WardenCheckinUpdateWithWhereUniqueWithoutZoneInput | WardenCheckinUpdateWithWhereUniqueWithoutZoneInput[]
    updateMany?: WardenCheckinUpdateManyWithWhereWithoutZoneInput | WardenCheckinUpdateManyWithWhereWithoutZoneInput[]
    deleteMany?: WardenCheckinScalarWhereInput | WardenCheckinScalarWhereInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumGateDirectionFieldUpdateOperationsInput = {
    set?: $Enums.GateDirection
  }

  export type EnumLandmarkCategoryFieldUpdateOperationsInput = {
    set?: $Enums.LandmarkCategory
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ZoneCreateNestedOneWithoutStatusesInput = {
    create?: XOR<ZoneCreateWithoutStatusesInput, ZoneUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutStatusesInput
    connect?: ZoneWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutZoneStatusesInput = {
    create?: XOR<UserCreateWithoutZoneStatusesInput, UserUncheckedCreateWithoutZoneStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutZoneStatusesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumZoneStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.ZoneStatusEnum
  }

  export type ZoneUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: XOR<ZoneCreateWithoutStatusesInput, ZoneUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutStatusesInput
    upsert?: ZoneUpsertWithoutStatusesInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutStatusesInput, ZoneUpdateWithoutStatusesInput>, ZoneUncheckedUpdateWithoutStatusesInput>
  }

  export type UserUpdateOneRequiredWithoutZoneStatusesNestedInput = {
    create?: XOR<UserCreateWithoutZoneStatusesInput, UserUncheckedCreateWithoutZoneStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutZoneStatusesInput
    upsert?: UserUpsertWithoutZoneStatusesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutZoneStatusesInput, UserUpdateWithoutZoneStatusesInput>, UserUncheckedUpdateWithoutZoneStatusesInput>
  }

  export type UserCreateNestedOneWithoutBroadcastAlertsInput = {
    create?: XOR<UserCreateWithoutBroadcastAlertsInput, UserUncheckedCreateWithoutBroadcastAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBroadcastAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBroadcastAlertsNestedInput = {
    create?: XOR<UserCreateWithoutBroadcastAlertsInput, UserUncheckedCreateWithoutBroadcastAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBroadcastAlertsInput
    upsert?: UserUpsertWithoutBroadcastAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBroadcastAlertsInput, UserUpdateWithoutBroadcastAlertsInput>, UserUncheckedUpdateWithoutBroadcastAlertsInput>
  }

  export type UserCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumIncidentTypeFieldUpdateOperationsInput = {
    set?: $Enums.IncidentType
  }

  export type UserUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    upsert?: UserUpsertWithoutIncidentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentsInput, UserUpdateWithoutIncidentsInput>, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    connect?: UserWhereUniqueInput
  }

  export type ZoneCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<ZoneCreateWithoutCheckinsInput, ZoneUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutCheckinsInput
    connect?: ZoneWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    upsert?: UserUpsertWithoutCheckinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckinsInput, UserUpdateWithoutCheckinsInput>, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type ZoneUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<ZoneCreateWithoutCheckinsInput, ZoneUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: ZoneCreateOrConnectWithoutCheckinsInput
    upsert?: ZoneUpsertWithoutCheckinsInput
    connect?: ZoneWhereUniqueInput
    update?: XOR<XOR<ZoneUpdateToOneWithWhereWithoutCheckinsInput, ZoneUpdateWithoutCheckinsInput>, ZoneUncheckedUpdateWithoutCheckinsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumZoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneType | EnumZoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneType[] | ListEnumZoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ZoneType[] | ListEnumZoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumZoneTypeFilter<$PrismaModel> | $Enums.ZoneType
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

  export type NestedEnumZoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneType | EnumZoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneType[] | ListEnumZoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ZoneType[] | ListEnumZoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumZoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.ZoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZoneTypeFilter<$PrismaModel>
    _max?: NestedEnumZoneTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumGateDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.GateDirection | EnumGateDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.GateDirection[] | ListEnumGateDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.GateDirection[] | ListEnumGateDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumGateDirectionFilter<$PrismaModel> | $Enums.GateDirection
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumGateDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GateDirection | EnumGateDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.GateDirection[] | ListEnumGateDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.GateDirection[] | ListEnumGateDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumGateDirectionWithAggregatesFilter<$PrismaModel> | $Enums.GateDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGateDirectionFilter<$PrismaModel>
    _max?: NestedEnumGateDirectionFilter<$PrismaModel>
  }

  export type NestedEnumLandmarkCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.LandmarkCategory | EnumLandmarkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LandmarkCategory[] | ListEnumLandmarkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandmarkCategory[] | ListEnumLandmarkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLandmarkCategoryFilter<$PrismaModel> | $Enums.LandmarkCategory
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumLandmarkCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LandmarkCategory | EnumLandmarkCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.LandmarkCategory[] | ListEnumLandmarkCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.LandmarkCategory[] | ListEnumLandmarkCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumLandmarkCategoryWithAggregatesFilter<$PrismaModel> | $Enums.LandmarkCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLandmarkCategoryFilter<$PrismaModel>
    _max?: NestedEnumLandmarkCategoryFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumZoneStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneStatusEnum | EnumZoneStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneStatusEnum[] | ListEnumZoneStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ZoneStatusEnum[] | ListEnumZoneStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumZoneStatusEnumFilter<$PrismaModel> | $Enums.ZoneStatusEnum
  }

  export type NestedEnumZoneStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ZoneStatusEnum | EnumZoneStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ZoneStatusEnum[] | ListEnumZoneStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ZoneStatusEnum[] | ListEnumZoneStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumZoneStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.ZoneStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumZoneStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumZoneStatusEnumFilter<$PrismaModel>
  }

  export type NestedEnumIncidentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentTypeFilter<$PrismaModel> | $Enums.IncidentType
  }

  export type NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentTypeFilter<$PrismaModel>
    _max?: NestedEnumIncidentTypeFilter<$PrismaModel>
  }

  export type ZoneStatusCreateWithoutUpdatedByInput = {
    id?: string
    status?: $Enums.ZoneStatusEnum
    updatedAt?: Date | string
    zone: ZoneCreateNestedOneWithoutStatusesInput
  }

  export type ZoneStatusUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    zoneId: string
    status?: $Enums.ZoneStatusEnum
    updatedAt?: Date | string
  }

  export type ZoneStatusCreateOrConnectWithoutUpdatedByInput = {
    where: ZoneStatusWhereUniqueInput
    create: XOR<ZoneStatusCreateWithoutUpdatedByInput, ZoneStatusUncheckedCreateWithoutUpdatedByInput>
  }

  export type ZoneStatusCreateManyUpdatedByInputEnvelope = {
    data: ZoneStatusCreateManyUpdatedByInput | ZoneStatusCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type BroadcastAlertCreateWithoutCreatedByInput = {
    id?: string
    message: string
    radiusMeters: number
    centerLat: Decimal | DecimalJsLike | number | string
    centerLng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    active?: boolean
    createdAt?: Date | string
  }

  export type BroadcastAlertUncheckedCreateWithoutCreatedByInput = {
    id?: string
    message: string
    radiusMeters: number
    centerLat: Decimal | DecimalJsLike | number | string
    centerLng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    active?: boolean
    createdAt?: Date | string
  }

  export type BroadcastAlertCreateOrConnectWithoutCreatedByInput = {
    where: BroadcastAlertWhereUniqueInput
    create: XOR<BroadcastAlertCreateWithoutCreatedByInput, BroadcastAlertUncheckedCreateWithoutCreatedByInput>
  }

  export type BroadcastAlertCreateManyCreatedByInputEnvelope = {
    data: BroadcastAlertCreateManyCreatedByInput | BroadcastAlertCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutReportedByInput = {
    id?: string
    type: $Enums.IncidentType
    description: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    timestamp?: Date | string
    resolved?: boolean
  }

  export type IncidentUncheckedCreateWithoutReportedByInput = {
    id?: string
    type: $Enums.IncidentType
    description: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    timestamp?: Date | string
    resolved?: boolean
  }

  export type IncidentCreateOrConnectWithoutReportedByInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutReportedByInput, IncidentUncheckedCreateWithoutReportedByInput>
  }

  export type IncidentCreateManyReportedByInputEnvelope = {
    data: IncidentCreateManyReportedByInput | IncidentCreateManyReportedByInput[]
    skipDuplicates?: boolean
  }

  export type WardenCheckinCreateWithoutWardenInput = {
    id?: string
    checkedIn?: Date | string
    zone: ZoneCreateNestedOneWithoutCheckinsInput
  }

  export type WardenCheckinUncheckedCreateWithoutWardenInput = {
    id?: string
    zoneId: string
    checkedIn?: Date | string
  }

  export type WardenCheckinCreateOrConnectWithoutWardenInput = {
    where: WardenCheckinWhereUniqueInput
    create: XOR<WardenCheckinCreateWithoutWardenInput, WardenCheckinUncheckedCreateWithoutWardenInput>
  }

  export type WardenCheckinCreateManyWardenInputEnvelope = {
    data: WardenCheckinCreateManyWardenInput | WardenCheckinCreateManyWardenInput[]
    skipDuplicates?: boolean
  }

  export type ZoneStatusUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: ZoneStatusWhereUniqueInput
    update: XOR<ZoneStatusUpdateWithoutUpdatedByInput, ZoneStatusUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<ZoneStatusCreateWithoutUpdatedByInput, ZoneStatusUncheckedCreateWithoutUpdatedByInput>
  }

  export type ZoneStatusUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: ZoneStatusWhereUniqueInput
    data: XOR<ZoneStatusUpdateWithoutUpdatedByInput, ZoneStatusUncheckedUpdateWithoutUpdatedByInput>
  }

  export type ZoneStatusUpdateManyWithWhereWithoutUpdatedByInput = {
    where: ZoneStatusScalarWhereInput
    data: XOR<ZoneStatusUpdateManyMutationInput, ZoneStatusUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type ZoneStatusScalarWhereInput = {
    AND?: ZoneStatusScalarWhereInput | ZoneStatusScalarWhereInput[]
    OR?: ZoneStatusScalarWhereInput[]
    NOT?: ZoneStatusScalarWhereInput | ZoneStatusScalarWhereInput[]
    id?: StringFilter<"ZoneStatus"> | string
    zoneId?: StringFilter<"ZoneStatus"> | string
    status?: EnumZoneStatusEnumFilter<"ZoneStatus"> | $Enums.ZoneStatusEnum
    updatedById?: StringFilter<"ZoneStatus"> | string
    updatedAt?: DateTimeFilter<"ZoneStatus"> | Date | string
  }

  export type BroadcastAlertUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: BroadcastAlertWhereUniqueInput
    update: XOR<BroadcastAlertUpdateWithoutCreatedByInput, BroadcastAlertUncheckedUpdateWithoutCreatedByInput>
    create: XOR<BroadcastAlertCreateWithoutCreatedByInput, BroadcastAlertUncheckedCreateWithoutCreatedByInput>
  }

  export type BroadcastAlertUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: BroadcastAlertWhereUniqueInput
    data: XOR<BroadcastAlertUpdateWithoutCreatedByInput, BroadcastAlertUncheckedUpdateWithoutCreatedByInput>
  }

  export type BroadcastAlertUpdateManyWithWhereWithoutCreatedByInput = {
    where: BroadcastAlertScalarWhereInput
    data: XOR<BroadcastAlertUpdateManyMutationInput, BroadcastAlertUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type BroadcastAlertScalarWhereInput = {
    AND?: BroadcastAlertScalarWhereInput | BroadcastAlertScalarWhereInput[]
    OR?: BroadcastAlertScalarWhereInput[]
    NOT?: BroadcastAlertScalarWhereInput | BroadcastAlertScalarWhereInput[]
    id?: StringFilter<"BroadcastAlert"> | string
    message?: StringFilter<"BroadcastAlert"> | string
    radiusMeters?: IntFilter<"BroadcastAlert"> | number
    centerLat?: DecimalFilter<"BroadcastAlert"> | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFilter<"BroadcastAlert"> | Decimal | DecimalJsLike | number | string
    createdById?: StringFilter<"BroadcastAlert"> | string
    expiresAt?: DateTimeFilter<"BroadcastAlert"> | Date | string
    active?: BoolFilter<"BroadcastAlert"> | boolean
    createdAt?: DateTimeFilter<"BroadcastAlert"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutReportedByInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutReportedByInput, IncidentUncheckedUpdateWithoutReportedByInput>
    create: XOR<IncidentCreateWithoutReportedByInput, IncidentUncheckedCreateWithoutReportedByInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutReportedByInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutReportedByInput, IncidentUncheckedUpdateWithoutReportedByInput>
  }

  export type IncidentUpdateManyWithWhereWithoutReportedByInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutReportedByInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    type?: EnumIncidentTypeFilter<"Incident"> | $Enums.IncidentType
    description?: StringFilter<"Incident"> | string
    latitude?: DecimalFilter<"Incident"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Incident"> | Decimal | DecimalJsLike | number | string
    reportedById?: StringFilter<"Incident"> | string
    timestamp?: DateTimeFilter<"Incident"> | Date | string
    resolved?: BoolFilter<"Incident"> | boolean
  }

  export type WardenCheckinUpsertWithWhereUniqueWithoutWardenInput = {
    where: WardenCheckinWhereUniqueInput
    update: XOR<WardenCheckinUpdateWithoutWardenInput, WardenCheckinUncheckedUpdateWithoutWardenInput>
    create: XOR<WardenCheckinCreateWithoutWardenInput, WardenCheckinUncheckedCreateWithoutWardenInput>
  }

  export type WardenCheckinUpdateWithWhereUniqueWithoutWardenInput = {
    where: WardenCheckinWhereUniqueInput
    data: XOR<WardenCheckinUpdateWithoutWardenInput, WardenCheckinUncheckedUpdateWithoutWardenInput>
  }

  export type WardenCheckinUpdateManyWithWhereWithoutWardenInput = {
    where: WardenCheckinScalarWhereInput
    data: XOR<WardenCheckinUpdateManyMutationInput, WardenCheckinUncheckedUpdateManyWithoutWardenInput>
  }

  export type WardenCheckinScalarWhereInput = {
    AND?: WardenCheckinScalarWhereInput | WardenCheckinScalarWhereInput[]
    OR?: WardenCheckinScalarWhereInput[]
    NOT?: WardenCheckinScalarWhereInput | WardenCheckinScalarWhereInput[]
    id?: StringFilter<"WardenCheckin"> | string
    wardenId?: StringFilter<"WardenCheckin"> | string
    zoneId?: StringFilter<"WardenCheckin"> | string
    checkedIn?: DateTimeFilter<"WardenCheckin"> | Date | string
  }

  export type ZoneStatusCreateWithoutZoneInput = {
    id?: string
    status?: $Enums.ZoneStatusEnum
    updatedAt?: Date | string
    updatedBy: UserCreateNestedOneWithoutZoneStatusesInput
  }

  export type ZoneStatusUncheckedCreateWithoutZoneInput = {
    id?: string
    status?: $Enums.ZoneStatusEnum
    updatedById: string
    updatedAt?: Date | string
  }

  export type ZoneStatusCreateOrConnectWithoutZoneInput = {
    where: ZoneStatusWhereUniqueInput
    create: XOR<ZoneStatusCreateWithoutZoneInput, ZoneStatusUncheckedCreateWithoutZoneInput>
  }

  export type ZoneStatusCreateManyZoneInputEnvelope = {
    data: ZoneStatusCreateManyZoneInput | ZoneStatusCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type WardenCheckinCreateWithoutZoneInput = {
    id?: string
    checkedIn?: Date | string
    warden: UserCreateNestedOneWithoutCheckinsInput
  }

  export type WardenCheckinUncheckedCreateWithoutZoneInput = {
    id?: string
    wardenId: string
    checkedIn?: Date | string
  }

  export type WardenCheckinCreateOrConnectWithoutZoneInput = {
    where: WardenCheckinWhereUniqueInput
    create: XOR<WardenCheckinCreateWithoutZoneInput, WardenCheckinUncheckedCreateWithoutZoneInput>
  }

  export type WardenCheckinCreateManyZoneInputEnvelope = {
    data: WardenCheckinCreateManyZoneInput | WardenCheckinCreateManyZoneInput[]
    skipDuplicates?: boolean
  }

  export type ZoneStatusUpsertWithWhereUniqueWithoutZoneInput = {
    where: ZoneStatusWhereUniqueInput
    update: XOR<ZoneStatusUpdateWithoutZoneInput, ZoneStatusUncheckedUpdateWithoutZoneInput>
    create: XOR<ZoneStatusCreateWithoutZoneInput, ZoneStatusUncheckedCreateWithoutZoneInput>
  }

  export type ZoneStatusUpdateWithWhereUniqueWithoutZoneInput = {
    where: ZoneStatusWhereUniqueInput
    data: XOR<ZoneStatusUpdateWithoutZoneInput, ZoneStatusUncheckedUpdateWithoutZoneInput>
  }

  export type ZoneStatusUpdateManyWithWhereWithoutZoneInput = {
    where: ZoneStatusScalarWhereInput
    data: XOR<ZoneStatusUpdateManyMutationInput, ZoneStatusUncheckedUpdateManyWithoutZoneInput>
  }

  export type WardenCheckinUpsertWithWhereUniqueWithoutZoneInput = {
    where: WardenCheckinWhereUniqueInput
    update: XOR<WardenCheckinUpdateWithoutZoneInput, WardenCheckinUncheckedUpdateWithoutZoneInput>
    create: XOR<WardenCheckinCreateWithoutZoneInput, WardenCheckinUncheckedCreateWithoutZoneInput>
  }

  export type WardenCheckinUpdateWithWhereUniqueWithoutZoneInput = {
    where: WardenCheckinWhereUniqueInput
    data: XOR<WardenCheckinUpdateWithoutZoneInput, WardenCheckinUncheckedUpdateWithoutZoneInput>
  }

  export type WardenCheckinUpdateManyWithWhereWithoutZoneInput = {
    where: WardenCheckinScalarWhereInput
    data: XOR<WardenCheckinUpdateManyMutationInput, WardenCheckinUncheckedUpdateManyWithoutZoneInput>
  }

  export type ZoneCreateWithoutStatusesInput = {
    id?: string
    name: string
    label: string
    capacity: number
    type: $Enums.ZoneType
    geojson: JsonNullValueInput | InputJsonValue
    checkins?: WardenCheckinCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutStatusesInput = {
    id?: string
    name: string
    label: string
    capacity: number
    type: $Enums.ZoneType
    geojson: JsonNullValueInput | InputJsonValue
    checkins?: WardenCheckinUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutStatusesInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutStatusesInput, ZoneUncheckedCreateWithoutStatusesInput>
  }

  export type UserCreateWithoutZoneStatusesInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    broadcastAlerts?: BroadcastAlertCreateNestedManyWithoutCreatedByInput
    incidents?: IncidentCreateNestedManyWithoutReportedByInput
    checkins?: WardenCheckinCreateNestedManyWithoutWardenInput
  }

  export type UserUncheckedCreateWithoutZoneStatusesInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    broadcastAlerts?: BroadcastAlertUncheckedCreateNestedManyWithoutCreatedByInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReportedByInput
    checkins?: WardenCheckinUncheckedCreateNestedManyWithoutWardenInput
  }

  export type UserCreateOrConnectWithoutZoneStatusesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutZoneStatusesInput, UserUncheckedCreateWithoutZoneStatusesInput>
  }

  export type ZoneUpsertWithoutStatusesInput = {
    update: XOR<ZoneUpdateWithoutStatusesInput, ZoneUncheckedUpdateWithoutStatusesInput>
    create: XOR<ZoneCreateWithoutStatusesInput, ZoneUncheckedCreateWithoutStatusesInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutStatusesInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutStatusesInput, ZoneUncheckedUpdateWithoutStatusesInput>
  }

  export type ZoneUpdateWithoutStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    geojson?: JsonNullValueInput | InputJsonValue
    checkins?: WardenCheckinUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    geojson?: JsonNullValueInput | InputJsonValue
    checkins?: WardenCheckinUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type UserUpsertWithoutZoneStatusesInput = {
    update: XOR<UserUpdateWithoutZoneStatusesInput, UserUncheckedUpdateWithoutZoneStatusesInput>
    create: XOR<UserCreateWithoutZoneStatusesInput, UserUncheckedCreateWithoutZoneStatusesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutZoneStatusesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutZoneStatusesInput, UserUncheckedUpdateWithoutZoneStatusesInput>
  }

  export type UserUpdateWithoutZoneStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcastAlerts?: BroadcastAlertUpdateManyWithoutCreatedByNestedInput
    incidents?: IncidentUpdateManyWithoutReportedByNestedInput
    checkins?: WardenCheckinUpdateManyWithoutWardenNestedInput
  }

  export type UserUncheckedUpdateWithoutZoneStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcastAlerts?: BroadcastAlertUncheckedUpdateManyWithoutCreatedByNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReportedByNestedInput
    checkins?: WardenCheckinUncheckedUpdateManyWithoutWardenNestedInput
  }

  export type UserCreateWithoutBroadcastAlertsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    zoneStatuses?: ZoneStatusCreateNestedManyWithoutUpdatedByInput
    incidents?: IncidentCreateNestedManyWithoutReportedByInput
    checkins?: WardenCheckinCreateNestedManyWithoutWardenInput
  }

  export type UserUncheckedCreateWithoutBroadcastAlertsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    zoneStatuses?: ZoneStatusUncheckedCreateNestedManyWithoutUpdatedByInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReportedByInput
    checkins?: WardenCheckinUncheckedCreateNestedManyWithoutWardenInput
  }

  export type UserCreateOrConnectWithoutBroadcastAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBroadcastAlertsInput, UserUncheckedCreateWithoutBroadcastAlertsInput>
  }

  export type UserUpsertWithoutBroadcastAlertsInput = {
    update: XOR<UserUpdateWithoutBroadcastAlertsInput, UserUncheckedUpdateWithoutBroadcastAlertsInput>
    create: XOR<UserCreateWithoutBroadcastAlertsInput, UserUncheckedCreateWithoutBroadcastAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBroadcastAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBroadcastAlertsInput, UserUncheckedUpdateWithoutBroadcastAlertsInput>
  }

  export type UserUpdateWithoutBroadcastAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zoneStatuses?: ZoneStatusUpdateManyWithoutUpdatedByNestedInput
    incidents?: IncidentUpdateManyWithoutReportedByNestedInput
    checkins?: WardenCheckinUpdateManyWithoutWardenNestedInput
  }

  export type UserUncheckedUpdateWithoutBroadcastAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zoneStatuses?: ZoneStatusUncheckedUpdateManyWithoutUpdatedByNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReportedByNestedInput
    checkins?: WardenCheckinUncheckedUpdateManyWithoutWardenNestedInput
  }

  export type UserCreateWithoutIncidentsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    zoneStatuses?: ZoneStatusCreateNestedManyWithoutUpdatedByInput
    broadcastAlerts?: BroadcastAlertCreateNestedManyWithoutCreatedByInput
    checkins?: WardenCheckinCreateNestedManyWithoutWardenInput
  }

  export type UserUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    zoneStatuses?: ZoneStatusUncheckedCreateNestedManyWithoutUpdatedByInput
    broadcastAlerts?: BroadcastAlertUncheckedCreateNestedManyWithoutCreatedByInput
    checkins?: WardenCheckinUncheckedCreateNestedManyWithoutWardenInput
  }

  export type UserCreateOrConnectWithoutIncidentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
  }

  export type UserUpsertWithoutIncidentsInput = {
    update: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zoneStatuses?: ZoneStatusUpdateManyWithoutUpdatedByNestedInput
    broadcastAlerts?: BroadcastAlertUpdateManyWithoutCreatedByNestedInput
    checkins?: WardenCheckinUpdateManyWithoutWardenNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zoneStatuses?: ZoneStatusUncheckedUpdateManyWithoutUpdatedByNestedInput
    broadcastAlerts?: BroadcastAlertUncheckedUpdateManyWithoutCreatedByNestedInput
    checkins?: WardenCheckinUncheckedUpdateManyWithoutWardenNestedInput
  }

  export type UserCreateWithoutCheckinsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    zoneStatuses?: ZoneStatusCreateNestedManyWithoutUpdatedByInput
    broadcastAlerts?: BroadcastAlertCreateNestedManyWithoutCreatedByInput
    incidents?: IncidentCreateNestedManyWithoutReportedByInput
  }

  export type UserUncheckedCreateWithoutCheckinsInput = {
    id?: string
    name: string
    role?: $Enums.Role
    pin?: string | null
    createdAt?: Date | string
    zoneStatuses?: ZoneStatusUncheckedCreateNestedManyWithoutUpdatedByInput
    broadcastAlerts?: BroadcastAlertUncheckedCreateNestedManyWithoutCreatedByInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutReportedByInput
  }

  export type UserCreateOrConnectWithoutCheckinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
  }

  export type ZoneCreateWithoutCheckinsInput = {
    id?: string
    name: string
    label: string
    capacity: number
    type: $Enums.ZoneType
    geojson: JsonNullValueInput | InputJsonValue
    statuses?: ZoneStatusCreateNestedManyWithoutZoneInput
  }

  export type ZoneUncheckedCreateWithoutCheckinsInput = {
    id?: string
    name: string
    label: string
    capacity: number
    type: $Enums.ZoneType
    geojson: JsonNullValueInput | InputJsonValue
    statuses?: ZoneStatusUncheckedCreateNestedManyWithoutZoneInput
  }

  export type ZoneCreateOrConnectWithoutCheckinsInput = {
    where: ZoneWhereUniqueInput
    create: XOR<ZoneCreateWithoutCheckinsInput, ZoneUncheckedCreateWithoutCheckinsInput>
  }

  export type UserUpsertWithoutCheckinsInput = {
    update: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type UserUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zoneStatuses?: ZoneStatusUpdateManyWithoutUpdatedByNestedInput
    broadcastAlerts?: BroadcastAlertUpdateManyWithoutCreatedByNestedInput
    incidents?: IncidentUpdateManyWithoutReportedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zoneStatuses?: ZoneStatusUncheckedUpdateManyWithoutUpdatedByNestedInput
    broadcastAlerts?: BroadcastAlertUncheckedUpdateManyWithoutCreatedByNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutReportedByNestedInput
  }

  export type ZoneUpsertWithoutCheckinsInput = {
    update: XOR<ZoneUpdateWithoutCheckinsInput, ZoneUncheckedUpdateWithoutCheckinsInput>
    create: XOR<ZoneCreateWithoutCheckinsInput, ZoneUncheckedCreateWithoutCheckinsInput>
    where?: ZoneWhereInput
  }

  export type ZoneUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: ZoneWhereInput
    data: XOR<ZoneUpdateWithoutCheckinsInput, ZoneUncheckedUpdateWithoutCheckinsInput>
  }

  export type ZoneUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    geojson?: JsonNullValueInput | InputJsonValue
    statuses?: ZoneStatusUpdateManyWithoutZoneNestedInput
  }

  export type ZoneUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    type?: EnumZoneTypeFieldUpdateOperationsInput | $Enums.ZoneType
    geojson?: JsonNullValueInput | InputJsonValue
    statuses?: ZoneStatusUncheckedUpdateManyWithoutZoneNestedInput
  }

  export type ZoneStatusCreateManyUpdatedByInput = {
    id?: string
    zoneId: string
    status?: $Enums.ZoneStatusEnum
    updatedAt?: Date | string
  }

  export type BroadcastAlertCreateManyCreatedByInput = {
    id?: string
    message: string
    radiusMeters: number
    centerLat: Decimal | DecimalJsLike | number | string
    centerLng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    active?: boolean
    createdAt?: Date | string
  }

  export type IncidentCreateManyReportedByInput = {
    id?: string
    type: $Enums.IncidentType
    description: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    timestamp?: Date | string
    resolved?: boolean
  }

  export type WardenCheckinCreateManyWardenInput = {
    id?: string
    zoneId: string
    checkedIn?: Date | string
  }

  export type ZoneStatusUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateOneRequiredWithoutStatusesNestedInput
  }

  export type ZoneStatusUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneStatusUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAlertUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    centerLat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAlertUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    centerLat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastAlertUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    radiusMeters?: IntFieldUpdateOperationsInput | number
    centerLat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    centerLng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutReportedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    description?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateWithoutReportedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    description?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUncheckedUpdateManyWithoutReportedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType
    description?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WardenCheckinUpdateWithoutWardenInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    zone?: ZoneUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type WardenCheckinUncheckedUpdateWithoutWardenInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenCheckinUncheckedUpdateManyWithoutWardenInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneStatusCreateManyZoneInput = {
    id?: string
    status?: $Enums.ZoneStatusEnum
    updatedById: string
    updatedAt?: Date | string
  }

  export type WardenCheckinCreateManyZoneInput = {
    id?: string
    wardenId: string
    checkedIn?: Date | string
  }

  export type ZoneStatusUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: UserUpdateOneRequiredWithoutZoneStatusesNestedInput
  }

  export type ZoneStatusUncheckedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZoneStatusUncheckedUpdateManyWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumZoneStatusEnumFieldUpdateOperationsInput | $Enums.ZoneStatusEnum
    updatedById?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenCheckinUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
    warden?: UserUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type WardenCheckinUncheckedUpdateWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    wardenId?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardenCheckinUncheckedUpdateManyWithoutZoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    wardenId?: StringFieldUpdateOperationsInput | string
    checkedIn?: DateTimeFieldUpdateOperationsInput | Date | string
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