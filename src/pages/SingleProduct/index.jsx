import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Link, useParams } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';
import { useGetProductsQuery } from '../../redux/API/query';
import ContentLoader from "react-content-loader"

import "./style.css"

const MyLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={50}
      height={20}
      viewBox="0 0 50 20"
      backgroundColor="#e3e3e3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="20" y="271" rx="0" ry="0" width="107" height="20" /> 
      <rect x="49" y="301" rx="0" ry="0" width="43" height="18" /> 
      <rect x="-19" y="-1" rx="0" ry="0" width="75" height="146" />
    </ContentLoader>
  )

const SingleProduct = () => {

    const { productId } = useParams()
    const { data, isLoading } = useGetProductsQuery()
    const
        currentItem = isLoading ? 'data loading..' : data[productId - 1]
    return (
        <div className="single-product-page">
            <Header />
            <div className='single-product-wrapper'>
                <div className="single-product-card">
                    <div className="left-single-product-block">
                        <div className="single-product-image">
                            <img src={currentItem.image} alt="" />
                        </div>
                    </div>
                    <div className="right-single-product-block">
                        <div className="single-product-title">{currentItem.title}</div>
                        <div className="single-product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit beatae tempora cumque dolorem, explicabo nam quia ex voluptas? Maiores saepe id eum eius doloribus natus cum ullam, neque officia?</div>
                        <div className="single-product-price">{currentItem.price ? (currentItem.price).toLocaleString("ru", { style: 'currency', currency: 'usd' }) : <MyLoader/>}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;