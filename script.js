let selectedPlatform = 'snapchat';
let selectedAudience = '';
let selectedContent = '';

// بيانات المنصات
const platformData = {
    youtube: {
        icon: '▶',
        name: 'youtube',
        audiences: ['subscribers', 'general', 'niche'],
        contentTypes: ['tutorial', 'vlog', 'review']
    },
    tiktok: {
        icon: '🎵',
        name: 'tiktok',
        audiences: ['teens', 'general', 'niche'],
        contentTypes: ['dance', 'comedy', 'trending']
    },
    instagram: {
        icon: '📷',
        name: 'instagram',
        audiences: ['followers', 'explore', 'targeted'],
        contentTypes: ['post', 'story', 'reel']
    },
    snapchat: {
        icon: '👻',
        name: 'snapchat',
        audiences: ['friends', 'public', 'specific audience'],
        contentTypes: ['story', 'filter', 'shorts']
    }
};

// الأفكار
const contentIdeas = {
    youtube: {
        tutorial: ['How to master a skill in 30 days', '5-minute life hacks', 'Step-by-step guide to your favorite hobby'],
        vlog: ['Day in my life challenge', 'Trying weird foods', 'Hidden gems in your city'],
        review: ['Testing viral products', 'Rating popular trends', 'Honest review of overhyped items']
    },
    tiktok: {
        dance: ['Learn trending dance in 60s', 'Dance battle with friends', 'Create signature move'],
        comedy: ['Relatable funny moments', 'Funny pets scenarios', 'Awkward situations turned hilarious'],
        trending: ['Spin on latest trend', 'Trend prediction challenge', 'Before/after transformation']
    },
    instagram: {
        post: ['Aesthetic flat lay', 'Behind the scenes', 'Motivational quote story'],
        story: ['This or that polls', 'Quick story tutorial', 'Day highlights'],
        reel: ['15s transformation', 'Quick recipe/DIY', 'Trending audio twist']
    },
    snapchat: {
        story: ['24h challenge documentation', 'Funny moments with friends', 'Creative snap filters'],
        filter: ['Create your own AR filter', 'Funny filter ideas', 'Filter challenge'],
        shorts: ['Quick short stories', 'Mini tutorials', 'Snap trends']
    }
};

// اختيار المنصة
function selectPlatform(name) {
    selectedPlatform = name;
    selectedAudience = '';
    selectedContent = '';

    // إزالة class "selected" من جميع المنصات
    document.querySelectorAll('.platform').forEach(p => p.classList.remove('selected'));
    document.querySelector(`.platform.${name}`).classList.add('selected');

    // تحديث البطاقة
    const card = document.getElementById('platformOptions');
    const iconEl = document.getElementById('selectedIcon');
    const nameEl = document.getElementById('selectedName');

    iconEl.textContent = platformData[name].icon;
    nameEl.textContent = name;

    card.classList.add('show');
    card.classList.remove('hidden');

    // إزالة تحديد الخيارات القديمة
    document.querySelectorAll('.radio').forEach(r => r.classList.remove('selected'));
}

// اختيار خيار داخل البطاقة
function selectOption(type, value) {
    if(type === 'audience') selectedAudience = value;
    if(type === 'content') selectedContent = value;

    document.querySelectorAll(`.option-group .radio`).forEach(r => r.classList.remove('selected'));
    document.getElementById(value).classList.add('selected');
}

// توليد الفكرة وعرضها
function generateIdea() {
    if(!selectedPlatform || !selectedAudience || !selectedContent){
        alert('Please select a platform, audience, and content type!');
        return;
    }

    const ideasArray = contentIdeas[selectedPlatform][selectedContent];
    const randomIdea = ideasArray[Math.floor(Math.random() * ideasArray.length)];

    const output = document.getElementById('ideaOutput');
    output.innerHTML = `<p>${randomIdea}</p>`;
    output.classList.add('show');
    output.classList.remove('hidden');
      }
