// Sorting function to sort the card numbers

sortList = () => {
    let toSort = document.getElementById('list').children;
    toSort = Array.prototype.slice.call(toSort, 0);

    toSort.sort((a, b) => {
        let aord = +a.id.split('-')[1];
        let bord = +b.id.split('-')[1];
        // two elements never have the same ID hence this is sufficient:
        return (aord > bord) ? 1 : -1;
    });

    let parent = document.getElementById('list');
    parent.innerHTML = "";

    for (let i = 0, l = toSort.length; i < l; i++) {
        parent.appendChild(toSort[i]);
    }
}


//Shuffle function to shuffle the cards randomly

shuffleList = (elems) => {

    allElems = (() => {
        let ret = [],
            l = elems.length;
        while (l--) {
            ret[ret.length] = elems[l];
        }
        return ret;
    })();

    shuffled = (() => {
            let l = allElems.length,
                ret = [];
            while (l--) {
                let random = Math.floor(Math.random() * allElems.length),
                    randEl = allElems[random].cloneNode(true);
                allElems.splice(random, 1);
                ret[ret.length] = randEl;
            }
            return ret;
        })(),
        l = elems.length;

    while (l--) {
        elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
        elems[l].parentNode.removeChild(elems[l]);
    }
}

let button = document.querySelector('#shuffle');
button.addEventListener('click', () => {
    shuffleList(document.querySelectorAll('#list > div'))
}, false);