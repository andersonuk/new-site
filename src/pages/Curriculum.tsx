import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import { CheckCircle } from 'lucide-react';

const Curriculum = () => {
  const modules = [
    {
      title: "Foundation",
      duration: "4 weeks",
      topics: [
        "HTML5 & CSS3",
        "JavaScript Fundamentals",
        "Git Version Control",
        "Command Line Basics"
      ]
    },
    {
      title: "Frontend Development",
      duration: "4 weeks",
      topics: [
        "React.js",
        "State Management",
        "API Integration",
        "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      duration: "4 weeks",
      topics: [
        "Node.js",
        "Express.js",
        "Database Design",
        "RESTful APIs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-textColor mb-6">
              Curriculum
            </h1>
            <p className="text-lg md:text-xl text-textColor-light">
              A comprehensive program designed for your success
            </p>
          </div>
        </ScrollAnimation>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <ScrollAnimation 
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-sm text-textColor-light mb-4">{module.duration}</p>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;