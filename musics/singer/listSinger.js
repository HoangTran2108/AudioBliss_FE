function showListSinger() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/singers",
        success: function (singers) {
            console.log(singers);
            let listSingers = "";
            for (let i = 0; i < singers.length; i++) {
                listSingers += `                    
                    <div class="col-lg-4">
                        <div class="event__item">
                            <div class="event__item__pic set-bg" data-setbg='"img/files/${singers[i].image}"'>
                                <div class="tag-date">
                                    <span>${singers[i].birthday}</span>
                                </div>
                            </div>
                            <div class="event__item__text">
                                <h4 href="#showInfo" class="btn btn-success" data-toggle="modal" onclick="showInformation(${singers[i].id})">${singers[i].singerName}</h4>
                                <p><i class="fa fa-map-marker"></i> ${singers[i].story}</p>
                            </div>
                        </div>
                    </div>
                              `
            }
            document.getElementById("listSinger").innerHTML = `<div class=\"row\">` + `<div class=\"event__slider owl-carousel\">`
                + `<div class="col-lg-4">
                        <div class="event__item">
                            <div class="event__item__pic set-bg" data-setbg="img/about/about.png" onclick="addSinger()">
                            </div>
                            <div class="event__item__text">
                                <a href="musics/singer/createSinger.html"><i class="fa-solid fa-arrow-up-from-bracket"><h4>Add new singer</h4></i></a>
                                <p>click to add</p>
                            </div>
                        </div>
                    </div>`+ listSingers +  `</div>` + `</div>`;
        },
        error: function () {
            alert("Không thể hiển thị danh sách ca sĩ!");
        }
    });
}
showListSinger();

function addSinger(){
    window.location.href="musics/singer/createSinger.html"
}

function showInformation(id){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/singers/" + id,
        success: function (singer) {
            let singerInfo = "";
            singerInfo += `                
                <td style='text-align: left'>Tên ca sĩ:</td><td>${singer.singerName}</td></tr>
                <td style='text-align: left'>Giới tính:</td><td>${singer.gender}</td></tr>
                <td style='text-align: left'>Ngày sinh:</td><td>${singer.birthday}</td></tr>
                <td style='text-align: left'>Quê quán:</td><td>${singer.story}</td></tr>
                <td style='text-align: left'>Thông tin khác:</td><td>${singer.otherInformation}</td></tr>`
            document.getElementById("SingerInfor").innerHTML = singerInfo;
        },
        error: function () {
            alert("Không thể hiển thị thông tin ca sĩ!");
        }
    })

}

