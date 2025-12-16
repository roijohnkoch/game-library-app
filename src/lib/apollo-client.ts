"use client";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT }),
  cache: new InMemoryCache(),
});