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
        name: "Archi Gaur",
        rating: 5.0,
        text: "I am taking online consultation from this Ayurvedic clinic. The doctor is very kind, listens patiently, and gives effective advice. I'm feeling better and truly appreciate the care.",
        avatar: "AG",
        location: "Dehradun"
    },
    {
        id: 2,
        name: "Vansh Singhal",
        rating: 5.0,
        text: "Great clinic with helpful staff and effective treatments. The doctor listens carefully and provides personalized advice. Highly recommend for anyone looking for genuine Ayurvedic care.",
        avatar: "VS",
        location: "Dehradun"
    },
    {
        id: 3,
        name: "Shreya Pastey",
        rating: 5.0,
        text: "One of the best Ayurvedic doctors in Dehradun. I visited Vaidya Sakshi Mittal for my Sinus issue and started feeling better in just 3 days. She is very kind and takes good care of each patient.",
        avatar: "SP",
        location: "Dehradun"
    },
    {
        id: 4,
        name: "Urmi Saini",
        rating: 5.0,
        text: "I take my mother's diabetes treatment from Shree Samadhan Ayurveda clinic. Best Ayurvedic doctor in Dehradun.",
        avatar: "US",
        location: "Dehradun"
    },
    {
        id: 5,
        name: "Shivam",
        rating: 5.0,
        text: "I visited for my PCOD issue and it's cured now. I must say she is the best doctor. She treats by Nadi Parikshan.",
        avatar: "SH",
        location: "Dehradun"
    },
    {
        id: 6,
        name: "Priyanjali Upadhyay",
        rating: 5.0,
        text: "A true sample of excellent hospitality and Ayurveda Science! Vaidya Sakshi Mittal provides authentic Ayurvedic treatment and medicines.",
        avatar: "PU",
        location: "Dehradun"
    },
    {
        id: 7,
        name: "Susheel Gupta",
        rating: 5.0,
        text: "Best Ayurvedic clinic in Dehradun. I visit clinic for my treatment and go through Jaloka therapy. She treats patients through Nadi Pariksha.",
        avatar: "SG",
        location: "Dehradun"
    },
    {
        id: 8,
        name: "Arnav Arora",
        rating: 5.0,
        text: "Best Ayurveda treatment I found in Dehradun.",
        avatar: "AA",
        location: "Dehradun"
    },
    {
        id: 9,
        name: "Arti Arora",
        rating: 5.0,
        text: "Best Ayurveda treatment for diabetes in Dehradun.",
        avatar: "AA",
        location: "Dehradun"
    },
    {
        id: 10,
        name: "Aastha Arora",
        rating: 5.0,
        text: "Best Ayurveda treatment for infertility in Dehradun.",
        avatar: "AA",
        location: "Dehradun"
    },
    {
        id: 11,
        name: "Dr Akanksha Naudiyal",
        rating: 5.0,
        text: "Best Ayurvedic clinic in Dehradun. Best treatment.",
        avatar: "DA",
        location: "Dehradun"
    },
    {
        id: 12,
        name: "Parnika Sethi",
        rating: 5.0,
        text: "Best Ayurvedic treatment in Dehradun.",
        avatar: "PS",
        location: "Dehradun"
    },
    {
        id: 13,
        name: "Pratima Vishwakarma",
        rating: 5.0,
        text: "Best Ayurvedic doctor for gyne related problems.",
        avatar: "PV",
        location: "Dehradun"
    },
    {
        id: 14,
        name: "Mayur Lama",
        rating: 5.0,
        text: "Best Ayurveda treatment.",
        avatar: "ML",
        location: "Dehradun"
    },
    {
        id: 15,
        name: "चौ० लक्ष्य",
        rating: 5.0,
        text: "Best and effective treatment of Ayurveda.",
        avatar: "चल",
        location: "Dehradun"
    },
    {
        id: 16,
        name: "Shikha Sethi",
        rating: 5.0,
        text: "Best Ayurveda treatment for diabetes in Dehradun.",
        avatar: "SS",
        location: "Dehradun"
    },
    {
        id: 17,
        name: "Rakshita Singh",
        rating: 5.0,
        text: "Best Ayurvedic doctor in Dehradun.",
        avatar: "RS",
        location: "Dehradun"
    },
    {
        id: 18,
        name: "Pankaj Arora",
        rating: 5.0,
        text: "Best Ayurvedic treatment for diabetes.",
        avatar: "PA",
        location: "Dehradun"
    },
    {
        id: 19,
        name: "Robin Chauhan",
        rating: 5.0,
        text: "I found best Ayurvedic treatment here.",
        avatar: "RC",
        location: "Dehradun"
    },
    {
        id: 20,
        name: "Narendra Duggal",
        rating: 5.0,
        text: "I found the best treatment of diabetes.",
        avatar: "ND",
        location: "Dehradun"
    },
    {
        id: 21,
        name: "Megha Mittal",
        rating: 5.0,
        text: "Diagnosis is very accurate and treatment is very effective.",
        avatar: "MM",
        location: "Dehradun"
    },
    {
        id: 22,
        name: "Nikita Singh",
        rating: 5.0,
        text: "Great experience. Satisfactory treatments.",
        avatar: "NS",
        location: "Dehradun"
    },
    {
        id: 23,
        name: "Vickey Malik",
        rating: 5.0,
        text: "Best Ayurvedic clinic of Dehradun.",
        avatar: "VM",
        location: "Dehradun"
    },
];

// Split testimonials into columns for desktop layout
const getColumnTestimonials = (columnIndex: number, totalColumns: number) => {
    const perColumn = Math.ceil(testimonialsData.length / totalColumns);
    const start = columnIndex * perColumn;
    const end = start + perColumn;
    return testimonialsData.slice(start, end);
};

const column1 = getColumnTestimonials(0, 2);
const column2 = getColumnTestimonials(1, 2);

const infiniteAllTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];
const infiniteColumn1 = [...column1, ...column1, ...column1];
const infiniteColumn2 = [...column2, ...column2, ...column2];

const TestimonialSection: React.FC = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <section className="py-20 bg-[#FDF8F3] relative overflow-hidden">
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
                            duration: 60,
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
                                duration: 40,
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
                                duration: 40,
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
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-xs md:text-sm">
                        {testimonial.avatar}
                    </span>
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
