const calculateWorkLength = (startMonth, endMonth = new Date()) => {
    const start = new Date(startMonth);
    const end = new Date(endMonth);

    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months += end.getMonth() - start.getMonth();

    // Si le jour de fin est avant le jour de début, on est encore sur le mois précédent
    if (end.getDate() < start.getDate()) {
        months -= 1;
    }

    // si plus de 12 mois, on affiche le nombre d'années et de mois
    if (months >= 12) {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return `${years} an${years > 1 ? 's' : ''} et ${remainingMonths}`;
    }

    return months < 1 ? 1 : months;
};

const EXPERIENCES = [
    {
        id: '1',
        img: 'https://media.licdn.com/dms/image/v2/C4E0BAQFdSPFzWWPyEA/company-logo_200_200/company-logo_200_200/0/1630594613647/davidson_consulting_logo?e=2147483647&v=beta&t=7P3STQtrOplrT5iNw-Qxh7cu[...]',
        title: 'Consultante Développeur Angular .NET Python',
        company: 'Davidson Consulting',
        location: 'La Garenne Colombes / Boulogne - Billancourt',
        dates: 'depuis juil. 2026',
        workLength: `${calculateWorkLength(new Date(2026, 6, 15), new Date())} mois`,
        tasks: []
    },
    {
        id: '2',
        img: 'https://media.licdn.com/dms/image/v2/C4E0BAQGUhUhx65EoAw/company-logo_200_200/company-logo_200_200/0/1630621054198/axiv_it_group_logo?e=2147483647&v=beta&t=QA8-zF4fJ1EGRa0Yv7tz30_22jbM48[...]',
        title: 'Développeuse front-end',
        company: 'AXIV IT GROUP',
        location: 'Guyancourt / Boulogne - Billancourt',
        dates: 'juil. 2017 - Mars 2026',
        workLength: `${calculateWorkLength(new Date(2017, 6, 1), new Date(2026, 2, 31))} mois`,
        tasks: [
            'Développement full-stack (ColdFusion, jQuery, Vue.js, Angular) et mobile (Ionic)',
'Développement d’APIs REST et de webservices',
'Maintenance évolutive et support applicatif sur les applications existantes du Digital',
'Mise en place d’outils CSS pour faciliter la reprise d’un projet',
'Développement front-end d\'un module de gestion de stands pour la restauration collective',
'Implémentation de tags analytics pour le marketing',
'Développement front-end d\'un module de retypage de plateaux repas',
'Web app de commande de repas (HTML, SCSS, Angular 18, Material Design 3)',
'Tests unitaires (jest, karma)',
'Assistance à la mise en place d\'un outil de flux de travail de fusion destinée à la livraison continue et est basé sur les branches GIT de fonctionnalités (git-octopus).',
'Surveillance des infrastructures Coldfusion et Frontend via un système de logs et de monitoring (Application Insights)',
'Maintenance des applications permettant l\'encaissement automatique des repas avec badge (C# et Ionic)',
        ],
        skills: ['SCSS', 'Git', 'Gulp', 'HTML/CSS', 'jQuery', 'SQL', 'Cordova','Coldfusion', 'Angular', 'C#', 'Ionic', 'Vue.js', 'Azure Devops']
    },
    {
        id: '3',
        img: 'https://media.licdn.com/dms/image/v2/C4E0BAQGUhUhx65EoAw/company-logo_200_200/company-logo_200_200/0/1630621054198/axiv_it_group_logo?e=2147483647&v=beta&t=QA8-zF4fJ1EGRa0Yv7tz30_22jbM48[...]',
        title: 'Développeuse front-end',
        company: 'AXIV IT GROUP',
        location: 'Guyancourt / Boulogne - Billancourt',
        dates: `${calculateWorkLength(new Date(2016, 10, 2), new Date(2026, 6, 10))} mois`,
        workLength: '',
        tasks: [
            'Intégration de maquettes en HTML/CSS',
            'Mise en place d’outils CSS et d’une liste de variables pour faciliter la reprise d\' un projet',
            'Tests de compatibilité navigateurs',
            'Développement front jQuery',
            'Développement backend en coldfusion',
            'Maintenance évolutive et support applicatif sur les applications existantes',
        ],
        skills: ['SCSS', 'Git', 'Gulp', 'HTML/CSS', 'jQuery', 'Magento', 'fw1', 'Coldfusion', 'SQL', 'Mantis']
    },
    {
        id: '4',
        img: 'https://lestetesdepub.com/wp-content/uploads/2020/03/Group-47.png',
        title: 'Développeuse front-end',
        company: 'Lafinbox',
        location: 'Levallois - Perret',
        dates: 'mai 2016 - oct. 2016',
        workLength: `${calculateWorkLength(new Date(2016, 5, 2), new Date(2016, 10, 31))} mois`,
        tasks: [
'Développement front en React.JS de l\'application LaFinBox',
' Tests de compatibilité navigateur',
'Intégration HTML/CSS des mails et des notifications web',
        ],
        skills: ['React.JS', 'SCSS', 'Git', 'Cordova', 'Python', 'Gulp', 'Flux']
    },
    {
        id: '5',
        img: 'https://media.licdn.com/dms/image/v2/D4D0BAQGhrWV7ygFFcg/company-logo_200_200/B4DZecbP2NH4AI-/0/1750676078500/emagine_logo?e=2147483647&v=beta&t=V3Bw3T2LonRqcACRfvf-J3zqVcII4iNhqMkHab5qX[...]',
        title: 'Développeuse front-end',
        company: 'emagine Consulting France',
        location: 'Nanterre',
        dates: 'nov. 2015 - mai 2016',
        workLength: `${calculateWorkLength(new Date(2015, 11, 2), new Date(2016, 5, 2))} mois`,
        tasks: [
'Développement front en jQuery et angularJS 1 pour le site particuliers et entreprises, le site mobile et l\'application mobile',
'Intégration de campagnes marketing en HTML/CSS',
'Maintenance et correction des bugs',
'Implémentation de tags via la librairie JavaScript xiti pour analyses marketing'
        ],
        skills: ['jQuery', 'AngularJS', 'Git', 'Grunt', 'jQueryUI']
    },
    {
        id: '6',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvtWAwrLQtIuhuo0Ygh6ZiDdw4HaOeJXpJA&s',
        title: 'Développeuse front-end',
        company: 'Neolynk',
        location: 'Paris',
        dates: 'juin 2015 - oct. 2015',
        workLength: `${calculateWorkLength(new Date(2015, 6, 1), new Date(2015, 10, 30))} mois`,
        tasks: [
'Intégration de maquettes pour la refonte du site univadis.com en HTML/CSS',
'Tests de compatibilité navigateur',
'Développement front en jQuery et jQuery UI',
        ],
        skills: ['jQuery', 'Symfony 2', 'php', 'Gulp', 'scss']
    },
    {
        id: '7',
        img: 'https://static.licdn.com/aero-v1/sc/h/aajlclc14rr2scznz5qm2rj9u',
        title: 'Intégratrice web',
        company: 'Europharma',
        location: 'Issy - les - moulineaux',
        dates: `janv. 2010 - mai 2015`,
        workLength: `${calculateWorkLength(new Date(2010, 0, 1), new Date(2015, 4, 31))} mois`,
        tasks: [
'Intégration et mise en page de formations e-learning destinées aux laboratoires pharmaceutiques',
        ],
        skills: ['html/css', 'scss', 'php', 'Flash', 'jQuery', 'dojo', 'mootools']
    }
]
// experience id 2 must be on top of the list
// EXPERIENCES[1] = EXPERIENCES.splice(0, 1, EXPERIENCES[1])[0];


const EDUCATION = [
    {
        id: '1',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhASBxAWFRAVFRYZERIVEBcYFRgVGRYiFxkdFhYYICogJCAxHRoVIzEhJi0rLjouGCA/OD8sQygtLjcBCgoKDg0OGxAQGy0lHyUuLSstLS0tLSstLS0tLS0tLS0[...]',
        school: 'Institut F2I',
        study: 'Titre certifié niveau III Concepteur de supports de communication filière Webdesign',
        dates: '2010 - 2011',
    }
]

export { EXPERIENCES, EDUCATION }
