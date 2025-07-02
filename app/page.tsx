"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { fontPassionOne } from "@/config/fonts";

export default function Home() {
  const NUM_ASTROS = 1; // Change this number to add more astronauts

  const [astros, setAstros] = useState<
    Array<{
      position: { x: number; y: number };
      velocity: { x: number; y: number };
      rotation: number;
    }>
  >([]);

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set window dimensions once on initial load with mobile constraints
    const isMobile = window.innerWidth < 768;

    setWindowDimensions({
      width: window.innerWidth * (isMobile ? 0.62 : 0.78),
      height: window.innerHeight * 0.9,
    });
  }, []);

  useEffect(() => {
    if (windowDimensions.width === 0) return;

    // Initialize astros after window dimensions are available
    setAstros(
      Array.from({ length: NUM_ASTROS }, () => ({
        position: {
          x: Math.random() * (windowDimensions.width + 100) - 100,
          y: Math.random() * (windowDimensions.height + 100) - 100,
        },
        velocity: {
          x: (Math.random() - 0.5) * 3,
          y: (Math.random() - 0.5) * 3,
        },
        rotation: Math.random() * 360,
      })),
    );
  }, [windowDimensions]);

  useEffect(() => {
    if (astros.length === 0) return; // Don't start animation until astros are initialized

    const animate = () => {
      setAstros((prevAstros) =>
        prevAstros.map((astro) => {
          const newX = astro.position.x + astro.velocity.x;
          const newY = astro.position.y + astro.velocity.y;

          let newVelX = astro.velocity.x;
          let newVelY = astro.velocity.y;

          // Screen boundaries collision - bounce when any part of image hits edge
          if (newX < -100 || newX > windowDimensions.width - 100) {
            newVelX = -astro.velocity.x;
          }
          if (newY < -100 || newY > windowDimensions.height - 100) {
            newVelY = -astro.velocity.y;
          }

          return {
            position: {
              x: Math.max(-100, Math.min(windowDimensions.width - 100, newX)),
              y: Math.max(-100, Math.min(windowDimensions.height - 100, newY)),
            },
            velocity: { x: newVelX, y: newVelY },
            rotation: astro.rotation + 2,
          };
        }),
      );
    };

    const intervalId = setInterval(animate, 16);

    return () => clearInterval(intervalId);
  }, [astros.length, windowDimensions.width, windowDimensions.height]);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative min-h-screen">
        <div className="inline-block max-w-xl text-white text-center justify-center z-20 relative">
          <div
            className={`font-bold ${fontPassionOne.variable} text-8xl rounded-lg bg-transparent p-4 font-passion-one transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            REACH FOR THE SKIES
          </div>
        </div>

        {/* Scroll Down Prompt */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-20 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm mb-2">Scroll</p>
          <div className="flex flex-col items-center animate-bounce">
            <svg
              className="w-6 h-6 mb-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div
          className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/PZfcHRFT/9b18e1f4133bf5ded117a08a8d34aba6.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {astros.map((astro, index) => (
          <Image
            key={index}
            alt="Astro Blue"
            className="absolute pointer-events-none z-10"
            height={200}
            src="/astro-blue.png"
            style={{
              left: `${astro.position.x}px`,
              top: `${astro.position.y}px`,
              transform: `rotate(${astro.rotation}deg)`,
              transition: "none",
            }}
            width={200}
          />
        ))}
      </section>

      <section className="py-16 z-30 px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold text-white mb-8 ${fontPassionOne.variable} font-passion-one`}
          >
            WHAT WE DO
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-sablue mb-4">
                Premium Cannabis
              </h3>
              <p className="text-gray-300">
                Carefully curated cannabis selections that meet the highest
                quality standards for both recreational and medicinal use.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-sablue mb-4">
                Cutting-Edge Vaping
              </h3>
              <p className="text-gray-300">
                Innovative vaping technology designed for optimal performance,
                safety, and an unparalleled user experience.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-sablue mb-4">
                Sustainable Practices
              </h3>
              <p className="text-gray-300">
                Committed to eco-friendly practices and sustainable cultivation
                methods that respect our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gradient-to-b from-sablue to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold text-white mb-6 ${fontPassionOne.variable} font-passion-one`}
          >
            JOIN OUR GIVEAWAY!
          </h2>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Enter our monthly giveaway for a chance to win premium cannabis
            products, exclusive merchandise, and special discounts. Sign up for
            our newsletter and never miss out on the latest drops and
            promotions!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              className="bg-sablue font-passion-one text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors inline-block"
              href="/signup"
            >
              Enter
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-white text-center mb-12 ${fontPassionOne.variable} font-passion-one`}
          >
            EXPLORE OUR PRODUCTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-sablue to-blue-600 flex items-center justify-center">
                <Image
                  alt="Premium Vape Product"
                  className="object-contain"
                  height={250}
                  src="https://i.ibb.co/zhFtSJMX/blue-trans.png"
                  width={250}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Premium Vapes
                </h3>
                <p className="text-gray-300 mb-4">
                  Patented vaping devices with advanced temperature control and
                  sleek design. Elevate your experience today!
                </p>
                <Link
                  className="bg-sablue font-passion-one text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-block"
                  href="/products"
                >
                  Explore
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div
                className="h-48 relative"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/gLmc687X/product-6-300x300.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "0% 70%",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Cannabis Strains
                </h3>
                <p className="text-gray-300 mb-4">
                  Strains for every preference, from relaxing indicas to
                  energizing sativas.
                </p>
                <Link
                  className="bg-sablue font-passion-one text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-block"
                  href="/products"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
