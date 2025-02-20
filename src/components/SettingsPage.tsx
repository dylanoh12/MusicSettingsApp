import React from "react";
import { Bell, ChevronRight, User, Volume2, Shield, Download, Wifi, HardDrive, PlaySquare } from "lucide-react";
export const SettingsPage = () => {
  return <main className="w-full min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Settings</h1>
        </header>
        <div className="space-y-6">
          {/* Profile Section */}
          <section className="bg-zinc-900 rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-black-500 flex items-center justify-center">
                <span className="text-2xl">AF</span>
              </div>
              <div>
                <h2 className="font-semibold">AF Music app</h2>
                <p className="text-sm text-zinc-400">Premium Plan</p>
              </div>
              <ChevronRight className="ml-auto text-zinc-400" size={20} />
            </div>
          </section>
          {/* Account Settings */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold px-4">Account</h2>
            <div className="bg-zinc-900 rounded-lg divide-y divide-zinc-800">
              <SettingsItem icon={<User size={20} />} label="Personal Info" />
              <SettingsItem icon={<Shield size={20} />} label="Privacy & Security" />
              <SettingsItem icon={<Bell size={20} />} label="Notifications" />
            </div>
          </section>
          {/* Playback Settings */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold px-4">Playback</h2>
            <div className="bg-zinc-900 rounded-lg divide-y divide-zinc-800">
              <SettingsItem icon={<Volume2 size={20} />} label="Audio Quality" />
              <SettingsItem icon={<PlaySquare size={20} />} label="Crossfade" />
              <SettingsItem icon={<HardDrive size={20} />} label="Storage" />
            </div>
          </section>
          {/* Download Settings */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold px-4">Downloads</h2>
            <div className="bg-zinc-900 rounded-lg divide-y divide-zinc-800">
              <SettingsItem icon={<Download size={20} />} label="Download Quality" />
              <SettingsItem icon={<Wifi size={20} />} label="Download over Wifi only" />
            </div>
          </section>
        </div>
      </div>
    </main>;
};
const SettingsItem = ({
  icon,
  label
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return <div className="flex items-center space-x-4 p-4 hover:bg-zinc-800 transition-colors cursor-pointer">
      <span className="text-zinc-400">{icon}</span>
      <span>{label}</span>
      <ChevronRight className="ml-auto text-zinc-400" size={20} />
    </div>;
};