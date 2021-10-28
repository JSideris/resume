import dot from "dothtml";

var Italic;
export default Italic = dot.component({
    builder(content){
	    return dot.span(content).style(dot.css.fontWeight("normal").fontStyle("italic").color(100,100,100))
    }
});