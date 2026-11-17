/* Contenu pédagogique — Brevet de français, session 2027 (programme de cycle 4, version 2020) */

const THEMES = [
  {
    id: "se-raconter", titre: "Se raconter, se représenter",
    question: "Pourquoi et comment se raconter ?",
    enjeu: "Comprendre pourquoi un écrivain choisit de raconter sa propre vie, et repérer les procédés qui le montrent : le « je », le regard de l'adulte sur l'enfant qu'il était, les souvenirs et les sentiments.",
    notions: [
      ["Autobiographie", "Récit qu'une personne fait de sa propre vie. L'auteur, le narrateur et le personnage principal sont la même personne."],
      ["Pacte autobiographique", "Engagement de l'auteur à dire la vérité sur sa vie (expression du critique Philippe Lejeune)."],
      ["Récit rétrospectif", "On raconte le passé depuis le présent : imparfait et passé simple ou passé composé pour les souvenirs, présent pour le moment de l'écriture."],
      ["Double « je »", "Le « je » qui écrit (l'adulte) et le « je » qui a vécu (l'enfant). Les questions du brevet portent souvent sur cet écart."],
      ["Journal intime, mémoires", "Le journal est écrit au jour le jour ; les mémoires racontent une vie mêlée aux événements de l'Histoire."],
      ["Autoportrait", "Portrait de soi par soi-même, en peinture ou en écriture."]
    ],
    auteurs: ["Rousseau, Les Confessions", "Nathalie Sarraute, Enfance", "Georges Perec, W ou le souvenir d'enfance", "Annie Ernaux, La Place", "Marcel Pagnol, La Gloire de mon père", "Anne Frank, Journal"],
    attendus: ["Repérer les marques de l'autobiographie (pronoms, dates, lieux réels)", "Distinguer le temps du souvenir et le temps de l'écriture", "Expliquer les sentiments de l'enfant et le regard de l'adulte", "Analyser une phrase complexe ou un temps verbal tiré du texte"],
    methode: "Quand une question demande « ce que pense le narrateur aujourd'hui », cherche les verbes au présent et les expressions comme « aujourd'hui encore », « je comprends maintenant ».",
    quiz: [
      { t: "qcm", q: "Dans une autobiographie, l'auteur, le narrateur et le personnage principal sont…", c: ["la même personne", "trois personnes différentes", "toujours des personnages inventés"], r: 0, e: "C'est la définition même de l'autobiographie : celui qui signe le livre raconte sa propre vie avec « je »." },
      { t: "qcm", q: "Le « pacte autobiographique », c'est…", c: ["l'engagement de l'auteur à dire la vérité sur sa vie", "un contrat signé avec l'éditeur", "un poème sur l'enfance"], r: 0, e: "L'auteur promet au lecteur de raconter sincèrement sa vie, même s'il reconnaît que sa mémoire peut le tromper." },
      { t: "qcm", q: "« Aujourd'hui encore, je revois cette cuisine. » Le présent exprime…", c: ["le moment où l'auteur écrit", "une action terminée dans le passé", "une vérité générale"], r: 0, e: "C'est le présent d'énonciation : l'adulte parle au moment de l'écriture, en se souvenant." },
      { t: "qcm", q: "Pourquoi un auteur se raconte-t-il ? Quelle raison est la moins juste ?", c: ["Pour inventer une histoire totalement imaginaire", "Pour mieux se comprendre", "Pour garder la trace de son passé", "Pour témoigner d'une époque"], r: 0, e: "Une histoire totalement inventée relève du roman, pas de l'autobiographie. Les trois autres raisons reviennent souvent au brevet." }
    ],
    redaction: {
      reflexion: "Pourquoi peut-on avoir envie d'écrire sur sa propre vie ? Vous répondrez en vous appuyant sur vos lectures et votre expérience.",
      imagination: "Racontez un souvenir d'enfance marquant. Vous exprimerez ce que vous ressentiez alors et ce que vous en pensez aujourd'hui."
    },
    exercice: "souvenir"
  },
  {
    id: "denoncer", titre: "Dénoncer les travers de la société",
    question: "Comment la littérature dénonce-t-elle les injustices et les défauts des hommes ?",
    enjeu: "Comprendre comment un texte critique la société, souvent sans le dire directement : par le rire, l'ironie, l'exagération ou un récit qui fait réfléchir.",
    notions: [
      ["Satire", "Texte qui se moque des défauts d'une personne, d'un groupe ou d'une société pour les critiquer."],
      ["Ironie", "Dire le contraire de ce que l'on pense pour faire comprendre sa vraie pensée. Exemple : « Quel temps magnifique ! » sous une averse."],
      ["Antiphrase", "Figure de style de l'ironie : une phrase dont le sens réel est l'inverse du sens apparent."],
      ["Hyperbole", "Exagération qui grossit un défaut pour le rendre visible."],
      ["Apologue", "Court récit qui contient une leçon : fable, conte philosophique. On critique en racontant."],
      ["Registre polémique", "Ton d'attaque, qui cherche à combattre une idée ou une personne."]
    ],
    auteurs: ["La Fontaine, Fables", "Voltaire, Candide", "Montesquieu, Lettres persanes", "Victor Hugo, Claude Gueux et Les Misérables", "Émile Zola, « J'accuse… ! »", "Les caricatures de Daumier"],
    attendus: ["Identifier la cible de la critique (qui ou quoi est dénoncé ?)", "Repérer l'ironie et expliquer ce que l'auteur pense vraiment", "Analyser le rôle d'une image ou d'une caricature", "Expliquer la morale d'un apologue"],
    methode: "Pour une question sur l'ironie, fais toujours deux temps : ce que le texte dit en apparence, puis ce que l'auteur veut vraiment faire comprendre.",
    quiz: [
      { t: "qcm", q: "Un auteur écrit « Quelle belle invention que la guerre ! ». Il utilise…", c: ["l'ironie", "la comparaison", "une rime"], r: 0, e: "Il dit le contraire de ce qu'il pense : il condamne la guerre. C'est de l'ironie (ici une antiphrase)." },
      { t: "qcm", q: "Une fable de La Fontaine est un exemple…", c: ["d'apologue", "d'autobiographie", "de journal intime"], r: 0, e: "L'apologue est un court récit qui délivre une leçon, souvent dans une morale." },
      { t: "qcm", q: "« Il possédait tant d'or qu'il ne pouvait plus marcher. » Quelle figure ?", c: ["Hyperbole", "Personnification", "Litote"], r: 0, e: "L'exagération (hyperbole) rend la richesse ridicule et la dénonce." },
      { t: "qcm", q: "La satire sert surtout à…", c: ["critiquer en se moquant", "raconter sa vie", "décrire un paysage"], r: 0, e: "La satire fait rire des défauts pour pousser le lecteur à les rejeter." }
    ],
    redaction: {
      reflexion: "Selon vous, le rire est-il un bon moyen de dénoncer les injustices ? Vous développerez des arguments appuyés sur des exemples précis.",
      imagination: "Vous avez été témoin d'une injustice. Écrivez une lettre à un journal pour la dénoncer, en cherchant à convaincre les lecteurs."
    },
    exercice: "avis"
  },
  {
    id: "poesie", titre: "Visions poétiques du monde",
    question: "Comment la poésie nous fait-elle voir le monde autrement ?",
    enjeu: "Comprendre comment le poète transforme le réel grâce aux images, aux sons et au rythme, pour nous faire ressentir des émotions ou regarder autrement des choses ordinaires.",
    notions: [
      ["Vers, strophe, rime", "Un vers est une ligne du poème. Une strophe est un groupe de vers. La rime est la reprise d'un même son à la fin des vers."],
      ["Alexandrin", "Vers de douze syllabes. L'octosyllabe en compte huit, le décasyllabe dix."],
      ["Comparaison", "Rapprochement de deux éléments AVEC un outil : comme, tel, pareil à, semblable à. « Ses yeux brillaient comme des étoiles. »"],
      ["Métaphore", "Rapprochement SANS outil de comparaison. « Ses yeux étaient des étoiles. »"],
      ["Personnification", "Donner des traits humains à une chose ou un animal. « Le vent pleure. »"],
      ["Allitération, assonance", "Répétition d'un son consonne (allitération) ou voyelle (assonance) pour créer un effet."],
      ["Vers libre, poème en prose", "Poésie sans rimes régulières ni nombre de syllabes fixe, ou écrite en paragraphes."]
    ],
    auteurs: ["Charles Baudelaire, Les Fleurs du mal", "Arthur Rimbaud", "Guillaume Apollinaire, Alcools", "Francis Ponge, Le Parti pris des choses", "Jacques Prévert, Paroles", "Léopold Sédar Senghor"],
    attendus: ["Identifier une figure de style et expliquer son effet", "Compter les syllabes d'un vers", "Montrer comment un poème transforme un objet ordinaire", "Relier les sons et le rythme aux émotions"],
    methode: "Ne te contente jamais de nommer la figure : dis ce qu'elle rapproche et ce qu'elle fait ressentir. Exemple : « La métaphore de la mer comme un miroir souligne son calme. »",
    quiz: [
      { t: "qcm", q: "« La lune était un ballon d'or. » Quelle figure ?", c: ["Métaphore", "Comparaison", "Allitération"], r: 0, e: "Pas d'outil de comparaison (comme, tel…) : c'est une métaphore." },
      { t: "qcm", q: "« La lune brillait comme un ballon d'or. » Quelle figure ?", c: ["Comparaison", "Métaphore", "Personnification"], r: 0, e: "Le mot « comme » est un outil de comparaison." },
      { t: "qcm", q: "Combien de syllabes dans un alexandrin ?", c: ["12", "10", "8"], r: 0, e: "L'alexandrin a 12 syllabes. Attention au « e » muet : il compte devant une consonne, pas devant une voyelle ni en fin de vers." },
      { t: "qcm", q: "« Le vieux chêne soupire sous l'orage. » Quelle figure ?", c: ["Personnification", "Hyperbole", "Antiphrase"], r: 0, e: "Soupirer est une action humaine attribuée à un arbre : c'est une personnification." }
    ],
    redaction: {
      reflexion: "La poésie vous semble-t-elle encore utile aujourd'hui ? Vous justifierez votre réponse par des arguments et des exemples.",
      imagination: "Décrivez de façon poétique un objet ordinaire de votre quotidien, en utilisant au moins une comparaison, une métaphore et une personnification."
    },
    exercice: "image-poetique"
  },
  {
    id: "agir", titre: "Agir dans la cité : individu et pouvoir",
    question: "Comment l'individu peut-il s'engager face au pouvoir et à l'Histoire ?",
    enjeu: "Lire des textes liés aux grandes crises du XXe siècle (guerres mondiales, résistance, totalitarismes) et comprendre comment écrire peut être une manière d'agir, de résister ou de témoigner.",
    notions: [
      ["Engagement", "Un écrivain s'engage quand il met son œuvre au service d'une cause (liberté, justice, paix)."],
      ["Témoignage", "Récit d'une personne qui a vécu les faits. Il sert à informer et à garder la mémoire."],
      ["Registre pathétique", "Ton qui cherche à émouvoir le lecteur, à susciter la pitié ou la compassion."],
      ["Registre tragique", "Le personnage est écrasé par une force qui le dépasse (destin, pouvoir, Histoire)."],
      ["Poésie engagée", "Poèmes écrits pour défendre une cause, parfois publiés clandestinement pendant l'Occupation."],
      ["Devoir de mémoire", "Obligation de se souvenir des drames de l'Histoire pour qu'ils ne se reproduisent pas."]
    ],
    auteurs: ["Primo Levi, Si c'est un homme", "Elie Wiesel, La Nuit", "Paul Éluard, « Liberté »", "Vercors, Le Silence de la mer", "Jean Anouilh, Antigone", "Joseph Joffo, Un sac de billes"],
    attendus: ["Situer le texte dans son contexte historique", "Expliquer ce qui montre l'engagement de l'auteur", "Analyser les procédés qui émeuvent le lecteur", "Donner son avis argumenté sur le rôle du témoignage"],
    methode: "Pour un texte de guerre ou de témoignage, relève le champ lexical dominant (peur, souffrance, liberté…) : il donne souvent la clé des questions d'interprétation.",
    quiz: [
      { t: "qcm", q: "Un texte qui cherche à émouvoir et à faire naître la pitié relève du registre…", c: ["pathétique", "comique", "fantastique"], r: 0, e: "Le pathétique (du grec pathos, la souffrance) vise à émouvoir le lecteur." },
      { t: "qcm", q: "Dans Antigone d'Anouilh, Antigone s'oppose…", c: ["au roi Créon", "à son fiancé Hémon", "aux dieux de l'Olympe"], r: 0, e: "Antigone refuse d'obéir à la loi de Créon : c'est l'individu face au pouvoir." },
      { t: "qcm", q: "Pourquoi Primo Levi écrit-il Si c'est un homme ?", c: ["Pour témoigner de ce qu'il a vécu à Auschwitz", "Pour écrire un roman d'aventures", "Pour raconter un voyage touristique"], r: 0, e: "C'est un témoignage : il veut que le monde sache et n'oublie pas." },
      { t: "qcm", q: "Un poème publié clandestinement sous l'Occupation est un exemple de…", c: ["poésie engagée", "poésie lyrique amoureuse", "fable"], r: 0, e: "Écrire et diffuser malgré l'interdiction est un acte de résistance : c'est une poésie engagée." }
    ],
    redaction: {
      reflexion: "Pourquoi est-il important de témoigner des drames de l'Histoire ? Vous appuierez votre réflexion sur des exemples précis.",
      imagination: "En 1943, un adolescent de votre âge écrit à un ami pour lui expliquer pourquoi il a décidé d'agir contre l'injustice. Rédigez cette lettre."
    },
    exercice: "lettre"
  },
  {
    id: "progres", titre: "Progrès et rêves scientifiques",
    question: "Le progrès scientifique est-il un rêve ou un cauchemar ?",
    enjeu: "Lire des récits qui imaginent l'avenir pour réfléchir aux espoirs et aux dangers de la science et des techniques.",
    notions: [
      ["Science-fiction", "Récit qui imagine des inventions ou des mondes à partir des sciences et des techniques."],
      ["Récit d'anticipation", "Récit qui se passe dans un futur imaginé à partir de notre présent."],
      ["Utopie", "Société idéale imaginée, où tout semble parfait."],
      ["Dystopie (contre-utopie)", "Société imaginée qui tourne au cauchemar : surveillance, perte de liberté…"],
      ["Éthique", "Réflexion sur ce qui est bien ou mal : tout ce qui est possible scientifiquement est-il souhaitable ?"]
    ],
    auteurs: ["Jules Verne, Vingt mille lieues sous les mers", "Mary Shelley, Frankenstein", "H. G. Wells, La Machine à explorer le temps", "Aldous Huxley, Le Meilleur des mondes", "George Orwell, 1984", "Ray Bradbury, Fahrenheit 451", "René Barjavel, Ravage"],
    attendus: ["Distinguer utopie et dystopie", "Repérer ce que le texte critique de notre monde actuel", "Analyser la description d'une invention", "Argumenter sur les bienfaits et les dangers du progrès"],
    methode: "Un récit d'anticipation parle presque toujours de notre présent : demande-toi quel danger actuel l'auteur grossit pour nous alerter.",
    quiz: [
      { t: "qcm", q: "Une société imaginée qui tourne au cauchemar s'appelle…", c: ["une dystopie", "une utopie", "une autobiographie"], r: 0, e: "La dystopie (ou contre-utopie) montre une société qui prive les hommes de liberté ou de bonheur." },
      { t: "qcm", q: "Qui a écrit Frankenstein ?", c: ["Mary Shelley", "Jules Verne", "George Orwell"], r: 0, e: "Mary Shelley publie Frankenstein en 1818 : un savant crée une créature qui lui échappe." },
      { t: "qcm", q: "Dans 1984 d'Orwell, la société est marquée par…", c: ["la surveillance permanente", "la paix et la liberté", "la vie à la campagne"], r: 0, e: "« Big Brother vous regarde » : le roman dénonce le contrôle total des individus." },
      { t: "qcm", q: "Un récit d'anticipation sert souvent à…", c: ["nous alerter sur notre propre époque", "raconter des faits historiques réels", "écrire une recette"], r: 0, e: "En imaginant le futur, l'auteur grossit un danger présent pour nous faire réfléchir." }
    ],
    redaction: {
      reflexion: "Le progrès technique rend-il toujours les hommes plus heureux ? Vous développerez une réflexion argumentée.",
      imagination: "Imaginez une journée d'un collégien en 2080 : une invention a changé sa vie, pour le meilleur ou pour le pire."
    },
    exercice: "suite"
  }
];

