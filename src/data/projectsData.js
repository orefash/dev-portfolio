import one from '../assets/png/biznewz2.png'
import two from '../assets/png/smr2.png'
import three from '../assets/png/primepay.png'
import four from '../assets/png/chat2chop.png'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'BizNewz',
        projectDesc: 'Daily curated nigerian business news from popular news sites.',
        tags: ['React', 'Postgresql', 'Node.js', 'Heroku'],
        code: 'https://github.com/orefash/biznewz-web',
        demo: 'https://biznewz-web.vercel.app/',
        image: one
    },
    
    {
        id: 3,
        projectName: 'Instant Loan Application Chatbot',
        projectDesc: 'Grant instant loans to customers at store checkout or for personal use through automated conversations on whatsapp, Instagram and Facebook',
        tags: ['Nodejs', 'Express', 'Mongodb', 'Meta APIs'],
        code: 'https://github.com/orefash/loan-app',
        demo: 'https://www.instagram.com/prime.pay/',
        image: three
    },
    {
        id: 4,
        projectName: 'Chat2Chop - Food Ordering Chatbot',
        projectDesc: 'Customers view the menu, place orders, make payments and track orders from the Facebook messenger chat',
        tags: ['Nodejs', 'Postgresql', 'Express', 'Meta Developer APIs'],
        code: 'https://github.com/orefash/amaka-app',
        demo: 'https://m.me/100878724785586',
        image: four
    },
    {
        id: 2,
        projectName: 'Student Medicals Manager',
        projectDesc: 'This project is a app built for school nurses to track medical history and medications of students',
        tags: ['Sqlite', 'Nodejs', 'HTML', 'CSS'],
        code: 'https://github.com/orefash/Student-Medical-Register',
        demo: 'https://crc-clinic.glitch.me/',
        image: two
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/