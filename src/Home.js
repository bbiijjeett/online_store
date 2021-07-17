import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <div className="home__container">
      
        <img
          className="home__image"
          src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325253_2200-1200x628.jpg"
          alt=""
        />

            <div className="home__row">
          <Product
            id="12321341"
            title="Pintola All Natural Peanut Butter (Crunchy) (1kg) | Unsweetened | 30g Protein | Non GMO | Gluten Free | Vegan | Cholesterol Free (1kg)"
            price={379.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71H-bP2XDlL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Nescafe Classic Coolest Cold Coffee Kit, Limited Edition - (Mason Jar, Steel Straw, Frother, 2 Fridge Magnets and Coffee, 100 g)"
            price={679.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71PJ%2BbO5CML._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Dabur Honey :100% Pure World's No.1 Honey Brand with No Sugar Adulteration - 1kg (Get 20% Extra)"
            price={356.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81hghkkAaSL._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Kellogg's Corn Flakes Original, High in Iron, High in B Group Vitamins, Breakfast Cereals, 875g Pack"
            price={276.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71HsQr-pYjL._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Upcrop Premium California Almonds 1kg"
            price={779.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61sHJM9jnDL._SL1100_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="12321341"
            title="Eco Valley Organic Green Tea, Sunny Lemony, 30 Tea Bags"
            price={148.75}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41JJ-cbWHPL.jpg"
          />
          <Product
            id="49538094"
            title="Eat Anytime Healthy Snacks Trail Mix Nuts and Dry Fruits, Cranberry and Orange Zest, 200g"
            price={315.0}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/51tVzjnMjdL._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

      </div>
        </div>
    )
}

export default Home
