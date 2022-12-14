import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_contact_item?: Maybe<Scalars['Boolean']>;
  create_contact_items?: Maybe<Scalars['Boolean']>;
};


export type MutationCreate_Contact_ItemArgs = {
  data: Create_Contact_Input;
};


export type MutationCreate_Contact_ItemsArgs = {
  data?: InputMaybe<Array<Create_Contact_Input>>;
};

export type Query = {
  __typename?: 'Query';
  comment: Array<Comment>;
  comment_aggregated: Array<Comment_Aggregated>;
  comment_by_id?: Maybe<Comment>;
  post: Array<Post>;
  post_aggregated: Array<Post_Aggregated>;
  post_by_id?: Maybe<Post>;
};


export type QueryCommentArgs = {
  filter?: InputMaybe<Comment_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryComment_AggregatedArgs = {
  filter?: InputMaybe<Comment_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryComment_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  filter?: InputMaybe<Post_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPost_AggregatedArgs = {
  filter?: InputMaybe<Post_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPost_By_IdArgs = {
  id: Scalars['ID'];
};

export type Comment = {
  __typename?: 'comment';
  content: Scalars['String'];
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  email: Scalars['String'];
  id: Scalars['ID'];
  post?: Maybe<Post>;
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};


export type CommentPostArgs = {
  filter?: InputMaybe<Post_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Comment_Aggregated = {
  __typename?: 'comment_aggregated';
  avg?: Maybe<Comment_Aggregated_Fields>;
  avgDistinct?: Maybe<Comment_Aggregated_Fields>;
  count?: Maybe<Comment_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Comment_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Comment_Aggregated_Fields>;
  min?: Maybe<Comment_Aggregated_Fields>;
  sum?: Maybe<Comment_Aggregated_Fields>;
  sumDistinct?: Maybe<Comment_Aggregated_Fields>;
};

export type Comment_Aggregated_Count = {
  __typename?: 'comment_aggregated_count';
  content?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Comment_Aggregated_Fields = {
  __typename?: 'comment_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  post?: Maybe<Scalars['Float']>;
};

export type Comment_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Comment_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Comment_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  post?: InputMaybe<Post_Filter>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Create_Contact_Input = {
  content: Scalars['String'];
  date_created?: InputMaybe<Scalars['Date']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  phonenumber?: InputMaybe<Scalars['String']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Post = {
  __typename?: 'post';
  content?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title: Scalars['String'];
  user_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
};

export type Post_Aggregated = {
  __typename?: 'post_aggregated';
  avg?: Maybe<Post_Aggregated_Fields>;
  avgDistinct?: Maybe<Post_Aggregated_Fields>;
  count?: Maybe<Post_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Post_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Post_Aggregated_Fields>;
  min?: Maybe<Post_Aggregated_Fields>;
  sum?: Maybe<Post_Aggregated_Fields>;
  sumDistinct?: Maybe<Post_Aggregated_Fields>;
};

export type Post_Aggregated_Count = {
  __typename?: 'post_aggregated_count';
  content?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  intro?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Post_Aggregated_Fields = {
  __typename?: 'post_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Post_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Post_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Post_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  intro?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type CreateContactMutationVariables = Exact<{
  email: Scalars['String'];
  phonenumber?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
}>;


export type CreateContactMutation = { __typename?: 'Mutation', create_contact_item?: boolean | null };

export type PostQueryVariables = Exact<{
  filter?: InputMaybe<Post_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type PostQuery = { __typename?: 'Query', post: Array<{ __typename?: 'post', id: string, title: string, slug: string, intro?: string | null, content?: string | null, status?: string | null, date_created?: any | null }> };


export const CreateContactDocument = `
    mutation createContact($email: String!, $phonenumber: String, $content: String!) {
  create_contact_item(
    data: {email: $email, phonenumber: $phonenumber, content: $content}
  )
}
    `;
export const useCreateContactMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateContactMutation, TError, CreateContactMutationVariables, TContext>
    ) =>
    useMutation<CreateContactMutation, TError, CreateContactMutationVariables, TContext>(
      ['createContact'],
      (variables?: CreateContactMutationVariables) => fetcher<CreateContactMutation, CreateContactMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateContactDocument, variables)(),
      options
    );
useCreateContactMutation.fetcher = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables: CreateContactMutationVariables) => fetcher<CreateContactMutation, CreateContactMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateContactDocument, variables);
export const PostDocument = `
    query Post($filter: post_filter, $limit: Int, $offset: Int, $page: Int, $search: String, $sort: [String]) {
  post(
    filter: $filter
    limit: $limit
    offset: $offset
    page: $page
    search: $search
    sort: $sort
  ) {
    id
    title
    slug
    intro
    content
    status
    date_created
  }
}
    `;
export const usePostQuery = <
      TData = PostQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: PostQueryVariables,
      options?: UseQueryOptions<PostQuery, TError, TData>
    ) =>
    useQuery<PostQuery, TError, TData>(
      variables === undefined ? ['Post'] : ['Post', variables],
      fetcher<PostQuery, PostQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, PostDocument, variables),
      options
    );
usePostQuery.document = PostDocument;


usePostQuery.getKey = (variables?: PostQueryVariables) => variables === undefined ? ['Post'] : ['Post', variables];
;

usePostQuery.fetcher = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables?: PostQueryVariables) => fetcher<PostQuery, PostQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, PostDocument, variables);