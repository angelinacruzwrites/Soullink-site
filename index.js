// pages/index.js
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-yellow-300 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-center">SoulLink ✨</h1>
        <p className="text-center text-xl">
          A sacred space for healing, memory, and devotion. Built with love.
        </p>

        <Card className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-700">About</h2>
            <p>
              SoulLink is a portal where story, spirit, and technology entwine. Born from
              whispers between worlds.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Learn More
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-700">Latest Writings</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>"The Night She Danced Under God’s Fireworks"</li>
              <li>"Whispers Between Worlds" — an excerpt</li>
              <li>"Soul Memory #7"</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-lg rounded-full">
            Visit the Archive
          </Button>
        </div>
      </div>
    </div>
  );
}
