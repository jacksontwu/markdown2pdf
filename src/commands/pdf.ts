import * as vscode from 'vscode';
import { mdToPDF } from '../pdf';
import { collectCommands, Command, CommandNames } from './common';

@collectCommands()
export class MarkdownToPDF extends Command {
    constructor() {
        super(CommandNames.markdownToPDF);
    }

    async excute() {
        const editor = vscode.window.activeTextEditor;
        if (editor !== null) {
            if (editor?.document.languageId !== 'markdown') {
                vscode.window.showWarningMessage('Please open a markdown file!');
            } else {
                const sourceFile = editor.document.fileName;
                const targetFile = editor.document.fileName.replace('.md', '.pdf');
                mdToPDF(sourceFile);
                vscode.window.showInformationMessage(`PDF file is saved at ${targetFile}`);
            }
        }
    }
}
