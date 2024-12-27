import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-textColor mb-6">
              Apply Now
            </h1>
            <p className="text-lg md:text-xl text-textColor-light">
              Take the first step towards your new career
            </p>
          </div>
        </ScrollAnimation>

        <div className="container mx-auto px-4">
          <ScrollAnimation className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium mb-2">
                  Preferred Course
                </label>
                <select
                  id="course"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="full-time">Full-Time Bootcamp</option>
                  <option value="part-time">Part-Time Bootcamp</option>
                  <option value="self-paced">Self-Paced Learning</option>
                </select>
              </div>

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Apply;