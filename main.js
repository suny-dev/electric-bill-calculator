const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function electricBillCalculator() {
    var unit = document.getElementById("unit")
    var btn = document.getElementById("btn")
    var unitNumber = document.getElementById("unitNumber")
    var netCharge = document.getElementById("netCharge")
    var demandCharge = document.getElementById("demandCharge")
    var vat = document.getElementById("vat")
    var meterCharge = document.getElementById("meterCharge")
    var demandChargeInt = 60
    var meterChargeInt = 10
    var total = document.getElementById("totalCharge")

    if(unit.value <= 75){
        var netChargeTotal = Math.round(unit.value * 4.19)
        var vatInt = Math.round(netChargeTotal * (5.4/100))
        var chargeTotal = netChargeTotal + demandChargeInt + vatInt + meterChargeInt
    }
    
    if(unit.value > 75 && unit.value <= 200){
        var charge1 = 75 * 4.19
        var charge2 = (unit.value - 75) * 5.72
        var netChargeTotal = Math.round(charge1 + charge2)
        var vatInt = Math.round(netChargeTotal * (5.4/100))
        var chargeTotal = netChargeTotal + demandChargeInt + vatInt + meterChargeInt
    }
    
    if(unit.value > 200 && unit.value <= 300){
        var charge1 = 75 * 4.19
        var charge2 = 125 * 5.72
        var charge3 = (unit.value - 200) * 6
        var netChargeTotal = Math.floor(charge1 + charge2 + charge3)
        var vatInt = Math.round(netChargeTotal * (5.4/100))
        var chargeTotal = netChargeTotal + demandChargeInt + vatInt + meterChargeInt
    }
    
    if(unit.value > 300 && unit.value <= 400){
        var charge1 = 75 * 4.19
        var charge2 = 125 * 5.72
        var charge3 = 100 * 6
        var charge4 = (unit.value - 300) * 6.34
        var netChargeTotal = Math.floor(charge1 + charge2 + charge3 + charge4)
        var vatInt = Math.round(netChargeTotal * (5.4/100))
        var chargeTotal = netChargeTotal + demandChargeInt + vatInt + meterChargeInt
    }
    
    if(unit.value > 400 && unit.value <= 600){
        var charge1 = 75 * 4.19
        var charge2 = 125 * 5.72
        var charge3 = 100 * 6
        var charge4 = 100 * 6.34
        var charge5 = (unit.value - 400) * 9.94
        var netChargeTotal = Math.floor(charge1 + charge2 + charge3 + charge4 + charge5)
        var vatInt = Math.round(netChargeTotal * (5.4/100))
        var chargeTotal = netChargeTotal + demandChargeInt + vatInt + meterChargeInt
    }
    
    if(unit.value > 600){
        var charge1 = 75 * 4.19
        var charge2 = 125 * 5.72
        var charge3 = 100 * 6
        var charge4 = 100 * 6.34
        var charge5 = 200 * 9.94
        var charge6 = (unit.value - 600) * 9.94
        var netChargeTotal = Math.floor(charge1 + charge2 + charge3 + charge4 + charge5 + charge6)
        var vatInt = Math.round(netChargeTotal * (5.4/100))
        var chargeTotal = netChargeTotal + demandChargeInt + vatInt + meterChargeInt
    }
    
    unitNumber.innerHTML = "Unit: " + unit.value
    unit.value = ""
    netCharge.innerHTML = "Net Charge: " + netChargeTotal + " Taka"
    demandCharge.innerHTML = "Demand Charge: " + demandChargeInt + " Taka"
    vat.innerHTML = "Vat(5.4%): " + vatInt + " Taka"
    meterCharge.innerHTML = "Meter Charge: " + meterChargeInt + " Taka"
    total.innerHTML = "Total Charge: " + chargeTotal + " Taka"
    total.style.color = "#0d6efd"
    }
    
    btn.addEventListener("click", electricBillCalculator)

    const genaratePdf = () => {
        const invoice = document.querySelector('#invoice')
        let opt = {
            margin:       0.5,
            filename:     'my-bill-invoice.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 5 },
            jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
          }
        html2pdf().from(invoice).set(opt).save()
    }

    document.querySelector('#download').addEventListener('click', genaratePdf)
    
    document.querySelector('#resetBtn').addEventListener("click", () => {
        location.reload()
    })
