export interface Post {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  thumbnail: string;
  publishedDate: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Benefits of Coconut Charcoal for Grilling',
    slug: 'benefits-coconut-charcoal-grilling',
    summary: 'Discover why coconut charcoal is becoming the preferred choice for grilling enthusiasts worldwide.',
    content: 'Coconut charcoal is renowned for its high heat output and long burning time, making it an excellent choice for grilling. Unlike traditional wood charcoal, it produces less ash, which means easier cleanup. Additionally, it burns cleaner with minimal smoke, ensuring a better experience for outdoor cooking. Our coconut charcoal is sourced sustainably from coconut shells, contributing to environmental conservation while delivering superior performance.',
    thumbnail: '/images/hero-placeholder.jpg',
    publishedDate: '2023-10-15',
  },
  {
    id: '2',
    title: 'How Coconut Oil Enhances Your Health and Beauty',
    slug: 'coconut-oil-health-beauty',
    summary: 'Learn about the versatile uses of coconut oil in cooking, skincare, and haircare.',
    content: 'Coconut oil is a natural powerhouse packed with medium-chain triglycerides (MCTs) that provide quick energy and support weight management. In cooking, it adds a delightful tropical flavor while being a healthier alternative to many vegetable oils. For beauty, coconut oil is a fantastic moisturizer for skin and hair, helping to combat dryness and promote a healthy glow. Its antimicrobial properties also make it a great addition to oral hygiene routines. Our pure, unrefined coconut oil ensures you get all these benefits in their most natural form.',
    thumbnail: '/images/hero-placeholder.jpg',
    publishedDate: '2023-09-20',
  },
  {
    id: '3',
    title: 'Sustainable Practices in Coconut Farming',
    slug: 'sustainable-coconut-farming',
    summary: 'Explore how sustainable farming practices are shaping the future of the coconut industry.',
    content: 'At Coconut Co., sustainability is at the heart of our operations. We partner with local farmers who use organic farming methods to cultivate coconuts without harmful pesticides. Crop rotation and intercropping techniques help maintain soil health, while water conservation practices ensure minimal environmental impact. By supporting fair trade, we also ensure that farmers receive fair compensation, fostering community development. Our commitment to sustainability not only preserves the environment but also guarantees high-quality products for our customers.',
    thumbnail: '/images/hero-placeholder.jpg',
    publishedDate: '2023-08-05',
  },
  {
    id: '4',
    title: 'Industrial Applications of Coconut Fiber',
    slug: 'industrial-coconut-fiber',
    summary: 'Understand the diverse uses of coconut fiber in manufacturing and construction.',
    content: 'Coconut fiber, also known as coir, is a versatile material extracted from coconut husks. Its strength and durability make it ideal for producing ropes, mats, and brushes. In construction, coir is used for erosion control and as a component in eco-friendly building materials. Additionally, it serves as a sustainable alternative to synthetic fibers in various industrial applications. Our high-quality coconut fiber is processed to meet stringent standards, ensuring reliability for all industrial needs.',
    thumbnail: '/images/hero-placeholder.jpg',
    publishedDate: '2023-07-10',
  },
];
