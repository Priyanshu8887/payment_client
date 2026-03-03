import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center w-96">
        <h1 className="text-4xl font-bold mb-4">EasyPay 💸</h1>

        <p className="text-gray-600 mb-8">
          Send money instantly and securely.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/signin")}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="w-full border border-black py-2 rounded-lg"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};