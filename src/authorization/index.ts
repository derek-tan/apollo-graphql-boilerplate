import { shield, rule } from 'graphql-shield'

const isAuthenticated = rule()(async (_parent, _args, ctx, _info) => {
    return ctx.user !== null;
});

const permissions = shield({
    Mutation: {
        
    },
    Query: {
        user: isAuthenticated
    }
});

export default permissions;
