import React, { useState, useEffect } from "react";

const GatePage: React.FC = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [ipDetails, setIpDetails] = useState("Fetching IP info...");

  const correctCode = "ACCESS2025";
  const gpayId = "8337052899@axisbank";

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setIpDetails(`${data.ip} (${data.city}, ${data.region}, ${data.country_name} via ${data.org})`);
      })
      .catch(() => {
        setIpDetails("Unable to retrieve IP information.");
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toUpperCase() === correctCode) {
      window.location.href =
        "https://final-year-project-qn4q-34i8gh77o-debs-projects-8b196e2f.vercel.app/";
    } else {
      setError("Invalid access code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">🚧 Access Restricted</h1>

        <p className="text-zinc-300 text-sm sm:text-base leading-snug">
          To access the <strong>CoVRx</strong> Website, a one-time payment of
          <span className="text-white font-bold"> $5 </span> per IP address is required. <br />
          <span className="text-green-400 font-medium">
            (🔥 50% discount ongoing for early birds!)
          </span>
        </p>

        <p className="text-zinc-400 text-sm leading-snug">
          No payment is currently detected from your IP:
          <br />
          <span className="text-white font-mono text-xs">{ipDetails}</span>
        </p>

        <div className="bg-zinc-800 border-l-4 border-green-500 p-3 rounded-md mx-2 mt-3">
          <p className="text-green-400 text-sm italic">
            “Remember, it's just $5 — whereas COVID costs lives. Better save yourself than saving your money.”
          </p>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mt-2 mb-2">
          Kindly make the payment below. Once done, you’ll receive a code.
          <br />
          Paste it below to whitelist your IP and unlock premium COVID protein prediction services.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 justify-center mt-1">
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            placeholder="Enter access code"
            className="flex-1 px-3 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-white text-sm outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-zinc-200 transition text-sm"
          >
            Enter
          </button>
        </form>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mt-3">
          <p className="text-sm text-zinc-400 mb-2">Pay via UPI:</p>
          <p className="font-mono text-white text-sm mb-2">{gpayId}</p>
          <img
            src="/upi.jpeg"
            alt="UPI QR Code"
            className="mx-auto rounded-md border border-zinc-700 w-40 h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default GatePage;
