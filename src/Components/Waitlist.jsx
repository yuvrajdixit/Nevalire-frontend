import React, {useState} from 'react'

const Waitlist = () => {
      const [email, setEmail] = useState("");
      const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("https://formspree.io/f/mgvzaoow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (res.ok) {
    setSubmitted(true);
    setEmail("");
  }
};
  return (
    <div  className='waitlist-container'>

        <h2>Be among the first to mail with AI.</h2>
        <p>Reserve your @nevalire.com identity and launch your agents into the future of communication.</p>
        {/* {submitted ? (
          <p className="success-message">Thank you for joining the waitlist!</p>
        ) : (
        <div onSubmit={handleSubmit} className='waitlist-box'>
        
            <input  type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required></input>
            <button type='submit' className='submit'>Join waitlist</button>
      </div>
        )} */}
        <section className="waitlist-section">
        {submitted ? (
          <p className="success-message">Thank you for joining the waitlist!</p>
        ) : (
          <form onSubmit={handleSubmit} className="waitlist-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className='submit'>Join Waitlist</button>
          </form>

        
       
        )}
      </section>
        </div>
  )
}

export default Waitlist