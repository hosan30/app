function cross() {
    document.getElementById('update').setAttribute('style', 'display : none;');
}

function edit() {
    document.getElementById('update').setAttribute('style', 'display : block;');
}
//////////////////** Calculation

function count() {
    //Get input  Quntity
    let bh = document.getElementById('bhinput').value;
    let bhinput = parseFloat(bh);
    const bh2 = document.getElementById('price2').value;
    const NbhAmount2 = parseFloat(bh2);
    var bh3 = document.getElementById('price3').value;
    const NbhAmount3 = parseFloat(bh3);
    const bh4 = document.getElementById('price4').value;
    const NbhAmount4 = parseFloat(bh4);
    const bh5 = document.getElementById('price6').value;
    const NbhAmount5 = parseFloat(bh5);
    const bh6 = document.getElementById('price7').value;
    const NbhAmount6 = parseFloat(bh6);

    //update price
    const inputAmount = NbhAmount6 || 0;
    const bh7 = document.getElementById('price8').value;
    const NbhAmount7 = parseFloat(bh7);

    let nbhppp = document.getElementById('ibhppp').value;
    let Obhppp = parseFloat(nbhppp);
    let bhppp = Obhppp || 272;
    let glppp = 206;
    let rlppp = 85;
    let hlppp = 80;
    let lsppp = 170;

    //total
    const total =
        bhppp * bhinput +
        glppp * NbhAmount2 +
        hlppp * NbhAmount3 +
        rlppp * NbhAmount4 +
        lsppp * NbhAmount5 +
        inputAmount * NbhAmount7;

    document.getElementById('OTA').innerText = total;
    if (bh > 0) {
        document
            .getElementById('success1')
            .setAttribute(
                'style',
                'border-color:#2ecc71; background-color:#2ecc71; color:white;'
            );
    } else {
        document
            .getElementById('success1')
            .setAttribute('style', 'border-color:#f0f0f0; background-color:#white');
    }

    if (bh2 > 0) {
        // document.getElementById('success2').style.borderColor = '#2ecc71';
        // backgroundColor = 'rgb(46, 204, 113)';
        document
            .getElementById('success2')
            .setAttribute(
                'style',
                'border-color:#2ecc71; background-color:#2ecc71; color:white;'
            );
    } else {
        document
            .getElementById('success2')
            .setAttribute('style', 'border-color:#f0f0f0; background-color:#white');
    }
    if (bh4 > 0) {
        document
            .getElementById('success4')
            .setAttribute(
                'style',
                'border-color:#2ecc71; background-color:#2ecc71; color:white;'
            );
    } else {
        document
            .getElementById('success4')
            .setAttribute('style', 'border-color:#f0f0f0; background-color:#white');
    }
    if (bh3 > 0) {
        document
            .getElementById('success3')
            .setAttribute('style', 'border-color:#2ecc71; background-color:#2ecc71;');
    } else {
        document
            .getElementById('success3')
            .setAttribute('style', 'border-color:#f0f0f0; background-color:#white');
    }
    if (bh5 > 0) {
        document
            .getElementById('success5')
            .setAttribute(
                'style',
                'border-color:#2ecc71; background-color:#2ecc71; color:white;'
            );
    } else {
        document
            .getElementById('success5')
            .setAttribute('style', 'border-color:#f0f0f0; background-color:#white');
    }
    if (bh7 > 0) {
        document
            .getElementById('success6')
            .setAttribute(
                'style',
                'border-color:#2ecc71; background-color:#2ecc71; color:white;'
            );
    } else {
        document
            .getElementById('success6')
            .setAttribute('style', 'border-color:#f0f0f0; background-color:#white');
    }
    if (
        bh > 0 ||
        bh2 > 0 ||
        bh3 > 0 ||
        bh4 > 0 ||
        bh5 > 0 ||
        bh6 > 0 ||
        bh7 > 0
    ) {
        // document.getElementById('calaculate2').disabled = false;

        document.getElementById('clear').disabled = false;
    } else {
        document.getElementById('clear').disabled = true;
    }
    setTimeout(() => {
        const cleared2 = document.getElementById('cleared2');

        cleared2.style.display = 'inline-flex';
    }, 000);
    setTimeout(() => {
        const cleared2 = document.getElementById('cleared2');

        cleared2.style.display = 'none';
    }, 2000);
}

