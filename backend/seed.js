require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/Post');

const basePosts = [
  { imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', tag: 'Product updates', title: 'Updates to our Professional Community Policies', author: 'Admin', date: '2023-11-06' },
  { imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', tag: 'Trust and Safety', title: "Updates to LinkedIn's Terms of Service", author: 'Blake Lawit', date: '2024-09-18' },
  { imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', tag: 'Platform Information', title: "Sharing LinkedIn's Responsible AI Principles", author: 'Blake Lawit', date: '2023-02-22' },
  { imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', tag: 'Member stories', title: 'Mythbusting the Feed: How We Work to Address Bias', author: 'Imani Dunbar', date: '2022-11-01' },
  { imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', tag: 'Creators', title: 'New LinkedIn profile features help verify identity, detect and...', author: 'Oscar Rodriguez', date: '2022-10-25' },
  { imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', tag: 'Product updates', title: 'Mythbusting the Feed: How the Algorithm Works', author: 'Manisha Sharma', date: '2022-08-18' },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Successfully connected to MongoDB. Deleting existing data to avoid duplicates...');
    await Post.deleteMany({});

    const mockPosts = Array.from({ length: 95 }, (_, index) => {
      const base = basePosts[index % basePosts.length];
      return {
        title: `${base.title}`,
        slug: `post-${index + 1}-${Date.now()}`, // Create a unique fake URL
        content: `Detailed content of post number ${index + 1}`,
        author: base.author,
        tag: base.tag,
        imageUrl: base.imageUrl,
        createdAt: new Date(base.date)
      };
    });

    await Post.insertMany(mockPosts);
    console.log('Success!');
    process.exit();
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });