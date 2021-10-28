import dot from "dothtml";

var Page;

export default Page = dot.component({
    builder(content){
        return dot.div(content).class("page");
    },
    style(css){
        css(".page").display("inline-block")
            .verticalAlign("top")
            .widthIn(8.5)
            .heightIn(11)
            .color("black")
            .backgroundColor("white")
            .marginIn(0.5)
            .boxShadow("0.1in 0.1in 0.05in #222")
    }
});