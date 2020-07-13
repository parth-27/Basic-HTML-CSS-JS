const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));      // converting to array from nodelist.

const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁',
    '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ',
    B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ',
    h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ',
    M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ',
    S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ',
    X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};


const filters = {
    sarcastic(letter, index) {
        // if it is odd
        if (index % 2) {
            return letter.toUpperCase();
        }

        // if it is even
        return letter.toLowerCase();
    },
    funky(letter) {
        // if there is a funky letter for this case.
        let funkyLetter = funkyLetters[letter]
        if (funkyLetter) {
            return funkyLetter;
        }

        // if there is a lower letter for this case.
        funkyLetter = funkyLetters[letter.toLowerCase()];
        if (funkyLetter) {
            return funkyLetter;
        }


        // if nothing than return regular.
        return letter;
    },

    unable(letter) {
        const random = Math.floor(Math.random() * 3);
        if (letter === ' ' && random === 2) {
            return '...';
        }
        return letter;
    },
}



function tranformText(text) {
    // selecting the filters.
    const fil = filterInputs.find(input => input.checked).value;
    //const fil = document.querySelector('[name="filter"]:checked').value;



    // take the text and loop over each letter.
    const mod = Array.from(text).map(filters[fil]);
    console.log(mod);

    result.textContent = mod.join('');
}

textarea.addEventListener('input', e => tranformText(e.target.value));

filterInputs.forEach(input =>
    input.addEventListener('input', () => {
        tranformText(textarea.value);
    })
);