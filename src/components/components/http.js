import dot from "dothtml";

var Http;
export default Http = dot.component({
    builder(content){
	    return dot.a(content).href("http://" + content + "/").target("_blank");
    }
});