import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostThree = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt="картинка"
            src={process.env.PUBLIC_URL + "/assets/img/blog/blog-45.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>9 июля, 2023</li>
              <li>
                {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                122 <i className="fa fa-comments-o" />
                {/*  </Link> */}
              </li>
            </ul>
          </div>
          <h3>МЕДИЦИНА В ТУРЦИИ ДЛЯ ИНОСТРАНЦЕВ</h3>
          <p>
            Здравоохранение в Турции - еще одна причина выбрать эту страну в качестве
            своего второго дома. В соответствии с Конституцией страны является
            общественным достоянием и обязанностью государства. Ответственный
            государственный орган за медицинские услуги и связанные с ней области
            социального обеспечения - Министерство здравоохранения. Под его контролем
            предоставление медицинской помощи гражданам и организация профилактических
            медицинских учреждений, строительство и эксплуатация государственных больниц,
            контроль частных больниц, подготовка медицинского персонала, регулирование
            цен на лекарственные препараты, контроль производства лекарств и работы всех
            аптечных организаций.{" "}
          </p>
          <blockquote>
            Система здравоохранения Турции
          </blockquote>
          <p>
            Турецкая медицина делится на государственные и частные медицинские учреждения.
            Государственная сеть охватывает все регионы пропорционально населению, а
            частные поликлиники и больницы сконцентрированы в крупных городах и
            развиваются благодаря инвестициям. Кроме государственного и частного сектора,
            создают и курируют свои больницы по всей стране университеты и Министерство
            Обороны.

            Турецкое правительство хорошо вкладывается в образование медицинских специалистов.
            Врачи проходят обучение  и стажировку в США и Европе, участвуют в научных
            конференциях и международных выставках. Иностранцы выбирают местных врачей
            из-за их высокой квалификации. Хорошее  качество медицины страны подтверждают
            международные сертификаты. Часть клиник здесь аккредитована Объединенной
            международной комиссией.

            Стоимость большинства услуг государственного сектора очень доступна или совсем
            бесплатные для граждан Турции. Для иностранных граждан медицина в этой
            стране может быть такой же, как и для жителей Турции, если получить вид
            на жительство, который дает право свободно посещать врачей - так же, как
            турецкие граждане.

            Так что, есть смысл задуматься о получении ВНЖ, например, приобретая недвижимость.
            Напоминаем, что иностранные граждане, получившие гражданство за покупку
            недвижимости на сумму от 250 тысяч долларов, а также их семьи, могут
            пользоваться преимуществами системы здравоохранения на протяжении всей жизни
            в Турции.
            <blockquote>
              Полис медицинского страхования обязателен для иностранцев при подаче
              документов на ВНЖ в Турции. Иностранных граждан страхуют только частные
              компании. Государственную страховку можно купить только через год проживания
              в Турции.
            </blockquote>

          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <a href="#">
                <img
                  alt="картинка"
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"
                  }
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt="картинка"
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"
                }
              />
            </div>
          </div>
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <p className="blockquote">
              Аптеки и лекарства в Турции
            </p>

            <p>
              Турция занимает 16-е место среди ведущих мировых фармацевтических
              производителей и является 6-м крупнейшим фармацевтическим рынком в Европе
              после Германии, Франции, Великобритании, Италии и Испании.

              В стране много аптек (Eczane), в том числе и дежурных аптек, которые
              работает 24 часа в сутки. Обычные аптеки располагаются недалеко от лечебных
              учреждений и, как правило, работают до 6-7 часов вечера с выходным днем в
              воскресенье. Некоторые лекарства продаются по зеленым или красным рецептам,
              утвержденным Министерством здравоохранения с целью контроля за оборотом
              определенных лекарственных средств. Но есть много лекарств, которые
              продаются без рецептов и довольно доступны по цене.

              Для каждого препарата, продаваемого в Турции, есть максимальная отпускная
              цена в лирах для аптек (Eczane). Если вы покупаете лекарство по рецепту,
              выписанному врачом на приёме по страховке, ваш страховой медицинский полис
              покроет до 80% стоимости лекарства.
            </p>
            <p className="blockquote">
              Лечебные учреждения Турции
            </p>
            <p>
              Разобраться, какие больницы есть в городах Турции можно на сайте,
              учрежденном Министерством Здравоохранения, hastaneler.bbs.tr. На этом
              ресурсе вы найдете полную и достоверную информацию с телефонами и ссылками
              на сайты заведений.
              Вот несколько наиболее популярных клиник (hastanesi) Стамбула.
              Пожалуй, здесь сконцентрировано наибольшее количество различных медицинских
              учреждений страны - более 1000.

              Клиника Anadolu (Стамбул),
              Университетская клиника Medipol (Стамбул),
              Университетская клиника Yeditepe (Стамбул),
              Медицинский центр LIV Hospital (Стамбул),
              Клиника Medistate (Стамбул),
              Сеть клиник Memorial (Стамбул, Анталия),
              Университетская клиника Marmara (Стамбул),
              Клиника эстетической медицины Estethica (Стамбул).
              Все они c международной аккредитацией, оснащены современным оборудованием, и
              имеют лучшие отзывы пациентов, прошедших там лечение.

              Турция находится на втором месте в мире по количеству больниц с аккредитацией
              Объединённой международной комиссии JCI и имеет более 50 аккредитованных
              больниц JCI. Это значит, что они соответствуют международным стандартом
              на европейском уровне.

              <p className="blockquote">
                Лечебные термальные курорты Турции
              </p>

              Турция славится своими термальными источниками и занимает 7-е место
              в мире по их количеству и разнообразию. Всего в Турции находится более
              15 000 термальных источников. Около 300 источников прошли сертификацию
              и пригодны для лечения. Все они обладают уникальными целебными свойствами
              и применяются для лечения различных заболеваний, в том числе хронических,
              а также реабилитации после травм и операций.

              Самые востребованные на сегодняшний день термальные курорты
              Турции находятся в Бурсе, Измире, Памуккале, Даламане, а также недалеко от
              Стамбула и Анкары. Среди самых известных и наиболее посещаемых - Кангал,
              Ялова и Памуккале. Каждый из них уникален в своем роде. Благодаря
              целительным свойствам воды курорты посещают туристы со всего мира,
              чтобы пройти курс лечения или реабилитации.

            </p>
          </div>
        </div>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                Стиль ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                Интересы ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Люди
              </Link>
            </li>
          </ul>
        </div>
        <div className="blog-share">
          <span>Поделиться :</span>
          <div className="share-social">
            <ul>
              <li>
                <a className="facebook" href="//facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="//twitter.com">
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
              <li>
                <a className="instagram" href="//instagram.com">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostThree;
