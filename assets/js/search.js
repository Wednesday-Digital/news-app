jQuery(document).ready(function ($) {
    let search = {
        init: function () {
            let resultDiv = $('#results');
            if (localStorage.getItem('newsAppItems') !== null) {
                search.savedResults = JSON.parse(localStorage.getItem('newsAppItems'));
                search.appendSavedResults();
            }
            $('#search').keyup(function () {
                let searchVal = $(this).val();
                // TODO find a more elegant way to stop heaps of API requests being fired before they're any use.
                if (searchVal.length >= 3) {
                    $.ajax({
                        url: apipath,
                        dataType: "json",
                        data: {
                            q: searchVal,
                            action: 'search'
                        }
                    }).done(function (data) {
                        search.removeResults();
                        $('#bookmark-divider').remove();
                        if (!data.success) {
                            if (data.error !== undefined) {
                                resultDiv.append('<li class = "news-error">' + data.error + '</li>');
                            } else {
                                resultDiv.append('<li class = "news-error">' + defaultError + '</li>');
                            }
                        } else {
                            for (let key in data.results) {
                                resultDiv.append('<li class = "section-header">' + key + '</li>');
                                $(data.results[key]).each(function () {
                                    resultDiv.append(
                                        '<li class = "news-item" data-id = "' + this.id + '" data-date = "' + this.date + '" data-section = "' + this.section + '" data-url = "' + this.url + '">' +
                                        '<input type = "checkbox" class = "bookmark" />' +
                                        '<a href = "' + this.url + '" target = "_blank">' + this.title + '</a> - ' + this.date +
                                        '</li>'
                                    );
                                })
                            }
                        }
                        search.appendSavedResults();
                    }).fail(function () {
                        search.removeResults();
                        $('#bookmark-divider').remove();
                        resultDiv.append('<li class = "news-error">' + defaultError + '</li>');
                    });
                }
            });
        },
        appendSavedResults: function () {
            let resultDiv = $('#results');
            resultDiv.append('<hr id = "bookmark-divider" />');
            resultDiv.append(search.savedResults);
            $('#results li').each(function () {
                if ($(this).hasClass('bookmarked')) {
                    $(this).find('.bookmark').prop('checked', true);
                }
            });
        },
        removeResults: function () {
            search.savedResults = [];
            localStorage.removeItem('newsAppItems');
            $('#results li').each(function () {
                if ($(this).find('.bookmark').is(':checked')) {
                    $(this).addClass('bookmarked');
                    search.savedResults.push($(this).prop('outerHTML'));
                }
                this.remove();
            });
            localStorage.setItem('newsAppItems', JSON.stringify(search.savedResults));
        },
        savedResults: []
    }
    search.init();
});
