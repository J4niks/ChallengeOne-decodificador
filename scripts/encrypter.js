const wordsEncrypt = ({
    a: "uluz",
    b: "eeknay",
    c: "yarx" ,
    d: "yeksihw",
    e: "rotciv",
    f: "mrofinu",
    g: "ognat",
    h: "arreis",
    i: "oemor",
    j: "cebeuq",
    k: "apap",
    l: "racso",
    m: "rebmevon",
    n: "ekim",
    o: "amil",
    p: "olik",
    q: "teiluj",
    r: "aidni",
    s: "letoh",
    t: "flog",
    u: "tortxof",
    v: "ohce",
    w: "atled",
    x: "eilrahc",
    y: "ovarb",
    z: "afla"
});

function letterscheck(){
    const regex = /^([a-z\s])+$/g;
    const check = regex.test(document.getElementById("text_input").value);
    return check
}

function encrypt(){
    if (letterscheck()){
    let text = document.getElementById("text_input").value;
    const reg = new RegExp(Object.keys(wordsEncrypt).join("|"), "g");
    let result = text.replaceAll(reg, (matched) => wordsEncrypt[matched]);
    document.getElementById("text_output").innerHTML = result;
    } else {
        alert("O Decodificador funciona apenas com letras de a-z, minusculas e sem acento!");
    }
}

function decrypt(){
    if (letterscheck()){
    const wordsdecrypt = Object.fromEntries(Object.entries(wordsEncrypt).map(([key, value]) => [value, key]))
    let text = document.getElementById("text_input").value
    const reg = new RegExp(Object.keys(wordsdecrypt).join("|"), "g");
    let result = text.replaceAll(reg, (matched) => wordsdecrypt[matched]);
    document.getElementById("text_output").innerHTML = result;
    } else {
        alert("O Decodificador funciona apenas com letras de a-z, minusculas e sem acento!");
    }
}

async function copy(){
    if(document.getElementById("text_output").value != "Nenhuma mensagem encontrada!"){
        try{
            let copyText = document.getElementById("text_output");
            copyText.focus();
            await navigator.clipboard.writeText(copyText.value)
            .then(()=> {alert("Texto copiado")});
        }catch {
            alert("Esse navegador não é compativel com essa função");
        }
    }else{
        alert("Campo vazio!");
    }
}

function swap(){
    let textInput = document.getElementById("text_input");
    let textOutput = document.getElementById("text_output");
    let texteInputAux = textInput.value;
    if(textOutput.value != 'Nenhuma mensagem encontrada!'){
        textInput.value = textOutput.value;
        textOutput.value = texteInputAux;
    }
}

