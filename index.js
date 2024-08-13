let btn = document.querySelector('.btn');

document.querySelector('.matrixBox').innerHTML += ``;
let znak = document.querySelectorAll('.znak');
let matrix = document.querySelector('.matrixBox');
let attention = document.querySelector('.attention');
let attention2 = document.querySelector('.attention2');
var input = document.querySelectorAll('#date')[0];
var dateInputMask = function dateInputMask(elm) {
  elm.addEventListener('keyup', function (e) {
    if (e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }

    var len = elm.value.length;

    if (len !== 1 || len !== 3) {
      if (e.keyCode == 47) {
        e.preventDefault();
      }
    }
    if (len === 2) {
      if (e.keyCode !== 8 && e.keyCode !== 46) {
        elm.value = elm.value + '.';
      }
    }

    if (len === 5) {
      if (e.keyCode !== 8 && e.keyCode !== 46) {
        elm.value = elm.value + '.';
      }
    }
  });
};

dateInputMask(input);
function lessThenTwentyTwo(number) {
  var sum = 0;
  if (number > 22) {
    while (number > 0) {
      sum += number % 10;
      // Получаем последнюю цифру числа и добавляем её к сумме
      number = Math.floor(number / 10);
      // Удаляем последнюю цифру из числа
    }

    return sum;
  } else {
    return number;
  }
}
let block = document.querySelector('#date');
btn.style.width = `${block.clientWidth - 6}px`;
btn.addEventListener('click', (e) => {
  //   if ($(window).width() <= 390) {
  //     $('#matrizca').height('400px');
  //     $('html, body').animate(
  //       {
  //         scrollTop: $(window).height() + $('#matrizca').height() - 270,
  //       },
  //       'slow'
  //     );
  //   }
  // $('html, body').animate(
  //   {
  //     scrollTop: $(window).height() + 105,
  //   },
  //   'slow'
  // );
  let name = document.querySelector('#name').value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let date = document.querySelector('#date').value;

  console.log(name);
  console.log(gender);
  console.log(date);

  if (name == '' || gender == '' || date == '') {
    attention.style.display = 'flex';
  } else {
    attention.style.display = 'none';
    let index = date.indexOf('.');
    let mounth = date.substr(index + 1, 2);
    let year = date.substr(index + 4, date.length);
    let day = date.substr(0, index);
    if (day > 31 || mounth > 12) {
      attention2.style.display = 'flex';
    } else {
      attention2.style.display = 'none';

      var now = new Date();
      //Текущя дата
      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      //Текущя дата без времени
      var dob = new Date(+year, +mounth - 1, +day);
      //Дата рождения
      var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
      //ДР в текущем году
      var age;
      //Возраст
      //Возраст = текущий год - год рождения
      age = today.getFullYear() - dob.getFullYear();
      //Если ДР в этом году ещё предстоит, то вычитаем из age один год
      if (today < dobnow) {
        age = age - 1;
      }

      //   document.querySelector('.ageJS').innerHTML = `${age}`;
      //   document.querySelector('.name').innerHTML = `${name}`;
      //   document.querySelector('.date_birthJS').innerHTML = `${date}`;
      let A = 0;
      let B = +mounth;
      let C = 0;
      let D = 0;
      let E = 0;

      let sumYear = 0;
      let yearArr = [...year];
      if (day > 22) {
        const dayArr = [...day];
        dayArr.forEach((e) => {
          A = A + +e;
        });
      } else {
        A = +day;
      }
      yearArr.forEach((e) => {
        sumYear = sumYear + +e;
      });

      if (sumYear > 22) {
        let a = Math.floor(sumYear / 10);
        let b = sumYear % 10;

        C = a + b;
      } else {
        C = sumYear;
      }

      D = A + B + C;
      if (D > 22) {
        let a = Math.floor(D / 10);
        let b = D % 10;
        D = a + b;
      }

      E = A + B + C + D;
      if (E > 22) {
        let a = Math.floor(E / 10);
        let b = E % 10;
        E = a + b;
      }

      let F = A + B;
      F = lessThenTwentyTwo(F);
      let G = B + C;
      G = lessThenTwentyTwo(G);
      let H = A + D;
      H = lessThenTwentyTwo(H);
      let I = D + C;
      I = lessThenTwentyTwo(I);
      let J = D + E;
      J = lessThenTwentyTwo(J);
      let DJ = D + J;
      DJ = lessThenTwentyTwo(DJ);
      let K = E + C;
      K = lessThenTwentyTwo(K);
      let KC = K + C;
      KC = lessThenTwentyTwo(KC);
      let L = J + K;
      L = lessThenTwentyTwo(L);
      let M = J + L;
      M = lessThenTwentyTwo(M);
      let N = L + K;
      N = lessThenTwentyTwo(N);
      let A2 = A + E;
      A2 = lessThenTwentyTwo(A2);
      let A1 = A + A2;
      A1 = lessThenTwentyTwo(A1);
      let A3 = E + A2;
      A3 = lessThenTwentyTwo(A3);
      let B2 = B + E;
      B2 = lessThenTwentyTwo(B2);
      let B1 = B + B2;
      B1 = lessThenTwentyTwo(B1);
      let B3 = E + B2;
      B3 = lessThenTwentyTwo(B3);
      let AF = A + F;
      AF = lessThenTwentyTwo(AF);
      let FB = F + B;
      FB = lessThenTwentyTwo(FB);
      let BG = B + G;
      BG = lessThenTwentyTwo(BG);
      let GC = G + C;
      GC = lessThenTwentyTwo(GC);
      let CI = C + I;
      CI = lessThenTwentyTwo(CI);
      let ID = I + D;
      ID = lessThenTwentyTwo(ID);
      let DH = D + H;
      DH = lessThenTwentyTwo(DH);
      let HA = H + A;
      HA = lessThenTwentyTwo(HA);
      let twoThree = A + AF;
      twoThree = lessThenTwentyTwo(twoThree);
      let oneTwo = A + twoThree;
      oneTwo = lessThenTwentyTwo(oneTwo);
      let threeFour = AF + twoThree;
      threeFour = lessThenTwentyTwo(threeFour);

      let sevenEight = AF + F;
      sevenEight = lessThenTwentyTwo(sevenEight);
      let sixSeven = AF + sevenEight;
      sixSeven = lessThenTwentyTwo(sixSeven);
      let eigthNine = sevenEight + F;
      eigthNine = lessThenTwentyTwo(eigthNine);

      let twelth = F + FB;
      twelth = lessThenTwentyTwo(twelth);
      let eleven = F + twelth;
      eleven = lessThenTwentyTwo(eleven);
      let therteen = twelth + FB;
      therteen = lessThenTwentyTwo(therteen);

      let seventeen = FB + B;
      seventeen = lessThenTwentyTwo(seventeen);
      let sixteen = FB + seventeen;
      sixteen = lessThenTwentyTwo(sixteen);
      let eighteen = seventeen + B;
      eighteen = lessThenTwentyTwo(eighteen);

      let twentyTwo = B + BG;
      twentyTwo = lessThenTwentyTwo(twentyTwo);
      let twentyOne = B + twentyTwo;
      twentyOne = lessThenTwentyTwo(twentyOne);
      let twentyThree = twentyTwo + BG;
      twentyThree = lessThenTwentyTwo(twentyThree);

      let twentySeven = BG + G;
      twentySeven = lessThenTwentyTwo(twentySeven);
      let twentySix = BG + twentySeven;
      twentySix = lessThenTwentyTwo(twentySix);
      let twentyEight = twentySeven + G;
      twentyEight = lessThenTwentyTwo(twentyEight);

      let thertyTwo = GC + G;
      thertyTwo = lessThenTwentyTwo(thertyTwo);
      let thertyOne = G + thertyTwo;
      thertyOne = lessThenTwentyTwo(thertyOne);
      let thertyThree = thertyTwo + GC;
      thertyThree = lessThenTwentyTwo(thertyThree);

      let thertySeven = GC + C;
      thertySeven = lessThenTwentyTwo(thertySeven);
      let thertySix = GC + thertySeven;
      thertySix = lessThenTwentyTwo(thertySix);
      let thertyEight = thertySeven + C;
      thertyEight = lessThenTwentyTwo(thertyEight);

      let fortyTwo = CI + C;
      fortyTwo = lessThenTwentyTwo(fortyTwo);
      let fortyOne = C + fortyTwo;
      fortyOne = lessThenTwentyTwo(fortyOne);
      let fortyThree = fortyTwo + CI;
      fortyThree = lessThenTwentyTwo(fortyThree);

      let fortySeven = CI + I;
      fortySeven = lessThenTwentyTwo(fortySeven);
      let fortySix = CI + fortySeven;
      fortySix = lessThenTwentyTwo(fortySix);
      let fortyEight = fortySeven + I;
      fortyEight = lessThenTwentyTwo(fortyEight);

      let fiftyTwo = ID + I;
      fiftyTwo = lessThenTwentyTwo(fiftyTwo);
      let fiftyOne = I + fiftyTwo;
      fiftyOne = lessThenTwentyTwo(fiftyOne);
      let fiftyThree = fiftyTwo + ID;
      fiftyThree = lessThenTwentyTwo(fiftyThree);

      let fiftySeven = ID + D;
      fiftySeven = lessThenTwentyTwo(fiftySeven);
      let fiftySix = ID + fiftySeven;
      fiftySix = lessThenTwentyTwo(fiftySix);
      let fiftyEight = fiftySeven + D;
      fiftyEight = lessThenTwentyTwo(fiftyEight);

      let sixtyTwo = DH + D;
      sixtyTwo = lessThenTwentyTwo(sixtyTwo);
      let sixtyOne = D + sixtyTwo;
      sixtyOne = lessThenTwentyTwo(sixtyOne);
      let sixtyThree = sixtyTwo + DH;
      sixtyThree = lessThenTwentyTwo(sixtyThree);

      let sixtySeven = DH + H;
      sixtySeven = lessThenTwentyTwo(sixtySeven);
      let sixtySix = DH + sixtySeven;
      sixtySix = lessThenTwentyTwo(sixtySix);
      let sixtyEight = sixtySeven + H;
      sixtyEight = lessThenTwentyTwo(sixtyEight);

      let seventyTwo = HA + H;
      seventyTwo = lessThenTwentyTwo(seventyTwo);
      let seventyOne = H + seventyTwo;
      seventyOne = lessThenTwentyTwo(seventyOne);
      let seventyThree = seventyTwo + HA;
      seventyThree = lessThenTwentyTwo(seventyThree);

      let seventySeven = HA + A;
      seventySeven = lessThenTwentyTwo(seventySeven);
      let seventySix = HA + seventySeven;
      seventySix = lessThenTwentyTwo(seventySix);
      let seventyEight = seventySeven + A;
      seventyEight = lessThenTwentyTwo(seventyEight);

      let sky = B + D;
      sky = lessThenTwentyTwo(sky);
      let land = A + C;
      land = lessThenTwentyTwo(land);
      let skyLand = sky + land;
      skyLand = lessThenTwentyTwo(skyLand);

      let man = F + I;
      man = lessThenTwentyTwo(man);
      let woman = G + H;
      woman = lessThenTwentyTwo(woman);
      let manWoman = man + woman;
      manWoman = lessThenTwentyTwo(manWoman);

      let spiritss = skyLand + manWoman;
      spiritss = lessThenTwentyTwo(spiritss);

      let planetarnoe = manWoman + spiritss;
      planetarnoe = lessThenTwentyTwo(planetarnoe);

      document.querySelector('#zeroAgePurple').innerHTML = A;
      document.querySelector('#twentyAgePurple').innerHTML = B;
      document.querySelector('#fortyAgeRed').innerHTML = C;
      document.querySelector('#sixtyAgeRed').innerHTML = D;
      document.querySelector('#center').innerHTML = E;
      document.querySelector('#upLeft').innerHTML = F;
      document.querySelector('#upRigth').innerHTML = G;
      document.querySelector('#downLeft').innerHTML = H;
      document.querySelector('#downRight').innerHTML = I;

      document.querySelector('#downOrange').innerHTML = J;
      document.querySelector('#downWhite').innerHTML = DJ;
      document.querySelector('#e1_tspan').innerHTML = K;
      document.querySelector('#rightWhite').innerHTML = KC;

      document.querySelector('#betweenHeartMoney').innerHTML = L;
      document.querySelector('#e4_texte').innerHTML = M;
      document.querySelector('#e3_texte').innerHTML = N;
      document.querySelector('#leftTwo').innerHTML = A1;
      document.querySelector('#leftThree').innerHTML = A2;
      document.querySelector('#leftGreen').innerHTML = A3;
      document.querySelector('#upTwo').innerHTML = B1;
      document.querySelector('#upThree').innerHTML = B2;
      document.querySelector('#upGreen').innerHTML = B3;

      document.querySelector('#fiveAge').innerHTML = AF;
      document.querySelector('#fifteenAge').innerHTML = FB;
      document.querySelector('#twentyfiveAge').innerHTML = BG;
      document.querySelector('#thertyFiveAge').innerHTML = GC;
      document.querySelector('#fortyFiveAge').innerHTML = CI;
      document.querySelector('#fiftyFiveAge').innerHTML = ID;
      document.querySelector('#sixtyFiveAge').innerHTML = DH;
      document.querySelector('#seventyFiveAge').innerHTML = HA;

      document.querySelector('#twoThree').innerHTML = twoThree;
      document.querySelector('#oneTwo').innerHTML = oneTwo;
      document.querySelector('#threeFour').innerHTML = threeFour;

      document.querySelector('#sixSeven').innerHTML = sixSeven;
      document.querySelector('#sevenEight').innerHTML = sevenEight;
      document.querySelector('#eigthNine').innerHTML = eigthNine;

      document.querySelector('#eleven').innerHTML = eleven;
      document.querySelector('#twelth').innerHTML = twelth;
      document.querySelector('#therteen').innerHTML = therteen;

      document.querySelector('#sixteen').innerHTML = sixteen;
      document.querySelector('#seventeen').innerHTML = seventeen;
      document.querySelector('#eighteen').innerHTML = eighteen;

      document.querySelector('#twentyOne').innerHTML = twentyOne;
      document.querySelector('#twentyTwo').innerHTML = twentyTwo;
      document.querySelector('#twentyThree').innerHTML = twentyThree;

      document.querySelector('#twentySix').innerHTML = twentySix;
      document.querySelector('#twentySeven').innerHTML = twentySeven;
      document.querySelector('#twentyEight').innerHTML = twentyEight;

      document.querySelector('#thertyOne').innerHTML = thertyOne;
      document.querySelector('#thertyTwo').innerHTML = thertyTwo;
      document.querySelector('#thertyThree').innerHTML = thertyThree;

      document.querySelector('#thertySix').innerHTML = thertySix;
      document.querySelector('#thertySeven').innerHTML = thertySeven;
      document.querySelector('#thertyEight').innerHTML = thertyEight;

      document.querySelector('#fortyOne').innerHTML = fortyOne;
      document.querySelector('#fortyTwo').innerHTML = fortyTwo;
      document.querySelector('#fortyThree').innerHTML = fortyThree;

      document.querySelector('#fortySix').innerHTML = fortySix;
      document.querySelector('#fortySeven').innerHTML = fortySeven;
      document.querySelector('#fortyEight').innerHTML = fortyEight;

      document.querySelector('#fiftyOne').innerHTML = fiftyOne;
      document.querySelector('#fiftyTwo').innerHTML = fiftyTwo;
      document.querySelector('#fiftyThree').innerHTML = fiftyThree;

      document.querySelector('#fiftySix').innerHTML = fiftySix;
      document.querySelector('#fiftySeven').innerHTML = fiftySeven;
      document.querySelector('#fiftyEight').innerHTML = fiftyEight;

      document.querySelector('#sixtyOne').innerHTML = sixtyOne;
      document.querySelector('#sixtyTwo').innerHTML = sixtyTwo;
      document.querySelector('#sixtyThree').innerHTML = sixtyThree;

      document.querySelector('#sixtySix').innerHTML = sixtySix;
      document.querySelector('#sixtySeven').innerHTML = sixtySeven;
      document.querySelector('#sixtyEight').innerHTML = sixtyEight;

      document.querySelector('#seventyOne').innerHTML = seventyOne;
      document.querySelector('#seventyTwo').innerHTML = seventyTwo;
      document.querySelector('#seventyThree').innerHTML = seventyThree;

      document.querySelector('#seventySix').innerHTML = seventySix;
      document.querySelector('#seventySeven').innerHTML = seventySeven;
      document.querySelector('#seventyEight').innerHTML = seventyEight;

      document.querySelectorAll('#sky').forEach((e) => {
        e.innerHTML = sky;
      });
      document.querySelectorAll('#land').forEach((e) => {
        e.innerHTML = land;
      });
      document.querySelectorAll('#skyLand').forEach((e) => {
        e.innerHTML = skyLand;
      });
      document.querySelectorAll('#man').forEach((e) => {
        e.innerHTML = man;
      });
      document.querySelectorAll('#woman').forEach((e) => {
        e.innerHTML = woman;
      });
      document.querySelectorAll('#manWoman').forEach((e) => {
        e.innerHTML = manWoman;
      });
      document.querySelectorAll('#spiritss').forEach((e) => {
        e.innerHTML = spiritss;
      });
      document.querySelectorAll('#planetarnoe').forEach((e) => {
        e.innerHTML = planetarnoe;
      });

      document.querySelector('#sevenPhisic').innerHTML = A;
      document.querySelector('#sixPhisic').innerHTML = A1;
      document.querySelector('#fivePhisic').innerHTML = A2;
      document.querySelector('#fourPhisic').innerHTML = A3;
      document.querySelector('#threePhisic').innerHTML = E;
      document.querySelector('#twoPhisic').innerHTML = K;
      document.querySelector('#onePhisic').innerHTML = C;
      let itog = A + A1 + A2 + A3 + E + K + C;
      itog = lessThenTwentyTwo(itog);
      document.querySelector('#zeroPhisic').innerHTML = itog;

      document.querySelector('#sevenEnergy').innerHTML = B;
      document.querySelector('#sixEnergy').innerHTML = B1;
      document.querySelector('#fiveEnergy').innerHTML = B2;
      document.querySelector('#fourEnergy').innerHTML = B3;
      document.querySelector('#threeEnergy').innerHTML = E;
      document.querySelector('#twoEnergy').innerHTML = J;
      document.querySelector('#oneEnergy').innerHTML = D;
      let itog1 = B + B1 + B2 + B3 + E + J + D;
      itog1 = lessThenTwentyTwo(itog1);
      document.querySelector('#zeroEnergy').innerHTML = itog1;

      let AB = A + B;
      AB = lessThenTwentyTwo(AB);
      let AB1 = A1 + B1;
      AB1 = lessThenTwentyTwo(AB1);
      let AB2 = A2 + B2;
      AB2 = lessThenTwentyTwo(AB2);
      let AB3 = A3 + B3;
      AB3 = lessThenTwentyTwo(AB3);
      let EE = E + E;
      EE = lessThenTwentyTwo(EE);
      let JK = K + J;
      JK = lessThenTwentyTwo(JK);
      let DC = D + C;
      DC = lessThenTwentyTwo(DC);
      document.querySelector('#sevenEmo').innerHTML = AB;
      document.querySelector('#sixEmo').innerHTML = AB1;
      document.querySelector('#fiveEmo').innerHTML = AB2;
      document.querySelector('#fourEmo').innerHTML = AB3;
      document.querySelector('#threeEmo').innerHTML = EE;
      document.querySelector('#twoEmo').innerHTML = JK;
      document.querySelector('#oneEmo').innerHTML = DC;
      let itog2 = AB + AB1 + AB2 + AB3 + EE + JK + DC;
      // if (itog2 > 99) {
      //     let perem = Math.floor(itog2);
      //     let ccc = itog2%10;
      //     let bbb = perem%10;
      //     let aaa = Math.floor(perem/10);
      //     itog2 = +aaa + +bbb + +ccc;
      // }
      itog2 = lessThenTwentyTwo(itog2);
      document.querySelector('#zeroEmo').innerHTML = itog2;

      matrix.style.display = 'flex';
    }
  }
});

