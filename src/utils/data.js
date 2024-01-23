const calculateWorkLength = (startMonth, endMonth) => {
    let months = (new Date(endMonth).getFullYear() - new Date(startMonth).getFullYear()) * 12;
    months -= new Date(startMonth).getMonth() + 1;
    months += new Date(endMonth).getMonth()
    return months <= 0? 0 : months;
};

const EXPERIENCES = [
    {
        img: 'https://media.licdn.com/dms/image/C4D03AQ',
        title: 'Développeur Full Stack',
        company: 'Général',
        location: 'Paris',
        dates: '2017 - Present',
        desc: 'Développeur Full Stack, développeur web, développeur mobile, développeur full stack',
        workLength: `${calculateWorkLength(new Date(2017, 7, 1), new Date())} mois`,
        tasks: [
            'Développeur Full Stack',
            'Développeur web',
            'Développeur mobile',
            'Développeur full stack',
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express',]
    },
    {
        img: 'https://media.licdn.com/dms/image/C4D03AQ',
        title: 'Développeur Full Stack',
        company: 'Général',
        location: 'Paris',
        dates: '2017 - Present',
        desc: 'Développeur Full Stack, développeur web, développeur mobile, développeur full stack',
        workLength: `${calculateWorkLength(new Date(2017, 7, 1), new Date())} mois`,
        tasks: [
            'Développeur Full Stack',
            'Développeur web',
            'Développeur mobile',
            'Développeur full stack',
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express',]
    }
]

const EDUCATION = [
    {
        img: 'https://media.licdn.com/dms/image/C4D03AQ',
        school: 'IEF2I',
        study: 'Développeur Full Stack',
        dates: '2009 - 2010',
    }
]

export { EXPERIENCES, EDUCATION }
