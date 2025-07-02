import Image from "next/image";
import Link from "next/link";

import { fontPassionOne } from "@/config/fonts";

const products = [
  {
    id: "2G",
    name: "2G Cart",
    description:
      "Digital screen that shows battery percentage and the setting that it is on 3 different temperature settings. The heat settings are 2.8, 3.2, 3.7. Preheat prevents the oil from clogging the cart",
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
      "Digital screen that shows battery percentage and the setting that it is on 3 different temperature settings. The heat settings are 2.8, 3.2, 3.7. Preheat prevents the oil from clogging the cart",
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
        <h1
          className={`text-sablue ${fontPassionOne.variable} text-5xl font-passion-one`}
        >
          OUR PRODUCTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
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
                  <h2 className="text-2xl text-sablue font-bold group-hover:text-sablue transition-colors">
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
