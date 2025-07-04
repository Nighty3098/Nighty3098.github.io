import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faDiscord,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "./SocialIcon";
import ContactCard from "./ContactCard";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: faEnvelope, ling: "mailto:night3098games@gmail.com" },
  { icon: faTelegram, link: "https://t.me/Night3098" },
  { icon: faDiscord, link: "https://discord.gg/#9707" },
  { icon: faReddit, link: "https://www.reddit.com/user/DEVELOPER0x31/" },
];

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="main_block"
      id="links"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%" }}
    >
      <div style={{ height: "50px" }}></div>
      <ContactCard />
      <div style={{ height: "50px" }}></div>
      <a
        href="https://docs.google.com/document/d/1F56DLD5cfGlKVzTzlpU5TD-zoJlGTi2LhfMb9mejHe8/edit?usp=sharing"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "30%",
          minWidth: "150px",
          maxWidth: "450px",
          height: "30px",
          boxShadow: "none",
          gap: "15px",
        }}
      >
        <FontAwesomeIcon icon={faFileArrowDown} /> {t("cv")}
      </a>
      <div style={{ height: "50px" }}></div>
      <div className="contacts_badge_block">
        {socials.map((social, index) => (
          <SocialIcon key={index} social={social} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Contacts;
