import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";
import ImagesFooter from './ImagesFooter';

const media = {
  desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `,
};

const Footer = styled.footer`
background-color: #000000;
  font-family: lato;
  text-align: center;

  ${media.desktop`
    text-align: left;
  `}
`;

const TopBar = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 40px 0;
  ${media.desktop`
    padding: 45px 80px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  `}
`;

const GetTheApp = styled.div`
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #FFFFFF;
  margin: 0 -15px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  ${media.desktop`
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
  `}
`;

const GetTheAppTitle = styled.div`
  margin-bottom: 4px;
  width: 100%;
  ${media.desktop`
    width: unset;
    margin: 0 15px;
  `}
`;

const AppStoreApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `}
`;

const GoogleApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `}
`;

const DesktopSocialList = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
    align-items: center;
  `};
`;

const MobileSocialList = styled.div`
  padding-bottom: 40px;
  width: 100%;
  ${media.desktop`
    display: none;
  `};
`;

const Twitter = styled.svg`
  width: 33px;
  height: 33px;
  margin-left: 5px;
  font-size: 30px;
  color: #FFFFFF;
`;
const Youtube = styled.svg`
  font-size: 30px;
  width: 33px;
  height: 33px;
  margin-left: 5px;
  color: #FFFFFF;
`;

const Facebook = styled.svg`
  width: 33px;
  height: 33px;
  margin-left: 5px;
  font-size: 30px;
  color: #FFFFFF;
`;

const Instagram = styled.svg`
  width: 33px;
  height: 33px;
  margin-left: 5px;
  font-size: 30px;
  color: #FFFFFF;
`;

const HR = styled.div`
  display: none;
  ${media.desktop`
    height: 0;
    padding: 0;
    margin: 0;
    display: block;
    border-bottom: 1px #cacada solid;
  `};
`;

const BottomBar = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  ${media.desktop`
    flex-wrap: nowrap;
    padding: 40px 80px 60px;
    justify-content: space-between;
  `};
`;

const Menu = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
  ${media.desktop`
    min-width: unset;
    margin-bottom: 0;
    margin-right: 40px;
  `}
`;

const MenuHead = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #FFFFFF;
`;

const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #FFFFFF;
  ${media.desktop`
    white-space: nowrap;
  `}
`;

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  color: #2b2738;
  margin: 0 20px;
`;

const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;

const menu = [
  {
    name: "COMMENT POUVONS-NOUS VOUS AIDER?",
    links: [
      { title: "Service client", url: "www.openfit.com" },
      { title: "Acheter sur Alterny", url: "www.openfit.com" },
      { title: "Méthodes de paiement", url: "www.openfit.com" },
      { title: "Suivre ma commande", url: "www.openfit.com" },
    ],
    id:0
  },
  {
    name: "QUI SOMMES-NOUS?",
    links: [
      { title: "En savoir plus sur Alterny", url: "www.openfit.com" },
      { title: "Nos boutiques", url: "www.openfit.com" },
      {
        title: "Politiques de confidentialité et de cookies",
        url: "www.openfit.com",
      },
      { title: "Conditions d'utilisation", url: "www.openfit.com" },
     
    ],
    id:1
  },
  {
    name: "GAGNEZ DE L'ARGENT!",
    links: [
      { title: "Vendez sur Alterny", url: "www.openfit.com" },
      { title: "Devenez partenaire d'Alterny ", url: "www.openfit.com" },
    ],
    id:2
  },
];

const SocialList = () => (
  <>
    <Facebook>
      
      <ImFacebook2 />
    </Facebook>
    <Instagram>
      <ImInstagram />
    </Instagram>
    <Twitter>
      <ImTwitter />
    </Twitter>
    <Youtube>
      <ImYoutube />
    </Youtube>
  </>
);

export default function Footer2() {
  return (
    <Footer>
      <TopBar>
        <GetTheApp>
          <GetTheAppTitle>
            Télécharger notre application gratuite
          </GetTheAppTitle>
          <AppStoreApp src={ImagesFooter.img1} className="img" alt="" />
          <GoogleApp src={ImagesFooter.img2} className="img" alt="" />
        </GetTheApp>
        <DesktopSocialList>
          <SocialList />
        </DesktopSocialList>
      </TopBar>
      <HR />
      <BottomBar>
        {menu.map(({ name, links,id }) => (
          <Menu>
            <MenuHead key={menu.id}>{name}</MenuHead>
            {links.map(({ title, url }) => (
              <MenuLink key= { links.title} href={url}>{title}</MenuLink>
            ))}
          </Menu>
        ))}
        <MobileSocialList>
          <SocialList />
        </MobileSocialList>

      </BottomBar>
    </Footer>
  );
}
