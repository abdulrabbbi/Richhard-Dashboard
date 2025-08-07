"use client";

import React,{ useState } from "react";
import { MdPerson, MdSecurity, MdPalette } from "react-icons/md";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    profilePicture: null,
  });

  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    passwordConfirm: "",
  });

  const [preferences, setPreferences] = useState({
    language: "english",
    theme: "light",
    twoFactor: true,
  });

  const handleProfilePictureChange = (e) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setProfileData((prev) => ({ ...prev, profilePicture: file }));
      setProfilePictureUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Dummy profile saved");
      setLoading(false);
    }, 1000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Dummy password updated");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        passwordConfirm: "",
      });
      setLoading(false);
    }, 1000);
  };

  const handlePreferencesSave = () => {
    alert("Dummy preferences saved");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#1e1e38] mb-6">Settings</h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <nav className="space-y-2">
                {[
                  { id: "profile", icon: MdPerson, label: "Profile" },
                  { id: "security", icon: MdSecurity, label: "Security" },
                  { id: "preferences", icon: MdPalette, label: "Preferences" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${
                      activeTab === item.id
                        ? "bg-[#f3f4f8] text-[#1e1e38]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="col-span-3 p-6">
              {activeTab === "profile" && (
                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1e1e38]">
                      Profile Picture
                    </label>
                    <div className="mt-1 flex items-center">
                      <img
                        src={
                          profilePictureUrl ?? "https://via.placeholder.com/64"
                        }
                        alt="Profile"
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <label className="ml-4 px-4 py-2 border border-[#22c55e] text-[#22c55e] rounded-lg hover:bg-[#22c55e] hover:text-white cursor-pointer">
                        Change
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleProfilePictureChange}
                        />
                      </label>
                    </div>
                  </div>

                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        firstName: e.target.value,
                      })
                    }
                    placeholder="First Name"
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        lastName: e.target.value,
                      })
                    }
                    placeholder="Last Name"
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    placeholder="Email Address"
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg"
                    required
                  />

                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#1ea550]"
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              )}

              {activeTab === "security" && (
                <form onSubmit={handlePasswordSubmit} className="space-y-6">
                  <input
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        currentPassword: e.target.value,
                      })
                    }
                    placeholder="Current Password"
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg"
                    required
                  />
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                    placeholder="New Password"
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg"
                    required
                  />
                  <input
                    type="password"
                    value={passwordData.passwordConfirm}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        passwordConfirm: e.target.value,
                      })
                    }
                    placeholder="Confirm New Password"
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg"
                    required
                  />

                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Enable 2FA</label>
                    <input
                      type="checkbox"
                      checked={preferences.twoFactor}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          twoFactor: e.target.checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#1ea550]"
                    >
                      {loading ? "Updating..." : "Update Password"}
                    </button>
                  </div>
                </form>
              )}

              {activeTab === "preferences" && (
                <div className="space-y-6">
                  <select
                    value={preferences.language}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        language: e.target.value,
                      })
                    }
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg"
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                  </select>

                  <select
                    value={preferences.theme}
                    onChange={(e) =>
                      setPreferences({ ...preferences, theme: e.target.value })
                    }
                    className="block w-full px-4 py-2 border border-gray-200 rounded-lg"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>

                  <div className="flex justify-end pt-6">
                    <button
                      type="button"
                      onClick={handlePreferencesSave}
                      className="px-6 py-2 bg-[#22c55e] text-white rounded-lg hover:bg-[#1ea550]"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
