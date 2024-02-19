import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, rotateY: -90 },
  animate: { opacity: 1, rotateY: 0 },
  exit: { opacity: 0, rotateY: 90 },
};

export const AnimatedPageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};
