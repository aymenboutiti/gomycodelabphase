"use client";
import React, { useState } from "react";

const LiveRequestForm = () => {
  const [form, setForm] = useState({
    subject: "",
    theme: "",
    type: "",
    date: "",
    delay: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      subject: form.subject,
      theme: form.theme,
      type: form.type,
      date: form.date,
      delay: form.delay,
      createdAt: new Date().toISOString(),
    };
    // Save to localStorage
    const requests = JSON.parse(localStorage.getItem("liveRequests") || "[]");
    requests.push(request);
    localStorage.setItem("liveRequests", JSON.stringify(requests));
    // Optionally reset form
    setForm({ subject: "", theme: "", type: "", date: "", delay: "" });
    alert("Live session request submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded shadow space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Request a Live Session</h2>
      <div>
        <label className="block font-semibold mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Theme</label>
        <input
          type="text"
          name="theme"
          value={form.theme}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Type of Live</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select type</option>
          <option value="course_resume">Course Resume</option>
          <option value="emphasize_exercise">Emphasize Exercise</option>
          <option value="exam_review">Exam Review</option>
        </select>
      </div>
      <div>
        <label className="block font-semibold mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Delay (if no date)</label>
        <input
          type="text"
          name="delay"
          value={form.delay}
          onChange={handleChange}
          placeholder="e.g. 2 days, next week"
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
      >
        Submit Request
      </button>
    </form>
  );
};

export default LiveRequestForm;