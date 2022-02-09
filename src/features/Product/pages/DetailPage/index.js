import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Divider, Skeleton } from 'antd';
import aonu from 'assets/img/category_ao_nu.jpeg';
import createDOMPurify from 'dompurify';
import { onForce } from 'features/Product/productSlice';
import { addProductToCart } from 'features/Product/productSlice';
import { getProductByIdAsync } from 'features/productSlice';
import { get } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { formatCurrency } from 'utils/currency';
import './styles.scss';

const DOMPurify = createDOMPurify(window);
const DetailPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [previewImg, setPreviewImg] = useState();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const { productCart } = useSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const action = await dispatch(getProductByIdAsync(id));
        const _data = unwrapResult(action);

        setProduct(_data);
        setPreviewImg(get(_data, 'imageProductId.images[0].path', aonu));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id, dispatch]);

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const handleChangePreview = (image) => {
    setPreviewImg(image);
  };

  const addToCart = (idProductAdd, newProduct) => {
    dispatch(
      addProductToCart({
        idProductAdd,
        quantity,
        product: newProduct,
      })
    );

    dispatch(onForce());

    toast.success('Thêm sản phẩm thành công', {
      autoClose: 2000,
      theme: 'colored',
    });
  };

  const goToCart = async (idProductAdd, newProduct) => {
    dispatch(
      addProductToCart({
        idProductAdd,
        quantity,
        product: newProduct,
      })
    );

    await dispatch(onForce());
    history.push('/cart');
  };

  const htmlDecode = (input) => {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  };

  if (isLoading) return <Skeleton />;

  return (
    <div className="product container">
      <div className="product__images">
        <div className="product__images__list">
          {get(product, 'imageProductId.images', []).map((item, idx) => {
            return (
              <div
                className="product__images__list__item"
                key={idx}
                onClick={() => handleChangePreview(item.path)}>
                <img src={item.path} alt="" />
              </div>
            );
          })}
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <Divider></Divider>
        <div
          className={`product-description ${
            !descriptionExpand ? 'expand' : ''
          }`}>
          <div className="product-description__title">Chi tiết sản phẩm</div>
          {descriptionExpand && (
            <div className="product-description__content">
              {
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      htmlDecode(product.detailProduct).replace(/\n/g, '<br />')
                    ),
                  }}
                />
              }
            </div>
          )}
          <div className="product-description__toggle">
            <Button
              style={{
                backgroundColor: '#2a2a86',
                color: '#fff',
                fontSize: 15,
              }}
              onClick={() => setDescriptionExpand(!descriptionExpand)}>
              {!descriptionExpand ? 'Xem thêm' : 'Thu gọn'}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">
          {get(product, 'productName', 'default')}
        </h1>
        <div className="product__info__item">
          <div className="product__info__item__price">
            {formatCurrency(
              product.price - product.price * (product.discount / 100)
            )}
            <span style={{ paddingLeft: 5 }}>
              {formatCurrency(product.price)}
            </span>
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            <div className="product__info__item__list__item">
              <div
                className="circle bg-black"
                style={{
                  background: get(product, 'colorId.colorHex', '#fbb96b'),
                }}></div>
            </div>
            {/* <div className="product__info__item__list__item">
              <div
                className="circle bg-red"
                style={{ background: 'red' }}></div>
            </div>
            <div className="product__info__item__list__item">
              <div
                className="circle bg-pink"
                style={{ background: 'pink' }}></div>
            </div>
            <div className="product__info__item__list__item">
              <div
                className="circle bg-blue"
                style={{ background: 'blue' }}></div>
            </div> */}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kích cỡ</div>
          <div className="product__info__item__list">
            {
              <>
                {get(product, 'size', 'S,X')
                  .split(',')
                  .map((item, idx) => {
                    return (
                      <div
                        className="product__info__item__list__item"
                        key={idx}>
                        <span className="product__info__item__list__item__size">
                          {item}
                        </span>
                      </div>
                    );
                  })}
              </>
            }
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng :</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('minus')}>
              <ion-icon name="remove-outline"></ion-icon>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('plus')}>
              <ion-icon name="add-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button
            style={{ backgroundColor: '#2a2a86', color: '#fff', fontSize: 15 }}
            block
            onClick={() => addToCart(product.id, product)}>
            Thêm vào giỏ
          </Button>
          <Button
            style={{ color: '#2a2a86', fontSize: 15 }}
            block
            onClick={() => goToCart(product.id, product)}>
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
