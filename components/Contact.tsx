'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, MessageCircle } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: personalInfo.whatsapp,
      href: `https://wa.me/${personalInfo.whatsapp.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      href: `https://${personalInfo.linkedin}`,
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: 'LinkedIn' },
    { icon: Github, href: `https://${personalInfo.github}`, label: 'GitHub' },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-50 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-dark-800 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left - Contact Form */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-400 mb-4 sm:mb-6">Contact Me</h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm sm:text-base"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right - Direct Contact */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-primary-400 mb-4 sm:mb-6">Direct Contact</h3>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-700 transition-colors flex-shrink-0">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-1">{method.label}</div>
                        <div className="text-gray-900 dark:text-white font-medium text-sm sm:text-base break-words">{method.value}</div>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">Follow me on:</p>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-600 rounded-full flex items-center justify-center hover:bg-primary-600 hover:border-primary-600 transition-colors"
                      >
                        <Icon className="text-gray-900 dark:text-white" size={18} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
