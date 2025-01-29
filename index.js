import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Home page displaying all blogs
app.get("/", (req, res) => {
  res.render("index.ejs", { blogList });
});

// Display the blog creation form
app.get("/create", (req, res) => {
  res.render("create.ejs");
});

// Adds a new blog post
app.post("/submit", (req, res) => {
  blogList.unshift({
    title: req.body["title"],
    author: req.body["author"],
    content: req.body["content"]
  })
  res.redirect(`/blog/${0}`);
});

// Displays an individual blog post
app.get("/blog/:id", (req, res) => {
  const blogId = req.params.id;
  const blogPost = blogList[blogId];

  if (blogPost) {
    res.render("blog.ejs", {blogPost, blogId});
  } else {
    res.status(404).send("Blog post not found");
  }
});

// Display the edit form for a blog post
app.get("/blog/:id/edit", (req, res) => {
  const blogId = req.params.id;
  const blogPost = blogList[blogId];
  
  if (blogPost) {
    res.render("edit.ejs", {blogPost, blogId});
  } else {
    res.status(404).send("Blog post not found.")
  }
});

// Update an existing blog post
app.post("/blog/:id/edit/submit", (req, res) => {
  const blogId = req.params.id;
  const { title, author, content } = req.body;

  // Find the blog post in the array by ID
  const blogPost = blogList[blogId];

  if (blogPost) {
    // Update the blog post with the new data from the form
    blogPost.title = title;
    blogPost.author = author;
    blogPost.content = content;

    // Redirect to the updated blog post page
    res.redirect(`/blog/${blogId}`);
  } else {
    res.status(404).send("Blog post not found.");
  }
});

// Deletes a blog post
app.post("/blog/:id/delete", (req, res) => {
  const blogId = req.params.id;

  if (blogList[blogId]) {
    blogList.splice(blogId, 1);
    // Redirect back to the home page after deletion
    res.redirect("/");
  } else {
    res.status(404).send("Blog post not found.");
  }
});

app.listen(port, (req, res) => {
  console.log("Running on port", port);
});

const blogList = [
  {
    title: "The Power of Consistency in Achieving Success",
    author: "John Doe",
    content: "Success isn't achieved overnight. It's a journey, not a destination, and the secret ingredient is consistency. Whether it's learning a new skill, building a career, or maintaining a healthy lifestyle, showing up every day matters more than the occasional grand effort. Consistency builds habits, and habits shape our lives. A small action repeated daily becomes a force multiplier, gradually leading to significant results. For example, spending just 30 minutes a day coding, designing, or learning can amount to over 180 hours a year of self-improvement! The key is to start small and stay patient. Results may not be visible immediately, but like planting a tree, your efforts will bear fruit with time. Remember, consistency compounds, and in the end, it's those who stay the course who reap the rewards. So, whatever your goals may be, stay consistent and keep moving forward. Your future self will thank you."
  },
  {
    title: "Top 5 Pokémon Every Trainer Regrets Underestimating",
    author: " Professor LOL",
    content: "Let’s face it—some Pokémon look cute and harmless, but they’re secretly out to ruin your day. Take Magikarp, for example. It might be the floppy fish we all joke about, but evolve it into Gyarados, and suddenly you’ve got a fearsome sea dragon that will destroy your team in seconds. Then there’s Jigglypuff, the singing puffball that lulls you to sleep and leaves you with a doodled-on face. Not as innocent as it seems, huh? Sudowoodo may look like just a tree blocking your path, but once you battle it, you realize it’s a Rock-type with moves like Counter that’ll leave you rethinking your strategy. Wobbuffet, the blue blob, might seem harmless, but its Counter and Mirror Coat moves reflect any attack right back at you, turning your strongest Pokémon against you. And let’s not forget Ditto, the pink puddle of transformation—it copies your best Pokémon, making it a terrifying, unpredictable opponent that can catch you off guard at the worst moment. So the next time you encounter a seemingly harmless Pokémon, remember that looks can be deceiving, and the real danger might just be lurking in plain sight, ready to hit you with a super effective surprise!"
  },
  {
    title: "Why Creative Breaks Boost Productivity",
    author: "Alex Martinez",
    content: "In a world driven by hustle culture, taking a break often feels like a guilty indulgence. But what if I told you that stepping away could actually make you more productive? <p>Our brains thrive on variety and creativity. When you spend hours grinding through tasks, your focus starts to wane, and mistakes become more frequent. Enter the concept of the 'creative break' — a short period where you let your mind wander, explore something new, or engage in an activity you love. Research shows that creative breaks can reset your mental energy and spark fresh ideas. Whether it is sketching, listening to music, or simply taking a walk, these moments of rest recharge your cognitive resources. It is no surprise that some of the greatest breakthroughs come during moments of relaxation. So, the next time you feel stuck or drained, resist the urge to push harder. Step away, engage in something creative, and watch how your productivity skyrockets when you return. Remember, breaks are not a luxury; they are a necessity."
  },
  {
    title: "The Hidden Benefits of Failure",
    author: "Sophia Reyes",
    content: "Failure is often seen as the end of the road, but in reality, it is a stepping stone to success. Some of the most successful people in history—think Thomas Edison, Oprah Winfrey, and Steve Jobs—experienced significant failures before reaching greatness. Failure teaches us lessons that success often cannot. It shows us our weaknesses, highlights areas for growth, and helps us build resilience. Each setback is an opportunity to refine our approach, learn something new, and grow stronger. The key is to reframe failure not as a defeat but as feedback. Ask yourself: What went wrong? What can I improve? How can I do better next time? The answers to these questions often hold the seeds of your future success. Remember, failure is not the opposite of success—it is part of the journey. Embrace it, learn from it, and keep moving forward. You are one step closer to achieving your goals."
  },
  {
    title: "What Pokémon Taught Us About Friendship and Adventure",
    author: "Ash Ketchum",
    content: "For many of us, Pokémon isn’t just a game or a show—it’s a cherished part of our childhood. But beyond catching, battling, and trading, Pokémon has always been about something deeper: friendship, growth, and the thrill of adventure. Think about it: every Trainer starts with one Pokémon partner. That bond is at the core of every journey. From Ash and Pikachu to your own in-game team, the lesson is clear—success is not about going alone; it is about teamwork and trust. Pokémon also teaches us resilience. Whether it is taking on a tough Gym Leader or encountering a wild Legendary Pokémon, every challenge makes us stronger. It is a reminder that setbacks are just part of the adventure, and every loss is a chance to learn. And let us not forget the spirit of exploration. Pokémon encourages us to step outside, discover new places, and connect with others. Whether you are wandering the tall grass in Kanto or battling Trainers in Galar, the world feels vast, exciting, and full of possibilities. So the next time you pick up your Poké Ball, remember: it is not just about being the very best. It is about the friends you make, the challenges you overcome, and the adventures you will never forget."
  }
];