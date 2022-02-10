import { ObjectType, Field, ID } from "type-graphql";
import { prop, modelOptions } from "@typegoose/typegoose";
import { Types } from "mongoose";

@ObjectType()
class Size {
  @prop()
  @Field((type) => String)
  description!: string;

  @prop()
  @Field((type) => Number)
  size!: number;
}

@ObjectType()
@modelOptions({ schemaOptions: { collection: 'pizza_order' } })
export class PizzaOrder {
  @prop()
  @Field((type) => ID)
  readonly _id!: Types.ObjectId;

  @prop({ type: () => [Size] })
  @Field((type) => [Size])
  sizes!: Size[];

  @prop({ type: () => [String] })
  @Field(() => [String])
  sauces!: string[];

  @prop({ type: () => [String] })
  @Field((type) => [String])
  cheeses!: string[];

  @prop({ type: () => [String] })
  @Field((type) => [String])
  toppings!: boolean;
  
  @prop({ type: () => [String] })
  @Field((type) => [String])
  drinks!: string[];


  @prop({ type: () => [String] })
  @Field((type) => [String])
  salads!: string[];

  
  @prop({ type: () => [String] })
  @Field((type) => [String])
  appetizers!: string[];


  @prop({ type: () => [String] })
  @Field((type) => [String])
  desserts!: string[];

}
