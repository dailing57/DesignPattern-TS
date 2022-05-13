class Context
{
    private strategy: Strategy;
    constructor(strategy: Strategy)
    {
        this.strategy = strategy;
    }
    setStrategy(strategy: Strategy)
    {
        this.strategy = strategy;
    }
    public doSomething(): void
    {
        const res = this.strategy.doalgo(['a', 'c', 'b', 'd']);
        console.log(res.join(','));
    } 
}

interface Strategy
{
    doalgo(data: string[]): string[];
}

class A implements Strategy
{
    doalgo(data: string[]): string[]
    {
        return data.sort();
    }
}

class B implements Strategy
{
    doalgo(data: string[]): string[]
    {
        return data.reverse();
    }
}

const context = new Context(new A());
context.doSomething();
context.setStrategy(new B());
context.doSomething();