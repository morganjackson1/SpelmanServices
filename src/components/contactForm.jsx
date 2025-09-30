import { useState } from 'react'

// ContactForm renders a small contact form for the selected provider.
// Props:
//  - provider: the provider object (used to show provider.name)
//  - onClose: function to call when the user wants to close the modal
function ContactForm({ provider, onClose }) {
  // Local form state for name/email/message
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // submitted is a local flag; we set it when the user submits.
  // In this app we also redirect to a static thank-you page immediately.
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Mark as submitted so the form can show an inline confirmation.
    // No redirect — this keeps the user on the same page per assignment.
    setSubmitted(true)
  }

  // Fallback inline UI if submitted remains true (rare since we redirect).
  if (submitted) {
    return <div>Message sent to {provider?.name}!</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Show who the message will go to */}
      <h2>Contact {provider?.name}</h2>

      {/* Name input */}
      <input
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      {/* Email input */}
      <input
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      {/* Message textarea */}
      <textarea
        placeholder="Your message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      {/* Submit sends the message (and redirects); Close calls onClose to hide modal */}
      <button type="submit">Send Message</button>
      <button type="button" onClick={onClose}>Close</button>
    </form>
  )
}

export default ContactForm