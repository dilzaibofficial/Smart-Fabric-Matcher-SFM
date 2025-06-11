const History = require('../models/historyModel');
const path = require('path');
const tf = require('@tensorflow/tfjs'); // Changed to @tensorflow/tfjs
const multer = require('multer');
const fs = require('fs');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Temporary upload folder

const patternModelPath = path.join(__dirname, '../../fabric-project-demo/models/pattern_model_3.h5');
const typeModelPath = path.join(__dirname, '../../fabric-project-demo/models/fabric_texture_model_3.h5');

let patternModel, typeModel;

const loadModels = async () => {
    try {
        console.log("Pattern Model Path:", patternModelPath);
        console.log("Type Model Path:", typeModelPath);

        if (!patternModel) {
            console.log("Loading pattern model...");
            patternModel = await tf.loadLayersModel(`file://${patternModelPath}`);
            console.log("Pattern model loaded successfully.");
        }
        if (!typeModel) {
            console.log("Loading type model...");
            typeModel = await tf.loadLayersModel(`file://${typeModelPath}`);
            console.log("Type model loaded successfully.");
        }
    } catch (error) {
        console.error("Error loading models:", error.message);
        throw new Error(`Failed to load models. Ensure the paths are correct and the models are compatible.`);
    }
};

exports.predictPattern = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }
        if (!req.file.mimetype.startsWith("image/")) {
            return res.status(400).json({ error: "Uploaded file is not an image." });
        }

        console.log("File received:", req.file); // Debug log
        const filePath = req.file.path; // Path to the uploaded file
        console.log("File path:", filePath); // Debug log

        await loadModels();
        // Add prediction logic here
        const result = {}; // Replace with actual prediction result
        await History.create({ userId: req.user.id, type: 'pattern', result });
        res.json(result);

        fs.unlinkSync(filePath); // Delete the temporary file
    } catch (error) {
        console.error("Error in predictPattern:", error.message);
        res.status(500).json({ error: `Failed to predict pattern: ${error.message}` });
    }
};

exports.predictType = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }
        if (!req.file.mimetype.startsWith("image/")) {
            return res.status(400).json({ error: "Uploaded file is not an image." });
        }

        console.log("File received:", req.file); // Debug log
        const filePath = req.file.path; // Path to the uploaded file
        console.log("File path:", filePath); // Debug log

        await loadModels();
        // Add prediction logic here
        const result = {}; // Replace with actual prediction result
        await History.create({ userId: req.user.id, type: 'type', result });
        res.json(result);

        fs.unlinkSync(filePath); // Delete the temporary file
    } catch (error) {
        console.error("Error in predictType:", error.message);
        res.status(500).json({ error: `Failed to predict type: ${error.message}` });
    }
};

exports.predictColor = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }
        if (!req.file.mimetype.startsWith("image/")) {
            return res.status(400).json({ error: "Uploaded file is not an image." });
        }

        console.log("File received:", req.file); // Debug log
        const filePath = req.file.path; // Path to the uploaded file
        console.log("File path:", filePath); // Debug log

        // Add color prediction logic here
        const result = {}; // Replace with actual prediction result
        await History.create({ userId: req.user.id, type: 'color', result });
        res.json(result);

        fs.unlinkSync(filePath); // Delete the temporary file
    } catch (error) {
        console.error("Error in predictColor:", error.message);
        res.status(500).json({ error: `Failed to predict color: ${error.message}` });
    }
};

// Middleware for file upload
exports.uploadMiddleware = upload.single('file');