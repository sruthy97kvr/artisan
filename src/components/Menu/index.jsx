
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Icon } from '@iconify/react'


const Menu = (props) => {
    const { details, updateCartCount } = props;
    const [saladList, setSaladList] = useState(null);
    const [barnyard, setBarnyard] = useState(null);
    const [henHouse, setHenHouse] = useState(null);
    const [fromSea, setFromSea] = useState(null);
    const [biryani, setBiryani] = useState(null);
    const [fastfood, setFastfood] = useState(null);

    const [saladCount, setSaladCount] = useState(0);
    const [barnyardCount, setBarnyardCount] = useState(0);
    const [henHouseCount, setHenHouseCount] = useState(0);
    const [seaCount, setSeaCount] = useState(0);
    const [biryaniCount, setBiryaniCount] = useState(0);
    const [fastFoodCount, setFastFoodCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
        updateCartCount(cartCount);
    }, [cartCount]);


    useEffect(() => {
        async function fetchData() {

            const cartItem = saladCount + barnyardCount + henHouseCount + seaCount + biryaniCount + fastFoodCount;
            setCartCount(cartItem)
        }
        fetchData();
    }, [saladCount, barnyardCount, henHouseCount, seaCount, biryaniCount, fastFoodCount]
    );



    const cart = saladCount + barnyardCount + henHouseCount + seaCount + biryaniCount + fastFoodCount;
    useEffect(() => {
        async function fetchData() {
            if (details !== null) {

                details?.table_menu_list && details?.table_menu_list.map((item, index) => {
                    if (item !== null && item?.menu_category === 'Salads and Soup') {
                        setSaladList(item);
                    }
                    else if (item !== null && item?.menu_category === 'From The Barnyard') {
                        setBarnyard(item);
                    }
                    else if (item !== null && item?.menu_category === 'From the Hen House') {
                        setHenHouse(item);
                    }
                    else if (item !== null && item?.menu_category === 'Fresh From The Sea') {
                        setFromSea(item);
                    }
                    else if (item !== null && item?.menu_category === 'Biryani') {
                        setBiryani(item);
                    }
                    else if (item !== null && item?.menu_category === 'Fast Food') {
                        setFastfood(item);
                    }
                })
            }
        }
        fetchData();
    }, [details !== null]
    );

    const incrementCount = (id, name) => {

        let newCartCount = 0;

        if (name === "Salad") {

            const index = saladList.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                saladList.category_dishes[index].count = (saladList.category_dishes[index].count || 0) + 1;
                const newSaladcount = (saladCount || 0) + 1;
                setSaladCount(newSaladcount);
                newCartCount = newCartCount + newSaladcount;

            }

        }
        else if (name === 'Barnyard') {
            const index = barnyard.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                barnyard.category_dishes[index].count = (barnyard.category_dishes[index].count || 0) + 1;
                const newBarnyardcount = (barnyardCount || 0) + 1;
                setBarnyardCount(newBarnyardcount);
                newCartCount = newCartCount + newBarnyardcount;

            }
        }
        else if (name == 'HenHouse') {
            const index = henHouse.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                henHouse.category_dishes[index].count = (henHouse.category_dishes[index].count || 0) + 1;
                const newHenHousecount = (henHouseCount || 0) + 1;
                setHenHouseCount(newHenHousecount);
                newCartCount = newCartCount + newHenHousecount;
            }

        }
        else if (name == 'Sea') {
            const index = fromSea.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                fromSea.category_dishes[index].count = (fromSea.category_dishes[index].count || 0) + 1;
                const newSeaCount = (seaCount || 0) + 1;
                setSeaCount(newSeaCount);
                newCartCount = newCartCount + newSeaCount;
            }
        }

        else if (name == 'Biryani') {
            const index = biryani.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                biryani.category_dishes[index].count = (biryani.category_dishes[index].count || 0) + 1;
                const newbiryaniCount = (biryaniCount || 0) + 1;
                setBiryaniCount(newbiryaniCount);
                newCartCount = newCartCount + newbiryaniCount;
            }

        }
        else if (name == 'FastFood') {
            const index = fastfood.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                fastfood.category_dishes[index].count = (fastfood.category_dishes[index].count || 0) + 1;
                const newFastfoodCount = (fastFoodCount || 0) + 1;
                setFastFoodCount(newFastfoodCount);
                newCartCount = newCartCount + newFastfoodCount;
            }

        }
    };


    const decrementCount = (id, name) => {
        let newCartCount = 0;

        if (name === "Salad") {

            const index = saladList.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                saladList.category_dishes[index].count = (saladList.category_dishes[index].count || 0) - 1;
                const newSaladcount = (saladCount || 0) - 1;
                setSaladCount(newSaladcount);


            }
            newCartCount = cart + saladCount;
        }
        else if (name === 'Barnyard') {
            const index = barnyard.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                barnyard.category_dishes[index].count = (barnyard.category_dishes[index].count || 0) - 1;
                const newBarnyardcount = (barnyardCount || 0) - 1;
                setBarnyardCount(newBarnyardcount);

            }
            newCartCount = cart + barnyardCount;
        }
        else if (name == 'HenHouse') {
            const index = henHouse.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                henHouse.category_dishes[index].count = (henHouse.category_dishes[index].count || 0) - 1;
                const newHenHousecount = (henHouseCount || 0) - 1;
                setHenHouseCount(newHenHousecount);
            }
            newCartCount = cart + henHouseCount;
        }
        else if (name == 'Sea') {
            const index = fromSea.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                fromSea.category_dishes[index].count = (fromSea.category_dishes[index].count || 0) - 1;
                const newSeaCount = (seaCount || 0) - 1;
                setSeaCount(newSeaCount);
            }
            newCartCount = cart + seaCount;
        }

        else if (name == 'Biryani') {
            const index = biryani.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                biryani.category_dishes[index].count = (biryani.category_dishes[index].count || 0) - 1;
                const newbiryaniCount = (biryaniCount || 0) - 1;
                setBiryaniCount(newbiryaniCount);
            }
            newCartCount = cart + biryaniCount;

        }
        else if (name == 'FastFood') {
            const index = fastfood.category_dishes.findIndex(item => item.dish_id === id);
            if (index !== -1) {
                fastfood.category_dishes[index].count = (fastfood.category_dishes[index].count || 0) - 1;
                const newFastfoodCount = (fastFoodCount || 0) - 1;
                setFastFoodCount(newFastfoodCount);
            }

        }
    };

    const [activeTab, setActiveTab] = useState('Salad');

    const openMenu = (categoryName) => {
        setActiveTab(categoryName);
    };


    return (



        <section style={{ color: 'white' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tab">
                            <button className={activeTab === 'Salad' ? 'tablinks active' : 'tablinks'} onClick={() => openMenu('Salad')}>Salads and Soup</button>
                            <button className={activeTab === 'Barnyard' ? 'tablinks active' : 'tablinks'} onClick={() => openMenu('Barnyard')}>From The Barnyard</button>
                            <button className={activeTab === 'HenHouse' ? 'tablinks active' : 'tablinks'} onClick={() => openMenu('HenHouse')}>From The Hen House</button>
                            <button className={activeTab === 'Sea' ? 'tablinks active' : 'tablinks'} onClick={() => openMenu('Sea')}>Fresh From The Sea</button>
                            <button className={activeTab === 'Biryani' ? 'tablinks active' : 'tablinks'} onClick={() => openMenu('Biryani')}>Biryani</button>
                            <button className={activeTab === 'FastFood' ? 'tablinks active' : 'tablinks'} onClick={() => openMenu('FastFood')}>Fast Food</button>

                        </div>

                        <div id="Salad" className="tabcontent" style={{ display: activeTab === 'Salad' ? 'block' : 'none' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <table>
                                            <tbody>
                                                {saladList?.category_dishes && saladList?.category_dishes.map((data, index) => (
                                                    <tr key={index} className="dis">
                                                        <td>
                                                            <div >
                                                                <div className="dishname">
                                                                    {data.dish_Type == 2 ? <Icon icon="mdi:lacto-vegetarian" className='green-icon' /> : <Icon icon="mdi:lacto-vegetarian" className='red-icon' />}

                                                                    {data?.dish_name}
                                                                </div>
                                                                <div className="dishprice">
                                                                    <label>SAR</label> {data.dish_price}
                                                                </div>
                                                                <div className="dishdescription">
                                                                    {data.dish_description}
                                                                </div>
                                                                <div className="count d-flex">
                                                                    <div className="sub text-center"><Icon icon="fluent:subtract-24-filled" className='' onClick={() => decrementCount(data.dish_id, "Salad")} /> </div>
                                                                    <label className='text-center'>{data.count > 0 ? data.count : 0}</label>   <div className="add text-center"><Icon icon="ic:outline-add" onClick={() => incrementCount(data.dish_id, "Salad")} className='' /></div>
                                                                </div>
                                                                {data?.addonCat?.length > 0 ? <p style={{ color: 'red' }}>Customizations available</p> : ""}
                                                            </div>
                                                        </td>
                                                        <td style={{ float: 'right', marginTop: '10px' }}>
                                                            <div className="d-flex">
                                                                <div className="calories">
                                                                    {data.dish_calories} calories
                                                                </div>
                                                                <div className="dish-img ">
                                                                    <img className="image" src={data.dish_image} alt="" />
                                                                </div>
                                                            </div>

                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div id="Barnyard" className="tabcontent" style={{ display: activeTab === 'Barnyard' ? 'block' : 'none' }}>
                            <table>
                                <tbody>
                                    {barnyard?.category_dishes && barnyard.category_dishes.map((data, index) => (
                                        <tr key={index} className="dis">
                                            <td>
                                                <div >
                                                    <div className="dishname">
                                                        {data.dish_Type == 2 ? <Icon icon="mdi:lacto-vegetarian" className='green-icon' /> : <Icon icon="mdi:lacto-vegetarian" className='red-icon' />}

                                                        {data?.dish_name}
                                                    </div>
                                                    <div className="dishprice">
                                                        <label>SAR</label> {data.dish_price}
                                                    </div>
                                                    <div className="dishdescription">
                                                        {data.dish_description}
                                                    </div>
                                                    <div className="count d-flex">
                                                        <div className="sub text-center"><Icon icon="fluent:subtract-24-filled" className='' onClick={() => decrementCount(data.dish_id, "Barnyard")} /> </div>
                                                        <label className='text-center'>{data.count > 0 ? data.count : 0}</label>   <div className="add text-center"><Icon icon="ic:outline-add" onClick={() => incrementCount(data.dish_id, "Barnyard")} className='' /></div>
                                                    </div>
                                                    {data?.addonCat?.length > 0 ? <p style={{ color: 'red' }}>Customizations available</p> : ""}
                                                </div>
                                            </td>
                                            <td style={{ float: 'right', marginTop: '10px' }}>
                                                <div className="d-flex">
                                                    <div className="calories">
                                                        {data.dish_calories} calories
                                                    </div>
                                                    <div className="dish-img ">
                                                        <img className="image" src={data.dish_image} alt="" />
                                                    </div>
                                                </div>

                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div id="HenHouse" className="tabcontent" style={{ display: activeTab === 'HenHouse' ? 'block' : 'none' }}>
                            <table>
                                <tbody>
                                    {henHouse?.category_dishes && henHouse.category_dishes.map((data, index) => (
                                        <tr key={index} className="dis">
                                            <td>
                                                <div >
                                                    <div className="dishname">
                                                        {data.dish_Type == 2 ? <Icon icon="mdi:lacto-vegetarian" className='green-icon' /> : <Icon icon="mdi:lacto-vegetarian" className='red-icon' />}

                                                        {data?.dish_name}
                                                    </div>
                                                    <div className="dishprice">
                                                        <label>SAR</label> {data.dish_price}
                                                    </div>
                                                    <div className="dishdescription">
                                                        {data.dish_description}
                                                    </div>
                                                    <div className="count d-flex">
                                                        <div className="sub text-center"><Icon icon="fluent:subtract-24-filled" className='' onClick={() => decrementCount(data.dish_id, "HenHouse")} /> </div>
                                                        <label className='text-center'>{data.count > 0 ? data.count : 0}</label>   <div className="add text-center"><Icon icon="ic:outline-add" onClick={() => incrementCount(data.dish_id, "HenHouse")} className='' /></div>
                                                    </div>
                                                    {data?.addonCat?.length > 0 ? <p style={{ color: 'red' }}>Customizations available</p> : ""}
                                                </div>
                                            </td>
                                            <td style={{ float: 'right', marginTop: '10px' }}>
                                                <div className="d-flex">
                                                    <div className="calories">
                                                        {data.dish_calories} calories
                                                    </div>
                                                    <div className="dish-img ">
                                                        <img className="image" src={data.dish_image} alt="" />
                                                    </div>
                                                </div>

                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div id="Sea" className="tabcontent" style={{ display: activeTab === 'Sea' ? 'block' : 'none' }}>
                            <table>
                                <tbody>
                                    {fromSea?.category_dishes && fromSea.category_dishes.map((data, index) => (
                                        <tr key={index} className="dis">
                                            <td>
                                                <div >
                                                    <div className="dishname">
                                                        {data.dish_Type == 2 ? <Icon icon="mdi:lacto-vegetarian" className='green-icon' /> : <Icon icon="mdi:lacto-vegetarian" className='red-icon' />}

                                                        {data?.dish_name}
                                                    </div>
                                                    <div className="dishprice">
                                                        <label>SAR</label> {data.dish_price}
                                                    </div>
                                                    <div className="dishdescription">
                                                        {data.dish_description}
                                                    </div>
                                                    <div className="count d-flex">
                                                        <div className="sub text-center"><Icon icon="fluent:subtract-24-filled" className='' onClick={() => decrementCount(data.dish_id, "Sea")} /> </div>
                                                        <label className='text-center'>{data.count > 0 ? data.count : 0}</label>   <div className="add text-center"><Icon icon="ic:outline-add" onClick={() => incrementCount(data.dish_id, "Sea")} className='' /></div>
                                                    </div>
                                                    {data?.addonCat?.length > 0 ? <p style={{ color: 'red' }}>Customizations available</p> : ""}
                                                </div>
                                            </td>
                                            <td style={{ float: 'right', marginTop: '10px' }}>
                                                <div className="d-flex">
                                                    <div className="calories">
                                                        {data.dish_calories} calories
                                                    </div>
                                                    <div className="dish-img ">
                                                        <img className="image" src={data.dish_image} alt="" />
                                                    </div>
                                                </div>

                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div id="Biryani" className="tabcontent" style={{ display: activeTab === 'Biryani' ? 'block' : 'none' }}>
                            <table>
                                <tbody>
                                    {biryani?.category_dishes && biryani.category_dishes.map((data, index) => (
                                        <tr key={index} className="dis">
                                            <td>
                                                <div >
                                                    <div className="dishname">
                                                        {data.dish_Type == 2 ? <Icon icon="mdi:lacto-vegetarian" className='green-icon' /> : <Icon icon="mdi:lacto-vegetarian" className='red-icon' />}

                                                        {data?.dish_name}
                                                    </div>
                                                    <div className="dishprice">
                                                        <label>SAR</label> {data.dish_price}
                                                    </div>
                                                    <div className="dishdescription">
                                                        {data.dish_description}
                                                    </div>
                                                    <div className="count d-flex">
                                                        <div className="sub text-center"><Icon icon="fluent:subtract-24-filled" className='' onClick={() => decrementCount(data.dish_id, "Biryani")} /> </div>
                                                        <label className='text-center'>{data.count > 0 ? data.count : 0}</label>   <div className="add text-center"><Icon icon="ic:outline-add" onClick={() => incrementCount(data.dish_id, "Biryani")} className='' /></div>
                                                    </div>
                                                    {data?.addonCat?.length > 0 ? <p style={{ color: 'red' }}>Customizations available</p> : ""}
                                                </div>
                                            </td>
                                            <td style={{ float: 'right', marginTop: '10px' }}>
                                                <div className="d-flex">
                                                    <div className="calories">
                                                        {data.dish_calories} calories
                                                    </div>
                                                    <div className="dish-img ">
                                                        <img className="image" src={data.dish_image} alt="" />
                                                    </div>
                                                </div>

                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div id="FastFood" className="tabcontent" style={{ display: activeTab === 'FastFood' ? 'block' : 'none' }}>
                            <table>
                                <tbody>
                                    {fastfood?.category_dishes && fastfood.category_dishes.map((data, index) => (
                                        <tr key={index} className="dis">
                                            <td>
                                                <div >
                                                    <div className="dishname">
                                                        {data.dish_Type == 2 ? <Icon icon="mdi:lacto-vegetarian" className='green-icon' /> : <Icon icon="mdi:lacto-vegetarian" className='red-icon' />}

                                                        {data?.dish_name}
                                                    </div>
                                                    <div className="dishprice">
                                                        <label>SAR</label> {data.dish_price}
                                                    </div>
                                                    <div className="dishdescription">
                                                        {data.dish_description}
                                                    </div>
                                                    <div className="count d-flex">
                                                        <div className="sub text-center"><Icon icon="fluent:subtract-24-filled" className='' onClick={() => decrementCount(data.dish_id, "FastFood")} /> </div>
                                                        <label className='text-center'>{data.count > 0 ? data.count : 0}</label>   <div className="add text-center"><Icon icon="ic:outline-add" onClick={() => incrementCount(data.dish_id, "FastFood")} className='' /></div>
                                                    </div>
                                                    {data?.addonCat?.length > 0 ? <p style={{ color: 'red' }}>Customizations available</p> : ""}
                                                </div>
                                            </td>
                                            <td style={{ float: 'right', marginTop: '10px' }}>
                                                <div className="d-flex">
                                                    <div className="calories">
                                                        {data.dish_calories} calories
                                                    </div>
                                                    <div className="dish-img ">
                                                        <img className="image" src={data.dish_image} alt="" />
                                                    </div>
                                                </div>

                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>





        </section>


    )
}
export default Menu;

