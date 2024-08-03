const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Parul University",
        degree: "Diploma in Computer Engineering",
        detail:
          "Diploma in Computer Engineering from Parul Polytechnic institute, Gujarat, India.",
        year: "2018-2021",
      },
      {
        id: 1,
        title: "Fanshawe College",
        degree: "PG Diploma in Web Development & Internet Application",
        detail:
          "Completed PG Diploma in Web Development & Internet Application from Fanshawe College, London, Ontario, Canada .",
        year: "2022-2024",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Interactive Web Station, Vadodara, Gujarat, India",
        role: "Frontend Developer",
        desc: "Built ecommerce and blogging platforms, as well as various websites compatible across multiple platforms, utilizing JavaScript frameworks such as React.js and Angular, in conjunction with HTML5 and CSS3. ● Designed user interfaces as per client focus, incorporating graphical elements and visual components, employing design tools like Adobe Illustrator and Photoshop, resulting in a 20% increase in user engagement.",
        year: "2021 - 2022 ",
        location: "Vadodara, Gujarat",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
