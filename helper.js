require('dotenv').config()
import { t, Selector } from 'testcafe'
export async function login() {
    await t.click("#signin_button");
    await t.typeText("#user_login", "username", { paste: true })
    await t.typeText("#user_password", "password", { paste: true })
    await t.click(Selector("input[name=submit]"))
}
export async function loginWithEnv() {
    await t.click("#signin_button");
    await t.typeText("#user_login", process.env.user, { paste: true })
    await t.typeText("#user_password", process.env.pass, { paste: true })
    await t.click(Selector("input[name=submit]"))
}
