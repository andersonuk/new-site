import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import { ArrowRight, BookOpen, Users, Award, CheckCircle, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Launch Your Tech Career with Expert-Led Training",
      description: "Join our intensive bootcamp and master the skills needed for today's tech industry. Learn from industry experts and build real-world projects."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Learn from Industry Experts",
      description: "Get hands-on experience with cutting-edge technologies and real-world projects guided by experienced professionals."
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      title: "Build Your Future in Tech",
      description: "Transform your career with comprehensive training in web development, data science, and UI/UX design."
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Start Your Journey Today",
      description: "Join our community of learners and begin your path to a successful career in technology."
    }
  ];

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Developer",
      company: "Tech Corp",
      content: "The bootcamp completely transformed my career. I went from zero coding knowledge to a full-time developer role in just months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "StartUp Inc",
      content: "The curriculum is well-structured and the instructors are incredibly knowledgeable. Best investment in my education!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Design Studio",
      content: "I learned not just the technical skills, but also how to think like a designer. The projects were challenging and rewarding.",
      rating: 5
    }
  ];

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

  const plans = [
    {
      name: "Full-Time",
      price: "$9,999",
      duration: "12 weeks",
      features: [
        "Daily live lectures",
        "1-on-1 mentoring",
        "Career services",
        "Job placement support",
        "Portfolio development"
      ]
    },
    {
      name: "Part-Time",
      price: "$6,999",
      duration: "24 weeks",
      features: [
        "Evening lectures",
        "Weekend workshops",
        "Career services",
        "Project reviews",
        "Online support"
      ]
    },
    {
      name: "Self-Paced",
      price: "$3,999",
      duration: "Flexible",
      features: [
        "Recorded lectures",
        "Community support",
        "Project templates",
        "Resource library",
        "Email support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      {/* Hero Section with Carousel */}
      <section id="home" className="relative w-full h-screen">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative w-full h-[100vh]">
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 animate-fadeIn max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
                      <a
                        href="#courses"
                        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
                      >
                        Explore Courses
                        <ArrowRight size={20} />
                      </a>
                      <a
                        href="#curriculum"
                        className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-md hover:bg-white/20 transition-colors"
                      >
                        View Curriculum
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      <section id="about" className="py-12 bg-white">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-textColor mb-6">
              About Us
            </h2>
            <p className="text-lg text-textColor-light">
              We are dedicated to providing high-quality tech education that transforms careers and lives. 
              Our intensive bootcamps are designed to equip students with the skills they need to succeed in today's digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-secondary">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert-Led Training</h3>
              <p className="text-textColor-light">
                Learn from industry professionals with years of experience.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
              <p className="text-textColor-light">
                Work on team projects and build your professional network.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Career Support</h3>
              <p className="text-textColor-light">
                Get personalized career guidance and job placement assistance.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-12 bg-secondary">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-textColor mb-6">
              Our Courses
            </h2>
            <p className="text-lg text-textColor-light">
              Transform your career with our industry-leading tech courses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
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
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-white">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-textColor mb-6">
              Student Success Stories
            </h2>
            <p className="text-lg text-textColor-light">
              Hear from our graduates who transformed their careers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-secondary shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-textColor-light mb-4">{testimonial.content}</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-textColor-light">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-12 bg-secondary">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-textColor mb-6">
              Curriculum
            </h2>
            <p className="text-lg text-textColor-light">
              A comprehensive program designed for your success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div 
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
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 bg-white">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-textColor mb-6">
              Pricing Plans
            </h2>
            <p className="text-lg text-textColor-light">
              Choose the plan that fits your schedule and goals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-secondary shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-textColor-light"> / {plan.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  className="block w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors text-center"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-12 bg-secondary">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-textColor mb-6">
              Apply Now
            </h2>
            <p className="text-lg text-textColor-light">
              Take the first step towards your new career
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
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
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Index;
