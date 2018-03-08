import { IElements } from './interfaces/IElements'


class LabelField implements IElements {
    private _labelText: string;
    private _classArray: string[];
    private _id: string;
    private _attribute: string;


    constructor(labelText: string, classArray: string[], id: string, attribute: string) {
        this._labelText = labelText || "Empty Label";
        this._classArray = classArray || [""];
        this._id = id || 'label';
        this._attribute = attribute || '';
    }

    setClass(newClass: string): void {
        this._classArray = [];
        this._classArray.push(newClass);
    }

    addClass(classElement: string): void {
        this._classArray.push(classElement);
    }

    get labelText(): string {
        return this._labelText;
    }

    set labelText(value: string) {
        this._labelText = value;
    }
    setAttribute(atribute: string): void {
        this._attribute = atribute;
    }

    setID(newId: string): void {
        this._id = newId;
    }

    setType(newType: string): void {
    }

    onAction(): any {
        return null;
    }
    toString(): string {
        let classes: string = '';
        this._classArray.map(element => {
            classes = classes + ' ' + element
        });
        return "<label class='" + classes
            + "' id='"
            + this._id
            + "' for='"
            + this._attribute
            + "'>"              // End of the label start
            + this._labelText   // Have the label text inserted
            + "</label>";       // Close the label
    }
}