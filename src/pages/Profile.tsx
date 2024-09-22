import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "@mui/material/Button";

const userProfile = {
  name: "John Doe",
  bio: "A passionate student of technology and science.",
  email: "johndoe@email.com",
  phone: "123-456-7890",
  location: "San Francisco, CA",
  profilePic:
    "https://via.placeholder.com/150",
  university: "Stanford University",
  department: "Computer Science",
};

const ProfileTemplate: React.FC = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      setProfilePic(acceptedFiles[0]);
    },
  });


  return (
    <div className="w-full max-w-4xl mx-auto p-5">
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <div className="flex gap-6">
          <div>
            <img
              src={userProfile.profilePic}
              alt={userProfile.name}
              className="rounded-full w-32 h-32 object-cover border-4 border-gray-200"
            />
          </div>
          {/* Profile Information */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {userProfile.name}
            </h1>
            <p className="text-gray-600 mb-2">{userProfile.bio}</p>

            {/* University and Department */}
            <p className="text-gray-800">
              <strong>University:</strong> {userProfile.university}
            </p>
            <p className="text-gray-800 mb-3">
              <strong>Department:</strong> {userProfile.department}
            </p>

            {/* Contact Details */}
            <p className="text-gray-600">
              <strong>Email:</strong> {userProfile.email}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> {userProfile.phone}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {userProfile.location}
            </p>
          </div>
        </div>
      </div>

      {/* Profile Update Form Section */}
      <form className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Update Profile</h2>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base">First Name</span>
            <input
              type="text"
              placeholder="Your first name"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="rounded bg-gray-100 px-4 py-3 text-gray-600 text-sm md:text-base focus:border outline-none focus:border-gray-300"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base">Last Name</span>
            <input
              type="text"
              placeholder="Your last name"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="rounded bg-gray-100 px-4 py-3 text-gray-600 text-sm md:text-base focus:border outline-none focus:border-gray-300"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base">Email</span>
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded bg-gray-100 px-4 py-3 text-gray-600 text-sm md:text-base focus:border outline-none focus:border-gray-300"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <span className="text-sm md:text-base">Phone Number</span>
            <input
              type="tel"
              placeholder="Your phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded bg-gray-100 px-4 py-3 text-gray-600 text-sm md:text-base focus:border outline-none focus:border-gray-300"
            />
          </div>
        </div>

        {/* Profile Picture Upload */}
        <div className="flex flex-col gap-2 mt-4">
          <span className="text-sm md:text-base">Profile Picture</span>
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-400 rounded bg-gray-100 px-4 py-10 text-gray-400 text-center"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the image here ...</p>
            ) : (
              <p>Drag 'n' drop an image here, or click to select one</p>
            )}
            {profilePic && <p className="text-gray-600">Selected file: {profilePic.name}</p>}
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <Button type="submit" variant="contained" color="primary" className="w-full">
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileTemplate;
