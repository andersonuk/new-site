import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-textColor mb-6 animate-fadeIn">
              Launch Your Tech Career with Expert-Led Training
            </h1>
            <p className="text-lg md:text-xl text-textColor-light mb-8 animate-fadeIn">
              Join our intensive bootcamp and master the skills needed for today's tech industry.
              Learn from industry experts and build real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
              <Link
                to="/courses"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
              >
                Explore Courses
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/curriculum"
                className="bg-white text-primary px-6 py-3 rounded-md hover:bg-secondary-dark transition-colors"
              >
                View Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-secondary animate-fadeIn">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert-Led Training</h3>
              <p className="text-textColor-light">
                Learn from industry professionals with years of experience.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary animate-fadeIn">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
              <p className="text-textColor-light">
                Work on team projects and build your professional network.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary animate-fadeIn">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Career Support</h3>
              <p className="text-textColor-light">
                Get personalized career guidance and job placement assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;