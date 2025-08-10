// components/TestimonialSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    rating: number;
    text: string;
    avatar: string;
    location: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Priya Sharma",
        rating: 5.0,
        text: "The Panchakarma treatment at Wivana completely transformed my health. I feel rejuvenated and balanced. The therapists are highly skilled and caring.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
        location: "Mumbai"
    },
    {
        id: 2,
        name: "Rajesh Patel",
        rating: 4.9,
        text: "Shirodhara therapy here is exceptional. It helped me overcome chronic stress and insomnia. The peaceful environment adds to the healing experience.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        location: "Delhi"
    },
    {
        id: 3,
        name: "Meera Gupta",
        rating: 5.0,
        text: "My Abhyanga massage sessions have been incredible. The personalized approach and authentic Ayurvedic techniques make all the difference.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        location: "Bangalore"
    },
    {
        id: 4,
        name: "Dr. Anand Kumar",
        rating: 4.8,
        text: "As a physician, I appreciate the scientific approach combined with traditional Ayurveda. The consultation process is thorough and professional.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        location: "Chennai"
    },
    {
        id: 5,
        name: "Kavya Menon",
        rating: 5.0,
        text: "The detox program helped me lose weight naturally and improved my digestion significantly. Highly recommend their holistic approach.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        location: "Kerala"
    },
    {
        id: 6,
        name: "Amit Singh",
        rating: 4.9,
        text: "Excellent Marma therapy sessions. The therapists understand pressure points perfectly. My joint pain has reduced considerably.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        location: "Pune"
    }
];

const column1 = testimonialsData.slice(0, 3);
const column2 = testimonialsData.slice(3, 6);

const infiniteAllTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];
const infiniteColumn1 = [...column1, ...column1, ...column1];
const infiniteColumn2 = [...column2, ...column2, ...column2];

const TestimonialSection: React.FC = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <section className="py-20 bg-[#f8f6f0] relative overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4c4a8] rounded-full opacity-20 -z-10"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#a8b5a8] rounded-full opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-[#8b8680] text-xs md:text-sm tracking-wider uppercase mb-4">
                        — TESTIMONIALS
                    </div>

                    <h2 className="font-philosopher text-3xl md:text-5xl lg:text-6xl text-[#2d3020] leading-tight mb-6">
                        Heartwarming words from
                        <br />
                        <span className="italic">our clients</span>
                    </h2>

                    <p className="text-[#6b6b6b] text-base md:text-lg max-w-2xl mx-auto">
                        Discover how our authentic Ayurvedic treatments have transformed lives and brought wellness to our community.
                    </p>
                </div>

                {/* Mobile - Single Column */}
                <div
                    className="md:hidden h-[500px] overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        animate={{ y: [0, -50 * infiniteAllTestimonials.length] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                        className="space-y-6"
                    >
                        {infiniteAllTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`mobile-${testimonial.id}-${index}`} testimonial={testimonial} />
                        ))}
                    </motion.div>
                </div>

                {/* Desktop - Two Columns */}
                <div
                    className="hidden md:grid md:grid-cols-2 gap-8 h-[600px] overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, -50 * infiniteColumn1.length] }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                            className="space-y-6"
                        >
                            {infiniteColumn1.map((testimonial, index) => (
                                <TestimonialCard key={`col1-${testimonial.id}-${index}`} testimonial={testimonial} />
                            ))}
                        </motion.div>
                    </div>

                    <div className="relative overflow-hidden">
                        <motion.div
                            animate={{ y: [-50 * infiniteColumn2.length, 0] }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                            className="space-y-6"
                        >
                            {infiniteColumn2.map((testimonial, index) => (
                                <TestimonialCard key={`col2-${testimonial.id}-${index}`} testimonial={testimonial} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <motion.div
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg border border-white/50 hover:bg-white/80 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
        >
            {/* Rating Stars */}
            <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-4 h-4 md:w-5 md:h-5 ${star <= Math.floor(testimonial.rating)
                                ? 'text-orange-400 fill-current'
                                : 'text-gray-300'
                            }`}
                    />
                ))}
                <span className="text-[#2d3020] font-semibold ml-2 text-xs md:text-sm">
                    {testimonial.rating}
                </span>
            </div>

            {/* Testimonial Text */}
            <p className="text-[#6b6b6b] leading-relaxed mb-5 text-sm md:text-base">
                &quot;{testimonial.text}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center space-x-3">
                <div className="relative">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                        }}
                    />
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full items-center justify-center hidden">
                        <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                </div>
                <div>
                    <h4 className="text-[#2d3020] font-semibold text-sm md:text-base">
                        {testimonial.name}
                    </h4>
                    <p className="text-[#6b6b6b] text-xs md:text-sm">
                        {testimonial.location}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialSection;
