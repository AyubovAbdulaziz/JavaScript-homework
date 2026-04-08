let a = prompt("U yashil rangda u sabzavod")
let b = prompt("Uni qanotlari bor uchadi")
let d = prompt("U osmonda harakatlanadi uni qanotlari bor u odam toshiydi u transport")
let e = prompt("U Partugaliyada tugilgan u mashhur uyinchi u oldin Real Madridda ham uynagan hozirda u 41 yoshda u kim?")
let f = prompt("U Braziliyada tugilgan u mashhur uyinchi u oldin Barselonada da ham uynagan hozirda u 34 yoshda u kim?")

switch (a) {
    case "pamidor":
        console.log("Siz Xato javob kiritdingiz.");
        break
    case "bodring":
        console.log("Siz to'g'ri javob kiritdingiz, javob bodring edi");
        break
    default:
        console.log("Siz mavjud bulmagan qiymat kiritdingiz.")
}

switch (b) {
    case "buri":
        console.log("Siz Xato javob kiritdingiz.");
        break
    case "qush":
        console.log("Siz to'g'ri javob kiritdingiz, javob qush edi");
        break
    default:
        console.log("Siz mavjud bulmagan qiymat kiritdingiz.")
}

switch (d) {
    case "veltarot":
        console.log("Siz Xato javob kiritdingiz.");
        break
    case "samalyot":
        console.log("Siz to'g'ri javob kiritdingiz, javob samalyot edi");
        break
    default:
        console.log("Siz mavjud bulmagan qiymat kiritdingiz.")
}


switch (e) {
    case "Leo Messi":
        console.log("Siz Xato javob kiritdingiz.");
        break
    case "Cristiano Ronaldo":
        console.log("Siz to'g'ri javob kiritdingiz, javob Cristiano Ronaldo edi");
        break
    default:
        console.log("Siz mavjud bulmagan qiymat kiritdingiz.")
}

switch (f) {
    case "Kilian Mubappe":
        console.log("Siz Xato javob kiritdingiz.");
        break
    case "Neymar JR":
        console.log("Siz to'g'ri javob kiritdingiz, javob Neymar JR edi"); bodring

        break
    default:
        console.log("Siz mavjud bulmagan qiymat kiritdingiz.")
}

let maktab_ball = 8;
maktab_ball < 0 || maktab_ball > 10
    ? console.log("Xato qiymat kiritgansiz")
    : maktab_ball >= 8
        ? console.log("Yaxshi ball")
        : maktab_ball >= 5
            ? console.log("Yaxshiroq uqi ball past")
            : maktab_ball >= 2
                ? console.log("Yomon uqiyabsan uqi ball past")
                : console.log("Sen yaxshi uqimasang kelajakda qiynalasan")


let sinf = 7
sinf < 1 || sinf > 11
    ? console.log("Xato javob berdingiz")
    : sinf >= 1 || sinf >= 2 || sinf >= 3 || sinf >= 4
        ? console.log("Siz boshlangich sinf o'quvchisisiz")
        : sinf > 5 || sinf >= 6 || sinf >= 7 || sinf >= 8 || sinf >= 9 || sinf >= 10 || sinf >= 11
            ? console.log("Siz katta sinf o'quvchisisiz")
            : console.log("Siz katta sinf o'quvchisisiz")


let yosh = 13
yosh <= 2 && yosh >= 6
    ? console.log("U Bog'chada uqiydi")
    : yosh <= 7 && yosh >= 17
        ? console.log("U maktabda uqiydi")
        : yosh <= 18 && yosh > 30
            ? console.log("U Universitatda uqiydi")
            : yosh <= 31 && yosh >= 59
                ? console.log("U ishda ishlaydi")
                : yosh <= 60
                    ? console.log("U nafaqa oladi")
                    : console.log("U nafaqa oladi")
