const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

const userData = [
	{
		username: 'user1',
		email: 'user1@example.com',
		thoughts: [],
		friends: []
	},
	{
		username: 'user2',
		email: 'user2@example.com',
		thoughts: [],
		friends: []
	},
];
  
const thoughtData = [
	{
		thoughtText: 'This is a thought by user1',
		username: 'user1',
		reactions: []
	},
	{
		thoughtText: 'Another thought by user2',
		username: 'user2',
		reactions: []
	},
];

const seedDatabase = async () => {
	try {
		// Connect to the database
		await mongoose.connect('mongodb://localhost:27017/soshall', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		});

		// Clear the existing collections
		await Promise.all([User.deleteMany(), Thought.deleteMany()]);

		// Seed the user data
		const users = await User.create(userData);

		// Seed the thought data
		await Thought.create(thoughtData.map(thought => ({ ...thought, username: users[0]._id })));

		// Disconnect from the database
		await mongoose.disconnect();

		console.log('Seed data inserted successfully');
	} catch (error) {
		console.error(error);
	}
};
  
// Call the seed function to populate the database
seedDatabase();
  