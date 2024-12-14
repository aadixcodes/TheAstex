// import { Check } from 'lucide-react';

// // Pricing Feature Component
// export function PricingFeature({ feature }) {
//   return (
//     <div className="flex items-center gap-3">
//       <Check className="w-5 h-5 text-[#C1FF72]" />
//       <span className="text-gray-300">{feature}</span>
//     </div>
//   );
// }

// // Pricing Tier Component
// export function PricingTier({ 
//   name, 
//   price, 
//   description, 
//   features, 
//   popular = false 
// }) {
//   return (
//     <div className={`
//       rounded-2xl p-8 
//       ${popular 
//         ? 'bg-[#C1FF72]/10 border-2 border-[#C1FF72]' 
//         : 'bg-gray-900/50 border border-gray-800'
//       }
//     `}>
//       {popular && (
//         <span className="bg-[#C1FF72] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
//           Most Popular
//         </span>
//       )}
      
//       <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
//       <p className="text-gray-400 mb-4">{description}</p>
      
//       <div className="mb-6">
//         <span className="text-4xl font-bold text-white">${price}</span>
//         <span className="text-gray-400">/project</span>
//       </div>
      
//       <div className="space-y-4">
//         {features.map((feature, index) => (
//           <PricingFeature key={index} feature={feature} />
//         ))}
//       </div>
      
//       <button 
//         className={`
//           w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-colors
//           ${popular 
//             ? 'bg-[#C1FF72] text-black hover:bg-[#9FE952]' 
//             : 'bg-white/10 text-white hover:bg-white/20'
//           }
//         `}
//       >
//         Get Started
//       </button>
//     </div>
//   );
// }

// // Example usage in a page or component
// export default function PricingPage() {
//   const pricingTiers = [
//     {
//       name: 'Basic',
//       price: 9,
//       description: 'Perfect for small projects',
//       features: [
//         'Up to 5 projects',
//         'Basic analytics',
//         'Email support'
//       ]
//     },
//     {
//       name: 'Pro',
//       price: 29,
//       description: 'Ideal for growing teams',
//       features: [
//         'Unlimited projects',
//         'Advanced analytics',
//         'Priority support',
//         'Collaboration tools'
//       ],
//       popular: true
//     },
//     {
//       name: 'Enterprise',
//       price: 59,
//       description: 'Comprehensive solution for large teams',
//       features: [
//         'Unlimited projects',
//         'Full analytics suite',
//         '24/7 dedicated support',
//         'Custom integrations'
//       ]
//     }
//   ];

//   return (
//     <div className="bg-black min-h-screen py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold text-white text-center mb-12">
//           Our Pricing Plans
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {pricingTiers.map((tier, index) => (
//             <PricingTier 
//               key={index}
//               name={tier.name}
//               price={tier.price}
//               description={tier.description}
//               features={tier.features}
//               popular={tier.popular}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Check } from 'lucide-react';

// Pricing Feature Component
export function PricingFeature({ feature }) {
  return (
    <div className="flex items-center gap-3">
      <Check className="w-5 h-5 text-[#C1FF72]" />
      <span className="text-gray-300">{feature}</span>
    </div>
  );
}

// Pricing Tier Component
export function PricingTier({ 
  name, 
  price, 
  description, 
  features, 
  popular = false 
}) {
  return (
    <div className={`
      rounded-2xl p-8 w-full max-w-[380px] mx-auto
      ${popular 
        ? 'bg-[#C1FF72]/10 border-2 border-[#C1FF72]' 
        : 'bg-gray-900/50 border border-gray-800'
      }
    `}>
      {popular && (
        <span className="bg-[#C1FF72] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
          Most Popular
        </span>
      )}
      
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-gray-400">/project</span>
      </div>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature} />
        ))}
      </div>
      
      <button 
        className={`
          w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-colors
          ${popular 
            ? 'bg-[#C1FF72] text-black hover:bg-[#9FE952]' 
            : 'bg-white/10 text-white hover:bg-white/20'
          }
        `}
      >
        Get Started
      </button>
    </div>
  );
}

// Example usage in a page or component
export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Basic',
      price: 9,
      description: 'Perfect for small projects',
      features: [
        'Up to 5 projects',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Pro',
      price: 29,
      description: 'Ideal for growing teams',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        'Collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 59,
      description: 'Comprehensive solution for large teams',
      features: [
        'Unlimited projects',
        'Full analytics suite',
        '24/7 dedicated support',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-16 mt-16">
          Our Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="flex justify-center">
              <PricingTier 
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                popular={tier.popular}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}