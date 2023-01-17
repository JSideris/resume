import dot, { DotComponent } from "dothtml";

export default class Http extends DotComponent{
    builder(content){
	    return dot.a(content).hRef("http://" + content + "/").target("_blank");
    }
};