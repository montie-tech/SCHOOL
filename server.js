const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Matumaini_School', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const teacherAttendanceSchema = new mongoose.Schema({
    name: String,
    contact: String,
    classIncharge: String,
    date: String
});

const TeacherAttendance = mongoose.model('TeacherAttendance', teacherAttendanceSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, images)
app.use(express.static('public'));

// API endpoint to get teacher attendance data
app.get('/api/teacherAttendance', async(req, res) => {
    try {
        const teacherAttendanceData = await TeacherAttendance.find();
        res.json(teacherAttendanceData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Example API endpoint to add teacher attendance data
app.post('/api/teacherAttendance', async(req, res) => {
    try {
        const newTeacherAttendance = new TeacherAttendance(req.body);
        await newTeacherAttendance.save();
        res.json(newTeacherAttendance);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});