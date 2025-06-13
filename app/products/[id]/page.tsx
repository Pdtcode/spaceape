"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

import { title } from "@/components/primitives";

const products = [
  {
    id: "2G",
    name: "2G Cart",
    basePrice: 29.99,
    description:
      "Digital screen that shows battery percentage and the setting that it is on 3 different temperature settings. The heat settings are 2.8, 3.2, 3.7. Preheat prevents the oil from clogging the cart",
    variations: [
      {
        id: 1,
        color: "Yellow",
        price: 29.99,
        image: "https://i.ibb.co/svYT6m4R/PHOTO-2025-04-23-07-59-13-1.jpg",
      },
      {
        id: 2,
        color: "Blue",
        price: 29.99,
        image: "https://i.ibb.co/5WqXfC89/PHOTO-2025-04-23-07-59-13.jpg",
      },
      {
        id: 3,
        color: "Purple",
        price: 29.99,
        image: "https://i.ibb.co/1JbPZFgH/PHOTO-2025-04-23-07-59-14-1.jpg",
      },
      {
        id: 4,
        color: "Red",
        price: 29.99,
        image: "https://i.ibb.co/PzDH29Qp/PHOTO-2025-04-23-07-59-14.jpg",
      },
      {
        id: 5,
        color: "Green",
        price: 29.99,
        image: "https://i.ibb.co/dJtRy9ZB/PHOTO-2025-04-23-18-54-13.jpg",
      },
    ],
  },
  {
    id: "4G",
    name: "4G Cart",
    basePrice: 29.99,
    description:
      "Digital screen that shows battery percentage and the setting that it is on 3 different temperature settings. The heat settings are 2.8, 3.2, 3.7. Preheat prevents the oil from clogging the cart",
    variations: [
      {
        id: 6,
        color: "Red",
        price: 29.99,
        image: "https://i.ibb.co/0jxtZ0zZ/PHOTO-2025-04-25-20-54-35.jpg",
      },
      {
        id: 7,
        color: "Blue",
        price: 29.99,
        image: "https://i.ibb.co/vxkhCjzJ/PHOTO-2025-04-25-20-57-36-1.jpg",
      },
      {
        id: 8,
        color: "Purple",
        price: 29.99,
        image: "https://i.ibb.co/bgSdn312/PHOTO-2025-04-25-20-57-24.jpg",
      },
      {
        id: 9,
        color: "Yellow",
        price: 29.99,
        image: "https://i.ibb.co/XfbZvbv1/PHOTO-2025-04-25-20-57-43.jpg",
      },
      {
        id: 10,
        color: "Green",
        price: 29.99,
        image: "https://i.ibb.co/KzcXbyRv/PHOTO-2025-04-25-21-04-25.jpg",
      },
    ],
  },
  {
    id: "resin",
    name: "Resin",
    basePrice: 29.99,
    description:
      "Ultra Premium Live Resin with a variety of flavors and strains",
    variations: [
      {
        id: 11,
        color: "Variety Pack",
        price: 29.99,
        image: "https://i.ibb.co/dsN90kxY/flavors.jpg",
      },
      {
        id: 12,
        color: "RAZZMATAZZ",
        price: 29.99,
        image: "https://i.ibb.co/dsN90kxY/flavors.jpg",
      },
      {
        id: 13,
        color: "KEY LIME MELON",
        price: 29.99,
        image: "https://i.ibb.co/dsN90kxY/flavors.jpg",
      },
      {
        id: 14,
        color: "DRAGON FRUIT LYCHEE",
        price: 29.99,
        image: "https://i.ibb.co/dsN90kxY/flavors.jpg",
      },
      {
        id: 15,
        color: "RASBERRY ZAZA",
        price: 29.99,
        image: "https://i.ibb.co/dsN90kxY/flavors.jpg",
      },
      {
        id: 16,
        color: "TANG EXOTIC",
        price: 29.99,
        image: "https://i.ibb.co/dsN90kxY/flavors.jpg",
      },
    ],
  },
];

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const [selectedVariation, setSelectedVariation] = useState(0);

  if (!product) {
    return (
      <div className="py-8 text-center">
        <h1 className={title()}>Product Not Found</h1>
        <Link
          className="text-sablue hover:underline mt-4 inline-block"
          href="/products"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <Link
        className="text-sablue hover:underline mb-6 inline-block"
        href="/products"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
            <Image
              alt={`${product.name} - ${product.variations[selectedVariation].color}`}
              className="w-full h-full object-cover"
              height={600}
              src={product.variations[selectedVariation].image}
              width={600}
            />
          </div>

          {/* Variation Thumbnails */}
          <div className="grid grid-cols-5 gap-2">
            {product.variations.map((variation, index) => (
              <button
                key={variation.id}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedVariation === index
                    ? "border-sablue"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => setSelectedVariation(index)}
              >
                <Image
                  alt={`${product.name} - ${variation.color}`}
                  className="w-full h-full object-cover"
                  height={100}
                  src={variation.image}
                  width={100}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className={title({ class: "mb-2" })}>{product.name}</h1>
            <p className="text-3xl mt-4 font-bold text-sablue">
              ${product.basePrice}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Selected Color:</h3>
            <p className="text-xl">
              {product.variations[selectedVariation].color}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description:</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
