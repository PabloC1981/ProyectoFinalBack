import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import config from '../config/config.js'

/*AWS FIX IN PROGRESS*/
// const s3 = new aws.S3({
//     accessKeyId:config.aws.ACCESS_KEY,
//     secretAccesKey:config.aws.SECRET_KEY
// })
// multerS3({
//         s3:s3,
//         bucket:"adoptmebucket",
//         metadata:(req,file,cb)=>{
//             cb(null,{fieldName:file.fieldname})
//         },
//         key:(req,file,cb)=>{
//             cb(null,Date.now().toString()+file.originalname)
//         }
//     })
export const uploader = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'src/public')
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname);
        }
    })
})