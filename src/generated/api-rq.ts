/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Carmuk API Specs
 * OpenAPI spec version: 1.0
 */
import {
  useQuery,
  useMutation
} from 'react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  UsersControllerGetUsers200,
  User,
  CreateUserPayload,
  SignInResponse,
  SignInPayload
} from './schemas'
import usersControllerGetUsersMutator from '../utils/axios';
import usersControllerCreateMutator from '../utils/axios';
import authControllerSignInMutator from '../utils/axios';


type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const usersControllerGetUsers = (
    
 options?: SecondParameter<typeof usersControllerGetUsersMutator>,signal?: AbortSignal
) => {
      return usersControllerGetUsersMutator<UsersControllerGetUsers200>(
      {url: `/users`, method: 'get', signal
    },
      options);
    }
  

export const getUsersControllerGetUsersQueryKey = () => [`/users`] as const;
  

    
export const getUsersControllerGetUsersQueryOptions = <TData = Awaited<ReturnType<typeof usersControllerGetUsers>>, TError = unknown>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUsers>>, TError, TData>, request?: SecondParameter<typeof usersControllerGetUsersMutator>}
): UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUsers>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getUsersControllerGetUsersQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof usersControllerGetUsers>>> = ({ signal }) => usersControllerGetUsers(requestOptions, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type UsersControllerGetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof usersControllerGetUsers>>>
export type UsersControllerGetUsersQueryError = unknown

export const useUsersControllerGetUsers = <TData = Awaited<ReturnType<typeof usersControllerGetUsers>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof usersControllerGetUsers>>, TError, TData>, request?: SecondParameter<typeof usersControllerGetUsersMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getUsersControllerGetUsersQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


export const usersControllerCreate = (
    createUserPayload: CreateUserPayload,
 options?: SecondParameter<typeof usersControllerCreateMutator>,) => {
      return usersControllerCreateMutator<User>(
      {url: `/users`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createUserPayload
    },
      options);
    }
  


export const getUsersControllerCreateMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerCreate>>, TError,{data: CreateUserPayload}, TContext>, request?: SecondParameter<typeof usersControllerCreateMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof usersControllerCreate>>, TError,{data: CreateUserPayload}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof usersControllerCreate>>, {data: CreateUserPayload}> = (props) => {
          const {data} = props ?? {};

          return  usersControllerCreate(data,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type UsersControllerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerCreate>>>
    export type UsersControllerCreateMutationBody = CreateUserPayload
    export type UsersControllerCreateMutationError = unknown

    export const useUsersControllerCreate = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerCreate>>, TError,{data: CreateUserPayload}, TContext>, request?: SecondParameter<typeof usersControllerCreateMutator>}
) => {
    
      const mutationOptions = getUsersControllerCreateMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
export const authControllerSignIn = (
    signInPayload: SignInPayload,
 options?: SecondParameter<typeof authControllerSignInMutator>,) => {
      return authControllerSignInMutator<SignInResponse>(
      {url: `/auth/login`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: signInPayload
    },
      options);
    }
  


export const getAuthControllerSignInMutationOptions = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerSignIn>>, TError,{data: SignInPayload}, TContext>, request?: SecondParameter<typeof authControllerSignInMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof authControllerSignIn>>, TError,{data: SignInPayload}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerSignIn>>, {data: SignInPayload}> = (props) => {
          const {data} = props ?? {};

          return  authControllerSignIn(data,requestOptions)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type AuthControllerSignInMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerSignIn>>>
    export type AuthControllerSignInMutationBody = SignInPayload
    export type AuthControllerSignInMutationError = unknown

    export const useAuthControllerSignIn = <TError = unknown,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerSignIn>>, TError,{data: SignInPayload}, TContext>, request?: SecondParameter<typeof authControllerSignInMutator>}
) => {
    
      const mutationOptions = getAuthControllerSignInMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    
