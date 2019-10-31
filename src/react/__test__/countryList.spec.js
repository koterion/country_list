import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import CountryList from '../countryList'
import countries from '../../country.json'

describe('CountryList', () => {
  let container = null

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  describe('Settings', () => {
    describe('Input', () => {
      test('Phone input is present', () => {
        act(() => {
          render(
            <CountryList />,
            container
          )
        })

        const input = container.querySelector('[type=tel]')
        expect(input).not.toBeNull()
        expect(input.name).toBe('phone')
      })

      test('placeholder', () => {
        act(() => {
          render(
            <CountryList>Phone number</CountryList>,
            container
          )
        })
        const input = container.querySelector('[type=tel]')
        expect(input.placeholder).toBe('Phone number')
      })

      test('autocomplete', () => {
        act(() => {
          render(
            <CountryList autocomplete />,
            container
          )
        })
        const input = container.querySelector('[type=tel]')
        expect(input.autocomplete).toBe('on')
      })

      test('required', () => {
        act(() => {
          render(
            <CountryList required={false} />,
            container
          )
        })
        const input = container.querySelector('[type=tel]')
        expect(input.required).toBeFalsy()
      })

      test('inputPhoneName', () => {
        act(() => {
          render(
            <CountryList inputPhoneName='some' />,
            container
          )
        })
        const input = container.querySelector('[type=tel]')
        expect(input.name).toBe('some')
      })

      test('current', () => {
        act(() => {
          render(
            <CountryList current='ua' />,
            container
          )
        })
        const input = container.querySelector('[type=tel]')
        expect(input.value).toBe('380')

        const block = container.querySelector('.cntr-bl.changed')
        expect(block).not.toBeNull()

        const country = container.querySelector('[type=hidden]')
        expect(country.value).toBe('Ukraine')
      })

      test('search', () => {
        act(() => {
          render(
            <CountryList search />,
            container
          )
        })
        const input = container.querySelector('[type=text]')
        expect(input).not.toBeNull()

        const country = container.querySelector('[type=hidden]')
        expect(country).toBeNull()
      })

      test('search + current without phone', () => {
        act(() => {
          render(
            <CountryList search current='ua' />,
            container
          )
        })

        const input = container.querySelector('[type=text]')
        expect(input.value).toBe('Ukraine')
      })

      test('search + current with phone', () => {
        act(() => {
          render(
            <form>
              <CountryList search hasPhone current='ua' />
              <input type='tel' name='phone' />
            </form>,
            container
          )
        })

        const phone = container.querySelector('[name=phone]')
        const input = container.querySelector('[type=text]')
        expect(input.value).toBe('Ukraine')
        expect(phone.value).toBe('380')
      })

      test('click', () => {
        act(() => {
          render(
            <CountryList />,
            container
          )
        })

        const input = container.querySelector('[type=tel]')

        act(() => {
          input.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })

        const block = container.querySelector('.cntr-bl.active')
        expect(block).not.toBeNull()
      })
    })
    describe('List', () => {
      test('List is present', () => {
        act(() => {
          render(
            <CountryList />,
            container
          )
        })

        const list = container.querySelector('.cntr-ls')
        expect(list).not.toBeNull()
        expect(list.querySelectorAll('li').length).toEqual(countries.length)
      })

      test('flagInSelect', () => {
        act(() => {
          render(
            <CountryList flagInSelect />,
            container
          )
        })

        const list = container.querySelector('.cntr-ls li .cntr-flag')
        expect(list).not.toBeNull()
      })

      test('delete', () => {
        act(() => {
          render(
            <CountryList remove countryAll={['ua', 'us']} />,
            container
          )
        })

        const ua = container.querySelector('.cntr-ls [data-code="ua"]')
        const us = container.querySelector('.cntr-ls [data-code="us"]')
        const li = container.querySelectorAll('.cntr-ls li')
        expect(ua).toBeNull()
        expect(us).toBeNull()
        expect(li.length).toEqual(countries.length - 2)
      })

      test('list', () => {
        act(() => {
          render(
            <CountryList list countryAll={['ua', 'us']} />,
            container
          )
        })

        const ua = container.querySelector('.cntr-ls [data-code="ua"]')
        const us = container.querySelector('.cntr-ls [data-code="us"]')
        const li = container.querySelectorAll('.cntr-ls li')
        expect(ua).not.toBeNull()
        expect(us).not.toBeNull()
        expect(li.length).toEqual(2)
      })
    })
    describe('Flag', () => {
      test('flagInInput', () => {
        act(() => {
          render(
            <CountryList flagInInput />,
            container
          )
        })
        const flag = container.querySelector('.cntr-sl')
        expect(flag).not.toBeNull()
      })

      test('current', () => {
        act(() => {
          render(
            <CountryList flagInInput current='ua' />,
            container
          )
        })
        const flag = container.querySelector('.cntr-sl .cntr-flag-ua')
        expect(flag).not.toBeNull()

        const block = container.querySelector('.cntr-bl.changed')
        expect(block).not.toBeNull()

        const country = container.querySelector('[type=hidden]')
        expect(country.value).toBe('Ukraine')
      })

      test('click', () => {
        act(() => {
          render(
            <CountryList flagInInput />,
            container
          )
        })

        const flag = container.querySelector('.cntr-sl')

        act(() => {
          flag.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })

        const block = container.querySelector('.cntr-bl.active')
        expect(block).not.toBeNull()
      })
    })
    describe('Select', () => {
      test('Select is present', () => {
        act(() => {
          render(
            <CountryList select />,
            container
          )
        })

        const select = container.querySelector('div.cntr-in')
        const arrow = container.querySelector('.cntr-arrow')
        expect(select).not.toBeNull()
        expect(arrow).not.toBeNull()
      })
      test('text', () => {
        act(() => {
          render(
            <CountryList select>Country</CountryList>,
            container
          )
        })

        const select = container.querySelector('div.cntr-in')
        expect(select.innerHTML).toBe('Country')
      })
      test('current with phone', () => {
        act(() => {
          render(
            <form>
              <CountryList select hasPhone current='ua' />
              <input type='tel' name='phone' />
            </form>,
            container
          )
        })

        const select = container.querySelector('div.cntr-in')
        expect(select.innerHTML).toBe('Ukraine')

        const phone = container.querySelector('[name=phone]')
        expect(phone.value).toBe('380')

        const block = container.querySelector('.cntr-bl.changed')
        expect(block).not.toBeNull()

        const country = container.querySelector('[type=hidden]')
        expect(country.value).toBe('Ukraine')
      })
      test('current without phone', () => {
        act(() => {
          render(
            <form>
              <CountryList select current='ua' />
              <input type='tel' name='phone' />
            </form>,
            container
          )
        })

        const phone = container.querySelector('[name=phone]')
        expect(phone.value).toBe('')

        const block = container.querySelector('.cntr-bl.changed')
        expect(block).not.toBeNull()

        const country = container.querySelector('[type=hidden]')
        expect(country.value).toBe('Ukraine')
      })
      test('click', () => {
        act(() => {
          render(
            <CountryList select />,
            container
          )
        })

        const select = container.querySelector('div.cntr-in')

        act(() => {
          select.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })

        const block = container.querySelector('.cntr-bl.active')
        expect(block).not.toBeNull()
      })
    })
    describe('Country hidden input', () => {
      test('Country input is present', () => {
        act(() => {
          render(
            <CountryList />,
            container
          )
        })

        const input = container.querySelector('[type=hidden]')
        expect(input).not.toBeNull()
        expect(input.name).toBe('country')
      })

      test('search', () => {
        act(() => {
          render(
            <CountryList search />,
            container
          )
        })

        const input = container.querySelector('[type=hidden]')
        expect(input).toBeNull()
      })

      test('inputCountryName', () => {
        act(() => {
          render(
            <CountryList inputCountryName='test' />,
            container
          )
        })

        const input = container.querySelector('[type=hidden]')
        expect(input.name).toBe('test')
      })
    })
    describe('Click on country', () => {
      test('default', () => {
        act(() => {
          render(
            <CountryList />,
            container
          )
        })

        const item = container.querySelector('.cntr-ls li:first-child')

        act(() => {
          item.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })

        const block = container.querySelector('.cntr-bl.changed')
        expect(block).not.toBeNull()

        const input = container.querySelector('[type=tel]')
        expect(input.value).toBe(item.dataset.phone)

        const country = container.querySelector('[type=hidden]')
        expect(country.value).toBe(item.dataset.name)
      })

      test('select with phone', () => {
        act(() => {
          render(
            <form>
              <CountryList select hasPhone />
              <input type='tel' name='phone' />
            </form>,
            container
          )
        })

        const item = container.querySelector('.cntr-ls li:first-child')

        act(() => {
          item.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })

        const block = container.querySelector('.cntr-bl.changed')
        expect(block).not.toBeNull()

        const input = container.querySelector('div.cntr-in')
        expect(input.innerHTML).toBe(item.dataset.name)

        const country = container.querySelector('[type=hidden]')
        expect(country.value).toBe(item.dataset.name)

        const phone = container.querySelector('[name=phone]')
        expect(phone.value).toBe(item.dataset.phone)
      })

      test('select without phone', () => {
        act(() => {
          render(
            <CountryList select />,
            container
          )
        })

        const item = container.querySelector('.cntr-ls li:first-child')

        act(() => {
          item.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })

        const phone = container.querySelector('[name=phone]')
        expect(phone).toBeNull()
      })

      test('with flag', () => {
        act(() => {
          render(
            <CountryList flagInInput />,
            container
          )
        })

        const item = container.querySelector('.cntr-ls li:first-child')

        act(() => {
          item.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })

        const flag = container.querySelector(`.cntr-sl .cntr-flag-${item.dataset.code}`)
        expect(flag).not.toBeNull()
      })
    })
  })
})
