import {
  FileText,
  ThumbsUp,
  Rocket,
  Monitor,
  Wrench,
  Users,
  DollarSign,
  Code,
  LifeBuoy,
  Lightbulb,
  BookOpen,
  CircleChevronLeft,
   
} from "lucide-react";
import {
  POPULAR_ARTICLES_URL,
  CATEGORY_URL,
} from "./routes/constant/urlConstant";

 
export const gettingStartedArticles = [
  {
    id: "gs1",
    title: "Creating Your Account: A Step-by-Step Guide",
    link: POPULAR_ARTICLES_URL,
  },
  {
    id: "gs2",
    title: "Onboarding 101: Getting Started with Lorem Ipsum",
    link: POPULAR_ARTICLES_URL,
  },
  {
    id: "gs3",
    title: "Setting Up Your Workspace: A Quick Start Guide",
    link: POPULAR_ARTICLES_URL,
  },
  {
    id: "gs4",
    title: "Navigating Lorem Ipsum: A Beginner's Tutorial",
    link: POPULAR_ARTICLES_URL,
  },
  {
    id: "gs5",
    title: "Your First Steps with Lorem Ipsum: From Sign-up to Success",
    link: POPULAR_ARTICLES_URL,
  },
  {
    id: "gs6",
    title: "Welcome to Lorem Ipsum: A Beginner's Guide",
    link: POPULAR_ARTICLES_URL,
  },
  {
    id: "gs7",
    title: "Onboarding Guide: A step-by-step walkthrough for new users",
    link: POPULAR_ARTICLES_URL,
  },
  {
    id: "gs8",
    title: "Account Settings: Manage your profile and preferences",
    link: POPULAR_ARTICLES_URL,
  },
];
export const relatedArticles = [
  {
    id: '1',
    title: 'Onboarding 101: Getting Started with Lorem Ipsum',
    excerpt: 'Excerpt goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    link: '/articles/onboarding-101'
  },
  {
    id: '2',
    title: 'Setting Up Your Workspace: A Quick Start Guide',
    excerpt: 'Quisque eu placerat purus. Nulla id lorem ac odio tincidunt laoreet non iaculis elit...',
    link: '/articles/setting-up-workspace'
  },
  {
    id: '3',
    title: 'Navigating Lorem Ipsum: A Beginner\'s Tutorial',
    excerpt: 'Morbi tellus velit, commodo sed vestibulum vel, ornare sed leo. Quisque imperdiet...',
    link: '/articles/navigating-lorem-ipsum'
  },
  {
    id: '4',
    title: 'Account Settings: Manage your profile and preferences',
    excerpt: 'Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    link: '/articles/account-settings'
  },
];

export const steps = [
  {
    numb: 1,
    title: "Create Your Account:",
    description:
      "Cras eget felis quis velit convallis fringilla sed sit amet nisi. Maecenas ullamcorper ex elit, a elementum nisl congue molestie.",
  },
  {
    numb: 2,
    title: "Explore the Dashboard:",
    description:
      "Duis vestibulum metus nec leo euismod, sed suscipit massa placerat.",
  },
  {
    numb: 3,
    title: "Set Up Your Profile:",
    description:
      "Morbi tincidunt dignissim nisi non scelerisque. Vivamus id ligula mauris. In id nisi sapien.",
  },
  {
    numb: 4 ,
    title: "Invite Team Members:",
    description:
      "Vestibulum a elementum nulla, id interdum sem. Donec quis erat et justo sollicitudin cursus sed a ligula. Vivamus a dui ut nisi finibus feugiat in ultricies erat.",
  },    
  {
    numb: 5,
    title: "Create Your First Project:",
    description:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vel justo arcu. Aliquam laoreet mi sit amet augue porta, ac euismod massa ultrices. Curabitur ex dui, dignissim fringilla finibus eu, sagittis vel nibh.",
  },
];

export const articles = [
  {
    id: 1,
    title: "Onboarding 101: Getting Started with Lorem Ipsum",
    helpfulCount: 56,
  },
  {
    id: 2,
    title: "Navigating the Dashboard: Key Features Explained",
    helpfulCount: 25,
  },
  {
    id: 3,
    title: "Integrating Lorem Ipsum with Other Software",
    helpfulCount: 23,
  },
  {
    id: 4,
    title: "Troubleshooting Common Issues in",
    helpfulCount: 19,
  },
];

export const categories = [
  {
    title: "Getting Started",
    description:
      "Donec augue augue, gravida eu enim sed, scelerisque maximus magna.",
    articles: 8,
    icon: Rocket,
  },
  {
    title: "Product Guide",
    description: "Nam ex ante, suscipit nec purus sed, varius dapibus magna.",
    articles: 28,
    icon: Monitor,
  },
  {
    title: "Integrations",
    description: "Integer et magna aliquam, aliquam mi at, fringilla libero.",
    articles: 12,
    icon: Wrench,
  },
  {
    title: "Collaboration",
    description:
      "Maecenas tempus non dolor a viverra. Nulla placerat rutrum interdum.",
    articles: 8,
    icon: Users,
  },
  {
    title: "Billing & Subscription",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    articles: 4,
    icon: DollarSign,
  },
  {
    title: "Developers & APIs",
    description:
      "Suspendisse tristique, ex vitae semper placerat, odio dolor varius mi, eu gravida purus tortor et dolor.",
    articles: 23,
    icon: Code,
  },
  {
    title: "Support & Troubleshooting",
    description:
      "Aliquam felis urna, consequat id velit a, ultricies luctus nibh.",
    articles: 3,
    icon: LifeBuoy,
  },
  {
    title: "Best Practices",
    description:
      "Aenean vehicula ultrices ligula, non porta libero imperdiet sit amet.",
    articles: 12,
    icon: Lightbulb,
  },
  {
    title: "Resources",
    description:
      "Vivamus felis nunc, pellentesque ac quam a, ullamcorper interdum erat.",
    articles: 35,
    icon: BookOpen,
  },
];
