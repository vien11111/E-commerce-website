import React from 'react';
import './about.scss';
import vision from '../../assets/img/vision.png';
import mission from '../../assets/img/mission.jpg';
import visionMission from '../../assets/img/vision-mission.png';
import home from '../../assets/img/home.png';


const index = () => {
  return (
    <div className="container pt-50">
      <div className="header">
        <h1 className="header__title">
          TẦM NHÌN - SỨ MỆNH PASSINA: NÂNG TẦM THƯƠNG HIỆU VIỆT
        </h1>
        <img
          src={visionMission}
          alt="Vision and mission"
          className="header__img"
        />
      </div>
      <div className="content">
        <div className="content__header">
          <p>
            <em>
              <strong>
                Bắt đầu từ thương hiệu thời trang Hi5 ra đời trong năm 2009,
                trải qua chặng đường phát triển đầy khó khăn, Hi5 được đổi tên
                thành Passina năm 2014 với ước mơ gây dựng một thương hiệu thời
                trang hàng đầu thế giới.
              </strong>
            </em>
          </p>
          <p>
            Từ đó trở đi Passina lớn mạnh không ngừng, đến năm 2016 Passina đã
            có 38 cửa hàng, chỉ sau 2 năm vào năm 2018 Passina đã có 73 cửa
            hàng. Đến năm 2019 Passina đã có 82 cửa hàng và tính đến thời điểm
            hiện tại Passina đã mở rộng được hơn 100&nbsp;cửa hàng trên toàn
            quốc.
          </p>
          <img src={home} alt="" className="header__img" />
          
        </div>
        <div className="content__main">
        <div className="content__main--heading">
            <h2>Tầm nhìn của Passina</h2>
          </div>
          <ul>
            <li>
              2025: Công ty thời trang số 1 Việt Nam. IPO và trở thành &ldquo;Kỳ lân&rdquo; tiếp theo của Việt Nam. Cộng đồng Passina có cuộc sống viên mãn, hạnh phúc.
            </li>
            <li>
              2038: Công ty thời trang số 1 Thế Giới. Cộng đồng Passina có cuộc sống viên mãn, hạnh phúc.
            </li>   
          </ul>
          <img src={vision} alt="" className="header__img" />
          <div className="content__main--heading">
            <h2>Niềm tin của Passina</h2>
          </div>
          <ul>
            <li>
              Tất cả các khoản chi đều là chi phí, chỉ có chi cho khách hàng và
              nhân viên là không phí.
            </li>
            <li>
              Tất cả những thành viên của Passina đều nỗ lực hết sức và có năng
              lực để thực hiện mục tiêu.
            </li>
            <li>
              Mỗi thành viên Passina đều có thể thay đổi khi được trao niềm tin,
              ghi nhận, hướng dẫn và đào tạo.
            </li>
          </ul>
          <div className="content__main--heading">
            <h2>Sứ mệnh của Passina</h2>
          </div>
          <p>
            <em>
              Sứ mệnh của Passina là &ldquo;Đưa sản phẩm thời trang Việt có chất
              liệu tốt, dịch vụ tốt đến tận tay khách hàng tại các vùng miền
              Việt Nam và trên Thế Giới&rdquo;.
            </em>
          </p>
          <img src={mission} alt="" className="header__img" />
          <p>
            Passina mong muốn mang đến cho toàn bộ khách hàng trên khắp mọi miền
            tổ quốc Việt Nam những sản phẩm thời trang do chính tay người Việt
            làm ra. Không phân biệt tầng lớp, không phân biệt giàu nghèo, những
            khách hàng chưa bao giờ được trải nghiệm dịch vụ mua sắm vượt ngoài
            mong đợi, ai cũng sẽ được chào đón, tôn trọng khi đến với Passina.{' '}
            <br />
            <br />
            Chính vì vậy, Passina dày công nghiên cứu chất liệu sản phẩm và cho
            ra mắt những dòng sản phẩm tối ưu cả về giá cả và chất lượng mang
            đến cho khách hàng. Cùng với đó, Passina luôn dành phần lớn thời
            gian để đào tạo văn hóa phục vụ cho toàn bộ nhân viên. Mỗi nhân viên
            sẽ là 1 đại sứ thương hiệu, mỗi nhân viên sẽ là 1 hình mẫu về văn
            hóa phục vụ của Passina và trao giá trị tốt nhất đến từng khách
            hàng.
          </p>
        </div>
        <div className="content__footer">
          <section>
            <em>
              Với sứ mệnh đưa Passina thành thương hiệu thời trang toàn cầu, đội ngũ
              các thành viên Passina cam kết sẽ mang lại sự hài lòng tuyệt đối về
              sản phẩm cũng như dịch vụ đến tận tay khách hàng!
            </em>
          </section>
        </div>
      </div>
    </div>
  );
};

export default index;
