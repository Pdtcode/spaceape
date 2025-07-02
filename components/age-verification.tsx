"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const AGE_VERIFICATION_COOKIE = "age_verified";
const GIVEAWAY_POPUP_COOKIE = "giveaway_popup_shown";
const COOKIE_EXPIRY_DAYS = 30;

export function AgeVerification() {
  const [showPopup, setShowPopup] = useState(false);
  const [showGiveawayPopup, setShowGiveawayPopup] = useState(false);

  useEffect(() => {
    const isVerified = getCookie(AGE_VERIFICATION_COOKIE);

    if (!isVerified) {
      setShowPopup(true);
    }
  }, []);

  const handleVerification = (isVerified: boolean) => {
    if (isVerified) {
      setCookie(AGE_VERIFICATION_COOKIE, "true", COOKIE_EXPIRY_DAYS);
      setShowPopup(false);

      const giveawayShown = getCookie(GIVEAWAY_POPUP_COOKIE);

      if (!giveawayShown) {
        setTimeout(() => {
          setShowGiveawayPopup(true);
        }, 500);
      }
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  const handleGiveawayClose = () => {
    setCookie(GIVEAWAY_POPUP_COOKIE, "true", COOKIE_EXPIRY_DAYS);
    setShowGiveawayPopup(false);
  };

  return (
    <>
      {/* Age Verification Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              className="bg-sablue rounded-lg p-8 max-w-md mx-4 font-passion-one text-center shadow-2xl border border-gray-200"
              exit={{ scale: 0.9, opacity: 0 }}
              initial={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-100">
                Age Verification Required
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed">
                You must be 21 years of age or older to view this site.*
              </p>
              <p className="text-sm text-gray-100 mb-8">
                *Or 18 or older in the following states: Arizona, New Jersey,
                New York.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  className="px-8 text-gray-100"
                  size="lg"
                  variant="bordered"
                  onPress={() => handleVerification(true)}
                >
                  I am over 21
                </Button>
                <Button
                  className="px-8 text-gray-100"
                  size="lg"
                  variant="bordered"
                  onPress={() => handleVerification(false)}
                >
                  Exit
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Giveaway Popup */}
      <AnimatePresence>
        {showGiveawayPopup && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl border border-blue-300"
              exit={{ scale: 0.9, opacity: 0 }}
              initial={{ scale: 0.9, opacity: 0 }}
            >
              <div className="mb-4">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Welcome to Space Ape!
              </h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Don&apos;t miss out on our exclusive giveaway! Enter now for a
                chance to win 10 carts for just $0.01!
              </p>
              <div className="flex flex-col gap-3 justify-center">
                <Link href="/signup">
                  <Button
                    className="w-full px-8 bg-white text-blue-600 font-bold hover:bg-gray-100"
                    size="lg"
                  >
                    Enter Giveaway Now! 🚀
                  </Button>
                </Link>
                <Button
                  className="px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
                  size="lg"
                  variant="bordered"
                  onPress={handleGiveawayClose}
                >
                  Maybe Later
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();

  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}
