'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Clock, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

type LocationKey = 'dehradun' | 'rishikesh';

export default function AyurvedicContact() {
    const [activeBranch, setActiveBranch] = useState<LocationKey>('dehradun');
    
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Handle Input Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = async () => {
        // Basic Validation
        if (!formData.name || !formData.phone) {
            alert("Please fill in your Name and Phone Number.");
            return;
        }

        setStatus('submitting');

        try {
            const response = await fetch('https://sheetdb.io/api/v1/jq21nrvxecrc7', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: {
                        ...formData,
                        branch: activeBranch, // Also sending which branch they were viewing
                        date: new Date().toLocaleString()
                    }
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', message: '' }); // Reset form
                // Reset status after 3 seconds
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    type BranchInfo = {
        name: string;
        subName?: string;
        addressLines: string[];
        mapSrc: string;
    };



    const branches: Record<LocationKey, BranchInfo> = {
        dehradun: {
            name: "Main Branch - Dehradun",
            addressLines: [
                "Vansh Tower, 1st Floor, 3 EC Road,",
                "Next to Udupi Cafe and Restaurant,",
                "Dehradun, Uttarakhand"
            ],
            mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1337.585970649006!2d78.05194268291547!3d30.329967568590856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909291dad7fef37%3A0xb39091551bc6ec11!2sShree%20Samadhan%20Ayurveda-%20Best%20Ayurvedic%20doctor%2FAyurvedic%20physician%2FAgnikarma%2FViddhakarma%2FBest%20Ayurvedic%20clinic%20in%20Dehradun!5e0!3m2!1sen!2sin!4v1766553112938!5m2!1sen!2sin"
        },
        rishikesh: {
            name: "Rishikesh Branch",
            subName: "Avlokan Clinic",
            addressLines: [
                "58, Railway Road, Ambedkar Chowk,",
                "Next to Burger Singh, Near Neeraj Bhawan,",
                "Rishikesh"
            ],
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220708.3041773451!2d78.00804091268492!3d30.19235341392952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390917fe30a6ac27%3A0x1e8a25bf15f2adee!2sAvlokan%20Transforming%20Minds%20clinic!5e0!3m2!1sen!2sin!4v1766553206141!5m2!1sen!2sin"
        }
    };

    const sharedContact = {
        phone: "+91 74540 58199",
        hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    };

    return (
        <section className="w-full min-h-screen bg-white pt-[100px] pb-16 px-4 md:px-8 flex items-center justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* --------------------------------------------------
                   LEFT SIDE: Form with SheetDB Integration
                   -------------------------------------------------- */}
                <div className="flex flex-col space-y-8 order-2 lg:order-1">
                    <div>
                        <span className="text-[#C84F1A] font-semibold tracking-wider text-xs uppercase mb-2 block">
                            Book Your Visit
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3 tracking-tight">
                            Schedule an Appointment
                        </h2>
                        <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                            Fill in your details below and we will get back to you to confirm your slot.
                        </p>
                    </div>

                    <form className="space-y-6 max-w-lg">
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 focus:bg-white focus:border-[#C84F1A] focus:ring-2 focus:ring-[#C84F1A]/10 outline-none transition-all duration-300 placeholder-gray-400"
                                placeholder="Ex. Rahul Sharma"
                                disabled={status === 'submitting'}
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700 block">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 focus:bg-white focus:border-[#C84F1A] focus:ring-2 focus:ring-[#C84F1A]/10 outline-none transition-all duration-300 placeholder-gray-400"
                                placeholder="Ex. +91 98765 43210"
                                disabled={status === 'submitting'}
                            />
                        </div>

                        {/* Message Input */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 block">
                                Message (Optional)
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 focus:bg-white focus:border-[#C84F1A] focus:ring-2 focus:ring-[#C84F1A]/10 outline-none transition-all duration-300 placeholder-gray-400 resize-none"
                                placeholder="Briefly describe your health concern..."
                                disabled={status === 'submitting'}
                            ></textarea>
                        </div>

                        {/* Submit Button with States */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={status === 'submitting' || status === 'success'}
                            className={`w-full py-4 rounded-xl font-medium text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg transform active:scale-[0.98] ${
                                status === 'success' 
                                ? 'bg-green-600 text-white shadow-green-500/20' 
                                : status === 'error'
                                ? 'bg-red-600 text-white shadow-red-500/20'
                                : 'bg-[#C84F1A] hover:bg-[#A93F12] text-white shadow-[#C84F1A]/20'
                            }`}
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <CheckCircle2 className="w-5 h-5" />
                                    Appointment Requested!
                                </>
                            ) : status === 'error' ? (
                                <>
                                    Try Again
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                    Request Appointment
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                </div>


                {/* --------------------------------------------------
                   RIGHT SIDE: Location Info & Toggle
                   -------------------------------------------------- */}
                <div className="flex flex-col h-full order-1 lg:order-2">

                    {/* TOGGLE SWITCH */}
                    <div className="bg-gray-100 p-1 rounded-full inline-flex self-start mb-10">
                        <button
                            onClick={() => setActiveBranch('dehradun')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeBranch === 'dehradun'
                                    ? 'bg-white text-[#C84F1A] shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Dehradun
                        </button>
                        <button
                            onClick={() => setActiveBranch('rishikesh')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeBranch === 'rishikesh'
                                    ? 'bg-white text-[#C84F1A] shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Rishikesh
                        </button>
                    </div>

                    {/* DYNAMIC CONTENT CARD */}
                    <div className="flex-1 flex flex-col animate-in fade-in duration-500 key={activeBranch}">

                        {/* Info Section */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                                {branches[activeBranch].name}
                            </h3>
                            {branches[activeBranch].subName && (
                                <p className="text-[#C84F1A] font-medium mb-4">{branches[activeBranch].subName}</p>
                            )}

                            <div className="mt-8 space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4 group cursor-default">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#C84F1A]/10 transition-colors">
                                        <MapPin className="w-5 h-5 text-gray-400 group-hover:text-[#C84F1A] transition-colors" />
                                    </div>
                                    <div className="space-y-1">
                                        {branches[activeBranch].addressLines.map((line, index) => (
                                            <p key={index} className="text-gray-600 leading-relaxed">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 group cursor-default">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#C84F1A]/10 transition-colors">
                                        <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#C84F1A] transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium">{sharedContact.phone}</p>
                                        <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">For Appointments</p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-4 group cursor-default">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#C84F1A]/10 transition-colors">
                                        <Clock className="w-5 h-5 text-gray-400 group-hover:text-[#C84F1A] transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium">{sharedContact.hours}</p>
                                        <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">Working Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative mt-auto group">
                            <iframe
                                src={branches[activeBranch].mapSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
