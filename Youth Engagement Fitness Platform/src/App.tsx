import React from 'react';
import { Activity, Trophy, Users, Calendar, Dumbbell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6">FitYouth</h1>
          <p className="text-xl mb-8">Empowering young minds through fitness and fun</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose FitYouth?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Activity className="w-8 h-8 text-purple-500" />}
              title="Daily Challenges"
              description="Fun, age-appropriate fitness challenges to keep you motivated"
            />
            <FeatureCard 
              icon={<Trophy className="w-8 h-8 text-purple-500" />}
              title="Rewards System"
              description="Earn points and badges for completing activities"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-purple-500" />}
              title="Social Features"
              description="Connect with friends and participate in group challenges"
            />
            <FeatureCard 
              icon={<Dumbbell className="w-8 h-8 text-purple-500" />}
              title="Guided Workouts"
              description="Expert-designed workouts for different skill levels"
            />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Popular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ActivityCard 
              image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
              title="Dance Fitness"
              duration="30 mins"
              level="Beginner"
            />
            <ActivityCard 
              image="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff"
              title="Youth Boxing"
              duration="45 mins"
              level="Intermediate"
            />
            <ActivityCard 
              image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
              title="Yoga for Teens"
              duration="40 mins"
              level="All Levels"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FitYouth</h3>
              <p className="text-gray-400">Empowering the next generation through fitness and wellness.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Activities</a></li>
                <li><a href="#" className="hover:text-white">Challenges</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitYouth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
      <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ActivityCard({ image, title, duration, level }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Activity className="w-4 h-4" />
            <span>{level}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
