import express from "express";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { FruitsController } from "./controller/FruitsController";
import config from "./config";
import multer from 'multer';
const upload = multer();

const PORT = config.PORT || 8000;
const HOST = config.HOST || 'localhost';

const app = createExpressServer({
  routePrefix: "/api",
  controllers: [FruitsController],
  cors: true
});

// app.use(express.static('public'));
app.use('/public', express.static('public'))

app.use(upload.single('image')); 
app.use(express.static('public'));

// app.get("/", async (req: Request, res: Response): Promise<void> => {
//   res.send("Hello")
// });


app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 ${HOST}:${PORT}`);
});
