import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import { CheckCircle } from 'lucide-react';

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-24">
        <ScrollAnimation className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold text-textColor mb-6">
              Application Submitted!
            </h1>
            <p className="text-lg md:text-xl text-textColor-light mb-8">
              Thank you for applying to our bootcamp. We'll review your application and get back to you within 2-3 business days.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ul className="text-left space-y-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Check your email for confirmation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Schedule an interview with our team</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Complete the technical assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Confirmation;