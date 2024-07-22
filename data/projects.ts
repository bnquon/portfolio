export type Project = {
    name: string;
    description: string;
    technologies: string;
    liveSiteURL: string | null;
    githubURL: string | null;
    image: string;
}

export const projects: Project[] = [
    {
        name: "SFU Club Website",
        description: "A website for the SFU Gaming and Esports Club that has over 3800 members.",
        technologies: "Next.js, React.js, TypeScript, Tailwind CSS",
        liveSiteURL: "https://sfuea.vercel.app/",
        githubURL: "https://github.com/bnquon/SFUEA",
        image: "/SfuEAThumbnail.webp"
    },

    {
        name: "Astral Adventure",
        description: "A Java space maze based game with multiple levels and different enemies.",
        technologies: "Java, JUnit, Processing",
        liveSiteURL: null,
        githubURL: null,
        image: "/AstralAdventureThumbnail.webp"
    },

    {
        name: "CineVerse",
        description: "A full-stack web-app where users can search for movies and other users, and review movies.",
        technologies: "React.js, JavaScript, Node.js, PostgreSQL",
        liveSiteURL: "https://bquoncineverse.vercel.app/",
        githubURL: "https://github.com/bnquon/CineVerse",
        image: "/CineVerseThumbnail.webp"
    },

    {
        name: "FitFolio",
        description: "A full-stack web-app where users can track their fitness goals and track their running and weightlifting sessions.",
        technologies: "JavaScript, Node.js, Express.js, MySQL",
        liveSiteURL: null,
        githubURL: "https://github.com/bnquon/FitFolio-Local",
        image: "/FitFolioThumbnail.webp"
    },
]