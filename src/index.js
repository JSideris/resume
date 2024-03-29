import dot from "dothtml";
import ResumeMainPage from "./components/pages/resume-main-page";


dot("body").h(new ResumeMainPage());

dot.css("body")
.backgroundColor("#555")
.fontFamily("Calibri, Times New Roman")//, Try these on mac!: Optima, Roboto, Open Sans
.fontSize(14.6)
.color("#111")
.margin(0);

// dot.css("table{}").borderSpacing(0); // Doesn't work yet.

var globalStyles = `
    table{
        border-spacing: 0;
    }

    h1{
        color: rgb(0, 112, 192);
        font-size: 16px;
        font-weight: bold;
        font-family: Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;
        margin: 0;
    }
    h2{
        font-size: 14.6px;
        font-weight: bold;
        margin: 0;
    }

    a{
        color: #027;
    }

    .page-content{
        padding-left: 0.5in;
        padding-right: 0.5in;
    }

    .blue{
        color: rgb(0, 112, 192);
    }

    .black{
        color: rgb(0, 0, 0);
    }
    .bold{
        font-weight: bold;
    }

    `;

   
document.head.innerHTML += `<style>${globalStyles}</style>`;