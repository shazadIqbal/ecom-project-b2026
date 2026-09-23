# Northline Supply — static storefront

Three Bootstrap 5.3 pages, markup and styling only. No application JavaScript:
`js/app.js` contains nothing but the hook map for wiring it up yourself.

| File | Screen |
| --- | --- |
| `index.html` | Home / catalog — search bar, category dropdown, sort button, product grid |
| `cart.html` | Cart — line items, quantity steppers, saved for later, order summary |
| `checkout.html` | Checkout — contact, address, delivery method, payment, order summary |
| `css/styles.css` | Design tokens and every custom component |
| `js/app.js` | Comment-only hook map (IDs, `data-action`, `data-field`, templates) |

## Running it

Open `index.html` directly, or serve the folder:

```
python3 -m http.server 5173
```

Bootstrap CSS/JS and the Google Fonts come from CDNs, so the first load needs a network
connection. Bootstrap's own bundle is loaded before `js/app.js` — dropdowns, the collapse
behaviour and `.was-validated` styling work out of the box.

## Wiring notes

- Products in `#productGrid` carry `data-id`, `data-category`, `data-name`, `data-price`,
  `data-rating` and `data-stock`, so you can filter and sort straight off the DOM, or clear
  the grid and render from `#productCardTemplate`.
- Every interactive control has a `data-action`; one delegated listener per page is enough.
- `#cartLineTemplate` mirrors a cart row; fill the `[data-field]` nodes.
- The checkout form uses Bootstrap's `.needs-validation` + `novalidate` pattern — add
  `was-validated` on submit and the `.invalid-feedback` copy already written for each field
  appears.
