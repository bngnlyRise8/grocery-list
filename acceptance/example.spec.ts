import {test, expect} from '@playwright/test'
import {refreshDb} from "./_util"

test.describe('Page', () => {
    test('Add and delete item flow', async({page}) => {
        await refreshDb()
        await page.goto('http://localhost:3000/')

        await test.step('add items', async () => {
            await expect(page.getByText('There are no items in the list yet!')).toBeVisible()
            await page.getByRole('textbox').fill('first list item')
            await page.getByRole('button', {name: 'Add'}).click()
            await page.getByRole('textbox').fill('second list item')
            await page.getByRole('button', {name: 'Add'}).click()
            await expect(page.getByText('first list item')).toBeVisible()
            await expect(page.getByText('second list item')).toBeVisible()
        })

        await test.step('delete item', async () => {
            await page.getByLabel('0-delete').click()
            await expect(page.getByText('first list item')).not.toBeVisible()
            await expect(page.getByText('second list item')).toBeVisible()
        })
    })
})
