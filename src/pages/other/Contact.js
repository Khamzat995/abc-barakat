import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";

const Contact = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>BARAKAT HOME | БЛОГ</title>
        <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Контакты
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap latitude="40.0864" longitude="29.510" />
            </div>
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+90 505 798 00 34</p>
                      <p>+90 505 798 00 00</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:bhome.tr@gmail.com">bhome.tr@gmail.com</a>
                      </p>
                      <p>
                        <a href="//urwebsitenaem.com">@barakat-home.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Akhisar Mh. 2.Fatih Cad.№ 2D,</p>
                      <p>İnegöl / Bursa</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Подписывайтесь:</h3>
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/barakat_home_tr/">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="//telegram.com">
                          <i className="fa fa-paper-plane" />
                        </a>
                      </li>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>

                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-whatsapp" />
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Связаться</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Имя*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Электронная почта*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Заголовок ..."
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Текст сообшения ..."
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          ОТПРАВИТЬ
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
