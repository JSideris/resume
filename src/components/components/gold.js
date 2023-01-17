import dot, { DotComponent } from "dothtml";

export default class Gold extends DotComponent{
    builder(content){
	    return dot.span(content).class("gold")
    }
    style(css){
        css(".gold")
            .color(255, 200, 0);
    }
};