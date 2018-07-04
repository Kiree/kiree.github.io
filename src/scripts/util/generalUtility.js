/**
 * A toolbox for whacking the javascript on the head.
 */


/**
 * getBrowser()
 * Identifies the client's browser and returns it.
 *
 * @returns {*} - The client's browser
 */
let getBrowser = function() {
    let ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1]||'')};
    }
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/);
        if(tem!==null)   {return {name:'Opera', version:tem[1]};}
    }
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!==null) {M.splice(1,1,tem[1]);}
    return {
        name: M[0],
        version: M[1]
    };
};

/**
 * printConsoleFooter()
 * Prints the cute as fuck footer of mine to the client's console upon site load
 */
let printConsoleFooter = function () {
    let style = 'color: LightSeaGreen';
    let browser = getBrowser();

    if(browser.name === "IE"){
        console.log(" _   ___               \n" +
            "| | / (_)              \n" +
            "| |/ / _ _ __ ___  ___ \n" +
            "|    \\| | '__/ _ \\/ _ \\\n" +
            "| |\\  \\ | | |  __/  __/\n" +
            "\\_| \\_/_|_|  \\___|\\___\n" +
            "Devausta, pelejä ja puujalkoja jo vuodesta 1992.\n" +
            "Business inquiries:\n" +
            "- Kiree#1073 (Discord)\n" +
            "- @PeHeri (Twitter)\n" +
            "- etunimi.sukunimi@hotmail.com\n\n\n" +
            "And please, älä käytä IE:tä...");
    } else {
        console.log("%c _   ___               \n" +
            "| | / (_)              \n" +
            "| |/ / _ _ __ ___  ___ \n" +
            "|    \\| | '__/ _ \\/ _ \\\n" +
            "| |\\  \\ | | |  __/  __/\n" +
            "\\_| \\_/_|_|  \\___|\\___\n" +
            "Devausta, pelejä ja puujalkoja jo vuodesta 1992.\n" +
            "Business inquiries:\n" +
            "- Kiree#1073 (Discord)\n" +
            "- @PeHeri (Twitter)\n" +
            "- etunimi.sukunimi@hotmail.com", style);
    }
};

module.exports = {
    printConsoleFooter: printConsoleFooter
};
