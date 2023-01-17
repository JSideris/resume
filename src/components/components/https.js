import dot, { DotComponent } from "dothtml";

export default class Https extends DotComponent{
    builder(content){
	    return dot.a(content).hRef("https://" + content + "/").target("_blank");
    }
};