import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://atomizedobjects.com/i-am-an-example",
  cache: new InMemoryCache()
});
