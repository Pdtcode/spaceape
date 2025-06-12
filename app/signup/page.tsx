"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { title } from "@/components/primitives";
import { fontJua } from "@/config/fonts";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  instagram: string;
  zipCode: string;
  state: string;
}

export default function SignUpPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    instagram: "",
    zipCode: "",
    state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Thank you for signing up! We'll be in touch soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          instagram: "",
          zipCode: "",
          state: "",
        });
      } else {
        setSubmitMessage(
          "There was an error submitting your information. Please try again.",
        );
      }
    } catch {
      setSubmitMessage(
        "There was an error submitting your information. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto p-6 ${fontJua.variable} font-jua`}>
      <h1 className={`${title()} text-center mb-8 text-sablue`}>
        Join Our Community
      </h1>

      <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            required
            classNames={{
              input: "font-jua",
              label: "font-jua font-bold",
            }}
            label="First Name"
            placeholder="Enter your first name"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />

          <Input
            required
            classNames={{
              input: "font-jua",
              label: "font-jua font-bold",
            }}
            label="Last Name"
            placeholder="Enter your last name"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>

        <Input
          required
          classNames={{
            input: "font-jua",
            label: "font-jua font-bold",
          }}
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />

        <Input
          classNames={{
            input: "font-jua",
            label: "font-jua font-bold",
          }}
          label="Instagram Handle"
          placeholder="@your_instagram_handle"
          type="text"
          value={formData.instagram}
          onChange={(e) => handleInputChange("instagram", e.target.value)}
        />

        <Input
          required
          classNames={{
            input: "font-jua",
            label: "font-jua font-bold",
          }}
          label="Zip Code"
          placeholder="Enter your zip code"
          type="text"
          value={formData.zipCode}
          onChange={(e) => handleInputChange("zipCode", e.target.value)}
        />

        <div className="space-y-2">
          <label className="font-jua font-bold text-sm" htmlFor="state-select">
            State You Often Shop In
          </label>
          <select
            required
            className="w-full p-3 rounded-lg border border-gray-300 font-jua focus:border-sablue focus:outline-none"
            id="state-select"
            value={formData.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
          >
            <option value="">Select a state</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <Button
          className="w-full bg-sablue text-white font-jua font-bold py-3 text-lg"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Join Our Community"}
        </Button>

        {submitMessage && (
          <div
            className={`text-center p-4 rounded-lg font-jua ${
              submitMessage.includes("Thank you")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
}