znak.forEach((e) => {
  e.addEventListener('mouseover', (elem) => {
    console.log(e.parentElement.classList[1]);
    switch (e.parentElement.classList[1]) {
      case 'seven':
        e.parentElement.querySelector('.tip').style.display = 'inline-block';
      case 'six':
        e.parentElement.querySelector('.tip').style.display = 'inline-block';
        break;
      case 'five':
        e.parentElement.querySelector('.tip').style.display = 'inline-block';
        break;
      case 'four':
        e.parentElement.querySelector('.tip').style.display = 'inline-block';
        break;
      case 'three':
        e.parentElement.querySelector('.tip').style.display = 'inline-block';
        break;
      case 'two':
        e.parentElement.querySelector('.tip').style.display = 'inline-block';
        break;
      case 'one':
        e.parentElement.querySelector('.tip').style.display = 'inline-block';
        break;
      case 'poslednee':
        e.parentElement.querySelector('.tip').style.display = 'inline-block';
        break;
      default:
        break;
    }
  });
  e.addEventListener('mouseout', (elem) => {
    switch (e.parentElement.classList[1]) {
      case 'seven':
        e.parentElement.querySelector('.tip').style.display = 'none';
        break;
      case 'six':
        e.parentElement.querySelector('.tip').style.display = 'none';
        break;
      case 'five':
        e.parentElement.querySelector('.tip').style.display = 'none';
        break;
      case 'four':
        e.parentElement.querySelector('.tip').style.display = 'none';
        break;
      case 'three':
        e.parentElement.querySelector('.tip').style.display = 'none';
        break;
      case 'two':
        e.parentElement.querySelector('.tip').style.display = 'none';
        break;
      case 'one':
        e.parentElement.querySelector('.tip').style.display = 'none';
        break;
      case 'poslednee':
        e.parentElement.querySelector('.tip').style.display = 'none';
        break;
      default:
        break;
    }
  });
});
