const { spawn } = require('child_process');
const babel = spawn('npx', ['babel', 'src/js/main.js', '--watch', '--out-file', 'dist/main.min.js']);
const sass = spawn('sass', ['--style=compressed','--watch', 'src/css/style.scss:dist/style.min.css']);
const app = spawn('nodemon', ['--legacy-watch', 'app.js']);

babel.stdout.on('data', (stdout) => {
    console.log(`Babel: ${stdout}`);
});

babel.stderr.on('data', (stderr) => {
    console.error(`Babel: ${stderr}`);
});

babel.on('close', (code) => {
    console.log(`Babel closed (${code})`);
});
 
sass.stdout.on('data', (stdout) => {
    console.log(`Sass: ${stdout}`);
});

sass.stderr.on('data', (stderr) => {
    console.error(`Sass: ${stderr}`);
});

sass.on('close', (code) => {
    console.log(`Sass closed (${code})`);
});

app.stdout.on('data', (data) => {
    console.log(`App: ${data}`);
});

app.stderr.on('data', (data) => {
    console.error(`App: ${data}`);
});

app.on('close', (code) => {
    console.log(`App closed (${code})`);
});

