// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://JohnDogget:%21QAZ2wsx%23EDC4rfv@eshop.39chm.mongodb.net/test",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>",
  },
};

// `mongodb+srv://JohnDogget:${encodeURIComponent(
//       "!QAZ2wsx#EDC4rfv@eshop"
//     )}.39chm.mongodb.net/test`

// JohnDogget%3A!QAZ2wsx%23EDC4rfv
// mongodb+srv://JohnDogget:%21QAZ2wsx%23EDC4rfv@eshop.39chm.mongodb.net/test?authSource=admin&replicaSet=atlas-10llqh-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true

// npx mongoimport --uri mongodb+srv://JohnDogget:%21QAZ2wsx%23EDC4rfv@eshop.39chm.mongodb.net/ --collection products --type json --file ./public/products.json --jsonArray
