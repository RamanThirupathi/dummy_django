/*$(function() {
$('#Jobinfo-Submit-form').on('submit', function(event){
    event.preventDefault();
    console.log("jobinfo  form submitted!")  // sanity check
    $('body').removeClass('loaded');
    $('#Depend-Submit-form-header').show();
    $('#Depend-Submit-form-header2').show();

    create_getjobinfo_post();
});


function getSelectedCheckbox( ) {
  var selcheckbox = [];
  var true_chk=0
  checkboxes = document.getElementsByClassName('allgroupcheck');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    if(checkboxes[i].checked == true)
    {
       selcheckbox.push(checkboxes[i].value);
       true_chk+=1
    }
  }
  return selcheckbox;
}



// AJAX for posting
function create_getjobinfo_post() {
    console.log("jobinfo create post is working!") // sanity check
    var List_of_Columns_val=getSelectedCheckbox( )
    console.log(List_of_Columns_val)
    $.ajax({
        url : "jresults/", // the endpoint
        type : "POST", // http method
        data : { FolderName : $('#id_FolderName').val(),
        JobName : $('#id_JobName').val(),
        FolderName : $('#id_FolderName').val(),
        HostName : $('#id_HostName').val(),
        MemberName : $('#id_MemberName').val(),
        App_Name : $('#id_App_Name').val(),
        Sub_App_Name : $('#id_Sub_App_Name').val(),
        List_of_Columns : ["JOBNAME", "APPLICATION", "SUB_APPLICATION", "RUN_AS", "TASKTYPE", "CMDLINE"],
        }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            //$('#post-text').val(''); // remove the value from the input
            console.log(json); // log the returned json to the console
            $('#Jobinfo-Submit-form-result').html(json);
            $( "#Scroll-link" ).trigger( "click" );
            console.log("success"); // another sanity check
            $('body').addClass('loaded');
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#Jobinfo-Submit-form-result').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        $('body').addClass('loaded');
        }
    });
  //  .done(function(response) {
   //         $('#JobResult').html(response);
   //                 });
};




















    // This function gets cookie with a given name
    /*function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');


    //The functions below will create a header with csrftoken


    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative. */
           // !(/^(\/\/|http:|https:).*/.test(url));
    /*}

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});

*/



