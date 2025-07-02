"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { title } from "@/components/primitives";
import { fontPassionOne } from "@/config/fonts";

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
  phone: string;
  instagram: string;
  zipCode: string;
  state: string;
}

export default function SignUpPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    instagram: "",
    zipCode: "",
    state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateField = (field: keyof FormData, value: string): string => {
    switch (field) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(value)
          ? ""
          : "Please enter a valid email address";
      case "phone":
        const phoneRegex =
          /^[\+]?[1]?[-\s\.]?[\(]?[0-9]{3}[\)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
        const cleanPhone = value.replace(/[\s\-\.\(\)]/g, "");

        return phoneRegex.test(value) &&
          cleanPhone.length >= 10 &&
          cleanPhone.length <= 11
          ? ""
          : "Please enter a valid phone number (e.g., (555) 123-4567)";
      case "zipCode":
        const zipRegex = /^[0-9]{5}(-[0-9]{4})?$/;

        return zipRegex.test(value)
          ? ""
          : "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)";
      default:
        return "";
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }

    // Validate on blur for email, phone, and zipCode
    if (["email", "phone", "zipCode"].includes(field) && value.trim()) {
      const error = validateField(field, value);

      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Validate all fields before submission
    const newErrors: Partial<FormData> = {};

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      const value = formData[field];

      if (["email", "phone", "zipCode"].includes(field) && value) {
        const error = validateField(field, value);

        if (error) newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitMessage("Please fix the errors above before submitting.");
      setIsSubmitting(false);

      return;
    }

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
          phone: "",
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
    <div
      className={`max-w-2xl mx-auto p-6 ${fontPassionOne.variable} font-passion-one`}
    >
      <h1 className={`${title()} text-center mb-8 text-sablue`}>
        JOIN OUR GIVEAWAY!
      </h1>
      <p className="text-gray-500 mt-4 text-sm">
        Just fill out the form below for a chance to win 10 cart for $0.01!
      </p>

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

        <div>
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
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 font-jua">{errors.email}</p>
          )}
        </div>

        <div>
          <Input
            required
            classNames={{
              input: "font-jua",
              label: "font-jua font-bold",
            }}
            label="Phone Number"
            placeholder="(555) 123-4567"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 font-jua">{errors.phone}</p>
          )}
        </div>

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

        <div>
          <Input
            required
            classNames={{
              input: "font-jua",
              label: "font-jua font-bold",
            }}
            label="Zip Code"
            placeholder="12345 or 12345-6789"
            type="text"
            value={formData.zipCode}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm mt-1 font-jua">
              {errors.zipCode}
            </p>
          )}
        </div>

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
          {isSubmitting ? "Submitting..." : "Enter"}
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
