import { Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import fb_logo from 'assets/img/fb_logo.png';
import ytb from 'assets/img/ytb_logo.png';
import shoppee from 'assets/img/shoppe.png';
import sendo from 'assets/img/sendo.png';
import zalo from 'assets/img/zalo_logo.png';
import insta from 'assets/img/insta_logo.png';
import lazada from 'assets/img/lazada.png';
import passina from 'assets/img/logo1.png';
import { simplesharer } from 'simple-sharer';

export const AppFooter = () => {
  return (
    <div>
      <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic-img">
                <img src={passina} alt="" />
              </div>
              <p>
                Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy
                nghĩ và hành động của mình là sứ mệnh, là triết lý, chiến lược..
                luôn cùng Passina tiến bước.
              </p>
            </div>
            <div className="lower">
              <div className="topic">Tổng Đài Hỗ Trợ</div>
              <div className="phone">
                <Link to="">
                  <i className="fas fa-phone-volume" />
                  +007 9089 6767
                </Link>
              </div>
              <div className="email">
                <Link to="/">
                  <i className="fas fa-envelope" />
                  chamsockhachhang@passina.com
                </Link>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">HỖ TRỢ KHÁCH HÀNG</div>
            <div className="box-mobile">
              <div>
                <Link to="/">Hướng dẫn chọn size</Link>
              </div>
              <div>
                <Link to="/">Chính sách khách hàng thân thiết</Link>
              </div>
              <div>
                <Link to="/">Chính sách đổi/trả</Link>
              </div>
              <div>
                <Link to="/">Chính sách bảo mật</Link>
              </div>
              <div>
                <Link to="/">Thanh toán, giao nhận</Link>
              </div>
            </div>
          </div>
          <div className="right box">
            <div className="box-mobile">
              <div className="topic">CÔNG TY CP THỜI TRANG PASSINA</div>
              {/* <form action="#">
                            <input type="text" placeholder="Enter email address" />
                            <input type="submit" name defaultValue="Send" />
                            <div className="media-icons">
                                <Link to="/"><i className="fab fa-facebook-f" /></Link>
                                <Link to="/"><i className="fab fa-instagram" /></Link>
                                <Link to="/"><i className="fab fa-twitter" /></Link>
                                <Link to="/"><i className="fab fa-youtube" /></Link>
                                <Link to="/"><i className="fab fa-linkedin-in" /></Link>
                            </div>
                        </form> */}
              <div>
                <Link to="/">
                  Công ty CP Passina, 137 Nguyễn Thị Thập, TP. Đà Nẵng
                </Link>
              </div>
              <div>
                <Link to="/"> MST: 0899999999</Link>
              </div>
              <div>
                <Link to="/">Email: chamsockhachhang@passina.com</Link>
              </div>
            </div>

            <div className="topic-chill">Kết nối với chúng tôi </div>
            <div className="media-icons">
              <Link
                onClick={() => {
                  window.open(
                    'https://www.facebook.com/passinadanang',
                    '_blank'
                  );
                }}>
                <img src={fb_logo} />
              </Link>
              <Link to="/">
                <img src={insta} alt="" />
              </Link>
              <Link to="/">
                <img src={lazada} alt="" />
              </Link>
              <Link to="/">
                <img src={ytb} alt="" />
              </Link>
              <Link to="/">
                <img src={zalo} alt="" />
              </Link>
              <Link to="/">
                <img src={shoppee} alt="" />
              </Link>
              <Link to="/">
                <img src={sendo} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="bottom">
          <p>
            Copyright © 2021 <Link to="/">SpiderTeam</Link>. All right reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
