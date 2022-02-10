import { getModelForClass } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Todo } from "../../entities";
import { NewTodoInput } from "./input";

// This generates the mongoose model for us
export const TodoMongooseModel = getModelForClass(Todo);
export default class TodoModel {
  async getById(_id: Types.ObjectId): Promise<Todo | null> {
    // Use mongoose as usual
    return TodoMongooseModel.findById(_id).lean().exec();
  }

  async create(data: NewTodoInput): Promise<Todo> {
    const todo = new TodoMongooseModel(data);

    return todo.save();
  }
}
