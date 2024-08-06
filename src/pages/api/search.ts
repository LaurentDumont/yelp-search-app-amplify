// src/pages/api/search.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { q } = req.query;

    const allResults = [
        'Fine-tuning AWS ASGs with Attribute Based Instance Selection',
        'Moderating Inappropriate Video Content at Yelp',
        'Phone Number Masking for Yelp Services Projects',
        'CHAOS: Yelp\'s Unified Framework for Server - Driven UI',
        'Keeping track of engineering-wide goals and migrations',
        'Yelp\'s AI pipeline for inappropriate language detection in reviews',
        'Building data abstractions with streaming at Yelp',
        'Coordinator - The Gateway For Nrtsearch',
        'Lessons from A/B Testing on Bandit Subjects',
        'Spark Data Lineage',
        'Android in Analytics Infra',
        'Writing Emails Using React',
        'Migrating from Styleguidist to Storybook',
        'A Simply, Ordinary Reduction',
        'Data Sanitization with Vitess',
        'Beyond Matrix Factorization: Using hybrid features for user-business recommendations',
        'Kafka on PaaSTA: Running Kafka on Kubernetes at Yelp (Part 2 - Migration)',
        'Server Side Rendering at Scale',
        'Developing a New Native Ads Dashboard Using Server-Driven UI',
        'Kafka on PaaSTA: Running Kafka on Kubernetes at Yelp (Part 1 - Architecture)',
        'Building a unified setup flow to better onboard business users',
        'Building a server-driven foundation for mobile app development',
        'Awesome Women in Engineering Hosts its First Virtual Summit',
        'Nrtsearch: Yelp\'s Fast, Scalable and Cost Effective Search Engine',
        'Engineering Career Series: Building a thriving engineering team',
        'Engineering Career Series: Fostering inclusion & belonging within Yelp Engineering',
        'Engineering Career Series: Ensuring Pay Equity & Career Progression in Yelp Engineering',
        'Why Yelp\'s hiring strategy in Canada no longer requires being in an office',
        'Analyzing Experiments with Changing Cohort Allocations',
        'Engineering Career Series: How we think about engineering management',
        'Engineering Career Series: Technical Leadership at Yelp',
        'Modernizing Business Data Indexing',
        'Engineering Career Series: Career paths for engineers at Yelp',
        'Engineering Career Series: How we onboard engineers across the world at Yelp',
        'Moderating Promotional Spam and Inappropriate Content in Photos at Scale at Yelp',
        'Engineering Career Series: Using structured interviews to improve equity',
        'One year later: building Trust Levels during COVID',
        'Engineering Career Series: Hiring a diverse team by reducing bias',
        'Engineering Career Series: Building a happy, diverse, and inclusive engineering team',
        'Powering Messaging Enabledness with Yelp\'s Data Infrastructure',
        'Passwordless Login: Reengaging Business Owners with Less Friction',
        'Boosting user conversion with UX performance wins',
        'Whose Code is it Anyway?',
        'Now You See Me: How NICE and PDQ plots Uncover Model Behaviors Hidden by Partial Dependence Plots',
        'Orchestrating Cassandra on Kubernetes with Operators',
        'Tales of a Mobile Developer on Consumer Growth',
        'Minimizing read-write MySQL downtime',
        'Introducing Folium: Enabling Reproducible Notebooks at Yelp',
        'Flink on PaaSTA: Yelp\'s new stream processing platform runs on Kubernetes',
        'The Dream Query: How we scope projects with GraphQL',
    ];

    const filteredResults = allResults.filter((item) =>
        item.toLowerCase().includes((q as string).toLowerCase())
    );

    res.status(200).json({ results: filteredResults });
}