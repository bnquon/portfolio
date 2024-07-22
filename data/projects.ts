export type Project = {
    name: string;
    description: string;
    technologies: string;
    liveSiteURL: string | null;
    githubURL: string;
    image: string;
}

export const projects: Project[] = [
    {
        name: "SFU Club Website",
        description: "Lorem Ipsum",
        technologies: "Lorem Ipsum",
        liveSiteURL: "https://sfuea.vercel.app/",
        githubURL: "https://github.com/bnquon/SFUEA",
        image: "/SfuEAThumbnail.webp"
    },

    {
        name: "Astral Adventure",
        description: "Lorem Ipsum",
        technologies: "Lorem Ipsum",
        liveSiteURL: "https://sfuea.vercel.app/",
        githubURL: "https://github.com/bnquon/SFUEA",
        image: "/AstralAdventureThumbnail.webp"
    },

    {
        name: "CineVerse",
        description: "Lorem Ipsum",
        technologies: "Lorem Ipsum",
        liveSiteURL: "https://sfuea.vercel.app/",
        githubURL: "https://github.com/bnquon/SFUEA",
        image: "/CineVerseThumbnail.webp"
    },

    {
        name: "FitFolio",
        description: "Lorem Ipsum",
        technologies: "Lorem Ipsum",
        liveSiteURL: "https://sfuea.vercel.app/",
        githubURL: "https://github.com/bnquon/SFUEA",
        image: "/FitFolioThumbnail.webp"
    },
]