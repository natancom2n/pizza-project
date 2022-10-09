//create hash of images 
import crypto from 'crypto';
import multer from 'multer';
// import prismaClient from "../prisma";

//for take the path of directory
import { extname, resolve } from 'path';

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`

                    return callback(null, fileName);
                }
            })
        }
    }
}
