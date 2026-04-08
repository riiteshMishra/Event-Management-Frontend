import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { footerData } from "../../../data/footer";
import { langMap } from "../../../utils/helper";

// ICONS
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const { language } = useSelector((state) => state.language);
  const selectedLang = langMap[language] || "english";
  const data = footerData[selectedLang];

  return (
    <footer className="bg-white dark:bg-dark/96 text-dark dark:text-light pt-10">
      <div className="container">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              {selectedLang === "hindi" ? "हमारे बारे में" : "About"}
            </h3>
            <p className="text-sm leading-relaxed">{data.about}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              {selectedLang === "hindi" ? "त्वरित लिंक" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {data.quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-amber-500 cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              {selectedLang === "hindi" ? "संपर्क" : "Contact"}
            </h3>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-amber-500" />
                {data.contact.address}
              </p>

              <p className="flex items-center gap-2">
                <FaPhone className="text-amber-500" />
                {data.contact.phone}
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-amber-500" />
                {data.contact.email}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t mt-8 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
