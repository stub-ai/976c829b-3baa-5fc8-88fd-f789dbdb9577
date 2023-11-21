import React, { useState } from 'react';

const CreateTicket = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://your-osticket-api-url.com/api/tickets.json', {
      method: 'POST',
      headers: {
        'X-API-Key': 'your-api-key',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error(data.error);
    } else {
      console.log('Ticket created successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-2xl mb-4">Create a Ticket</h2>

      <label className="block mb-2">
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mt-1 rounded-md bg-gray-700" />
      </label>

      <label className="block mb-2">
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mt-1 rounded-md bg-gray-700" />
      </label>

      <label className="block mb-2">
        Subject
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-2 mt-1 rounded-md bg-gray-700" />
      </label>

      <label className="block mb-2">
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 mt-1 rounded-md bg-gray-700" />
      </label>

      <button type="submit" className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white">Submit</button>
    </form>
  );
};

export default CreateTicket;