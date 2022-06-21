// update();
view();
// count();
update();





function saveLocal(itemName, newPrice) {
    let bhValue = document.getElementById(newPrice).value;
    let nbhValue = parseFloat(bhValue);

    let local = localStorage.setItem(itemName, nbhValue);
    let BhLocal = localStorage.getItem(itemName);
}

function update() {
    cross();
    saveLocal('leaf', 'nleafppp');
    saveLocal('bh', 'nbhppp');
    saveLocal('hl', 'nhlppp');
    saveLocal('rl', 'nrlppp');
    saveLocal('ls', 'nlsppp');
    saveLocal('st', 'nstppp');


    view();
    count();
    // saveLocal('bh');
}

// function saveLocal() {
//     let bhValue = document.getElementById('nbhppp').value;
//     let nbhValue = parseFloat(bhValue);

//     let local = localStorage.setItem('bh', nbhValue);
//     let BhLocal = localStorage.getItem('bh');
// }

function view() {
    if (localStorage.getItem('bh') != null) {
        document.getElementById('bhppp').innerHTML = localStorage.getItem('bh');
        document.getElementById('nbhppp').value = localStorage.getItem('bh');

    }
    if (localStorage.getItem('leaf') != null) {
        document.getElementById('leafppp').innerHTML = localStorage.getItem('leaf');
        document.getElementById('nleafppp').value = localStorage.getItem('leaf');

    }
    if (localStorage.getItem('hl') != null) {
        document.getElementById('hlppp').innerHTML = localStorage.getItem('hl');
        document.getElementById('nhlppp').value = localStorage.getItem('hl');

    }
    if (localStorage.getItem('rl') != null) {
        document.getElementById('rlppp').innerHTML = localStorage.getItem('rl');
        document.getElementById('nrlppp').value = localStorage.getItem('rl');

    }
    if (localStorage.getItem('ls') != null) {
        document.getElementById('lsppp').innerHTML = localStorage.getItem('ls');
        document.getElementById('nlsppp').value = localStorage.getItem('ls');

    }
    if (localStorage.getItem('st') != null) {
        document.getElementById('stppp').innerHTML = localStorage.getItem('st');
        document.getElementById('nstppp').value = localStorage.getItem('st');

    }
}

//////////////////** Calculation

function count() {
    view();
    const LocalBh = localStorage.getItem('bh');
    const bhppp = parseFloat(LocalBh) || 0;
    //Get input  Quntity
    let bh = document.getElementById('bhinput').value;
    let bhQuantity = parseFloat(bh);
    const bh2 = document.getElementById('leafQuantity').value;
    const leafQuantity = parseFloat(bh2);
    var bh3 = document.getElementById('hlQuantity').value;
    const hlQuantity = parseFloat(bh3);
    const bh4 = document.getElementById('rlQuantity').value;
    const rlQuantity = parseFloat(bh4);
    const bh5 = document.getElementById('lsQuantity').value;
    const lsQuantity = parseFloat(bh5);
    const bh6 = document.getElementById('blankPrice').value;
    const blankQuantity = parseFloat(bh6);
    const bh8 = document.getElementById('stQuantity').value;
    const stQuantity = parseFloat(bh8);

    //update price
    const inputAmount = blankQuantity || 0;
    const bh7 = document.getElementById('blankQuantity').value;
    const NbhAmount7 = parseFloat(bh7);

    // let obhppp = document.getElementById('nbhppp').value;
    // let nbhppp = parseFloat(obhppp);
    // let bhppp = nbhppp || 0;

    let oleafppp = document.getElementById('nleafppp').value;
    let nleafppp = parseFloat(oleafppp);
    let leafppp = nleafppp || 0;
    let ohlppp = document.getElementById('nhlppp').value;
    let nhlppp = parseFloat(ohlppp);
    let hlppp = nhlppp || 0;

    let orlppp = document.getElementById('nrlppp').value;
    let nrlppp = parseFloat(orlppp);
    let rlppp = nrlppp || 0;

    let olsppp = document.getElementById('nlsppp').value;
    let nlsppp = parseFloat(olsppp);
    let lsppp = nlsppp || 0;

    let ostppp = document.getElementById('nstppp').value;
    let nstppp = parseFloat(ostppp);
    let stppp = nstppp || 0;
    //total
    const total =
        bhppp * bhQuantity +
        leafppp * leafQuantity +
        hlppp * hlQuantity +
        rlppp * rlQuantity +
        lsppp * lsQuantity +
        stppp * stQuantity +

        inputAmount * NbhAmount7;

    // let bhppp2 = bhppp;
    // document.getElementById('bhppp').innerText = bhppp2 || 0;
    // let BhLocal = localStorage.getItem('bal');
    let leafppp2 = leafppp;
    document.getElementById('leafppp').innerText = leafppp2 || 0;
    let hlppp2 = hlppp;
    document.getElementById('hlppp').innerText = hlppp2 || 0;

    let rlppp2 = rlppp;
    document.getElementById('rlppp').innerText = rlppp2 || 0;

    let lsppp2 = lsppp;
    document.getElementById('lsppp').innerText = lsppp2 || 0;
    
    let stppp2 = stppp;
    document.getElementById('stppp').innerText = stppp2 || 0;


    let total2 = 'Total' + ' ' + total;

    document.getElementById('OTA').innerText = total2;

    if (
        bh > 0 ||
        bh2 > 0 ||
        bh3 > 0 ||
        bh4 > 0 ||
        bh5 > 0 ||
        bh6 > 0 ||
        bh7 > 0 ||
        bh8 > 0
    ) {
        document.getElementById('clear').setAttribute('style', 'display:block;');
    } else {
        document.getElementById('clear').setAttribute('style', 'display:none;');
    }

    bgclr(bh, 'success1');
    bgclr(bh2, 'success2');
    bgclr(bh3, 'success3');
    bgclr(bh4, 'success4');
    bgclr(bh5, 'success5');
    bgclr(bh7, 'success6');
    bgclr(bh8, 'success9');

    flash();
}
/////////////////////////End of  Function

