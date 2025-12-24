'use client';

import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import { motion } from "framer-motion";

// ------------------------------------------------------------------
// Types & Interfaces
// ------------------------------------------------------------------

interface GeoJsonFeature {
    rsmKey: string;
    properties: Record<string, unknown>;
    geometry: {
        type: string;
        coordinates: number[][][] | number[][][][];
    };
    [key: string]: unknown;
}

interface MarkerData {
    name: string;
    coordinates: [number, number]; // [Longitude, Latitude]
}

// ------------------------------------------------------------------
// Data
// ------------------------------------------------------------------

// World Map GeoJSON URL (Stable source)
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers: MarkerData[] = [
    { name: "Russia", coordinates: [105.3188, 61.5240] },
    { name: "Europe (HQ)", coordinates: [15.2551, 54.5260] },
    { name: "Italy", coordinates: [12.5674, 41.8719] },
    { name: "South Africa", coordinates: [22.9375, -30.5595] },
    // Added Indian Locations
    { name: "Dehradun", coordinates: [78.0322, 30.3165] },
    { name: "Rishikesh", coordinates: [78.2676, 30.0869] },
];

// ------------------------------------------------------------------
// Component
// ------------------------------------------------------------------

export default function GlobalPresence() {
    return (
        <div className="w-full max-w-5xl mx-auto mt-20">

            {/* Section Header */}
            <div className="text-center mb-10">
                <span className="text-[#C84F1A] font-semibold tracking-wider text-sm uppercase mb-3 block">
                    Global Reach
                </span>
                <h3 className="font-philosopher text-3xl text-gray-900 mb-4">
                    Healing Beyond Borders
                </h3>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-light">
                    Authentic Ayurveda is already touching lives across the globe.
                    From the holy cities of Rishikesh & Dehradun to the vast landscapes of Russia and South Africa.
                </p>
            </div>

            {/* Map Container */}
            <div className="relative w-full aspect-[2/1] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140 }}>
                    {/* Adjusted Center to show India clearly alongside Europe/Russia */}
                    <ZoomableGroup zoom={1} center={[20, 20]}>

                        {/* Render Countries */}
                        <Geographies geography={geoUrl}>
                            {({ geographies }: { geographies: GeoJsonFeature[] }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="#EAEAEC"
                                        stroke="#D6D6DA"
                                        strokeWidth={0.5}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { fill: "#D6D6DA", outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>

                        {/* Render Animated Markers */}
                        {markers.map(({ name, coordinates }) => (
                            <Marker key={name} coordinates={coordinates}>
                                <g className="cursor-pointer group">
                                    {/* Pulsing Effect Circle */}
                                    <motion.circle
                                        r={8}
                                        fill="#C84F1A"
                                        opacity={0.3}
                                        initial={{ scale: 1, opacity: 0.3 }}
                                        animate={{ scale: 2.5, opacity: 0 }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                        }}
                                    />

                                    {/* Inner Solid Dot */}
                                    <circle r={3.5} fill="#C84F1A" stroke="#FFF" strokeWidth={1} />

                                    {/* Tooltip (Shows on Hover) */}
                                    <text
                                        textAnchor="middle"
                                        y={-12}
                                        style={{ fontFamily: "system-ui", fill: "#333", fontSize: "10px", fontWeight: "bold" }}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm"
                                    >
                                        {name}
                                    </text>
                                </g>
                            </Marker>
                        ))}

                    </ZoomableGroup>
                </ComposableMap>
            </div>

            {/* Legend / Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-gray-100 pt-8">
                {['Authentic Therapy', 'Expert Doctors', 'Global Patients', 'Years of Trust'].map((item, i) => (
                    <div key={i} className="text-center">
                        <div className="w-1.5 h-1.5 bg-[#C84F1A] rounded-full mx-auto mb-2"></div>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">{item}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
