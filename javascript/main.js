const cardPopup = document.querySelector('.popup-matematika')
const cardPopupSoal = document.querySelector('.popup-matematika-soal')
const cardPopupSoal2 = document.querySelector('.popup-matematika-soal-2')
const cardPopupSoal3 = document.querySelector('.popup-matematika-soal-3')
const cardPopupSoal4 = document.querySelector('.popup-matematika-soal-4')
const cardPopupSoal5 = document.querySelector('.popup-matematika-soal-5')
const cardPopupSoal6 = document.querySelector('.popup-matematika-soal-6')
const cardPopupSoal7 = document.querySelector('.popup-matematika-soal-7')
const cardPopupSoal8 = document.querySelector('.popup-matematika-soal-8')
const cardPopupSoal9 = document.querySelector('.popup-matematika-soal-9')
const cardPopupSoal10 = document.querySelector('.popup-matematika-soal-10')
const papanSkor = document.querySelector('.papan-skor')
const keterangan = document.querySelector('.keterangan')
const btnMulaiKuis = document.querySelector('.btnMulaiKuis')
const cardKuis = document.querySelector('.card-kuis-1')

const popups = [
    cardPopupSoal,
    cardPopupSoal2,
    cardPopupSoal3,
    cardPopupSoal4,
    cardPopupSoal5,
    cardPopupSoal6,
    cardPopupSoal7,
    cardPopupSoal8,
    cardPopupSoal9,
    cardPopupSoal10
]

const jawaban = [
    'A',
    'C',
    'C',
    'A',
    'B',
    'D',
    'A',
    'B',
    'C',
    'D'
]

let skor = 0
const skorPerSoal = 10

let indexSoal = 0

cardKuis.addEventListener('click', () => {
    cardPopup.classList.add('aktif', 'effect')
})

btnMulaiKuis.addEventListener('click', () => {
    popups[0].classList.add('aktif')
    cardPopup.classList.remove('aktif')
})

popups.forEach((popup, i) => {
    const btnOption = popup.querySelectorAll('.option-soal-btn')
    const tunggu = popup.querySelector('.tunggu')
    const nilai = document.querySelector('.nilai')

    btnOption.forEach(btn => {
        btn.addEventListener('click', () => {

            btnOption.forEach(ba => {
                ba.disabled = true
            })

            btnOption.forEach(b => {
                b.classList.remove('benar', 'salah', 'benar-2')
                const checkIcon = b.querySelector('.check-icon')
                checkIcon.classList.remove('benar', 'salah')
            })

            if (btn.dataset.jawaban === jawaban[i]) {
                btn.classList.add('benar')
                const checkIcon = btn.querySelector('.check-icon')
                checkIcon.classList.add('benar')
                skor += skorPerSoal
            } else {
                btn.classList.add('salah')
                const checkIcon = btn.querySelector('.check-icon')
                checkIcon.classList.add('salah')
                btn.classList.add('benar-2')
            }

            tunggu.classList.add('aktif')

            setTimeout(() => {
                popup.classList.remove('aktif')
                indexSoal++

                if (indexSoal < popups.length) {
                    popups[indexSoal].classList.add('aktif')
                } else {
                    papanSkor.classList.add('aktif')
                    nilai.textContent = skor
                    tampilkanHasil()
                }

                tunggu.classList.remove('aktif')
            }, 3000)
        })
    })
})

function tampilkanHasil() {
    if (skor === 100) {
        keterangan.textContent = "Sempurna"
    } else if (skor >= 90) {
        keterangan.textContent = "Sangat Baik"
    } else if (skor >= 80) {
        keterangan.textContent = "Baik"
    } else if (skor >= 70) {
        keterangan.textContent = "Lumayan Baik"
    } else if (skor >= 60) {
        keterangan.textContent = "Lumayan"
    } else {
        keterangan.textContent = "Perlu Banyak Latihan"
    }
}
