import dot from "dothtml";

var Https;
export default Https = dot.component({
    builder(content){
	    return dot.a(content).href("https://" + content + "/").target("_blank");
    }
});