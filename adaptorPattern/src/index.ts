class Target
{
    public request(): string
    {
        return 'default';
    }
}

class Adaptee
{
    public specificRequest(): string
    {
        return 'abcdefg';
    }
}

class Adapter extends Target
{
    private adaptee: Adaptee;
    constructor(adaptee: Adaptee)
    {
        super();
        this.adaptee = adaptee;
    }
    public request(): string
    {
        const res = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: ${res}`;
    }
}

function clientCode(target: Target)
{
    console.log(target.request());
}

const target = new Target();
clientCode(target);
const adaptee = new Adaptee();
console.log(adaptee.specificRequest());
const adapter = new Adapter(adaptee);
clientCode(adapter);

