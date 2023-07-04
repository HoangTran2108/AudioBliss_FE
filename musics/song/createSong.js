function selectSinger() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/singers",
        success: function (singer) {
            let select = "";
            for (let i = 0; i < singer.length; i++) {
                select += `
                      <option value="${singer.id}">` + singer.singerName + `</option>`
            }
            document.getElementById("listSingerId").innerHTML = `<select id="singerId" name="roles">` + select + `</select>`;
        },
        error: function () {
            alert("Không thể hiển thị thông tin ca sĩ!");
        }
    })
}
selectSinger();


function uploadMusic() {
    event.preventDefault();
    let musicName = $("#musicName").val();
    let description = $("#description").val();
    let fileName = $("#fileName")[0].files[0];
    let imageName = $("#imageName")[0].files[0];
    let singers = $("#singerName").val();
    let albums = $("#albums").val();
    let authors = $("#authors").val();

    let music = new FormData();
    music.append("musicName", musicName);
    music.append("description", description);
    music.append("fileName", fileName);
    music.append("singers", singers);
    music.append("imageName", imageName);
    music.append("albums", albums);
    music.append("authors", authors);
    $.ajax({
        headers: {
            'Accept': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/musics/admin/create",
        data: music,
        contentType: false,
        processData: false,
        success: function (result) {
            alert("Thêm thành công")
            // console.log(result)
        },
        error: function () {
            alert("Không thể thêm bài hát mới!");
        }
    })
}

function showListSong() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/musics",
        success: function (song) {
            console.log(song)
            let songList = "";
            let url = "img/files/"
            for (let i = 0; i < song.length; i++) {
                songList += `<div class="single_player_container">
                            <h4>${song[i].musicName}</h4>
                            <audio controls>
                            <source src="${url + song[i].fileName}" type="audio/ogg">
                            </audio>
                        </div>`
            }
            document.getElementById("songs").innerHTML = songList;
        }
    })
}

showListSong();

// search
function searchSong() {
    let name = $("#search").val().trim().toLowerCase();
    let resultSearch = {"musicName": name,}
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/musics/search?" + encodeURIParams(resultSearch),
        success: function (song) {
            displaySearchSong(song)
        }
    })
}
function encodeURIParams(data) {
    return Object.keys(data).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    });
}
function displaySearchSong(song) {
    let search = "";
    let url = "img/files/"
    for (let i = 0; i < song.length; i++) {
        search += `<div class="single_player_container">
                            <h4>${song[i].musicName}</h4>
                            <audio controls>
                            <source src="${url + song[i].fileName}" type="audio/ogg">
                            </audio>
                        </div>`
    }
    document.getElementById("songs").innerHTML = search;
}



