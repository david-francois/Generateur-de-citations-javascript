const citations = [
    {
        "Id": "1", 
        "Citation": "Laisse pas traîner ton this.",     
        "Auteur": "Joey Starr"
    },
    {
        "Id": "2", 
        "Citation": "Un homme azerty en vaut deux",     
        "Auteur": "Franck Leboeuf"
    },
    {
        "Id": "3", 
        "Citation": "Ce div est dragable",     
        "Auteur": "Jean-Claude Dusse"
    },
    {
        "Id": "4", 
        "Citation": "C'est la fetch au village",     
        "Auteur": "Framboisier"
    },
    {
        "Id": "5", 
        "Citation": "L'Array est un objet fondamental du développement web !",     
        "Auteur": "Rocco Siffredi"
    },
    {
        "Id": "6", 
        "Citation": "L'API vient en mangeant",     
        "Auteur": "Cyril Lignac"
    },
    {
        "Id": "7", 
        "Citation": "Le regex c'est toute ma vie",     
        "Auteur": "Bob Marley"
    },
    {
        "Id": "8", 
        "Citation": "Pour de l'overclocking, je partirai plutôt sur une Gigabyte",     
        "Auteur": "Clara Morgane"
    },
    {
        "Id": "9", 
        "Citation": "Le flash c'est de l'Adobe",     
        "Auteur": "Batman"
    },
    {
        "Id": "10", 
        "Citation": "Avis de template",     
        "Auteur": "Louis Bodin"
    },
    {
        "Id": "11", 
        "Citation": "Madrid, la capitale des span",     
        "Auteur": "Rafael Nadal"
    },
    {
        "Id": "12", 
        "Citation": "br... Vivement la font des neiges !",     
        "Auteur": "Captain Igloo"
    },
    {
        "Id": "13", 
        "Citation": "Mon this. ma bataille",     
        "Auteur": "Daniel Balavoine"
    },
    {
        "Id": "14", 
        "Citation": "On ne prête qu'aux forEach",     
        "Auteur": "Oncle Picsou"
    },
    {
        "Id": "15", 
        "Citation": "Je vais mettre la cafetière en root",     
        "Auteur": "George Clooney"
    },
    {
        "Id": "16", 
        "Citation": "Ma souris sans fil",     
        "Auteur": "DSK"
    },
    {
        "Id": "17", 
        "Citation": "Gloire à SATA",     
        "Auteur": "Ozzy Osbourne"
    },
    {
        "Id": "18", 
        "Citation": "Vaya con Bios",     
        "Auteur": "Shakira"
    },
    {
        "Id": "19", 
        "Citation": "L'API ne fait pas le moine",     
        "Auteur": "Christina Cordula"
    },
    {
        "Id": "20", 
        "Citation": "Ca LAN pour moi !",     
        "Auteur": "Plastic Bertrand"
    },
    {
        "Id": "21", 
        "Citation": "I had a stream",     
        "Auteur": "Martin Luther Ping"
    },
    {
        "Id": "22", 
        "Citation": "Code save the Queen",     
        "Auteur": "Freddie Mercury"
    },
    {
        "Id": "23", 
        "Citation": "Une bonne br ça désaltére",     
        "Auteur": "David Hasselhoff"
    },
    {
        "Id": "24", 
        "Citation": "En dév local, je suis sur le port 3000",     
        "Auteur": "Angèle"
    }
  ];
var aleatoire = null; // on initialise une variable aléatoire
var tweet = "";
var hashtag = "citations de dev." // hashtag qu'on concatene dans le window.open de twitter
var site = "(davidfrancois.fr)"

$('document').ready(function(){ // au chargement du document, execute ce code   

    aleatoire = Math.floor(Math.random() * citations.length); // génére un nombre arrondi aléatoire entre le premier et le dernier indice du tableau

    $('.affichageCitation').html(citations[aleatoire].Citation); // affiche une citation aléatoire dans le paragraphe

    $('.affichageAuteur').html(citations[aleatoire].Auteur);

    $('#generer').click(function(){ // quand on click sur btn generer on lance cette fonction
        aleatoire = Math.floor(Math.random() * citations.length); // génére un nombre arrondi aléatoire entre le premier et le dernier indice du tableau
        $('.affichageCitation').html(citations[aleatoire].Citation); // affiche une citation aléatoire dans le paragraphe
        $('.affichageAuteur').html(citations[aleatoire].Auteur);
    });

    $('#twitter').click(function(){ // quand on click sur btn twitter on lance cette fonction
        tweet = twitter(citations[aleatoire].Citation, 140);  // on appelle la fonction twitter à laquelle on passe les parametres - la longueur des var auteur et hashtag - 5 (les espaces) et on passe la variable tweet dans le window.open
        window.open('https://twitter.com/intent/tweet?text=' + tweet + " - " + citations[aleatoire].Auteur +'&hashtags=' + hashtag + " " + site, 'twitter', 'height=300, width=550, scrollbars=0, menubar=0');
    });

    // permet de ne pas depasser le nombre max de caracteres d'un tweet

    function twitter(citation, caractere_max){  
        if(caractere_max <= 3) return citation.slice(0, nucaractere_maxm).concat('...');
        else if(caractere_max < citation.length) return citation.slice(0, caractere_max-3).concat('...');
        return citation;
    }

    // Animations au chargement

    anime({
        targets: '.affichageCitation',
        scale: 0.9,
        direction: 'alternate',
        easing: 'linear',
        duration: 200
    });
    anime({
        targets: '.affichageAuteur',
        opacity: [0,1],
        translateX: ['-50%',0], 
        easing: 'linear',           
        duration: 150
    });

    // Animations au click

    $('#generer').click(function(){
        anime({
            targets: '#generer',
            scale: 0.9,
            direction: 'alternate',
            easing: 'linear',
            duration: 200
        });
        anime({
            targets: '.affichageCitation',
            scale: 0.9,
            direction: 'alternate',
            easing: 'linear',
            duration: 200
        });
        anime({
            targets: '.affichageAuteur',
            opacity: [0,1],
            translateX: ['-50%',0],       
            easing: 'linear',     
            duration: 150
        });
    });

    $('#twitter').click(function(){
        anime({
            targets: '#twitter',
            scale: 0.9,
            direction: 'alternate',
            easing: 'linear',
            duration: 200
        });        
    });
});

