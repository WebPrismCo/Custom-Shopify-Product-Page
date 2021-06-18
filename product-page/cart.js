ui.createComponent('cart', {
    node: document.getElementById('fr_ghost_cart'),
    toggles: [{node: document.getElementById('fr_ghost_toggle')}],
    options: {
        toggle: {
            iframe: false,
            sticky: false,
            contents: {
                icon: false,
                title: false,
                count: true
            }
        },
        cart: {
            startOpen: false,
            styles: {
                button: {
                    'background-color': '#333'
                },
            }
        }
    }
});