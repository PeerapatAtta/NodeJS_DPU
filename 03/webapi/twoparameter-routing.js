const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// FN students
const fnStudents = [
    { id: 24, name: 'Suchada' },
    { id: 32, name: 'Narawit' }
];
// MK students
const mkStudents = [
    { id: 49, name: 'Chonticha' },
    { id: 57, name: 'Kiattiphom' }
];
// major
const allMajors = {
    'fn': fnStudents,
    'mk': mkStudents
};

// route1
app.get('/api/:major', (req, res, next) => {
    const major = req.params.major.toLowerCase();
    if (major == 'fn') {
        const jsonString = JSON.stringify(fnStudents);
        req.myobj = jsonString;
        next();
    } else if (major == 'mk') {
        const jsonString = JSON.stringify(mkStudents);
        req.myobj = jsonString;
        next();
    } else {
        res.send('Major not found!!!');
    }
}, (req, res) => {
    req.myobj += ' End of Data';
    res.send(req.myobj);
});

// route2
app.get('/api/:id/:major', (req, res) => {
    const id = req.params.id;
    const major = req.params.major.toLowerCase();

    if (allMajors[major]) {
        if (major == 'fn') {
            let stuData = fnStudents.find(obj => obj.id === parseInt(id));
            if (typeof stuData === 'undefined') {
                res.send('This student is no in major FN');
            } else {
                res.send(stuData);
            }
        } else {
            let stuData = mkStudents.find(obj => obj.id === parseInt(id));
            if (typeof stuData === 'undefined') {
                res.send('This student is no in major MK');
            } else {
                res.send(stuData);
            }
        }
    } else {
        res.send('Major not found!!!');
    }
});

app.listen(port, '127.0.0.1', () => {
    console.log(`Listening to request on port ${port}`);
});
