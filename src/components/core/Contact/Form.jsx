import React, { useState } from 'react'
import { motion } from "framer-motion"

const Form = () => {

  const config = {
    phone: true,
    location: true,
    media: true, // 👈 enable media
  }

  const [hasMedia, setHasMedia] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    file: null,
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, files } = e.target

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
  }

  const validate = () => {
    let newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email"
    }

    if (config.phone && !formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    }

    if (config.location && !formData.location.trim()) {
      newErrors.location = "Location is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    if (hasMedia && !formData.file) {
      newErrors.file = "Please upload a file or image"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      console.log(formData)
      alert("Message Sent Successfully 🚀")

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        file: null,
      })

      setHasMedia(false)
    }
  }

  return (
    <section className="w-full py-20 px-6 
      bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0,_#cbd5f5)] 
      dark:bg-[radial-gradient(circle_at_top,_#020617,_#020617,_#0f172a)] 
      text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-10"
        >
          Send <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Message</span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
          p-8 rounded-2xl shadow-xl space-y-6"
        >

          <Input label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} placeholder="Enter your name" />

          <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="Enter your email" />

          {config.phone && (
            <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="Enter your phone number" />
          )}

          {config.location && (
            <Input label="Location" name="location" value={formData.location} onChange={handleChange} error={errors.location} placeholder="Enter your village/location" />
          )}

          {/* ✅ Ask user */}
          {config.media && (
            <div>
              <label className="block mb-2 text-sm font-medium">
                Do you have any image or file?
              </label>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setHasMedia(true)}
                  className={`px-4 py-2 rounded-lg border ${hasMedia ? "bg-blue-600 text-white" : ""}`}
                >
                  Yes
                </button>

                <button
                  type="button"
                  onClick={() => setHasMedia(false)}
                  className={`px-4 py-2 rounded-lg border ${!hasMedia ? "bg-blue-600 text-white" : ""}`}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* ✅ File Upload */}
          {hasMedia && (
            <div>
              <label className="block mb-1 text-sm font-medium">Upload File / Image</label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full"
              />
              {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg 
              bg-white dark:bg-gray-800 
              border border-gray-300 dark:border-gray-700 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg 
            bg-blue-600 hover:bg-blue-700 
            text-white font-semibold transition-all duration-300"
          >
            Send Message
          </motion.button>

        </motion.form>
      </div>
    </section>
  )
}

// ✅ Input component with placeholder
const Input = ({ label, name, value, onChange, error, type = "text", placeholder }) => (
  <div>
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded-lg 
      bg-white dark:bg-gray-800 
      border border-gray-300 dark:border-gray-700 
      focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
)

export default Form