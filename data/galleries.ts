import type { Gallery } from "@/types/gallery";

export const galleries: Gallery[] = [
  {
    id: 1,
    title: "Abstract Expressions",
    url: "https://example.com/abstract",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200",
    collapsedState: "text-white font-bold text-lg writing-mode-vertical transform -rotate-90 whitespace-nowrap tracking-wider",
    expandedState: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",
  },
  {
    id: 2,
    title: "Nature's Canvas",
    url: "https://example.com/nature",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200",
    collapsedState: "text-white font-bold text-lg writing-mode-vertical transform -rotate-90 whitespace-nowrap tracking-wider",
    expandedState: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",
  },
  {
    id: 3,
    title: "Urban Stories",
    url: "https://example.com/urban",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200",
    collapsedState: "text-white font-bold text-lg writing-mode-vertical transform -rotate-90 whitespace-nowrap tracking-wider",
    expandedState: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",
  },
  {
    id: 4,
    title: "Храм Пяти Рассветов",
    url: "https://temple-five-dawns.vercel.app",
    image: "https://raw.githubusercontent.com/alexzedim/cmnw.xyz/refs/heads/master/public/images/queen.png",
    collapsedState: "text-amber-200 font-bold text-lg writing-mode-vertical transform -rotate-90 whitespace-nowrap tracking-wider",
    expandedState: "text-4xl md:text-5xl font-bold text-amber-200 mb-4 leading-tight",
  },
  {
    id: 5,
    title: "Minimalist Forms",
    url: "https://example.com/minimalist",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200",
    collapsedState: "text-white font-bold text-lg writing-mode-vertical transform -rotate-90 whitespace-nowrap tracking-wider",
    expandedState: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight",
  }
];
