import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccessDeniedRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/accessDenied/authentication");
    }, 1500); // redirect after 2.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">🚫 Access Denied to CoVRx</h1>
        <p className="text-zinc-400 text-lg">Redirecting to payments page...</p>
      </div>
    </div>
  );
};

export default AccessDeniedRedirect;
