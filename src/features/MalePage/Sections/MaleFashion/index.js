import React, { useState } from 'react';
import Heading from 'components/Heading';
import TagName from 'components/AppTag';
import { Row } from 'antd';
import SlideProduct from 'components/SlideProduct';

const MaleFashion = () => {
  const [currentTag, setCurrentTag] = useState(0);

  const onHandleTagName = (tagId) => {
    setCurrentTag(tagId);
  };
  return (
    <section className="pt-50">
      <Heading>THỜI TRANG NAM</Heading>
      <i>
        Passina Men Fashion mang lại sự hòa hợp về cá tính, đem lại cảm giác
        thoải mái từ bên trong và tư tin ở bên ngoài với các sản phẩm thời trang
        quốc dân như áo polo, áo thun, áo sơ mi, quần âu, quần jean và giày nam.
      </i>

      <div className="home-tag">
        <Row align={'middle'} justify={'center'}>
          {[
            { tagName: 'Áo Nam' },
            { tagName: 'Quần Nam' },
            { tagName: 'Đồ mặc nhà nam' },
            { tagName: 'Đồ mặc trong' },
            { tagName: 'Phụ kiện nam' },
          ].map((tag, idx) => (
            <TagName
              key={idx}
              isActive={currentTag === idx}
              onClick={() => onHandleTagName(idx)}>
              {tag.tagName}
            </TagName>
          ))}
        </Row>
      </div>

      <SlideProduct />
    </section>
  );
};

export default MaleFashion;
