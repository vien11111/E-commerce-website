import React, { useState } from 'react';
import Heading from 'components/Heading';
import TagName from 'components/AppTag';
import { Row } from 'antd';
import SlideProduct from 'components/SlideProduct';

const KitFashion = () => {
  const [currentTag, setCurrentTag] = useState(0);

  const onHandleTagName = (tagId) => {
    setCurrentTag(tagId);
  };
  return (
    <section className="pt-50">
      <Heading>THỜI TRANG TRẺ EM</Heading>
      <div className="home-tag">
        <Row align={'middle'} justify={'center'}>
          {[
            { tagName: 'Áo Trẻ em' },
            { tagName: 'Quần Trẻ em' },
            { tagName: 'Bộ đồ trẻ em' },
            { tagName: 'Đầm bé gái' },
            { tagName: 'Phụ kiện trẻ em' },
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

export default KitFashion;
