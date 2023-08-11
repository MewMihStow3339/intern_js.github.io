$(document).ready(function () {
    let i = 1;
    let removee = false;
    if (i == 1) {
        append(i)
        calc(i, 1)
        last_total(i)

        $(`#GST${i}, #Qua${i}, #Rate${i}`).on("input", function () {
            calc(i, 1)
            last_total(i)
        })

        $(`#Amount${i}`).on("input", function () {
            calc(i, 2)
            last_total(i)
        })

        $(`#Total${i}`).on("input", function () {
            calc(i, 0)
            last_total(i)
        })

        $(`#remove${i}`).click(function () {
            i--
            last_total(i)
            $(this).closest('.row').remove();
            console.log(i);
        })

        $(`#Upload`).click(function () {
            Upload(i)
        })
        i++
    }

    $("#add").click(function () {

        append(i)
        calc(i, 1)
        last_total(i)

        $(`#GST${i}, #Qua${i}, #Rate${i}`).on("input", function () {
            calc(i, 1)
            last_total(i)
        })

        $(`#Amount${i}`).on("input", function () {
            calc(i, 2)
            last_total(i)
        })

        $(`#Total${i}`).on("input", function () {
            calc(i, 0)
            last_total(i)
        })

        $(`#remove${i}`).click(function () {
            i--
            $(this).closest('.row').remove();
            last_total(i)
            console.log(i);
        })

        $(`#Upload`).click(function () {
            Upload(i)
        })

        i++
    })

    function append(i) {
        const el = `<div class="row tr-clr2 py-2" id="child${i}">
        <div class="col-3">
            <input type="text" class="form-control bg-transparent brdr-inp" value="Item Name" id="name${i}">
        </div>
        <div class="col d-flex align-items-center">
            <input required type="text" class="form-control bg-transparent brdr-inp" id="HSN${i}" placeholder="#">
            <div class="fnt">
                <div class="fa fa-search"></div>
            </div>
        </div>
        <div class="col d-flex align-items-center">
            <input required pattern="[0-9]+" type="text" class="form-control bg-transparent brdr-inp" value="18" id="GST${i}">
            <div class="fnt">
                <div class="fa fa-percent"></div>
            </div>
        </div>
        <div class="col d-flex align-items-center">
            <input required pattern="[0-9]+" type="text" class="form-control bg-transparent brdr-inp" value="1" id="Qua${i}">
        </div>
        <div class="col d-flex align-items-center">
            <div class="fnt">
                <div class="fa fa-rupee"></div>
            </div>
            <input required pattern="[0-9]+" type="text" class="form-control bg-transparent brdr-inp" value="1" id="Rate${i}">
        </div>
        <div class="col d-flex align-items-center">
            <div class="fnt">
                <div class="fa fa-rupee"></div>
            </div>
            <input type="text" class="form-control bg-transparent brdr-inp" id="Amount${i}">
        </div>
        <div class="col d-flex align-items-center">
            <div class="fnt">
                <div class="fa fa-rupee"></div>
            </div>
            <input disabled type="text" class="form-control bg-transparent brdr-inp" id="CGST${i}">
        </div>
        <div class="col d-flex align-items-center">
            <div class="fnt">
                <div class="fa fa-rupee"></div>
            </div>
            <input type="text" class="form-control bg-transparent brdr-inp" id="SGST${i}">
        </div>
        <div class="col d-flex align-items-center">
            <div class="fnt">
                <div class="fa fa-rupee"></div>
            </div>
            <input type="text" class="form-control bg-transparent brdr-inp" id="Total${i}">
        </div>
        <div class="col">
            <button type="button" class="fa fa-times btn btn-danger" id="remove${i}"></button>
        </div>
    </div>`
        $("#parent").append(el)
    }

    function calc(i, flagg) {
        for (let j = 1; j <= i; j++) {
            if (flagg == 0) {
                let Total = $(`#Total${j}`).val()
                let GST = $(`#GST${j}`).val()
                let Qua = $(`#Qua${j}`).val()
                $(`#Amount${j}`).val((Total / (1 + (GST / 100))).toFixed(2))
                let Amount = $(`#Amount${j}`).val()
                $(`#Rate${j}`).val(Amount / Qua)
            }
            if (flagg == 1) {
                let GST = $(`#GST${j}`).val()
                let Qua = $(`#Qua${j}`).val()
                let Rate = $(`#Rate${j}`).val()
                $(`#Amount${j}`).val((Qua * Rate).toFixed(2))
                let Amount = $(`#Amount${j}`).val()
                $(`#CGST${j}`).val((((GST / 2) * $(`#Amount${j}`).val()) / 100).toFixed(2))
                let CGST = $(`#CGST${j}`).val()
                $(`#SGST${j}`).val((((GST / 2) * $(`#Amount${j}`).val()) / 100).toFixed(2))
                let SGST = $(`#SGST${j}`).val()
                $(`#Total${j}`).val(((+((GST * $(`#Amount${j}`).val()) / 100)) + (+$(`#Amount${j}`).val())).toFixed(2))
                let Total = $(`#Total${j}`).val()
            }
            else if (flagg == 2) {
                let GST = $(`#GST${j}`).val()
                let Qua = $(`#Qua${j}`).val()
                let Amount = $(`#Amount${j}`).val()
                $(`#Rate${j}`).val((Amount / Qua).toFixed(2))
                let Rate = $(`#Rate${j}`).val()
                $(`#CGST${j}`).val((((GST / 2) * $(`#Amount${j}`).val()) / 100).toFixed(2))
                let CGST = $(`#CGST${j}`).val()
                $(`#SGST${j}`).val((((GST / 2) * $(`#Amount${j}`).val()) / 100).toFixed(2))
                let SGST = $(`#SGST${j}`).val()
                $(`#Total${j}`).val(((+((GST * $(`#Amount${j}`).val()) / 100)) + (+$(`#Amount${j}`).val())).toFixed(2))
                let Total = $(`#Total${j}`).val()
            }
        }
    }

    function last_total(i) {
        // debugger
        let lst_Amount = 1.00;
        let lst_CGST = 0.09;
        let lst_SGST = 0.09;
        let lst_total = 1.18;

        for (let j = 1; j < i; j++) {
            let temp_Amount = parseFloat($(`#Amount${j}`).val());
            let temp_CGST = parseFloat($(`#CGST${j}`).val());
            let temp_SGST = parseFloat($(`#SGST${j}`).val());
            let temp_total = parseFloat($(`#Total${j}`).val());

            lst_Amount += temp_Amount;
            lst_CGST += temp_CGST;
            lst_SGST += temp_SGST;
            lst_total += temp_total;
        }
        $("#last_amount").html(lst_Amount.toFixed(2));
        $("#last_CGST").html(lst_CGST.toFixed(2));
        $("#last_SGST").html(lst_SGST.toFixed(2));
        $("#last_total").html(lst_total.toFixed(2));

    }


    function Upload(i) {
        for (let j = 1; j < i; j++) {
            let iname = $(`#name${j}`).val()
            let HSN = $(`#HSN${j}`).val()
            let GST = $(`#GST${j}`).val()
            let Qua = $(`#Qua${j}`).val()
            let Rate = $(`#Rate${j}`).val()
            $(`#Amount${j}`).val((Qua * Rate).toFixed(2))
            let Amount = $(`#Amount${j}`).val()
            $(`#CGST${j}`).val((((GST / 2) * $(`#Amount${j}`).val()) / 100).toFixed(2))
            let CGST = $(`#CGST${j}`).val()
            $(`#SGST${j}`).val((((GST / 2) * $(`#Amount${j}`).val()) / 100).toFixed(2))
            let SGST = $(`#SGST${j}`).val()
            $(`#Total${j}`).val(((+((GST * $(`#Amount${j}`).val()) / 100)) + (+$(`#Amount${j}`).val())).toFixed(2))
            let Total = $(`#Total${j}`).val()
            let obj = {
                HSN: HSN,
                GST: GST,
                Qua: Qua,
                Rate: Rate,
                Amount: Amount,
                CGST: CGST,
                SGST: SGST,
                Total: Total
            }
            const info = JSON.stringify(obj)
            localStorage.setItem(iname, info)
        }
    }

})