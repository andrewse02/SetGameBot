const setMatch = require("./setMatch");
let cardNums = [];
let matchCards = [];

const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

jest.setTimeout(30000);

beforeAll(async () => {
    await driver.get("https://www.setgame.com/set/puzzle");
});

afterAll(async () => {
    await driver.quit();
});

describe("Set Game", () => {
    test("should have 12 cards", async () => {
        const cards = await driver.findElements(By.css(".set-card-td"));
        expect(cards.length).toBe(12);
    });

    test("should find card numbers", async () => {
        const cards = await driver.findElements(By.css(".set-card-td"));
        for (let i = 0; i < cards.length; i++) {
            const card = await driver.findElement(By.xpath(`//*[@id="block-system-main"]/div/center/form/table/tbody/tr[1]/td[1]/table/tbody/tr[1]/td/div[${i+1}]/a/img`));
            const cardNum = await (await card.getAttribute("src")).match(/\/([0-9]+)\./)[1];

            cardNums.push(+cardNum);
            matchCards.push({number: +cardNum, element: card});
        }
        expect(cardNums.length).toBe(12);
    });

    test("should find 6 matches", async () => {
        const matches = setMatch.getMatches(cardNums);
        expect(matches.length).toBe(6);
    });

    test("click all matching cards", async () => {
        const matches = setMatch.getMatches(cardNums);
        for (let i = 0; i < matches.length; i++) {
            for (let j = 0; j < matches[i].length; j++) {
                const card = matchCards.find(card => card.number === matches[i][j]);
                await card.element.click();
            }
        }
        
        expect(matches.length).toBe(6);
    });
});
