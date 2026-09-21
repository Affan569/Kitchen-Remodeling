export const contactData = {
  heading: "Get Your Free Quote",
  subheading:
    "Contact us today to discuss your kitchen remodeling project",
  form: {
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Your full name",
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: true,
        placeholder: "Your phone number",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "your@email.com",
      },
      {
        name: "postcode",
        label: "Postcode",
        type: "text",
        required: true,
        placeholder: "SO14 0AA",
      },
      {
        name: "projectType",
        label: "Project Type",
        type: "select",
        required: true,
        options: [
          { value: "", label: "Select project type" },
          { value: "design", label: "Kitchen Design" },
          { value: "installation", label: "Kitchen Installation" },
          { value: "remodel", label: "Full Remodel" },
          { value: "worktops", label: "Worktops & Units" },
          { value: "plumbing", label: "Plumbing & Appliances" },
          { value: "other", label: "Other" },
        ],
      },
      {
        name: "message",
        label: "Project Details",
        type: "textarea",
        required: false,
        placeholder: "Tell us about your project...",
        rows: 4,
      },
    ],
    submitText: "Request Free Quote",
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.123456789!2d-1.4043!3d50.9097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU0JzM1LjAiTiAxwrAyNCcxNS41Ilc!5e0!3m2!1sen!2suk!4v1234567890",
    address: "123 High Street, Southampton, Hampshire SO14 0AA",
  },
};
