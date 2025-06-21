// Example usage in a grid
import { ReaderCart } from "./cart/ReaderCart";

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "San Francisco, USA",
    image: "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
    testimonial:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    name: "Raj Patel",
    location: "Mumbai, India",
    image: "https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg",
    testimonial:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.",
  },
  {
    name: "Emily Adams",
    location: "London, UK",
    image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    testimonial:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    name: "Alan Jackson",
    location: "Houston, USA",
    image: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&h=276.25&fit=crop&w=308.75&dpr=1",
    testimonial:
      "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view.",
  },
  {
    name: "Jessica Miller",
    location: "Boston, USA",
    image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    testimonial:
      "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
  {
    name: "Diego Lopez",
    location: "Barcelona, Spain",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewperformance1-697509.jpg&fm=jpg ",
    testimonial:
      "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
  },
];

export default function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <ReaderCart key={i} {...t} />
      ))}
    </div>
  );
}