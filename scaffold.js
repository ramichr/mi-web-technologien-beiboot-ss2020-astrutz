//TODO: Copy images or upload them (the better way

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

fs.readdir(path.join(__dirname + '/scaffold'), async (err, files) => {
    for (let f in files) {
        //let newFile = fs.createReadStream(path.join(__dirname + '/scaffold/' + files[f]));
        //newFile.on('open', (image) => {
        // file = uploaded file
        /*
                const form_data = new FormData();
                form_data.append('field', 'height', 800);
                form_data.append('field', 'width', 600);
                form_data.append('field', 'a,b,c', path.join(__dirname + '/scaffold/' + files[f]));
                let fi = fs.readFileSync(path.join(__dirname + '/scaffold/' + files[f]));
                form_data.append("file", fi);
                console.log(JSON.stringify(form_data));
                const request_config = {
                    method: "post",
                    url: 'http://localhost:3000/upload',
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    data: form_data
                };
                await axios(request_config);
        */

        let form = new FormData();

        form.append('file', fs.createReadStream(path.join(__dirname + '/scaffold/' + files[f])), {
            name: 'test.png'
        });

        axios.create({
            headers: form.getHeaders()
        }).post('http://localhost:3000/upload', form).then(response => {
            console.log(response);
        }).catch(error => {
            if (error.response) {
                console.log(error.response);
            }
            console.log(error.message);
        });
        //});
    }
});

//axios.put()
