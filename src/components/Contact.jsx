import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const Contact = ({ id }) => {
  const [state, handleSubmit] = useForm("xyzgvygj");
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      // Clear the form when the submission is successful
      setFormData({ name: "", email: "", message: "" });
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000); // Hide the message after 5 seconds
    }
  }, [state.succeeded]); // Depend on the succeeded state

  const onSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id={id} className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
      {showMessage && (
        <motion.div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-gray-200 px-4 py-2 rounded-md shadow-lg font-robomono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Thanks for contacting!
        </motion.div>
      )}

      <div className="space-y-8 text-center max-w-2xl mx-auto">
        <h2 className="uppercase text-xl tracking-tight font-extrabold text-gray-200 font-rubik md:text-3xl">
          Contact me
        </h2>

        <form onSubmit={onSubmit} className="space-y-8">
          {/* Name Input */}
          <div className="font-robomono">
            <label
              className="block mb-2 text-start text-sm font-medium text-gray-200"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-transparent text-gray-200"
              placeholder="Your Name"
              required
              aria-label="Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email Input */}
          <div>
            <label
              className="block mb-2 text-start text-sm font-medium text-gray-200"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-transparent border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="email@gmail.com"
              required
              aria-label="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              className="block mb-2 text-start text-sm font-medium text-gray-200"
              htmlFor="message"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-200 bg-transparent rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a message..."
              required
              aria-label="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-1 md:mt-2 rounded-lg px-4 py-2 font-robomono bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l active:translate-y-1 xl:text-xl transition duration-300"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
