import dot, { DotComponent } from "dothtml";

export default class Https extends DotComponent{
    builder(content, url){
        url = url || "https://" + content + "/";
	    return dot.a(content).hRef(url).target("_blank");
    }
};