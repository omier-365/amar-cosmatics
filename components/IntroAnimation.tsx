'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // منع التمرير أثناء الانيميشن
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        onComplete();
      }, 600);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          {/* Rose-gold light sweep */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 0.3, 0] }}
            transition={{ duration: 1.2, ease: 'easeInOut', times: [0, 0.5, 1] }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <div
              className="h-full w-1/2"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(217, 156, 148, 0.15) 50%, transparent 100%)',
              }}
            />
          </motion.div>

          {/* Main content */}
          <div className="relative flex items-center justify-center">
            {/* Arabic logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              className="relative z-10"
            >
              <h1 className="text-7xl md:text-8xl font-bold text-charcoal font-cairo">
                عَمّار
              </h1>

              {/* Premium shimmer effect */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '200%', opacity: [0, 0.6, 0] }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 1.2 }}
                className="absolute inset-0 pointer-events-none overflow-hidden"
              >
                <div
                  className="h-full w-1/2"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(217, 156, 148, 0.4) 50%, transparent 100%)',
                  }}
                />
              </motion.div>
            </motion.div>

            {/* English text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2"
            >
              <div className="flex items-center gap-3">
                {/* Left line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="h-[1px] bg-[#d99c94]"
                />
                
                {/* AMMAR text */}
                <motion.div
                  initial={{ letterSpacing: '0em', opacity: 0 }}
                  animate={{ letterSpacing: '0.3em', opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
                  className="text-xl font-light text-charcoal"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  AMMAR
                </motion.div>
                
                {/* Right line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="h-[1px] bg-[#d99c94]"
                />
              </div>

              {/* Diamond ornament */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.7 }}
                className="flex justify-center mt-3"
              >
                <div className="w-2 h-2 bg-[#d99c94] transform rotate-45" />
              </motion.div>
            </motion.div>
          </div>

          {/* Subtle ambient glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(217, 156, 148, 0.1) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
