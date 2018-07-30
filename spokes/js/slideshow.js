$('#1').addClass('hidden');
$('#2').addClass('hidden');

let active = 0;

function prev() {
    let oldIdentifier = '#' + active;
    $(oldIdentifier).addClass('hidden');

    if (active > 0)
        active = active - 1;
    else
        active = 2;

    let newIdentifier = '#' + active;

    $(newIdentifier).removeClass('hidden');

    console.log(active);

}

function next() {
    let oldIdentifier = '#' + active;
    $(oldIdentifier).addClass('hidden');
    if (active < 2)
        active = active + 1;
    else
        active = 0;

    let newIdentifier = '#' + active;

    $(newIdentifier).removeClass('hidden');

    console.log(active);
}
