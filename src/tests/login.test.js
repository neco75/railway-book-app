import { test, expect } from "@playwright/test";

test("ログイン画面のテスト", async ({ page }) => {
  await page.goto("/");

  // 00
  await page.fill('input[type="email"]', "");
  await page.fill('input[type="password"]', "");
  await page.click('button[type="submit"]');

  await expect(
    page.locator("text=メールアドレスとパスワードを入力してください")
  ).toBeVisible();
  //01
  await page.fill('input[type="email"]', "");
  await page.fill('input[type="password"]', "password");
  await page.click('button[type="submit"]');

  await expect(
    page.locator("text=メールアドレスとパスワードを入力してください")
  ).toBeVisible();
  //10
  await page.fill('input[type="email"]', "test@example.com");
  await page.fill('input[type="password"]', "");
  await page.click('button[type="submit"]');

  await expect(
    page.locator("text=メールアドレスとパスワードを入力してください")
  ).toBeVisible();

  //11
  await page.fill('input[type="email"]', "test@example.com");
  await page.fill('input[type="password"]', "password");
  await page.click('button[type="submit"]');

  await expect(
    page.locator("text=メールアドレスとパスワードを入力してください")
  ).not.toBeVisible();
});
