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
    fullContent: `Mi name Sharna, and mi grow up inna Kingston. From mi small, everybody always call mi "the happy one" always laughing, always dancing. Nobody never woulda guess what gwaan inside mi head. When mi lose mi job during the pandemic, everything crash. Mi couldn’t sleep, mi couldn’t eat, mi just sit down and stare at di wall whole day. Mi friends and family start to notice but dem never understand. One day, mi just decide seh mi can’t live like dis anymore. Mi walk into a clinic, and mi start therapy. It rough, mi nah lie, but little by little mi find back mi smile. Now mi tell mi story fi help others know depression real and help out deh.`,
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
    fullContent: `Listening Beyond Words: Preventing Suicide with Care and Awareness

Asking for help can be hard, especially for those silently struggling. This is why it’s important that we learn to listen, not just to words, but to actions, moods, and changes in behavior. Suicide is preventable, but only if we recognize the signs and respond with care.

People often joke about wanting to die, but whether serious or not, such statements must be taken seriously. Understanding warning signs can make the difference between life and death. Counselors recommend using the PIN method to assess risk:

Plan: Has the person made a clear plan? Knowing when, where, or how makes it more serious.

Intensity: How extreme is their method? More drastic methods (like hanging or using a gun, common in Jamaica) suggest higher risk.

Nearness: How close are they to acting? Have they gathered the means? Are they behaving differently?

Watch for signs: poor self-care, loss of energy, and unusual calm after deep sadness. A sudden burst of happiness without any clear reason could mean they’ve decided to act. Listen for things like, “I can’t take it anymore” or “I feel like ending it.” These are not to be ignored.

Using your senses—seeing changes, hearing cries for help, even noticing neglect—is key. Smell body odor? It might mean they’ve stopped caring for themselves.

Support is crucial. Many who consider suicide feel alone or believe no one cares. Show them they matte talk to them, listen, and offer help. Sometimes, professional support is needed, including medication and therapy.

In Jamaica, help is available:

Suicide Helpline: 888-639-5433

Choose Life International: 920-7924

Don’t hesitate to reach out for help on their behalf.

Above all, be kind. You don’t know what someone is going through. Avoid harsh words. Be gentle, be positive, and speak life into others. A kind word or a caring gesture might be what saves someone from despair. Let’s all do our part listen, care, and act.`,
    avatarSrc: 'https://www.alamy.com/stock-photo/jamaican-man-talking.html?utm_source=chatgpt.com',
    authorName: 'Marcus T.',
    authorAge: 35,
    featured: true,
    publishDate: '2023-08-21'
  },

  {
    id: 8,
    slug: 'after-baby-blues-hit-hard',
    type: 'written',
    imgSrc: 'https://forwardtogether.org/wp-content/uploads/2016/01/mother-with-twins.jpg',
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
    imgSrc: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2023-11/men_health_b674766e2b6062e6e79cb55a2b8d0901.jpg',
    videoUrl: 'https://youtu.be/kSmfGwelDPc?si=C9SQorbOVHJulMtf',
    videoPlaceholderBg: 'bg-cyan-200',
    category: "Men's Mental Health",
    categoryColor: 'bg-cyan-100 text-cyan-800',
    title: '"Man Fi Be Strong": Burnout an Seeking Help',
    snippet: '"AIn this candid video the hosts talks about the immense pressure Jamaican men face to appear strong. He shares how seeking help changed his life..."',
    fullContent: `In this candid video the hosts talks about the immense pressure Jamaican men face to appear strong. He shares how seeking help changed his life.`,
    avatarSrc: 'https://www.shutterstock.com/search/nervous-black-man?utm_source=chatgpt.com',
    authorName: 'Roy G.',
    authorAge: 45,
    featured: false,
    publishDate: '2024-02-15'
  },
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