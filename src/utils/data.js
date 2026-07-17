const calculateWorkLength = (startMonth, endMonth) => {
    let months = (new Date(endMonth).getFullYear() - new Date(startMonth).getFullYear()) * 12;
    months -= new Date(startMonth).getMonth() + 1;
    months += new Date(endMonth).getMonth()
    // si plus de 12 mois, on affiche le nombre d'années et de mois
    if (months >= 12) {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return `${years} an${years > 1 ? 's' : ''} et ${remainingMonths}`;
    }
    return months <= 0? 0 : months;
};

const EXPERIENCES = [
    {
        id: '1',
        img: 'https://media.licdn.com/dms/image/v2/C4E0BAQFdSPFzWWPyEA/company-logo_200_200/company-logo_200_200/0/1630594613647/davidson_consulting_logo?e=2147483647&v=beta&t=7P3STQtrOplrT5iNw-Qxh7cuy0k4I1YmC7kjukBDms0',
        title 'Consultante Développeur Angular .NET',
        company: 'Davidson Consulting',
        location: 'Guyancourt / Boulogne - Billancourt',
        dates: 'depuis juil. 2017',
        workLength: `${calculateWorkLength(new Date(2026, 7, 15), new Date())} mois`,
        tasks: []
    },
    {
        id: '2',
        img: 'https://media.licdn.com/dms/image/v2/C4E0BAQGUhUhx65EoAw/company-logo_200_200/company-logo_200_200/0/1630621054198/axiv_it_group_logo?e=2147483647&v=beta&t=QA8-zF4fJ1EGRa0Yv7tz30_22jbM48CSHBRuQ8QtZe8',
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
        img: 'https://media.licdn.com/dms/image/v2/C4E0BAQGUhUhx65EoAw/company-logo_200_200/company-logo_200_200/0/1630621054198/axiv_it_group_logo?e=2147483647&v=beta&t=QA8-zF4fJ1EGRa0Yv7tz30_22jbM48CSHBRuQ8QtZe8',
        title: 'Développeuse front-end',
        company: 'AXIV IT GROUP',
        location: 'Guyancourt / Boulogne - Billancourt',
        dates: `${calculateWorkLength(new Date(2016, 10, 1), new Date())} mois`,
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
        img: 'https://media.licdn.com/dms/image/v2/D4D0BAQGhrWV7ygFFcg/company-logo_200_200/B4DZecbP2NH4AI-/0/1750676078500/emagine_logo?e=2147483647&v=beta&t=V3Bw3T2LonRqcACRfvf-J3zqVcII4iNhqMkHab5qX0U',
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
EXPERIENCES[1] = EXPERIENCES.splice(0, 1, EXPERIENCES[1])[0];


const EDUCATION = [
    {
        id: '1',
        img: 'data:image/jpeg;base64,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',
        school: 'Institut F2I',
        study: 'Titre certifié niveau III Concepteur de supports de communication filière Webdesign',
        dates: '2010 - 2011',
    }
]

export { EXPERIENCES, EDUCATION }
