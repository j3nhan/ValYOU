import React from 'react';
import Slider from '../slider/Slider'
import Item from '../item/Item';
import { items } from '../../util/itemsData'
  
const Homepage = () => {
    const categories = [
    "Mom & Pop",
    "Farmers Market",
    "Women-Owned",
    "Veteran-Owned",
    "Disability-Owned"
    ]
    
    const ban1 = "images/banner1.jpg";
    const ban2 = "images/banner2.jpg";
    const ban3 = "images/banner3.jpg";
    const ban4 = "images/banner4.jpg";

    const bannerImages = [ban1, ban2, ban3, ban4]

    {bannerImages.map(ban => <img src={ban}/> )}
    
    return (
        <div>
            <div className="item-container">
                {categories && categories.map((category, idx) =>
                    <p key={ idx }>{category}</p>)}
            </div>

            <div className="home">
                <div className="home-container">
                    <Slider images={bannerImages} />

                    <div className="home-row"> 
                        {items.slice(0, 2).map((item) => (
                            <Item key={item.id}
                                id={item.id}
                                itemName={item.name}
                                rating={item.rating}
                                price={item.price}
                                photo={item.photo}
                                description={item.description}
                            /> 
                        ))}
                    </div>

                    <div className="home-row"> 
                        {items.slice(2, 5).map((item) => (
                            <Item key={item.id}
                                id={item.id}
                                name={item.name}
                                rating={item.rating}
                                price={item.price}
                                photo={item.photo}
                                description={item.description}
                            /> 
                        ))}
                    </div>
                    
                    <div className="home-row"> 
                        {items.slice(5, 6).map((item) => (
                            <Item key={item.id}
                                id={item.id}
                                name={item.name}
                                rating={item.rating}
                                price={item.price}
                                photo={item.photo}
                                description={item.description}
                            /> 
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage;