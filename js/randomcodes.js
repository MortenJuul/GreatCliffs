let code = '';
let getCode = '';
let btnValue;
let str = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789@#$';

let generateCode = () => {

    for (let i = 0; i < 8; i++) {
        let char = Math.floor(Math.random() * str.length);
        code += str.charAt(char);
    };
    return code;
};

document.getElementById("codes").innerHTML = generateCode();

let disableButton = (btnValue = true) => {
    document.getElementById("submit").disabled = btnValue;
    if (btnValue == true){
        document.getElementById("submit").style.backgroundColor = "rgbs(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgbs(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgbs(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgbs(255, 255, 255, 1)";
    };
};

let evaluateCode = () => {
    getCode = document.getElementById("codeentered").value;
    let charset1 = getCode.trim();
    let charset2 = code.trim();
    if (charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);
    } else {
        disableButton(true);
    };
};

let codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);