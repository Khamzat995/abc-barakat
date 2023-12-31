import React from "react";

const MedicalContact = () => {
  return (
    <div
      className="medical-contact-area bg-img"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/img/bg/bg_call_mini.webp"
          })`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-5">
            <div className="medical-contact-text">
              <h3>Позвонить сейчас </h3>
              <h2>BARAKAT HOME</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="medical-shape-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/icon-img/medical-contact-shape.png"
                    }
                    alt="картинка"
                  />
                </div>
              </div>
              <div className="col-lg-9 col-md-10">
                <div className="medical-contact-number-wrap">
                  <div className="medical-contact-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/icon-img/medical-contact.png"
                      }
                      alt="картинка"
                    />
                  </div>
                  <div className="medical-contact-number">
                    <h2>+90 505 789 00 34</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalContact;
