interface AbstractFactory
{
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}
class ConcreteFactory1 implements AbstractFactory
{
    createProductA(): AbstractProductA
    {
        return new ConcreteProductA1();
    }
    createProductB(): AbstractProductB
    {
        return new ConcreteProductB1();
    }
}
class ConcreteFactory2 implements AbstractFactory
{
    createProductA(): AbstractProductA
    {
        return new ConcreteProductA2();
    }
    createProductB(): AbstractProductB
    {
        return new ConcreteProductB2();
    }
}
interface AbstractProductA
{
    FuncA(): string;
}
interface AbstractProductB
{
    FuncB(): string;
}
class ConcreteProductA1 implements AbstractProductA
{
    public FuncA(): string
    {
        return 'product A1';
    }
}
class ConcreteProductA2 implements AbstractProductA
{
    public FuncA(): string
    {
        return 'product A2';
    }
}
class ConcreteProductB1 implements AbstractProductB
{
    public FuncB(): string
    {
        return 'product B1';
    }
}

class ConcreteProductB2 implements AbstractProductB
{
    public FuncB(): string
    {
        return 'product B2';
    }
}
function clientCode(factory: AbstractFactory)
{
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productA.FuncA());
    console.log(productB.FuncB());
}

clientCode(new ConcreteFactory1())
clientCode(new ConcreteFactory2())

