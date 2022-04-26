abstract class Component
{
    protected parent: Component | null;
    public setParent(parent: Component | null)
    {
        this.parent = parent;
    }
    public getParent(): Component | null
    {
        return this.parent;
    }
    public add(component: Component): void{ }
    public remove(component: Component): void { }
    public isComposite(): boolean
    {
        return false;
    }
    constructor() {
        this.parent = null;
    }
    public abstract operation(): string;
}

class Leaf extends Component{
    public operation(): string
    {
        return 'leaf';
    }
}

class Composite extends Component
{
    protected children: Component[] = [];
    public add(component: Component): void
    {
        this.children.push(component);
        component.setParent(this);
    }
    public remove(component: Component): void
    {
        const id = this.children.indexOf(component);
        this.children.splice(id, 1);
        component.setParent(null);
    }
    public isComposite(): boolean
    {
        return true;
    }
    public operation(): string
    {
        const res:Array<null | string> = [];
        for (const child of this.children)
        {
            res.push(child.operation());
        }
        return `branch(${res.join('+')})`;
    }
}

const simple = new Leaf();
const tr = new Composite();
const br1 = new Composite();
br1.add(new Leaf());
br1.add(new Leaf());
const br2 = new Composite();
tr.add(br1);
tr.add(br2);
console.log(tr.operation());


