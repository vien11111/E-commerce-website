import { Checkbox, Col, Collapse, Row, Slider } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import './styles.scss';
import { formatCurrency } from 'utils/currency';

const { Panel } = Collapse;

const AppCollapse = ({ categoryList, onFilterByCategory, onFilterByPrice }) => {
  const [currentCollapse, setCurrentCollapse] = useState('1');

  const { search } = useLocation();
  const { categoryId = '' } = qs.parse(search);

  function callback(key) {
    setCurrentCollapse(key);
  }

  return (
    <div className="collapse">
      <Collapse defaultActiveKey={[currentCollapse]} onChange={callback}>
        <Panel header="DANH MỤC SẢN PHẨM" key="1">
          {
            <>
              {(categoryList || []).map((category) => {
                return (
                  <div
                    key={category.id}
                    className={`collapse__text ${
                      categoryId === category.id ? 'active' : ''
                    }`}
                    onClick={() => onFilterByCategory(category.id)}>
                    {category.categoryName}
                  </div>
                );
              })}
            </>
          }
        </Panel>

        <Panel header="GIÁ" key="2">
          <Slider
            range
            tooltipVisible
            min={0}
            max={600000}
            tipFormatter={(value) => formatCurrency(value, 'VND')}
            onAfterChange={onFilterByPrice}
            included={true}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default AppCollapse;
