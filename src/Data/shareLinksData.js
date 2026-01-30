const shareLinksData = [
  // ig
  {
    id: 1,
    title: "Instagram",
    icon: "ri-instagram-line",
    color: "#E1306C",
    order: 1,
    href: () => "https://www.instagram.com/", // IG tidak support direct share link
  },

  // salin link
  {
    id: 2,
    title: "Salin Link",
    icon: "ri-link",
    color: "#6B7280",
    order: 2,
  },

  // wa
  {
    id: 3,
    title: "WhatsApp",
    icon: "ri-whatsapp-line",
    color: "#25D366",
    order: 3,
    href: (url) => `https://wa.me/?text=${encodeURIComponent(url)}`,
  },

  // facebook
  {
    id: 4,
    title: "Facebook",
    icon: "ri-facebook-fill",
    color: "#1877F2",
    order: 4,
    href: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },

  // X
  {
    id: 5,
    title: "X (Twitter)",
    icon: "ri-twitter-x-line",
    color: "#000000",
    order: 5,
    href: (url) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
  },

  // X
  {
    id: 6,
    title: "X (Twitter)",
    icon: "ri-twitter-x-line",
    color: "#000000",
    order: 6,
    href: (url) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
  },

  // X
  {
    id: 7,
    title: "X (Twitter)",
    icon: "ri-twitter-x-line",
    color: "#000000",
    order: 7,
    href: (url) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
  },

  // X
  {
    id: 8,
    title: "X (Twitter)",
    icon: "ri-twitter-x-line",
    color: "#000000",
    order: 8,
    href: (url) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
  },

  // X
  {
    id: 9,
    title: "X (Twitter)",
    icon: "ri-twitter-x-line",
    color: "#000000",
    order: 9,
    href: (url) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
  },

  // X
  {
    id: 10,
    title: "X (Twitter)",
    icon: "ri-twitter-x-line",
    color: "#000000",
    order: 10,
    href: (url) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
  },
];

export default shareLinksData;
