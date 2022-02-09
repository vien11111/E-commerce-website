import { Row, Col } from 'antd';
import Search from 'antd/lib/input/Search';
import { AppButton } from 'components/AppButton';
import { AppCardProduct } from 'components/AppCardProduct';
import React from 'react';

const productList = [
  {
    id: '1',
    name: 'Áo Khoác Gió Nam Thể Thào Phối Lưng',
    price: 600000,
    discount: 27,
    new: 1,
  },
  {
    id: '2',
    name: 'Áo Khoác Gió Nam 2',
    price: 400000,
    discount: 11,
    new: 0,
  },
  {
    id: '3',
    name: 'Áo Khoác 3 Lưng',
    price: 900000,
    discount: 10,
    new: 1,
  },
  {
    id: '4',
    name: 'Áo Khoác 3 Lưng',
    price: 900000,
    discount: 10,
    new: 1,
  },
];
const ComponentPage = () => {
  return (
    <div>
      <AppButton>JS</AppButton>
      <AppButton
        isDivider
        onClick={() => {
<<<<<<< HEAD
          console.log('click');
=======
>>>>>>> 27506bb (new update)
        }}>
        JS
      </AppButton>
      <Row gutter={32} align="center" justify="space-between">
        {productList.map((product) => (
          <Col xs={32} md={12} xl={8} key={product.id}>
            <AppCardProduct product={product} />
          </Col>
        ))}
      </Row>

      <Search placeholder="input search text" onSearch={() => {}} enterButton />
    </div>
  );
};

ComponentPage.propTypes = {};

export default ComponentPage;
