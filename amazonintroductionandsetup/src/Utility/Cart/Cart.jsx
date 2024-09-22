// import React, { useContext } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import { dataContext } from "../../Components/DataProvider/DataProvider";
// import ProductCard from "../../Components/Products/ProductCard";
// import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
// import { Link } from "react-router-dom";
// import classes from "./Cart.module.css";

// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(dataContext);
//   const total = basket.reduce((amount, item) => {
//     return item.price * item.amount + amount;
//   }, 0);

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.cart_content}>
//           <h2>Hello</h2>
//           <h3>Your shopping Basket</h3>
//           <hr />
//           {basket?.length === 0 ? (
//             <p>Your basket is empty</p>
//           ) : (
//             basket?.map((item, i) => (
//               <ProductCard
//                 key={i}
//                 product={item}
//                 renderDesc={true}
//                 renderAdd={false}
//                 flex={true}
//               />
//             ))
//           )}
//         </div>
//         <div>
//           {basket?.length !== 0 && (
//             <div className={classes.subtotal}>
//               <div>
//                 <p>Subtotal ({basket?.length} items)</p>
//                 <CurrencyFormat amount={total} />
//               </div>
//               <span>
//                 <input type="checkbox" />
//                 <small>This order contains a gift</small>
//               </span>
//               <Link to="/Payments"> Continue to Checkout </Link>
//             </div>
//           )}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;
