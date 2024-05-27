const ENGLISH = {
    "slogan": "From sound to image, each creation has the magic of art",
    "title" : "Scriptus | Under Construction",
    "description" : "Since its foundation in 2013, Scriptus has established itself as a solid brand in the audiovisual scene, always uniting technical excellence with a passion for art.Please wait, we're working hard to create something special for you. Check back soon to see what we're building!"
}

if(!navigator.language.includes("pt")) {
    u('*[data-translation-id]').each((el) => {
        switch (u(el).data('translation-type')) {
            case 'text':
                u(el).text(ENGLISH[u(el).data('translation-id')])
                break;
            case 'attr':
                u(el).attr(u(el).data('translation-attr'), ENGLISH[u(el).data('translation-id')])
            default:
                break;
        }
    })
}