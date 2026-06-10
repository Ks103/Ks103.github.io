import artus1 from '../assets/Images/Artus/artus1.svg';
import artus2 from '../assets/Images/Artus/artus2.svg';
import artus3 from '../assets/Images/Artus/artus3.svg';
import out1 from '../assets/Images/Artus/out1.svg'
import out2 from '../assets/Images/Artus/out2.svg'
import out3 from '../assets/Images/Artus/out3.svg'
import out4 from '../assets/Images/Artus/out4.svg'
import out5 from '../assets/Images/Artus/out5.svg'
import litebite1 from '../assets/Images/litebite/litebite1.svg'
export const projectDetails = {
  1: {
    template: 'short',
    hero: {
      label: 'CASE STUDY',
      brand: 'liteBite',
      subtitle: 'Smart Meal Planner & Nutrition Tracker',
      description:
        'An AI-powered nutrition platform that helps users plan meals, track calories, and maintain healthy eating habits with personalized recommendations.',
      tags: ['Mobile App', 'AI', 'Health & Wellness', 'Nutrition', 'UX/UI Design'],
      ctaLabel: 'View Project',
      ctaLink: '#',
      image: litebite1,
      images: null,
    },
    overview: {
      role: 'Product Designer (End-to-End)',
      timeline: 'Jan 2024 – Mar 2024 (3 Months)',
      platform: 'Android',
      tools: ['Figma', 'Figjam', 'Notion', 'UX'],
    },
    problem: {
      description:
        'Maintaining a healthy diet is challenging due to lack of personalization, poor tracking tools, and rigid meal plans.',
      points: [
        'Generic meal plans without personalization',
        'Difficult calorie and macro tracking',
        'Limited flexibility in meal choices',
        'Low motivation to maintain consistency',
        'Complicated subscription management',
      ],
    },
    goal: {
      description:
        'Create a flexible, personalized nutrition experience that simplifies healthy eating through AI-driven meal planning and effortless tracking.',
      cards: [
        { icon: '🍽', title: 'Personalized AI', subtitle: 'Meal Plans' },
        { icon: '📊', title: 'Track Calories', subtitle: 'Macros & Progress' },
        { icon: '🔄', title: 'Easy Meal Swap', subtitle: 'Anytime' },
        { icon: '💳', title: 'Hassle Free', subtitle: 'Subscription' },
        { icon: '🎁', title: 'Rewards', subtitle: 'For Users' },
        { icon: '✨', title: 'Simplify Healthy', subtitle: 'Eating Journey' },
      ],
    },
    process: [
      { title: 'Discover', description: 'User research, competitor analysis & insights' },
      { title: 'Define', description: 'User personas, problem statements & goals' },
      { title: 'Idea', description: 'User flows, information architecture, sketches' },
      { title: 'Design', description: 'Wireframes, UI design, prototypes' },
      { title: 'Test', description: 'Usability testing, feedback & iterations' },
      { title: 'Deliver', description: 'Handoff, design system & implementation' },
    ],
    features: [
      {
        title: 'AI Meal Planner',
        description:
          'Generates personalized meal recommendations based on fitness goals, dietary preferences, allergies, and lifestyle habits.',
        image: null,
      },
      {
        title: 'Meal Swap',
        description:
          'Allows users to instantly replace meals while automatically maintaining nutritional balance.',
        image: null,
      },
      {
        title: 'Nutrition Tracking',
        description:
          'Tracks calories, protein, carbs, fats, water intake, and overall progress through simple visual dashboards.',
        image: null,
      },
      {
        title: 'Subscription Management',
        description:
          'Flexible subscription controls allowing users to pause, freeze, upgrade, or cancel plans anytime.',
        image: null,
      },
      {
        title: 'Rewards Zone',
        description:
          'Encourages consistency through points, rewards, vouchers, and healthy habit milestones.',
        image: null,
      },
    ],
  },
  2: {
    template: 'long',
    hero: {
      label: 'CASE STUDY',
      brand: 'ARTUS',
      headline: 'Transforming Ideas into Products Through AI Agents',
      description:
        'A collaborative AI workspace that helps teams move from idea → requirements → prototypes → execution using specialized AI agents.',
      tags: [
        'AI Product Design',
        'SaaS Platform',
        'Multi-Agent System',
        'Product Strategy',
        'Web App',
      ],
      ctaLabel: 'View Project',
      ctaLink: '#',
      image: artus1,
    },
    overview: {
      product: 'AI Product Development Platform',
      platform: 'Web Application',
      timeline: 'Jan 2024 – Mar 2025',
      role: 'Led end-to-end product design including UX strategy, information architecture, interaction design, and design system development. Collaborated closely with founders and engineers to shape the AI-driven product workflow.',
      team: ['2 Founder', '2 Product Designer', '2 Engineers'],
      skills: [
        'Product Design',
        'AI UX',
        'Design Systems',
        'Information Architecture',
        'Prototyping',
        'User Flows',
      ],
      impact:
        'Helped transform early-stage concepts into a structured AI-powered product development platform used by product teams to accelerate planning and execution.',
    },
    introduction: [
      'Product teams today rely on multiple disconnected tools for research, documentation, planning, and execution. This fragmentation slows down innovation and creates friction between ideation and delivery.',
      'Artus was designed as a unified AI-powered workspace where teams can collaborate with specialized agents to move seamlessly from product ideas to actionable execution plans.',
    ],
    problemStatement: {
      intro: 'Modern product teams face several challenges:',
      points: [
        'Switching between multiple tools during product development',
        'Difficulty translating ideas into structured requirements',
        'Lack of visibility across the product lifecycle',
        'Inconsistent documentation and planning workflows',
        'Limited collaboration between design, product, and engineering teams',
      ],
      closing:
        'The challenge was to design an experience that makes advanced AI capabilities feel approachable, structured, and actionable for real product teams.',
    },
    solution: {
      intro:
        'Artus introduces a guided product-building workflow powered by specialized AI agents.',
      points: [
        'Start with a simple product idea',
        'Collaborate with dedicated AI agents',
        'Generate structured requirements',
        'Create detailed product documentation',
        'Build execution-ready plans',
        'Move seamlessly from ideation to delivery',
      ],
    },
    redesign: {
      before: {
        title: 'EARLIER EXPERIENCE — WHAT WAS WRONG?',
        points: [
          'Unstructured AI responses created information overload',
          'Critical insights were buried within large datasets',
          'Teams struggled to convert research into actionable plans',
          'High effort required to validate and prioritize opportunities',
          'Fragmented workflow between analysis and execution',
        ],
        image: artus2,
      },
      after: {
        title: 'WHAT CHANGED IN THE REDESIGN?',
        points: [
          'Centralized insights into a single decision-making workspace',
          'Surface high-impact opportunities through visual prioritization',
          'Created guided workflows from analysis to execution',
          'Improved discoverability of AI-generated recommendations',
          'Reduced manual effort through structured outputs',
        ],
        image: artus3,
      },
    },
    outcome: {
      title: 'FINAL OUTCOME',
      description:
        'The final experience transformed AI from a simple assistant into a collaborative product-building partner.',
      metrics: [
        { value: '40%', label: 'Faster Product Planning', icon: out1 },
        { value: '35%', label: 'Reduction in Documentation Effort', icon: out2 },
        { value: '50%', label: 'Better Team Alignment', icon: out3 },
        { value: '60%', label: 'Improved Workflow Visibility', icon: out4 },
        { value: '45%', label: 'Faster Idea-to-Execution Journey', icon: out5 },
      ],
    },
    takeaway: {
      text: 'The biggest challenge was creating an experience where advanced AI capabilities felt understandable, predictable, and actionable. By focusing on guided workflows instead of overwhelming users with options, Artus helps teams move from ideas to execution with greater confidence and speed.',
      steps: [
        'Understand User Needs',
        'Simplify Complexity',
        'Guide with AI Agents',
        'Enable Actions',
      ],
    },
  },
}

export const getProjectDetail = (id) => projectDetails[Number(id)] ?? null
