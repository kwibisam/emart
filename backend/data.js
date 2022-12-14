import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'kela',
      email: 'admin@devs.startup',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'mela',
      email: 'mela@devs.startup',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: 1,
      name: 'short sleeve polo',
      slug: 'short-sleeve-polo',
      category: 'shirts',
      image: '/images/p2.jpg',
      price: 120,
      qtyInStock: 40,
      brand: 'Polo',
      rating: 4.5,
      numReviews: 10,
      description: 'Mens polo shirt',
    },

    {
      // _id: 2,
      name: 'leather oversize jacket',
      slug: 'leather-oversize-jacket',
      category: 'jackets',
      image: '/images/p3.jpg',
      price: 120,
      qtyInStock: 0,
      brand: 'polo',
      rating: 4.5,
      numReviews: 10,
      description: 'jacket with longsleeves',
    },

    {
      // _id: 3,
      name: 'pullover hoodie',
      slug: 'pullover-hoodie',
      category: 'hoodies',
      image: '/images/p4.jpg',
      price: 120,
      qtyInStock: 40,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'awesome hoodie',
    },
    {
      // _id: 4,
      name: 'black hoodie',
      slug: 'black-hoodie',
      category: 'hoodies',
      image: '/images/p5.jpg',
      price: 120,
      qtyInStock: 40,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'nikes sports wear',
    },
  ],
};
export default data;
