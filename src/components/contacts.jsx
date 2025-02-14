import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faDiscord,
  faReddit,
  faSignalMessenger,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faTelegram, link: "https://t.me/Night3098" },
  { icon: faDiscord, link: "https://discord.gg/#9707" },
  { icon: faReddit, link: "https://www.reddit.com/user/DEVELOPER0x31/" },
  {
    icon: faSignalMessenger,
    link: "https://signal.me/#eu/XJMqmO9JXZQCwYJIpzjOS741ZnGsLYOQhGqMfpS4lB-8PTSQVmRAbqFIvOrepYiK",
  },
];

const Contacts = () => (
  <div className="contacts" id="links">
    <h1>CONTACTS</h1>
    <div className="contacts_badge_block">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact_button">
            <i>
              <FontAwesomeIcon icon={social.icon} className="social-icon" />
            </i>
          </div>
        </a>
      ))}
    </div>
    <a
      href="https://discord.gg/tnHSEc2cZv"
      className="btn-slide"
      style={{ marginTop: "30px" }}
    >
      <span className="circle">
        <FontAwesomeIcon icon={faDiscord} />
      </span>
      <span className="title">DS SERVER</span>
      <span className="title-hover">CLICK</span>
    </a>
  </div>
);

export default Contacts;
