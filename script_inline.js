const ROTATE_SECONDS = 60;
const messages = [
  {
    "title": "Keep rejoicing — joy is a command and a gift.",
    "message": "Keep rejoicing — joy is a command and a gift.",
    "verse_text": "Rejoice always. — 1 Thessalonians 5:16"
  },
  {
    "title": "God is near when your heart is broken and will heal you.",
    "message": "God is near when your heart is broken and will heal you.",
    "verse_text": "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18"
  },
  {
    "title": "Jesus satisfies the deepest hunger of your soul.",
    "message": "Jesus satisfies the deepest hunger of your soul.",
    "verse_text": "I am the bread of life... — John 6:35"
  },
  {
    "title": "Jesus satisfies the deepest hunger of your soul.",
    "message": "Jesus satisfies the deepest hunger of your soul.",
    "verse_text": "I am the bread of life... — John 6:35"
  },
  {
    "title": "Look to God as your helper — He provides support.",
    "message": "Look to God as your helper — He provides support.",
    "verse_text": "I lift up my eyes to the hills... where does my help come from? — Psalm 121:1"
  },
  {
    "title": "Believe in Jesus and be saved; faith brings deliverance.",
    "message": "Believe in Jesus and be saved; faith brings deliverance.",
    "verse_text": "Believe in the Lord Jesus, and you will be saved—you and your household. — Acts 16:31"
  },
  {
    "title": "A day is coming when God will remove sorrow and pain.",
    "message": "A day is coming when God will remove sorrow and pain.",
    "verse_text": "He will wipe away every tear... — Revelation 21:4"
  },
  {
    "title": "Invite God into every step and He will guide you.",
    "message": "Invite God into every step and He will guide you.",
    "verse_text": "In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:6"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "God will work all things for your good when you trust Him.",
    "message": "God will work all things for your good when you trust Him.",
    "verse_text": "In all things God works for the good of those who love him. — Romans 8:28"
  },
  {
    "title": "God walks with you through every valley; do not fear.",
    "message": "God walks with you through every valley; do not fear.",
    "verse_text": "Even though I walk through the darkest valley, I will fear no evil. — Psalm 23:4"
  },
  {
    "title": "Live in integrity and lead by example, no matter your age.",
    "message": "Live in integrity and lead by example, no matter your age.",
    "verse_text": "Let no one despise you for your youth... — 1 Timothy 4:12"
  },
  {
    "title": "Trust God with your giving and watch Him provide.",
    "message": "Trust God with your giving and watch Him provide.",
    "verse_text": "Bring the whole tithe into the storehouse... — Malachi 3:10"
  },
  {
    "title": "God's mercy never ends — His love sustains you.",
    "message": "God's mercy never ends — His love sustains you.",
    "verse_text": "Because of the Lord's great love we are not consumed, for his mercies never fail. — Lamentations 3:22"
  },
  {
    "title": "God is good and a safe refuge when troubles come.",
    "message": "God is good and a safe refuge when troubles come.",
    "verse_text": "The Lord is good, a refuge in times of trouble... — Nahum 1:7"
  },
  {
    "title": "The call of God invites you into living fellowship with Him.",
    "message": "The call of God invites you into living fellowship with Him.",
    "verse_text": "The Spirit and the bride say, 'Come' — Revelation 22:17"
  },
  {
    "title": "Bring your burdens to Jesus — He will give you rest.",
    "message": "Bring your burdens to Jesus — He will give you rest.",
    "verse_text": "Come to me, all who are weary, and I will give you rest. — Matthew 11:28"
  },
  {
    "title": "You are chosen by God and called to shine His light.",
    "message": "You are chosen by God and called to shine His light.",
    "verse_text": "You are a chosen people, a royal priesthood... — 1 Peter 2:9"
  },
  {
    "title": "Protect your heart; it shapes your life.",
    "message": "Protect your heart; it shapes your life.",
    "verse_text": "Guard your heart above all else... — Proverbs 4:23"
  },
  {
    "title": "Remember God's blessings and give Him thanks.",
    "message": "Remember God's blessings and give Him thanks.",
    "verse_text": "Forget not all his benefits... — Psalm 103:2"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "Ask God for wisdom — He gives generously to those who ask.",
    "message": "Ask God for wisdom — He gives generously to those who ask.",
    "verse_text": "If any lacks wisdom, ask God, who gives generously. — James 1:5"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "Jesus promises to be with you always, no matter what.",
    "message": "Jesus promises to be with you always, no matter what.",
    "verse_text": "I am with you always, to the end of the age. — Matthew 28:20"
  },
  {
    "title": "Find joy in God and He will fulfill the desires He placed in you.",
    "message": "Find joy in God and He will fulfill the desires He placed in you.",
    "verse_text": "Delight yourself in the Lord, and he will give you the desires of your heart. — Psalm 37:4"
  },
  {
    "title": "Live with justice, mercy, and humility before God.",
    "message": "Live with justice, mercy, and humility before God.",
    "verse_text": "Act justly, love mercy, walk humbly with your God. — Micah 6:8"
  },
  {
    "title": "Live in integrity and lead by example, no matter your age.",
    "message": "Live in integrity and lead by example, no matter your age.",
    "verse_text": "Let no one despise you for your youth... — 1 Timothy 4:12"
  },
  {
    "title": "In Christ you are not condemned; you are free.",
    "message": "In Christ you are not condemned; you are free.",
    "verse_text": "There is therefore now no condemnation for those who are in Christ. — Romans 8:1"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "You are never alone — He guides and cares for you.",
    "message": "You are never alone — He guides and cares for you.",
    "verse_text": "The Lord is my shepherd; I lack nothing. — Psalm 23:1"
  },
  {
    "title": "Encourage one another toward love and good deeds.",
    "message": "Encourage one another toward love and good deeds.",
    "verse_text": "And let us consider how to stir up one another to love and good works. — Hebrews 10:24"
  },
  {
    "title": "God's grace has come to save all who believe.",
    "message": "God's grace has come to save all who believe.",
    "verse_text": "For the grace of God has appeared, bringing salvation to all people. — Titus 2:11"
  },
  {
    "title": "Clothe yourself with compassion, kindness, and humility.",
    "message": "Clothe yourself with compassion, kindness, and humility.",
    "verse_text": "Put on then, as God's chosen ones, compassionate hearts... — Colossians 3:12"
  },
  {
    "title": "Jesus satisfies the deepest hunger of your soul.",
    "message": "Jesus satisfies the deepest hunger of your soul.",
    "verse_text": "I am the bread of life... — John 6:35"
  },
  {
    "title": "Treat others with the kindness you wish to receive.",
    "message": "Treat others with the kindness you wish to receive.",
    "verse_text": "Do to others as you would have them do to you. — Luke 6:31"
  },
  {
    "title": "A day is coming when God will remove sorrow and pain.",
    "message": "A day is coming when God will remove sorrow and pain.",
    "verse_text": "He will wipe away every tear... — Revelation 21:4"
  },
  {
    "title": "Protect your heart; it shapes your life.",
    "message": "Protect your heart; it shapes your life.",
    "verse_text": "Guard your heart above all else... — Proverbs 4:23"
  },
  {
    "title": "Trust God to provide for your needs; don't be anxious.",
    "message": "Trust God to provide for your needs; don't be anxious.",
    "verse_text": "Do not be anxious about your life... — Luke 12:22"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "Encourage one another toward love and good deeds.",
    "message": "Encourage one another toward love and good deeds.",
    "verse_text": "And let us consider how to stir up one another to love and good works. — Hebrews 10:24"
  },
  {
    "title": "God gives perfect peace to those who trust Him.",
    "message": "God gives perfect peace to those who trust Him.",
    "verse_text": "You keep in perfect peace those whose minds are steadfast... — Isaiah 26:3"
  },
  {
    "title": "In Christ you are not condemned; you are free.",
    "message": "In Christ you are not condemned; you are free.",
    "verse_text": "There is therefore now no condemnation for those who are in Christ. — Romans 8:1"
  },
  {
    "title": "Find joy in God and He will fulfill the desires He placed in you.",
    "message": "Find joy in God and He will fulfill the desires He placed in you.",
    "verse_text": "Delight yourself in the Lord, and he will give you the desires of your heart. — Psalm 37:4"
  },
  {
    "title": "Receive the peace of Jesus — it calms every storm.",
    "message": "Receive the peace of Jesus — it calms every storm.",
    "verse_text": "Peace I leave with you; my peace I give to you. — John 14:27"
  },
  {
    "title": "Run your race with perseverance and focus on Jesus.",
    "message": "Run your race with perseverance and focus on Jesus.",
    "verse_text": "Let us run with endurance the race that is set before us... — Hebrews 12:1"
  },
  {
    "title": "God's grace has come to save all who believe.",
    "message": "God's grace has come to save all who believe.",
    "verse_text": "For the grace of God has appeared, bringing salvation to all people. — Titus 2:11"
  },
  {
    "title": "Bring your burdens to Jesus — He will give you rest.",
    "message": "Bring your burdens to Jesus — He will give you rest.",
    "verse_text": "Come to me, all who are weary, and I will give you rest. — Matthew 11:28"
  },
  {
    "title": "God is your light and salvation — you need not fear.",
    "message": "God is your light and salvation — you need not fear.",
    "verse_text": "The Lord is my light and my salvation; whom shall I fear? — Psalm 27:1"
  },
  {
    "title": "Confess your wrongs — God forgives and restores.",
    "message": "Confess your wrongs — God forgives and restores.",
    "verse_text": "If we confess our sins, he is faithful and just to forgive us our sins. — 1 John 1:9"
  },
  {
    "title": "God is near when your heart is broken and will heal you.",
    "message": "God is near when your heart is broken and will heal you.",
    "verse_text": "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18"
  },
  {
    "title": "Fill your mind with what is true and pure.",
    "message": "Fill your mind with what is true and pure.",
    "verse_text": "Think on these things: true, noble... excellent... — Philippians 4:8"
  },
  {
    "title": "Invite God into every step and He will guide you.",
    "message": "Invite God into every step and He will guide you.",
    "verse_text": "In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:6"
  },
  {
    "title": "The call of God invites you into living fellowship with Him.",
    "message": "The call of God invites you into living fellowship with Him.",
    "verse_text": "The Spirit and the bride say, 'Come' — Revelation 22:17"
  },
  {
    "title": "Keep hope alive, stay patient in hardship, and pray constantly.",
    "message": "Keep hope alive, stay patient in hardship, and pray constantly.",
    "verse_text": "Be joyful in hope, patient in affliction, faithful in prayer. — Romans 12:12"
  },
  {
    "title": "In Christ you are not condemned; you are free.",
    "message": "In Christ you are not condemned; you are free.",
    "verse_text": "There is therefore now no condemnation for those who are in Christ. — Romans 8:1"
  },
  {
    "title": "Pray confidently — God hears and answers.",
    "message": "Pray confidently — God hears and answers.",
    "verse_text": "This is the confidence we have in approaching God... — 1 John 5:14"
  },
  {
    "title": "Remember God's blessings and give Him thanks.",
    "message": "Remember God's blessings and give Him thanks.",
    "verse_text": "Forget not all his benefits... — Psalm 103:2"
  },
  {
    "title": "Call on the Lord; He is close to those who seek Him.",
    "message": "Call on the Lord; He is close to those who seek Him.",
    "verse_text": "The Lord is near to all who call on him... — Psalm 145:18"
  },
  {
    "title": "Ask God for wisdom — He gives generously to those who ask.",
    "message": "Ask God for wisdom — He gives generously to those who ask.",
    "verse_text": "If any lacks wisdom, ask God, who gives generously. — James 1:5"
  },
  {
    "title": "Show kindness and forgiveness as God showed to you.",
    "message": "Show kindness and forgiveness as God showed to you.",
    "verse_text": "Be kind to one another, tenderhearted, forgiving one another... — Ephesians 4:32"
  },
  {
    "title": "Jesus promises to be with you always, no matter what.",
    "message": "Jesus promises to be with you always, no matter what.",
    "verse_text": "I am with you always, to the end of the age. — Matthew 28:20"
  },
  {
    "title": "Pray confidently — God hears and answers.",
    "message": "Pray confidently — God hears and answers.",
    "verse_text": "This is the confidence we have in approaching God... — 1 John 5:14"
  },
  {
    "title": "The Spirit brings love, joy, peace, and goodness into you.",
    "message": "The Spirit brings love, joy, peace, and goodness into you.",
    "verse_text": "The fruit of the Spirit is love, joy, peace... — Galatians 5:22"
  },
  {
    "title": "Jesus waits for you — open your heart to Him.",
    "message": "Jesus waits for you — open your heart to Him.",
    "verse_text": "Behold, I stand at the door and knock... — Revelation 3:20"
  },
  {
    "title": "Jesus waits for you — open your heart to Him.",
    "message": "Jesus waits for you — open your heart to Him.",
    "verse_text": "Behold, I stand at the door and knock... — Revelation 3:20"
  },
  {
    "title": "Faith is trusting God even when you can't see the outcome.",
    "message": "Faith is trusting God even when you can't see the outcome.",
    "verse_text": "Now faith is confidence in what we hope for and assurance about what we do not see. — Hebrews 11:1"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "God gives perfect peace to those who trust Him.",
    "message": "God gives perfect peace to those who trust Him.",
    "verse_text": "You keep in perfect peace those whose minds are steadfast... — Isaiah 26:3"
  },
  {
    "title": "Approach God with confidence to find grace and help.",
    "message": "Approach God with confidence to find grace and help.",
    "verse_text": "Let us then with confidence draw near to the throne of grace... — Hebrews 4:16"
  },
  {
    "title": "Look to God as your helper — He provides support.",
    "message": "Look to God as your helper — He provides support.",
    "verse_text": "I lift up my eyes to the hills... where does my help come from? — Psalm 121:1"
  },
  {
    "title": "Give thanks in every situation; gratitude transforms.",
    "message": "Give thanks in every situation; gratitude transforms.",
    "verse_text": "Give thanks in all circumstances... — 1 Thessalonians 5:18"
  },
  {
    "title": "Pray confidently — God hears and answers.",
    "message": "Pray confidently — God hears and answers.",
    "verse_text": "This is the confidence we have in approaching God... — 1 John 5:14"
  },
  {
    "title": "God's love is great — He gave His Son for us.",
    "message": "God's love is great — He gave His Son for us.",
    "verse_text": "For God so loved the world that he gave his only Son. — John 3:16"
  },
  {
    "title": "Blessing comes to those who trust God.",
    "message": "Blessing comes to those who trust God.",
    "verse_text": "Blessed is the man who trusts in the Lord... — Jeremiah 17:7"
  },
  {
    "title": "Run your race with perseverance and focus on Jesus.",
    "message": "Run your race with perseverance and focus on Jesus.",
    "verse_text": "Let us run with endurance the race that is set before us... — Hebrews 12:1"
  },
  {
    "title": "Live with justice, mercy, and humility before God.",
    "message": "Live with justice, mercy, and humility before God.",
    "verse_text": "Act justly, love mercy, walk humbly with your God. — Micah 6:8"
  },
  {
    "title": "Trust God with your giving and watch Him provide.",
    "message": "Trust God with your giving and watch Him provide.",
    "verse_text": "Bring the whole tithe into the storehouse... — Malachi 3:10"
  },
  {
    "title": "God will finish the work He started in your life.",
    "message": "God will finish the work He started in your life.",
    "verse_text": "He who began a good work in you will bring it to completion... — Philippians 1:6"
  },
  {
    "title": "God's love for you is unbreakable and eternal.",
    "message": "God's love for you is unbreakable and eternal.",
    "verse_text": "Nothing can separate us from the love of God in Christ Jesus. — Romans 8:38"
  },
  {
    "title": "Persevere through tests and receive God's reward.",
    "message": "Persevere through tests and receive God's reward.",
    "verse_text": "Blessed is the man who remains steadfast under trial... — James 1:12"
  },
  {
    "title": "Give your worries to God; He cares deeply for you.",
    "message": "Give your worries to God; He cares deeply for you.",
    "verse_text": "Cast all your anxiety on him because he cares for you. — 1 Peter 5:7"
  },
  {
    "title": "God protects you — no weapon formed will succeed.",
    "message": "God protects you — no weapon formed will succeed.",
    "verse_text": "No weapon formed against you shall prosper. — Isaiah 54:17"
  },
  {
    "title": "Jesus satisfies the deepest hunger of your soul.",
    "message": "Jesus satisfies the deepest hunger of your soul.",
    "verse_text": "I am the bread of life... — John 6:35"
  },
  {
    "title": "Live in integrity and lead by example, no matter your age.",
    "message": "Live in integrity and lead by example, no matter your age.",
    "verse_text": "Let no one despise you for your youth... — 1 Timothy 4:12"
  },
  {
    "title": "Sin leads to death, but God gives the gift of life through Christ.",
    "message": "Sin leads to death, but God gives the gift of life through Christ.",
    "verse_text": "The wages of sin is death, but the gift of God is eternal life in Christ Jesus. — Romans 6:23"
  },
  {
    "title": "Clothe yourself with compassion, kindness, and humility.",
    "message": "Clothe yourself with compassion, kindness, and humility.",
    "verse_text": "Put on then, as God's chosen ones, compassionate hearts... — Colossians 3:12"
  },
  {
    "title": "Live in integrity and lead by example, no matter your age.",
    "message": "Live in integrity and lead by example, no matter your age.",
    "verse_text": "Let no one despise you for your youth... — 1 Timothy 4:12"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "The Spirit brings love, joy, peace, and goodness into you.",
    "message": "The Spirit brings love, joy, peace, and goodness into you.",
    "verse_text": "The fruit of the Spirit is love, joy, peace... — Galatians 5:22"
  },
  {
    "title": "Keep rejoicing — joy is a command and a gift.",
    "message": "Keep rejoicing — joy is a command and a gift.",
    "verse_text": "Rejoice always. — 1 Thessalonians 5:16"
  },
  {
    "title": "The call of God invites you into living fellowship with Him.",
    "message": "The call of God invites you into living fellowship with Him.",
    "verse_text": "The Spirit and the bride say, 'Come' — Revelation 22:17"
  },
  {
    "title": "Be a peacemaker and you will be called God's child.",
    "message": "Be a peacemaker and you will be called God's child.",
    "verse_text": "Blessed are the peacemakers... — Matthew 5:9"
  },
  {
    "title": "Approach God with confidence to find grace and help.",
    "message": "Approach God with confidence to find grace and help.",
    "verse_text": "Let us then with confidence draw near to the throne of grace... — Hebrews 4:16"
  },
  {
    "title": "God rejoices over you and quiets you with His love.",
    "message": "God rejoices over you and quiets you with His love.",
    "verse_text": "The Lord your God is with you... he will quiet you with his love. — Zephaniah 3:17"
  },
  {
    "title": "God's love for you is unbreakable and eternal.",
    "message": "God's love for you is unbreakable and eternal.",
    "verse_text": "Nothing can separate us from the love of God in Christ Jesus. — Romans 8:38"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "Run your race with perseverance and focus on Jesus.",
    "message": "Run your race with perseverance and focus on Jesus.",
    "verse_text": "Let us run with endurance the race that is set before us... — Hebrews 12:1"
  },
  {
    "title": "God is near when your heart is broken and will heal you.",
    "message": "God is near when your heart is broken and will heal you.",
    "verse_text": "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18"
  },
  {
    "title": "God's love is great — He gave His Son for us.",
    "message": "God's love is great — He gave His Son for us.",
    "verse_text": "For God so loved the world that he gave his only Son. — John 3:16"
  },
  {
    "title": "Find joy in God and He will fulfill the desires He placed in you.",
    "message": "Find joy in God and He will fulfill the desires He placed in you.",
    "verse_text": "Delight yourself in the Lord, and he will give you the desires of your heart. — Psalm 37:4"
  },
  {
    "title": "Receive the peace of Jesus — it calms every storm.",
    "message": "Receive the peace of Jesus — it calms every storm.",
    "verse_text": "Peace I leave with you; my peace I give to you. — John 14:27"
  },
  {
    "title": "Approach God with confidence to find grace and help.",
    "message": "Approach God with confidence to find grace and help.",
    "verse_text": "Let us then with confidence draw near to the throne of grace... — Hebrews 4:16"
  },
  {
    "title": "Invite God into every step and He will guide you.",
    "message": "Invite God into every step and He will guide you.",
    "verse_text": "In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:6"
  },
  {
    "title": "The Spirit brings love, joy, peace, and goodness into you.",
    "message": "The Spirit brings love, joy, peace, and goodness into you.",
    "verse_text": "The fruit of the Spirit is love, joy, peace... — Galatians 5:22"
  },
  {
    "title": "There is a season for every purpose under heaven.",
    "message": "There is a season for every purpose under heaven.",
    "verse_text": "For everything there is a season... — Ecclesiastes 3:1"
  },
  {
    "title": "Love God fully with your whole heart.",
    "message": "Love God fully with your whole heart.",
    "verse_text": "Love the Lord your God with all your heart... — Matthew 22:37"
  },
  {
    "title": "Encourage one another toward love and good deeds.",
    "message": "Encourage one another toward love and good deeds.",
    "verse_text": "And let us consider how to stir up one another to love and good works. — Hebrews 10:24"
  },
  {
    "title": "Trust God to provide for your needs; don't be anxious.",
    "message": "Trust God to provide for your needs; don't be anxious.",
    "verse_text": "Do not be anxious about your life... — Luke 12:22"
  },
  {
    "title": "God protects you — no weapon formed will succeed.",
    "message": "God protects you — no weapon formed will succeed.",
    "verse_text": "No weapon formed against you shall prosper. — Isaiah 54:17"
  },
  {
    "title": "Persevere through tests and receive God's reward.",
    "message": "Persevere through tests and receive God's reward.",
    "verse_text": "Blessed is the man who remains steadfast under trial... — James 1:12"
  },
  {
    "title": "God loved us first — Christ died to bring us back to Him.",
    "message": "God loved us first — Christ died to bring us back to Him.",
    "verse_text": "God demonstrates his own love for us in this: while we were still sinners, Christ died for us. — Romans 5:8"
  },
  {
    "title": "God fills you with hope, joy, and peace as you trust Him.",
    "message": "God fills you with hope, joy, and peace as you trust Him.",
    "verse_text": "May the God of hope fill you with all joy and peace... — Romans 15:13"
  },
  {
    "title": "Show kindness and forgiveness as God showed to you.",
    "message": "Show kindness and forgiveness as God showed to you.",
    "verse_text": "Be kind to one another, tenderhearted, forgiving one another... — Ephesians 4:32"
  },
  {
    "title": "Look to God as your helper — He provides support.",
    "message": "Look to God as your helper — He provides support.",
    "verse_text": "I lift up my eyes to the hills... where does my help come from? — Psalm 121:1"
  },
  {
    "title": "God brings you into places of joy and celebration.",
    "message": "God brings you into places of joy and celebration.",
    "verse_text": "He brought me to the banquet hall... — Song of Solomon 2:4"
  },
  {
    "title": "Salvation is a gift of grace — accept it by faith.",
    "message": "Salvation is a gift of grace — accept it by faith.",
    "verse_text": "For by grace you have been saved through faith. — Ephesians 2:8"
  },
  {
    "title": "Remember God's blessings and give Him thanks.",
    "message": "Remember God's blessings and give Him thanks.",
    "verse_text": "Forget not all his benefits... — Psalm 103:2"
  },
  {
    "title": "Invite God into every step and He will guide you.",
    "message": "Invite God into every step and He will guide you.",
    "verse_text": "In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:6"
  },
  {
    "title": "Let love guide every action you take.",
    "message": "Let love guide every action you take.",
    "verse_text": "Do everything in love. — 1 Corinthians 16:14"
  },
  {
    "title": "Call on the Lord; He is close to those who seek Him.",
    "message": "Call on the Lord; He is close to those who seek Him.",
    "verse_text": "The Lord is near to all who call on him... — Psalm 145:18"
  },
  {
    "title": "Show kindness and forgiveness as God showed to you.",
    "message": "Show kindness and forgiveness as God showed to you.",
    "verse_text": "Be kind to one another, tenderhearted, forgiving one another... — Ephesians 4:32"
  },
  {
    "title": "God will work all things for your good when you trust Him.",
    "message": "God will work all things for your good when you trust Him.",
    "verse_text": "In all things God works for the good of those who love him. — Romans 8:28"
  },
  {
    "title": "Find strength in the Lord and His power.",
    "message": "Find strength in the Lord and His power.",
    "verse_text": "Be strong in the Lord and in his mighty power. — Ephesians 6:10"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "Through every storm, God is with you and will carry you.",
    "message": "Through every storm, God is with you and will carry you.",
    "verse_text": "When you pass through the waters, I will be with you; through the rivers, they shall not overwhelm you. — Isaiah 43:2"
  },
  {
    "title": "Put God first and He will provide what you need.",
    "message": "Put God first and He will provide what you need.",
    "verse_text": "Seek first the kingdom of God and his righteousness... — Matthew 6:33"
  },
  {
    "title": "Let love lead — patient, kind, and true.",
    "message": "Let love lead — patient, kind, and true.",
    "verse_text": "Love is patient, love is kind... — 1 Corinthians 13:4"
  },
  {
    "title": "Wait on the Lord — He will renew your strength.",
    "message": "Wait on the Lord — He will renew your strength.",
    "verse_text": "Those who hope in the Lord will renew their strength. — Isaiah 40:31"
  },
  {
    "title": "God has good plans for your future — hope and purpose await.",
    "message": "God has good plans for your future — hope and purpose await.",
    "verse_text": "For I know the plans I have for you, plans to prosper you and not to harm you. — Jeremiah 29:11"
  },
  {
    "title": "With Christ's strength, you can face any challenge.",
    "message": "With Christ's strength, you can face any challenge.",
    "verse_text": "I can do all things through Christ who strengthens me. — Philippians 4:13"
  },
  {
    "title": "Jesus satisfies the deepest hunger of your soul.",
    "message": "Jesus satisfies the deepest hunger of your soul.",
    "verse_text": "I am the bread of life... — John 6:35"
  },
  {
    "title": "Faith is trusting God even when you can't see the outcome.",
    "message": "Faith is trusting God even when you can't see the outcome.",
    "verse_text": "Now faith is confidence in what we hope for and assurance about what we do not see. — Hebrews 11:1"
  },
  {
    "title": "Let love guide every action you take.",
    "message": "Let love guide every action you take.",
    "verse_text": "Do everything in love. — 1 Corinthians 16:14"
  },
  {
    "title": "Jesus satisfies the deepest hunger of your soul.",
    "message": "Jesus satisfies the deepest hunger of your soul.",
    "verse_text": "I am the bread of life... — John 6:35"
  },
  {
    "title": "Trust God to provide for your needs; don't be anxious.",
    "message": "Trust God to provide for your needs; don't be anxious.",
    "verse_text": "Do not be anxious about your life... — Luke 12:22"
  },
  {
    "title": "Confess your wrongs — God forgives and restores.",
    "message": "Confess your wrongs — God forgives and restores.",
    "verse_text": "If we confess our sins, he is faithful and just to forgive us our sins. — 1 John 1:9"
  },
  {
    "title": "Receive the peace of Jesus — it calms every storm.",
    "message": "Receive the peace of Jesus — it calms every storm.",
    "verse_text": "Peace I leave with you; my peace I give to you. — John 14:27"
  },
  {
    "title": "God is near when your heart is broken and will heal you.",
    "message": "God is near when your heart is broken and will heal you.",
    "verse_text": "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18"
  },
  {
    "title": "Persevere through tests and receive God's reward.",
    "message": "Persevere through tests and receive God's reward.",
    "verse_text": "Blessed is the man who remains steadfast under trial... — James 1:12"
  },
  {
    "title": "God gives perfect peace to those who trust Him.",
    "message": "God gives perfect peace to those who trust Him.",
    "verse_text": "You keep in perfect peace those whose minds are steadfast... — Isaiah 26:3"
  },
  {
    "title": "God rejoices over you and quiets you with His love.",
    "message": "God rejoices over you and quiets you with His love.",
    "verse_text": "The Lord your God is with you... he will quiet you with his love. — Zephaniah 3:17"
  },
  {
    "title": "Let Jesus' peace lead your life and choices.",
    "message": "Let Jesus' peace lead your life and choices.",
    "verse_text": "Let the peace of Christ rule in your hearts. — Colossians 3:15"
  },
  {
    "title": "With God, nothing is impossible.",
    "message": "With God, nothing is impossible.",
    "verse_text": "For nothing will be impossible with God. — Luke 1:37"
  },
  {
    "title": "Pray in faith and believe that God answers.",
    "message": "Pray in faith and believe that God answers.",
    "verse_text": "Whatever you ask in prayer, believe that you have received it... — Mark 11:24"
  },
  {
    "title": "God can do far more than you hope or can imagine.",
    "message": "God can do far more than you hope or can imagine.",
    "verse_text": "He is able to do immeasurably more than all we ask or imagine. — Ephesians 3:20"
  },
  {
    "title": "Fear not — God is with you and will strengthen you.",
    "message": "Fear not — God is with you and will strengthen you.",
    "verse_text": "Do not fear, for I am with you; do not be dismayed, for I am your God. — Isaiah 41:10"
  },
  {
    "title": "Call on Jesus and find salvation and hope.",
    "message": "Call on Jesus and find salvation and hope.",
    "verse_text": "Everyone who calls on the name of the Lord will be saved. — Acts 2:21"
  },
  {
    "title": "Jesus waits for you — open your heart to Him.",
    "message": "Jesus waits for you — open your heart to Him.",
    "verse_text": "Behold, I stand at the door and knock... — Revelation 3:20"
  },
  {
    "title": "Jesus is the light that guides your path.",
    "message": "Jesus is the light that guides your path.",
    "verse_text": "I am the light of the world... — John 8:12"
  },
  {
    "title": "Clothe yourself with compassion, kindness, and humility.",
    "message": "Clothe yourself with compassion, kindness, and humility.",
    "verse_text": "Put on then, as God's chosen ones, compassionate hearts... — Colossians 3:12"
  },
  {
    "title": "Submit to God and stand against evil; it will flee.",
    "message": "Submit to God and stand against evil; it will flee.",
    "verse_text": "Submit yourselves to God; resist the devil, and he will flee from you. — James 4:7"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "The Spirit brings love, joy, peace, and goodness into you.",
    "message": "The Spirit brings love, joy, peace, and goodness into you.",
    "verse_text": "The fruit of the Spirit is love, joy, peace... — Galatians 5:22"
  },
  {
    "title": "In Christ you are made new — old things pass away.",
    "message": "In Christ you are made new — old things pass away.",
    "verse_text": "If anyone is in Christ, the new creation has come: the old is gone. — 2 Corinthians 5:17"
  },
  {
    "title": "Show kindness and forgiveness as God showed to you.",
    "message": "Show kindness and forgiveness as God showed to you.",
    "verse_text": "Be kind to one another, tenderhearted, forgiving one another... — Ephesians 4:32"
  },
  {
    "title": "Pray in faith and believe that God answers.",
    "message": "Pray in faith and believe that God answers.",
    "verse_text": "Whatever you ask in prayer, believe that you have received it... — Mark 11:24"
  },
  {
    "title": "Jesus gives life in full measure — abundant and meaningful.",
    "message": "Jesus gives life in full measure — abundant and meaningful.",
    "verse_text": "I came that they may have life and have it abundantly. — John 10:10"
  },
  {
    "title": "Jesus waits for you — open your heart to Him.",
    "message": "Jesus waits for you — open your heart to Him.",
    "verse_text": "Behold, I stand at the door and knock... — Revelation 3:20"
  },
  {
    "title": "Wait on the Lord — He will renew your strength.",
    "message": "Wait on the Lord — He will renew your strength.",
    "verse_text": "Those who hope in the Lord will renew their strength. — Isaiah 40:31"
  },
  {
    "title": "God's grace has come to save all who believe.",
    "message": "God's grace has come to save all who believe.",
    "verse_text": "For the grace of God has appeared, bringing salvation to all people. — Titus 2:11"
  },
  {
    "title": "Keep love at the center; it covers many sins.",
    "message": "Keep love at the center; it covers many sins.",
    "verse_text": "Above all, keep loving one another earnestly... — 1 Peter 4:8"
  },
  {
    "title": "Keep rejoicing — joy is a command and a gift.",
    "message": "Keep rejoicing — joy is a command and a gift.",
    "verse_text": "Rejoice always. — 1 Thessalonians 5:16"
  },
  {
    "title": "Humility before God brings blessing.",
    "message": "Humility before God brings blessing.",
    "verse_text": "Blessed are the poor in spirit... — Matthew 5:3"
  },
  {
    "title": "God's mercy never ends — His love sustains you.",
    "message": "God's mercy never ends — His love sustains you.",
    "verse_text": "Because of the Lord's great love we are not consumed, for his mercies never fail. — Lamentations 3:22"
  },
  {
    "title": "Ask God for wisdom — He gives generously to those who ask.",
    "message": "Ask God for wisdom — He gives generously to those who ask.",
    "verse_text": "If any lacks wisdom, ask God, who gives generously. — James 1:5"
  },
  {
    "title": "God fills you with hope, joy, and peace as you trust Him.",
    "message": "God fills you with hope, joy, and peace as you trust Him.",
    "verse_text": "May the God of hope fill you with all joy and peace... — Romans 15:13"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "Remember God's blessings and give Him thanks.",
    "message": "Remember God's blessings and give Him thanks.",
    "verse_text": "Forget not all his benefits... — Psalm 103:2"
  },
  {
    "title": "Put God first and He will provide what you need.",
    "message": "Put God first and He will provide what you need.",
    "verse_text": "Seek first the kingdom of God and his righteousness... — Matthew 6:33"
  },
  {
    "title": "You are chosen by God and called to shine His light.",
    "message": "You are chosen by God and called to shine His light.",
    "verse_text": "You are a chosen people, a royal priesthood... — 1 Peter 2:9"
  },
  {
    "title": "Find strength in the Lord and His power.",
    "message": "Find strength in the Lord and His power.",
    "verse_text": "Be strong in the Lord and in his mighty power. — Ephesians 6:10"
  },
  {
    "title": "Trust God to provide for your needs; don't be anxious.",
    "message": "Trust God to provide for your needs; don't be anxious.",
    "verse_text": "Do not be anxious about your life... — Luke 12:22"
  },
  {
    "title": "Pray confidently — God hears and answers.",
    "message": "Pray confidently — God hears and answers.",
    "verse_text": "This is the confidence we have in approaching God... — 1 John 5:14"
  },
  {
    "title": "Work for the Lord with all your heart and offer it to Him.",
    "message": "Work for the Lord with all your heart and offer it to Him.",
    "verse_text": "Whatever you do, work heartily, as for the Lord... — Colossians 3:23"
  },
  {
    "title": "Let love lead — patient, kind, and true.",
    "message": "Let love lead — patient, kind, and true.",
    "verse_text": "Love is patient, love is kind... — 1 Corinthians 13:4"
  },
  {
    "title": "God loved us first — Christ died to bring us back to Him.",
    "message": "God loved us first — Christ died to bring us back to Him.",
    "verse_text": "God demonstrates his own love for us in this: while we were still sinners, Christ died for us. — Romans 5:8"
  },
  {
    "title": "Keep rejoicing — joy is a command and a gift.",
    "message": "Keep rejoicing — joy is a command and a gift.",
    "verse_text": "Rejoice always. — 1 Thessalonians 5:16"
  },
  {
    "title": "Invite God into every step and He will guide you.",
    "message": "Invite God into every step and He will guide you.",
    "verse_text": "In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:6"
  },
  {
    "title": "Jesus waits for you — open your heart to Him.",
    "message": "Jesus waits for you — open your heart to Him.",
    "verse_text": "Behold, I stand at the door and knock... — Revelation 3:20"
  },
  {
    "title": "God is good and a safe refuge when troubles come.",
    "message": "God is good and a safe refuge when troubles come.",
    "verse_text": "The Lord is good, a refuge in times of trouble... — Nahum 1:7"
  },
  {
    "title": "Trust God to provide for your needs; don't be anxious.",
    "message": "Trust God to provide for your needs; don't be anxious.",
    "verse_text": "Do not be anxious about your life... — Luke 12:22"
  },
  {
    "title": "God is your light and salvation — you need not fear.",
    "message": "God is your light and salvation — you need not fear.",
    "verse_text": "The Lord is my light and my salvation; whom shall I fear? — Psalm 27:1"
  },
  {
    "title": "God fills you with hope, joy, and peace as you trust Him.",
    "message": "God fills you with hope, joy, and peace as you trust Him.",
    "verse_text": "May the God of hope fill you with all joy and peace... — Romans 15:13"
  },
  {
    "title": "God gives you power, love, and self-control, not fear.",
    "message": "God gives you power, love, and self-control, not fear.",
    "verse_text": "God gave us a spirit not of fear but of power and love and self-control. — 2 Timothy 1:7"
  },
  {
    "title": "In Christ you are made new — old things pass away.",
    "message": "In Christ you are made new — old things pass away.",
    "verse_text": "If anyone is in Christ, the new creation has come: the old is gone. — 2 Corinthians 5:17"
  },
  {
    "title": "God protects you — no weapon formed will succeed.",
    "message": "God protects you — no weapon formed will succeed.",
    "verse_text": "No weapon formed against you shall prosper. — Isaiah 54:17"
  },
  {
    "title": "God's love for you is unbreakable and eternal.",
    "message": "God's love for you is unbreakable and eternal.",
    "verse_text": "Nothing can separate us from the love of God in Christ Jesus. — Romans 8:38"
  },
  {
    "title": "God brings you into places of joy and celebration.",
    "message": "God brings you into places of joy and celebration.",
    "verse_text": "He brought me to the banquet hall... — Song of Solomon 2:4"
  },
  {
    "title": "God is your light and salvation — you need not fear.",
    "message": "God is your light and salvation — you need not fear.",
    "verse_text": "The Lord is my light and my salvation; whom shall I fear? — Psalm 27:1"
  },
  {
    "title": "When anxious, bring everything to God in prayer.",
    "message": "When anxious, bring everything to God in prayer.",
    "verse_text": "Do not be anxious about anything; pray about everything. — Philippians 4:6"
  },
  {
    "title": "The Spirit brings love, joy, peace, and goodness into you.",
    "message": "The Spirit brings love, joy, peace, and goodness into you.",
    "verse_text": "The fruit of the Spirit is love, joy, peace... — Galatians 5:22"
  },
  {
    "title": "Put God first and He will provide what you need.",
    "message": "Put God first and He will provide what you need.",
    "verse_text": "Seek first the kingdom of God and his righteousness... — Matthew 6:33"
  },
  {
    "title": "Jesus satisfies the deepest hunger of your soul.",
    "message": "Jesus satisfies the deepest hunger of your soul.",
    "verse_text": "I am the bread of life... — John 6:35"
  },
  {
    "title": "God brings you into places of joy and celebration.",
    "message": "God brings you into places of joy and celebration.",
    "verse_text": "He brought me to the banquet hall... — Song of Solomon 2:4"
  },
  {
    "title": "God is your light and salvation — you need not fear.",
    "message": "God is your light and salvation — you need not fear.",
    "verse_text": "The Lord is my light and my salvation; whom shall I fear? — Psalm 27:1"
  },
  {
    "title": "Confess your wrongs — God forgives and restores.",
    "message": "Confess your wrongs — God forgives and restores.",
    "verse_text": "If we confess our sins, he is faithful and just to forgive us our sins. — 1 John 1:9"
  },
  {
    "title": "God is near when your heart is broken and will heal you.",
    "message": "God is near when your heart is broken and will heal you.",
    "verse_text": "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18"
  },
  {
    "title": "Give your worries to God; He cares deeply for you.",
    "message": "Give your worries to God; He cares deeply for you.",
    "verse_text": "Cast all your anxiety on him because he cares for you. — 1 Peter 5:7"
  },
  {
    "title": "Receive the peace of Jesus — it calms every storm.",
    "message": "Receive the peace of Jesus — it calms every storm.",
    "verse_text": "Peace I leave with you; my peace I give to you. — John 14:27"
  },
  {
    "title": "Through every storm, God is with you and will carry you.",
    "message": "Through every storm, God is with you and will carry you.",
    "verse_text": "When you pass through the waters, I will be with you; through the rivers, they shall not overwhelm you. — Isaiah 43:2"
  },
  {
    "title": "With Christ's strength, you can face any challenge.",
    "message": "With Christ's strength, you can face any challenge.",
    "verse_text": "I can do all things through Christ who strengthens me. — Philippians 4:13"
  },
  {
    "title": "Be a peacemaker and you will be called God's child.",
    "message": "Be a peacemaker and you will be called God's child.",
    "verse_text": "Blessed are the peacemakers... — Matthew 5:9"
  },
  {
    "title": "God is good and a safe refuge when troubles come.",
    "message": "God is good and a safe refuge when troubles come.",
    "verse_text": "The Lord is good, a refuge in times of trouble... — Nahum 1:7"
  },
  {
    "title": "Let Jesus' peace lead your life and choices.",
    "message": "Let Jesus' peace lead your life and choices.",
    "verse_text": "Let the peace of Christ rule in your hearts. — Colossians 3:15"
  },
  {
    "title": "Find strength in the Lord and His power.",
    "message": "Find strength in the Lord and His power.",
    "verse_text": "Be strong in the Lord and in his mighty power. — Ephesians 6:10"
  },
  {
    "title": "God walks with you through every valley; do not fear.",
    "message": "God walks with you through every valley; do not fear.",
    "verse_text": "Even though I walk through the darkest valley, I will fear no evil. — Psalm 23:4"
  },
  {
    "title": "Jesus gives life in full measure — abundant and meaningful.",
    "message": "Jesus gives life in full measure — abundant and meaningful.",
    "verse_text": "I came that they may have life and have it abundantly. — John 10:10"
  },
  {
    "title": "Blessing comes to those who trust God.",
    "message": "Blessing comes to those who trust God.",
    "verse_text": "Blessed is the man who trusts in the Lord... — Jeremiah 17:7"
  },
  {
    "title": "God provides a way through every temptation.",
    "message": "God provides a way through every temptation.",
    "verse_text": "No temptation has overtaken you that is not common to man... — 1 Corinthians 10:13"
  },
  {
    "title": "In Christ you are not condemned; you are free.",
    "message": "In Christ you are not condemned; you are free.",
    "verse_text": "There is therefore now no condemnation for those who are in Christ. — Romans 8:1"
  },
  {
    "title": "Jesus is the light that guides your path.",
    "message": "Jesus is the light that guides your path.",
    "verse_text": "I am the light of the world... — John 8:12"
  },
  {
    "title": "God's Word guides you — it lights your way.",
    "message": "God's Word guides you — it lights your way.",
    "verse_text": "Your word is a lamp to my feet and a light to my path. — Psalm 119:105"
  },
  {
    "title": "You are never alone — He guides and cares for you.",
    "message": "You are never alone — He guides and cares for you.",
    "verse_text": "The Lord is my shepherd; I lack nothing. — Psalm 23:1"
  },
  {
    "title": "Encourage one another toward love and good deeds.",
    "message": "Encourage one another toward love and good deeds.",
    "verse_text": "And let us consider how to stir up one another to love and good works. — Hebrews 10:24"
  },
  {
    "title": "God is your light and salvation — you need not fear.",
    "message": "God is your light and salvation — you need not fear.",
    "verse_text": "The Lord is my light and my salvation; whom shall I fear? — Psalm 27:1"
  },
  {
    "title": "Confess your wrongs — God forgives and restores.",
    "message": "Confess your wrongs — God forgives and restores.",
    "verse_text": "If we confess our sins, he is faithful and just to forgive us our sins. — 1 John 1:9"
  },
  {
    "title": "God's love is great — He gave His Son for us.",
    "message": "God's love is great — He gave His Son for us.",
    "verse_text": "For God so loved the world that he gave his only Son. — John 3:16"
  },
  {
    "title": "God's grace has come to save all who believe.",
    "message": "God's grace has come to save all who believe.",
    "verse_text": "For the grace of God has appeared, bringing salvation to all people. — Titus 2:11"
  },
  {
    "title": "Bring your burdens to Jesus — He will give you rest.",
    "message": "Bring your burdens to Jesus — He will give you rest.",
    "verse_text": "Come to me, all who are weary, and I will give you rest. — Matthew 11:28"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "Ask God boldly — He listens and responds.",
    "message": "Ask God boldly — He listens and responds.",
    "verse_text": "Ask, and it will be given to you... — Matthew 7:7"
  },
  {
    "title": "Jesus promises to be with you always, no matter what.",
    "message": "Jesus promises to be with you always, no matter what.",
    "verse_text": "I am with you always, to the end of the age. — Matthew 28:20"
  },
  {
    "title": "Receive the peace of Jesus — it calms every storm.",
    "message": "Receive the peace of Jesus — it calms every storm.",
    "verse_text": "Peace I leave with you; my peace I give to you. — John 14:27"
  },
  {
    "title": "God is your safe place and strength in hard times.",
    "message": "God is your safe place and strength in hard times.",
    "verse_text": "God is our refuge and strength, an ever-present help in trouble. — Psalm 46:1"
  },
  {
    "title": "Encourage one another toward love and good deeds.",
    "message": "Encourage one another toward love and good deeds.",
    "verse_text": "And let us consider how to stir up one another to love and good works. — Hebrews 10:24"
  },
  {
    "title": "Find joy in God and He will fulfill the desires He placed in you.",
    "message": "Find joy in God and He will fulfill the desires He placed in you.",
    "verse_text": "Delight yourself in the Lord, and he will give you the desires of your heart. — Psalm 37:4"
  },
  {
    "title": "Keep love at the center; it covers many sins.",
    "message": "Keep love at the center; it covers many sins.",
    "verse_text": "Above all, keep loving one another earnestly... — 1 Peter 4:8"
  },
  {
    "title": "Live with justice, mercy, and humility before God.",
    "message": "Live with justice, mercy, and humility before God.",
    "verse_text": "Act justly, love mercy, walk humbly with your God. — Micah 6:8"
  },
  {
    "title": "Let Jesus' peace lead your life and choices.",
    "message": "Let Jesus' peace lead your life and choices.",
    "verse_text": "Let the peace of Christ rule in your hearts. — Colossians 3:15"
  },
  {
    "title": "God provides everything you need for godly living.",
    "message": "God provides everything you need for godly living.",
    "verse_text": "His divine power has given us everything needed for life and godliness... — 2 Peter 1:3"
  },
  {
    "title": "Work for the Lord with all your heart and offer it to Him.",
    "message": "Work for the Lord with all your heart and offer it to Him.",
    "verse_text": "Whatever you do, work heartily, as for the Lord... — Colossians 3:23"
  },
  {
    "title": "Faith pleases God; trust Him and step out.",
    "message": "Faith pleases God; trust Him and step out.",
    "verse_text": "Without faith it is impossible to please God... — Hebrews 11:6"
  },
  {
    "title": "Approach God with confidence to find grace and help.",
    "message": "Approach God with confidence to find grace and help.",
    "verse_text": "Let us then with confidence draw near to the throne of grace... — Hebrews 4:16"
  },
  {
    "title": "God walks with you through every valley; do not fear.",
    "message": "God walks with you through every valley; do not fear.",
    "verse_text": "Even though I walk through the darkest valley, I will fear no evil. — Psalm 23:4"
  },
  {
    "title": "Put God first and He will provide what you need.",
    "message": "Put God first and He will provide what you need.",
    "verse_text": "Seek first the kingdom of God and his righteousness... — Matthew 6:33"
  },
  {
    "title": "God protects you — no weapon formed will succeed.",
    "message": "God protects you — no weapon formed will succeed.",
    "verse_text": "No weapon formed against you shall prosper. — Isaiah 54:17"
  },
  {
    "title": "Show kindness and forgiveness as God showed to you.",
    "message": "Show kindness and forgiveness as God showed to you.",
    "verse_text": "Be kind to one another, tenderhearted, forgiving one another... — Ephesians 4:32"
  },
  {
    "title": "God's Word guides you — it lights your way.",
    "message": "God's Word guides you — it lights your way.",
    "verse_text": "Your word is a lamp to my feet and a light to my path. — Psalm 119:105"
  },
  {
    "title": "Look to God as your helper — He provides support.",
    "message": "Look to God as your helper — He provides support.",
    "verse_text": "I lift up my eyes to the hills... where does my help come from? — Psalm 121:1"
  },
  {
    "title": "Trials produce patience — choose joy through them.",
    "message": "Trials produce patience — choose joy through them.",
    "verse_text": "Consider it pure joy when you face trials of many kinds. — James 1:2"
  },
  {
    "title": "In Christ you are not condemned; you are free.",
    "message": "In Christ you are not condemned; you are free.",
    "verse_text": "There is therefore now no condemnation for those who are in Christ. — Romans 8:1"
  },
  {
    "title": "Live today trusting God; He will care for your tomorrow.",
    "message": "Live today trusting God; He will care for your tomorrow.",
    "verse_text": "Do not worry about tomorrow... — Matthew 6:34"
  },
  {
    "title": "Humility before God brings blessing.",
    "message": "Humility before God brings blessing.",
    "verse_text": "Blessed are the poor in spirit... — Matthew 5:3"
  },
  {
    "title": "Put God first and He will provide what you need.",
    "message": "Put God first and He will provide what you need.",
    "verse_text": "Seek first the kingdom of God and his righteousness... — Matthew 6:33"
  },
  {
    "title": "Give your worries to God; He cares deeply for you.",
    "message": "Give your worries to God; He cares deeply for you.",
    "verse_text": "Cast all your anxiety on him because he cares for you. — 1 Peter 5:7"
  },
  {
    "title": "In Christ you are not condemned; you are free.",
    "message": "In Christ you are not condemned; you are free.",
    "verse_text": "There is therefore now no condemnation for those who are in Christ. — Romans 8:1"
  },
  {
    "title": "God rejoices over you and quiets you with His love.",
    "message": "God rejoices over you and quiets you with His love.",
    "verse_text": "The Lord your God is with you... he will quiet you with his love. — Zephaniah 3:17"
  },
  {
    "title": "God provides a way through every temptation.",
    "message": "God provides a way through every temptation.",
    "verse_text": "No temptation has overtaken you that is not common to man... — 1 Corinthians 10:13"
  },
  {
    "title": "Give your worries to God; He cares deeply for you.",
    "message": "Give your worries to God; He cares deeply for you.",
    "verse_text": "Cast all your anxiety on him because he cares for you. — 1 Peter 5:7"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "Trust God with your giving and watch Him provide.",
    "message": "Trust God with your giving and watch Him provide.",
    "verse_text": "Bring the whole tithe into the storehouse... — Malachi 3:10"
  },
  {
    "title": "Live today trusting God; He will care for your tomorrow.",
    "message": "Live today trusting God; He will care for your tomorrow.",
    "verse_text": "Do not worry about tomorrow... — Matthew 6:34"
  },
  {
    "title": "God protects you — no weapon formed will succeed.",
    "message": "God protects you — no weapon formed will succeed.",
    "verse_text": "No weapon formed against you shall prosper. — Isaiah 54:17"
  },
  {
    "title": "Sin leads to death, but God gives the gift of life through Christ.",
    "message": "Sin leads to death, but God gives the gift of life through Christ.",
    "verse_text": "The wages of sin is death, but the gift of God is eternal life in Christ Jesus. — Romans 6:23"
  },
  {
    "title": "Keep hope alive, stay patient in hardship, and pray constantly.",
    "message": "Keep hope alive, stay patient in hardship, and pray constantly.",
    "verse_text": "Be joyful in hope, patient in affliction, faithful in prayer. — Romans 12:12"
  },
  {
    "title": "You are chosen by God and called to shine His light.",
    "message": "You are chosen by God and called to shine His light.",
    "verse_text": "You are a chosen people, a royal priesthood... — 1 Peter 2:9"
  },
  {
    "title": "God's Word guides you — it lights your way.",
    "message": "God's Word guides you — it lights your way.",
    "verse_text": "Your word is a lamp to my feet and a light to my path. — Psalm 119:105"
  },
  {
    "title": "In Christ you are not condemned; you are free.",
    "message": "In Christ you are not condemned; you are free.",
    "verse_text": "There is therefore now no condemnation for those who are in Christ. — Romans 8:1"
  },
  {
    "title": "When anxious, bring everything to God in prayer.",
    "message": "When anxious, bring everything to God in prayer.",
    "verse_text": "Do not be anxious about anything; pray about everything. — Philippians 4:6"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "God is love — live and reflect His love.",
    "message": "God is love — live and reflect His love.",
    "verse_text": "Whoever does not love does not know God, because God is love. — 1 John 4:8"
  },
  {
    "title": "Pray confidently — God hears and answers.",
    "message": "Pray confidently — God hears and answers.",
    "verse_text": "This is the confidence we have in approaching God... — 1 John 5:14"
  },
  {
    "title": "God provides everything you need for godly living.",
    "message": "God provides everything you need for godly living.",
    "verse_text": "His divine power has given us everything needed for life and godliness... — 2 Peter 1:3"
  },
  {
    "title": "Act in humility and value others above self.",
    "message": "Act in humility and value others above self.",
    "verse_text": "Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. — Philippians 2:3"
  },
  {
    "title": "Fear not — God is with you and will strengthen you.",
    "message": "Fear not — God is with you and will strengthen you.",
    "verse_text": "Do not fear, for I am with you; do not be dismayed, for I am your God. — Isaiah 41:10"
  },
  {
    "title": "God will finish the work He started in your life.",
    "message": "God will finish the work He started in your life.",
    "verse_text": "He who began a good work in you will bring it to completion... — Philippians 1:6"
  },
  {
    "title": "Submit to God and stand against evil; it will flee.",
    "message": "Submit to God and stand against evil; it will flee.",
    "verse_text": "Submit yourselves to God; resist the devil, and he will flee from you. — James 4:7"
  },
  {
    "title": "God's mercy never ends — His love sustains you.",
    "message": "God's mercy never ends — His love sustains you.",
    "verse_text": "Because of the Lord's great love we are not consumed, for his mercies never fail. — Lamentations 3:22"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "God has good plans for your future — hope and purpose await.",
    "message": "God has good plans for your future — hope and purpose await.",
    "verse_text": "For I know the plans I have for you, plans to prosper you and not to harm you. — Jeremiah 29:11"
  },
  {
    "title": "Receive the peace of Jesus — it calms every storm.",
    "message": "Receive the peace of Jesus — it calms every storm.",
    "verse_text": "Peace I leave with you; my peace I give to you. — John 14:27"
  },
  {
    "title": "Let love lead — patient, kind, and true.",
    "message": "Let love lead — patient, kind, and true.",
    "verse_text": "Love is patient, love is kind... — 1 Corinthians 13:4"
  },
  {
    "title": "Ask God for wisdom — He gives generously to those who ask.",
    "message": "Ask God for wisdom — He gives generously to those who ask.",
    "verse_text": "If any lacks wisdom, ask God, who gives generously. — James 1:5"
  },
  {
    "title": "Blessing comes to those who trust God.",
    "message": "Blessing comes to those who trust God.",
    "verse_text": "Blessed is the man who trusts in the Lord... — Jeremiah 17:7"
  },
  {
    "title": "Blessing comes to those who trust God.",
    "message": "Blessing comes to those who trust God.",
    "verse_text": "Blessed is the man who trusts in the Lord... — Jeremiah 17:7"
  },
  {
    "title": "God's Word guides you — it lights your way.",
    "message": "God's Word guides you — it lights your way.",
    "verse_text": "Your word is a lamp to my feet and a light to my path. — Psalm 119:105"
  },
  {
    "title": "Trust God to provide for your needs; don't be anxious.",
    "message": "Trust God to provide for your needs; don't be anxious.",
    "verse_text": "Do not be anxious about your life... — Luke 12:22"
  },
  {
    "title": "Look to God as your helper — He provides support.",
    "message": "Look to God as your helper — He provides support.",
    "verse_text": "I lift up my eyes to the hills... where does my help come from? — Psalm 121:1"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "Trust God fully and don't rely only on your own insight.",
    "message": "Trust God fully and don't rely only on your own insight.",
    "verse_text": "Trust in the Lord with all your heart and lean not on your own understanding. — Proverbs 3:5"
  },
  {
    "title": "God's mercy never ends — His love sustains you.",
    "message": "God's mercy never ends — His love sustains you.",
    "verse_text": "Because of the Lord's great love we are not consumed, for his mercies never fail. — Lamentations 3:22"
  },
  {
    "title": "God's love is great — He gave His Son for us.",
    "message": "God's love is great — He gave His Son for us.",
    "verse_text": "For God so loved the world that he gave his only Son. — John 3:16"
  },
  {
    "title": "God brings you into places of joy and celebration.",
    "message": "God brings you into places of joy and celebration.",
    "verse_text": "He brought me to the banquet hall... — Song of Solomon 2:4"
  },
  {
    "title": "Believe in Jesus and be saved; faith brings deliverance.",
    "message": "Believe in Jesus and be saved; faith brings deliverance.",
    "verse_text": "Believe in the Lord Jesus, and you will be saved—you and your household. — Acts 16:31"
  },
  {
    "title": "When anxious, bring everything to God in prayer.",
    "message": "When anxious, bring everything to God in prayer.",
    "verse_text": "Do not be anxious about anything; pray about everything. — Philippians 4:6"
  },
  {
    "title": "Find shelter in God — He watches over you.",
    "message": "Find shelter in God — He watches over you.",
    "verse_text": "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. — Psalm 91:1"
  },
  {
    "title": "God rejoices over you and quiets you with His love.",
    "message": "God rejoices over you and quiets you with His love.",
    "verse_text": "The Lord your God is with you... he will quiet you with his love. — Zephaniah 3:17"
  },
  {
    "title": "Treat others with the kindness you wish to receive.",
    "message": "Treat others with the kindness you wish to receive.",
    "verse_text": "Do to others as you would have them do to you. — Luke 6:31"
  },
  {
    "title": "Faith is trusting God even when you can't see the outcome.",
    "message": "Faith is trusting God even when you can't see the outcome.",
    "verse_text": "Now faith is confidence in what we hope for and assurance about what we do not see. — Hebrews 11:1"
  },
  {
    "title": "Jesus waits for you — open your heart to Him.",
    "message": "Jesus waits for you — open your heart to Him.",
    "verse_text": "Behold, I stand at the door and knock... — Revelation 3:20"
  },
  {
    "title": "Treat others with the kindness you wish to receive.",
    "message": "Treat others with the kindness you wish to receive.",
    "verse_text": "Do to others as you would have them do to you. — Luke 6:31"
  },
  {
    "title": "Look to God as your helper — He provides support.",
    "message": "Look to God as your helper — He provides support.",
    "verse_text": "I lift up my eyes to the hills... where does my help come from? — Psalm 121:1"
  },
  {
    "title": "God's love is great — He gave His Son for us.",
    "message": "God's love is great — He gave His Son for us.",
    "verse_text": "For God so loved the world that he gave his only Son. — John 3:16"
  },
  {
    "title": "Show kindness and forgiveness as God showed to you.",
    "message": "Show kindness and forgiveness as God showed to you.",
    "verse_text": "Be kind to one another, tenderhearted, forgiving one another... — Ephesians 4:32"
  },
  {
    "title": "Keep love at the center; it covers many sins.",
    "message": "Keep love at the center; it covers many sins.",
    "verse_text": "Above all, keep loving one another earnestly... — 1 Peter 4:8"
  },
  {
    "title": "God can do far more than you hope or can imagine.",
    "message": "God can do far more than you hope or can imagine.",
    "verse_text": "He is able to do immeasurably more than all we ask or imagine. — Ephesians 3:20"
  },
  {
    "title": "Keep hope alive, stay patient in hardship, and pray constantly.",
    "message": "Keep hope alive, stay patient in hardship, and pray constantly.",
    "verse_text": "Be joyful in hope, patient in affliction, faithful in prayer. — Romans 12:12"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "God's love is great — He gave His Son for us.",
    "message": "God's love is great — He gave His Son for us.",
    "verse_text": "For God so loved the world that he gave his only Son. — John 3:16"
  },
  {
    "title": "You are never alone — He guides and cares for you.",
    "message": "You are never alone — He guides and cares for you.",
    "verse_text": "The Lord is my shepherd; I lack nothing. — Psalm 23:1"
  },
  {
    "title": "Clothe yourself with compassion, kindness, and humility.",
    "message": "Clothe yourself with compassion, kindness, and humility.",
    "verse_text": "Put on then, as God's chosen ones, compassionate hearts... — Colossians 3:12"
  },
  {
    "title": "God can do far more than you hope or can imagine.",
    "message": "God can do far more than you hope or can imagine.",
    "verse_text": "He is able to do immeasurably more than all we ask or imagine. — Ephesians 3:20"
  },
  {
    "title": "Keep love at the center; it covers many sins.",
    "message": "Keep love at the center; it covers many sins.",
    "verse_text": "Above all, keep loving one another earnestly... — 1 Peter 4:8"
  },
  {
    "title": "Ask God for wisdom — He gives generously to those who ask.",
    "message": "Ask God for wisdom — He gives generously to those who ask.",
    "verse_text": "If any lacks wisdom, ask God, who gives generously. — James 1:5"
  },
  {
    "title": "Approach God with confidence to find grace and help.",
    "message": "Approach God with confidence to find grace and help.",
    "verse_text": "Let us then with confidence draw near to the throne of grace... — Hebrews 4:16"
  },
  {
    "title": "Humility before God brings blessing.",
    "message": "Humility before God brings blessing.",
    "verse_text": "Blessed are the poor in spirit... — Matthew 5:3"
  },
  {
    "title": "God's Word guides you — it lights your way.",
    "message": "God's Word guides you — it lights your way.",
    "verse_text": "Your word is a lamp to my feet and a light to my path. — Psalm 119:105"
  },
  {
    "title": "Jesus gives life in full measure — abundant and meaningful.",
    "message": "Jesus gives life in full measure — abundant and meaningful.",
    "verse_text": "I came that they may have life and have it abundantly. — John 10:10"
  },
  {
    "title": "Encourage one another toward love and good deeds.",
    "message": "Encourage one another toward love and good deeds.",
    "verse_text": "And let us consider how to stir up one another to love and good works. — Hebrews 10:24"
  },
  {
    "title": "A day is coming when God will remove sorrow and pain.",
    "message": "A day is coming when God will remove sorrow and pain.",
    "verse_text": "He will wipe away every tear... — Revelation 21:4"
  },
  {
    "title": "Trials produce patience — choose joy through them.",
    "message": "Trials produce patience — choose joy through them.",
    "verse_text": "Consider it pure joy when you face trials of many kinds. — James 1:2"
  },
  {
    "title": "Pray in faith and believe that God answers.",
    "message": "Pray in faith and believe that God answers.",
    "verse_text": "Whatever you ask in prayer, believe that you have received it... — Mark 11:24"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "Give your worries to God; He cares deeply for you.",
    "message": "Give your worries to God; He cares deeply for you.",
    "verse_text": "Cast all your anxiety on him because he cares for you. — 1 Peter 5:7"
  },
  {
    "title": "God's grace has come to save all who believe.",
    "message": "God's grace has come to save all who believe.",
    "verse_text": "For the grace of God has appeared, bringing salvation to all people. — Titus 2:11"
  },
  {
    "title": "Jesus waits for you — open your heart to Him.",
    "message": "Jesus waits for you — open your heart to Him.",
    "verse_text": "Behold, I stand at the door and knock... — Revelation 3:20"
  },
  {
    "title": "Trust God with your giving and watch Him provide.",
    "message": "Trust God with your giving and watch Him provide.",
    "verse_text": "Bring the whole tithe into the storehouse... — Malachi 3:10"
  },
  {
    "title": "God is your safe place and strength in hard times.",
    "message": "God is your safe place and strength in hard times.",
    "verse_text": "God is our refuge and strength, an ever-present help in trouble. — Psalm 46:1"
  },
  {
    "title": "Put God first and He will provide what you need.",
    "message": "Put God first and He will provide what you need.",
    "verse_text": "Seek first the kingdom of God and his righteousness... — Matthew 6:33"
  },
  {
    "title": "Salvation is a gift of grace — accept it by faith.",
    "message": "Salvation is a gift of grace — accept it by faith.",
    "verse_text": "For by grace you have been saved through faith. — Ephesians 2:8"
  },
  {
    "title": "Give thanks in every situation; gratitude transforms.",
    "message": "Give thanks in every situation; gratitude transforms.",
    "verse_text": "Give thanks in all circumstances... — 1 Thessalonians 5:18"
  },
  {
    "title": "Find strength in the Lord and His power.",
    "message": "Find strength in the Lord and His power.",
    "verse_text": "Be strong in the Lord and in his mighty power. — Ephesians 6:10"
  },
  {
    "title": "The Spirit brings love, joy, peace, and goodness into you.",
    "message": "The Spirit brings love, joy, peace, and goodness into you.",
    "verse_text": "The fruit of the Spirit is love, joy, peace... — Galatians 5:22"
  },
  {
    "title": "Give thanks in every situation; gratitude transforms.",
    "message": "Give thanks in every situation; gratitude transforms.",
    "verse_text": "Give thanks in all circumstances... — 1 Thessalonians 5:18"
  },
  {
    "title": "God's grace has come to save all who believe.",
    "message": "God's grace has come to save all who believe.",
    "verse_text": "For the grace of God has appeared, bringing salvation to all people. — Titus 2:11"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "Protect your heart; it shapes your life.",
    "message": "Protect your heart; it shapes your life.",
    "verse_text": "Guard your heart above all else... — Proverbs 4:23"
  },
  {
    "title": "Faith is trusting God even when you can't see the outcome.",
    "message": "Faith is trusting God even when you can't see the outcome.",
    "verse_text": "Now faith is confidence in what we hope for and assurance about what we do not see. — Hebrews 11:1"
  },
  {
    "title": "Call on Jesus and find salvation and hope.",
    "message": "Call on Jesus and find salvation and hope.",
    "verse_text": "Everyone who calls on the name of the Lord will be saved. — Acts 2:21"
  },
  {
    "title": "God provides a way through every temptation.",
    "message": "God provides a way through every temptation.",
    "verse_text": "No temptation has overtaken you that is not common to man... — 1 Corinthians 10:13"
  },
  {
    "title": "With Christ's strength, you can face any challenge.",
    "message": "With Christ's strength, you can face any challenge.",
    "verse_text": "I can do all things through Christ who strengthens me. — Philippians 4:13"
  },
  {
    "title": "Work for the Lord with all your heart and offer it to Him.",
    "message": "Work for the Lord with all your heart and offer it to Him.",
    "verse_text": "Whatever you do, work heartily, as for the Lord... — Colossians 3:23"
  },
  {
    "title": "Jesus promises to be with you always, no matter what.",
    "message": "Jesus promises to be with you always, no matter what.",
    "verse_text": "I am with you always, to the end of the age. — Matthew 28:20"
  },
  {
    "title": "Live with justice, mercy, and humility before God.",
    "message": "Live with justice, mercy, and humility before God.",
    "verse_text": "Act justly, love mercy, walk humbly with your God. — Micah 6:8"
  },
  {
    "title": "God's grace is enough; His power shines through your weakness.",
    "message": "God's grace is enough; His power shines through your weakness.",
    "verse_text": "My grace is sufficient for you, for my power is made perfect in weakness. — 2 Corinthians 12:9"
  },
  {
    "title": "Sin leads to death, but God gives the gift of life through Christ.",
    "message": "Sin leads to death, but God gives the gift of life through Christ.",
    "verse_text": "The wages of sin is death, but the gift of God is eternal life in Christ Jesus. — Romans 6:23"
  },
  {
    "title": "Protect your heart; it shapes your life.",
    "message": "Protect your heart; it shapes your life.",
    "verse_text": "Guard your heart above all else... — Proverbs 4:23"
  },
  {
    "title": "The call of God invites you into living fellowship with Him.",
    "message": "The call of God invites you into living fellowship with Him.",
    "verse_text": "The Spirit and the bride say, 'Come' — Revelation 22:17"
  },
  {
    "title": "Pray confidently — God hears and answers.",
    "message": "Pray confidently — God hears and answers.",
    "verse_text": "This is the confidence we have in approaching God... — 1 John 5:14"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "God rejoices over you and quiets you with His love.",
    "message": "God rejoices over you and quiets you with His love.",
    "verse_text": "The Lord your God is with you... he will quiet you with his love. — Zephaniah 3:17"
  },
  {
    "title": "Run your race with perseverance and focus on Jesus.",
    "message": "Run your race with perseverance and focus on Jesus.",
    "verse_text": "Let us run with endurance the race that is set before us... — Hebrews 12:1"
  },
  {
    "title": "Blessing comes to those who trust God.",
    "message": "Blessing comes to those who trust God.",
    "verse_text": "Blessed is the man who trusts in the Lord... — Jeremiah 17:7"
  },
  {
    "title": "Fear not — God is with you and will strengthen you.",
    "message": "Fear not — God is with you and will strengthen you.",
    "verse_text": "Do not fear, for I am with you; do not be dismayed, for I am your God. — Isaiah 41:10"
  },
  {
    "title": "Faith is trusting God even when you can't see the outcome.",
    "message": "Faith is trusting God even when you can't see the outcome.",
    "verse_text": "Now faith is confidence in what we hope for and assurance about what we do not see. — Hebrews 11:1"
  },
  {
    "title": "Look to God as your helper — He provides support.",
    "message": "Look to God as your helper — He provides support.",
    "verse_text": "I lift up my eyes to the hills... where does my help come from? — Psalm 121:1"
  },
  {
    "title": "Call on Jesus and find salvation and hope.",
    "message": "Call on Jesus and find salvation and hope.",
    "verse_text": "Everyone who calls on the name of the Lord will be saved. — Acts 2:21"
  },
  {
    "title": "Trials produce patience — choose joy through them.",
    "message": "Trials produce patience — choose joy through them.",
    "verse_text": "Consider it pure joy when you face trials of many kinds. — James 1:2"
  },
  {
    "title": "With God, nothing is impossible.",
    "message": "With God, nothing is impossible.",
    "verse_text": "For nothing will be impossible with God. — Luke 1:37"
  },
  {
    "title": "A day is coming when God will remove sorrow and pain.",
    "message": "A day is coming when God will remove sorrow and pain.",
    "verse_text": "He will wipe away every tear... — Revelation 21:4"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "God gives perfect peace to those who trust Him.",
    "message": "God gives perfect peace to those who trust Him.",
    "verse_text": "You keep in perfect peace those whose minds are steadfast... — Isaiah 26:3"
  },
  {
    "title": "Fill your mind with what is true and pure.",
    "message": "Fill your mind with what is true and pure.",
    "verse_text": "Think on these things: true, noble... excellent... — Philippians 4:8"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "God will finish the work He started in your life.",
    "message": "God will finish the work He started in your life.",
    "verse_text": "He who began a good work in you will bring it to completion... — Philippians 1:6"
  },
  {
    "title": "Let love guide every action you take.",
    "message": "Let love guide every action you take.",
    "verse_text": "Do everything in love. — 1 Corinthians 16:14"
  },
  {
    "title": "You are chosen by God and called to shine His light.",
    "message": "You are chosen by God and called to shine His light.",
    "verse_text": "You are a chosen people, a royal priesthood... — 1 Peter 2:9"
  },
  {
    "title": "Find strength in the Lord and His power.",
    "message": "Find strength in the Lord and His power.",
    "verse_text": "Be strong in the Lord and in his mighty power. — Ephesians 6:10"
  },
  {
    "title": "God protects you — no weapon formed will succeed.",
    "message": "God protects you — no weapon formed will succeed.",
    "verse_text": "No weapon formed against you shall prosper. — Isaiah 54:17"
  },
  {
    "title": "Work for the Lord with all your heart and offer it to Him.",
    "message": "Work for the Lord with all your heart and offer it to Him.",
    "verse_text": "Whatever you do, work heartily, as for the Lord... — Colossians 3:23"
  },
  {
    "title": "Pray confidently — God hears and answers.",
    "message": "Pray confidently — God hears and answers.",
    "verse_text": "This is the confidence we have in approaching God... — 1 John 5:14"
  },
  {
    "title": "In Christ you are made new — old things pass away.",
    "message": "In Christ you are made new — old things pass away.",
    "verse_text": "If anyone is in Christ, the new creation has come: the old is gone. — 2 Corinthians 5:17"
  },
  {
    "title": "In Christ you are made new — old things pass away.",
    "message": "In Christ you are made new — old things pass away.",
    "verse_text": "If anyone is in Christ, the new creation has come: the old is gone. — 2 Corinthians 5:17"
  },
  {
    "title": "There is a season for every purpose under heaven.",
    "message": "There is a season for every purpose under heaven.",
    "verse_text": "For everything there is a season... — Ecclesiastes 3:1"
  },
  {
    "title": "God is love — live and reflect His love.",
    "message": "God is love — live and reflect His love.",
    "verse_text": "Whoever does not love does not know God, because God is love. — 1 John 4:8"
  },
  {
    "title": "God's love for you is unbreakable and eternal.",
    "message": "God's love for you is unbreakable and eternal.",
    "verse_text": "Nothing can separate us from the love of God in Christ Jesus. — Romans 8:38"
  },
  {
    "title": "Faith is trusting God even when you can't see the outcome.",
    "message": "Faith is trusting God even when you can't see the outcome.",
    "verse_text": "Now faith is confidence in what we hope for and assurance about what we do not see. — Hebrews 11:1"
  },
  {
    "title": "Trials produce patience — choose joy through them.",
    "message": "Trials produce patience — choose joy through them.",
    "verse_text": "Consider it pure joy when you face trials of many kinds. — James 1:2"
  },
  {
    "title": "Be a peacemaker and you will be called God's child.",
    "message": "Be a peacemaker and you will be called God's child.",
    "verse_text": "Blessed are the peacemakers... — Matthew 5:9"
  },
  {
    "title": "Trust God to provide for your needs; don't be anxious.",
    "message": "Trust God to provide for your needs; don't be anxious.",
    "verse_text": "Do not be anxious about your life... — Luke 12:22"
  },
  {
    "title": "God's love for you is unbreakable and eternal.",
    "message": "God's love for you is unbreakable and eternal.",
    "verse_text": "Nothing can separate us from the love of God in Christ Jesus. — Romans 8:38"
  },
  {
    "title": "Live with justice, mercy, and humility before God.",
    "message": "Live with justice, mercy, and humility before God.",
    "verse_text": "Act justly, love mercy, walk humbly with your God. — Micah 6:8"
  },
  {
    "title": "God gives perfect peace to those who trust Him.",
    "message": "God gives perfect peace to those who trust Him.",
    "verse_text": "You keep in perfect peace those whose minds are steadfast... — Isaiah 26:3"
  },
  {
    "title": "God has good plans for your future — hope and purpose await.",
    "message": "God has good plans for your future — hope and purpose await.",
    "verse_text": "For I know the plans I have for you, plans to prosper you and not to harm you. — Jeremiah 29:11"
  },
  {
    "title": "Keep rejoicing — joy is a command and a gift.",
    "message": "Keep rejoicing — joy is a command and a gift.",
    "verse_text": "Rejoice always. — 1 Thessalonians 5:16"
  },
  {
    "title": "God fills you with hope, joy, and peace as you trust Him.",
    "message": "God fills you with hope, joy, and peace as you trust Him.",
    "verse_text": "May the God of hope fill you with all joy and peace... — Romans 15:13"
  },
  {
    "title": "Fill your mind with what is true and pure.",
    "message": "Fill your mind with what is true and pure.",
    "verse_text": "Think on these things: true, noble... excellent... — Philippians 4:8"
  },
  {
    "title": "Ask God boldly — He listens and responds.",
    "message": "Ask God boldly — He listens and responds.",
    "verse_text": "Ask, and it will be given to you... — Matthew 7:7"
  },
  {
    "title": "God provides everything you need for godly living.",
    "message": "God provides everything you need for godly living.",
    "verse_text": "His divine power has given us everything needed for life and godliness... — 2 Peter 1:3"
  },
  {
    "title": "Keep hope alive, stay patient in hardship, and pray constantly.",
    "message": "Keep hope alive, stay patient in hardship, and pray constantly.",
    "verse_text": "Be joyful in hope, patient in affliction, faithful in prayer. — Romans 12:12"
  },
  {
    "title": "Keep rejoicing — joy is a command and a gift.",
    "message": "Keep rejoicing — joy is a command and a gift.",
    "verse_text": "Rejoice always. — 1 Thessalonians 5:16"
  },
  {
    "title": "You are chosen by God and called to shine His light.",
    "message": "You are chosen by God and called to shine His light.",
    "verse_text": "You are a chosen people, a royal priesthood... — 1 Peter 2:9"
  },
  {
    "title": "When anxious, bring everything to God in prayer.",
    "message": "When anxious, bring everything to God in prayer.",
    "verse_text": "Do not be anxious about anything; pray about everything. — Philippians 4:6"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "When anxious, bring everything to God in prayer.",
    "message": "When anxious, bring everything to God in prayer.",
    "verse_text": "Do not be anxious about anything; pray about everything. — Philippians 4:6"
  },
  {
    "title": "Act in humility and value others above self.",
    "message": "Act in humility and value others above self.",
    "verse_text": "Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. — Philippians 2:3"
  },
  {
    "title": "God provides a way through every temptation.",
    "message": "God provides a way through every temptation.",
    "verse_text": "No temptation has overtaken you that is not common to man... — 1 Corinthians 10:13"
  },
  {
    "title": "God is near when your heart is broken and will heal you.",
    "message": "God is near when your heart is broken and will heal you.",
    "verse_text": "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18"
  },
  {
    "title": "Jesus satisfies the deepest hunger of your soul.",
    "message": "Jesus satisfies the deepest hunger of your soul.",
    "verse_text": "I am the bread of life... — John 6:35"
  },
  {
    "title": "Humility before God brings blessing.",
    "message": "Humility before God brings blessing.",
    "verse_text": "Blessed are the poor in spirit... — Matthew 5:3"
  },
  {
    "title": "Blessing comes to those who trust God.",
    "message": "Blessing comes to those who trust God.",
    "verse_text": "Blessed is the man who trusts in the Lord... — Jeremiah 17:7"
  },
  {
    "title": "Jesus is the light that guides your path.",
    "message": "Jesus is the light that guides your path.",
    "verse_text": "I am the light of the world... — John 8:12"
  },
  {
    "title": "Confess Jesus as Lord and believe — receive salvation.",
    "message": "Confess Jesus as Lord and believe — receive salvation.",
    "verse_text": "If you declare with your mouth, 'Jesus is Lord,' and believe... you will be saved. — Romans 10:9"
  },
  {
    "title": "Invite God into every step and He will guide you.",
    "message": "Invite God into every step and He will guide you.",
    "verse_text": "In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:6"
  },
  {
    "title": "Invite God into every step and He will guide you.",
    "message": "Invite God into every step and He will guide you.",
    "verse_text": "In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:6"
  },
  {
    "title": "Through every storm, God is with you and will carry you.",
    "message": "Through every storm, God is with you and will carry you.",
    "verse_text": "When you pass through the waters, I will be with you; through the rivers, they shall not overwhelm you. — Isaiah 43:2"
  },
  {
    "title": "Jesus promises to be with you always, no matter what.",
    "message": "Jesus promises to be with you always, no matter what.",
    "verse_text": "I am with you always, to the end of the age. — Matthew 28:20"
  },
  {
    "title": "Approach God with confidence to find grace and help.",
    "message": "Approach God with confidence to find grace and help.",
    "verse_text": "Let us then with confidence draw near to the throne of grace... — Hebrews 4:16"
  },
  {
    "title": "Act in humility and value others above self.",
    "message": "Act in humility and value others above self.",
    "verse_text": "Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. — Philippians 2:3"
  },
  {
    "title": "God will work all things for your good when you trust Him.",
    "message": "God will work all things for your good when you trust Him.",
    "verse_text": "In all things God works for the good of those who love him. — Romans 8:28"
  },
  {
    "title": "Fear not — God is with you and will strengthen you.",
    "message": "Fear not — God is with you and will strengthen you.",
    "verse_text": "Do not fear, for I am with you; do not be dismayed, for I am your God. — Isaiah 41:10"
  },
  {
    "title": "God's love is great — He gave His Son for us.",
    "message": "God's love is great — He gave His Son for us.",
    "verse_text": "For God so loved the world that he gave his only Son. — John 3:16"
  },
  {
    "title": "Pray in faith and believe that God answers.",
    "message": "Pray in faith and believe that God answers.",
    "verse_text": "Whatever you ask in prayer, believe that you have received it... — Mark 11:24"
  },
  {
    "title": "The Spirit brings love, joy, peace, and goodness into you.",
    "message": "The Spirit brings love, joy, peace, and goodness into you.",
    "verse_text": "The fruit of the Spirit is love, joy, peace... — Galatians 5:22"
  },
  {
    "title": "Believe in Jesus and be saved; faith brings deliverance.",
    "message": "Believe in Jesus and be saved; faith brings deliverance.",
    "verse_text": "Believe in the Lord Jesus, and you will be saved—you and your household. — Acts 16:31"
  },
  {
    "title": "God gives perfect peace to those who trust Him.",
    "message": "God gives perfect peace to those who trust Him.",
    "verse_text": "You keep in perfect peace those whose minds are steadfast... — Isaiah 26:3"
  },
  {
    "title": "God keeps you secure and strong to stand.",
    "message": "God keeps you secure and strong to stand.",
    "verse_text": "To him who is able to keep you from stumbling... — Jude 1:24"
  },
  {
    "title": "God is love — live and reflect His love.",
    "message": "God is love — live and reflect His love.",
    "verse_text": "Whoever does not love does not know God, because God is love. — 1 John 4:8"
  },
  {
    "title": "Trust God fully and don't rely only on your own insight.",
    "message": "Trust God fully and don't rely only on your own insight.",
    "verse_text": "Trust in the Lord with all your heart and lean not on your own understanding. — Proverbs 3:5"
  },
  {
    "title": "Let Jesus' peace lead your life and choices.",
    "message": "Let Jesus' peace lead your life and choices.",
    "verse_text": "Let the peace of Christ rule in your hearts. — Colossians 3:15"
  },
  {
    "title": "God has good plans for your future — hope and purpose await.",
    "message": "God has good plans for your future — hope and purpose await.",
    "verse_text": "For I know the plans I have for you, plans to prosper you and not to harm you. — Jeremiah 29:11"
  },
  {
    "title": "Persevere through tests and receive God's reward.",
    "message": "Persevere through tests and receive God's reward.",
    "verse_text": "Blessed is the man who remains steadfast under trial... — James 1:12"
  },
  {
    "title": "Live in integrity and lead by example, no matter your age.",
    "message": "Live in integrity and lead by example, no matter your age.",
    "verse_text": "Let no one despise you for your youth... — 1 Timothy 4:12"
  },
  {
    "title": "God protects you — no weapon formed will succeed.",
    "message": "God protects you — no weapon formed will succeed.",
    "verse_text": "No weapon formed against you shall prosper. — Isaiah 54:17"
  },
  {
    "title": "God provides everything you need for godly living.",
    "message": "God provides everything you need for godly living.",
    "verse_text": "His divine power has given us everything needed for life and godliness... — 2 Peter 1:3"
  },
  {
    "title": "God is good and a safe refuge when troubles come.",
    "message": "God is good and a safe refuge when troubles come.",
    "verse_text": "The Lord is good, a refuge in times of trouble... — Nahum 1:7"
  },
  {
    "title": "Live in integrity and lead by example, no matter your age.",
    "message": "Live in integrity and lead by example, no matter your age.",
    "verse_text": "Let no one despise you for your youth... — 1 Timothy 4:12"
  },
  {
    "title": "God will finish the work He started in your life.",
    "message": "God will finish the work He started in your life.",
    "verse_text": "He who began a good work in you will bring it to completion... — Philippians 1:6"
  },
  {
    "title": "Be a peacemaker and you will be called God's child.",
    "message": "Be a peacemaker and you will be called God's child.",
    "verse_text": "Blessed are the peacemakers... — Matthew 5:9"
  },
  {
    "title": "Put God first and He will provide what you need.",
    "message": "Put God first and He will provide what you need.",
    "verse_text": "Seek first the kingdom of God and his righteousness... — Matthew 6:33"
  },
  {
    "title": "God provides a way through every temptation.",
    "message": "God provides a way through every temptation.",
    "verse_text": "No temptation has overtaken you that is not common to man... — 1 Corinthians 10:13"
  },
  {
    "title": "Invite God into every step and He will guide you.",
    "message": "Invite God into every step and He will guide you.",
    "verse_text": "In all your ways acknowledge him, and he will make straight your paths. — Proverbs 3:6"
  },
  {
    "title": "Ask God for wisdom — He gives generously to those who ask.",
    "message": "Ask God for wisdom — He gives generously to those who ask.",
    "verse_text": "If any lacks wisdom, ask God, who gives generously. — James 1:5"
  },
  {
    "title": "The call of God invites you into living fellowship with Him.",
    "message": "The call of God invites you into living fellowship with Him.",
    "verse_text": "The Spirit and the bride say, 'Come' — Revelation 22:17"
  },
  {
    "title": "God has good plans for your future — hope and purpose await.",
    "message": "God has good plans for your future — hope and purpose await.",
    "verse_text": "For I know the plans I have for you, plans to prosper you and not to harm you. — Jeremiah 29:11"
  },
  {
    "title": "God is your safe place and strength in hard times.",
    "message": "God is your safe place and strength in hard times.",
    "verse_text": "God is our refuge and strength, an ever-present help in trouble. — Psalm 46:1"
  },
  {
    "title": "Run your race with perseverance and focus on Jesus.",
    "message": "Run your race with perseverance and focus on Jesus.",
    "verse_text": "Let us run with endurance the race that is set before us... — Hebrews 12:1"
  },
  {
    "title": "Sin leads to death, but God gives the gift of life through Christ.",
    "message": "Sin leads to death, but God gives the gift of life through Christ.",
    "verse_text": "The wages of sin is death, but the gift of God is eternal life in Christ Jesus. — Romans 6:23"
  },
  {
    "title": "Keep rejoicing — joy is a command and a gift.",
    "message": "Keep rejoicing — joy is a command and a gift.",
    "verse_text": "Rejoice always. — 1 Thessalonians 5:16"
  },
  {
    "title": "Protect your heart; it shapes your life.",
    "message": "Protect your heart; it shapes your life.",
    "verse_text": "Guard your heart above all else... — Proverbs 4:23"
  },
  {
    "title": "God is your safe place and strength in hard times.",
    "message": "God is your safe place and strength in hard times.",
    "verse_text": "God is our refuge and strength, an ever-present help in trouble. — Psalm 46:1"
  },
  {
    "title": "Give your worries to God; He cares deeply for you.",
    "message": "Give your worries to God; He cares deeply for you.",
    "verse_text": "Cast all your anxiety on him because he cares for you. — 1 Peter 5:7"
  },
  {
    "title": "Jesus is the light that guides your path.",
    "message": "Jesus is the light that guides your path.",
    "verse_text": "I am the light of the world... — John 8:12"
  },
  {
    "title": "With God, nothing is impossible.",
    "message": "With God, nothing is impossible.",
    "verse_text": "For nothing will be impossible with God. — Luke 1:37"
  },
  {
    "title": "You are never alone — He guides and cares for you.",
    "message": "You are never alone — He guides and cares for you.",
    "verse_text": "The Lord is my shepherd; I lack nothing. — Psalm 23:1"
  },
  {
    "title": "Remember God's blessings and give Him thanks.",
    "message": "Remember God's blessings and give Him thanks.",
    "verse_text": "Forget not all his benefits... — Psalm 103:2"
  },
  {
    "title": "God is love — live and reflect His love.",
    "message": "God is love — live and reflect His love.",
    "verse_text": "Whoever does not love does not know God, because God is love. — 1 John 4:8"
  },
  {
    "title": "There is a season for every purpose under heaven.",
    "message": "There is a season for every purpose under heaven.",
    "verse_text": "For everything there is a season... — Ecclesiastes 3:1"
  },
  {
    "title": "God will never abandon you — He is always near.",
    "message": "God will never abandon you — He is always near.",
    "verse_text": "I will never leave you nor forsake you. — Hebrews 13:5"
  },
  {
    "title": "Let love lead — patient, kind, and true.",
    "message": "Let love lead — patient, kind, and true.",
    "verse_text": "Love is patient, love is kind... — 1 Corinthians 13:4"
  },
  {
    "title": "God provides everything you need for godly living.",
    "message": "God provides everything you need for godly living.",
    "verse_text": "His divine power has given us everything needed for life and godliness... — 2 Peter 1:3"
  },
  {
    "title": "Ask God boldly — He listens and responds.",
    "message": "Ask God boldly — He listens and responds.",
    "verse_text": "Ask, and it will be given to you... — Matthew 7:7"
  },
  {
    "title": "God is good and a safe refuge when troubles come.",
    "message": "God is good and a safe refuge when troubles come.",
    "verse_text": "The Lord is good, a refuge in times of trouble... — Nahum 1:7"
  },
  {
    "title": "Trust God fully and don't rely only on your own insight.",
    "message": "Trust God fully and don't rely only on your own insight.",
    "verse_text": "Trust in the Lord with all your heart and lean not on your own understanding. — Proverbs 3:5"
  },
  {
    "title": "Pray in faith and believe that God answers.",
    "message": "Pray in faith and believe that God answers.",
    "verse_text": "Whatever you ask in prayer, believe that you have received it... — Mark 11:24"
  },
  {
    "title": "Fill your mind with what is true and pure.",
    "message": "Fill your mind with what is true and pure.",
    "verse_text": "Think on these things: true, noble... excellent... — Philippians 4:8"
  },
  {
    "title": "A day is coming when God will remove sorrow and pain.",
    "message": "A day is coming when God will remove sorrow and pain.",
    "verse_text": "He will wipe away every tear... — Revelation 21:4"
  },
  {
    "title": "Humility before God brings blessing.",
    "message": "Humility before God brings blessing.",
    "verse_text": "Blessed are the poor in spirit... — Matthew 5:3"
  },
  {
    "title": "Faith pleases God; trust Him and step out.",
    "message": "Faith pleases God; trust Him and step out.",
    "verse_text": "Without faith it is impossible to please God... — Hebrews 11:6"
  },
  {
    "title": "Faith is trusting God even when you can't see the outcome.",
    "message": "Faith is trusting God even when you can't see the outcome.",
    "verse_text": "Now faith is confidence in what we hope for and assurance about what we do not see. — Hebrews 11:1"
  },
  {
    "title": "Be a peacemaker and you will be called God's child.",
    "message": "Be a peacemaker and you will be called God's child.",
    "verse_text": "Blessed are the peacemakers... — Matthew 5:9"
  },
  {
    "title": "Live in integrity and lead by example, no matter your age.",
    "message": "Live in integrity and lead by example, no matter your age.",
    "verse_text": "Let no one despise you for your youth... — 1 Timothy 4:12"
  },
  {
    "title": "Believe in Jesus and be saved; faith brings deliverance.",
    "message": "Believe in Jesus and be saved; faith brings deliverance.",
    "verse_text": "Believe in the Lord Jesus, and you will be saved—you and your household. — Acts 16:31"
  },
  {
    "title": "Jesus gives life in full measure — abundant and meaningful.",
    "message": "Jesus gives life in full measure — abundant and meaningful.",
    "verse_text": "I came that they may have life and have it abundantly. — John 10:10"
  },
  {
    "title": "Keep love at the center; it covers many sins.",
    "message": "Keep love at the center; it covers many sins.",
    "verse_text": "Above all, keep loving one another earnestly... — 1 Peter 4:8"
  },
  {
    "title": "God brings you into places of joy and celebration.",
    "message": "God brings you into places of joy and celebration.",
    "verse_text": "He brought me to the banquet hall... — Song of Solomon 2:4"
  },
  {
    "title": "God gives you power, love, and self-control, not fear.",
    "message": "God gives you power, love, and self-control, not fear.",
    "verse_text": "God gave us a spirit not of fear but of power and love and self-control. — 2 Timothy 1:7"
  },
  {
    "title": "Trust God with your giving and watch Him provide.",
    "message": "Trust God with your giving and watch Him provide.",
    "verse_text": "Bring the whole tithe into the storehouse... — Malachi 3:10"
  },
  {
    "title": "God gives perfect peace to those who trust Him.",
    "message": "God gives perfect peace to those who trust Him.",
    "verse_text": "You keep in perfect peace those whose minds are steadfast... — Isaiah 26:3"
  },
  {
    "title": "Act in humility and value others above self.",
    "message": "Act in humility and value others above self.",
    "verse_text": "Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. — Philippians 2:3"
  },
  {
    "title": "Call on Jesus and find salvation and hope.",
    "message": "Call on Jesus and find salvation and hope.",
    "verse_text": "Everyone who calls on the name of the Lord will be saved. — Acts 2:21"
  },
  {
    "title": "Run to God's name for safety; He is your strong refuge.",
    "message": "Run to God's name for safety; He is your strong refuge.",
    "verse_text": "The name of the Lord is a strong tower... — Proverbs 18:10"
  },
  {
    "title": "God fills you with hope, joy, and peace as you trust Him.",
    "message": "God fills you with hope, joy, and peace as you trust Him.",
    "verse_text": "May the God of hope fill you with all joy and peace... — Romans 15:13"
  },
  {
    "title": "Give thanks in every situation; gratitude transforms.",
    "message": "Give thanks in every situation; gratitude transforms.",
    "verse_text": "Give thanks in all circumstances... — 1 Thessalonians 5:18"
  },
  {
    "title": "God is near when your heart is broken and will heal you.",
    "message": "God is near when your heart is broken and will heal you.",
    "verse_text": "The Lord is close to the brokenhearted and saves those who are crushed in spirit. — Psalm 34:18"
  },
  {
    "title": "When anxious, bring everything to God in prayer.",
    "message": "When anxious, bring everything to God in prayer.",
    "verse_text": "Do not be anxious about anything; pray about everything. — Philippians 4:6"
  },
  {
    "title": "Stay connected to Jesus; apart from Him you can do nothing.",
    "message": "Stay connected to Jesus; apart from Him you can do nothing.",
    "verse_text": "I am the vine; you are the branches... — John 15:5"
  },
  {
    "title": "Persevere through tests and receive God's reward.",
    "message": "Persevere through tests and receive God's reward.",
    "verse_text": "Blessed is the man who remains steadfast under trial... — James 1:12"
  },
  {
    "title": "God will finish the work He started in your life.",
    "message": "God will finish the work He started in your life.",
    "verse_text": "He who began a good work in you will bring it to completion... — Philippians 1:6"
  },
  {
    "title": "God will work all things for your good when you trust Him.",
    "message": "God will work all things for your good when you trust Him.",
    "verse_text": "In all things God works for the good of those who love him. — Romans 8:28"
  },
  {
    "title": "God is your safe place and strength in hard times.",
    "message": "God is your safe place and strength in hard times.",
    "verse_text": "God is our refuge and strength, an ever-present help in trouble. — Psalm 46:1"
  },
  {
    "title": "God walks with you through every valley; do not fear.",
    "message": "God walks with you through every valley; do not fear.",
    "verse_text": "Even though I walk through the darkest valley, I will fear no evil. — Psalm 23:4"
  },
  {
    "title": "You are never alone — He guides and cares for you.",
    "message": "You are never alone — He guides and cares for you.",
    "verse_text": "The Lord is my shepherd; I lack nothing. — Psalm 23:1"
  },
  {
    "title": "Confess your wrongs — God forgives and restores.",
    "message": "Confess your wrongs — God forgives and restores.",
    "verse_text": "If we confess our sins, he is faithful and just to forgive us our sins. — 1 John 1:9"
  },
  {
    "title": "God is your safe place and strength in hard times.",
    "message": "God is your safe place and strength in hard times.",
    "verse_text": "God is our refuge and strength, an ever-present help in trouble. — Psalm 46:1"
  },
  {
    "title": "Jesus waits for you — open your heart to Him.",
    "message": "Jesus waits for you — open your heart to Him.",
    "verse_text": "Behold, I stand at the door and knock... — Revelation 3:20"
  },
  {
    "title": "Let love lead — patient, kind, and true.",
    "message": "Let love lead — patient, kind, and true.",
    "verse_text": "Love is patient, love is kind... — 1 Corinthians 13:4"
  },
  {
    "title": "Let love lead — patient, kind, and true.",
    "message": "Let love lead — patient, kind, and true.",
    "verse_text": "Love is patient, love is kind... — 1 Corinthians 13:4"
  },
  {
    "title": "God's mercy never ends — His love sustains you.",
    "message": "God's mercy never ends — His love sustains you.",
    "verse_text": "Because of the Lord's great love we are not consumed, for his mercies never fail. — Lamentations 3:22"
  },
  {
    "title": "Jesus gives life in full measure — abundant and meaningful.",
    "message": "Jesus gives life in full measure — abundant and meaningful.",
    "verse_text": "I came that they may have life and have it abundantly. — John 10:10"
  },
  {
    "title": "God gives perfect peace to those who trust Him.",
    "message": "God gives perfect peace to those who trust Him.",
    "verse_text": "You keep in perfect peace those whose minds are steadfast... — Isaiah 26:3"
  },
  {
    "title": "Ask God for wisdom — He gives generously to those who ask.",
    "message": "Ask God for wisdom — He gives generously to those who ask.",
    "verse_text": "If any lacks wisdom, ask God, who gives generously. — James 1:5"
  },
  {
    "title": "Call on the Lord; He is close to those who seek Him.",
    "message": "Call on the Lord; He is close to those who seek Him.",
    "verse_text": "The Lord is near to all who call on him... — Psalm 145:18"
  },
  {
    "title": "Find joy in God and He will fulfill the desires He placed in you.",
    "message": "Find joy in God and He will fulfill the desires He placed in you.",
    "verse_text": "Delight yourself in the Lord, and he will give you the desires of your heart. — Psalm 37:4"
  },
  {
    "title": "God protects you — no weapon formed will succeed.",
    "message": "God protects you — no weapon formed will succeed.",
    "verse_text": "No weapon formed against you shall prosper. — Isaiah 54:17"
  },
  {
    "title": "With God, nothing is impossible.",
    "message": "With God, nothing is impossible.",
    "verse_text": "For nothing will be impossible with God. — Luke 1:37"
  },
  {
    "title": "Protect your heart; it shapes your life.",
    "message": "Protect your heart; it shapes your life.",
    "verse_text": "Guard your heart above all else... — Proverbs 4:23"
  },
  {
    "title": "Remember God's blessings and give Him thanks.",
    "message": "Remember God's blessings and give Him thanks.",
    "verse_text": "Forget not all his benefits... — Psalm 103:2"
  },
  {
    "title": "You are chosen by God and called to shine His light.",
    "message": "You are chosen by God and called to shine His light.",
    "verse_text": "You are a chosen people, a royal priesthood... — 1 Peter 2:9"
  },
  {
    "title": "The Spirit brings love, joy, peace, and goodness into you.",
    "message": "The Spirit brings love, joy, peace, and goodness into you.",
    "verse_text": "The fruit of the Spirit is love, joy, peace... — Galatians 5:22"
  },
  {
    "title": "God is love — live and reflect His love.",
    "message": "God is love — live and reflect His love.",
    "verse_text": "Whoever does not love does not know God, because God is love. — 1 John 4:8"
  },
  {
    "title": "Let love lead — patient, kind, and true.",
    "message": "Let love lead — patient, kind, and true.",
    "verse_text": "Love is patient, love is kind... — 1 Corinthians 13:4"
  },
  {
    "title": "When anxious, bring everything to God in prayer.",
    "message": "When anxious, bring everything to God in prayer.",
    "verse_text": "Do not be anxious about anything; pray about everything. — Philippians 4:6"
  },
  {
    "title": "God's grace is enough; His power shines through your weakness.",
    "message": "God's grace is enough; His power shines through your weakness.",
    "verse_text": "My grace is sufficient for you, for my power is made perfect in weakness. — 2 Corinthians 12:9"
  },
  {
    "title": "Fear not — God is with you and will strengthen you.",
    "message": "Fear not — God is with you and will strengthen you.",
    "verse_text": "Do not fear, for I am with you; do not be dismayed, for I am your God. — Isaiah 41:10"
  },
  {
    "title": "Find joy in God and He will fulfill the desires He placed in you.",
    "message": "Find joy in God and He will fulfill the desires He placed in you.",
    "verse_text": "Delight yourself in the Lord, and he will give you the desires of your heart. — Psalm 37:4"
  },
  {
    "title": "You are chosen by God and called to shine His light.",
    "message": "You are chosen by God and called to shine His light.",
    "verse_text": "You are a chosen people, a royal priesthood... — 1 Peter 2:9"
  },
  {
    "title": "Pray confidently — God hears and answers.",
    "message": "Pray confidently — God hears and answers.",
    "verse_text": "This is the confidence we have in approaching God... — 1 John 5:14"
  },
  {
    "title": "Humility before God brings blessing.",
    "message": "Humility before God brings blessing.",
    "verse_text": "Blessed are the poor in spirit... — Matthew 5:3"
  }
];


let current = 0;
function show(i){
  current = i % messages.length;
  const msg = messages[current];
  const titleEl = document.getElementById('message-title');
  const verseEl = document.getElementById('verse-line');
  titleEl.classList.remove('fade');
  verseEl.classList.remove('fade');
  void titleEl.offsetWidth;
  titleEl.textContent = msg.message || 'SoulVibe Sanctuary';
  verseEl.textContent = msg.verse_text || '';
  titleEl.classList.add('fade');
  verseEl.classList.add('fade');
}
function next(){ show(current + 1); }
window.addEventListener('DOMContentLoaded', ()=>{
  if(!messages || messages.length === 0){
    document.getElementById('message-title').textContent = 'No verses available';
    document.getElementById('verse-line').textContent = '';
    return;
  }
  show(0);
  setInterval(next, ROTATE_SECONDS * 1000);
});
