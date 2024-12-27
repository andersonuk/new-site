import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import { Star } from 'lucide-react';

const Testimonials = () => {
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

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-textColor mb-6">
              Student Success Stories
            </h1>
            <p className="text-lg md:text-xl text-textColor-light">
              Hear from our graduates who transformed their careers
            </p>
          </div>
        </ScrollAnimation>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation 
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-textColor-light mb-4">{testimonial.content}</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-textColor-light">{testimonial.role} at {testimonial.company}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;