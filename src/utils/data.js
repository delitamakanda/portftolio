const calculateWorkLength = (startMonth, endMonth) => {
    let months = (new Date(endMonth).getFullYear() - new Date(startMonth).getFullYear()) * 12;
    months -= new Date(startMonth).getMonth() + 1;
    months += new Date(endMonth).getMonth()
    return months <= 0? 0 : months;
};

const EXPERIENCES = [
    {
        id: '1',
        img: 'https://media.licdn.com/dms/image/C4D0BAQGVkgG25rjPZg/company-logo_100_100/0/1631323707965?e=1714608000&v=beta&t=LY1cFAKwCxqmSFLiq9gjA0RO2LKI8dW9jSabbbcHhQA',
        title: 'Développeuse front-end',
        company: 'Activ Browser Technology',
        location: 'Guyancourt',
        dates: 'juil. 2017 - Present',
        workLength: '',
        tasks: [
            'Développement full-stack (ColdFusion, jQuery, Vue.js, Angular) et mobile (Ionic)',
'Développement d’APIs REST et de webservices',
'Maintenance évolutive et support applicatif sur les applications existantes du Digital',
'Mise en place d’outils CSS pour faciliter la reprise d’un projet',
'Développement front-end d\'un module de gestion de stands pour la restauration collective',
'Implémentation de tags analytics pour le marketing',
'Développement front-end d\'un module de retypage de plateaux repas',
'Web app de commande de repas (HTML, SCSS, Angular 12, Material Design)',
'Tests unitaires (jest, karma)',
'Assistance à la mise en place d\'un outil de flux de travail de fusion destinée à la livraison continue et est basé sur les branches GIT de fonctionnalités (git-octopus).',
'Surveillance des infrastructures Coldfusion et Frontend via un système de logs et de monitoring (Application Insights)',
'Maintenance des applications permettant l\'encaissement automatique des repas avec badge (C# et Ionic)',
        ],
        skills: ['SCSS', 'Git', 'Gulp', 'HTML/CSS', 'jQuery', 'SQL', 'Cordova','Coldfusion', 'Angular', 'C#', 'Ionic', 'Vue', 'SVN']
    },
    {
        id: '2',
        img: 'https://media.licdn.com/dms/image/C4D0BAQGVkgG25rjPZg/company-logo_100_100/0/1631323707965?e=1714608000&v=beta&t=LY1cFAKwCxqmSFLiq9gjA0RO2LKI8dW9jSabbbcHhQA',
        title: 'Développeuse front-end',
        company: 'Activ Browser Technology',
        location: 'Boulogne - Billancourt',
        dates: 'nov. 2016 - Present',
        workLength: '',
        tasks: [
            ' Intégration de maquettes en HTML/CSS',
            'Mise en place d’outils CSS et d’une liste de variables pour faciliter la reprise d\' un projet',
            'Tests de compatibilité navigateurs',
            'Développement front jQuery',
        ],
        skills: ['SCSS', 'Git', 'Gulp', 'HTML/CSS', 'jQuery', 'Magento']
    },
    {
        id: '3',
        img: 'https://media.licdn.com/dms/image/C560BAQEyAZ6xHEkoCw/company-logo_100_100/0/1631340573686?e=1714608000&v=beta&t=s0jscfvjI4h6lahtU2HKKcMp--qnEH4lorUGpPMVDUc',
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
        id: '4',
        img: 'https://media.licdn.com/dms/image/C4E0BAQHQ7y_qNa7wcQ/company-logo_100_100/0/1662967938153/prodata_consult_30899_logo?e=1714608000&v=beta&t=6kxTPf-sJuWbV0nNSIZCaz5hQqQRcw_Jb-jpApoMP54',
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
        id: '5',
        img: 'https://media.licdn.com/dms/image/C4D0BAQEPYoS6NXYefw/company-logo_100_100/0/1630473954665/neolynk_logo?e=1714608000&v=beta&t=kesadLG7PFFUJhFia7qqZb9myFXZUqP-HnsRPpJjFQ4',
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
        id: '6',
        img: 'https://static.licdn.com/aero-v1/sc/h/aajlclc14rr2scznz5qm2rj9u',
        title: 'Intégratrice web',
        company: 'Europharma',
        location: 'Issy - les - moulineaux',
        dates: 'janv. 2010 - mai 2015',
        workLength: '',
        tasks: [
'Intégration et mise en page de formations e-learning destinées aux laboratoires pharmaceutiques',
        ],
        skills: ['html/css', 'scss', 'php', 'Flash', 'jQuery', 'dojo', 'mootools']
    }
]

const EDUCATION = [
    {
        id: '1',
        img: 'https://media.licdn.com/dms/image/C4E0BAQET0MXVeWRmDw/company-logo_100_100/0/1662978520926/f2i_logo?e=1714608000&v=beta&t=s7e8dEMyeJtxOcDwMl1FnCTR-_K1e4__U5zpaGPkrb8',
        school: 'Institut F2I',
        study: 'Titre certifié niveau III Concepteur de supports de communication filière Webdesign',
        dates: '2009 - 2010',
    }
]

export { EXPERIENCES, EDUCATION }
