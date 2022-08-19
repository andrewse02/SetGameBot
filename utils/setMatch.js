const colors = ['Red', 'Purple', 'Green'];
const symbols = ['Squiggle', 'Diamond', 'Oval'];
const shadings = ['Solid', 'Striped', 'Open'];
const numbers = ['1', '2', '3'];

const convertToCard = (num) => {
    const color = Math.floor(num / 3) % 3;
    const symbol = Math.floor(num / 9) % 3;
    const shading = Math.floor(num / 27) % 3;
    const number = num % 3;
    return { color, symbol, shading, number };
};

const getCard = (num) => {
    num = num - 1;

    if (num < 0 || num > 80) {
        return null;
    }

    const card = convertToCard(num);
    return {
        color: ['Red', 'Purple', 'Green'][card.color],
        symbol: ['Squiggle', 'Diamond', 'Oval'][card.symbol],
        shading: ['Solid', 'Striped', 'Open'][card.shading],
        number: ['1', '2', '3'][card.number]
    };
};

const isMatch = (card1, card2, card3) => {
    // Check valid card colors
    if(!colors.includes(card1.color) || !colors.includes(card2.color) || !colors.includes(card3.color)) {
        return false;
    }

    // Check valid card symbols
    if(!symbols.includes(card1.symbol) || !symbols.includes(card2.symbol) || !symbols.includes(card3.symbol)) {
        return false;
    }

    // Check valid card shadings
    if(!shadings.includes(card1.shading) || !shadings.includes(card2.shading) || !shadings.includes(card3.shading)) {
        return false;
    }

    // Check valid card numbers
    if(!numbers.includes(card1.number) || !numbers.includes(card2.number) || !numbers.includes(card3.number)) {
        return false;
    }

    const colorMatch = card1.color === card2.color && card2.color === card3.color;
    const symbolMatch = card1.symbol === card2.symbol && card2.symbol === card3.symbol;
    const shadingMatch = card1.shading === card2.shading && card2.shading === card3.shading;
    const numberMatch = card1.number === card2.number && card2.number === card3.number;

    const colorMismatch = card1.color !== card2.color && card2.color !== card3.color && card1.color !== card3.color;
    const symbolMismatch = card1.symbol !== card2.symbol && card2.symbol !== card3.symbol && card1.symbol !== card3.symbol;
    const shadingMismatch = card1.shading !== card2.shading && card2.shading !== card3.shading && card1.shading !== card3.shading;
    const numberMismatch = card1.number !== card2.number && card2.number !== card3.number && card1.number !== card3.number;

    return (colorMatch || colorMismatch) && (symbolMatch || symbolMismatch) && (shadingMatch || shadingMismatch) && (numberMatch || numberMismatch);
};

const isMatchNums = (num1, num2, num3) => {
    const card1 = getCard(num1);
    const card2 = getCard(num2);
    const card3 = getCard(num3);

    if (!card1 || !card2 || !card3) {
        return false;
    }

    return isMatch(card1, card2, card3);
};

const getMatches = (nums) => {
    const matches = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isMatchNums(nums[i], nums[j], nums[k])) {
                    matches.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return matches;
};



module.exports = {
    getCard,
    isMatch,
    isMatchNums,
    getMatches
};