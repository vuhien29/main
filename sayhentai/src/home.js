load('config.js');
function execute() {
    return Response.success([
        { title: "Cập Nhật", input: BASE_URL + "/", script: "gen.js" },
        { title: "Manhwa", input: BASE_URL + "/genre/manhwa", script: "gen.js" },
        { title: "Manga", input: BASE_URL + "/genre/manga", script: "gen.js" },
        { title: "Manhua", input: BASE_URL + "/genre/manhua", script: "gen.js" },
        { title: "Loli", input: BASE_URL + "/genre/loli", script: "gen.js" },
        { title: "Loạn luân", input: BASE_URL + "/genre/loan-luan", script: "gen.js" },
    ]);
}
