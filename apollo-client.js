import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://naturo.vexinweb.com/graphql",
    cache: new InMemoryCache(),
});

export default client;