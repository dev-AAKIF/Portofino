// import multer from "multer"

// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"./public/temp")
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })

// const upload = multer({
//     storage
// })

// export default upload

// import multer from "multer";
// import fs from "fs";
// import path from "path";

// const tempDir = path.join(process.cwd(), "public", "temp");

// // Create the folder if it doesn't exist
// if (!fs.existsSync(tempDir)) {
//     fs.mkdirSync(tempDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, tempDir);
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage });

// export default upload;

import multer from "multer";
import fs from "fs";
import path from "path";

const tempDir = path.join(process.cwd(), "public", "temp");

// Create the folder if it doesn't exist
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

export default upload;