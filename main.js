const context = {
    title: 'Kommt mit und endeckt..',
    body: 'die vielen tollen bunten Tiere auf unserer Erde. In den Meeren, an Land und in der Luft. Schaut euch hier ein paar aufregende und spannende Tierarten an. Lernt, wo sie leben und was sie so machen. Na los, worauf wartet ihr?',
    animals: [{
            image: 'https://img.fotocommunity.com/der-dreifarbenglanzstar-68ed7c4b-796a-406a-9d1d-1ddf5f5c5a39.jpg?height=1080',
            name: 'Dreifarben-Glanzstar',
            description: 'Er hält sich meist am Boden auf, auf dem er nach Insekten, Weichtieren, Früchten und Körnern sucht. Seine Lebensräume sind Savanne, Busch, Ackerland und Stadtränder.',
            lives: 'Äthiopien, Somalia, Uganda, Kenia und Tansania'
        },
        {
            image: 'https://www.terrarium-wissen.de/wp-content/uploads/2014/02/pfeilgiftfroesche-faerberfrosch.jpg',
            name: 'Pfeilgiftfrosch',
            description: 'Ihre Farbe soll immer dieselbe Nachricht an ihre Feinde überbringen: „Ich bin giftig!“. Und das sind sie auch!',
            lives: 'Südamerikanischen Regenwäldern'
        },
        {
            image: 'https://media.istockphoto.com/photos/dragonet-mandarinfish-in-banda-indonesia-underwater-photo-picture-id526289449?k=6&m=526289449&s=612x612&w=0&h=qopEUZvJlUG6UiMyv6Pjz4ttd_slF85bNQPhLQLev2Y=',
            name: 'Mandarinfisch',
            description: 'Seine Haut ist von einer Schleimschicht umgeben, die ihn vor Parasiten und Krankheiten schützt.',
            lives: 'Indopazifik (Philippinen, Sri Lanka, Australien, Afrika)'
        },
        {
            image: 'https://webenger.ch/wp-content/uploads/2015/01/Pfauenspinne-01-800x400.jpg',
            name: 'Pfauenspinne',
            description: 'Im Frühjahr, in der Paarungszeit wirbt das Männchen mit einem Balztanz um das Weibchen. Dabei richtet es eine Hautfalte, die sonst nicht zu sehen ist nach oben und tanzt vor dem Weibchen hin und her. Aber Vorsicht: wenn dem Weibchen der Tanz nicht gefällt, frisst sie ihren Verehrer einfach auf.',
            lives: 'Australien'
        },
        {
            image: 'https://i.pinimg.com/originals/be/6a/04/be6a04d58ea06d33d1da140a29c8c483.jpg',
            name: 'Fangschreckenkrebs',
            description: 'Mit seinem blitzschnellen Schlag kann diese Krebsart den Panzer seines Gegenübers in Windeseile zertrümmern – die Geschwindigkeit entspricht der einer Kanonenkugel. Dabei sind sie nicht mal einen halben Meter gross! Während Menschen drei Arten an Fotorezeptoren haben, besitzen Fangschneckenkrebse nämlich bis zu 16 und könnten damit auch Farben wie Infrarot sehen.',
            lives: 'Tropischen Meeren'
        },
        {
            image: 'https://www.meerwasser-lexikon.de/img2/44476_nXT86fH1C1.jpg',
            name: 'Halloweenkrabbe ',
            description: 'Diese Krabbe ist nachtaktiv, gräbt bis zu 1,50 m tiefe Höhlen. Als erwachsenes Exemplar lebt die Krabbe ausschließlich an Land, zur Vermehrung muss sie an den Ozean zurück, um ihre Larven ins Wasser zu entlassen.',
            lives: 'Costa Rica, Florida, Mexiko (Ostpazifik), Nicaragua, Panama'
        },
        {
            image: 'https://i.pinimg.com/474x/6b/af/11/6baf11ed9132a9591ba689f795aadc2c.jpg',
            name: 'Blaue Holzbiene',
            description: 'Die Holzbiene brummt laut, ist aber sehr friedfertig.Bei der Futtersuche wendet die Holzbiene einen speziellen Kniff an: Wenn sie trotz ihrer langen Zunge nicht an den Nektar einer besonders tiefen Blüte gelangt, nagt sie einfach ein Loch in die Blütenwand. Dabei kann es sein, dass sie nicht unbedingt mit den Pollen in Berührung kommt – sie nimmt sich also den Nektar, ohne die übliche Gegenleistung zu erbringen, nämlich die Bestäubung der Blüte.',
            lives: 'Deutschland, teilweise bis Südschweden'
        },
        {
            image: 'https://www.performance-vision.com/Saddleback/01-IMG_3686JPG-export-800w.jpg',
            name: 'Saddleback Caterpillar',
            description: 'Nur kucken- nicht anfassen! Denn wenn Du mit den Haaren in Kontakt kommst, verursachen sie einen sehr schmerzhaften Ausschlag, Brennen, Juckreiz, Schwellung und Blasenbildung sowie Übelkeit. Das Gift kann sich ausbreiten, wenn die Haare nicht schnell von der Haut entfernt werden. Der Kokon einer Sattelraupe kann auch irritierende Haare haben, und Du solltest sich immer bewusst sein, dass selbst ein Haar der Larve einen schmerzhaften Ausschlag verursachen kann.',
            ',
            lives: 'Nordamerika, Mexico'
        }
    ]
};

const templateElement = document.getElementById('template');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('info').innerHTML = compiledHtml;