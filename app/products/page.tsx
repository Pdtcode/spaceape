import Image from "next/image";
import Link from "next/link";

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
        image:
          "https://spaceapedisposable.com/wp-content/uploads/2025/04/photo_2025-04-08_13-51-08.jpg",
      },
      {
        id: 13,
        color: "KEY LIME MELON",
        price: 29.99,
        image:
          "https://spaceapedisposable.com/wp-content/uploads/2025/04/photo_2025-04-08_13-23-52.jpg",
      },
      {
        id: 14,
        color: "DRAGON FRUIT LYCHEE",
        price: 29.99,
        image:
          "https://spaceapedisposable.com/wp-content/uploads/2025/04/photo_2025-04-08_12-58-47.jpg",
      },
      {
        id: 15,
        color: "RASBERRY ZAZA",
        price: 29.99,
        image:
          "https://spaceapedisposable.com/wp-content/uploads/2025/04/photo_2025-04-08_13-42-27.jpg",
      },
      {
        id: 16,
        color: "TANG EXOTIC",
        price: 29.99,
        image:
          "https://spaceapedisposable.com/wp-content/uploads/2025/04/photo_2025-04-08_13-32-23.jpg",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Watermark Background */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none -z-10"
        style={{
          backgroundImage: "url(/floating.png)",
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="py-8">
        <h1 className={title({ class: "mb-8" })}>Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-4 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <Image
                    alt={product.name}
                    className="w-full h-full object-cover"
                    height={500}
                    src={product.variations[0].image}
                    width={500}
                  />
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold group-hover:text-sablue transition-colors">
                    {product.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
