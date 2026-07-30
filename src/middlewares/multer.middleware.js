import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // we can save with other option to avoid ovrride file from /temp
    }
})

export const upload = multer({
    storage
})