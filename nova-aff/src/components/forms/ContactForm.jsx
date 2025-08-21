import { useState } from "react";
import FormInput from "../ui/FormInput";
import FormTextarea from "../ui/FormTextarea";
import FormSelect from "../ui/FormSelect";
import "../../styles/components/contact-form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const subjectOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "Partnership" },
    { value: "support", label: "Technical Support" },
    { value: "billing", label: "Billing" },
  ];

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <FormInput
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />

      <FormSelect
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        options={subjectOptions}
        required
      />

      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit" className="contact-form-submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
