'use strict'

/* eslint-env mocha */
const utils = require('./utils')
const chai = require('chai')
const expect = chai.expect
const beautify = require('js-beautify').html

// const is = require('check-more-types')

describe('Utils', () => {
  it('serializeToHTML work fine', () => {
    const mock = `
<div class="FlatSelector_flatSelector__3vafz"><button type="button"
aria-expanded="false"
aria-controls="id-9gq7hp"
aria-haspopup="menu"
class="FlatSelector_selectButton__2DioA">Ленинградская д.5, кв.
40</button>
<div id="id-9gq7hp"
hidden=""
role="menu"
tabindex="-1"
data-dialog="true"
aria-orientation="vertical"
class="FlatSelector_items__293hJ"
aria-label="Выбрать адрес"
style="display: none; position: fixed; left: 100%; top: 100%;">
<button id="id-9gq7hp-1"
tabindex="0"
role="menuitem"
class="FlatSelector_item__3Snl_">Ленинградская д.115, кв.
40</button><button id="id-9gq7hp-2"
tabindex="-1"
role="menuitem"
class="FlatSelector_item__3Snl_">улица Строителей, дом 1222, кв.
100</button></div>
`
    const options = {
      wrap_line_length: 80,
      indent_inner_html: true,
      indent_size: 2,
      wrap_attributes: 'force'
    }
    expect(utils.serializeToHTML([{ 'outerHTML': mock }])).to.equal(beautify(`
<div class="FlatSelector_flatSelector__3vafz"><button type="button"
aria-expanded="false"
aria-haspopup="menu"
class="FlatSelector_selectButton__2DioA">Ленинградская д.5, кв.
40</button>
<div hidden=""
role="menu"
tabindex="-1"
data-dialog="true"
aria-orientation="vertical"
class="FlatSelector_items__293hJ"
aria-label="Выбрать адрес"
style="display: none; position: fixed; left: 100%; top: 100%;">
<button tabindex="0"
role="menuitem"
class="FlatSelector_item__3Snl_">Ленинградская д.115, кв.
40</button><button tabindex="-1"
role="menuitem"
class="FlatSelector_item__3Snl_">улица Строителей, дом 1222, кв.
100</button></div>
`, options))
  })
})
