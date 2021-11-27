import { commands, Disposable, ExtensionContext } from 'vscode';

export abstract class Command implements Disposable {
    private _dispose: Disposable;

    constructor(name: string) {
        this._dispose = commands.registerCommand(name, (...args: any[]) => {
            this.excute(...args);
        });
    }

    dispose() {
        if (this._dispose) {
            this._dispose.dispose();
        }
    }

    abstract excute(...args: any[]): any;
}

interface CommandConstructor {
    new(): Command;
}

const commandsConstructor: CommandConstructor[] = [];

export function collectCommands(): ClassDecorator {
    return (target: any): void => {
        commandsConstructor.push(target);
    };
}

export function registerExtensionCommands(context: ExtensionContext) {
    commandsConstructor.forEach(C => {
        context.subscriptions.push(new C());
    });
}

export enum CommandNames {
    markdownToPDF = 'markdown2pdf.pdf',
}