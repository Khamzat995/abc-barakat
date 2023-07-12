import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostFive = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt="картинка"
            src={process.env.PUBLIC_URL + "/assets/img/blog/blog-44.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>21 июня, 2023</li>
              <li>
                {/* <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}> */}
                214 <i className="fa fa-comments-o" />
                {/*  </Link> */}
              </li>
            </ul>
          </div>
          <h3>10 ПОПУЛЯРНЫХ МЕСТ ДЛЯ ЛУЧШЕГО ОТДЫХА В ТУРЦИИ</h3>
          <blockquote>
            Курорты Турции стали символом качественного отдыха. Путешествие в Турцию дает
            возможность посетить памятники древних цивилизаций.
            Здесь предлагают элитный и бюджетный виды отдыха.
          </blockquote>

          <p>

            <b> Анталия </b> <br></br>Где лучше отдыхать в Турции в октябре? Длительным пляжным
            сезоном (8–9 месяцев) с апреля по ноябрь славятся курорты Турции на побережье
            Средиземного моря. Это Анталия, Алания, Белек, Кемер, Сиде. Климат на этом
            побережье субтропический, средиземноморский, с жарким летом
            (средняя температура +28 °С), относительно высокой влажностью 60%.
            Пляжи Анталии очень разные — галечные и песчаные, большинство из них
            бесплатные. В городе много развлечений для семейного отдыха: аквапарк,
            океанариум, луна-парк, зоопарк, для молодежи множество ночных клубов,
            дискотек. Туристов привлекают старинные стены города, минареты, триумфальная
            арка II века до н. э.
            {" "}
          </p>
          <blockquote>
            Для любителей тихого отдыха и девственной природы в
            окрестностях шумной Анталии есть маленькие городки и поселки. Журнал Voice
            описывает такой отдых среди сосновых лесов в городке Олимпос.
          </blockquote>
          <p>
            <b>Кемер </b> <br></br>Этот курорт находится в зоне национального природного
            парка, в экологически чистом регионе с особым микроклиматом из-за окружающих
            величественных гор. Воздух освежают сосновые леса, аромат цитрусовых садов.
            Море здесь очень чистое, пляжи общественные и платные. Наплыв на пляжах — в
            июле и августе.
            Кемер подходит для активного и молодежного отдыха, ночная жизнь кипит во
            множестве баров, клубов, на шоу-программах. В марте, апреле или ноябре
            популярны экскурсии к древнему городу Фазелис, где по преданию похоронен
            Александр Македонский. Туристы посещают каньон Гейнюк (скалы до 350 м), в
            котором есть гроты, пещеры и лагуны.

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
              Где лучше отдыхать в Турции с детьми?
            </p>
            <p>
              <b>Аланья</b><br></br>   На побережье Средиземного моря лучшими для
              семейного отдыха считаются курорты в Алании, Белеке, Сиде.Аланья — самое
              теплое место даже в октябре.Это курорт с бюджетными отелями, которые
              расположены вдоль побережья через дорогу.Под ней устроены подземные
              переходы, ведущие к пляжам.В отелях создана структура для детского отдыха
              — аквапарки, водные горки.Славится курорт фантастически красивым пляжем
              «Клеопатра» с белоснежным песком.Его часто признают одним из лучших на
              побережье, о чем пишут авторы книги об Алании.В старой части города есть
              памятники разных эпох, старые городские стены.Можно посетить сталактитовую
              пещеру Дамлаташ, которая славится своими целебными свойствами.
            </p>
            <p>
              <b>Белек</b><br></br> Курорт окружен сосновыми, кедровыми и эвкалиптовыми
              лесами. Отели Белека имеют пляжи с золотистым песком, лежакам, зонтами и
              удобными для детей заходами в море, что актуально для семейного отдыха.
              Высокий сезон приходится на июнь–август. Этот курорт популярен и среди
              любителей активного отдыха. Он славится гольф-полями: Белек считается
              гольф-столицей Турции. Кроме того, здесь доступен теннис, верховая езда,
              альпинизм, водные виды спорта. Организуются джип-туры по горным дорогам,
              экскурсии в каньон со скалами до 400 м.
            </p>
            <p>
              <b>Сиде </b><br></br> Сиде — один из лучших тихих курортов для семейного
              отдыха с детьми. Большинство отелей имеют просторные территории с аквапарками,
              в поселках рядом — пляжи с мелким песком, в бухте Кумкой — удобный для детей
              пологий вход в море. Лучшее время отдыха — с мая до сентября. Из
              достопримечательностей есть античный театр, римская баня, в которой сейчас
              находится археологический музей. Отдыхающие могут поехать на экскурсию в
              Каппадокию. Здесь можно посмотреть или совершить полет на воздушном шаре
              над горным каньоном.
            </p>
            <p>
              <b>Бодрум </b><br></br>  Где лучше отдыхать в Турции на море? Самые красивые
              морские курорты Турции расположены на побережье Эгейского моря: Бодрум,
              Даламан, Мармарис, Фетхие. Здесь пляжный сезон начинается в мае и длится до
              октября. В Бодруме преобладают галечные пляжи, но около отелей есть платформы
              с насыпным песком. Город отличается тем, что все здания здесь белого цвета.
              Бодрум — столица молодежного отдыха, тусовочный и богемный курорт. Здесь
              множество ночных клубов, дискотек, самый большой танцевальный зал в мире на
              5 тыс. гостей «Галикарнас». Древний город богат историческими памятниками:
              есть грандиозный амфитеатр с гладиаторской ареной (IV век до н. э.), крепость,
              замок святого Петра (XV век).
            </p>
            <p>
              <b>Даламан </b><br></br>Даламан — маленький городок, который как курорт еще
              только набирает популярность. Поэтому туристов здесь не так много, как в
              других местах, а цены ниже. Но красивая природа, пляжи с чистым песком
              позволят насладиться тихим отдыхом на море. Купальный сезон начинается в
              июне и длится до начала октября. Рядом с курортом есть термальные источники
              и озера. Для любителей активного отдыха организуются сплавы по реке Даламан.
            </p>
            <p>
              <b>Мармарис </b><br></br> Курорт находится на полуострове между Средиземным
              и Эгейским морями. Пляжный сезон стартует уже в мае и длится до октября.
              Здесь тихие зеленые бухты, галечные и песчано-галечные пляжи протянулись на
              12 км. Около недорогих отелей расположены муниципальные пляжи. В Мармарисе
              находится центр парусного спорта всего побережья, можно арендовать яхту или
              отправиться на обзорную морскую экскурсию. Для активного отдыха предлагается
              дайвинг, организуются сафари на квадроциклах, прогулки на лошадях или
              аквабайках. Мармарис отличается бурной ночной жизнью, подходит для молодежного
              отдыха. Здесь находится знаменитая улица баров — Бар-стрит.
            </p>
            <p>
              <b>Фетхие </b><br></br>  Курорт расположен в экологически чистом регионе,
              высокий сезон здесь с мая по октябрь. Одно из самых живописных мест — бухта
              Олюдениз с бирюзовым морем и роскошными пляжами. В другой тихой бухте
              находится пляж Лагуна с пологим спуском в море, где можно спокойно отдыхать
              семьям с детьми. Отдыхающим предлагаются прогулки на яхтах, прыжки с
              парашютом или полеты на параплане, экскурсии в древнюю крепость, античный
              амфитеатр.
            </p>
            <p>
              <b>Эрджиес </b><br></br> Какой выбрать не пляжный отдых в Турции? В Турции
              становятся популярными зимние курорты, один из них — Эрджиес. Любители
              активного зимнего отдыха приезжают сюда с декабря по март. Горнолыжный курорт
              Эрджиес находится на востоке Каппадокии, которая включена в список Всемирного
              наследия ЮНЕСКО. Он расположился на высоте около 4 тыс. м над уровнем моря,
              в Анатолийских горах. Горный воздух очень сухой,что обеспечивает комфорт в
              мороз. Трассы Эрджиеса протяженностью более 100 км предназначены как для
              новичков, так и для опытных лыжников. К услугам 18 удобных подъемников.
              Инфраструктура не уступает европейским горнолыжным курортам, но имеет
              преимущество перед ними: здесь нет такого наплыва туристов и цены ниже.
            </p>
            <p className="blockquote">
              Дорогие друзья! Куда лучше поехать в Турцию в первый раз? Из короткого обзора
              выбирайте для первого знакомства турецкий курорт согласно бюджету. В Анталии
              отдых будет ярким и шумным. В Аланье — самый бюджетный. В Кемере — идеальное
              соотношение развитого сервиса и спокойного отдыха. Самый красивый морской
              отдых ожидает на Эгейском побережье. Теплый климат, морские пляжи, целительный
              воздух — главное богатство турецких курортов. Их дополняет комфортная
              инфраструктура и сервис «все включено», а также впечатления от
              достопримечательностей древних мест.
            </p>
          </div>
        </div>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Стиль ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдуший пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostFive;
