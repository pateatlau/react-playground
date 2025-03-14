import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;
