import db from "../bootstrapMySql";

class IRequest {
  filter?: any;
}

class FruitModel {
  list(request: IRequest) {
    const { filter = {} } = request;

    if (filter?.name) {
      return db
        .from("fruits")
        .where("name", "like", `%${filter.name}%`)
        .select("*");
    } else {
      return db.from("fruits").where(filter).select("*");
    }
  }

  create(data: any) {
    return db.from("fruits").insert(data);
  }
}

export default new FruitModel();
