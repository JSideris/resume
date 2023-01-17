import dot, { DotComponent } from "dothtml";

export default class Xp extends DotComponent{ 
    builder(content){
        return dot.table(dot.tBody(dot.tr(
            dot.td(dot.div()).class("xp-b")
            .td(content)
        )));
    }
    style(css){
        css(".xp-b")
            .position("relative")
            .width(10);

        css(".xp-b>div")
            .position("absolute")
            .top(2)
            .bottom(2)
            .left(2)
            .right(6)
            .backgroundColor("#A00");
    }
};