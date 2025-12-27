import { Row, Col, Modal } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { useState } from "react";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Контакты")}</Language>
              <Para>
                {t(`У вас есть вопросы? Свяжитесь с нами по электронной почте`)}
              </Para>
              <a href="mailto:scual@bk.ru">
                <Chat>{t(`Напишите нам`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Дисклеймер")}</Title>
              <Large
                as="button"
                onClick={() => setIsDisclaimerOpen(true)}
                style={{ background: "none", border: "none", padding: 0 }}
              >
                {t("Важная информация")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Ссылки")}</Title>
              <Large
                as="a"
                href="https://t.me/soberhouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Канал Трезвого дома")}
              </Large>

              <Large
                as="a"
                href="https://t.me/trezvyiy_dom_izbrannoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Избранное чата")}
              </Large>

              <Large
                as="a"
                href="https://t.me/+4pnOqJdm7pg0NDYy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Истории участников")}
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Modal
  open={isDisclaimerOpen}
  onCancel={() => setIsDisclaimerOpen(false)}
  footer={null}
  centered
>
  <h3>{t("Важная информация")}</h3>

  <p>
   Сообщество «Трезвый Дом» предоставляет пространство для взаимной поддержки и обмена личным опытом трезвости. Сообщество не оказывает медицинских, психотерапевтических или реабилитационных услуг.
  </p>

  <p>
    Любая информация, высказывания и рекомендации участников отражают их личный опыт и не являются заменой профессиональной помощи.
  </p>
  <p>Каждый участник самостоятельно принимает решения и несёт ответственность за своё физическое и психическое состояние.</p>
  <p>При наличии острого кризиса, суицидальных мыслей или угрозы жизни необходимо обратиться к профессиональным специалистам или в экстренные службы вашего региона.</p>
</Modal>
      {/*<Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />
              <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>*/}
    </>
  );
};

export default withTranslation()(Footer);
