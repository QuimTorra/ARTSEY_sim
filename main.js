let rules = new Map();
rules.set( '10000000', 'a' );
rules.set( '01000000', 'r' );
rules.set( '00100000', 't' );
rules.set( '00010000', 's' );
rules.set( '00001000', 'e' );
rules.set( '00000100', 'y' );
rules.set( '00000010', 'i' );
rules.set( '00000001', 'o' );
rules.set( '00001001', 'b' );
rules.set( '00000111', 'm' );
rules.set( '00001100', 'c' );
rules.set( '00000011', 'n' );
rules.set( '11100000', 'd' );
rules.set( '00001011', 'p' );
rules.set( '11000000', 'f' );
rules.set( '10110000', 'q' );
rules.set( '01100000', 'g' );
rules.set( '00000110', 'u' );
rules.set( '00001010', 'h' );
rules.set( '01010000', 'v' );
rules.set( '00110000', 'j' );
rules.set( '10010000', 'w' );
rules.set( '00000101', 'k' );
rules.set( '01110000', 'x' );
rules.set( '00001110', 'l' );
rules.set( '11110000', 'z' );
rules.set( '10001000', 'enter' );
rules.set( '10000110', "'" );
rules.set( '10000100', '.' );
rules.set( '10000010', ',' );
rules.set( '10000001', '/' );
rules.set( '00100010', '!' );
rules.set( '00001111', 'space' );
rules.set( '01001000', 'backspace' );
rules.set( '01000010', 'delete' );

let textarea = document.querySelector("#textarea");
let k00 = document.getElementById("k00");
let k01 = document.getElementById("k01");
let k02 = document.getElementById("k02");
let k03 = document.getElementById("k03");
let k10 = document.getElementById("k10");
let k11 = document.getElementById("k11");
let k12 = document.getElementById("k12");
let k13 = document.getElementById("k13");

let combo = "00000000";

let keyboard = window.localStorage.getItem('kb') || 'esp';
let keycodes = window.localStorage.getItem('kc');
if (keycodes == null) keycodes = [85, 73, 79, 80, 74, 75, 76, 192];
else keycodes = keycodes.split(',');

let editKeyBtn = document.getElementById("setKeys");
if (keyboard!='custom') editKeyBtn.setAttribute('disabled', true);
else editKeyBtn.removeAttribute('disabled');
let kbtype = document.getElementById("kbType");
kbtype.value=keyboard;
kbtype.addEventListener('change', () => {
    changeKbLayout(kbtype.value);
})

let text = "";

k00.addEventListener('click', () => {
    combo = combo.replaceAt(0, '1');
})
k01.addEventListener('click', () => {
    combo = combo.replaceAt(1, '1');
})
k02.addEventListener('click', () => {
    combo = combo.replaceAt(2, '1');
})
k03.addEventListener('click', () => {
    combo = combo.replaceAt(3, '1');
})
k10.addEventListener('click', () => {
    combo = combo.replaceAt(4, '1');
})
k11.addEventListener('click', () => {
    combo = combo.replaceAt(5, '1');
})
k12.addEventListener('click', () => {
    combo = combo.replaceAt(6, '1');
})
k13.addEventListener('click', () => {
    combo = combo.replaceAt(7, '1');
})

document.body.addEventListener("keydown",function(){
    if(event.keyCode==keycodes[0]) { k00.click(); }
    if(event.keyCode==keycodes[1]) { k01.click(); }
    if(event.keyCode==keycodes[2]) { k02.click(); }
    if(event.keyCode==keycodes[3]) { k03.click(); }
    if(event.keyCode==keycodes[4]) { k10.click(); }
    if(event.keyCode==keycodes[5]) { k11.click(); }
    if(event.keyCode==keycodes[6]) { k12.click(); }
    if(event.keyCode==keycodes[7]) { k13.click(); }
});
document.body.addEventListener("keyup", function() {
    runCombo(combo);
    combo = "00000000";
});

function runCombo(combo) {
    let l = rules.get(combo);
    if (l == undefined) return;

    switch (l) {
        case 'enter':
            text += '\n'
            break;
        case 'space':
            text += ' '
            break;
        case 'backspace':
            let len = text.length
            text = text.substring(0, len-1);
            break;
        case 'delete':
            todo();
            break;
        default:
            text += l;
            break;
    }

    let tt = text + "<div id='cursor'></div>";
    textarea.innerHTML = tt.split('\n')
      .map((l) => `<span>${l.trim()}</span>`)
      .join('');
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function todo() {
    console.error("This part needs to be done");
}

function changeKbLayout (ly) {
    if (ly == 'esp') {
        keyboard = 'esp';
        keycodes = [85, 73, 79, 80, 74, 75, 76, 192];
    } else if (ly == 'eng') {
        keyboard = 'eng';
        keycodes = [85, 73, 79, 80, 74, 75, 76, 188];
    } else if (ly == 'custom') {
        keyboard = 'custom';
    }
    if (keyboard!=='custom') editKeyBtn.setAttribute('disabled', true);
    else editKeyBtn.removeAttribute('disabled');
    window.localStorage.setItem('kb', keyboard);
    window.localStorage.setItem('kc', keycodes);
}