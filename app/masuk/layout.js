"use client";

import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [1000]);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="overflow-hidden">
          <AnimatePresence>
            {loading && (
              <motion.div
                layout
                animate={{ opacity: 0 }}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                }}
                className="fixed z-50 w-full h-screen"
              >
                <Loading />
              </motion.div>
            )}
          </AnimatePresence>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
