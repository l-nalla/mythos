// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Create floating particles
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        container.appendChild(particle);
    }
}
createParticles();

// Hero Animations
gsap.to('#subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.to('#hero-text', {
    opacity: 1,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.to('#hero-cta', {
    opacity: 1,
    duration: 1,
    delay: 1.1,
    ease: 'power3.out'
});

// Scroll Animations
gsap.utils.toArray('.story-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

gsap.utils.toArray('.mythology-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.7)'
    });
});

// Filter Stories
function filterStories(category) {
    const cards = document.querySelectorAll('.story-card');
    const buttons = document.querySelectorAll('[id^="filter-"]');

    buttons.forEach(btn => {
        btn.classList.remove('bg-yellow-400', 'text-black');
        btn.classList.add('glass-card');
    });

    event.target.classList.remove('glass-card');
    event.target.classList.add('bg-yellow-400', 'text-black');

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, display: 'block' });
        } else {
            gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.4, display: 'none' });
        }
    });
}

// Filter Instagram
function filterInsta(type) {
    const items = document.querySelectorAll('.insta-item');
    const buttons = document.querySelectorAll('.insta-filter');

    buttons.forEach(btn => {
        btn.classList.remove('bg-yellow-400', 'text-black');
        btn.classList.add('bg-white/5');
    });

    event.target.classList.remove('bg-white/5');
    event.target.classList.add('bg-yellow-400', 'text-black');

    items.forEach((item, index) => {
        if (type === 'all' || item.dataset.type === type) {
            gsap.to(item, { opacity: 1, scale: 1, duration: 0.4, display: 'block', delay: index * 0.05 });
        } else {
            gsap.to(item, { opacity: 0, scale: 0.8, duration: 0.4, display: 'none' });
        }
    });
}

