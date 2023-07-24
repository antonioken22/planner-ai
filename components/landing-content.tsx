"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Kenette John",
    avatar: "KJ",
    title: "Computer Engineer",
    description: "I'm speechless.",
  },
  {
    name: "Justin Jam",
    avatar: "JJ",
    title: "Computer Engineer",
    description: "Best productivity app, ever.",
  },
  {
    name: "Khent",
    avatar: "K",
    title: "Computer Engineer",
    description: "How come I've only discovered this now?",
  },
  {
    name: "Hendzie",
    avatar: "H",
    title: "Computer Engineer",
    description: "It's such a life saver.",
  },
  {
    name: "Kurt",
    avatar: "K",
    title: "Computer Engineer",
    description: "I have so much fun with it!",
  },
  {
    name: "John Lester",
    avatar: "JL",
    title: "Computer Engineer",
    description: "Team Semblantech, FTW!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-maroon-900 border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