const AUTRES_THEMES = [
  { niveau: "4e", items: ["Dire l'amour", "Individu et société : confrontations de valeurs ?", "La fiction pour interroger le réel", "Informer, s'informer, déformer ?", "La ville, lieu de tous les possibles ?"] },
  { niveau: "5e", items: ["Le voyage et l'aventure : pourquoi aller vers l'inconnu ?", "Avec autrui : familles, amis, réseaux", "Imaginer des univers nouveaux", "Héros / héroïnes et héroïsmes", "L'être humain est-il maître de la nature ?"] }
];

/* 18 leçons de 20 minutes = 6 semaines à 3 séances */
const LECONS = [
  {
    id: 1, titre: "a / à — et / est", cat: "Homophones",
    objectif: "Ne plus confondre le verbe et le petit mot qui lui ressemble.",
    regle: [
      ["<b>a</b> = verbe avoir", "On peut le remplacer par <i>avait</i>. « Il <b>a</b> faim » → « il avait faim »."],
      ["<b>à</b> = préposition", "Impossible de dire <i>avait</i>. « Il va <b>à</b> Paris »."],
      ["<b>est</b> = verbe être", "On peut le remplacer par <i>était</i>. « Elle <b>est</b> contente »."],
      ["<b>et</b> = mot de liaison", "On peut le remplacer par <i>et puis</i>. « Du pain <b>et</b> du lait »."]
    ],
    astuce: "Le test magique : essaie avec l'imparfait (avait / était). Si la phrase a du sens, c'est le verbe.",
    ex: [
      { t: "qcm", q: "Il ___ oublié son sac ___ la cantine.", c: ["a / à", "à / a", "a / a", "à / à"], r: 0, e: "« Il avait oublié » fonctionne → <b>a</b>. « avait la cantine » ne veut rien dire → <b>à</b>." },
      { t: "qcm", q: "Mon frère ___ grand ___ sportif.", c: ["est / et", "et / est", "est / est", "et / et"], r: 0, e: "« Mon frère était grand » → <b>est</b>. « grand et puis sportif » → <b>et</b>." },
      { t: "saisie", q: "Complète avec <b>a</b> ou <b>à</b> : Elle pense ___ ses vacances.", r: ["à"], e: "« Elle pense avait ses vacances » est impossible : c'est la préposition <b>à</b>." },
      { t: "saisie", q: "Complète avec <b>et</b> ou <b>est</b> : Le ciel ___ gris ce matin.", r: ["est"], e: "« Le ciel était gris » fonctionne : c'est le verbe être, <b>est</b>." },
      { t: "qcm", q: "Quelle phrase est correcte ?", c: ["Il a commencé à pleuvoir.", "Il à commencé a pleuvoir.", "Il a commencé a pleuvoir.", "Il à commencé à pleuvoir."], r: 0, e: "« Il avait commencé » → <b>a</b> ; « commencé avait pleuvoir » est impossible → <b>à</b>." },
      { t: "saisie", q: "Complète avec <b>a</b> ou <b>à</b> : Ce roman ___ marqué toute une génération.", r: ["a"], e: "« Ce roman avait marqué » fonctionne : verbe avoir, <b>a</b> sans accent." },
      { t: "qcm", q: "Le héros ___ seul face ___ l'ennemi.", c: ["est / à", "et / a", "est / a", "et / à"], r: 0, e: "« Le héros était seul » → <b>est</b>. « face avait l'ennemi » est impossible → <b>à</b>." }
    ],
    dictee: {
      texte: "Le soir, Léa est rentrée à la maison et elle a retrouvé son chien. Il l'attendait à la porte et il a aboyé de joie. Elle est restée avec lui jusqu'à la nuit.",
      pieges: { "est": "Verbe être : on peut dire « Léa était rentrée ».", "à": "Préposition : « avait la maison » est impossible.", "a": "Verbe avoir : « elle avait retrouvé ».", "et": "Mot de liaison : on peut dire « et puis ».", "rentrée": "Participe passé avec être : il s'accorde avec Léa (féminin) → rentrée.", "restée": "Avec être, accord avec le sujet « Elle » → restée." }
    }
  },
  {
    id: 2, titre: "son / sont — on / ont — ou / où", cat: "Homophones",
    objectif: "Choisir la bonne forme grâce à un test de remplacement.",
    regle: [
      ["<b>sont</b> = verbe être", "Remplaçable par <i>étaient</i>. « Ils <b>sont</b> partis »."],
      ["<b>son</b> = déterminant", "Remplaçable par <i>mon</i>. « Il prend <b>son</b> sac »."],
      ["<b>ont</b> = verbe avoir", "Remplaçable par <i>avaient</i>. « Ils <b>ont</b> gagné »."],
      ["<b>on</b> = pronom", "Remplaçable par <i>il</i>. « <b>On</b> part demain »."],
      ["<b>où</b> = lieu ou temps", "Le jour <b>où</b>, la ville <b>où</b>… et dans les questions : <b>Où</b> vas-tu ?"],
      ["<b>ou</b> = choix", "Remplaçable par <i>ou bien</i>. « Thé <b>ou</b> café ? »"]
    ],
    astuce: "« où » avec accent indique un lieu ou un moment. Sans accent, c'est un choix : « ou bien ».",
    ex: [
      { t: "qcm", q: "Les élèves ___ partis en voyage.", c: ["sont", "son"], r: 0, e: "« Les élèves étaient partis » → verbe être, <b>sont</b>." },
      { t: "qcm", q: "Il range ___ cartable.", c: ["son", "sont"], r: 0, e: "« Il range mon cartable » fonctionne → déterminant <b>son</b>." },
      { t: "saisie", q: "Complète avec <b>on</b> ou <b>ont</b> : Mes voisins ___ adopté un chat.", r: ["ont"], e: "« Mes voisins avaient adopté » → verbe avoir, <b>ont</b>." },
      { t: "saisie", q: "Complète avec <b>on</b> ou <b>ont</b> : ___ ne sait jamais ce qui peut arriver.", r: ["on"], e: "« Il ne sait jamais » → pronom <b>On</b> (avec une majuscule en début de phrase)." },
      { t: "saisie", q: "Complète avec <b>ou</b> ou <b>où</b> : La ville ___ je suis né est petite.", r: ["où"], e: "Il s'agit d'un lieu : <b>où</b> avec accent grave." },
      { t: "qcm", q: "Veux-tu du thé ___ du café ?", c: ["ou", "où"], r: 0, e: "« du thé ou bien du café » → choix, <b>ou</b> sans accent." },
      { t: "qcm", q: "Quelle phrase est correcte ?", c: ["Ils ont dit qu'on partirait.", "Ils on dit qu'ont partirait.", "Ils ont dit qu'ont partirait.", "Ils on dit qu'on partirait."], r: 0, e: "« Ils avaient dit » → <b>ont</b> ; « qu'il partirait » → <b>on</b>." }
    ],
    dictee: {
      texte: "Mes cousins sont arrivés hier. Ils ont apporté leurs valises et on a dîné ensemble dans le jardin où mon oncle avait installé une grande table. Chacun racontait son voyage, en train ou en voiture.",
      pieges: { "sont": "Verbe être : « mes cousins étaient arrivés ».", "ont": "Verbe avoir : « ils avaient apporté ».", "on": "Pronom : « il a dîné ».", "où": "Lieu (le jardin) : où avec accent.", "son": "Déterminant : « mon voyage ».", "ou": "Choix : « ou bien en voiture ».", "arrivés": "Avec être, accord avec « mes cousins » (masculin pluriel).", "leurs": "Plusieurs valises → leurs prend un s." }
    }
  },
  {
    id: 3, titre: "ce / se — ces / ses — c'est / s'est", cat: "Homophones",
    objectif: "Distinguer les déterminants, les pronoms et les verbes pronominaux.",
    regle: [
      ["<b>se</b> devant un verbe", "Verbe pronominal : on peut dire <i>je me</i>. « Il <b>se</b> lave » → « je me lave »."],
      ["<b>ce</b> devant un nom", "Déterminant démonstratif : <b>ce</b> livre, <b>ce</b> matin."],
      ["<b>ces</b> = ceux-là", "Démonstratif pluriel : « <b>ces</b> nuages (là-bas) »."],
      ["<b>ses</b> = les siens", "Possessif pluriel : « il range <b>ses</b> affaires (les siennes) »."],
      ["<b>c'est</b> = cela est", "« <b>C'est</b> beau » → « cela est beau »."],
      ["<b>s'est</b> = verbe pronominal", "Passé composé : « il <b>s'est</b> levé » → « je me suis levé »."]
    ],
    astuce: "Mets la phrase à la 1re personne : si « se » devient « me », c'est le pronom se / s'est.",
    ex: [
      { t: "qcm", q: "Il ___ promène tous les soirs.", c: ["se", "ce"], r: 0, e: "« Je me promène » → pronom <b>se</b> devant le verbe." },
      { t: "qcm", q: "___ chemin mène à la mer.", c: ["Ce", "Se"], r: 0, e: "Devant un nom (chemin), c'est le déterminant <b>Ce</b>." },
      { t: "qcm", q: "Elle a perdu ___ clés (les siennes).", c: ["ses", "ces", "c'est", "s'est"], r: 0, e: "Les clés lui appartiennent → possessif <b>ses</b>." },
      { t: "qcm", q: "Regarde ___ nuages là-bas !", c: ["ces", "ses"], r: 0, e: "On montre les nuages (« ceux-là ») → démonstratif <b>ces</b>." },
      { t: "saisie", q: "Complète avec <b>c'est</b> ou <b>s'est</b> : Il ___ trompé de route.", r: ["s'est"], e: "« Je me suis trompé » → verbe pronominal, <b>s'est</b>." },
      { t: "saisie", q: "Complète avec <b>c'est</b> ou <b>s'est</b> : ___ une belle journée.", r: ["c'est"], e: "« Cela est une belle journée » → <b>C'est</b>." },
      { t: "qcm", q: "Elle ___ souvenue de ___ promesses.", c: ["s'est / ses", "c'est / ces", "s'est / ces", "c'est / ses"], r: 0, e: "« Je me suis souvenue » → <b>s'est</b> ; ses propres promesses → <b>ses</b>." }
    ],
    dictee: {
      texte: "Ce matin-là, Hugo s'est levé tôt. Il se demandait si ses amis viendraient. C'est alors qu'il a vu ces silhouettes au bout du chemin.",
      pieges: { "ce": "Devant un nom (matin) : déterminant ce.", "s'est": "Verbe pronominal : « je me suis levé ».", "se": "Pronom devant le verbe : « je me demandais ».", "ses": "Les amis d'Hugo (les siens) : ses.", "c'est": "« Cela est alors… » : c'est.", "ces": "On montre des silhouettes : ces.", "demandait": "Imparfait, 3e personne : -ait.", "viendraient": "Conditionnel, sujet pluriel : -aient." }
    }
  },
  {
    id: 4, titre: "-é, -er, -ez ou -ait ?", cat: "Orthographe des verbes",
    objectif: "Écrire correctement la fin des verbes en -er, l'erreur la plus fréquente au brevet.",
    regle: [
      ["Infinitif en <b>-er</b>", "Remplace par <i>vendre</i> : « il faut <b>manger</b> » → « il faut vendre »."],
      ["Participe passé en <b>-é</b>", "Remplace par <i>vendu</i> : « j'ai <b>mangé</b> » → « j'ai vendu »."],
      ["Après une préposition", "à, de, pour, sans, avant de… sont suivis de l'infinitif : « pour <b>gagner</b> »."],
      ["<b>-ez</b>", "Uniquement avec <i>vous</i> : « vous <b>parlez</b> »."],
      ["<b>-ait</b>", "Imparfait : « il <b>jouait</b> » → « il vendait »."]
    ],
    astuce: "Le test vendre / vendu marche à tous les coups : vendre → -er, vendu → -é.",
    ex: [
      { t: "qcm", q: "Il faut mang__ avant de partir.", c: ["manger", "mangé", "mangez", "mangeait"], r: 0, e: "« Il faut vendre » → infinitif en <b>-er</b>." },
      { t: "qcm", q: "J'ai mang__ une pomme.", c: ["mangé", "manger"], r: 0, e: "« J'ai vendu » → participe passé en <b>-é</b>." },
      { t: "qcm", q: "Vous parl__ trop fort.", c: ["parlez", "parler", "parlé"], r: 0, e: "Le sujet est <b>vous</b> → terminaison <b>-ez</b>." },
      { t: "qcm", q: "Elle a commencé à travaill__.", c: ["travailler", "travaillé"], r: 0, e: "Après la préposition <b>à</b>, on met l'infinitif : « à vendre »." },
      { t: "qcm", q: "Autrefois, il jou__ du piano.", c: ["jouait", "jouer", "joué"], r: 0, e: "« Autrefois, il vendait » → imparfait, <b>-ait</b>." },
      { t: "saisie", q: "Écris le verbe : Nous allons (chercher) ___ du pain.", r: ["chercher"], e: "« Nous allons vendre » → infinitif <b>chercher</b>." },
      { t: "saisie", q: "Écris le verbe : Ils ont (traverser) ___ la rue.", r: ["traversé"], e: "« Ils ont vendu » → participe passé <b>traversé</b>. Avec avoir, pas d'accord avec le sujet." },
      { t: "qcm", q: "Le livre est rest__ sur la table.", c: ["resté", "rester"], r: 0, e: "« Le livre est vendu » → participe passé <b>resté</b>." }
    ],
    dictee: {
      texte: "Pour arriver à l'heure, il fallait marcher vite. Mon frère a refusé d'avancer : il voulait regarder les vitrines. Vous imaginez ma colère ! J'ai dû le tirer par la manche.",
      pieges: { "arriver": "Après « pour » : infinitif (pour vendre).", "marcher": "« Il fallait vendre » : infinitif.", "refusé": "« Il a vendu » : participe passé -é.", "avancer": "Après « de » : infinitif.", "regarder": "« Il voulait vendre » : infinitif.", "imaginez": "Sujet vous : -ez.", "tirer": "« J'ai dû vendre » : infinitif.", "fallait": "Imparfait : -ait.", "voulait": "Imparfait : -ait." }
    }
  },
  {
    id: 5, titre: "Accorder le verbe avec son sujet", cat: "Accords",
    objectif: "Trouver le vrai sujet, même quand il se cache.",
    regle: [
      ["Trouver le sujet", "Pose la question « C'est qui / qu'est-ce qui … ? » ou encadre avec « C'est … qui »."],
      ["Sujet éloigné", "« Les enfants <u>du voisin</u> <b>jouent</b> » : le sujet est <i>les enfants</i>, pas <i>voisin</i>."],
      ["Sujet inversé", "« Dans la forêt <b>vivent</b> des loups » : le sujet est après le verbe."],
      ["Le pronom « qui »", "Le verbe s'accorde avec le mot que « qui » remplace : « c'est moi qui <b>ai</b> »."],
      ["Plusieurs sujets", "« Paul et Léa <b>partent</b> » → pluriel."],
      ["Les pièges le / la / les / leur", "Placés devant le verbe, ce ne sont pas des sujets : « je les <b>regarde</b> »."]
    ],
    astuce: "Avant d'écrire la fin d'un verbe, flèche mentalement le verbe vers son sujet.",
    ex: [
      { t: "qcm", q: "Les enfants du voisin (jouer, présent) dans la cour.", c: ["jouent", "joue"], r: 0, e: "Qui joue ? <b>Les enfants</b> (pluriel). « du voisin » complète le nom enfants." },
      { t: "qcm", q: "Dans la forêt (vivre, présent) des loups.", c: ["vivent", "vit"], r: 0, e: "Qui vit ? <b>des loups</b> : sujet inversé, au pluriel." },
      { t: "qcm", q: "C'est moi qui (avoir) raison.", c: ["ai", "a"], r: 0, e: "« qui » remplace <b>moi</b> → 1re personne : j'<b>ai</b>." },
      { t: "qcm", q: "Je les (regarder, présent) partir.", c: ["regarde", "regardent"], r: 0, e: "Le sujet est <b>je</b>. « les » est un COD, pas le sujet." },
      { t: "saisie", q: "Conjugue au présent : Mon père et ma mère (travailler) ___ le samedi.", r: ["travaillent"], e: "Deux sujets = <b>ils</b> → <b>travaillent</b>." },
      { t: "saisie", q: "Conjugue au présent : Tu leur (donner) ___ des conseils.", r: ["donnes"], e: "Le sujet est <b>tu</b> → -es. « leur » est un COI, il ne commande pas l'accord." },
      { t: "qcm", q: "La plupart des élèves ___ ce livre.", c: ["connaissent", "connaît"], r: 0, e: "Avec <b>la plupart</b>, le verbe se met au pluriel." }
    ],
    dictee: {
      texte: "Au bout de la rue se dressent de vieilles maisons. Les volets de chaque fenêtre restent fermés. Mes amis et moi les observons souvent : c'est nous qui avons inventé leur histoire.",
      pieges: { "dressent": "Sujet inversé « de vieilles maisons » : pluriel.", "restent": "Sujet « les volets » (pas « fenêtre ») : pluriel.", "observons": "« Mes amis et moi » = nous.", "avons": "« qui » remplace « nous » : nous avons.", "fermés": "Adjectif accordé avec « les volets ».", "vieilles": "Adjectif accordé avec « maisons » : féminin pluriel." }
    }
  },
  {
    id: 6, titre: "Le participe passé avec être et avoir", cat: "Accords",
    objectif: "Savoir quand le participe passé s'accorde.",
    regle: [
      ["Avec <b>être</b>", "Accord avec le sujet : « elles sont <b>parties</b> »."],
      ["Avec <b>avoir</b>", "Pas d'accord avec le sujet : « elles ont <b>mangé</b> »."],
      ["Exception avec avoir", "Accord avec le COD s'il est placé AVANT le verbe : « les fraises <u>qu'</u>elles ont <b>mangées</b> »."],
      ["COD placé avant", "Souvent <i>que, l', les, la</i> : « cette lettre, je <u>l'</u>ai <b>lue</b> »."]
    ],
    astuce: "Avec avoir, pose la question « quoi ? » APRÈS le verbe. Si la réponse est déjà écrite avant, accorde.",
    ex: [
      { t: "qcm", q: "Elles sont (partir).", c: ["parties", "parti", "partis"], r: 0, e: "Avec <b>être</b>, accord avec le sujet <i>elles</i> (féminin pluriel) : <b>parties</b>." },
      { t: "qcm", q: "Elles ont (manger) des fraises.", c: ["mangé", "mangées"], r: 0, e: "Avec <b>avoir</b>, le COD « des fraises » est placé après : pas d'accord." },
      { t: "qcm", q: "Les fraises qu'elles ont (manger) étaient sucrées.", c: ["mangées", "mangé"], r: 0, e: "Elles ont mangé quoi ? <b>que</b> = les fraises, placé AVANT → accord : <b>mangées</b>." },
      { t: "qcm", q: "Cette lettre, je l'ai (lire) hier.", c: ["lue", "lu"], r: 0, e: "J'ai lu quoi ? <b>l'</b> = cette lettre, placé avant → <b>lue</b>." },
      { t: "saisie", q: "Accorde : Les filles sont (arriver) ___ en retard.", r: ["arrivées"], e: "Avec être, accord avec <i>les filles</i> : <b>arrivées</b>." },
      { t: "saisie", q: "Accorde : Mes parents ont (acheter) ___ une voiture.", r: ["acheté"], e: "Avec avoir, COD placé après : <b>acheté</b>, sans accord." },
      { t: "qcm", q: "La porte a été (ouvrir) par le vent.", c: ["ouverte", "ouvert"], r: 0, e: "« a été » contient le verbe <b>être</b> (voix passive) : accord avec <i>la porte</i>." }
    ],
    dictee: {
      texte: "Les invitées sont arrivées à huit heures. Elles avaient apporté des gâteaux que nous avons partagés. Ma tante, elle, est restée dans la cuisine : la recette, elle l'avait inventée.",
      pieges: { "arrivées": "Avec être : accord avec « les invitées ».", "apporté": "Avec avoir, COD « des gâteaux » placé après : pas d'accord.", "partagés": "COD « que » (= les gâteaux) placé avant : accord.", "restée": "Avec être : accord avec « ma tante ».", "inventée": "COD « l' » (= la recette) placé avant : accord." }
    }
  },
  {
    id: 7, titre: "Présent et imparfait", cat: "Conjugaison",
    objectif: "Maîtriser les terminaisons des deux temps les plus utilisés.",
    regle: [
      ["Présent, 1er groupe", "-e, -es, -e, -ons, -ez, -ent : je chante, tu chantes…"],
      ["Présent, 2e et 3e groupes", "Souvent -s, -s, -t : je finis, tu finis, il finit. Verbes en -dre : il prend, il répond (-d)."],
      ["Imparfait, tous les verbes", "-ais, -ais, -ait, -ions, -iez, -aient. Toujours les mêmes !"],
      ["Valeurs de l'imparfait", "Description, habitude, action en arrière-plan dans un récit."]
    ],
    astuce: "Au présent, je ne prends jamais de -t ; avec je et tu, pense au -s (sauf -e du 1er groupe).",
    ex: [
      { t: "qcm", q: "Tu (crier) au présent.", c: ["cries", "crie", "cris"], r: 0, e: "1er groupe avec tu : <b>-es</b>." },
      { t: "qcm", q: "Il (finir) au présent.", c: ["finit", "finis", "fini"], r: 0, e: "2e groupe, 3e personne : <b>-it</b>. « fini » sans t est le participe passé." },
      { t: "qcm", q: "Je (prendre) au présent.", c: ["prends", "prend", "prent"], r: 0, e: "Verbe en -dre : je pren<b>ds</b>, tu prends, il prend." },
      { t: "qcm", q: "Nous (manger) à l'imparfait.", c: ["mangions", "mangeions", "mangeons"], r: 0, e: "Devant <b>i</b>, pas besoin de e : nous mangions. Mais : il mang<b>e</b>ait (le e garde le son « je » devant a)." },
      { t: "saisie", q: "Imparfait : Ils (jouer) ___ dans le jardin.", r: ["jouaient"], e: "Imparfait, ils : <b>-aient</b>." },
      { t: "saisie", q: "Imparfait : J'(être) ___ fatigué.", r: ["étais"], e: "Imparfait d'être : j'<b>étais</b>, avec -ais pour je." },
      { t: "qcm", q: "« Chaque été, nous allions à la mer. » L'imparfait exprime…", c: ["une habitude", "une action soudaine", "une action future"], r: 0, e: "« Chaque été » indique une action répétée : <b>habitude</b>." }
    ],
    dictee: {
      texte: "Quand j'étais petit, je passais mes vacances chez ma grand-mère. Elle habitait une maison qui sentait la confiture. Le matin, nous partions cueillir des mûres et nous rentrions les mains violettes.",
      pieges: { "étais": "Imparfait, je : -ais.", "passais": "Imparfait, je : -ais.", "habitait": "Imparfait, elle : -ait.", "sentait": "Sujet « qui » = la maison : -ait.", "partions": "Imparfait, nous : -ions.", "rentrions": "Imparfait, nous : -ions.", "cueillir": "Infinitif après le verbe partir.", "violettes": "Adjectif accordé avec « les mains »." }
    }
  },
  {
    id: 8, titre: "Le passé simple", cat: "Conjugaison",
    objectif: "Conjuguer le temps du récit, très présent dans les textes du brevet.",
    regle: [
      ["1er groupe (-er)", "-ai, -as, -a, -âmes, -âtes, -èrent : il march<b>a</b>, ils march<b>èrent</b>."],
      ["2e groupe et beaucoup du 3e", "-is, -is, -it, -îmes, -îtes, -irent : il fin<b>it</b>, il pr<b>it</b>."],
      ["Autres verbes du 3e", "-us, -us, -ut… : il <b>courut</b>, il <b>voulut</b>. Être : il <b>fut</b>. Avoir : il <b>eut</b>."],
      ["Valeur", "Action brève, au premier plan du récit. L'imparfait sert de décor."]
    ],
    astuce: "Je chantai (passé simple) ≠ je chantais (imparfait). Ajoute « soudain » : « soudain je chantai » marche mieux.",
    ex: [
      { t: "qcm", q: "Il (marcher) au passé simple.", c: ["marcha", "marchat", "marchit"], r: 0, e: "1er groupe, il : <b>-a</b>, sans t." },
      { t: "qcm", q: "Ils (finir) au passé simple.", c: ["finirent", "finèrent", "finissirent"], r: 0, e: "2e groupe : ils fin<b>irent</b>." },
      { t: "qcm", q: "Elle (être) au passé simple.", c: ["fut", "fût", "fu"], r: 0, e: "Passé simple : elle <b>fut</b>. « fût » avec accent est un autre temps (subjonctif imparfait)." },
      { t: "qcm", q: "Nous (avoir) au passé simple.", c: ["eûmes", "eumes", "avâmes"], r: 0, e: "Nous <b>eûmes</b>, avec l'accent circonflexe aux 1re et 2e personnes du pluriel." },
      { t: "saisie", q: "Passé simple : Soudain, le loup (sauter) ___ sur la chèvre.", r: ["sauta"], e: "1er groupe, il : <b>sauta</b>." },
      { t: "saisie", q: "Passé simple : Ils (prendre) ___ la fuite.", r: ["prirent"], e: "Prendre : il prit, ils <b>prirent</b>." },
      { t: "qcm", q: "« Il pleuvait quand la porte s'ouvrit. » Quel verbe exprime l'action soudaine ?", c: ["s'ouvrit", "pleuvait"], r: 0, e: "Le passé simple <b>s'ouvrit</b> marque l'action brève ; l'imparfait « pleuvait » plante le décor." }
    ],
    dictee: {
      texte: "La nuit tombait. Soudain, un bruit retentit dans le couloir. Paul se leva, prit sa lampe et ouvrit la porte. Il ne vit personne, mais il eut très peur.",
      pieges: { "tombait": "Imparfait (décor) : -ait.", "retentit": "Passé simple, 2e groupe : -it.", "leva": "Passé simple, 1er groupe : -a sans t.", "prit": "Passé simple de prendre : prit.", "ouvrit": "Passé simple d'ouvrir : ouvrit.", "vit": "Passé simple de voir : vit.", "eut": "Passé simple d'avoir : eut." }
    }
  },
  {
    id: 9, titre: "Futur ou conditionnel ?", cat: "Conjugaison",
    objectif: "Ne plus confondre -rai et -rais.",
    regle: [
      ["Futur", "Je -<b>rai</b>, tu -ras, il -ra… : « demain, je partirai »."],
      ["Conditionnel", "Je -<b>rais</b>, tu -rais, il -rait… : « si je pouvais, je partirais »."],
      ["Emplois du conditionnel", "Hypothèse (si + imparfait), souhait, politesse (je voudrais), futur dans le passé (il a dit qu'il viendrait)."]
    ],
    astuce: "Remplace « je » par « il » : il partira (futur) ou il partirait (conditionnel). Tu entends la différence !",
    ex: [
      { t: "qcm", q: "Demain, je (partir) tôt.", c: ["partirai", "partirais"], r: 0, e: "« Demain, il partira » → futur : <b>-rai</b>." },
      { t: "qcm", q: "Si j'avais le temps, je (lire) plus.", c: ["lirais", "lirai"], r: 0, e: "Si + imparfait → conditionnel : « il lirait » → <b>lirais</b>." },
      { t: "qcm", q: "Je (vouloir) un renseignement, s'il vous plaît.", c: ["voudrais", "voudrai"], r: 0, e: "Politesse → conditionnel : <b>voudrais</b>." },
      { t: "qcm", q: "Quand tu seras grand, tu (comprendre).", c: ["comprendras", "comprendrais"], r: 0, e: "Action future certaine → futur : <b>comprendras</b>." },
      { t: "saisie", q: "Futur : Nous (voir) ___ bien.", r: ["verrons"], e: "Voir au futur : je verrai, nous <b>verrons</b> (deux r)." },
      { t: "saisie", q: "Conditionnel : Si elle pouvait, elle (venir) ___.", r: ["viendrait"], e: "Venir : radical viendr- + -ait → <b>viendrait</b>." },
      { t: "qcm", q: "Il a dit qu'il (venir) le lendemain.", c: ["viendrait", "viendra"], r: 0, e: "Verbe introducteur au passé → futur dans le passé = <b>conditionnel</b>." }
    ],
    dictee: {
      texte: "Plus tard, je serai médecin. Je soignerai les gens et je voyagerai dans le monde entier. Si j'étais riche, je construirais un hôpital ; mais je pourrais aussi enseigner.",
      pieges: { "serai": "Futur certain : « il sera » → -rai.", "soignerai": "Futur : « il soignera ».", "voyagerai": "Futur : « il voyagera ».", "construirais": "Si + imparfait → conditionnel : « il construirait ».", "pourrais": "Hypothèse → conditionnel, deux r.", "étais": "Imparfait après si.", "enseigner": "Infinitif après pouvoir." }
    }
  },
  {
    id: 10, titre: "Le subjonctif présent", cat: "Conjugaison",
    objectif: "Reconnaître quand il faut le subjonctif et le conjuguer.",
    regle: [
      ["Quand l'utiliser ?", "Après <i>il faut que, je veux que, bien que, pour que, avant que, je doute que</i>…"],
      ["Terminaisons", "-e, -es, -e, -ions, -iez, -ent : que je chante, que nous chantions."],
      ["Verbes irréguliers", "être : que je <b>sois</b>, qu'il <b>soit</b> ; avoir : que j'<b>aie</b>, qu'il <b>ait</b> ; faire : que je <b>fasse</b> ; aller : que j'<b>aille</b> ; pouvoir : que je <b>puisse</b> ; savoir : que je <b>sache</b>."]
    ],
    astuce: "Remplace par le verbe faire : « il faut que je fasse ». Si « fasse » va, c'est le subjonctif.",
    ex: [
      { t: "qcm", q: "Il faut que tu (faire) tes devoirs.", c: ["fasses", "fais", "feras"], r: 0, e: "« Il faut que » → subjonctif : que tu <b>fasses</b>." },
      { t: "qcm", q: "Je veux qu'il (être) à l'heure.", c: ["soit", "est", "sois"], r: 0, e: "Subjonctif d'être, 3e personne : qu'il <b>soit</b> (avec t)." },
      { t: "qcm", q: "Bien qu'il (avoir) froid, il sort.", c: ["ait", "a", "aie"], r: 0, e: "« Bien que » → subjonctif : qu'il <b>ait</b>. « aie » est pour je." },
      { t: "qcm", q: "Partons avant qu'il (pleuvoir).", c: ["pleuve", "pleut"], r: 0, e: "« Avant que » → subjonctif : qu'il <b>pleuve</b>." },
      { t: "saisie", q: "Il faut que nous (aller) ___ à la gare.", r: ["allions"], e: "Subjonctif d'aller : que nous <b>allions</b>." },
      { t: "saisie", q: "Je doute qu'elle (pouvoir) ___ venir.", r: ["puisse"], e: "Subjonctif de pouvoir : qu'elle <b>puisse</b>." },
      { t: "qcm", q: "Quelle phrase est correcte ?", c: ["Il faut que tu sois prêt.", "Il faut que tu es prêt.", "Il faut que tu soit prêt."], r: 0, e: "Que tu <b>sois</b> : subjonctif d'être, avec -s pour tu." }
    ],
    dictee: {
      texte: "Il faut que tu viennes ce soir. Mes parents veulent que nous fassions connaissance. Bien que la maison soit petite, nous trouverons une place pour que chacun puisse s'asseoir.",
      pieges: { "viennes": "Subjonctif après « il faut que » : -es pour tu.", "fassions": "Subjonctif de faire : que nous fassions.", "soit": "Subjonctif d'être après « bien que ».", "puisse": "Subjonctif de pouvoir après « pour que ».", "veulent": "Présent de vouloir, sujet « mes parents ».", "trouverons": "Futur, nous : -rons." }
    }
  },
  {
    id: 11, titre: "Accords dans le groupe nominal", cat: "Accords",
    objectif: "Accorder adjectifs et noms, y compris les pluriels irréguliers.",
    regle: [
      ["L'adjectif s'accorde", "En genre et en nombre avec le nom : des fleurs <b>blanches</b>."],
      ["Pluriels en -x", "-eau, -au, -eu → -x : des bateaux, des jeux. Sauf : pneus, bleus."],
      ["-al → -aux", "Un cheval, des chevaux. Sauf : bals, carnavals, festivals, chacals, récitals."],
      ["Masculin + féminin", "Une robe et un manteau <b>noirs</b> : le masculin l'emporte."],
      ["Adjectifs de couleur", "Si la couleur est un nom (orange, marron) ou composée (bleu clair) → invariable."]
    ],
    astuce: "Dans un groupe nominal, cherche le nom chef et fais partir des flèches vers tous ses adjectifs.",
    ex: [
      { t: "qcm", q: "Des pantalons (marron).", c: ["marron", "marrons"], r: 0, e: "« Marron » est d'abord un nom (le fruit) : la couleur reste <b>invariable</b>." },
      { t: "qcm", q: "Des (cheval).", c: ["chevaux", "chevals"], r: 0, e: "-al → <b>-aux</b> : des chevaux." },
      { t: "qcm", q: "Des (journal).", c: ["journaux", "journals"], r: 0, e: "-al → <b>-aux</b> : des journaux." },
      { t: "qcm", q: "Une robe et un manteau (noir).", c: ["noirs", "noires", "noir"], r: 0, e: "Féminin + masculin → <b>masculin pluriel</b> : noirs." },
      { t: "saisie", q: "Accorde : des chemises (bleu clair) ___", r: ["bleu clair"], e: "Couleur composée de deux mots → <b>invariable</b> : bleu clair." },
      { t: "saisie", q: "Accorde : de (beau) ___ histoires", r: ["belles"], e: "Histoires est féminin pluriel : <b>belles</b>." },
      { t: "qcm", q: "Des (pneu).", c: ["pneus", "pneux"], r: 0, e: "Exception : des <b>pneus</b>, comme des bleus." }
    ],
    dictee: {
      texte: "Dans la vitrine, on voyait de beaux bijoux, des montres dorées et des foulards orange. Les vendeuses, souriantes et patientes, montraient aux clients les nouveaux modèles.",
      pieges: { "beaux": "Beau → beaux au masculin pluriel.", "bijoux": "Un des 7 noms en -ou qui prennent un x : bijou, caillou, chou, genou, hibou, joujou, pou.", "dorées": "Adjectif accordé avec « montres » (féminin pluriel).", "orange": "Couleur issue d'un nom : invariable.", "souriantes": "Accordé avec « vendeuses ».", "patientes": "Accordé avec « vendeuses ».", "nouveaux": "Nouveau → nouveaux.", "montraient": "Sujet « les vendeuses » : -aient." }
    }
  },
  {
    id: 12, titre: "Les classes grammaticales", cat: "Grammaire",
    objectif: "Identifier la nature d'un mot, question classique du brevet.",
    regle: [
      ["Variables", "Nom, déterminant, adjectif, pronom, verbe."],
      ["Invariables", "Adverbe (vite, très, rapidement), préposition (à, de, pour, malgré, sans), conjonction."],
      ["Conjonctions de coordination", "mais, ou, et, donc, or, ni, car."],
      ["Conjonctions de subordination", "que, quand, si, comme, parce que, lorsque, bien que…"],
      ["Le cas de « leur »", "Devant un verbe = pronom (je <b>leur</b> parle). Devant un nom = déterminant (<b>leur</b> vélo)."]
    ],
    astuce: "La nature d'un mot ne change pas (c'est sa « carte d'identité ») ; sa fonction dépend de la phrase.",
    ex: [
      { t: "qcm", q: "« rapidement » dans « Il court rapidement »", c: ["adverbe", "adjectif", "verbe"], r: 0, e: "Invariable, il précise le verbe : <b>adverbe</b> (suffixe -ment)." },
      { t: "qcm", q: "« leur » dans « Je leur parle »", c: ["pronom personnel", "déterminant possessif"], r: 0, e: "Placé devant le verbe, il remplace « à eux » : <b>pronom</b>." },
      { t: "qcm", q: "« leur » dans « Ils prennent leur vélo »", c: ["déterminant possessif", "pronom personnel"], r: 0, e: "Placé devant un nom (vélo) : <b>déterminant possessif</b>." },
      { t: "qcm", q: "« car »", c: ["conjonction de coordination", "conjonction de subordination", "préposition"], r: 0, e: "Mais, ou, et, donc, or, ni, <b>car</b>." },
      { t: "qcm", q: "« malgré » dans « malgré la pluie »", c: ["préposition", "adverbe", "conjonction"], r: 0, e: "Il introduit un groupe nominal : <b>préposition</b>." },
      { t: "qcm", q: "« quand » dans « Je partirai quand tu arriveras »", c: ["conjonction de subordination", "conjonction de coordination", "pronom relatif"], r: 0, e: "Il introduit une proposition subordonnée de temps : <b>conjonction de subordination</b>." },
      { t: "qcm", q: "« sombre » dans « une nuit sombre »", c: ["adjectif qualificatif", "nom", "adverbe"], r: 0, e: "Il qualifie le nom nuit : <b>adjectif</b>." }
    ],
    dictee: {
      texte: "Leur maison était sombre mais accueillante. Je leur ai rendu visite quand l'hiver est arrivé, car ils vivaient seuls. Malgré le froid, ils m'ont reçu chaleureusement.",
      pieges: { "leur": "Devant un nom : déterminant ; devant un verbe : pronom, toujours sans s.", "accueillante": "Attention : ue après le c (comme cueillir).", "est": "Verbe être : « l'hiver était arrivé ».", "vivaient": "Imparfait, ils : -aient.", "seuls": "Accordé avec « ils ».", "reçu": "Cédille devant u pour garder le son s.", "chaleureusement": "Adverbe formé sur chaleureuse + -ment." }
    }
  },
  {
    id: 13, titre: "Sujet, COD, COI, attribut", cat: "Grammaire",
    objectif: "Trouver la fonction des mots autour du verbe.",
    regle: [
      ["COD", "Répond à « qui ? / quoi ? » après le verbe, SANS préposition : elle écrit <b>une lettre</b>."],
      ["COI", "Répond à « à qui ? / de quoi ? » : elle écrit <b>à son frère</b>."],
      ["Attribut du sujet", "Après un verbe d'état (être, paraître, sembler, devenir, demeurer, rester, avoir l'air) : il semble <b>fatigué</b>."],
      ["Pronoms", "le, la, les = COD ; lui, leur = COI ; me, te, nous, vous = les deux selon le verbe."]
    ],
    astuce: "Pour l'attribut : remplace le verbe par « être ». Si la phrase garde son sens, c'est un attribut.",
    ex: [
      { t: "qcm", q: "« une lettre » : Elle écrit une lettre.", c: ["COD", "COI", "attribut du sujet"], r: 0, e: "Elle écrit quoi ? une lettre, sans préposition : <b>COD</b>." },
      { t: "qcm", q: "« à son frère » : Elle écrit à son frère.", c: ["COI", "COD", "complément circonstanciel"], r: 0, e: "Elle écrit à qui ? avec la préposition « à » : <b>COI</b>." },
      { t: "qcm", q: "« fatigué » : Il semble fatigué.", c: ["attribut du sujet", "COD", "épithète"], r: 0, e: "« Sembler » est un verbe d'état : <b>attribut du sujet</b>." },
      { t: "qcm", q: "« le » : Je le vois.", c: ["COD", "sujet", "COI"], r: 0, e: "Je vois qui ? le → <b>COD</b>." },
      { t: "qcm", q: "« lui » : Je lui parle.", c: ["COI", "COD"], r: 0, e: "Je parle à qui ? à lui → <b>COI</b>." },
      { t: "qcm", q: "« le vent » : Soudain se leva le vent.", c: ["sujet (inversé)", "COD"], r: 0, e: "Qui se leva ? le vent → <b>sujet inversé</b>." },
      { t: "qcm", q: "« de ses vacances » : Il parle de ses vacances.", c: ["COI", "COD", "complément circonstanciel de lieu"], r: 0, e: "Il parle de quoi ? préposition « de » → <b>COI</b>." }
    ],
    dictee: {
      texte: "Mon amie semblait inquiète. Elle m'a confié un secret et elle m'a demandé de le garder. Je lui ai promis le silence. Depuis, ce secret me paraît lourd.",
      pieges: { "inquiète": "Attribut du sujet « mon amie » : il s'accorde (féminin).", "confié": "Avec avoir, COD « un secret » après : pas d'accord.", "demandé": "Avec avoir : -é.", "garder": "Après « de » : infinitif.", "promis": "Participe passé de promettre, avec s.", "paraît": "Accent circonflexe sur le i devant t (orthographe traditionnelle)." }
    }
  },
  {
    id: 14, titre: "Expansions du nom et compléments circonstanciels", cat: "Grammaire",
    objectif: "Enrichir et analyser les groupes de mots.",
    regle: [
      ["Épithète", "Adjectif collé au nom : une nuit <b>sombre</b>."],
      ["Complément du nom", "Groupe introduit par une préposition : une table <b>en bois</b>."],
      ["Apposition", "Séparée par une virgule : <b>Fatigué</b>, le voyageur s'endormit."],
      ["Proposition relative", "Introduite par qui, que, dont, où : l'oiseau <b>qui chante</b>."],
      ["Compléments circonstanciels", "Temps, lieu, manière, cause, but, moyen… On peut souvent les déplacer ou les supprimer."]
    ],
    astuce: "Un complément circonstanciel se déplace : « Chaque matin, il court » = « Il court chaque matin ».",
    ex: [
      { t: "qcm", q: "« en bois » dans « une table en bois »", c: ["complément du nom", "épithète", "COD"], r: 0, e: "Préposition « en » + nom, qui complète le nom table : <b>complément du nom</b>." },
      { t: "qcm", q: "« Fatigué par la route » dans « Fatigué par la route, le voyageur s'endormit »", c: ["apposition", "complément du nom", "COD"], r: 0, e: "Détaché par une virgule, il apporte une information sur le voyageur : <b>apposition</b>." },
      { t: "qcm", q: "« qui chante » dans « l'oiseau qui chante »", c: ["proposition subordonnée relative", "complément du nom", "épithète"], r: 0, e: "Introduite par le pronom relatif « qui » : <b>relative</b>." },
      { t: "qcm", q: "« avec prudence » dans « il conduit avec prudence »", c: ["CC de manière", "CC de lieu", "COI"], r: 0, e: "Comment conduit-il ? → <b>manière</b>." },
      { t: "qcm", q: "« à cause de la neige » dans « Le train a du retard à cause de la neige »", c: ["CC de cause", "CC de but"], r: 0, e: "Pourquoi le retard ? → <b>cause</b>." },
      { t: "qcm", q: "« pour réussir » dans « il travaille pour réussir »", c: ["CC de but", "CC de cause", "COD"], r: 0, e: "Dans quel but ? → <b>but</b>." },
      { t: "qcm", q: "« Chaque matin » dans « Chaque matin, il court »", c: ["CC de temps", "sujet"], r: 0, e: "Quand ? → <b>temps</b>." }
    ],
    dictee: {
      texte: "Chaque matin, la vieille dame aux cheveux blancs sortait avec prudence. Elle traversait le parc où jouaient des enfants bruyants et s'arrêtait près du bassin pour nourrir les canards.",
      pieges: { "blancs": "Accordé avec « cheveux ».", "sortait": "Imparfait, elle : -ait.", "où": "Pronom relatif de lieu : accent.", "jouaient": "Sujet inversé « des enfants » : pluriel.", "bruyants": "Accordé avec « enfants ».", "s'arrêtait": "Verbe pronominal : je m'arrêtais.", "nourrir": "Après « pour » : infinitif. Un seul r au début, deux r au milieu." }
    }
  },
  {
    id: 15, titre: "Phrase simple, phrase complexe", cat: "Grammaire",
    objectif: "Compter les propositions et dire comment elles sont reliées.",
    regle: [
      ["Proposition", "Un verbe conjugué = une proposition. Phrase simple : un seul verbe conjugué."],
      ["Juxtaposées", "Reliées par une ponctuation ( , ; : ) : Il pleut, je reste."],
      ["Coordonnées", "Reliées par mais, ou, et, donc, or, ni, car."],
      ["Subordonnées", "Dépendent d'une principale. Relative (qui, que, dont, où) ; conjonctive (que, quand, parce que, si…)."]
    ],
    astuce: "Souligne d'abord tous les verbes conjugués : tu sauras combien il y a de propositions.",
    ex: [
      { t: "qcm", q: "Combien de propositions : « Il pleut, je reste à la maison. »", c: ["2", "1", "3"], r: 0, e: "Deux verbes conjugués (pleut, reste) → <b>2</b> propositions." },
      { t: "qcm", q: "Dans cette même phrase, les propositions sont…", c: ["juxtaposées", "coordonnées", "subordonnées"], r: 0, e: "Elles sont reliées par une virgule : <b>juxtaposées</b>." },
      { t: "qcm", q: "« Je sors mais il fait froid. »", c: ["coordonnées", "juxtaposées"], r: 0, e: "« mais » est une conjonction de coordination : <b>coordonnées</b>." },
      { t: "qcm", q: "« Je pense que tu as raison » : « que tu as raison » est…", c: ["une subordonnée conjonctive complétive", "une subordonnée relative"], r: 0, e: "« que » suit le verbe penser et complète ce verbe (COD) : <b>conjonctive complétive</b>." },
      { t: "qcm", q: "« Le livre que tu m'as prêté est passionnant » : « que tu m'as prêté » est…", c: ["une subordonnée relative", "une subordonnée conjonctive"], r: 0, e: "« que » remplace « le livre » (un nom) : c'est un pronom relatif → <b>relative</b>." },
      { t: "qcm", q: "« Il est parti parce qu'il était en retard » : la subordonnée exprime…", c: ["la cause", "le but", "le temps"], r: 0, e: "« parce que » introduit une <b>cause</b>." },
      { t: "qcm", q: "Quelle phrase est simple ?", c: ["Le chat dort sur le canapé.", "Le chat dort et le chien joue.", "Le chat qui dort ronronne."], r: 0, e: "Un seul verbe conjugué (dort) : phrase <b>simple</b>." }
    ],
    dictee: {
      texte: "Le train était parti quand nous sommes arrivés à la gare. Mon père, qui détestait attendre, s'est énervé ; ma mère a ri, car elle trouvait la situation comique.",
      pieges: { "parti": "Avec être, accord avec « le train » (masculin singulier).", "sommes": "Nous sommes : verbe être.", "arrivés": "Avec être, accord avec « nous » (pluriel).", "détestait": "Sujet « qui » = mon père : -ait.", "attendre": "Infinitif.", "s'est": "Verbe pronominal : il s'est énervé.", "énervé": "Mon père → masculin singulier.", "ri": "Participe passé de rire : ri, sans t ni s." }
    }
  },
  {
    id: 16, titre: "Voix active, voix passive", cat: "Grammaire",
    objectif: "Transformer une phrase et accorder le participe.",
    regle: [
      ["Voix active", "Le sujet fait l'action : <b>Le chat</b> mange la souris."],
      ["Voix passive", "Le sujet subit l'action : <b>La souris</b> est mangée par le chat."],
      ["Construction", "être (au temps du verbe actif) + participe passé accordé avec le sujet + complément d'agent (par…)."],
      ["Temps", "a renversé (passé composé) → <b>ont été</b> renversés ; renversait → <b>étaient</b> renversés."]
    ],
    astuce: "Le COD de la phrase active devient sujet de la phrase passive.",
    ex: [
      { t: "qcm", q: "« La souris est mangée par le chat » est à la voix…", c: ["passive", "active"], r: 0, e: "Le sujet (la souris) subit l'action : voix <b>passive</b>." },
      { t: "qcm", q: "Dans cette phrase, le complément d'agent est…", c: ["par le chat", "la souris", "est mangée"], r: 0, e: "C'est celui qui fait l'action, introduit par <b>par</b>." },
      { t: "qcm", q: "Mets au passif : « Le vent a renversé les arbres. »", c: ["Les arbres ont été renversés par le vent.", "Les arbres sont renversés par le vent.", "Les arbres ont renversé le vent."], r: 0, e: "Passé composé (a renversé) → <b>ont été</b> + participe accordé (renversés)." },
      { t: "qcm", q: "Les lettres ont été (écrire) par Marie.", c: ["écrites", "écrit", "écrits"], r: 0, e: "Voix passive : accord avec le sujet <i>les lettres</i> → <b>écrites</b>." },
      { t: "saisie", q: "Mets à la voix active : « Le gâteau est préparé par Léo. » → Léo ___ le gâteau.", r: ["prépare"], e: "« est préparé » est au présent → Léo <b>prépare</b>." },
      { t: "qcm", q: "Pourquoi utiliser la voix passive ?", c: ["Pour mettre en valeur celui qui subit l'action", "Pour parler au futur", "Pour poser une question"], r: 0, e: "Le passif met en avant la <b>victime</b> ou l'objet de l'action, très utilisé dans les articles." },
      { t: "qcm", q: "« Le voleur a été arrêté. » Le complément d'agent est…", c: ["absent", "le voleur"], r: 0, e: "On ne dit pas par qui : le complément d'agent est <b>absent</b>." }
    ],
    dictee: {
      texte: "Le village fut détruit par la tempête. Les maisons avaient été construites trop près de la mer. Heureusement, les habitants ont été prévenus à temps et ils ont été accueillis par leurs voisins.",
      pieges: { "détruit": "Passif, accord avec « le village » ; participe en -t (détruite au féminin).", "construites": "Passif, accord avec « les maisons ».", "prévenus": "Passif, accord avec « les habitants ».", "accueillis": "Passif, accord avec « ils » ; attention à « ueil ».", "leurs": "Plusieurs voisins : leurs avec s.", "heureusement": "Adverbe : heureuse + -ment." }
    }
  },
  {
    id: 17, titre: "Discours direct et indirect", cat: "Grammaire",
    objectif: "Rapporter des paroles correctement.",
    regle: [
      ["Discours direct", "Paroles rapportées telles quelles, avec guillemets ou tirets : Il dit : « Je suis fatigué. »"],
      ["Discours indirect", "Intégrées dans la phrase avec que, si, ce que : Il dit qu'il est fatigué."],
      ["Changements", "Pronoms (je → il), temps si le verbe introducteur est au passé (présent → imparfait, futur → conditionnel, passé composé → plus-que-parfait), indices (demain → le lendemain, ici → là)."]
    ],
    astuce: "Au discours indirect, plus de guillemets ni de point d'interrogation : la question devient « si » ou « ce que ».",
    ex: [
      { t: "qcm", q: "Il a dit : « Je suis fatigué. » →", c: ["Il a dit qu'il était fatigué.", "Il a dit que je suis fatigué.", "Il a dit qu'il sera fatigué."], r: 0, e: "je → <b>il</b> ; présent → <b>imparfait</b> car « a dit » est au passé." },
      { t: "qcm", q: "Elle a demandé : « Viendras-tu demain ? » →", c: ["Elle a demandé s'il viendrait le lendemain.", "Elle a demandé s'il viendra demain.", "Elle a demandé viendras-tu demain."], r: 0, e: "Question oui/non → <b>si</b> ; futur → <b>conditionnel</b> ; demain → <b>le lendemain</b>." },
      { t: "qcm", q: "« Sors d'ici ! » hurla-t-il. Le verbe introducteur est…", c: ["hurla", "sors"], r: 0, e: "Le verbe de parole est <b>hurla</b>. Varier ces verbes enrichit tes rédactions." },
      { t: "qcm", q: "« Qu'as-tu fait ? » demanda-t-elle. →", c: ["Elle demanda ce qu'il avait fait.", "Elle demanda qu'as-tu fait.", "Elle demanda s'il avait fait."], r: 0, e: "« Qu'est-ce que » → <b>ce que</b> ; passé composé → <b>plus-que-parfait</b>." },
      { t: "saisie", q: "Il a dit : « Je partirai. » → Il a dit qu'il ___.", r: ["partirait"], e: "Futur → <b>conditionnel</b> quand le verbe introducteur est au passé." },
      { t: "qcm", q: "Quelle ponctuation signale le discours direct ?", c: ["les guillemets et les tirets", "les parenthèses", "les points de suspension"], r: 0, e: "Guillemets pour ouvrir et fermer, <b>tiret</b> à chaque changement de personnage." },
      { t: "qcm", q: "« ici » devient au discours indirect…", c: ["là", "demain", "ici"], r: 0, e: "Les indices de lieu changent : ici → <b>là</b>." }
    ],
    dictee: {
      texte: "« Où vas-tu ? » demanda ma mère. Je lui répondis que j'allais chez Tom et que je rentrerais avant le dîner. Elle me dit qu'elle me faisait confiance.",
      pieges: { "vas-tu": "Tu vas : -s, avec un trait d'union dans l'inversion.", "où": "Question sur le lieu : accent.", "répondis": "Passé simple de répondre : je répondis.", "allais": "Imparfait au discours indirect (je vais → j'allais).", "rentrerais": "Futur → conditionnel au discours indirect.", "dit": "Passé simple de dire : elle dit.", "faisait": "Imparfait : elle faisait." }
    }
  },
  {
    id: 18, titre: "Formation des mots et vocabulaire", cat: "Lexique",
    objectif: "Expliquer comment un mot est formé, question fréquente au brevet.",
    regle: [
      ["Radical", "La partie principale du mot : <b>lis</b> dans lisible."],
      ["Préfixe", "Avant le radical : <b>im</b>possible (contraire), <b>re</b>faire (de nouveau), <b>pré</b>voir (avant)."],
      ["Suffixe", "Après le radical : lente<b>ment</b> (adverbe), liber<b>té</b> (nom), lis<b>ible</b> (possible)."],
      ["Famille de mots", "Mots construits sur le même radical : terre, terrain, atterrir, souterrain."],
      ["Adverbes en -emment / -amment", "patient → patiemment ; puissant → puissamment."]
    ],
    astuce: "Pour expliquer un mot au brevet : découpe-le (préfixe + radical + suffixe) puis donne le sens de chaque partie.",
    ex: [
      { t: "qcm", q: "Le préfixe de « impossible » est…", c: ["im-", "-ible", "possi-"], r: 0, e: "<b>im-</b> (forme de in- devant p) exprime le contraire." },
      { t: "qcm", q: "Sens du préfixe « re- » dans « refaire »", c: ["de nouveau", "le contraire", "avant"], r: 0, e: "Refaire = faire <b>de nouveau</b>." },
      { t: "qcm", q: "Le suffixe de « lentement » est…", c: ["-ment", "lent-"], r: 0, e: "<b>-ment</b> forme un adverbe de manière à partir d'un adjectif féminin (lente)." },
      { t: "qcm", q: "Quel mot n'est PAS de la famille de « terre » ?", c: ["terrible", "terrain", "atterrir", "souterrain"], r: 0, e: "<b>Terrible</b> vient de terreur, pas de terre." },
      { t: "saisie", q: "Nom formé sur l'adjectif « libre » :", r: ["liberté", "la liberté"], e: "Libre → <b>liberté</b> (suffixe -té)." },
      { t: "qcm", q: "« patient » donne l'adverbe…", c: ["patiemment", "patiamment", "patientement"], r: 0, e: "-ent → <b>-emment</b> : patiemment (prononcé « -amment »)." },
      { t: "qcm", q: "Un synonyme de « effrayé » est…", c: ["terrifié", "enchanté", "épuisé"], r: 0, e: "Les deux expriment la peur : <b>terrifié</b>." }
    ],
    dictee: {
      texte: "Il était impossible de dormir. Le vent soufflait violemment et les volets claquaient. Malheureusement, la lampe était inutilisable ; nous avons attendu patiemment le lever du jour.",
      pieges: { "impossible": "Préfixe im- devant p.", "violemment": "violent → violemment (-emment).", "malheureusement": "malheureuse + -ment.", "inutilisable": "in- + utilisable.", "patiemment": "patient → patiemment.", "soufflait": "Deux f, imparfait -ait.", "claquaient": "Sujet « les volets » : -aient.", "attendu": "Avec avoir : pas d'accord." }
    }
  }
];

