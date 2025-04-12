import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3>About This App</h3>
          <p>
            This Task Manager is a React-based application for managing daily
            tasks with priority levels and deadline tracking. The minimalist
            interface makes it easy to focus on what matters.
          </p>
        </div>

        <div className="footer-section">
          <h3>Tech Stack</h3>
          <p>
            Built with React, Framer Motion for animations, FontAwesome for
            icons, CSS variables for theming, and modern JavaScript features.
          </p>
        </div>

        <div className="footer-section">
          <h3>Concepts Used</h3>
          <p>
            React hooks (useState, useEffect), component composition,
            conditional rendering, array methods, event handling, animations,
            theme switching, and responsive design.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
