import Image from "next/image";

import { title } from "@/components/primitives";

const products = [
  {
    id: 1,
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
    id: 2,
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
];

export default function ProductsPage() {
  return (
    <div className="py-8">
      <h1 className={title({ class: "mb-8" })}>Our Products</h1>

      <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-12">
        {products.map((product) => (
          <div key={product.id} className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-xl font-semibold">${product.basePrice}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.variations.map((variation) => (
                <div
                  key={variation.id}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                      alt={`${product.name} - ${variation.color}`}
                      className="w-full h-full object-cover"
                      height={300}
                      src={variation.image}
                      width={300}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-center items-center">
                      <span className="font-medium">{variation.color}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
