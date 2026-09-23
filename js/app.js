/* ============================================================
   Northline Supply — your JavaScript goes here.
   Nothing is implemented on purpose; this file is the hook map.
   Bootstrap's own bundle is already loaded before this file,
   so dropdowns, collapse and validation styles work without you.
   ============================================================

   ── index.html ──────────────────────────────────────────────
   #filterForm            wrapper for search + category + sort
   #searchInput           text input (name="q"); #searchClear is its X button (hidden by default)
   #categoryDropdown      Bootstrap dropdown button
   #categoryMenu          .dropdown-item[data-category] — all | bags | lighting | tools | kitchen | apparel
   #categoryLabel         text to update when a category is picked
   #categoryValue         hidden input holding the current category
   #sortDropdown          Bootstrap dropdown button
   #sortMenu              .dropdown-item[data-sort] — featured | price-asc | price-desc |
                          rating-desc | name-asc | newest
   #sortLabel             text to update when a sort is picked
   #sortValue             hidden input holding the current sort
   #resetFilters          clears search, category and sort
   #activeFilters         container for .chip elements (one per active filter)
   #resultCount           visible product count   #resultTotal  total in catalog
   #productGrid           container of <article class="product">
   #productCardTemplate   <template> to clone when rendering; fill [data-field] nodes
   #emptyState            toggle .hidden when nothing matches
   #pagination            .page-link[data-page] — prev | 1 | 2 | 3 | next
   #cartCount             badge in the header (every page)

   Each <article class="product"> carries:
     data-id, data-category, data-name, data-price, data-rating, data-stock
   Buttons inside carry: data-action="add-to-cart | wishlist | view | notify"

   ── cart.html ───────────────────────────────────────────────
   #cartLines             container of .cart-line[data-id][data-price]
   #cartLineTemplate      <template> to clone when rendering
   #cartEmpty             toggle .hidden when the cart has no lines
   #cartItemCount         item count above the list
   #clearCart, #updateCart
   per line: [data-action="decrement|increment|qty|remove|save-for-later"]
             [data-field="lineTotal"]
   #savedSection / #savedLines / #savedCount
             [data-action="move-to-cart|remove-saved"]
   #promoForm, #promoCode, #applyPromo, #promoMessage
   #summaryCount, #summarySubtotal, #summaryDiscountRow, #summaryDiscount,
   #summaryShipping, #summaryTax, #summaryTotal
   #checkoutButton        link to checkout.html

   ── checkout.html ───────────────────────────────────────────
   #checkoutForm          has .needs-validation + novalidate (Bootstrap validation styles)
   contact:   #email #phone #emailOptIn
   address:   #firstName #lastName #address1 #address2 #city #province #postal #sameAsBilling
   delivery:  input[name="shipping"] — #shipGround #shipExpress #shipPickup, each with data-cost
              #deliveryNote
   payment:   input[name="payment"] — #payCod only (cash on delivery); card and
              e-Transfer are not offered yet, so there is nothing to toggle
              #codFields #codName #codChange
              #codAmount  mirror of the total, restated in the payment copy
   terms:     #acceptTerms
   summary:   #summaryItems (.mini-line[data-id]), #summaryCount, #summarySubtotal,
              #summaryDiscount, #summaryShipLabel, #summaryShipping, #summaryTax,
              #summaryPayment, #summaryTotal
              Keep #summaryTotal, #codAmount and both place-order buttons in step.
   submit:    #placeOrder (desktop) and #placeOrderMobile (below lg)
   #holdTimer             countdown text

   Totals shown in the markup: subtotal $265.00, promo −$26.50,
   shipping Free (ground), HST 13% $31.01, total $269.51.
   ============================================================ */
