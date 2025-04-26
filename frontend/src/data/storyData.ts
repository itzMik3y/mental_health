export interface Story {
  id: number;
  slug: string;
  type: 'written' | 'video' | 'audio';
  imgSrc: string; // Placeholder path - needs actual image
  videoUrl?: string; // Placeholder path - needs actual video
  audioUrl?: string; // Placeholder path - needs actual audio
  videoPlaceholderBg?: string; // Tailwind class for background if video fails to load
  category: string;
  categoryColor: string; // Tailwind classes for category badge
  title: string;
  snippet: string; // Short preview text
  fullContent?: string; // Full story content for written stories, or description for video/audio
  avatarSrc: string; // Placeholder path - needs actual avatar image
  authorName: string;
  authorAge: number;
  featured: boolean;
  publishDate: string; // YYYY-MM-DD format
}

// --- Existing Stories Start ---
export const storyData: Story[] = [
  {
    id: 1,
    slug: 'finding-my-way-through-depression',
    type: 'written',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhnXKUwwzPt_WNT0ae6mYn8Ib0szPY9A37w&s',
    category: 'Depression',
    categoryColor: 'bg-purple-100 text-purple-800',
    title: 'Finding My Way Through Depression',
    snippet: '"Mi never think depression was real until it hit me like a hurricane. After mi lose mi job, everything just start spiral."',
    fullContent: `Mi name Sharna, and mi grow up inna Kingston. From mi small, everybody always call mi "the happy one" – always laughing, always dancing. Nobody never woulda guess what gwaan inside mi head. When mi lose mi job during the pandemic, everything crash. Mi couldn’t sleep, mi couldn’t eat, mi just sit down and stare at di wall whole day. Mi friends and family start to notice but dem never understand. One day, mi just decide seh mi can’t live like dis anymore. Mi walk into a clinic, and mi start therapy. It rough, mi nah lie, but little by little mi find back mi smile. Now mi tell mi story fi help others know depression real and help out deh.`,
    avatarSrc: 'https://www.alamy.com/pretty-jamaican-woman-18-to-20-watches-out-window-from-behind-curtain-image5520916.html?utm_source=chatgpt.com',
    authorName: 'Sharna M.',
    authorAge: 28,
    featured: true,
    publishDate: '2023-09-15'
  },
  {
    id: 2,
    slug: 'breaking-the-silence-on-anxiety',
    type: 'written',
    imgSrc: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/zkpJghL0P0.jpg',
    category: 'Anxiety',
    categoryColor: 'bg-blue-100 text-blue-800',
    title: 'Breaking the Silence on Anxiety',
    snippet: '"Every day is like walking on egg shells. The smallest weakness can make you a target. Mi had panic attacks for years, thinking..."',
    fullContent: `From primary school, everybody know mi as "Damian the achiever." Always getting the high marks, always winning the competitions. But behind all dat, mi always anxious. Mi heart beat fast every time mi have exam, mi feel like mi cyaan breathe. In university, it get worse. Mi start avoid class, mi grades drop. Mi never know what was wrong until one professor talk to mi and suggest counseling. That save mi life. Anxiety nuh mean yuh weak, it mean yuh human.`,
    avatarSrc: 'https://www.istockphoto.com/photos/black-man-nervous?utm_source=chatgpt.com',
    authorName: 'Damian R.',
    authorAge: 24,
    featured: true,
    publishDate: '2023-10-05'
  },
  {
    id: 3,
    slug: 'from-darkness-to-purpose',
    type: 'video',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAvJFu8G7NU5MFQKHmo5L15dmJcHBg5FYxg&s',
    videoUrl: 'https://youtu.be/CPLLrkKt9MM?si=0fl6eMjUghMKjP9X',
    videoPlaceholderBg: 'bg-emerald-200',
    category: 'Suicide Prevention',
    categoryColor: 'bg-green-100 text-green-800',
    title: 'From Darkness to Purpose',
    snippet: '"After mi brother suicide, mi decide fi talk bout mental health. Now mi help others find di help dem need."',
    fullContent: `In this powerful video, Marcus shares his journey after losing his younger brother to suicide five years ago. Di pain nearly destroy him, but him use dat pain fi fuel a mission to spread awareness bout mental health. Marcus start a community outreach program weh visit schools and churches fi talk bout suicide prevention. Him story reach many, and him inspire youth fi seek help and never give up.`,
    avatarSrc: 'https://www.alamy.com/stock-photo/jamaican-man-talking.html?utm_source=chatgpt.com',
    authorName: 'Marcus T.',
    authorAge: 35,
    featured: true,
    publishDate: '2023-08-21'
  },
  {
    id: 4,
    slug: 'school-pressure-and-mental-health',
    type: 'video',
    imgSrc: 'https://www.istockphoto.com/photos/stressed-student-in-exam?utm_source=chatgpt.com',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    videoPlaceholderBg: 'bg-blue-200',
    category: 'Youth Mental Health',
    categoryColor: 'bg-yellow-100 text-yellow-800',
    title: 'School Pressure and Mental Health',
    snippet: '"The pressure to perform well in school nearly broke me. Nobody understood how the stress was affecting mi mental health."',
    fullContent: `Tasha, a bright 19-year-old, shares her intense experience with academic pressure. Growing up, everybody expect her fi get straight A's and pass all CXC. But behind the good grades was sleepless nights, tears, and panic attacks. When Tasha finally talk to a counselor, she realise seh grades nuh define her worth. Now she advocate fi more support fi students in schools.`,
    avatarSrc: 'https://www.istockphoto.com/photos/stressed-student-in-exam?utm_source=chatgpt.com',
    authorName: 'Tasha K.',
    authorAge: 19,
    featured: false,
    publishDate: '2023-11-12'
  },
  {
    id: 5,
    slug: 'living-with-schizophrenia-in-rural-jamaica',
    type: 'audio',
    imgSrc: 'https://www.shutterstock.com/search/rural-jamaica?utm_source=chatgpt.com',
    audioUrl: '/audio/winston-story.mp3',
    category: 'Schizophrenia',
    categoryColor: 'bg-red-100 text-red-800',
    title: 'Living with Schizophrenia in Rural Jamaica',
    snippet: '"In mi community, dem call mi \'mad man\' for years. Nobody understand what schizophrenia is, and the nearest doctor was..."',
    fullContent: `In this audio testimonial, Winston bravely shares his lifelong experience with schizophrenia while living in a rural parish. Di stigma hard, di isolation worse. But with help from a visiting doctor and him family support, Winston manage fi control him condition and now help others in him village understand mental illness better.`,
    avatarSrc: 'https://www.shutterstock.com/search/rural-jamaica?utm_source=chatgpt.com',
    authorName: 'Winston J.',
    authorAge: 57,
    featured: false,
    publishDate: '2023-07-30'
  },
  {
    id: 6,
    slug: 'from-patient-to-provider',
    type: 'written',
    imgSrc: 'https://www.shutterstock.com/search/caribbean-doctor?utm_source=chatgpt.com',
    category: 'Healthcare Workers',
    categoryColor: 'bg-indigo-100 text-indigo-800',
    title: 'From Patient to Provider',
    snippet: '"After mi own battle with depression, mi decide to become a mental health nurse. Now mi help others who struggle like mi did..."',
    fullContent: `Dr. Lisa M. shares her personal journey from experiencing severe postpartum depression to becoming a licensed mental health professional. Her story shows how pain can transform into purpose, and how the right support can change lives.`,
    avatarSrc: 'https://www.shutterstock.com/search/caribbean-doctor?utm_source=chatgpt.com',
    authorName: 'Dr. Lisa M.',
    authorAge: 41,
    featured: false,
    publishDate: '2023-09-03'
  },
  {
    id: 7,
    slug: 'art-as-my-therapy',
    type: 'video',
    imgSrc: 'https://www.shutterstock.com/search/jamaican-culture?utm_source=chatgpt.com',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    videoPlaceholderBg: 'bg-pink-200',
    category: 'Creative Therapy',
    categoryColor: 'bg-pink-100 text-pink-800',
    title: 'Art as My Therapy',
    snippet: '"When mi couldn\'t afford therapy, mi turn to art. Every painting was a piece of mi trauma leaving mi body..."',
    fullContent: `This visually engaging video features Kendra, a young Jamaican artist, who turned to painting as a way to process complex emotions. She now hosts art therapy workshops for youth.`,
    avatarSrc: 'https://www.shutterstock.com/search/jamaican-culture?utm_source=chatgpt.com',
    authorName: 'Kendra B.',
    authorAge: 25,
    featured: false,
    publishDate: '2023-10-18'
  },
  {
    id: 8,
    slug: 'after-baby-blues-hit-hard',
    type: 'written',
    imgSrc: 'https://www.shutterstock.com/search/black-woman-looking-out-window?utm_source=chatgpt.com',
    category: 'Postpartum Depression',
    categoryColor: 'bg-rose-100 text-rose-800',
    title: 'After Di Baby Blues Hit Hard',
    snippet: '"Everybody expect mi fi be happy after mi first pickney born. But inside, mi feel empty, like mi drowning..."',
    fullContent: `Mi name Keisha. When mi find out mi pregnant wid mi first baby, mi overjoyed. But after mi give birth, mi feel numb. Mi cyaan bond with mi baby, mi just cry every night. Mi husband never understand. But mi reach out to a support group and slowly mi find mi way back.`,
    avatarSrc: 'https://www.shutterstock.com/search/black-woman-looking-out-window?utm_source=chatgpt.com',
    authorName: 'Keisha W.',
    authorAge: 22,
    featured: false,
    publishDate: '2024-01-20'
  },
  {
    id: 9,
    slug: 'man-fi-be-strong-burnout',
    type: 'video',
    imgSrc: 'https://www.shutterstock.com/search/nervous-black-man?utm_source=chatgpt.com',
    videoUrl: 'https://www.youtube.com/watch?v=example4',
    videoPlaceholderBg: 'bg-cyan-200',
    category: "Men's Mental Health",
    categoryColor: 'bg-cyan-100 text-cyan-800',
    title: '"Man Fi Be Strong": Burnout an Seeking Help',
    snippet: '"As a man in Jamaica, yuh cyaan show weakness. Mi work two job, stress pile up, but mi keep it lock inside till mi nearly collapse..."',
    fullContent: `In this candid video interview, Roy, a 45-year-old taxi driver and part-time construction worker, talks about the immense pressure Jamaican men face to appear strong. He shares how seeking help changed his life.`,
    avatarSrc: 'https://www.shutterstock.com/search/nervous-black-man?utm_source=chatgpt.com',
    authorName: 'Roy G.',
    authorAge: 45,
    featured: false,
    publishDate: '2024-02-15'
  },
  {
    id: 10,
    slug: 'healing-after-violence',
    type: 'audio',
    imgSrc: 'https://unsplash.com/s/photos/hand-reaching-out?utm_source=chatgpt.com',
    audioUrl: '/audio/chantelle-story.mp3',
    category: 'Trauma & PTSD',
    categoryColor: 'bg-orange-100 text-orange-800',
    title: 'Picking Up Di Pieces: Healing After Violence',
    snippet: '"Witnessing the shooting shake mi world. Mi couldn\'t sleep, jump at every loud noise. Talking bout it save mi life..."',
    fullContent: `Chantelle shares her harrowing experience of witnessing a violent incident in her community and how therapy helped her reclaim her life.`,
    avatarSrc: 'https://unsplash.com/s/photos/hand-reaching-out?utm_source=chatgpt.com',
    authorName: 'Chantelle P.',
    authorAge: 31,
    featured: false,
    publishDate: '2024-03-10'
  }
];

// --- Existing Helper Functions ---

// Helper function to get a story by slug
export const getStoryBySlug = (slug: string): Story | undefined => {
  return storyData.find(story => story.slug === slug);
};

// Helper function to get featured stories
export const getFeaturedStories = (): Story[] => {
  return storyData.filter(story => story.featured);
};

// Helper function to get stories by category
export const getStoriesByCategory = (category: string): Story[] => {
  return storyData.filter(story => story.category.toLowerCase() === category.toLowerCase());
};