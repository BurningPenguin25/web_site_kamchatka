import React from "react";

import TopStyle from "./Top.Module.css";
import LOGO from "./TopImage/Logo.svg";
import ARROW from "./TopImage/arrowTop.svg";
import FB from "./TopImage/FBVector.svg";
import INST from "./TopImage/InstVector.svg";

import Slider from "../ImageSlider/slider.jsx";

// import Slider from "../ImageSlider";

export default function Top() {
  return (
    <>
      <div className={TopStyle.top}>
        <header className={`${TopStyle.topCloud} ${TopStyle.containerHeader}`}>
          <div className={TopStyle.headerLine}>
            <a href="/#">
              <img src={LOGO} alt="" />
            </a> 

            <div className={TopStyle.topRight}>
              <a href="/#3">
                <p>Расписание тура</p>
              </a>
              <a href="/#3">
                <p>Как записаться</p>
              </a>
              <a href="/#3">
                <p>Команда</p>
              </a>

              <button>Забронировать</button>
            </div>
          </div>
        </header>

        <div className={`${TopStyle.container} ${TopStyle.dreamSlideBlock}`}>
          <div className={TopStyle.dreamBlock}>
            <div>
              <h2 className={TopStyle.dreamHeading}>
                Мечты о далекой Камчатке - близко
              </h2>
              <div className={TopStyle.termTour}>23.06 - 04.07 DREAM TOUR</div>
            </div>
            <div>
              <p className={TopStyle.dreamParag}>
                Тур перевернет ваш мир с ног на голову и оставит впечатления на
                всю жизнь.
              </p>
            </div>

            <div className={TopStyle.arrowLink}>
              <a href="/#">
                <p>Расписание тура</p>
                <div>
                  <img src={ARROW} alt="" />
                </div>
              </a>
            </div>

            <div className={TopStyle.sotialIcons}>
              <a href="/#">
                <img src={FB} alt="" />
              </a>
              <a href="/#">
                <img src={INST} alt="" />
              </a>
            </div>
          </div>

          <div className={TopStyle.sliderPart}>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
