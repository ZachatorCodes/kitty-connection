# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "faker"

puts "_______________"
puts "Seeding Shelters 🏠"

Shelter.create!([
  {
    name: "Silly Kitty Cat Rescue",
    city: Faker::Address.city
  },
  {
    name: "The Cat Cave",
    city: Faker::Address.city
  },
  {
    name: "The Taj Meowhall",
    city: Faker::Address.city
  },
  {
    name: "Bunky Bunk's Kitty Coalition",
    city: Faker::Address.city
  },
  {
    name: "Big-Ass-Cat Adoption Center",
    city: Faker::Address.city
  },
  {
    name: "Fancy Fur Kitten Clinic",
    city: Faker::Address.city
  },
  {
    name: "Fresh Paws Feline Adoption",
    city: Faker::Address.city
  },
  {
    name: "The Paw Pack",
    city: Faker::Address.city
  },
  {
    name: "Golden Ribbon Cat Rescue",
    city: Faker::Address.city
  },
  {
    name: "Caged Critters Cat Center",
    city: Faker::Address.city
  }
])

puts "Done Seeding Shelters ✅"
puts "_______________"
puts "Seeding Users 🧑"

User.create!([
  {
    first_name: "Test",
    last_name: "Test",
    email: "test@test.com",
    username: "test",
    password: "test",
    password_confirmation: "test",
    bio: "I'm the test user!"
  },
  {
    first_name: "Chunky",
    last_name: "Bunky",
    email: "chunkybunky@bunk.com",
    username: "ChunkyBunky",
    password: "bunkypassword123",
    password_confirmation: "bunkypassword123",
    bio: "I'm a cat who's all about that!"
  },
  {
    first_name: "Banjo",
    last_name: "Kazooie",
    email: "bearandbird@n64.com",
    username: "BearAndBird",
    password: "bestbeararound64!",
    password_confirmation: "bestbeararound64!",
    bio: "I like to think I'm better than Mario."
  }
])

puts "Done Seeding Users ✅"
puts "_______________"
puts "Seeding Cats 🐱"

50.times do
  Cat.create!(
    {
      name: Faker::FunnyName.name,
      age: rand(0..15),
      sex: rand(1..2),
      shelter_id: rand(1..10)
    }
  )
end

puts "Done Seeding Cats ✅"
puts "_______________"
puts "Seeding Applications 📋"

10.times do
  Application.create!(
    {
      user_id: rand(1..3),
      cat_id: rand(1..50)
    }
  )
end

puts "Done Seeding Applications ✅"
puts "_______________"
