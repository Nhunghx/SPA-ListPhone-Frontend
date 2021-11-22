import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [offset, setOffset] = useState(0);

  const LIMIT = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { limit: LIMIT, offset };
        const res = await axios.get("http://localhost:3070/productslist", {
          params,
        });
        console.log(res);
        setpageCount(Math.ceil(res.data.total) / LIMIT);
        setProducts(res.data.products);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchData();
  }, [offset]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * LIMIT;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setOffset(newOffset);
  };

  return (
    <div className="container">
      <ul className="products">
        {products.map((product) => (
          <li className="product" key={product.id}>
            <Link to={"/products/" + product.id}>
              <img className="image" src={product.image_url} alt="phone" />
            </Link>
            <div className="name">{product.name}</div>
            <div className="price">{product.price}đ</div>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default HomeScreen;
