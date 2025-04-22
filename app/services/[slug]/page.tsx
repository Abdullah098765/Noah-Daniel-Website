'use client';

import { useParams } from 'next/navigation';
import { SITE_CONFIG } from '../../config/constants';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const serviceDetails = {
  'website-development': {
    title: 'Website Development',
    description: 'Custom, responsive, and SEO-ready websites that convert visitors into customers.',
    benefits: [
      {
        title: 'Professional Online Presence',
        description: 'A well-designed website establishes credibility and professionalism, making your business appear more trustworthy to potential customers.'
      },
      {
        title: '24/7 Business Availability',
        description: 'Your website works around the clock, allowing customers to learn about your services and make inquiries at any time.'
      },
      {
        title: 'Increased Visibility',
        description: 'SEO-optimized websites rank higher in search results, making it easier for potential customers to find your business.'
      },
      {
        title: 'Lead Generation',
        description: 'Strategic call-to-actions and contact forms help capture valuable leads and grow your customer base.'
      }
    ],
    features: [
      'Mobile-responsive design',
      'SEO optimization',
      'Fast loading times',
      'Secure hosting',
      'Contact forms',
      'Analytics integration'
    ]
  },
  'ai-agents': {
    title: 'AI Agents / AI Employees',
    description: 'Virtual assistants that automate customer support, lead generation, and admin tasks.',
    benefits: [
      {
        title: 'Cost Efficiency',
        description: 'Reduce operational costs by automating routine tasks and customer interactions.'
      },
      {
        title: '24/7 Customer Support',
        description: 'Provide instant responses to customer inquiries at any time of day.'
      },
      {
        title: 'Scalability',
        description: 'Handle increasing customer interactions without additional staffing costs.'
      },
      {
        title: 'Data Collection',
        description: 'Gather valuable customer insights and preferences for better business decisions.'
      }
    ],
    features: [
      'Natural language processing',
      'Multi-channel support',
      'Customizable responses',
      'Integration with existing systems',
      'Analytics dashboard',
      'Continuous learning'
    ]
  },
  'missed-call-text-back': {
    title: 'Missed Call Text-Back Automation',
    description: 'Instantly reply to missed calls with personalized SMS to keep every lead warm.',
    benefits: [
      {
        title: 'Never Miss a Lead',
        description: 'Automatically respond to missed calls within seconds, ensuring no potential customer goes unanswered.'
      },
      {
        title: 'Improved Response Rates',
        description: 'Studies show that immediate follow-up significantly increases the chances of converting leads.'
      },
      {
        title: 'Professional Image',
        description: 'Maintain a professional appearance by acknowledging every call attempt.'
      },
      {
        title: 'Time Efficiency',
        description: 'Save time by automating follow-up messages while maintaining personalization.'
      }
    ],
    features: [
      'Instant automated responses',
      'Customizable message templates',
      'Time-based messaging',
      'Lead tracking',
      'Integration with CRM',
      'Analytics reporting'
    ]
  },
  'lead-generation': {
    title: 'Lead Generation & Follow-Up',
    description: 'Smart forms, email/SMS drip campaigns, and appointment booking bots.',
    benefits: [
      {
        title: 'Consistent Lead Flow',
        description: 'Maintain a steady stream of potential customers through automated lead generation systems.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Automated follow-up sequences ensure no lead falls through the cracks.'
      },
      {
        title: 'Time Management',
        description: 'Focus on closing deals while automation handles lead nurturing.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Track lead behavior and optimize campaigns based on real data.'
      }
    ],
    features: [
      'Smart lead capture forms',
      'Automated email sequences',
      'SMS follow-up campaigns',
      'Appointment scheduling',
      'Lead scoring system',
      'Performance analytics'
    ]
  },
  'local-seo': {
    title: 'Local SEO Optimization',
    description: 'Google Business Profile optimization and local directory submissions.',
    benefits: [
      {
        title: 'Local Visibility',
        description: 'Increase your visibility in local search results and Google Maps.'
      },
      {
        title: 'Targeted Traffic',
        description: 'Attract customers who are actively searching for your services in your area.'
      },
      {
        title: 'Competitive Edge',
        description: 'Outrank local competitors in search results.'
      },
      {
        title: 'Trust Building',
        description: 'Positive reviews and accurate business information build trust with potential customers.'
      }
    ],
    features: [
      'Google Business Profile optimization',
      'Local directory submissions',
      'Review management',
      'Local content creation',
      'Citation building',
      'Local link building'
    ]
  },
  'chatbots': {
    title: 'Chatbots & Voice Assistants',
    description: 'Website live chat bots and WhatsApp/Messenger automation.',
    benefits: [
      {
        title: 'Instant Customer Support',
        description: 'Provide immediate answers to common customer questions.'
      },
      {
        title: 'Cost Reduction',
        description: 'Handle routine inquiries without human intervention.'
      },
      {
        title: 'Customer Satisfaction',
        description: 'Quick responses lead to higher customer satisfaction rates.'
      },
      {
        title: 'Lead Qualification',
        description: 'Automatically qualify leads and route them to the appropriate team member.'
      }
    ],
    features: [
      '24/7 availability',
      'Multi-language support',
      'Natural conversation flow',
      'Integration with messaging platforms',
      'Custom response templates',
      'Analytics dashboard'
    ]
  },
  'ecommerce': {
    title: 'E-commerce Integrations',
    description: 'Payment gateway setup and online ordering systems.',
    benefits: [
      {
        title: 'Expanded Sales Channels',
        description: 'Reach customers beyond your physical location.'
      },
      {
        title: 'Streamlined Operations',
        description: 'Automate order processing and inventory management.'
      },
      {
        title: 'Customer Convenience',
        description: 'Provide flexible payment options and easy ordering.'
      },
      {
        title: 'Data Insights',
        description: 'Track customer behavior and preferences for better decision-making.'
      }
    ],
    features: [
      'Secure payment processing',
      'Inventory management',
      'Order tracking',
      'Customer accounts',
      'Multi-currency support',
      'Analytics integration'
    ]
  },
  'analytics': {
    title: 'Analytics & Insights',
    description: 'Real-time dashboards and AI-powered business intelligence.',
    benefits: [
      {
        title: 'Data-Driven Decisions',
        description: 'Make informed business decisions based on real-time data.'
      },
      {
        title: 'Performance Tracking',
        description: 'Monitor key metrics and identify areas for improvement.'
      },
      {
        title: 'Customer Insights',
        description: 'Understand customer behavior and preferences.'
      },
      {
        title: 'Competitive Advantage',
        description: 'Stay ahead of competitors with actionable insights.'
      }
    ],
    features: [
      'Real-time dashboards',
      'Custom reports',
      'Predictive analytics',
      'Data visualization',
      'Automated insights',
      'Integration capabilities'
    ]
  },
  'appointment-scheduling': {
    title: 'AI Appointment Scheduling',
    description: 'Smart booking calendars with auto-reminders and rescheduling.',
    benefits: [
      {
        title: 'Reduced No-Shows',
        description: 'Automated reminders significantly decrease missed appointments.'
      },
      {
        title: 'Time Efficiency',
        description: 'Eliminate back-and-forth communication for scheduling.'
      },
      {
        title: 'Customer Convenience',
        description: 'Allow customers to book at their convenience, 24/7.'
      },
      {
        title: 'Resource Optimization',
        description: 'Better manage staff schedules and resources.'
      }
    ],
    features: [
      'Online booking system',
      'Automated reminders',
      'Calendar synchronization',
      'Custom booking rules',
      'Multi-location support',
      'Analytics dashboard'
    ]
  },
  'reputation-management': {
    title: 'Reputation Management',
    description: 'Social media automation and review management solutions.',
    benefits: [
      {
        title: 'Brand Trust',
        description: 'Build and maintain a positive online reputation.'
      },
      {
        title: 'Customer Engagement',
        description: 'Stay connected with customers through social media.'
      },
      {
        title: 'Crisis Management',
        description: 'Quickly address negative feedback and maintain brand image.'
      },
      {
        title: 'Competitive Edge',
        description: 'Stand out from competitors with a strong online presence.'
      }
    ],
    features: [
      'Review monitoring',
      'Social media management',
      'Response automation',
      'Sentiment analysis',
      'Competitor tracking',
      'Performance reporting'
    ]
  }
};

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  const handleContactClick = () => {
    // Store the current service in session storage
    sessionStorage.setItem('scrollToContact', 'true');
    // Navigate to home page with the correct section ID
    router.push('/#contact-section');
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-20">
        <Link href="/" className="inline-flex items-center text-blue-500 hover:underline mb-8">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-8"
        >
          <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <div className="grid grid-cols-1 gap-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center bg-gray-50 p-4 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleContactClick}
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 