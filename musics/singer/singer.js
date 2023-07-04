function createSinger() {
    event.preventDefault();
    let singer_name = $("#singerName").val();
    let gender = $("#gender").val();
    let birthday = $("#birthday").val();
    let story = $("#story").val();
    let otherInformation = $("#otherInformation").val();
    let image = $("#image")[0].files[0];

    let singer = new FormData();
    singer.append("singerName", singer_name);
    singer.append("gender", gender);
    singer.append("birthday", birthday);
    singer.append("story", story);
    singer.append("otherInformation", otherInformation);
    singer.append("image", image);

    $.ajax({
        headers: {
            'Accept': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/admin/singers/create",
        data: singer,
        contentType: false,
        processData: false,
        success: function (result) {
            alert("Thêm thành công")
            console.log(result)
            let imageUrl = URL.createObjectURL(image);
            $("#singerInformation").html(
                "<table>"+
                "<tr>" +
                "<td style='text-align: left'>Tên ca sĩ:</td>" + "<td>" +result.singerName + "</td>" + "</tr>" +
                "<td style='text-align: left'>Giới tính:</td>" + "<td>" +result.gender + "</td>" + "</tr>" +
                "<td style='text-align: left'>Ngày sinh:</td>" + "<td>" +result.birthday + "</td>" + "</tr>" +
                "<td style='text-align: left'>Quê quán:</td>" + "<td>" +result.story + "</td>" + "</tr>" +
                "<td style='text-align: left'>Thông tin khác:</td>" + "<td>" +result.otherInformation + "</td>" + "</tr>" +

                "<img width='350' height='350' src='" + imageUrl + "' alt='Ảnh đính kèm'>" +
                "<table>"
            )
        },
        error: function () {
            alert("Không thể thêm ca sĩ!");
        }
    });
}
