import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#17153B] py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Get In Touch
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
        I'm always open to discussing new projects, challenges in data analysis, or opportunities to collaborate on data initiatives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#2E236C] p-4 rounded-lg shadow-md flex items-center">
            <span className="text-xl">📧</span>
            <div className="ml-4">
              <p className="text-gray-700 dark:text-white font-semibold">Email</p>
              <p className="text-gray-500 dark:text-gray-300">varshini@example.com</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#2E236C] p-4 rounded-lg shadow-md flex items-center">
            <span className="text-xl">🔗</span>
            <div className="ml-4">
              <p className="text-gray-700 dark:text-white font-semibold">LinkedIn</p>
              <a href="https://linkedin.com/in/varshini-s" className="text-blue-500 dark:text-blue-400" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/varshini-s
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-[#2E236C] p-4 rounded-lg shadow-md flex items-center">
            <span className="text-xl">💻</span>
            <div className="ml-4">
              <p className="text-gray-700 dark:text-white font-semibold">GitHub</p>
              <a href="https://github.com/varshini-data" className="text-blue-500 dark:text-blue-400" target="_blank" rel="noopener noreferrer">
                github.com/varshini-data
              </a>
            </div>
          </div>

          {/* Resume Download Button */}
          <div className="text-center">
            <a href="#" download className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition">
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-[#2E236C] p-6 rounded-lg shadow-md">
          <form>
            <label className="block text-gray-700 dark:text-white font-medium">Name</label>
            <input type="text" className="w-full p-2 border rounded-md mb-4 bg-gray-100 dark:bg-gray-700 dark:text-white" placeholder="Your name" />

            <label className="block text-gray-700 dark:text-white font-medium">Email</label>
            <input type="email" className="w-full p-2 border rounded-md mb-4 bg-gray-100 dark:bg-gray-700 dark:text-white" placeholder="Your email" />

            <label className="block text-gray-700 dark:text-white font-medium">Subject</label>
            <input type="text" className="w-full p-2 border rounded-md mb-4 bg-gray-100 dark:bg-gray-700 dark:text-white" placeholder="Subject of your message" />

            <label className="block text-gray-700 dark:text-white font-medium">Message</label>
            <textarea className="w-full p-2 border rounded-md mb-4 bg-gray-100 dark:bg-gray-700 dark:text-white" placeholder="Your message..." rows="4"></textarea>

            <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition">
              Send Message ➝
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
