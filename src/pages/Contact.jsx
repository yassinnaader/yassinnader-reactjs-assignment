import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">
        Contact / Registration
      </h1>

      <div className="row justify-content-center">
        <div className="col-md-7">

          <form
            onSubmit={handleSubmit}
            className="card shadow-sm p-4"
          >

            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label">
                Message
              </label>

              <textarea
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Submit
            </button>

            {/* Success Message */}
            {submitted && (
              <div className="alert alert-success mt-3">
                Form submitted successfully!
              </div>
            )}

          </form>

        </div>
      </div>

    </div>
  );
}

export default Contact;