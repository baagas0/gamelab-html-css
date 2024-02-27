$(document).ready(() => {
    window.id_pasien = ''
    window.data = []
    $('#form').on('submit', (e) => {
        console.log('submited')
        e.preventDefault();
        
        const dataArray = $('#form').serializeArray();
        let  obj = {};
        for (const item of dataArray) {
            obj[item.name] = item.value
        }

        // Cek ID
        for (const item of window.data) {
            if (item.id_pasien == obj.id_pasien && !window.id_pasien){
                alert("ID pasien sudah ada")
                $('input[name=id_pasien]').val('')
                return
            }
        }

        $('button[type=reset').click()
        if(window.id_pasien) {
            let index = window.data.map(function (x) { return x.id_pasien; }).indexOf(window.id_pasien);
            window.data[index] = obj
        } else {
            window.data.push(obj)
        }

        window.id_pasien = ''
        
        renderTable()
    })

    $("input[name=id_pasien]").on('keyup', function() {
        const e = $(this)
        const val = e.val();

        if(val.length > 0){
            $('#label_button').text('TAMBAH')
            $('#delete').prop('disabled', true)
            for (const item of window.data) {

                if (item.id_pasien == val){
                    window.id_pasien = item.id_pasien
                    
                    for (const key in item) {
                        if (Object.hasOwnProperty.call(item, key)) {
                            const elementVal = item[key];
                            $(`input[name=${key}]`).val(elementVal)
                            if(key == 'alamat') $(`textarea[name=${key}]`).text(elementVal)
                            if(key == 'bpjs') $(`select[name=${key}]`).val(elementVal).change()
                        }
                    }
                    
                    $('#label_button').text('UPDATE')
                    $('#delete').prop('disabled', false)
                    alert("ID pasien ditemukan")

                    return
                }
            }
        }
    })

    $('button[type=reset').on('click', function() {
        window.id_pasien = ''
        console.log('id_pasien', window.id_pasien)
    })

    function  renderTable() {
        $('tbody').empty()
        let innerBody = ''
        let i = 0
        for (const item of window.data) {
            console.log(item)
            innerBody += `
                <tr>
                    <td>${item.id_pasien}</td>
                    <td>${item.nama}</td>
                    <td>${item.penyakit}</td>
                    <td>${item.alamat}</td>
                    <td>${item.bpjs}</td>
                    <td>${item.tgl_masuk}</td>
                    <td>${item.tgl_keluar}</td>
                </tr>
            `
            i++
        }

        $('#tbody').html(innerBody)
    }

    $('#delete').on('click', function() {
        const e = $('input[name=id_pasien]')
        const val = e.val();

        if(val.length > 0){
            let index = window.data.map(function (x) { return x.id_pasien; }).indexOf(window.id_pasien);
            
            if (confirm('Apakah anda yakin ingin menghapus pasien: '+window.data[index].nama)) {
                console.log('jadi')
                window.data.splice(index, 1)
                renderTable()
                $('button[type=reset').click()
            } else {
                alert('Tidak menghapus data.')
                $('button[type=reset').click()
            }

        } else {
            alert('ID Pasien tidak ditemukan')
            $('button[type=reset').click()
        }
    })
})