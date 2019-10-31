# React Country List
`country_list` is a React Component for entering mobile numbers with code of choosing country.

## Live demo

All examples on the [demo page](https://koterion.github.io/countryList/)

## Installing

```shell
npm install --save @koterion/country_list
```

## Examples

### Flags image

```css
.cntr-flag {
  background-image: url('@koterion/country_list/dist/img/flags.png')
}
```

### Basic usage

```jsx
import CountryList from '@koterion/country_list';
import '@koterion/country_list/dist/styles.css';

const phone = (<CountryList />);
```

### options

option | type | default | desc |
:--- | :---: | :---: | :--- |
countryAll | array | `[]` | Array of countries iso |
remove | boolean | `false` | If `true` remove countries using `countryAll`
list | boolean | `false` | If `true` create list of country using `countryAll`
flagInInput | boolean | `false` | If `true` add flags to current selector
flagInSelect | boolean | `false` | If `true`  add flags to dropdown
[geo](#geo) | object | | Use for checked country by ip |
closestForm | string | `form` | Closest form or selector |
hasPhone | boolean | `false` | Using your custom phone input from `inputPhoneName` |
inputCountryName | string | `country` | Name for `input` with country name (auto create `type=hidden`)
inputPhoneName | string | `phone` | Name for `input` with phone number
search | boolean | `false` | If `true` create input with name from `inputCountryName`, live search in country list
select | boolean | `false` | If `true` create list like select
required | boolean | `false` | If `true` add required for input
[countries](#countries) | json |  | Countries in json format
                 
### countryAll

Use with `delete` or `list`

Example:

```jsx
<CountryList delete countryAll={['ua', 'us']} />
<CountryList list countryAll={['ua', 'us']} />
```

### geo
For define country by ip we use service [Sypexgeo](https://api.sypexgeo.net/)

You can rewrite method, it option `geo` by default it's object with this parameters: 
```js
{
  url: 'https://api.sypexgeo.net/',
  getIso: response => response.country.iso
}
```
`url` - api for service, `getIso` - return country iso

Also you can use `current` with current country in ISO format. Example:
```jsx
<CountryList current='ua' />
```

### countries
Format for custom countries

```json
{
  "name": "Afghanistan",
  "iso": "af",
  "code": "93"
},
{
  "name": "Albania",
  "iso": "al",
  "code": "355"
},
```