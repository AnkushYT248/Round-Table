"use client";
import { motion } from "framer-motion";

const VitalLoader = ({ size = 40, }: { size?: number }) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className="border-2 border-dotted border-white rounded-full flex items-center justify-center"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ width: `${size - 20}px`, height: `${size - 20}px` }}
        className="border-2 border-dashed border-t-white rounded-full flex items-center justify-center"
      >
        <motion.div
          style={{
            width: `${Math.max(size - 40, 0)}px`,
            height: `${Math.max(size - 40, 0)}px`,
          }}
          className="border-b-white border-2 animate-spin rounded-full"
        />
      </motion.div>
    </div>
  );
};

export { VitalLoader };
