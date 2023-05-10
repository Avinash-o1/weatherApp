import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "process";


export const getClient = ()=>{
    const client = new ApolloClient({
        uri: env.API_URL,
        cache : new InMemoryCache(),
        headers : {
            Authorisation : `apikey ${env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
        },
    });
    return client;
}