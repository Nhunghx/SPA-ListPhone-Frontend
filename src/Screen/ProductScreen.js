import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./productScreen.css";

function ProductScreen() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]); 

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:3070/products/${id}`);
        console.log(res);
        setDetail(res.data.detailProduct);
      } catch (error) {
        console.log("Failed to fetch product detail : ", error);
      }
    };
    fetchDetail();
  }, [id]);


  return (
    <div>
      <span className="back">
        <Link to="/" style={{textDecoration: 'none'}}>
           Back
        </Link>
      </span>
      {detail && (
        <div className="product-detail" key={detail.id}>
          <div className="details">
            <img className="image-detail" src={detail.image_url} alt="phone" />
            <div className="details-info">
              <ul>
                <li className="name-detail">
                  <h1>{detail.name}</h1>
                </li>
                <li className="price-detail">
                  <b> Price </b> : {detail.price} đ
                </li>
                <li className="description-detail">
                  <h3>Description :</h3> <div>{detail.description}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
