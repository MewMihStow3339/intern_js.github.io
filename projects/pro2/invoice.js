
$(document).ready(function () {
    let i = 1;
    $("#add").click(function () {
        i++
        const el = `<div class="row tr-clr2 py-2" cols="22" id="child${i}">
    <div class="col-3">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <input type="text" class="form-control bg-transparent brdr-inp" id="">
    </div>
    <div class="col">
        <button class="fa fa-times btn btn-danger" id="remove${i}"></button>
    </div>
</div>`
        $("#parent").append(el)
    })

})