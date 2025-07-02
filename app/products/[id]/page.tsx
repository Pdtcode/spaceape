"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

import { title } from "@/components/primitives";

const products = [
  {
    id: "2G",
    name: "2G Cart",
    description:
      "Full digital screen that shows battery percentage and the setting that it is on 3 different temperature settings. The heat settings are 2.8, 3.2, 3.7. Preheat prevents the oil from clogging the cart",
    variations: [
      {
        id: 1,
        color: "Red",
        image: "https://i.ibb.co/0jxtZ0zZ/PHOTO-2025-04-25-20-54-35.jpg",
      },
      {
        id: 2,
        color: "Blue",
        image: "https://i.ibb.co/vxkhCjzJ/PHOTO-2025-04-25-20-57-36-1.jpg",
      },
      {
        id: 3,
        color: "Purple",
        image: "https://i.ibb.co/bgSdn312/PHOTO-2025-04-25-20-57-24.jpg",
      },
      {
        id: 4,
        color: "Yellow",
        image: "https://i.ibb.co/XfbZvbv1/PHOTO-2025-04-25-20-57-43.jpg",
      },
      {
        id: 5,
        color: "Green",
        image: "https://i.ibb.co/KzcXbyRv/PHOTO-2025-04-25-21-04-25.jpg",
      },
    ],
  },
  {
    id: "4G",
    name: "4G Cart",
    description:
      "Digital screen that shows battery percentage and the setting that it is on 3 different temperature settings. The heat settings are 2.8, 3.2, 3.7. Preheat prevents the oil from clogging the cart. While product last. New LED version coming soon!",
    variations: [
      {
        id: 6,
        color: "Red",
        image: "https://i.ibb.co/zhVGvJxY/blackcherrycandy.png",
      },
      {
        id: 7,
        color: "Blue",
        image: "https://i.ibb.co/FM64M73/bluezlushie.png",
      },
      {
        id: 8,
        color: "Purple",
        image: "https://i.ibb.co/b54kkdJB/dragonfruitlychee.png",
      },
      {
        id: 9,
        color: "Yellow",
        image: "https://i.ibb.co/rKCJP9ZK/grapegalaxy.png",
      },
      {
        id: 10,
        color: "Green",
        image: "https://i.ibb.co/PscJ38qS/keylimemelon.png",
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
              height={800}
              src={product.variations[selectedVariation].image}
              width={800}
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
