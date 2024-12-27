import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import { Check } from 'lucide-react';

const Pricing = () => {
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
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-textColor mb-6">
              Pricing Plans
            </h1>
            <p className="text-lg md:text-xl text-textColor-light">
              Choose the plan that fits your schedule and goals
            </p>
          </div>
        </ScrollAnimation>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <ScrollAnimation 
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-textColor-light"> / {plan.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors">
                  Enroll Now
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;