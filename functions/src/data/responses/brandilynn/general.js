// BrandiLynn General
const keys = require('../../../config/intent-keys')
module.exports = {
	hints: {
		[keys.DIDYOUKILLHER]: 'Did you kill Betsy?',
		[keys.WHOBETSYHEADCHEF]: 'Who was Betsy\'s head chef?',
	},
	
	[keys.FIRSTNAME]: 'Brandi Lynn.',
	[keys.FULLNAME]: 'Brandi Lynn Michelle.',
	[keys.TELLABOUTSELF]: 'My name is Brandi Lynn Judsen. I\'m 21 and I was born right here in Lockhart.',

	// core
	[keys.WHATRELATIONSHIPTOBETSY]: 'I worked for her at her restaurant for a few months. Overall I liked her, but she was two different people. Sometimes she seemed like the best boss I\'ve had, sometimes she was a little scary.',
	[keys.ANGRYWITHBETSY]: 'I was angry but I feel terrible that she died.',
	[keys.HOWLONGKNOWBETSY]: 'About 3 months. I met her when I started working at her restaurant.',
	[keys.WHOKILLEDBETSY]: 'I definitely didn’t do it. My grandmother hated her more than anyone.',
	[keys.NIGHTOF]: 'I was at my boyfriend’s apartment.',
	[keys.DIDYOUKILLHER]: 'I didn’t kill Betsy. She was horrible to me last week, but I’m not a killer.',

	// realization 1
	[keys.TELLABOUT_CONSTANCE]: 'Constance Florentine is my grandmother. Sometimes I don’t know whether she’s my role model or my worst case scenario.',
	[keys.TELLABOUT_PETE]: 'Pete is my dad. He was Betsy’s main competitor.',
	[keys.TELLABOUT_BRANDI]: 'Ummm.<break delay="1.2s" /> Detective. I’m Brandi Lynn.',
	[keys.TELLABOUT_TUCKER]: 'Tucker Mitts is my boyfriend. I met him when I started working at Betsy’s BBQ. We’re in love.',
	[keys.BRANDI_WHOGRANDMOTHER]: 'Constance Florentine is my grandmother. Sometimes I don’t know whether she’s my role model or my worst case scenario.',
	[keys.BRANDI_WHODAD]: 'Pete is my dad. He was Betsy’s main competitor.',
	[keys.BRANDI_WHATBETSYDOLASTWEEK]: 'She fired me in the most humiliating way possible. She screamed at me for 10 solid minutes in front of a packed restaurant. I’ve never been so embarrassed in my life.',
	[keys.WHATBETSYDOBRANDI]: 'She fired me in the most humiliating way possible. She screamed at me for 10 solid minutes in front of a packed restaurant. I’ve never been so embarrassed in my life.',
	[keys.BETSYDOSOMETHINGTOYOU]: 'She fired me in the most humiliating way possible. She screamed at me for 10 solid minutes in front of a packed restaurant. I’ve never been so embarrassed in my life.',
	[keys.BRANDI_WHOBOYFRIEND]: 'Tucker Mitts is my boyfriend. I met him when I started working at Betsy’s BBQ. We’re in love.',
	[keys.WHOBETSYHEADCHEF]: 'Tucker Mitts was Betsy\'s chef and is my boyfriend. I met him when I started working at Betsy\'s BBQ. We\'re in love.',
	
	// realization 2
	[keys.BRANDI_INSURANCE]: 'He became part owner and a beneficiary on the insurance policy when he started working there. He always said he felt funny about the insurance part.',
	[keys.BRANDI_WHYGMFAULT]: 'I shouldn’t tell you this, but I will. In her never ending supply of spite, my grandmother devised a plan where I would be the pawn to steal Betsy’s secret recipe after working at her restaurant and gaining her trust. The whole thing worked because Betsy didn’t know I was a Judsen. It was a rotten thing to do. I was a part of it though. I’m so ashamed.',
	[keys.WHYCONSTBETSYHATEEACHOTHER]: 'My grandmother wouldn’t shut up about their feud. She hated her for so long and with such lust, I wonder if she’s somehow going to miss it. I know I won’t.',

	// peripheral
	[keys.WHATRECIPE]: 'I shouldn’t tell you this, but I will. In her never ending supply of spite, my grandmother devised a plan where I would be the pawn to steal Betsy’s secret recipe after working at her restaurant and gaining her trust. The whole thing worked because Betsy didn’t know I was a Judsen. It was a rotten thing to do. I was a part of it though. I’m so ashamed.',
	[keys.WHENLASTSEEBETSY]: 'A week ago. The last time I worked for her.',
	[keys.BRANDI_HOWLONGDATINGTUCKER]: 'We started dating when I began work at Betsy’s, so three wonderful months.',

	[keys.BRANDI_DIDYOUSTEAL]: 'Oh god... It wasn’t my idea! That recipe has been the subject of my nightmares lately.',
	[keys.BRANDI_WHYFAMILYHATETUCKER]: 'Well my dad hates Tucker because he quit working for him to go work for Betsy.',
	[keys.BRANDI_WHYTUCKERWORKFORBETSY]: 'It was time for him to leave. She also made him a great offer. you should talk to him about it.',
	[keys.BRANDI_WHATDADBUSINESS]: 'Pete\'s BBQ. It was a staple in Lockhart for a decade. He\'s so sad it has to shut down.',
	[keys.BRANDI_WHYFIRE]: 'Ohh I\'m not sure. She just flipped one day and went crazy.',
	[keys.BRANDI_HOWBETSYSCARY]: 'She could get so angry sometimes. I don\'t know where it came from.',
	[keys.BRANDI_THINKGMKILLEDBETSY]: 'I don\'t know if she did. I don\'t know what happened.',
	[keys.BRANDI_HOWMEETBF]: 'We met at Betsy\'s BBQ when I started working there 3 months ago.',
	[keys.BRANDI_WHATBETSYFIGHTABOUT]: 'I\'m not totally sure.',
	[keys.BRANDI_CATCH_IN_LIE]: 'I don\'t know what you\'re talking about.',
	[keys.BRANDI_WHENTALKTODAD]: 'I didn\'t talk to him last night.',
	[keys.BRANDI_DADALONELASTNIGHT]: 'I don\'t know I didn\'t speak with him.',
	[keys.BRANDI_WHYTUCKERSHOWER]: 'I don\'t remember him taking a shower. Why do you ask?',
	[keys.BRANDI_WHYTUCKERGOOUT]: 'He didn\'t go out. Why do you ask?',

	[keys.TALKABOUTMURDER]: `OK. What would you like to know?`,

	[keys.WHENBESTYFINDOUTBRANDI]: `She found out last week just before she blew her lid.`,
	[keys.OTHERSUSPECTSUSPICIOUS_BRANDI]: `I don't think I'm suspicious...`,
	[keys.OTHERSUSPECTSUSPICIOUS_TUCKER]: `Tucker? Not my Tucker! He's the best.`,
	[keys.OTHERSUSPECTSUSPICIOUS_CONSTANCE]: `I don't think she's that suspicious`,
	[keys.OTHERSUSPECTSUSPICIOUS_PETE]: `Definitely not.`,
	[keys.THINKOTHERSUSPECTKILLED_BRANDI]: `I didn't kill her!`,
	[keys.THINKOTHERSUSPECTKILLED_TUCKER]: `Absolutely not. He has such a sweet heart. He couldn't kill someone.`,
	[keys.THINKOTHERSUSPECTKILLED_CONSTANCE]: `My grandmother? Well... I guess she did hate Betsy.`,
	[keys.THINKOTHERSUSPECTKILLED_PETE]: `No way.`,
	[keys.WHATBETSYDOINGNIGHTOFMURDER]: `How should I know? I was home all evening!`,
	[keys.KNOWBETSY]: `Yes I knew Betsy.`,
	[keys.WHOISBETSY]: `Betsy Harris is the lady who got killed last night. And you're a detective. Gosh almighty!`,
	[keys.KNOWOTHERSUSPECT_BRANDI]: `That's me!`,
	[keys.KNOWOTHERSUSPECT_TUCKER]: `That's my man.`,
	[keys.KNOWOTHERSUSPECT_CONSTANCE]: `that's my grandmother!`,
	[keys.KNOWOTHERSUSPECT_PETE]: `that's my dad!`,
	[keys.TELLABOUTMURDER]: `All I know is that Betsy died in a fire.`,
	[keys.HOWOLDBRANDI]: `21 years old!`,
	[keys.HOWFEELABOUTBETSY]: `She could be very sweet. But she could also hold a grudge.`,
	[keys.DOYOUTRUSTOTHERSUSPECT_BRANDI]: `I do!`,
	[keys.DOYOUTRUSTOTHERSUSPECT_TUCKER]: `Of course I do. I love him!`,
	[keys.DOYOUTRUSTOTHERSUSPECT_CONSTANCE]: `For the most part.`,
	[keys.DOYOUTRUSTOTHERSUSPECT_PETE]: `He's my dad! Of course I trust him.`,
	[keys.WHYBETSYMURDERED]: `I don't know. People loved her restaurant and seemed to love her.`,
	[keys.GETALONGBETSY]: `I did for a time. And then she up and fired me one day.`,
	[keys.DIDBETSYCONSTNOTLIKEEACHOTHER]: `Those two women did not like each other.`,
	[keys.OTHERSUSPECTALIBI_BRANDI]: `I was at my boyfriend's apartment.`,
	[keys.OTHERSUSPECTALIBI_TUCKER]: `we were both at his apartment.`,
	[keys.OTHERSUSPECTALIBI_CONSTANCE]: `I think she was at her house.`,
	[keys.OTHERSUSPECTALIBI_PETE]: `I think he was at his restaurant. It's so sad that he's closing down.`,
	[keys.TALKTOBETSY]: `Have fun talking to a dead woman.`,
	[keys.WHATTHINKOTHERSUSPECT_BRANDI]: `I'm Brandi. `,
	[keys.WHATTHINKOTHERSUSPECT_TUCKER]: `I love him.`,
	[keys.WHATTHINKOTHERSUSPECT_CONSTANCE]: `She's strange but I love her.`,
	[keys.WHATTHINKOTHERSUSPECT_PETE]: `I love my dad.`,

	[keys.BRANDI_WHEREBFLASTNIGHT]: `We were both at his apartment.`,
	[keys.BRANDI_WHENWORKBETSY]: `I worked there for about three months.`,
	[keys.BRANDI_NIGHTOF]: `We watched TV all night.`,
	[keys.BRANDI_BETSYKNOWBF]: `He was her head chef.`,
	[keys.BRANDI_LIKEGRANDMOTHER]: `Of course I do.`,
	[keys.BRANDI_DIDYOUGETFIRED]: `Betsy fired me. And screamed at me to boot.`,
	[keys.BRANDI_TIMEATBF]: `All night.`,
	[keys.BRANDI_WHENFIRED]: `Last week. Betsy screamed at me in front of a crowded restaurant.`,
	[keys.BRANDI_BFCONFIRM]: `You'd have to ask him.`,

	[keys.BRANDI_LEAVELASTNIGHT]: `I<break time=".5s" /> I don't know. I was home.`,

	[keys.YOUWANTTOKILLBETSY]: `No! I don't want to kill anyone.`,
	[keys.WHOBETSYENEMIES]: `Well I know she was enemies with my grandmother.`,
	[keys.WEREYOUALONE]: `I was with my boyfriend.`,
	[keys.WHENBUYRECIPE]: `I don't really know when she bought it.`,
	[keys.CONFIRMALIBI]: `My boyfriend.`,
	[keys.WHENHEARMURDER]: `Just this morning.`,
	[keys.FIGHTWITHBETSY]: `She yelled at me the one time, but not apart from that.`,
	[keys.WHOOTHERSUSPECT_BRANDI]: `I'm Brandy.`,
	[keys.WHOOTHERSUSPECT_CONSTANCE]: `She's my grandmother.`,
	[keys.WHOOTHERSUSPECT_PETE]: `He's my dad.`,
	[keys.WHOOTHERSUSPECT_TUCKER]: `He's my super cute boyfriend.`,
	[keys.WITHOTHERSUSPECT_BRANDI]: `I was with myself, yes. Bang up detective work, by the way.`,
	[keys.WITHOTHERSUSPECT_CONSTANCE]: `No I didn't see her.`,
	[keys.WITHOTHERSUSPECT_PETE]: `I didn't see him, no.`,
	[keys.WITHOTHERSUSPECT_TUCKER]: `Yes. We were together at his apartment.`,
	[keys.OTHERSUSPECTANGRYBETSY_BRANDI]: `I was upset with her after what she did last week.`,
	[keys.OTHERSUSPECTANGRYBETSY_CONSTANCE]: `Her and Betsy have hated each other since before me or my father were born.`,
	[keys.OTHERSUSPECTANGRYBETSY_PETE]: `I think he was upset that her restaurant's success meant his restaurant failing.`,
	[keys.OTHERSUSPECTANGRYBETSY_TUCKER]: `No I don't think so.`,

	[keys.BRANDI_WHATDOINGWITHBOYFRIEND]: `Just watching TV.`,
	
	[keys.WHATDRINKING]: "Chief Hawkins got me a soda! So friendly.",
	[keys.HOWAREYOUTODAY]: "I'm OK. I've never had murder so close to me. I feel shaken.",
	[keys.WHYTUCKERSWITCHJOBS]: "He told me that it was just time.",
	[keys.BRANDI_WHATWASONTV]: "We were flipping around. Nothing in particular.",
	[keys.BRANDI_WHY_BLAME_GRANDMA]: "I guess you're right. I just got really tired of how much my grandmother and Betsy hated each other.",
}
