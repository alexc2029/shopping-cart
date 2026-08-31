HOME PAGE - a few dummy information/images

SHOP PAGE
    product card component
        title
        add to cart button
        input for quantity
        increment/decrement button for fine tuning


CART PAGE - items + quantities, increase/decrease item quantity including removal
    product component needed here as well (could explore reusability from shop page)



PERSISTENT NAVBAR TO NAVIGATE BETWEEN THEM
    home page
    shop page
    cart
        indicator for number of items in cart (probably state very high up in the app)

DATA
    app level "items in cart" state
        number of cart items calculated from that array's length
    

TESTING
    mock custom fetch hook
    do not test react router itself (such as the urls) but rather check if the page contents are what I expect