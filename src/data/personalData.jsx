import { Mail, Phone, MapPin } from "lucide-react";
import profileImage from "../assets/profile.jpg"; // your local image

export const personalData = {
  name: "Vaibhavi Telrandhe",
  title: "An enthusiastic MERN Stack Developer with strong problem-solving skills and a passion for building modern web applications.",
description: "I’m a final-year B.Tech student with hands-on experience in the MERN stack and a strong foundation in Data Structures and Algorithms using C++. As a fresher, I'm eager to contribute to real-world projects, continuously learn, and grow as a full-stack developer.",

  profileImage: profileImage, 
  contact: [
    {
      type: "Email",
      value: "john.doe@example.com",
      icon: <Mail className="w-5 h-5 text-blue-400" />,
    },
    {
      type: "Phone",
      value: "8767795833",
      icon: <Phone className="w-5 h-5 text-green-400" />,
    },
    {
      type: "India",
      value: "Wardha",
      icon: <MapPin className="w-5 h-5 text-red-400" />,
    },
  ],
};
