import { GetFruitsQuery } from "../controller/FruitsController";
import fruitModel from "../model/fruit.model";
import multer from "multer";

export class FruitDomain {
  constructor() {}

  async list(query: GetFruitsQuery) {
    try {
      const filter = query?.name ? { name: query?.name } : {};
      const result = await fruitModel.list({ filter });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async create(body: any, file: any) {
    const data = {
      name: body.name,
      filename: file.filename,
      filepath: file.path,
      mimetype: file.mimetype,
      size: file.size,
    };

    try {
      const created = await fruitModel.create(data)
      return created
    } catch (error) {
      throw error
    }
  }
}
