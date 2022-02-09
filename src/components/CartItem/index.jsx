import { Col, Row } from 'antd';
import img from 'assets/img/special-female.jpeg';
import { addProductToCart, deleteProduct } from 'features/Product/productSlice';
import { get, values } from 'lodash';
import { default as React } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from 'utils/currency';
const CartItem = ({ cartList = [] }) => {
  const dispatch = useDispatch();

  const decrementQuantity = (id, newProduct) => () => {
    dispatch(
      addProductToCart({
        idProductAdd: id,
        quantity: -1,
        product: newProduct,
      })
    );
  };

  const incrementQuantity = (id, newProduct) => () => {
    dispatch(
      addProductToCart({
        idProductAdd: id,
        quantity: 1,
        product: newProduct,
      })
    );
  };

  const deleteCart = (id) => () => {
    delete cartList[id];
    dispatch(
      deleteProduct({
        idProductAdd: id,
      })
    );
  };

  const _cartList = values(cartList) || [];

  return (
    <>
      <div className="cart__item">
        <div className="cart__item__image">Hình ảnh</div>
        <div className="cart__item__info">
          <div className="cart__item__info__name">Tên sản phẩm </div>
          <div className="cart__item__info__price">Tạm tính</div>
          <div className="cart__item__info__quantity">
            <div className="product__info__item__quantity">Số lượng</div>
          </div>
          <div className="cart__item__del">
            <ion-icon name="trash-outline"></ion-icon>
          </div>
        </div>
      </div>
      {_cartList.length ? (
        <>
          {_cartList.map((product) => {
            const {
              id,
              price,
              discount,
              imageProductId,
              productName,
              quantity,
            } = product;
            return (
              <div key={id} className="cart__item">
                <div className="cart__item__image">
                  <img
                    src={get(imageProductId, 'images[0].path', img)}
                    alt={productName}
                  />
                </div>
                <div className="cart__item__info">
                  <div className="cart__item__info__name">
                    <Link to="">{`${'áo poly nũ'} - ${'color'} - ${'size'}`}</Link>
                  </div>
                  <div className="cart__item__info__price">
                    {formatCurrency(
                      (price - (price * discount) / 100) * quantity
                    )}
                  </div>
                  <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                      <div
                        className="product__info__item__quantity__btn"
                        onClick={decrementQuantity(id, product)}>
                        <ion-icon name="remove-outline"></ion-icon>
                      </div>
                      <div className="product__info__item__quantity__input">
                        {quantity}
                      </div>
                      <div
                        className="product__info__item__quantity__btn"
                        onClick={incrementQuantity(id, product)}>
                        <ion-icon name="add-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div className="cart__item__del">
                    <ion-icon
                      name="trash-outline"
                      onClick={deleteCart(id)}></ion-icon>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h3>Không có sản phẩm nào trong giỏ hàng</h3>
      )}
    </>
  );
};

export default CartItem;
