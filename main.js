const express = require('express');
const app = express();
app.use(express.json());
HOST = "192.168.42.35"
PORT = 3000

app.listen(PORT, HOST, () => {
    console.log(`Server running on: http://${HOST}:${PORT}`)
});

app.get("/home/profile", (req, res) => {
    res.send(profileData);
});

app.get("/home/history", (req, res) => {
    res.send(historyData);
});
app.get("/home/status", (req, res) => {
    res.send(statusData);
});




var profileData = {
    "img": "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "title": "HELLO!",
    "name": "Daniela"
}


var statusData = {
    "statis": {
        "steps": "15,000",
        "result": "14,000",
    },

    "today": {
        "date": "8 April",
        "duration": "01:09:44",
        "todo": "5000",
        "done": "2345"
    },

    "result": {
        "steps": "53,524",
        "coins": "1000"
    }
}

var historyData = {
    "data": [
        { "date": "8 April", "pt": "100", "km": "12,4 km", "kcol": "1222", "steps": "10,120" },
        { "date": "7 April", "pt": "70", "km": "6,4 km", "kcol": "1222", "steps": "10,120" },
        { "date": "6 April", "pt": "120", "km": "16,4 km", "kcol": "1222", "steps": "10,120" },
        { "date": "5 April", "pt": "90", "km": "10,4 km", "kcol": "1222", "steps": "10,120" },
    ]
}