////////////////// Increase Decrease Handler

function plus() {
    quntityupdate(true, 'bhinput');
}

function minus() {
    quntityupdate(false, 'bhinput');
}

function plus2() {
    quntityupdate(true, 'leafQuantity');
}

function minus2() {
    quntityupdate(false, 'leafQuantity');
}

function plus3() {
    quntityupdate(true, 'hlQuantity');
}

function minus3() {
    quntityupdate(false, 'hlQuantity');
}

function plus4() {
    quntityupdate(true, 'rlQuantity');
}

function minus4() {
    quntityupdate(false, 'rlQuantity');
}

function plus6() {
    quntityupdate(true, 'lsQuantity');
}

function minus6() {
    quntityupdate(false, 'lsQuantity');
}

function plus8() {
    quntityupdate(true, 'blankQuantity');
}

function minus8() {
    quntityupdate(false, 'blankQuantity');
}

function plus9() {
    quntityupdate(true, 'stQuantity');
}

function minus9() {
    quntityupdate(false, 'stQuantity');
}  
///////////////////////

// Increase , Deacrease Function
function quntityupdate(isPlus, input) {
    const caseinput = document.getElementById(input);
    const NbhAmount = parseFloat(caseinput.value);
    let newcount = NbhAmount;
    if (isPlus == true) {
        newcount = NbhAmount + 1;
    }
    if (isPlus == false && newcount > 0) {
        newcount = NbhAmount - 1;
    }
    caseinput.value = newcount;
    count();
} ////////////////

////////////////////clear All
function clear3() {
    clear2();
    clr();
}

function clear2() {
    let caseinput = document.getElementById('bhinput');
    let caseinput2 = document.getElementById('leafQuantity');
    let caseinput3 = document.getElementById('hlQuantity');
    let caseinput4 = document.getElementById('rlQuantity');
    let caseinput6 = document.getElementById('lsQuantity');
    let caseinput7 = document.getElementById('blankPrice');
    let caseinput8 = document.getElementById('blankQuantity');
    let caseinput9 = document.getElementById('stQuantity');


    let newcount = caseinput.value;

    newcount = 0;

    caseinput.value =
        caseinput2.value =
        caseinput3.value =
        caseinput4.value =
        caseinput6.value =
        caseinput7.value =
        caseinput8.value =
        caseinput9.value =

        newcount;

    count();
}

// function clea(array) {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (element > 0) {
//             document.getElementById('clear').setAttribute('style', 'display:block;');
//         } else {
//             document.getElementById('clear').setAttribute('style', 'display:none;');
//         }
//     }
// }
// ///////////////////////

/////////// clear flash card
function clr() {
    setTimeout(() => {
        const cleared = document.getElementById('cleared');

        cleared.style.display = 'inline-flex';
    }, 000);
    setTimeout(() => {
        const cleared = document.getElementById('cleared');

        cleared.style.display = 'none';
    }, 2000);

    setTimeout(() => {
        const cleared2 = document.getElementById('cleared2');

        cleared2.style.display = 'inline-flex';
    }, 000);
    setTimeout(() => {
        const cleared2 = document.getElementById('cleared2');

        cleared2.style.display = 'none';
    }, 2000);
}

function flash() {
    setTimeout(() => {
        const cleared2 = document.getElementById('cleared2');

        cleared2.style.display = 'inline-flex';
    }, 000);
    setTimeout(() => {
        const cleared2 = document.getElementById('cleared2');

        cleared2.style.display = 'none';
    }, 2000);
}
//////////////////////////

////// background color handler
function bgclr(value, id) {
    if (value > 0) {
        document
            .getElementById(id)
            .setAttribute(
                'style',
                'border-color:#f4d03f; background-color:#f4d03f; color:white;'
            );
    } else {
        document
            .getElementById(id)
            .setAttribute('style', 'border-color:#f0f0f0; background-color:#white');
    }
}
///////////////////////

//////Hide & Show Upddate
function cross() {
    document.getElementById('side-bar').setAttribute('style', 'width : 00px;');
}

function edit() {
    document.getElementById('side-bar').setAttribute('style', 'width : 300px;');
}

function setting() {
    alert('COMING SOON');
    location.href = 'index.html';
}

/////////////////////////