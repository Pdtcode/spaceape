import { fontJua } from "@/config/fonts";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div className="text-center mb-12">
        <h1
          className={`text-4xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Introduction
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Space-ape (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          visit our website or use our services.
        </p>
        <p className="text-lg leading-relaxed">
          By accessing or using our services, you agree to the collection and
          use of information in accordance with this policy.
        </p>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Information We Collect
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Personal Information
            </h3>
            <p className="text-lg leading-relaxed">
              We may collect personal information including but not limited to:
            </p>
            <ul className="list-none pl-6 mt-2 space-y-1">
              <li>Name and contact information</li>
              <li>Age verification data (required for cannabis products)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Email address and phone number</li>
              <li>Government-issued ID for age verification</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Usage Information
            </h3>
            <p className="text-lg leading-relaxed">
              We automatically collect information about your device and how you
              interact with our services, including IP address, browser type,
              pages visited, and time spent on our site.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          How We Use Your Information
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          We use the information we collect for various purposes including:
        </p>
        <ul className="list-none pl-6 space-y-2">
          <li>Age verification as required by law</li>
          <li>Processing orders and transactions</li>
          <li>Providing customer support</li>
          <li>Sending promotional communications (with your consent)</li>
          <li>Improving our products and services</li>
          <li>Complying with legal obligations</li>
          <li>Preventing fraud and ensuring security</li>
        </ul>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Cannabis Industry Compliance
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          As a cannabis-related business, we are subject to strict regulatory
          requirements:
        </p>
        <ul className="list-none pl-6 space-y-2">
          <li>
            We verify that all users are 21+ years of age (18+ in medical
            states)
          </li>
          <li>
            We maintain detailed records as required by state and local laws
          </li>
          <li>
            We may share information with regulatory agencies when required
          </li>
          <li>We do not ship to states where cannabis products are illegal</li>
        </ul>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Information Sharing
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          We do not sell, trade, or rent your personal information. We may share
          your information in the following circumstances:
        </p>
        <ul className="list-none pl-6 space-y-2">
          <li>With service providers who help us operate our business</li>
          <li>When required by law or to comply with legal processes</li>
          <li>To protect our rights, property, or safety</li>
          <li>With your consent or at your direction</li>
          <li>In connection with a business transfer or merger</li>
        </ul>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Data Security
        </h2>
        <p className="text-lg leading-relaxed">
          We implement appropriate technical and organizational security
          measures to protect your personal information against unauthorized
          access, alteration, disclosure, or destruction. However, no method of
          transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Your Rights
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Depending on your location, you may have the following rights:
        </p>
        <ul className="list-none pl-6 space-y-2">
          <li>Access to your personal information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of your personal information</li>
          <li>Objection to processing</li>
          <li>Data portability</li>
          <li>Withdrawal of consent</li>
        </ul>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Cookies and Tracking
        </h2>
        <p className="text-lg leading-relaxed">
          We use cookies and similar tracking technologies to enhance your
          experience, analyze usage patterns, and deliver personalized content.
          You can control cookie settings through your browser preferences.
        </p>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Third-Party Services
        </h2>
        <p className="text-lg leading-relaxed">
          Our website may contain links to third-party sites or services. We are
          not responsible for the privacy practices of these external sites. We
          encourage you to review their privacy policies.
        </p>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Children&apos;s Privacy
        </h2>
        <p className="text-lg leading-relaxed">
          Our services are not intended for individuals under 21 years of age
          (18+ in medical states). We do not knowingly collect personal
          information from minors. If we become aware that we have collected
          information from a minor, we will delete it immediately.
        </p>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Changes to This Policy
        </h2>
        <p className="text-lg leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the &quot;Last updated&quot; date. Your continued use of our services
          after any changes constitutes acceptance of the new policy.
        </p>
      </section>

      <section>
        <h2
          className={`text-2xl ${fontJua.variable} font-jua text-sablue font-bold mb-4`}
        >
          Contact Us
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            <strong>Email:</strong> [Email]
          </p>
          <p className="mb-2">
            <strong>Address:</strong> [Business Address]
          </p>
          <p>
            <strong>Phone:</strong> [Phone Number]
          </p>
        </div>
      </section>
    </div>
  );
}
