import dot, { DotComponent } from "dothtml";

export default class Italic extends DotComponent{
    builder(content){
	    return dot.span(content).style(dot.css.fontWeight("normal").fontStyle("italic").color(100,100,100))
    }
};