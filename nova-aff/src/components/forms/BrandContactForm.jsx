import { useState } from "react";
import FormInput from "../ui/FormInput";
import FormTextarea from "../ui/FormTextarea";
import FormSelect from "../ui/FormSelect";
import "../../styles/components/brand-contact-form.css";

const BrandContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    budget: "",
    goals: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Brand contact form submitted:", formData);
    // Handle form submission
  };

  const budgetOptions = [
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k+", label: "$50,000+" },
  ];

  return (
    <form className="brand-contact-form" onSubmit={handleSubmit}>
      <h3>Get Started with Nova AFF</h3>

      <FormInput
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Business Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Company Name"
        name="company"
        value={formData.company}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Website"
        name="website"
        value={formData.website}
        onChange={handleChange}
      />

      <FormSelect
        label="Monthly Budget"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        options={budgetOptions}
        required
      />

      <FormTextarea
        label="Campaign Goals"
        name="goals"
        value={formData.goals}
        onChange={handleChange}
        placeholder="Tell us about your marketing goals and what you hope to achieve..."
        required
      />

      <button type="submit" className="brand-contact-form-submit">
        Start Partnership
      </button>
    </form>
  );
};

export default BrandContactForm;
