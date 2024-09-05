import {afterAll, afterEach, beforeAll, expect, test, describe, vi} from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from '../app/page'
import {http, HttpResponse} from "msw"
import {setupServer} from "msw/node"
import {POST} from "../app/api/list/route"
import {addItem} from "@/db/list"



const posts = [
    {
        id: 1,
        description: 'first list item',
    }
    // ...
]

export const restHandlers = [
    http.get('/api/list', () => {
        return HttpResponse.json(posts)
    })
]

const server = setupServer(...restHandlers)


describe('Page', () => {
    // Start server before all tests
    beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

    //  Close server after all tests
    afterAll(() => server.close())

    // Reset handlers after each test `important for test isolation`
    afterEach(() => server.resetHandlers())

    test('Displays empty list message', () => {

        server.use(
            http.get('/api/list', () => {
                return HttpResponse.json([])
            })
        )

        render(<Page />)
        expect(screen.getByText('There are no items in the list yet!')).toBeDefined()
    })

    test('Displays list item', async() => {
        render(<Page />)
        expect(await screen.findByText('1: first list item')).toBeDefined()
    })

    // TODO: Test that the correct payload is sent when adding an item /api/list
    test.todo('Adds item to list', async() => {

    })

})
