const puppeteer = require('puppeteer'); // Подключаем puppeteer

describe('Popover button interaction', () => {
  let browser;
  let page;

  // Устанавливаем таймаут для всего набора тестов
  jest.setTimeout(10000); // Увеличиваем таймаут до 10 секунд (по умолчанию 5000)

  beforeAll(async () => {
    // Запуск браузера
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    // Открываем страницу для теста
    await page.goto('http://localhost:8080/'); // Укажите свой локальный URL
  });

  afterAll(async () => {
    // Закрытие браузера после всех тестов
    if (browser) {
      await browser.close();
    }
  });

  it('should show popover on button click', async () => {
    // Ожидание, что поповер будет отображен после клика на кнопку
    await page.click('.popover-btn');
    const popover = await page.$('.popover');
    expect(popover)
      .toBeTruthy(); // Проверяем, что поповер появился
  });
});
