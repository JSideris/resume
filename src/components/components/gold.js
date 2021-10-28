import dot from "dothtml";

var Gold;
export default Gold = dot.component({
    builder(content){
	    return dot.span(content).class("gold")
    },
    style(css){
        css(".gold")
            .color(255, 200, 0);
    }
});