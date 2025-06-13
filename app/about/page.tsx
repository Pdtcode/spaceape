import { fontJua } from "@/config/fonts";

export default function AboutPage() {
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

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          About us
        </h2>
        <p className="text-lg leading-relaxed">
          Space-ape is a brand committed to delivering top-tier cannabis and
          vaping products that push the boundaries of innovation and wellness.
        </p>
      </section>
      <section className="mt-8">
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed">
          At Space-ape, we&apos;re more than just a cannabis and vaping
          brand—we&apos;re pioneers of an elevated experience. Our mission is
          simple: to enhance your journey through premium products designed with
          innovation, purity, and intention. Whether you&apos;re new to the
          scene or a seasoned connoisseur, we offer a range of products that fit
          your lifestyle and needs. From cutting-edge vaping technology to
          premium cannabis selections, every product is crafted with care to
          ensure the highest quality. Our commitment to sustainability,
          eco-friendly practices, and customer satisfaction means that when you
          choose Space Hope, you&apos;re not just choosing a product, but a
          brand dedicated to bettering your experience, every step of the way.
          Join us, and elevate your senses.
        </p>
      </section>
      <section className="mt-8">
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Why Choose Us?
        </h2>
        <p className="text-lg leading-relaxed">
          At Space-ape, we blend premium quality with innovative technology to
          bring you the best in vaping and cannabis products. Whether
          you&apos;re seeking luxury or affordability, we have something for
          everyone. Our eco-conscious approach and commitment to customer
          satisfaction ensure you get the ultimate experience every time.
        </p>
      </section>
    </div>
  );
}
