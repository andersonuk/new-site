import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import { ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Web Development Bootcamp',
      description: 'Master full-stack development with modern technologies',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
    },
    {
      title: 'Data Science Fundamentals',
      description: 'Learn data analysis, visualization, and machine learning',
      duration: '16 weeks',
      level: 'Intermediate',
    },
    {
      title: 'UI/UX Design',
      description: 'Create beautiful and functional user interfaces',
      duration: '8 weeks',
      level: 'All Levels',
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-textColor mb-6">
              Our Courses
            </h1>
            <p className="text-lg md:text-xl text-textColor-light">
              Transform your career with our industry-leading tech courses
            </p>
          </div>
        </ScrollAnimation>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <ScrollAnimation 
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-textColor-light mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-textColor-light">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <button className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;