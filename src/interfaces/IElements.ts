export interface IElements {
    setAttribute(atribute: string): void;
    setID(newId: string): void;
    setType(newType: string): void;
    setClass(newClass: string): void;
    addClass(classElement: string): void;
    //TODO: Check if this is good - maybe the onAction should return something for checking
    onAction(): any;
}

