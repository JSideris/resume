import dot from "dothtml";
import Page from "../components/page";
import Gold from "../components/gold";
import Italic from "../components/italic";
import Xp from "../components/xp";
import Http from "../components/http";
import Https from "../components/https";

var ResumeMainPage;

export default ResumeMainPage = dot.component({
    builder(){
        let p1 = Page(
            dot.table(dot.tbody(dot.tr(
                dot.td(
                    dot.span("Josh").style(dot.css.fontSize(37.3))
                    .br().span("Sideris").style(dot.css.fontSize(24))
                ).style(dot.css.paddingIn(0.5).textAlign("center"))
                .td(
                    dot.table(dot.tbody(
                        dot.tr(dot.td(
                            dot
                            .span("Entrepreneurship").h(Gold(" &diams; "))
                            .span("Full Stack Engineering").h(Gold(" &diams; "))
                            .span("UX").h(Gold(" &diams; "))
                            .span("Automation").h(Gold(" &diams; "))
                            .span("Leadership").h(Gold(" &diams; "))
                            //.span("Robotics").h(Gold(" &diams; "))
                            .span("Economics")
                        ).style(dot.css.fontSize(16)).id("skill-areas"))
                        .tr(dot.td(
                            dot.ul(
                                dot.li("&#x1F310; jsideris.com")
                                .li("&#x1F4DE; 647-202-5610")
                                .li("&#x1F4EC; jsideris@jsideris.com")
                                .li("&#x1F3D9;&#xFE0F; Toronto")
                            ).style(dot.css.listStyleType("none"))
                        ).style(dot.css.fontSize(16)).class("black"))
                    ))
                )
            ))).class("blue bold").style(dot.css.backgroundColor("#EEE").widthP(100).height(170))
            .div(
                dot.br().h1("Relevant Professional Experience")
                
                .h2(dot.t("Software Engineering Team Lead - Ezra AI ").h(Italic("SERIES A")).t(" (August 2019 – Present) "))
                .h(Xp("Delivered several new web applications, which automated business reporting and customer sign-ups."))
                .h(Xp("Took on management and tech lead responsibilities for an Agile team. Managed 7 people over 2+ years."))
                .h(Xp("Core platforms: Azure (microservices), .NET Core, Vue.js, SQL Server, HubSpot CRM."))
        
                .br().h2(dot.t("Full Stack Developer (.NET Core 2.0) - Dapasoft ").t(" (January 2019 – July 2019) "))
                .h(Xp("Worked on a fiercely-tight schedule to deliver medical integration software on an Agile team."))
                .h(Xp("Core platforms: .NET Core, Angular 6, Identity Server 4, SQL Server, Entity Framework."))
                
                .br().h2(dot.t("Independent Game Designer – Gear3Games – Saucers.Space ").h(Italic("SUCCESSFUL KICKSTARTER")).t(" (December 2017 – Present)"))
                .h(Xp("Designed and implemented full stack real-time application supporting 100s of concurrent users on a custom engine."))
                .h(Xp("Core platforms: Node.js, MySQL, websockets, WebGL, WebAssembly, web workers, DOThtml responsive UI."))
                
                .br().h2("Cofounder and System Architect – Phashtag (November 2012 – September 2014),")
                .h2("CEO, Consultant – Ladon Labs (formerly Phashtag) (September 2014 – December 2017)")
                .h(Xp("Lead a small team of engineers to build several RESTful APIs for pattern recognition in images and videos."))
                .h(Xp("Wrote and maintained a business plan, lead the company through a major pivot, and raised $90,000 in funding."))
                .h(Xp("Drafted provisional patent applications for an automated point-of-sale image-recognition produce scanner."))
                .h(Xp("Configured and managed MS/Linux servers, as well as many client/server applications (both local and on the cloud)."))
                .h(Xp("Built a piracy-tracking platform for high-value video assets, and a portfolio of innovative web/desktop applications."))
                .h(Xp("Core platforms: C#, Windows Server, IIS 6/7/8, .Net, ASP.NET: MVC and Web API, SQL Server 2012, JavaScript."))
        
                .br().h2("Radio Tools Developer – Research in Motion (May 2012 – August 2013)")
                .h(Xp("Full stack support for a BlackBerry radio automated-testing enterprise solution, and REST API."))
                .h(Xp("Core platforms: ASP.NET, IIS 6, SQL Server, SSRS, Apache Tomcat, GWT, Razor, Webforms, C#, Java, C++."))
                
                // .br().h2("Business Technical Solutions Consultant – Rogers Communications Inc. (September 2007 – August 2008)")
                // .h(Xp("Offered full front-line BlackBerry support to corporate, government and business customers."))
        
                .br().h1("Notable Awards")
                .b("Nicol Entrepreneurship Award ").i("National Winner").b(" (2014) ").h(Https("nicol.jsideris.com"))
                .br().b("Bergeron Medal of Distinction in Science and Technology ").i("Inaugural Winner").b(" (2013) ").h(Https("bergeron.jsideris.com")) // https://web.archive.org/web/20161118025133/https://lassonde.yorku.ca/articles/lassonde-school-awards-bergeron-medal-distinction
                .br().b("COM DEV Engineering Design Award ").i("for an Eye-Controlled Interface").b(" (2013) ").h(Https("tbd.jsideris.com"))
                .br().b("York Engineering Competition ").i("3-Time 1st Place Winner").b(" | Ontario Engineering Competition ").i("Finalist").b(" (2010, 2011, 2012)")
        
                .br().br()
                .h1("Publications")
                .span("Foad Hamidi, Thomas S. Young, Josh Sideris, Ramtin Ardeshiri, Jacob Leung, Pouya Rezai, and Barbara Whitmer 2017, Using Robotics and 3D Printing to Introduce Youth to Computer Science and Electromechanical Engineering")
                .br().span("In ").b(dot.i("Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems")).span(" (CHI EA '17).")
                .br().span("ACM, New York, NY, USA, 942-950. DOI: ").a("https://doi.org/10.1145/3027063.3053346").href("https://doi.org/10.1145/3027063.3053346").target("_blank")
        
                .br().br().span("Joshua Sideris 2015")
                .br().span("POINT OF SALE SYSTEM, SCANNER, AND METHOD, United States Patent Application No. 62/236283.")
                .br().span("A hand-held scanner for automatic produce recognition using machine learning.")
                .br().span("USPTO. Document: ").a("https://jsideris.com/documents/pepi.pdf").href("https://jsideris.com/documents/pepi.pdf").target("_blank")
            ).class("page-content")
            .div().style(dot.css.height(48))

        );
        let p2 = Page(
            dot.div(
                dot.h1("Education, Personal Development, and Leadership")
                .h2("Lassonde School of Engineering at York University")
                .h(Xp("BEng Honors program with a specialization in computer engineering."))
                .h2("Next Canada via University of Toronto (2013 Cohort)")
                .h(Xp("Selected among Canada’s top 36 student entrepreneurs via a rigorous national selection process to receive 8 months of mentorship from some of Canada’s top business leaders, a comprehensive offering of in-kind resources, and academic instruction from some of the world’s top faculty."))
                .h2("York Entrepreneurship Development Institute via Schulich School of Business (2015 Cohort)")
                .h(Xp("Selected among 30 of Canada's top young entrepreneurs to take part in Canada's YEDi incubator program and venture fund, received mentorship from key industry leaders and competed for over $100k in seed funding."))
                .h2("Founder of Robot Fighting Club @ YorkU (2010), Robogals Chapter @ YorkU (2012)")
                .h(Xp("Hosted seminars and competitions for YorkU community, and designed an ambitious 120-pound killer pneumatic-axe-wielding robot to compete in RoboGames. In 2012, we became the first Canadian chapter of Robogals – an organization promoting women in STEM by teaching young girls how to build robots."))
        
                .br().br().h1("Top Three Open-Source Projects")
                .h2("DOThtml")
                .h(Xp(dot.h("A powerful component-based framework for building websites in JavaScript. Modern functionality, but smaller, faster, and easier to use. Routing,  data binding, conditional rendering, style builder, and more! ").h(Https("dothtml.org"))))
        
                .h2("Gear3Engine")
                .h(Xp(dot.h("A fully functional game engine built from the ground up with an emphasis on cross-platform, low-latency, multiplayer web games. ").h(Https("gear3engine.com"))))
        
                .h2("Web-Based Building Modeler")
                .h(Xp(dot.h("A 3D building generator and exported bulit in <b>Web GL (THREE.JS)</b> and optimized using <b>web workers</b>. Allows users to design 3D buildings in their browser, for the purpose of game development. ").h(Http("webbuilderbeta.jsideris.com"))))
        
                .br().br().h1("Other Personal Websites")
                .h2("Sites")
                .h(Https("jsideris.com")).t(", ").h(Https("bizorke.com")).t(", ").h(Https("saucers.space")).t(", ").h(Http("ladonlabs.com"))
                .h2("Social Media")
                .h(Https("youtube.com/jsideris")).t(", ").h(Https("youtube.com/bizorke")).t(", ").h(Https("github.com/jsideris"))
            ).class("page-content").style(dot.css.paddingTopIn(0.5))
        );

        return dot.div(
            dot.h(p1)
            .h(p2)
            .button("&#x1F5A8;&#xFE0F;").style(dot.css.position("fixed").top(2).right(2).height(60).width(60).fontSize(30).backgroundColor(200,200,200,0.8)).onclick(e=>{
                dot.css(e.target).hide();
                dot.css("body").backgroundColor("white");
                dot.css(".page").margin(0).boxShadow("none");
                window.print();
                dot.css(e.target).show();
                dot.css("body").backgroundColor("#555");
                dot.css(".page").marginIn(0.5).boxShadow("0.1in 0.1in 0.05in #222");
            })
        );
    }
});