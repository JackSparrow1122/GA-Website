import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import office from '/public/placement-bg/address.png'
import phone from '/public/placement-bg/smartphone.png'
import email from '/public/placement-bg/direct.png'
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isOnCooldown, setIsOnCooldown] = useState(false);

  const categoryOptions = [
    { value: "student", label: "Student" },
    { value: "company", label: "Company" },
    { value: "college", label: "College" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isOnCooldown) {
      toast.error("Please wait before submitting again.");
      return;
    }

    if (!recaptchaToken) {
      toast.error("Please verify that you're not a robot.");
      return;
    }

    const formData = new FormData(e.target);

    if (formData.get("botcheck")) {
      toast.error("Spam detected. Submission blocked.");
      return;
    }

    if (!category) {
      toast.error("Please select a category.");
      return;
    }

    setIsOnCooldown(true);
    setTimeout(() => setIsOnCooldown(false), 30000);

    setIsSubmitting(true);

    formData.append("source", "Contact Form");
    formData.append("category", category.value);
    formData.append("recaptchaToken", recaptchaToken);

    fetch(
      "https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Form successfully submitted!");
          setIsFormSubmitted(true);
          setTimeout(() => {
            e.target.reset();
            setCategory(null);
            setRecaptchaToken(null);
            setIsSubmitting(false);
          }, 2000);
        } else {
          toast.error(`Error: ${data.message}`);
          setIsSubmitting(false);
        }
      })
      .catch(() => {
        toast.error("Error submitting form. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      {/* Info Section */}
     <section className="py-4 mt-6 md:mt-16 px-4 md:px-16 flex flex-col md:flex-row justify-between items-start gap-10">
  {/* Left Side - Text */}
  <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
  <div className="flex flex-col justify-center h-full">
    <p className="text-sm text-white tracking-widest uppercase mb-2">
      Let's work together
    </p>
    <h2 className="text-4xl md:text-7xl font-bold mb-4">
      <span className="text-white">Let's </span>{' '}
      <span className="text-[#FFC80E]">Bridge </span>
      <span className="text-white">The </span>
      <span className="text-[#FFC80E]"> Gap</span>
    </h2>
    <p className="text-white leading-relaxed">
      Let us know how Gryphon Academy can help you. Contact our expert team of
      admission and academic advisors to get the collaboration started.
    </p>
  </div>
</div>


  {/* Right Side - Cards */}
 <div className="w-full md:w-1/2 space-y-6">
  {/* Office Section */}
  <div className="flex items-center space-x-8 border border-[#FFC80E] px-4 py-4 rounded-l-full rounded-r-full shadow-md">
  <img src={office} alt="Office" className="h-10 w-10 md:ml-6"/>
  <div>
    <h4 className="text-lg font-bold text-[#FFC80E] mb-1">Pune Office</h4>
    <p className="text-sm text-white leading-relaxed">
      9th Floor, Olympia Business House, <br />
      Next to Supreme HQ,
      Mumbai - Bangalore Highway, <br />
      Baner, Pune, Maharashtra - 411045
    </p>
  </div>
</div>


  {/* Email Section */}
  <div className="flex items-center space-x-8 border border-[#FFC80E] px-4 py-4 rounded-l-full rounded-r-full shadow-md">
  <img src={email} alt="Email" className="h-10 w-10 md:ml-6" />
  <div>
    <h4 className="text-lg font-bold text-[#FFC80E] mb-1">Email Us</h4>
    <p className="text-sm text-white leading-relaxed">
      connect@gryphonacademy.co.in<br />
      support@gryphonacademy.co.in
    </p>
  </div>
</div>
<div className="flex items-center space-x-8 border border-[#FFC80E] px-4 py-4 rounded-l-full rounded-r-full shadow-md">
  <img src={phone} alt="Call" className="h-10 w-10 md:ml-6" />
  <div>
    <h4 className="text-lg font-bold text-[#FFC80E] mb-1">Call Us</h4>
    <p className="text-sm text-white leading-relaxed">
      +91-78758-95160<br />
      +91-95273-82671
    </p>
  </div>
</div>

 </div>

</section>

      {/* Contact Form Section */}
      <section className="pt-4 md:pt-10 bg-[#01224F] px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Google Maps */}
          <div className="relative h-96 md:h-[500px] rounded-br-3xl rounded-tl-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4536495747366!2d73.76831887436869!3d18.553575668166875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab4cb7fb73c5c4ff%3A0x14e62cad775d447b!2sGryphon%20Academy%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1724220761014!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

     <div>
  {/* Heading */}
  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get in <span className="text-[#FFC80E]">Touch</span></h2>

  {/* Form */}
  <form id="contactForm" onSubmit={handleSubmit} className="space-y-4">
    <input type="text" name="botcheck" style={{ display: "none" }} autoComplete="off" tabIndex="-1" />

    <div>
      <label htmlFor="name" className="block mb-1 text-[#ffffff]">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Your Name"
        className="w-full border border-[#2e4d80] rounded-lg p-2 focus:ring focus:ring-[#FFC80E] focus:border-[#FFC80E]"
      />
    </div>

    <div>
      <label htmlFor="email" className="block mb-1 text-[#ffffff]">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full border border-[#2e4d80] rounded-lg p-2 focus:ring focus:ring-[#FFC80E] focus:border-[#FFC80E]"
      />
    </div>

    <div>
      <label htmlFor="phone" className="block mb-1 text-[#ffffff]">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        placeholder="Your Phone Number"
        className="w-full border border-[#2e4d80] rounded-lg p-2 focus:ring focus:ring-[#FFC80E] focus:border-[#FFC80E]"
      />
    </div>

    <div>
      <label htmlFor="category" className="block mb-1 text-[#ffffff]">Category</label>
      <Select
        id="category"
        name="category"
        value={category}
        onChange={setCategory}
        options={categoryOptions}
        placeholder="Select Category"
        isSearchable={false}
        styles={{
          control: (base) => ({
            ...base,
            borderColor: "#2e4d80",
            borderRadius: "8px",
            minHeight: "40px",
          }),
          singleValue: (base) => ({ ...base, color: "#091327" }),
        }}
      />
    </div>

    <div>
      <label htmlFor="message" className="block mb-1 text-[#ffffff]">Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows="4"
        placeholder="Your Message"
        className="w-full border border-[#2e4d80] rounded-lg p-2 focus:ring focus:ring-[#FFC80E] focus:border-[#FFC80E]"
      ></textarea>
    </div>

    <ReCAPTCHA
      sitekey="6LclNjkrAAAAACgSlm5lRuUtzi2H9EIIdi62NPCb"
      onChange={(token) => setRecaptchaToken(token)}
      theme="light"
    />

    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-[#FFC80E] text-[#01224F] font-bold px-6 py-3 rounded-lg hover:bg-[#e6b800] transition-all mt-4"
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  </form>
</div>

        </div>
      </section>
    </>
  );
};

export default Contact;
