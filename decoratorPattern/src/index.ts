interface Component
{
    operation(): string;
}

class ConcreteComponent implements Component
{
    operation(): string
    {
        return 'concreteComponent';
    }
}

class Decorator implements Component
{
    protected component: Component;
    constructor(component: Component)
    {
        this.component = component;
    }
    public operation(): string
    {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator
{
    public operation(): string
    {
        return `A(${super.operation()})`;
    }
}
class ConcreteDecoratorB extends Decorator
{
    public operation(): string
    {
        return `B(${super.operation()})`;
    }
}

const simple = new ConcreteComponent();
const d1 = new ConcreteDecoratorA(simple);
const d2 = new ConcreteDecoratorB(d1);
console.log(d2.operation())
