const setMatch = require("./setMatch");

test("getCard", () => {
    expect(setMatch.getCard(1)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(2)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(3)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(4)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(5)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(6)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(7)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(8)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(9)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(10)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(11)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(12)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(13)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(14)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(15)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(16)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(17)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(18)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(19)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(20)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(21)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(22)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(23)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(24)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(25)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Solid",
        number: "1"
    });
    expect(setMatch.getCard(26)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Solid",
        number: "2"
    });
    expect(setMatch.getCard(27)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Solid",
        number: "3"
    });
    expect(setMatch.getCard(28)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(29)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(30)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(31)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(32)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(33)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(34)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(35)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(36)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(37)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(38)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(39)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(40)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(41)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(42)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(43)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(44)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(45)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(46)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(47)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(48)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(49)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(50)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(51)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(52)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Striped",
        number: "1"
    });
    expect(setMatch.getCard(53)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Striped",
        number: "2"
    });
    expect(setMatch.getCard(54)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Striped",
        number: "3"
    });
    expect(setMatch.getCard(55)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(56)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(57)).toEqual({
        color: "Red",
        symbol: "Squiggle",
        shading: "Open",
        number: "3"
    });
    expect(setMatch.getCard(58)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(59)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(60)).toEqual({
        color: "Purple",
        symbol: "Squiggle",
        shading: "Open",
        number: "3"
    });
    expect(setMatch.getCard(61)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(62)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(63)).toEqual({
        color: "Green",
        symbol: "Squiggle",
        shading: "Open",
        number: "3"
    });
    expect(setMatch.getCard(64)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(65)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(66)).toEqual({
        color: "Red",
        symbol: "Diamond",
        shading: "Open",
        number: "3"
    });
    expect(setMatch.getCard(67)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(68)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(69)).toEqual({
        color: "Purple",
        symbol: "Diamond",
        shading: "Open",
        number: "3"
    });
    expect(setMatch.getCard(70)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(71)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(72)).toEqual({
        color: "Green",
        symbol: "Diamond",
        shading: "Open",
        number: "3"
    });
    expect(setMatch.getCard(73)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(74)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(75)).toEqual({
        color: "Red",
        symbol: "Oval",
        shading: "Open",
        number: "3"
    });
    expect(setMatch.getCard(76)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(77)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(78)).toEqual({
        color: "Purple",
        symbol: "Oval",
        shading: "Open",
        number: "3"
    });
    expect(setMatch.getCard(79)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Open",
        number: "1"
    });
    expect(setMatch.getCard(80)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Open",
        number: "2"
    });
    expect(setMatch.getCard(81)).toEqual({
        color: "Green",
        symbol: "Oval",
        shading: "Open",
        number: "3"
    });
});

test("getCard() returns null for invalid card numbers", () => {
    expect(setMatch.getCard(0)).toBeNull();
    expect(setMatch.getCard(82)).toBeNull();
});

test("isMatch() returns true for valid matches", () => {
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Purple", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Purple", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Purple", symbol: "Squiggle", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Green", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Green", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Green", symbol: "Squiggle", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Diamond", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Diamond", shading: "Solid", number: "2" },
            { color: "Red", symbol: "Diamond", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Purple", symbol: "Diamond", shading: "Solid", number: "1" },
            { color: "Purple", symbol: "Diamond", shading: "Solid", number: "2" },
            { color: "Purple", symbol: "Diamond", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Green", symbol: "Diamond", shading: "Solid", number: "1" },
            { color: "Green", symbol: "Diamond", shading: "Solid", number: "2" },
            { color: "Green", symbol: "Diamond", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Oval", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Oval", shading: "Solid", number: "2" },
            { color: "Red", symbol: "Oval", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Purple", symbol: "Oval", shading: "Solid", number: "1" },
            { color: "Purple", symbol: "Oval", shading: "Solid", number: "2" },
            { color: "Purple", symbol: "Oval", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Green", symbol: "Oval", shading: "Solid", number: "1" },
            { color: "Green", symbol: "Oval", shading: "Solid", number: "2" },
            { color: "Green", symbol: "Oval", shading: "Solid", number: "3" }
        )
    ).toBe(true);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Purple", symbol: "Diamond", shading: "Open", number: "2" },
            { color: "Green", symbol: "Oval", shading: "Striped", number: "3" }
        )
    ).toBe(true);
});

test("isMatch() returns false for invalid matches", () => {
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Red", symbol: "Diamond", shading: "Solid", number: "3" }
        )
    ).toBe(false);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Purple", symbol: "Squiggle", shading: "Solid", number: "3" }
        )
    ).toBe(false);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Green", symbol: "Squiggle", shading: "Open", number: "3" }
        )
    ).toBe(false);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Green", symbol: "Squiggle", shading: "Solid", number: "3" }
        )
    ).toBe(false);
});

test("isMatch() returns false for invalid cards", () => {
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "4" }
        )
    ).toBe(false);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "0" }
        )
    ).toBe(false);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "5" }
        )
    ).toBe(false);
    expect(
        setMatch.isMatch(
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "1" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "2" },
            { color: "Red", symbol: "Squiggle", shading: "Solid", number: "-1" }
        )
    ).toBe(false);
});

test("isMatchNums() returns true for valid matches", () => {
    expect(setMatch.isMatchNums(1, 2, 3)).toBe(true);
    expect(setMatch.isMatchNums(2, 3, 1)).toBe(true);
    expect(setMatch.isMatchNums(3, 1, 2)).toBe(true);
});

test("isMatchNums() returns false for invalid matches", () => {
    expect(setMatch.isMatchNums(1, 2, 2)).toBe(false);
    expect(setMatch.isMatchNums(1, 1, 2)).toBe(false);
    expect(setMatch.isMatchNums(2, 2, 1)).toBe(false);
});

test("isMatchNums() returns false for invalid cards", () => {
    expect(setMatch.isMatchNums(1, 2, 4)).toBe(false);
    expect(setMatch.isMatchNums(1, 2, 0)).toBe(false);
    expect(setMatch.isMatchNums(1, 2, 5)).toBe(false);
    expect(setMatch.isMatchNums(1, 2, -1)).toBe(false);
});