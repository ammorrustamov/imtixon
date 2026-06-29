import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import { setSearchQuery } from "../../redux/ShopSlice.js"; // Yo'lni tekshiring
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { User, ShoppingBag, XCircle, Star, LogOut } from 'lucide-react';
import iphone from"../../assets/iphone.png"
import Categores from"../../assets/Categores.png"
import { products } from '../../data/Data.js';
import { products2 } from '../../data/Data.js';
import { products3 } from '../../data/Data.js';
import { IoIosPhonePortrait } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import image1 from"../../assets/image1.png"
import image2 from"../../assets/image2.png"
import qr from "../../assets/QR.png"; 
import google from "../../assets/GooglePlay.png";
import apple from "../../assets/AppStore.png";
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, } from 'lucide-react';
import { Cart } from '../../redux/ShopSlice.js';
import { Wishlist } from '../../redux/ShopSlice.js';

import { Pagination } from 'swiper/modules';
import '../../i18n.js'; 
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSlider from '../HomeSlider/HomeSlider.jsx';




const HomePage = () => {

const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 1. Redux-dan ma'lumotlarni olish (Bir marta e'lon qilinadi)
const query = useSelector((state) => state.shop.searchQuery) || "";
  const cartlength = useSelector((state) => state.shop.cart.length);
  const Wishlistlength = useSelector((state) => state.shop.wishlist.length);

  // 2. Taymer uchun state-lar
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(19);
  const [seconds, setSeconds] = useState(56);

  // 3. Tilni almashtirish funksiyasi
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // 4. Mahsulotni ko'rish funksiyasi
  const handleView = (productId) => {
    navigate(`/product/${productId}`);
  };

  // 5. FILTRLASH MANTIQLARI (Xatolarsiz variant)
  // Optional chaining (?.) qo'shildi, agar title yoki name bo'lmasa xato bermaydi
const filteredProducts1 = products.filter(item => 
  item.title?.toLowerCase().includes(query.toLowerCase())
);

const filteredProducts2 = products2.filter(item => 
  item.name?.toLowerCase().includes(query.toLowerCase())
);

