import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faDiscord,
  faReddit,
  faSignalMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { faCube, faComment } from "@fortawesome/free-solid-svg-icons";

const socials = [
  { icon: faTelegram, link: "https://t.me/Night3098" },
  { icon: faDiscord, link: "https://discord.gg/#9707" },
  { icon: faReddit, link: "https://www.reddit.com/user/DEVELOPER0x31/" },
  {
    icon: faSignalMessenger,
    link: "https://signal.me/#eu/XJMqmO9JXZQCwYJIpzjOS741ZnGsLYOQhGqMfpS4lB-8PTSQVmRAbqFIvOrepYiK",
  },
];

const SocialIcon = ({ social, index }) => {
  const controls = useAnimation();

  return (
    <motion.a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, rotate: -45 }}
      animate={controls}
      viewport={{ margin: "0px 0px -100px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            delay: index * 0.15,
          },
        });
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="contact_button">
        <i>
          <FontAwesomeIcon icon={social.icon} className="social-icon" />
        </i>
      </div>
    </motion.a>
  );
};

const DiscordButton = () => {
  const controls = useAnimation();

  return (
    <motion.a
      href="https://discord.gg/tnHSEc2cZv"
      className="btn-slide"
      style={{ marginTop: "30px" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      viewport={{ margin: "0px 0px -100px 0px" }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            delay: 0.8,
          },
        });
      }}
    >
      <span className="circle">
        <FontAwesomeIcon icon={faDiscord} />
      </span>
      <span className="title">DS SERVER</span>
      <span className="title-hover">CLICK</span>
    </motion.a>
  );
};

export const Title = () => {
  const controls = useAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          },
        });
      }}
    >
      <h1>
        <FontAwesomeIcon icon={faComment} className="icon" />
        CONTACTS
      </h1>
    </motion.div>
  );
};

const Contacts = () => (
  <motion.div
    className="contacts"
    id="links"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ margin: "0px 0px -100px 0px" }}
    transition={{ duration: 0.5 }}
  >
    <h1>
      <FontAwesomeIcon icon={faComment} className="icon" />
      CONTACTS
    </h1>
    <div className="contacts_badge_block">
      {socials.map((social, index) => (
        <SocialIcon key={index} social={social} index={index} />
      ))}
    </div>

    <DiscordButton />
  </motion.div>
);

export default Contacts;
