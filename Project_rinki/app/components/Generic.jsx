import axios from 'axios';

export default class Generic {
    HideMenu(e) {
        if($('.navbar-toggler').css('display') !='none'){
            $(".navbar-toggler").trigger( "click" );
        }
    }

    Search(e) {
        e.preventDefault();

        var output = "";
        var search = $("#header-search").val();

        if (search === undefined || search === "") 
        {
          // display error
          output += "<div class=\"alert alert-danger\" role=\"alert\">";
          output += "Please enter a search term...";
          output += "</div>";

          $(".modal-body").html(output);
          $("#launch-modal").click();
        }
        else 
        {
            var result;
            axios.get('/api/search?q=' + search)
            .then(response => {
                result = response.data;
                if (result === undefined || result.length === 0) {
                    output += "<div class=\"alert alert-danger\" role=\"alert\">";
                    output += "No word found in the database for " + search;
                    output += "</div>";
                } else {
                    output += "<div>";
                    output += result;
                    output += "</div>";
                }

                $(".modal-body").html(output);
                $("#launch-modal").click();
            })
            .catch(error => {
                console.log(error);
            });  
        }
      }
}