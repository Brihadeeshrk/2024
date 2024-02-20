export default defineAppConfig({
  alpine: {
    title: "My prospects for 2024: Brihadeesh R K",
    description: "A notebook of my learnings in 2024",
    image: {
      src: "/card.png",
      alt: "My prospects for 2024: Brihadeesh R K",
      width: 400,
      height: 300,
    },
    header: {
      position: "right", // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg", // path of the logo
        pathDark: "/logo-dark.svg", // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "alpine", // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: "https://www.github.com/Brihadeeshrk/2024", // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: "left", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "", // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "",
      instagram: "",
      linkedin: {
        icon: "uil:linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/brihadeeshrk",
      },
    },
  },
});
