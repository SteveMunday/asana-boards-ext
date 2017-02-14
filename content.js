
var observer = new MutationObserver(function(mutations) {
    var columns = $("div.BoardColumn");
    $(columns).each(function(index) {
        var columnHeader = $(this).find(".BoardColumnHeader-title");
        var columnTitle = $(columnHeader).text();
        var cardCount = $(this).find(".BoardCard").length;
        if (columnTitle.indexOf('(') > 0) {
            columnTitle = columnTitle.substring(0, columnTitle.indexOf('('));
        }
        columnHeader.text(columnTitle + " (" + cardCount + ")");
       });
    });
observer.observe(document.body, { attributes: true, childList: true } );
