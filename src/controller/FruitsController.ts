import {
  Body,
  Get,
  Post,
  JsonController,
  Res,
  QueryParams,
  UploadedFile,
} from "routing-controllers";
import {  Response } from "express";
import { FruitDomain } from "../domain/fruits.domain";
import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { uploadOptions } from "./middleware/uploadFile";

export class GetFruitsQuery {
  @IsString()
  @IsOptional()
  name!: string;
}

export class ICreateFruit {
  @IsString()
  @IsNotEmpty()
  @Length(1,150)
  name!: string;
}

@JsonController("/v1/fruits")
export class FruitsController {
  @Get("/")
  async getAll(@QueryParams() query: GetFruitsQuery, @Res() res: Response) {
    const fruitDomain = new FruitDomain();
    const result = await fruitDomain.list(query);
    return res.send({
      status: 200,
      message: "success",
      data: result
    })
  }

  @Post("/")
  async post(
    @Body() body: ICreateFruit,
    @UploadedFile("image", { options: uploadOptions }) file: any,
    @Res() res: Response
  ) {
    const fruitDomain = new FruitDomain();
    const result = await fruitDomain.create(body, file);
    return res.send({
      status: 200,
      message: "success",
      data: result,
    });
  }

}
