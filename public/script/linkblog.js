/// <reference path="http://code.jquery.com/jquery-2.1.3.min.js" />
/// <reference path="http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.runtime.js" />
/// <reference path="../templates/linkTemplate.hbs.js" />
/// <reference path="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js" />


try {
    Handlebars.registerHelper('dateFormat', function (context, block) {
        var f = block.hash.format || "MMM Do";
        return moment(context, "YYYY/MM/DD").format(f);
    });

    $.get('../public/data/linkblog/2015/1/links.json', function (linkData) {
        $("#linkListTitle").html(moment("2015/01/01", "YYYY/MM/DD").format("MMMM YYYY"));
        $('#linkList').html(linkTemplate(linkData));
        
        //$(function () {
        //    $('#txtFilter').fastLiveFilter('.itemList', {
        //        timeout: 200
        //        //callback: function (total) {
        //        //    console.log("Found: " + total);
        //        //}
        //    });
        //});
    });
} catch (e) {
    console.log(e);
}