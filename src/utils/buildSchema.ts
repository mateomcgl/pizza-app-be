import Container from "typedi";
import { Types } from "mongoose";
import { buildSchema as typeGraphqlBuildSchema } from "type-graphql";

import { resolvers } from "../modules";

import { ObjectIdScalar } from "./";

// Here goes your schema building bit, doing it this way allows us to use it in the tests as well!
export const buildSchema = () =>
  typeGraphqlBuildSchema({
    resolvers,
    container: Container,
    scalarsMap: [{ type: Types.ObjectId, scalar: ObjectIdScalar }],
  });
