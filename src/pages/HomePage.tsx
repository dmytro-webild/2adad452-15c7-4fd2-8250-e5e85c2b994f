import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="Your Digital Growth Partner"
      title="Custom Websites That Convert Visitors Into Customers"
      description="Fluxcorp builds fast, beautiful, results-driven websites designed for your business growth. From strategy to launch, we handle the complexity so you can focus on what matters."
      primaryButton={{
        text: "Start Your Project Today",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Our Work",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-having-conversation-with-ai-virtual-assistant-producing-clips_482257-127292.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-group-coworkers-analyzing-business-charts-infographics-data-laptop-software-people-doing-teamwork-collaboration-create-paper-reviews-professional-report-close-up_482257-48646.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/technology-network-background-connection-cyber-space-ai-generative_123827-24187.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/three-black-ducks_23-2147680069.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/database-designer-writing-code-using-laptop-with-green-screen-chroma-key-mockup-sitting-desk-busy-developers-agency-programer-looking-multiple-screens-with-programming-language_482257-41854.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/keyboard-social-business-young-person_1150-1012.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted by Leaders"
      title="Our Network of Growth Partners"
      description="We work with forward-thinking brands across various industries to drive digital success."
      names={[
        "InnovateTech",
        "GrowthStream",
        "ApexDesign",
        "GlobalShift",
        "BlueSkySoft",
        "NexGenBiz",
        "DigitalBridge",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Results-Driven Development"
      descriptions={[
        "Fluxcorp is a specialized web development agency focused on transforming outdated digital presence into high-performance revenue drivers for businesses with 10 to 250 employees.",
        "We bridge the gap between creative design and technical excellence. Our team works as a seamless extension of your organization, handling every detail from strategic planning to post-launch optimization.",
        "Our philosophy is simple: websites should be measurable assets. We align your business goals with sophisticated technical solutions to ensure every feature, interface, and interaction serves a conversion purpose.",
      ]}
      primaryButton={{
        text: "Learn About Our Process",
        href: "#services",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Core Competencies"
      title="Comprehensive Web Services"
      description="Custom solutions tailored to your unique market challenges."
      items={[
        {
          tag: "Strategy",
          title: "Strategic Roadmap",
          description: "Defining your digital direction for maximum impact.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/be-change-inspired-active-thunder-website_53876-124706.jpg",
        },
        {
          tag: "Development",
          title: "Precision Engineering",
          description: "Fast, secure, and scalable web platforms.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038907.jpg",
        },
        {
          tag: "Infrastructure",
          title: "Scalable Hosting",
          description: "High-performance foundations for any workload.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/programmers-coding-laptop-using-artificial-intelligence-server-farm_482257-125015.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCardsBento
      tag="Service Catalog"
      title="Everything Your Business Needs"
      description="From custom portals to growth engines, we build it all."
      items={[
        {
          title: "eCommerce Portals",
          description: "Secure shops with optimized checkouts.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-looking-business-analytics_482257-115272.jpg",
        },
        {
          title: "CRM Integrations",
          description: "Syncing business data for efficiency.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/thumbs-up-network-circuit-board-link-connection-technology_1379-883.jpg",
        },
        {
          title: "UX Research",
          description: "Insights that drive conversion rates.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-with-papers-notes-office_23-2149749911.jpg",
        },
        {
          title: "Brand Identity",
          description: "Unique digital presence design.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-measuring-tools-desk_23-2150440915.jpg",
        },
        {
          title: "SEO Engines",
          description: "Advanced visibility strategies.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/shoulder-view-african-american-startup-employee-looking-laptop-screen-with-business-analytics-charts-sitting-desk-close-focus-portable-computer-display-with-sales-results_482257-38698.jpg",
        },
        {
          title: "API Bridging",
          description: "Custom software integrations.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/technician-using-mockup-mobile-phone-data-center_482257-124694.jpg",
        },
        {
          title: "Performance Tuning",
          description: "Maximum load speed engineering.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-uses-phone-app-with-greenscreen_482257-81843.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Measurable Impact"
      title="Proven Business ROI"
      description="We measure success in revenue, performance, and user satisfaction."
      metrics={[
        {
          value: "150%",
          title: "Avg Conversion Lift",
          description: "Real-world gains for our B2B partners.",
          imageSrc: "http://img.b2bpic.net/free-photo/birth-rate-fertility-concept_23-2148760991.jpg",
        },
        {
          value: "98%",
          title: "Client Retention",
          description: "Dedicated long-term support relationships.",
          imageSrc: "http://img.b2bpic.net/free-photo/internet-speed-test-software-concept_53876-120119.jpg",
        },
        {
          value: "<1s",
          title: "Load Speed",
          description: "Optimized performance for engagement.",
          imageSrc: "http://img.b2bpic.net/free-photo/alarm-clock-laptop-against-pink-background_23-2147943377.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Client Success"
      title="Trusted by Growing Businesses"
      description="Hear what our partners have to say about the Fluxcorp experience."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "CEO",
          quote: "Fluxcorp transformed our digital presence. We saw immediate ROI after launch.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mature-male-lawyer-with-laptop-wooden-table-courtroom_23-2147898629.jpg",
        },
        {
          name: "David Chen",
          role: "Marketing Manager",
          quote: "The team’s professionalism is unmatched. Fast, reliable, and expert-level.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-stylish-businessman-dark-background_613910-15034.jpg",
        },
        {
          name: "Elena Rodriguez",
          role: "VP Operations",
          quote: "They don't just build websites; they build business growth engines.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-confident-businessman-dressed-elegant-suit-shows-gesture-cool-while-standing-outdoors-against-cityscape-background_613910-4120.jpg",
        },
        {
          name: "Marcus Thorne",
          role: "Founder",
          quote: "Fluxcorp made the complexity of our transition seem simple. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
        },
        {
          name: "Jennifer Wu",
          role: "Product Director",
          quote: "Exceptional development speed and communication. Our project went off without a hitch.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-making-hand-gesture-with-cup-coffee-laptop-desk_23-2147955285.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Common Questions"
      title="Everything You Need to Know"
      description="Clear answers about how we partner with your business."
      items={[
        {
          question: "What is your typical project timeline?",
          answer: "Projects typically range from 4-8 weeks depending on scope, including strategy, development, and launch phases.",
        },
        {
          question: "Do you provide post-launch support?",
          answer: "Absolutely. We offer ongoing maintenance and growth-driven optimization packages for all our clients.",
        },
        {
          question: "Are your solutions scalable for the future?",
          answer: "Yes. We build all our platforms with scalability as a core architectural requirement.",
        },
        {
          question: "How do we measure project ROI?",
          answer: "We track key metrics including conversion rates, site performance, user engagement, and qualified lead generation.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Let’s build something incredible together. Reach out and tell us about your growth goals."
      primaryButton={{
        text: "Schedule Discovery Call",
        href: "#",
      }}
      secondaryButton={{
        text: "Send a Message",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
