// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/dailyReports', { useNewUrlParser: true, useUnifiedTopology: true });

const reportSchema = new mongoose.Schema({
    name: String,
    date: String,
    workDone: String,
    challenges: String,
});

const Report = mongoose.model('Report', reportSchema);

app.post('/submit-report', (req, res) => {
    const newReport = new Report(req.body);
    newReport.save((err) => {
        if (err) {
            res.status(500).send('Error saving report');
        } else {
            res.status(200).send('Report saved successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});