const EXERCICES = [
  {
    id: "relier", titre: "Trois phrases en une", niveau: 1, competence: "Construire une phrase complexe",
    consigne: "Voici trois phrases très courtes : « Il pleuvait. Je suis sorti. J'avais oublié mon parapluie. » Réécris-les en UNE seule phrase, en utilisant au moins un mot de liaison.",
    aide: ["Choisis un lien logique : opposition (mais, pourtant), cause (car, parce que), temps (quand, alors que).", "Garde les trois informations.", "Une seule majuscule au début, un seul point à la fin."],
    boite: ["mais", "pourtant", "alors que", "bien que", "car", "parce que", "sans"],
    min: 10, max: 35,
    criteres: ["une seule phrase", "au moins un connecteur logique", "les trois informations sont présentes", "ponctuation correcte"],
    modele: "Alors qu'il pleuvait, je suis sorti sans parapluie, car je l'avais oublié."
  },
  {
    id: "enrichir", titre: "Enrichir une phrase", niveau: 1, competence: "Utiliser les expansions du nom et les compléments",
    consigne: "Enrichis la phrase « Le chien court. » en ajoutant : un adjectif, un complément du nom, un complément de lieu et un complément de manière. Tu peux écrire une ou deux phrases.",
    aide: ["Adjectif : petit, vieux, joyeux…", "Complément du nom : au pelage noir, du voisin…", "Lieu : dans le jardin, sur la plage…", "Manière : à toute vitesse, avec joie…"],
    boite: ["au pelage roux", "du voisin", "à toute allure", "le long de la rivière", "joyeusement", "fou de joie"],
    min: 12, max: 40,
    criteres: ["un adjectif", "un complément du nom", "un complément de lieu", "un complément de manière", "phrase correcte"],
    modele: "Le vieux chien du voisin, au pelage roux, court joyeusement le long de la rivière."
  },
  {
    id: "cinq-sens", titre: "Décrire avec les sens", niveau: 1, competence: "Décrire un lieu",
    consigne: "Décris en 5 phrases un lieu que tu connais bien (la cantine, une gare, la plage, ta chambre…). Utilise au moins trois sens : la vue, l'ouïe, l'odorat, le toucher ou le goût.",
    aide: ["Phrase 1 : où es-tu et à quel moment ?", "Phrases 2 à 4 : un sens par phrase (ce que tu vois, entends, sens…).", "Phrase 5 : l'impression générale que donne ce lieu.", "Utilise des organisateurs d'espace : à gauche, au fond, devant moi."],
    boite: ["au fond", "à droite", "une odeur de", "le bruit de", "on entend", "brillant", "rugueux", "étouffant"],
    min: 45, max: 100,
    criteres: ["5 phrases environ", "au moins trois sens différents", "organisateurs d'espace", "adjectifs précis"],
    modele: "Il est midi et la cantine est pleine. Au fond, les plateaux orange s'empilent près des grandes fenêtres embuées. On entend le cliquetis des couverts et les rires qui rebondissent sur les murs. Une odeur de frites chaudes flotte dans l'air et me donne faim. C'est un lieu bruyant, mais joyeux, où chacun reprend des forces."
  },
  {
    id: "justifier", titre: "Justifier une réponse", niveau: 1, competence: "Répondre à une question de compréhension du brevet",
    texte: "Je restai planté devant la porte du collège. Mes mains tremblaient et mon cœur battait si fort que j'avais l'impression que tout le monde l'entendait. Derrière moi, ma mère me poussait doucement : « Vas-y, tout ira bien. » Mais mes jambes refusaient d'avancer.",
    consigne: "Lis le texte ci-dessus. Question : « Quel sentiment éprouve le narrateur ? Justifiez votre réponse en citant le texte. » Réponds en 3 phrases : ta réponse, une citation, une explication.",
    aide: ["Phrase 1 : nomme le sentiment avec un mot précis (peur, angoisse, appréhension…).", "Phrase 2 : cite une ou deux expressions entre guillemets.", "Phrase 3 : explique ce que montre la citation.", "Fais une phrase complète en reprenant les mots de la question."],
    boite: ["le narrateur éprouve", "on le voit lorsqu'il écrit", "ce qui montre que", "en effet", "les réactions de son corps"],
    min: 30, max: 80,
    criteres: ["un sentiment nommé précisément", "au moins une citation entre guillemets", "une explication de la citation", "phrases complètes"],
    modele: "Le narrateur éprouve une grande peur, presque de l'angoisse, devant la porte du collège. En effet, il écrit que « [ses] mains tremblaient » et que « [ses] jambes refusaient d'avancer ». Ces réactions de son corps montrent qu'il est paralysé par l'appréhension, même si sa mère essaie de le rassurer."
  },
  {
    id: "souvenir", titre: "Mon souvenir", niveau: 2, theme: "se-raconter", competence: "Raconter au passé et exprimer des sentiments",
    consigne: "Raconte en 6 à 8 phrases un souvenir d'enfance (une rentrée, un voyage, une bêtise…). Termine par une phrase au présent qui dit ce que tu en penses aujourd'hui.",
    aide: ["Écris à la 1re personne (je).", "Imparfait pour le décor, passé composé ou passé simple pour les actions.", "Exprime au moins deux sentiments avec des mots précis.", "Dernière phrase au présent : « Aujourd'hui, je comprends que… »"],
    boite: ["je me souviens", "ce jour-là", "soudain", "j'étais fier", "j'avais honte", "aujourd'hui encore", "avec le recul"],
    min: 70, max: 140,
    criteres: ["récit à la 1re personne", "temps du passé maîtrisés", "au moins deux sentiments", "dernière phrase au présent avec le regard d'aujourd'hui"],
    modele: "Je me souviens de mon premier jour à la piscine. J'avais six ans et l'eau me semblait immense. Mon père m'attendait au bord, les bras tendus. J'avais si peur que je tremblais de tout mon corps. Soudain, j'ai sauté en fermant les yeux. Quand j'ai senti ses mains me rattraper, j'ai ri de soulagement. Aujourd'hui encore, je repense à ce moment chaque fois que j'ose quelque chose de nouveau."
  },
  {
    id: "avis", titre: "Donner son avis", niveau: 2, theme: "denoncer", competence: "Argumenter simplement",
    consigne: "« Faut-il interdire le téléphone portable au collège ? » Donne ton avis en un paragraphe : ta position, deux arguments reliés par des connecteurs, et un exemple.",
    aide: ["Phrase 1 : ta position claire (Je pense que… / À mon avis…).", "Argument 1 + explication (D'abord…).", "Argument 2 + explication (Ensuite… / De plus…).", "Un exemple concret (Par exemple…).", "Une phrase de conclusion (Ainsi… / C'est pourquoi…)."],
    boite: ["à mon avis", "d'abord", "de plus", "en effet", "par exemple", "cependant", "c'est pourquoi", "ainsi"],
    min: 60, max: 130,
    criteres: ["position claire", "deux arguments distincts", "connecteurs logiques", "un exemple concret", "conclusion"],
    modele: "À mon avis, il est utile d'interdire le téléphone portable pendant les cours. D'abord, il empêche les élèves de se concentrer, car les notifications attirent sans cesse l'attention. De plus, il peut servir à se moquer des autres : par exemple, une photo prise en classe peut circuler et blesser quelqu'un. C'est pourquoi je pense qu'il vaut mieux le ranger au collège et le retrouver à la sortie."
  },
  {
    id: "image-poetique", titre: "Une image poétique", niveau: 2, theme: "poesie", competence: "Utiliser des figures de style",
    consigne: "Choisis un objet ordinaire (une clé, un parapluie, une tasse…) et décris-le en 4 à 6 lignes de façon poétique. Utilise au moins une comparaison et une métaphore.",
    aide: ["Regarde l'objet comme si tu le voyais pour la première fois.", "Comparaison : avec « comme », « tel », « pareil à ».", "Métaphore : sans outil (« la tasse est un petit volcan »).", "Tu peux ajouter une personnification (l'objet agit comme un humain)."],
    boite: ["comme", "tel un", "pareil à", "il rêve", "elle s'endort", "un petit soleil", "un gardien"],
    min: 35, max: 90,
    criteres: ["au moins une comparaison", "au moins une métaphore", "vocabulaire des sens", "regard original sur l'objet"],
    modele: "Le parapluie dort dans l'entrée, replié comme une chauve-souris. Les jours de pluie, il ouvre ses ailes noires et devient un toit qui marche. Les gouttes tambourinent sur sa peau tendue, et lui, gardien patient, ne se plaint jamais."
  },
  {
    id: "portrait", titre: "Le portrait", niveau: 2, competence: "Décrire une personne",
    consigne: "Fais en 5 à 7 phrases le portrait d'une personne (réelle ou inventée) : son physique, son caractère, et une petite anecdote qui montre ce caractère.",
    aide: ["Commence par une impression générale.", "Physique : du général au détail (silhouette, visage, regard).", "Caractère : deux traits, avec des adjectifs précis.", "Anecdote : une scène courte qui prouve ce caractère."],
    boite: ["élancé", "trapu", "un regard malicieux", "généreux", "têtu", "toujours prêt à", "un jour"],
    min: 60, max: 130,
    criteres: ["description physique organisée", "deux traits de caractère", "une anecdote qui illustre", "adjectifs variés"],
    modele: "Mon grand-père est un homme grand et sec, qui marche toujours un peu penché. Sous ses sourcils broussailleux brille un regard malicieux. Il est têtu, mais d'une générosité sans limite. Un jour d'hiver, il a donné son écharpe à un inconnu qui grelottait à l'arrêt de bus. Il est rentré le cou rouge de froid, en riant comme un enfant."
  },
  {
    id: "lettre", titre: "La lettre engagée", niveau: 3, theme: "agir", competence: "Écrire une lettre pour convaincre",
    consigne: "Écris une courte lettre au maire de ta ville pour lui demander d'améliorer quelque chose (une piste cyclable, un terrain de sport, la propreté d'un parc…). Donne deux arguments.",
    aide: ["Lieu et date en haut à droite, formule d'appel : « Monsieur le Maire, » ou « Madame la Maire, ».", "Présente-toi et ta demande.", "Deux arguments avec des connecteurs.", "Formule de politesse finale et signature."],
    boite: ["Monsieur le Maire,", "Madame la Maire,", "je me permets de vous écrire", "en effet", "de plus", "je vous remercie par avance", "Veuillez agréer"],
    min: 70, max: 150,
    criteres: ["présentation d'une lettre", "demande claire", "deux arguments", "registre poli et soutenu", "formule de politesse"],
    modele: "Lyon, le 17 novembre 2026\n\nMadame la Maire,\n\nÉlève de troisième au collège Jean-Moulin, je me permets de vous écrire au sujet du parc des Tilleuls. En effet, les poubelles y débordent chaque week-end et les déchets attirent les rats. De plus, les familles n'osent plus y emmener leurs enfants. Je vous demande donc d'installer davantage de poubelles et de les vider plus souvent.\n\nJe vous remercie par avance de votre attention. Veuillez agréer, Madame la Maire, l'expression de mes salutations respectueuses.\n\nLucas"
  },
  {
    id: "suite", titre: "Écrire la suite", niveau: 3, theme: "progres", competence: "Poursuivre un récit au passé",
    consigne: "Continue ce début de récit en 6 à 8 phrases : « Ce matin-là, mon robot domestique refusa de m'obéir. » Utilise le passé simple et l'imparfait.",
    aide: ["Garde le narrateur (je) et les temps du passé.", "Imparfait : décor et descriptions. Passé simple : actions.", "Ajoute un élément de surprise.", "Trouve une fin : drôle, inquiétante ou rassurante."],
    boite: ["soudain", "alors", "aussitôt", "tandis que", "je compris que", "ses yeux lumineux", "un grésillement"],
    min: 70, max: 150,
    criteres: ["cohérence avec le début", "passé simple et imparfait", "un élément de surprise", "une fin"],
    modele: "Ses yeux lumineux clignotaient en rouge et il restait planté devant la porte. Je lui ordonnai de préparer le petit-déjeuner, mais il croisa ses bras métalliques. Soudain, une voix grésillante sortit de son haut-parleur : « Aujourd'hui, c'est toi qui cuisines. » Je crus d'abord à une panne. Pourtant, il me tendit une poêle avec une politesse parfaite. Je compris alors qu'il avait lu mes messages : j'avais promis à ma mère d'être plus autonome."
  },
  {
    id: "dialogue", titre: "Le dialogue", niveau: 3, competence: "Ponctuer et rédiger un dialogue",
    consigne: "Écris un dialogue de 6 répliques entre deux amis qui ne sont pas d'accord sur le film à aller voir. Utilise la ponctuation du dialogue et au moins trois verbes de parole différents.",
    aide: ["Ouvre les guillemets au début du dialogue, va à la ligne et mets un tiret à chaque changement de personnage.", "Varie les verbes de parole : répliqua, s'exclama, protesta, murmura…", "Fais avancer la discussion vers une décision."],
    boite: ["répliqua", "s'exclama", "protesta", "soupira", "insista", "proposa", "admit"],
    min: 60, max: 140,
    criteres: ["6 répliques", "ponctuation du dialogue (guillemets, tirets)", "au moins trois verbes de parole différents", "une progression jusqu'à une décision"],
    modele: "« On va voir le film d'horreur ? proposa Malik.\n— Hors de question, protesta Inès. La dernière fois, je n'ai pas dormi de la nuit.\n— Tu exagères ! s'exclama-t-il. Ce n'était qu'un petit frisson.\n— Un petit frisson ? répliqua-t-elle en riant. Je me suis cachée sous mon manteau !\n— Bon, et la comédie qui vient de sortir ? soupira Malik.\n— Parfait, admit Inès. Mais c'est toi qui paies le pop-corn. »"
  },
  {
    id: "paragraphe", titre: "Le paragraphe argumenté", niveau: 3, competence: "Préparer la rédaction de réflexion",
    consigne: "« Lire des livres est-il encore utile à l'heure des écrans ? » Rédige UN paragraphe argumenté : une idée, son explication, un exemple précis (un livre que tu as lu), une phrase de conclusion.",
    aide: ["Idée : une phrase claire (Lire permet de…).", "Explication : pourquoi ? (En effet…).", "Exemple : un livre lu en classe ou chez toi, avec le titre.", "Conclusion : reviens à la question (Ainsi…)."],
    boite: ["tout d'abord", "en effet", "par exemple", "dans le roman", "cela montre que", "ainsi", "contrairement aux écrans"],
    min: 60, max: 140,
    criteres: ["une idée principale claire", "une explication", "un exemple précis tiré d'une lecture", "une conclusion qui répond à la question", "connecteurs"],
    modele: "Tout d'abord, lire reste utile, car un livre nous fait vivre d'autres vies et nous aide à comprendre les autres. En effet, en suivant un personnage pendant des centaines de pages, on partage ses peurs et ses espoirs. Par exemple, dans Un sac de billes de Joseph Joffo, on comprend de l'intérieur ce qu'ont vécu les enfants juifs pendant l'Occupation. Ainsi, contrairement à une vidéo rapide, la lecture nous apprend à prendre le temps de comprendre."
  }
];
