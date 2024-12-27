import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';

const About = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-textColor mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-textColor-light">
              Empowering the next generation of tech professionals
            </p>
          </div>
        </ScrollAnimation>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation className="p-6 rounded-lg bg-white shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-textColor-light">
                We are dedicated to providing high-quality tech education that transforms careers and lives. Our intensive bootcamps are designed to equip students with the skills they need to succeed in today's digital world.
              </p>
            </ScrollAnimation>

            <ScrollAnimation className="p-6 rounded-lg bg-white shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-textColor-light">
                To create a world where quality tech education is accessible to everyone who dreams of a career in technology. We believe in hands-on learning, industry-relevant curriculum, and supportive community.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;