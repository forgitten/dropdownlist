var search = (function() {
    function update(response) {
        list = response.data
        var i = 0;
        if (list.length === 0) {
            $('.collection-header').html('No results found');
        } else {
            $('.collection-header').remove();
        }
        $('.collection-item').remove();

        console.log(list);
        for (i = 0; i < list.length; i++) {
            //var url = '{% url blog_view_post 999 %}'.replace (999, post_id);
            var j = 1;
            $('.collection').append('<li class="collection-item ' + j + '">' + list[i].username + '</li>');
            $('.collection-item.' + j).attr("id", list[i].username);
            j++;
        }
		
		$('.collection-item').hover(
                function() {
                    //console.log(this);
                    var idd = $(this).attr('id');
                    console.log('this->' + idd);
                }
            );
    }

    function performsearch(e) {
        e.preventDefault();

        $.ajax({
            url: '/account/search',
            type: 'GET',
            success: update,
            error: function(error) {
                console.log(error);
            }
        });
    }

    function init() {
        $('#id_search').keyup(performsearch);

    }
    return {
        init: init,
    };
})();