// Story Data
const stories = {
    'gita': {
        title: 'The Bhagavad Gita: Warrior\'s Dilemma',
        category: 'Indian Epics',
        categoryColor: 'bg-orange-500 text-orange-100',
        image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=1200&q=80',
        readTime: '5 min read',
        music: 'Raag Bhairavi',
        content: `
            <p class="text-lg font-anime text-orange-300 mb-4">धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः</p>
            <p>On the sacred plains of Kurukshetra, two massive armies stand facing each other. On one side, the Pandavas—five brothers fighting for their rightful kingdom. On the other, the Kauravas—one hundred cousins led by the envious Duryodhana.</p>
            <p>Prince Arjuna, the greatest archer of his age, asks his charioteer Krishna to drive between the armies so he may see those he must fight. What he sees destroys his resolve: his beloved grandfather Bhishma, his teacher Drona, his cousins, childhood friends, and mentors.</p>
            <p>His bow Gandiva slips from his hands. "How can I fight those I love?" he asks Krishna. "I would rather beg than rule a kingdom stained with their blood."</p>
            <p>What follows is the immortal discourse known as the Bhagavad Gita—the Song of the Lord. Krishna reveals profound truths about duty (dharma), the eternal soul (atman), and the path of righteous action without attachment to results.</p>
            <p class="font-mythology text-xl text-yellow-400 mt-6 mb-2">"You have the right to work only, but never to its fruits."</p>
            <p>This teaching—that we must act according to our duty without craving rewards—has guided warriors, leaders, and seekers for over 5,000 years. Arjuna picks up his bow, not with bloodlust, but with clarity of purpose.</p>
            <p>The battle begins, but the real victory is the transformation of a warrior's heart.</p>
        `
    },
    'persephone': {
        title: 'Persephone & The Pomegranate',
        category: 'Greek Mythology',
        categoryColor: 'bg-cyan-500 text-cyan-100',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
        readTime: '4 min read',
        music: 'Lyre of Olympus',
        content: `
            <p class="text-lg font-anime text-cyan-300 mb-4">Ἐννέα ἡμέραι καὶ ἐννέα νύκτες</p>
            <p>Persephone, daughter of Demeter and Zeus, was gathering flowers in the Nysian plain when the earth suddenly split open. From the chasm emerged Hades, king of the underworld, in his golden chariot drawn by black horses.</p>
            <p>Before she could scream, before the nymphs could react, Hades seized the maiden and descended into his realm. Demeter, goddess of harvest, heard her daughter's fading cry and began a desperate search that would alter the fate of the world.</p>
            <p>For nine days and nine nights, Demeter wandered the earth with torches, neither eating nor drinking. When she learned from Helios that Hades had taken Persephone with Zeus's permission, her grief turned to rage.</p>
            <p>She left Olympus and disguised herself as an old woman. In her grief, she neglected the earth—crops failed, famine spread, and humanity faced extinction.</p>
            <p>Zeus relented. Hermes was sent to retrieve Persephone. But Hades had one last trick. Before she left, he offered her pomegranate seeds—sweet, red, and irresistible. Persephone ate six seeds.</p>
            <p>Because she had eaten in the underworld, she was bound to return. A compromise was reached: six months above with her mother (spring and summer), six months below with Hades (autumn and winter).</p>
            <p>This is why the earth blooms when Persephone returns to Demeter, and why it sleeps when she descends to her dark husband.</p>
        `
    },
    'ragnarok': {
        title: 'Twilight of the Gods: Ragnarök',
        category: 'Norse Mythology',
        categoryColor: 'bg-blue-500 text-blue-100',
        image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=1200&q=80',
        readTime: '7 min read',
        music: 'Wardruna Style',
        content: `
            <p class="text-lg font-anime text-blue-300 mb-4">Brothers shall fight and fell each other</p>
            <p>The wolf Skoll chases the sun across the sky, seeking to devour it. His brother Hati pursues the moon. They will catch them at last.</p>
            <p>The Fimbulwinter comes—three successive winters with no summer between. Snow falls in all directions. The bonds of kinship break. Humanity turns against itself.</p>
            <p>The rooster Fjalar crows in Jotunheim, alerting the giants. The red cock Gullinkambi crows in Valhalla, waking the einherjar—the honored dead who feast and fight by day, preparing for the final battle.</p>
            <p>Heimdall sees the enemy approaching. He blows the Gjallarhorn, and its sound echoes through all nine worlds. The gods arm themselves. Odin rides Sleipnir to Mimir's well, seeking wisdom one last time.</p>
            <p>The ship Naglfar—made from the untrimmed nails of the dead—sails from the north, carrying legions of giants. Loki steers, free from his bonds. Fire giants march from Muspelheim, led by Surtr with his flaming sword.</p>
            <p>Odin fights Fenrir the wolf and is devoured. Thor kills the World Serpent Jormungandr but takes nine steps before falling dead from its venom. Freyr falls to Surtr. Garm and Tyr slay each other. Heimdall and Loki kill one another.</p>
            <p>Surtr casts fire across the world. The earth sinks into the sea. Yet from the ashes, the world is reborn—green and fertile, to be inherited by the surviving gods and the children of the fallen.</p>
        `
    },
    'amaterasu': {
        title: 'Amaterasu & The Heavenly Cave',
        category: 'Japanese Mythology',
        categoryColor: 'bg-red-500 text-red-100',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
        readTime: '6 min read',
        music: 'Koto & Shakuhachi',
        content: `
            <p class="text-lg font-anime text-red-300 mb-4">天照大神</p>
            <p>Amaterasu Omikami, the Sun Goddess, was the most radiant of the kami. Her light illuminated the High Plain of Heaven and brought life to the world below. But her brother Susano-o, god of storms, was wild and destructive.</p>
            <p>One day, Susano-o rampaged through Amaterasu's rice fields, breaking down the divisions and defiling her weaving hall. He even threw a flayed horse through the roof of her sacred weaving room, killing one of her attendants.</p>
            <p>Heartbroken and enraged, Amaterasu retreated into the Ama-no-Iwato—the Heavenly Rock Cave—and sealed the entrance with a massive boulder. The world plunged into darkness.</p>
            <p>Without the sun, rice stopped growing. The kami of darkness ruled the earth. Eight million gods gathered at the cave's entrance, desperate to lure the Sun Goddess out.</p>
            <p>The wise goddess Ame-no-Uzume had an idea. She overturned a tub and began a wild, ecstatic dance upon it, stamping her feet and exposing herself. The other gods laughed uproariously—the sound of divine mirth echoing through the cosmos.</p>
            <p>Curious, Amaterasu peeked out to see what could cause such joy in her absence. She saw her own reflection in a bronze mirror that had been hung on a tree outside. Captivated by her own radiance, she stepped further out.</p>
            <p>Tajikarao, the strong god of doorways, seized her and pulled her fully into the world. Light returned. The gods sealed the cave so she could never retreat again. And thus, the sun continues to rise—though sometimes, clouds gather, as if the cave still calls to her.</p>
        `
    },
    'osiris': {
        title: 'Osiris: Lord of the Resurrection',
        category: 'Egyptian Mythology',
        categoryColor: 'bg-yellow-500 text-yellow-100',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1200&q=80',
        readTime: '5 min read',
        music: 'Ney Flute',
        content: `
            <p class="text-lg font-anime text-yellow-300 mb-4">𓁹 𓊪 𓏏 𓇯</p>
            <p>Osiris was the first pharaoh, beloved by gods and humans alike. He brought civilization to Egypt—agriculture, laws, and worship. His brother Set, god of chaos and desert storms, grew jealous of his popularity and power.</p>
            <p>Set devised a cunning trap. He created a beautiful sarcophagus exactly fitted to Osiris's measurements and promised it as a gift to whoever fit inside perfectly. When Osiris lay down, Set and his conspirators sealed the coffin and threw it into the Nile.</p>
            <p>Isis, Osiris's wife and sister, would not accept his death. She searched Egypt and beyond, finally finding the coffin trapped in a tamarisk tree in Byblos. She brought it back to Egypt in secret.</p>
            <p>But Set discovered the body. In his rage, he tore Osiris into fourteen pieces and scattered them across Egypt. Isis, with her sister Nephthys, searched again. They found all pieces except one—the phallus, eaten by fish in the Nile.</p>
            <p>Isis reassembled Osiris, binding him together with linen bandages—the first mummy. Through her magic and her love, she briefly resurrected him. Though he could not remain in the world of the living, he became lord of the Duat, the underworld.</p>
            <p>From their union in death, Isis bore Horus, who would avenge his father and defeat Set. Thus, Osiris became the promise of resurrection—the guarantee that death is not the end, but a doorway to eternal life for those who lived righteously.</p>
        `
    },
    'cuchulainn': {
        title: 'Cú Chulainn: The Hound of Ulster',
        category: 'Celtic Mythology',
        categoryColor: 'bg-emerald-500 text-emerald-100',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
        readTime: '8 min read',
        music: 'Celtic Folk',
        content: `
            <p class="text-lg font-anime text-emerald-300 mb-4">Cú Chulainn mac Sualtaim</p>
            <p>Setanta was seven years old when he first tasted glory. While traveling to the court of King Conchobar at Emain Macha, he saw a hound—massive, fierce, the guardian beast of the smith Culann. The hound attacked, and the boy, armed only with his hurley ball and stick, slew it.</p>
            <p>Culann was devastated—the hound had protected his forge. Young Setanta offered to guard the smith's home himself until a replacement could be reared. Thus he earned his name: Cú Chulainn—the Hound of Culann.</p>
            <p>At seventeen, Cú Chulainn sought to take up arms. The druid Cathbad prophesied that whoever took arms that day would become famous, but his life would be short. Cú Chulainn chose fame.</p>
            <p>His most terrible gift was the ríastrad—the warp spasm. When battle fury took him, his body would twist and contort: one eye would swell to the size of his head, the other shrink to a pinprick. His mouth split to his ears, his hair stood on end like spikes, and a column of blood rose from his crown.</p>
            <p>In this form, he could not distinguish friend from foe. Once, the Ulstermen had to send out naked women to shock him back to sanity.</p>
            <p>His greatest tragedy came with the Cattle Raid of Cooley. Maeve of Connacht invaded Ulster to steal the Brown Bull. While the men of Ulster were cursed with labor pains, Cú Chulainn alone defended the border, fighting single combats against Maeve's champions for months.</p>
            <p>He died at thirty-three, bound to a standing stone by his own spear, facing his enemies to the last. To his death, the hero's light burned around him, so fierce that none dared approach until a raven landed on his shoulder—the sign that his soul had departed.</p>
        `
    }
};

