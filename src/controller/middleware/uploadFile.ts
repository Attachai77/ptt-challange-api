import multer from "multer";
import { extname } from "path";

 export const uploadOptions = {
  storage: multer.diskStorage({
    destination: "public/",
    filename: (req: any, file: any, cb: any) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extFile = extname(file.originalname)
      cb(null, file.fieldname + "-" + uniqueSuffix + extFile);
    },
  }),
  fileFilter: (req: Request, file: any, cb: any) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
  limits: {},
};