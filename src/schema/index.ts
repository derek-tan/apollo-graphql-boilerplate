import { buildSubgraphSchema } from "@apollo/federation";
import UserTypes from "./types/user.graphql.js";
import UserResolvers from "./resolvers/user.resolvers";

export default buildSubgraphSchema([
    { typeDefs: UserTypes, resolvers: UserResolvers },
]);