// Open Story Modal
function openStory(storyId) {
    const story = stories[storyId];
    if (!story) return;

    document.getElementById('modal-image').src = story.image;
    document.getElementById('modal-category').textContent = story.category;
    document.getElementById('modal-category').className = `px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block ${story.categoryColor}`;
    document.getElementById('modal-title').textContent = story.title;
    document.getElementById('modal-read-time').textContent = story.readTime;
    document.getElementById('modal-music-suggestion').textContent = `🎵 ${story.music}`;
    document.getElementById('modal-content').innerHTML = story.content;

    const modal = document.getElementById('story-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Auto-play suggestion
    setTimeout(() => {
        playStoryMusic(storyId.split('-')[0]);
    }, 1000);
}

function closeStoryModal(event) {
    if (!event || event.target.id === 'story-modal' || event.target.closest('button')) {
        document.getElementById('story-modal').classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Instagram Data
const instaPosts = {
    1: { image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80', caption: '"I am Time, the destroyer of all..." - Krishna reveals his universal form to Arjuna on the battlefield. The Bhagavad Gita teaches us to act without attachment to results. 🕉️ #Mahabharata #BhagavadGita #Hinduism #Spirituality', music: 'Raag Bhairavi' },
    2: { image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', caption: 'Zeus, wielder of thunderbolts, king of Olympus. His symbols—the eagle, the oak tree, and the thunderbolt. Father of gods and men, yet often ruled by his passions. ⚡ #GreekMythology #Zeus #Olympus #AncientGreece', music: 'Lyre of Olympus' },
    3: { image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80', caption: 'Valhalla awaits. The hall of the slain, where Odin welcomes warriors who die in battle. By day they fight, by night they feast, preparing for Ragnarök. 🛡️ #NorseMythology #Valhalla #Vikings #Asatru', music: 'Wardruna Style' },
    4: { image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&q=80', caption: '"Better is one\'s own duty, though imperfect, than the duty of another well performed." - Bhagavad Gita 3.35. Your dharma is unique to you. Follow your path. 🙏 #Dharma #BhagavadGita #Wisdom #SpiritualQuotes', music: 'Om Namah Shivaya' },
    5: { image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80', caption: 'Anubis, guardian of the scales. In the Hall of Two Truths, he weighs the heart against the feather of Ma\'at. If the heart is lighter, the soul passes to the Field of Reeds. ⚖️ #EgyptianMythology #Anubis #Afterlife #AncientEgypt', music: 'Ney Flute' },
    6: { image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80', caption: 'The Floating Torii of Itsukushima Shrine. When the tide rises, it appears to float on water—a gateway between the spirit world and our own. ⛩️ #JapaneseMythology #Shinto #Torii #Miyajima', music: 'Koto & Shakuhachi' },
    7: { image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', caption: '"Know thyself" - Inscribed at the Temple of Apollo at Delphi. The foundation of all wisdom begins with self-knowledge. Look within. 🏛️ #Delphi #GreekPhilosophy #KnowThyself #Wisdom', music: 'Oracle Whispers' },
    8: { image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80', caption: 'Mjölnir in hand, Thor protects Midgard from the giants. His hammer returns to his hand after being thrown, and his belt Megingjör doubles his strength. 🔨 #Thor #NorseMythology #Mjolnir #Asgard', music: 'Valhalla Calling' },
    9: { image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=800&q=80', caption: 'Kurukshetra—the field of dharma. Here Krishna delivered the Bhagavad Gita to Arjuna. The battlefield represents the human heart, where duty and emotion wage eternal war. ⚔️ #Kurukshetra #Mahabharata #DharmaYuddha', music: 'Krishna\'s Flute' }
};

function openInstaModal(id) {
    const post = instaPosts[id];
    document.getElementById('insta-modal-image').src = post.image;
    document.getElementById('insta-modal-caption').textContent = post.caption;
    document.getElementById('insta-modal-music').textContent = post.music;

    const modal = document.getElementById('insta-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInstaModal(event) {
    if (!event || event.target.id === 'insta-modal' || event.target.closest('button')) {
        document.getElementById('insta-modal').classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Music Player
let isPlaying = false;
let currentTrack = null;

function toggleMusicPlayer() {
    const player = document.getElementById('music-player');
    player.classList.toggle('translate-y-full');
}

function togglePlay() {
    isPlaying = !isPlaying;
    const vinyl = document.getElementById('vinyl');
    const visualizer = document.getElementById('visualizer');
    const btn = document.getElementById('play-btn');

    if (isPlaying) {
        vinyl.classList.add('playing');
        visualizer.classList.remove('paused');
        visualizer.classList.add('playing');
        btn.innerHTML = '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/>';
    } else {
        vinyl.classList.remove('playing');
        visualizer.classList.remove('playing');
        visualizer.classList.add('paused');
        btn.innerHTML = '<svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 5.84a.5.5 0 01.77-.42l8.56 5.16a.5.5 0 010 .84l-8.56 5.16a.5.5 0 01-.77-.42V5.84z"/></svg>';
    }
}

function playTrack(trackName) {
    const trackNames = {
        'raag-bhairavi': 'Raag Bhairavi',
        'om-namah': 'Om Namah Shivaya',
        'krishna-flute': 'Krishna\'s Flute',
        'apollo-lyre': 'Apollo\'s Lyre',
        'dionysus-rhythm': 'Dionysus Rhythm',
        'oracle-whispers': 'Oracle Whispers',
        'valhalla-calling': 'Valhalla Calling',
        'wardruna-style': 'Wardruna Style',
        'winter-is-coming': 'Winter is Coming',
        'sakura-koto': 'Sakura Koto',
        'shakuhachi-meditation': 'Shakuhachi Meditation',
        'taiko-drums': 'Taiko Drums'
    };

    document.getElementById('now-playing').textContent = trackNames[trackName] || trackName;
    document.getElementById('music-player').classList.remove('translate-y-full');

    if (!isPlaying) togglePlay();
}

function playStoryMusic(category) {
    const musicMap = {
        'indian': 'Raag Bhairavi',
        'greek': 'Lyre of Olympus',
        'norse': 'Wardruna Style',
        'egyptian': 'Ney Flute',
        'japanese': 'Koto & Shakuhachi',
        'celtic': 'Celtic Folk'
    };

    document.getElementById('now-playing').textContent = musicMap[category] || 'Mythos Soundscape';
    document.getElementById('music-player').classList.remove('translate-y-full');

    if (!isPlaying) togglePlay();
}

function playSuggestedMusic() {
    const music = document.getElementById('modal-music-suggestion').textContent.replace('🎵 ', '');
    document.getElementById('now-playing').textContent = music;
    document.getElementById('music-player').classList.remove('translate-y-full');
    if (!isPlaying) togglePlay();
}

function playInstaMusic() {
    const music = document.getElementById('insta-modal-music').textContent;
    document.getElementById('now-playing').textContent = music;
    document.getElementById('music-player').classList.remove('translate-y-full');
    if (!isPlaying) togglePlay();
}

function selectPlaylist(category) {
    playStoryMusic(category);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black/80');
    } else {
        navbar.classList.remove('bg-black/80');
    }
});

// Text scramble effect for title
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="text-yellow-600">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Initialize scramble on hover
const scrambleEl = document.querySelector('.scramble-text');
const fx = new TextScramble(scrambleEl);
let counter = 0;
const phrases = [
    'MYTHOS',
    '神話',
    'MYTHOS'
];

scrambleEl.addEventListener('mouseenter', () => {
    fx.setText(phrases[counter]).then(() => {
        counter = (counter + 1) % phrases.length;
    });
});

// About Section Animations
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-stat', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 60%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

gsap.to('#about-bg-img', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    },
    y: -50,
    ease: 'none'
});

