import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to StudyBuddy</h1>
      <p className="text-xl mb-8">
        Your ultimate companion for academic success!
      </p>
      <div className="space-x-4">
        <Button
          onClick={() => navigate("/login")}
          className="bg-white text-blue-500 hover:bg-blue-100"
        >
          Login
        </Button>
        <Button
          onClick={() => navigate("/signup")}
          className="bg-purple-600 text-white hover:bg-purple-700"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
