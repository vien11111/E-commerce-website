import React from 'react';
import './size.scss';
import SizeChildren from 'assets/img/size-children.jpg';
import SizeAdult from 'assets/img/size-adult.png';


const index = () => {
  return (
    <div className="container size pt-50">
      <h1 className="size__heading">BẢNG SIZE CHUẨN</h1>
      <div className="size__para">
        <p>
          <strong>
            <em>
            Khi đi mua quần áo thì chọn được món đồ chuẩn size vừa vặn luôn là đẹp nhất. 
            Thấu hiểu điều đó, trên mỗi sản phẩm của Yody đều có bảng tính size số 
            giúp khách hàng dễ dàng tìm được size số phù hợp với chiều cao và cân nặng. 
            Cùng tìm hiểu bạn nhé!
            </em>
          </strong>
          </p>
        <p>
          Mỗi người chúng ta có những đặc điểm hình dáng cơ thể khác nhau, 
          vì vậy size số mà bảng tính gợi ý có thể chưa phù hợp với một số người. 
          Để chắc xác định chính xác size số quần áo của mình 
          tại Passina bạn có thể tham khảo thêm bảng thông số dưới đây nhé!
        </p>
        <p>
          <strong>
            Thông số chọn size theo cân nặng và chiều cao
          </strong>
        </p>
      </div>
      <img src={SizeAdult} alt="" />
      <img src={SizeChildren} alt="" />

    </div>
  );
};

export default index;
