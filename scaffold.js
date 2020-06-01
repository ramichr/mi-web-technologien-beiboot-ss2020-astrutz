const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

fs.readdir(path.join(__dirname + '/scaffold'), async (err, files) => {
    for (let f in files) {
        let form = new FormData();
        form.append('height', 800);
        form.append('width', 600);
        form.append('file', fs.createReadStream(path.join(__dirname + '/scaffold/' + files[f])), {
            name: files[f]
        });
        let header = form.getHeaders();
        header.pb = "scaffold";
        axios.create({
            headers: header
        }).post('http://localhost:3000/upload', form).then(response => {
        }).catch(error => {
            if (error.response) {
                console.log(error.response);
            }
            console.log(error.message);
        });
    }
});