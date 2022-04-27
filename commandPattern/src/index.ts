interface Command
{
    execute(): void;
}
class simpleCommand implements Command
{
    private payload: string;
    constructor(payload: string)
    {
        this.payload = payload;
    }
    public execute(): void
    {
        console.log(`simple ${this.payload}`);
    }
}

class complexCommand implements Command
{
    private receiver: Receiver;
    private a: string;
    private b: string;
    constructor(receiver: Receiver, a: string, b: string)
    {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    execute(): void
    {
        console.log(`complex:`)
        this.receiver.doA(this.a);
        this.receiver.doB(this.b);
    }
}

class Receiver
{
    public doA(a: string): void
    {
        console.log(`receiver do ${a}`);
    }
    public doB(b: string):void {
        console.log(`receiver do ${b}`);
    }
}

class Invoker
{
    private onStart: Command | undefined;
    private onFinish: Command | undefined;
    public setOnStart(command: Command): void
    {
        this.onStart = command;
    }
    public setOnFinish(command: Command): void
    {
        this.onFinish = command;
    }
    public dosome(): void
    {
        if (this.onStart !== undefined)
        {
            this.onStart.execute();
        }
        if (this.onFinish !== undefined)
        {
            this.onFinish.execute();
        }
    }
}
const invoker = new Invoker();
invoker.setOnStart(new simpleCommand('start'));
const receiver = new Receiver();
invoker.setOnFinish(new complexCommand(receiver, 'complex1', 'complex2'));
invoker.dosome();