function clr() {
    setTimeout(() => {
        const cleared = document.getElementById('cleared');

        cleared.style.display = 'inline-flex';
    }, 000);
    setTimeout(() => {
        const cleared = document.getElementById('cleared');

        cleared.style.display = 'none';
    }, 2000);
}

function clear3() {
    clear2();
    clr();
}
////////////////////clear

function clear2() {
    let caseinput = document.getElementById('bhinput');
    let caseinput2 = document.getElementById('price2');
    let caseinput3 = document.getElementById('price3');
    let caseinput4 = document.getElementById('price4');
    let caseinput6 = document.getElementById('price6');
    let caseinput7 = document.getElementById('price7');
    let caseinput8 = document.getElementById('price8');

    let newcount = caseinput.value;

    newcount = 0;

    caseinput.value =
        caseinput2.value =
        caseinput3.value =
        caseinput4.value =
        caseinput6.value =
        caseinput7.value =
        caseinput8.value =
        newcount;

    count();
} /////////////////////// B & H /////////////////////

function plus() {
    quntityupdate(true);
}

function minus() {
    quntityupdate(false);
}

function quntityupdate(isPlus) {
    const caseinput = document.getElementById('bhinput');
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
}
/////////////// G L /////////////////////

function plus2() {
    quntityupdate2(true);
}

function minus2() {
    quntityupdate2(false);
}

function quntityupdate2(isPlus) {
    const caseinput = document.getElementById('price2');
    const leafamount = parseFloat(caseinput.value);
    let newcount = leafamount;
    if (isPlus == true) {
        newcount = leafamount + 1;

        // caseinput.value = newbh;
        // count()
    }
    if (isPlus == false && newcount > 0) {
        newcount = leafamount - 1;
    }
    caseinput.value = newcount;
    count();
}

/////////////////////// B & H /////////////////////

function plus3() {
    quntityupdate3(true);
}

function minus3() {
    quntityupdate3(false);
}

function quntityupdate3(isPlus) {
    const caseinput = document.getElementById('price3');
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
}
/////////////// G L /////////////////////

function plus4() {
    quntityupdate4(true);
}

function minus4() {
    quntityupdate4(false);
}

function quntityupdate4(isPlus) {
    const caseinput = document.getElementById('price4');
    const NbhAmount = parseFloat(caseinput.value);
    let newcount = NbhAmount;
    if (isPlus == true) {
        newcount = NbhAmount + 1;

        // caseinput.value = newbh;
        // count()
    }
    if (isPlus == false && newcount > 0) {
        newcount = NbhAmount - 1;
    }
    caseinput.value = newcount;
    count();
} /////////////////////// B & H /////////////////////

function plus6() {
    quntityupdate6(true);
}

function minus6() {
    quntityupdate6(false);
}

function quntityupdate6(isPlus) {
    const caseinput = document.getElementById('price6');
    const NbhAmount = parseFloat(caseinput.value);
    let newcount = NbhAmount;
    if (isPlus == true) {
        newcount = NbhAmount + 1;

        // caseinput.value = newbh;
        // count()
    }
    if (isPlus == false && newcount > 0) {
        newcount = NbhAmount - 1;
    }
    caseinput.value = newcount;
    count();
}
/////////////// G L /////////////////////

function plus8() {
    quntityupdate8(true);
}

function minus8() {
    quntityupdate8(false);
}

function quntityupdate8(isPlus) {
    const caseinput = document.getElementById('price8');
    const NbhAmount = parseFloat(caseinput.value);
    let newcount = NbhAmount;
    if (isPlus == true) {
        newcount = NbhAmount + 1;

        // caseinput.value = newbh;
        // count()
    }
    if (isPlus == false && newcount > 0) {
        newcount = NbhAmount - 1;
    }
    caseinput.value = newcount;
    count();
}