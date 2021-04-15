var links = 'https://web1-api.herokuapp.com/api/';
function loadData(request, targetId, sourceId) {
    var full_request = links + request;
    $.ajax({
    url: full_request,
    cache: false,
    success: function(data){
        let jsonData = {
            data: data
        };
        let target = $(targetId);
        let source = $(sourceId).html();
        let template = Handlebars.compile(source);
        $(target).html(template((jsonData)));
    }
});
};