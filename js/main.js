$( document ).ready(function() {
    let header = $("#header-section")
    const urlHeader = $("#url-header").val()
    $.ajax({
        url : urlHeader,
        type : 'GET',
        data : {},
        dataType:'json',
        success : function(data) {
            const headerData = data.header
            header.html(headerData)
        },
        error : function(request,error)
        {
            console.log(error)
        }
    });


});
function redirectHome() {
    window.location.href = '/PythonLib/index.html'
}