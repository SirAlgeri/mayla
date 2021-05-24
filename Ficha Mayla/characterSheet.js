const data = {
  // DETALHES PESSOAIS
  name: 'Mayla',
  player: 'Fernanda',
  occupation: 'Arqueóloga',
  age: 31,
  sex: 'Masculino',
  altura: '1,65m',
  peso: '77kg',
  
  // COMBATE
  esquiva: '10',
  move: '8',
  lutar: 9,  
  lutar2: 9,
  lutar3: 9,
  lutar4: 9,
  arma_fogo1:'6',
  arma_fogo2:'6',
  arma_fogo3:'6',
  municao:'N/a',
  slot_arma1: 'N/a',
  slot_arma2: 'N/a',
  slot_arma3: 'N/a',
  dano1: 'N/a',
  dano2: 'N/a',
  dano3: 'N/a',
  alcance1: 'N/a',
  alcance2: 'N/a',
  alcance3: 'N/a',
  slot: 'Garrafa De Água',
  slot2: 'Câmera fotográfica',
  slot3: 'Lanterna',
  slot4: 'Pilhas',
  slot5: 'Ataduras',
  slot6: 'Tênis',
  

  // PERÍCIAS 
  acrobacia: 1,
  adestrar_animais: 1,
  arremessar: 10,
  blefar: 1,
  cavalgar: 1,
  concentrar: 1,
  conducao: 5,
  conhecimento: 1,
  decifrar: 1,
  demolicao: 0,
  diplomacia: 7,
  disfarce: 1,
  encontrar: 10,
  equilibrio: 6,
  escalar: 6,
  esconder: 1,
  escutar: 15,
  falsificar: 0,
  furtividade: 7,
  idioma: 0,
  intimidar: 1,
  investigar: 5,
  jogos: 1,
  medicina: 8,
  natacao: 1,
  persuasao: 10,
  prestidigitacao: 0,
  socorros: 10,
  psicologia: 9,
  reparos_mecanicos: 1,
  reparos_eletricos: 1,
  saltar: 7,
  sobreviver: 1,
  sobreviver_urbana: 1,
  use_bibliotecas: 1,
  use_pc: 1,

  life: {
    current: 12,
    max: 12,
  },
  sanity: {
    current: 86,
    max: 86,
  },

  attributes: [
    {
      type: 'Constituição',
      amount: 8,
    },
    {
      type: 'Destreza',
      amount: 9,
    },
    {
      type: 'Sabedoria',
      amount: 13,
    },
    {
      type: 'Força',
      amount: 9,
    },
    {
      type: 'Inteligência',
      amount: 14,
    },
    {
      type: 'Poder',
      amount: 7,
    },
    {
      type: 'Sorte',
      amount: 10,
    },
    {
      type: 'Carisma',
      amount: 10,
    },
  ],


}

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})



$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#altura').val(data.altura)
$('#peso').val(data.peso)
$('#move').val(data.move)
$('#esquiva').val(data.esquiva)
$('#acrobacia').val(data.acrobacia)
$('#adestrar_animais').val(data.adestrar_animais)
$('#arremessar').val(data.arremessar)
$('#blefar').val(data.blefar)
$('#cavalgar').val(data.cavalgar)
$('#concentrar').val(data.concentrar)
$('#conducao').val(data.conducao)
$('#conhecimento').val(data.conhecimento)
$('#decifrar').val(data.decifrar)
$('#demolicao').val(data.demolicao)
$('#diplomacia').val(data.diplomacia)
$('#disfarce').val(data.disfarce)
$('#encontrar').val(data.encontrar)
$('#equilibrio').val(data.equilibrio)
$('#escalar').val(data.escalar)
$('#esconder').val(data.esconder)
$('#escutar').val(data.escutar)
$('#falsificar').val(data.falsificar)
$('#furtividade').val(data.furtividade)
$('#idioma').val(data.idioma)
$('#intimidar').val(data.intimidar)
$('#investigar').val(data.investigar)
$('#jogos').val(data.jogos)
$('#medicina').val(data.medicina)
$('#natacao').val(data.natacao)
$('#persuasao').val(data.persuasao)
$('#prestidigitacao').val(data.prestidigitacao)
$('#socorros').val(data.socorros)
$('#psicologia').val(data.psicologia)
$('#reparos_mecanicos').val(data.reparos_mecanicos)
$('#saltar').val(data.saltar)
$('#reparos_eletricos').val(data.reparos_eletricos)
$('#sobreviver').val(data.sobreviver)
$('#sobreviver_urbana').val(data.sobreviver_urbana)
$('#use_bibliotecas').val(data.use_bibliotecas)
$('#luta').val(data.luta)
$('#use_pc').val(data.use_pc)
$('#arma_fogo1').val(data.arma_fogo1)
$('#arma_fogo2').val(data.arma_fogo2)
$('#arma_fogo3').val(data.arma_fogo3)
$('#municao').val(data.municao)
$('#lutar').val(data.lutar)
$('#lutar2').val(data.lutar2)
$('#lutar3').val(data.lutar3)
$('#lutar4').val(data.lutar4)
$('#slot2').val(data.slot2)
$('#slot3').val(data.slot3)
$('#slot4').val(data.slot4)
$('#slot').val(data.slot)
$('#slot5').val(data.slot5)
$('#slot6').val(data.slot6)
$('#slot_arma1').val(data.slot_arma1)
$('#slot_arma2').val(data.slot_arma2)
$('#slot_arma3').val(data.slot_arma3)
$('#dano1').val(data.dano1)
$('#dano2').val(data.dano2)
$('#dano3').val(data.dano3)
$('#alcance1').val(data.alcance1)
$('#alcance2').val(data.alcance2)
$('#alcance3').val(data.alcance3)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css(
  'width',
  `${calculateBar(data.sanity.current, data.sanity.max)}%`
)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)

const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  }
})

function rollAtribute(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('1d20')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})


$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#injury').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento ativado!')
  } else {
    console.log('Modo lesionado desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})



$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {
  // Não encontrei uma forma mais fácil, então fiz assim

  const table = [
    { normal: 20 },
    { normal: 19, good: 20 },
    { normal: 18, good: 20 },
    { normal: 17, good: 19 },
    { normal: 16, good: 19, extreme: 20 },
    { normal: 15, good: 18, extreme: 20 },
    { normal: 14, good: 18, extreme: 20 },
    { normal: 13, good: 17, extreme: 20 },
    { normal: 12, good: 17, extreme: 20 },
    { normal: 11, good: 16, extreme: 20 },
    { normal: 10, good: 16, extreme: 19 },
    { normal: 9, good: 16, extreme: 19 },
    { normal: 8, good: 15, extreme: 19 },
    { normal: 7, good: 14, extreme: 19 },
    { normal: 6, good: 14, extreme: 18 },
    { normal: 5, good: 13, extreme: 18 },
    { normal: 4, good: 13, extreme: 18 },
    { normal: 3, good: 12, extreme: 18 },
    { normal: 2, good: 12, extreme: 18 },
    { normal: 1, good: 11, extreme: 17 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Extremo'
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  } else if (type.good) {
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  } else if (type.normal) {
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  }
}

function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}


function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}



