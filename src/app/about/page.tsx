import React from 'react'
import PageHeader from '../component/About-us/Header'
import AboutSection from '../component/Home/AboutUs'
import TreatmentsSection from '../component/Home/treatments/Containter'

export default function layout() {
  return (
   <>
   <PageHeader 
  title="About Us"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "About Us" }
  ]}
  backgroundImage="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
/>

<AboutSection/>
<TreatmentsSection/>

   </>
  )
}
