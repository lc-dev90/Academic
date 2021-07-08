import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "doe_john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane_doe@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
