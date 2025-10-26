import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Show success message
    setShowSuccess(true);
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Get In Touch
        </h2>
        
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-lg animate-fade-in">
            <p className="font-medium">✓ Thank you for your message!</p>
            <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                errors.name 
                  ? 'border-red-500 dark:border-red-500' 
                  : 'border-slate-300 dark:border-slate-600'
              } rounded-lg focus:outline-none focus:border-blue-500 dark:text-white transition`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
            )}
          </div>
          
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                errors.email 
                  ? 'border-red-500 dark:border-red-500' 
                  : 'border-slate-300 dark:border-slate-600'
              } rounded-lg focus:outline-none focus:border-blue-500 dark:text-white transition`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
            )}
          </div>
          
          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project..."
              rows="6"
              className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${
                errors.message 
                  ? 'border-red-500 dark:border-red-500' 
                  : 'border-slate-300 dark:border-slate-600'
              } rounded-lg focus:outline-none focus:border-blue-500 dark:text-white transition resize-none`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
            )}
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-slate-800 dark:bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-700 dark:hover:bg-slate-600 transition transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
          </button>
        </form>
        
      </div>
    </section>
  );
};

export default Contact;