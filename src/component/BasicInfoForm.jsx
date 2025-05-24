import React, { useState } from 'react';
import "./BasicInfoForm.css";

const BasicInfoForm = () => {
  const [step, setStep] = useState(1);
  const [formDataState, setFormDataState] = useState({
    fullName: "",
    phone: "",
    email: "",
    photo: null,
    serviceType: "",
    location: "",
    workingHours: "",
    experience: "",
    workHistory: "",
    languages: "",
    availabilityDate: "",
    availabilityTime: "",
    budgetMin: "",
    budgetMax: "",
    idProof: null,
    references: "",
    status: "",
    extraNotes: ""
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormDataState(prev => ({
      ...prev,
      [name]: type === "file" ? files[0] : value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    for (const key in formDataState) {
      payload.append(key, formDataState[key]);
    }

    try {
      const res = await fetch('http://localhost:2002/api/save', {
        method: 'POST',
        body: payload,
      });
      if (res.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Submit error', error);
      alert('Something went wrong. Check console.');
    }
  };

  return (
    <div className="maid-form-container">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h2>Step 1: Basic Information</h2>
            <input
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email (optional)"
              required
              onChange={handleChange}
            />
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              placeholder='Add Your Profile'
            />
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Step 2: Job Preferences</h2>
            <select
              name="serviceType"
              required
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="house_cleaning">House Cleaning</option>
              <option value="child_care">Child Care</option>
              <option value="cooking">Cooking</option>
              <option value="elderly_care">Elderly Care</option>
            </select>
            <input
              name="location"
              placeholder="Location / ZIP"
              required
              onChange={handleChange}
            />
            <input
              name="workingHours"
              placeholder="Preferred Working Hours"
              onChange={handleChange}
            />
            <input
              name="experience"
              placeholder="Experience (years)"
              onChange={handleChange}
            />
            <input
              name="workHistory"
              placeholder="Past Work Details"
              onChange={handleChange}
            />
            <input
              name="languages"
              placeholder="Languages Known"
              onChange={handleChange}
            />
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Step 3: Additional Details</h2>
            <input
              type="date"
              name="availabilityDate"
              required
              onChange={handleChange}
            />
            <input
              type="time"
              name="availabilityTime"
              required
              onChange={handleChange}
            />
            <input
              name="budgetMin"
              type="number"
              placeholder="Min Budget"
              required
              onChange={handleChange}
            />
            <input
              name="budgetMax"
              type="number"
              placeholder="Max Budget"
              required
              onChange={handleChange}
            />
            <input
              type="file"
              name="idProof"
              onChange={handleChange}
              placeholder="Your Id Proof"
            />
            <input
              name="references"
              placeholder="Reference Name & Contact"
              onChange={handleChange}
            />
            <select
              name="status"
              required
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Free">Free</option>
              <option value="Allocated">Allocated</option>
            </select>
            <textarea
              name="extraNotes"
              placeholder="Any extra notes..."
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-buttons">
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default BasicInfoForm;
