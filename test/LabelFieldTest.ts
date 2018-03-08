import { LabelField } from '../src/LabelField'
import * as mocha from 'mocha'
import * as chai from 'chai'

const expect = chai.expect;

describe("Label field", () => {
    let label = new LabelField();
    it("should create the basic Label element with the default constructor", () => {
        expect(label.toString()).to.equals("<label class=' ' id='label' for=''>Empty Label</label>");
    });
    it("should add the classes", () => {
        label.addClass('col-md-6');
        expect(label.classes).to.equals("col-md-6");
    });
    it("should modify the label text", () => {
        label.labelText = "new label text";
        expect(label.labelText).to.eq("new label text");
    });
});
