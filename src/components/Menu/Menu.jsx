import React, { useEffect } from 'react'
import './Menu.css'


const Menu = () => {
    const dishes = [
        {
          dish: 'Grilled Chicken Caesar Salad',
          price: 12.0,
          description: 'Crisp romaine lettuce, grilled chicken, Parmesan cheese, and croutons tossed in Caesar dressing.'
        },
        {
          dish: 'Margherita Pizza',
          price: 11.5,
          description: 'Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves on a crispy crust.'
        },
        {
          dish: 'Beef Tacos',
          price: 10.0,
          description: 'Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa.'
        },
        {
          dish: 'Vegetable Stir Fry',
          price: 9.5,
          description: 'Mixed seasonal vegetables sautéed in a savory soy-based sauce, served with rice.'
        },
        {
          dish: 'BBQ Ribs',
          price: 15.0,
          description: 'Tender pork ribs smothered in a tangy barbecue sauce, served with coleslaw and fries.'
        },
        {
          dish: 'Seafood Paella',
          price: 18.0,
          description: 'Traditional Spanish rice dish with saffron, shrimp, mussels, and calamari.'
        },
        {
          dish: 'Vegetarian Burger',
          price: 11.0,
          description: 'Grilled veggie patty with lettuce, tomato, onion, and avocado on a whole wheat bun.'
        },
        {
          dish: 'Chicken Tikka Masala',
          price: 13.5,
          description: 'Chunks of chicken cooked in a spiced tomato-based sauce, served with basmati rice.'
        },
        {
          dish: 'Beef Stroganoff',
          price: 14.0,
          description: 'Tender beef strips in a creamy mushroom sauce, served over egg noodles.'
        },
        {
          dish: 'Lemon Herb Salmon',
          price: 16.0,
          description: 'Grilled salmon fillet with a lemon herb butter sauce, served with asparagus and potatoes.'
        }
      ];
    const printDishes = dishes.map((dish, i) => {
            return <div className="card" key={i}>
            <div className="card-body">
              <p className="card-text"><strong>{dish.dish}</strong></p>
              <p className="card-text">{dish.description}</p>
              <p className="card-text"><b>{dish.price}€</b></p>
            </div>
          </div>
        })
    
  return (
    <div>
        <h1>Menu</h1>
        <div id='dishesDiv'>
        {printDishes}
        </div>
    </div>
  )
}

export default Menu