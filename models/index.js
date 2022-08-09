// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})
// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: "product", // Usure about this 
    unique: false,
  },
  as: 'category_products',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: "product_tag",
    unique: false,
  },
  as: 'product_tags',
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: "product_tag", 
    unique: false,
  },
  as: 'tag_products',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};