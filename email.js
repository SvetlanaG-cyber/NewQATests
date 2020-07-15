const nodemailer = require("nodemailer");

const report = require('./temp/allure-report/widgets/summary.json'); 

const transporter = nodemailer.createTransport({
    service: 'gmail',
    /*pool: true,
    host: "smtp.example.com",
    port: 465,
    sequre: true,// use TLS
    */
    auth: {
        user: "svetlanaLegkaya15@gmail.com",
        pass: "ivfc iymu vzit wzci"
    }
});

let message = {
    from : "svetlanaLegkaya15@gmail.com",
    to: "svetlanaLegkaya15@gmail.com",
    subject: "Autotest results",
    text: "Success",
    html: `<div>Total:  ${report.statistic.total}</div>
    <div>Passed:  ${report.statistic.passed}</div>
    <div>Failed:  ${report.statistic.total - report.statistic.passed}</div>` 
};
/*transporter.sendMail(message, function(error,info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
}) */