const filteredProducts3 = products3.filter(item => 
  item.name?.toLowerCase().includes(query.toLowerCase())
);

  // 6. Taymer Effecti
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prev => prev - 1);
      } else {
        setSeconds(59);
        if (minutes > 0) {
          setMinutes(prev => prev - 1);
        } else {
          setMinutes(59);
          if (hours > 0) {
            setHours(prev => prev - 1);
          } else {
            setHours(23);
            if (days > 0) {
              setDays(prev => prev - 1);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, hours, days]);

  
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);

        if (minutes > 0) {
          setMinutes(minutes - 1);
        } else {
          setMinutes(59);

          if (hours > 0) {
            setHours(hours - 1);
          } else {
            setHours(23);

            if (days > 0) {
              setDays(days - 1);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, hours, days]);

  return (
    <div>
      <div className="Navbar">
        <p>{t("*Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")}   <span>ShopNow</span></p>
<div className="language-switcher">
  <button className="lang-btn" onClick={() => changeLanguage('uz')}>UZ</button>
  <button className="lang-btn" onClick={() => changeLanguage('en')}>EN</button>
  <button className="lang-btn" onClick={() => changeLanguage('ru')}>RU</button>
</div>

      {/* Matnlarni chiqarish */}
      {/* <h1>{t('welcome')}</h1>
      <p>{t('description')}</p> */}
      </div>
<nav className="header-nav">
          <div className='ul-div '>

<h1 className='ex'>
{t("Exclusive")}
</h1>
<ul>
  <li>
<Link to={"/"}>{t("Home")}</Link>
  </li>
    <li>
 <Link to={"/Contact"}>{t("Contact")}</Link>
  </li>
    <li>
  <Link  to={"/About"}>{t("About")}</Link>
  </li>
    <li>
<Link to={"/SignUp"}>{t("Sign Up")}</Link>
  </li>
</ul>

      </div>

      <div className="search-container">
          
     <input 
  type="text" 
  placeholder={t("What are you looking for?")}
  className="search-input"
  value={query} // Redux-dan kelayotgan holat
  onChange={(e) => dispatch(setSearchQuery(e.target.value))} // Redux-ni yangilash
/>
        <Search className="search-icon" size={20} strokeWidth={1.5} />
    
      </div>

      <div className="nav-icons">
        <button className="icon-link" aria-label="Wishlist">
                <Link to={'/Wishlist'}>
                  <Heart size={24} strokeWidth={1.5} />
      
           
            <span>
                {Wishlistlength}
            </span>
        </Link>
          
          <span className="badge">0</span>
        </button>
        
        <button className="icon-link" aria-label="Cart">
           <Link to={'/Cart'}>
          <ShoppingCart size={24} strokeWidth={1.5} />
           
            <span>
                {cartlength}
            </span>
        </Link>
          <span className="badge">0</span>
        </button>
     
    <div className="user-menu-wrapper">
      {/* Qizil profil tugmasi */}
      <div className="profile-trigger">
        <User size={20} color="white" />
      </div>

      {/* Hoverda chiqadigan menyu */}
      <div className="dropdown-container">
        <div className="dropdown-content">
          <a href="/account" className="menu-item">
            <User size={18} /> <span>Manage My Account</span>
          </a>
          <a href="/orders" className="menu-item">
            <ShoppingBag size={18} /> <span>My Order</span>
          </a>
          <a href="/cancellations" className="menu-item">
            <XCircle size={18} /> <span>My Cancellations</span>
          </a>
          <a href="/reviews" className="menu-item">
            <Star size={18} /> <span>My Reviews</span>
          </a>
          <a href="/logout" className="menu-item">
            <LogOut size={18} /> <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
      </div>
    </nav>
<hr />
<div className='p-dev'>
  <div>

<h3>{t("Woman’s Fashion")}</h3>
<h3>{t("Men’s Fashion")}</h3>
<h3>{t("Electronics")}</h3>
<h3>{t("Home & Lifestyle")}</h3>
<h3>{t("Medicine")}</h3>
<h3>{t("Sports & Outdoor")}</h3>
<h3>{t("Baby’s & Toys")}</h3>
<h3>{t("Groceries & Pets")}</h3>
<h3>{t("Health & Beauty")}</h3>

  </div>
    <HomeSlider/>
       
</div>


<div className="category-header">
  <div className="header-left">
    <div className="subtitle-container">
      <div className="red-rect"></div>
      <span className="subtitle">{t("Categories")}</span>
    </div>
    <h2 className="title">{t("Top Categories")}</h2> {/* agar kerak bo‘lsa title */}
  </div>
  
  <div className="header-right">
    <button className="nav-btn" aria-label={t("Previous")}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>
    <button className="nav-btn" aria-label={t("Next")}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>

<div className="flash">
  <h2>{t("Flash Sales")}</h2>

  <div className="time">
    <div>
      <p>{t("Days")}</p>
      <h3>{days}</h3>
    </div>

    <span>:</span>

    <div>
      <p>{t("Hours")}</p>
      <h3>{hours}</h3>
    </div>

    <span>:</span>

    <div>
      <p>{t("Minutes")}</p>
      <h3>{minutes}</h3>
    </div>

    <span>:</span>

    <div>
      <p>{t("Seconds")}</p>
      <h3>{seconds}</h3>
    </div>
  </div>
</div>


<div className='card-wrapper'> 
  {filteredProducts1.length > 0 ? (
    // Agar mahsulotlar bo'lsa, ularni chiqaramiz
    filteredProducts1.map(item => (
      <div className='card-div' key={item.id}>
        <div className='card-img-container'>
          <span className='discount-badge'>-40%</span>
          <div className='card-icons'>
            <div className='icon-circle' onClick={() => dispatch(Wishlist(item))}>❤</div>
            <div className='icon-circle' onClick={() => handleView(item.id)}>👁</div>
          </div>
          <img className='card-img' src={item.image} alt={item.title} />
          <button className='add-to-cart' onClick={() => dispatch(Cart(item))}>Add To Cart</button>
        </div>

        <div className='card-info'>
          <h3 className='card-title'>{item.title}</h3>
          <div className='price-row'>
            <p className='card-price'>${item.price}</p>
            <p className='old-price'>$160</p>
          </div>
          <div className='rating'>
            <span className='stars'>★★★★★</span>
            <span className='rating-count'>(88)</span>
          </div>
        </div>
      </div>
    ))
  ) : (
    // AGAR MAHSULOT TOPILMASA SHU QISM CHIQADI
    <div className="not-found-container">
      <XCircle size={60} color="#db4444" strokeWidth={1} />
      <h3>{t("No Products Found")}</h3>
      <p>{t("Try searching for something else or check your spelling.")}</p>
      <button className="btn-all" onClick={() => dispatch(setSearchQuery(""))}>
        {t("Clear Search")}
      </button>
    </div>
  )}
</div>
<button className='btn-all'>
  {t("View All Products")}
</button>

<hr style={{
  marginBottom: "50px"
}} />

<div className="category-header">
  <div className="header-left">
    <div className="subtitle-container">
      <div className="red-rect"></div>
      <span className="subtitle">{t("This Month")}</span>
    </div>
    <h2 className="title">{t("Browse By Category")}</h2>
  </div>
  
  <div className="header-right">
    <button className="nav-btn" aria-label={t("Previous")}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>
    <button className="nav-btn" aria-label={t("Next")}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>


<div className='div-icon'>
  <div className='div-icon-titel'>
    <IoIosPhonePortrait className='icon' />
    <h2>{t("Phones")}</h2>
  </div>
  
  <div className='div-icon-titel'>
    <HiOutlineDesktopComputer className='icon' />
    <h2>{t("Computers")}</h2>
  </div>
  
  <div className='div-icon-titel'>
    <BsSmartwatch className='icon' />
    <h2>{t("SmartWatch")}</h2>
  </div>
  
  <div className='div-icon-titel'>
    <CiCamera className='icon'/>
    <h2>{t("Camera")}</h2>
  </div>
  
  <div className='div-icon-titel'>
    <CiHeadphones className='icon' />
    <h2>{t("HeadPhones")}</h2>
  </div>
  
  <div className='div-icon-titel'>
    <LuGamepad className='icon' />
    <h2>{t("Gaming")}</h2>
  </div>
</div>


<hr />

<div className="category-header">
  <div className="header-left">
    <div className="subtitle-container">
      <div className="red-rect"></div>
      <span className="subtitle">{t("Categories")}</span>
    </div>
    <h2 className="title">{t("Best Selling Products")}</h2>
  </div>
  
  <div className="header-right">
    <button className='nimadir'>{t("View All")}</button>
  </div>
</div>


<div className='category-header' >
  {
   filteredProducts2.map(item => (
      <div className='card-div' key={item.id}>
        <div className='card-img-container'>
          <span className='discount-badge'>-40%</span>
          <div className='card-icons'>
            <div className='icon-circle'  onClick={() => dispatch(Wishlist(item))}>❤</div>
            <div className='icon-circle'onClick={() => handleView2(item.id)}>👁</div>
          </div>
          <img className='card-img' src={item.image} alt={item.title} />
          <button className='add-to-cart'  onClick={() => dispatch(Cart(item))}>Add To Cart</button>
        </div>

        <div className='card-info'>
          <h3 className='card-title'>{item.name}</h3>
          <div className='price-row'>
            <p className='card-price'>${item.price}</p>
            <p className='old-price'>$160</p>
          </div>
          <div className='rating'>
            <span className='stars'>★★★★★</span>
            <span className='rating-count'>(88)</span>
          </div>
        </div>
        
      </div>
    ))
  }
  </div>

    <img className='imagela' src={Categores} alt="chiqdimi" />

<div className="category-header">
  <div className="header-left">
    <div className="subtitle-container">
      <div className="red-rect"></div>
      <span className="subtitle">{t("Categories")}</span>
    </div>
    <h2 className="title">{t("Explore Our Products")}</h2>
  </div>
  
  <div className="header-right">
    <button className="nav-btn" aria-label={t("Previous")}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>
    <button className="nav-btn" aria-label={t("Next")}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>




    <div className='category-header-nima' >
  {
   filteredProducts3.map(item => (
      <div className='card-div' key={item.id}>
        <div className='card-img-container'>
          <span className='discount-badge'>-40%</span>
          <div className='card-icons'>
            <div className='icon-circle'  onClick={() => dispatch(Wishlist(item))}>❤</div>
            <div className='icon-circle'onClick={() => handleView3(item.id)}>👁</div>
          </div>
          <img className='card-img' src={item.image} alt={item.title} />
          <button className='add-to-cart'  onClick={() => dispatch(Cart(item))}>Add To Cart</button>
        </div>

        <div className='card-info'>
          <h3 className='card-title'>{item.name}</h3>
          <div className='price-row'>
            <p className='card-price'>${item.price}</p>
            <p className='old-price'>$160</p>
          </div>
          <div className='rating'>
            <span className='stars'>★★★★★</span>
            <span className='rating-count'>(88)</span>
          </div>
        </div>
        
      </div>
    ))
  }
  </div>

<button className='btn-all'>
  {t("View All Products")}
</button>

<div className="category-header">
  <div className="header-left">
    <div className="subtitle-container">
      <div className="red-rect"></div>
      <span className="subtitle">{t("Featured")}</span>
    </div>
    <h2 className="title">{t("New Arrival")}</h2>
  </div>
  
  <div className="header-right">
    <button className="nav-btn" aria-label={t("Previous")}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>
    <button className="nav-btn" aria-label={t("Next")}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>



    <div className='imagela'>
      <img src={image2} alt="" />
<img src={image1} alt="" />
    </div>


 <div className="services-container">

  <div className="service-card">
    <div className="icon-wrapper">
      <div className="icon-circle-outer">
        <div className="icon-circle-inner">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        </div>
      </div>
    </div>
    <h3 className="service-title">{t("FREE AND FAST DELIVERY")}</h3>
    <p className="service-desc">{t("Free delivery for all orders over $140")}</p>
  </div>

  <div className="service-card">
    <div className="icon-wrapper">
      <div className="icon-circle-outer">
        <div className="icon-circle-inner">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
          </svg>
        </div>
      </div>
    </div>
    <h3 className="service-title">{t("24/7 CUSTOMER SERVICE")}</h3>
    <p className="service-desc">{t("Friendly 24/7 customer support")}</p>
  </div>

  <div className="service-card">
    <div className="icon-wrapper">
      <div className="icon-circle-outer">
        <div className="icon-circle-inner">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 12 11 14 15 10"></polyline>
          </svg>
        </div>
      </div>
    </div>
    <h3 className="service-title">{t("MONEY BACK GUARANTEE")}</h3>
    <p className="service-desc">{t("We return money within 30 days")}</p>
  </div>

</div>

<footer className="footer">
  <div className="footer-container">

    <div className="footer-col">
      <h3>{t("Exclusive")}</h3>
      <h4>{t("Subscribe")}</h4>
      <p>{t("Get 10% off your first order")}</p>

      <div className="subscribe-box">
        <input type="email" placeholder={t("Enter your email")} />
      </div>
    </div>

    <div className="footer-col">
      <h3>{t("Support")}</h3>
      <p>{t("Address")}</p>
      <p>{t("Email")}</p>
      <p>{t("Phone")}</p>
    </div>

    <div className="footer-col">
      <h3>{t("Account")}</h3>
      <li>{t("My Account")}</li>
      <li>{t("Login / Register")}</li>
      <li>{t("Cart")}</li>
      <li>{t("Wishlist")}</li>
      <li>{t("Shop")}</li>
    </div>

    <div className="footer-col">
      <h3>{t("Quick Link")}</h3>
      <li>{t("Privacy Policy")}</li>
      <li>{t("Terms Of Use")}</li>
      <li>{t("FAQ")}</li>
      <li>{t("Contact")}</li>
    </div>

    <div className="footer-col">
      <h3>{t("Download App")}</h3>
      <span className="save-text">{t("Save $3 with App New User Only")}</span>

      <div className="app-box">
        <img src={qr} alt="qr" className="qr" />
        <div className="stores">
          <img src={google} alt="google play" />
          <img src={apple} alt="app store" />
        </div>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    {t("Copyright")}
  </div>
</footer>

  </div>
  )
}

export default HomePage;