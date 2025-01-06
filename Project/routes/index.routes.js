import express from 'express';
import { upload } from '../config/cloudinary.js';

const indexRouter = express.Router();

indexRouter.get('/home', (req, res) => {
    res.render('home');
});

// File upload route
indexRouter.post('/upload-file', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Log the entire req.file object for debugging
    console.log(req.file);

    res.json({
        message: 'File uploaded successfully!',
        fileUrl: req.file.path, // Cloudinary URL for the uploaded file
    });
});


export default indexRouter;