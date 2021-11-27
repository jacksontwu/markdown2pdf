import { Remarkable } from 'remarkable';


const mdToPDF = (sourcePath: string, targetPath: string) => {
    // var md = new Remarkable();
    // var fs = require('fs');
    // var file = fs.readFileSync(sourcePath, "utf8");
    // console.log(file);
    // console.log(md.render(file));
    test();
};

const test = () => {
    var fs = require('fs');
    var pdf = require('html-pdf');
    var html = fs.readFileSync('D:\\github\\markdown2pdf\\1.html', 'utf8');
    var options = { format: 'Letter' };

    pdf.create(html, options).toFile('D:\\github\\markdown2pdf\\1.pdf', function (err, res) {
        if (err) {return console.log(err);}
        console.log(res); // { filename: '/app/businesscard.pdf' }
    });
};

export default mdToPDF;