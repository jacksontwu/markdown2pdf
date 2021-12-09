import * as fs from 'fs';
import { marked } from 'marked';
const pdf = require('html-pdf');


const mdToPDF = (sourcePath: string) => {
    const htmlPath = sourcePath.replace('.md', '.html');

    const file = fs.readFileSync(sourcePath, "utf8");
    const html = marked.parse(file);
    const options = { format: 'Letter' };
    const pdfPath = htmlPath.replace('.html', '.pdf');

    pdf.create(html, options).toFile(pdfPath, function (err: any, res: any) {
        if (err) { return console.log(err); }
        console.log(res);
    });
};

export default mdToPDF;