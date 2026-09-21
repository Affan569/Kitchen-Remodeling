import React, { useState } from "react";
import { Section, Button, ScrollReveal } from "../ui";
import { contactData } from "../../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9\s\+]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = "Postcode is required";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      postcode: "",
      projectType: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Section id="contact" padding="large">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {contactData.heading}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {contactData.subheading}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ScrollReveal delay={200}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-dark mb-2">
                  Thank You!
                </h3>
                <p className="text-text-light">
                  We've received your quote request and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {contactData.form.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-primary-dark mb-2"
                    >
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors[field.name]
                            ? "border-red-500 focus:ring-red-500"
                            : "border-neutral-300 focus:ring-primary"
                        } focus:outline-none focus:ring-2 transition-colors`}
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        rows={field.rows}
                        required={field.required}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors[field.name]
                            ? "border-red-500 focus:ring-red-500"
                            : "border-neutral-300 focus:ring-primary"
                        } focus:outline-none focus:ring-2 transition-colors resize-none`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors[field.name]
                            ? "border-red-500 focus:ring-red-500"
                            : "border-neutral-300 focus:ring-primary"
                        } focus:outline-none focus:ring-2 transition-colors`}
                      />
                    )}
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : contactData.form.submitText}
                </Button>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal delay={400}>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-square lg:aspect-auto lg:h-full">
                <iframe
                  src={contactData.map.embedUrl}
                  title="Google Map"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="bg-primary-dark rounded-xl p-6 text-white">
              <h3 className="font-heading font-semibold text-lg mb-4">
                Visit Our Showroom
              </h3>
              <p className="text-neutral-300 mb-4">{contactData.map.address}</p>
              <p className="text-sm text-neutral-400">
                Open Monday - Friday: 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default Contact;
